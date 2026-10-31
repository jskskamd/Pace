// The mock tests. Each question looks like this:
//
//   {
//     q: "Question text",                      // ^{...} makes superscript, as in x^{2}
//     image: "images/q1.png",                  // optional, for questions with a diagram
//     options: ["...", "...", "..."],          // 2 to 8 options, shown as A to H
//     answer: 2,                               // correct option: 0 = A, 1 = B, 2 = C and so on
//   },
const TESTS = {
  math: {
    title: "Mathematics",
    total: 30,
    minutes: 60,
    questions: [
      {
        q: "Which of the following statements are true?\n1) 8√15 < 15√8\n2) There are 6 primes between 30 and 50.\n3) 40% of 64 is less than 60% of 45.",
        options: ["1 only", "2 only", "3 only", "1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3", "None of them"],
        answer: 4,
      },
      {
        q: "A metal sphere of radius 3 cm is melted and recast into identical smaller spheres of radius 1 cm. No material is lost. How many smaller spheres are made?",
        options: ["9", "18", "27", "36", "81"],
        answer: 2,
      },
      {
        q: "A tank is initially 3/5 full. After 24 litres are removed, it is 7/20 full. What is the tank's capacity?",
        options: ["80 L", "90 L", "96 L", "100 L", "120 L"],
        answer: 2,
      },
      {
        q: "Simplify (√75 − √12)^{2}.",
        options: ["9", "18", "21", "24", "27"],
        answer: 4,
      },
      {
        q: "A rectangle has length 12.6 cm and width 4.8 cm, each measured to the nearest 0.1 cm. Find the lower bound for its perimeter.",
        options: ["34.6 cm", "34.7 cm", "34.8 cm", "34.9 cm", "35.0 cm"],
        answer: 0,
      },
      {
        q: "Evaluate (4.8×10^{7})(3.5×10^{−4}), giving your answer in standard form.",
        options: ["1.68×10^{2}", "1.68×10^{3}", "1.68×10^{4}", "1.68×10^{5}", "1.68×10^{6}"],
        answer: 2,
      },
      {
        q: "If 9^{x} = 27^{x−1}, find x.",
        options: ["1", "2", "3", "4", "5"],
        answer: 2,
      },
      {
        q: "The ratio of A to B is 5:7. If 8 is added to A and 4 is subtracted from B, the two amounts become equal. Find A + B initially.",
        options: ["48", "60", "72", "84", "96"],
        answer: 2,
      },
      {
        q: "The cost of a product was increased by 15% and then increased by 15%. By what percentage should the cost have been increased once, in order to produce the same effect as these two successive increases?",
        options: ["22.25%", "25%", "27.75%", "30%", "32.25%", "35%", "37.5%", "40%"],
        answer: 4,
      },
      {
        q: "y is directly proportional to x and inversely proportional to z^{2}. When x = 6 and z = 2, y = 15. Find y when x = 10 and z = 5.",
        options: ["2", "3", "4", "5", "6"],
        answer: 2,
      },
      {
        q: "Two similar polygons have perimeters 24 cm and 40 cm. The area of the smaller polygon is 54 cm^{2}. Find the area of the larger polygon.",
        options: ["90 cm^{2}", "120 cm^{2}", "135 cm^{2}", "144 cm^{2}", "150 cm^{2}"],
        answer: 4,
      },
      {
        q: "A 20 L solution contains 30% acid. How many litres of pure acid must be added to make the mixture 50% acid?",
        options: ["6", "7", "8", "9", "10"],
        answer: 2,
      },
      {
        q: "Simplify (22x^{2} − 49x − 15) / (2x^{2} + x − 15).",
        options: ["(11x + 3)/(x + 3)", "(11x − 1)/(x + 3)", "(11x + 1)/(x − 3)", "(2x − 5)/(x − 3)", "(2x − 5)/(x + 3)", "(2x + 5)/(x − 3)", "(2x + 5)/(x + 3)", "(2x − 7)/(x − 3)"],
        answer: 0,
      },
      {
        q: "The equation x^{2} − px + 18 = 0 has two positive integer roots whose difference is 3. Find p.",
        options: ["7", "8", "9", "10", "11"],
        answer: 2,
      },
      {
        q: "The equation (2x − 3)^{2} = x + 10 has two roots p and q, where p > q. Find 4(p − q).",
        options: ["√185/4", "√185/2", "13", "√185", "√153", "√137", "2√185", "4√185"],
        answer: 3,
      },
      {
        q: "In the diagram, all measurements are in metres. The perimeter of the triangle is 56 m. The area of the triangle is A m^{2}. Work out the value of A.",
        image: "images/q16.png",
        options: ["62", "68", "76", "74", "82", "84", "90", "78"],
        answer: 5,
      },
      {
        q: "Given 3x − 2y = 7 and 2x + 3y = 4, find the value of 13x.",
        options: ["21", "25", "27", "29", "31"],
        answer: 3,
      },
      {
        q: "The first three terms in an arithmetic sequence are 2, 3q^{2}, q, ... Given that the first three terms are all positive, find the fourteenth term in the sequence.",
        options: ["−15", "−32/9", "−20/3", "200/3", "−24", "−12", "−25/3", "3"],
        answer: 2,
      },
      {
        q: "Solve 4^{x+1} = 8^{2x−1}.",
        options: ["1", "5/4", "3/2", "2", "5/2"],
        answer: 1,
      },
      {
        q: "Solve (2x − 1)/3 > (x + 4)/2.",
        options: ["x > 11", "x > 14", "x < 14", "x < 11", "x ≥ 14"],
        answer: 1,
      },
      {
        q: "The interior angles of a pentagon are in the ratio 2:3:4:5:6. Find its largest interior angle.",
        options: ["135°", "144°", "150°", "162°", "168°"],
        answer: 3,
      },
      {
        q: "ABCD is a trapezoid with AB parallel to DC. Using the information in the diagram, find the length DC.",
        image: "images/q22.png",
        options: ["8", "4 + 2√3", "4 + 4√3", "10", "12", "6", "6 + 2√3", "6 + √3"],
        answer: 0,
      },
      {
        q: "A, B and C are points on the circle, centre O. AB and OC intersect at P. Find the value of w.",
        image: "images/q23.png",
        options: ["22.5", "46", "83", "65", "32", "53", "73", "55"],
        answer: 6,
      },
      {
        q: "In a right triangle, tan θ = 3/4 and the hypotenuse is 20 cm. Find the side opposite θ.",
        options: ["10 cm", "11 cm", "12 cm", "15 cm", "16 cm"],
        answer: 2,
      },
      {
        q: "A sector of radius 9 cm has arc length 6π cm. Find its central angle in degrees.",
        options: ["100°", "110°", "120°", "130°", "140°"],
        answer: 2,
      },
      {
        q: "Find the area of triangle ABC.",
        image: "images/q26.png",
        options: ["75", "75√3", "75√3/2", "225√3/2", "225/2", "25√3", "225/4", "75/2"],
        answer: 2,
      },
      {
        q: "Town B is 12 km due east of A. Town C is 5 km due north of B. Find the bearing of C from A to the nearest degree.",
        options: ["023°", "067°", "113°", "157°", "337°"],
        answer: 1,
      },
      {
        q: "Given a = (2, −3) and b = (−4, 1), find the magnitude of 2a + 3b.",
        options: ["√65", "√73", "√85", "√97", "13"],
        answer: 1,
      },
      {
        q: "Two similar right-angled triangles are joined to form a quadrilateral, as shown. What is the area of the quadrilateral?",
        image: "images/q29.png",
        options: ["12.3", "13.2", "15.0", "18.8", "27.9", "17.7"],
        answer: 5,
      },
      {
        q: "For 0° ≤ x ≤ 360°, how many solutions does 2 sin x = cos^{2}x have?",
        options: ["0", "1", "2", "3", "4"],
        answer: 2,
      },
    ],
  },
  crit: {
    title: "Critical Thinking & PS",
    total: 30,
    minutes: 60,
    questions: [],
  },
};
