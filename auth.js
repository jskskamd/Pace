const db = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// Turns the top bar's Log in link into Log out once someone is signed in
async function setupAccountLink(link) {
  if (!db) return false;
  const { data } = await db.auth.getSession();
  if (!data.session) return false;
  link.textContent = "Log out";
  link.addEventListener("click", async (e) => {
    e.preventDefault();
    await db.auth.signOut();
    location.reload();
  });
  return true;
}
