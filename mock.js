const $ = (id) => document.getElementById(id);
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

const subject = new URLSearchParams(location.search).get("subject") === "crit" ? "crit" : "math";
const test = TESTS[subject];
const total = Math.max(test.total, test.questions.length);
const storeKey = `pacemock-v5:${subject}`;

const question = (i) => test.questions[i] || {
  q: `Question ${i + 1} will appear here.`,
  options: LETTERS.slice(0, 5).map((letter) => `Option ${letter}`),
};

// Writes text into an element, turning ^{...} into superscript
function setText(element, text) {
  element.replaceChildren(...text.split(/\^\{([^}]*)\}/).map((part, i) => {
    if (i % 2 === 0) return document.createTextNode(part);
    const sup = document.createElement("sup");
    sup.textContent = part;
    return sup;
  }));
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storeKey));
    if (saved) return saved;
  } catch (e) {}
  return { current: 0, answers: {}, marked: {} };
}

let state = loadState(); // saved on every change, so a refresh picks up where it stopped
let timer;

function save() {
  try { localStorage.setItem(storeKey, JSON.stringify(state)); } catch (e) {}
}

function clearSaved() {
  try { localStorage.removeItem(storeKey); } catch (e) {}
}

const answeredCount = () => Object.keys(state.answers).length;
const markedCount = () => Object.keys(state.marked).length;

function statusOf(i) {
  if (i === state.current) return "is-current";
  if (state.marked[i]) return "is-marked";
  return i in state.answers ? "is-answered" : "";
}

function renderGrid() {
  const names = { "is-current": "current", "is-marked": "marked", "is-answered": "answered", "": "not answered" };
  $("grid").replaceChildren(...Array.from({ length: total }, (_, i) => {
    const button = document.createElement("button");
    const status = statusOf(i);
    button.type = "button";
    button.className = `number ${status}`;
    button.textContent = i + 1;
    button.setAttribute("aria-label", `Question ${i + 1}, ${names[status]}`);
    button.addEventListener("click", () => goTo(i));
    return button;
  }));
}

function renderOptions(q) {
  // Long option lists go in two columns: A to D, then E to H
  $("options").classList.toggle("two-columns", q.options.length > 5);
  $("options").style.setProperty("--rows", Math.ceil(q.options.length / 2));
  $("options").replaceChildren(...q.options.map((text, i) => {
    const button = document.createElement("button");
    const letter = document.createElement("span");
    const label = document.createElement("span");
    const chosen = state.answers[state.current] === i;
    button.type = "button";
    button.className = chosen ? "option chosen" : "option";
    button.setAttribute("aria-pressed", chosen);
    letter.className = "letter";
    letter.textContent = LETTERS[i];
    setText(label, text);
    button.append(letter, label);
    button.addEventListener("click", () => choose(i));
    return button;
  }));
}

function renderTable(table) {
  const row = (cells, tag) => {
    const tr = document.createElement("tr");
    tr.append(...cells.map((text) => {
      const cell = document.createElement(tag);
      cell.textContent = text;
      return cell;
    }));
    return tr;
  };
  $("question-table").hidden = !table;
  $("question-table").replaceChildren();
  if (!table) return;
  const head = document.createElement("thead");
  const body = document.createElement("tbody");
  head.append(row(table.head, "th"));
  body.append(...table.rows.map((cells) => row(cells, "td")));
  $("question-table").append(head, body);
}

function render() {
  const q = question(state.current);
  $("progress").textContent = `${test.title} · Question ${state.current + 1} of ${total}`;
  $("passage").hidden = !q.passage;
  setText($("passage"), q.passage || "");
  renderTable(q.table);
  setText($("question-text"), q.q);
  // A graph belongs to the passage, so it goes above the question
  $("question-text")[q.passage ? "before" : "after"]($("question-image"));
  $("question-image").hidden = !q.image;
  if (q.image) $("question-image").src = q.image;
  $("previous").disabled = state.current === 0;
  $("next").disabled = state.current === total - 1;
  const marked = Boolean(state.marked[state.current]);
  $("bookmark").classList.toggle("on", marked);
  $("bookmark").setAttribute("aria-pressed", marked);
  renderOptions(q);
  renderGrid();
}

function renderSide() {
  const closed = Boolean(state.sideClosed);
  $("exam").classList.toggle("side-closed", closed);
  $("toggle-side").setAttribute("aria-expanded", !closed);
  $("toggle-side").setAttribute("aria-label", closed ? "Show question list" : "Hide question list");
}

function update() {
  save();
  render();
}

function goTo(i) {
  state.current = i;
  update();
}

function choose(i) {
  // Tapping the chosen answer again clears it
  if (state.answers[state.current] === i) delete state.answers[state.current];
  else state.answers[state.current] = i;
  update();
}

function toggleMark() {
  if (state.marked[state.current]) delete state.marked[state.current];
  else state.marked[state.current] = true;
  update();
}

function formatTime(ms) {
  const seconds = Math.max(0, Math.ceil(ms / 1000));
  const parts = [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60];
  return parts.map((n) => String(n).padStart(2, "0")).join(":");
}

function tick() {
  const left = state.endsAt - Date.now();
  $("time").textContent = formatTime(left);
  if (left <= 0) finish();
}

function runExam() {
  $("intro").hidden = true;
  $("exam").hidden = false;
  timer = setInterval(tick, 1000);
  tick();
  save();
}

function finish() {
  clearInterval(timer);
  clearSaved();
  if ($("confirm").open) $("confirm").close();

  const used = Math.min(test.minutes * 60000, test.minutes * 60000 - (state.endsAt - Date.now()));
  const rows = [
    ["Answered", `${answeredCount()} of ${total}`],
    ["Marked", markedCount()],
    ["Time used", formatTime(used)],
  ];
  const scored = test.questions.filter((q, i) => "answer" in q && state.answers[i] === q.answer).length;
  if (test.questions.length) rows.unshift(["Score", `${scored} of ${total}`]);

  $("results-subject").textContent = test.title;
  $("stats").replaceChildren(...rows.map(([name, value]) => {
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const detail = document.createElement("dd");
    term.textContent = name;
    detail.textContent = value;
    row.append(term, detail);
    return row;
  }));
  $("exam").hidden = true;
  $("results").hidden = false;
}

$("previous").addEventListener("click", () => goTo(state.current - 1));
$("next").addEventListener("click", () => goTo(state.current + 1));
$("bookmark").addEventListener("click", toggleMark);
setupThemeButton($("theme"));
$("toggle-side").addEventListener("click", () => {
  state.sideClosed = !state.sideClosed;
  save();
  renderSide();
});
$("finish").addEventListener("click", () => {
  $("confirm-text").textContent = `You've answered ${answeredCount()} of ${total} questions.`;
  $("confirm").showModal();
});
$("keep-going").addEventListener("click", () => $("confirm").close());
$("confirm-finish").addEventListener("click", finish);
$("begin").addEventListener("click", () => {
  state.endsAt = Date.now() + test.minutes * 60000;
  runExam();
});

$("intro-subject").textContent = `${test.title} · ${total} questions · ${test.minutes} minutes`;
render();
renderSide();
if (state.endsAt) runExam();
