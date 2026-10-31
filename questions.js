// The mock tests. Each question looks like this:
//
//   {
//     passage: "Text to read first",           // optional, shown above the question
//     table: { head: [...], rows: [[...]] },   // optional, shown after the passage
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
    questions: [
      {
        passage: "Sometimes poverty is defined in relation to average income. For example, people may be said to be poor if their income is less than 60 per cent of the average income for the population. This is not a legitimate definition, because it is a measure of inequality rather than poverty. This is obvious if we consider the consequences of using the definition. It means that a huge pay rise for middle managers automatically throws some people into poverty, even though their income has not changed. On the other hand, the definition implies that in a society where almost everyone is starving, no one is poor.",
        q: "Which of the following best expresses the main conclusion of the above argument?",
        options: ["Having a relatively low income is not the same as being poor.", "It is impossible to find an appropriate definition of poverty.", "It is wrong to define poverty in relation to average income.", "A huge pay rise for middle managers makes other people poor.", "There is no inequality in a society where most people are starving."],
        answer: 2,
      },
      {
        passage: "A child's bus fare is cheaper than the adult fare but is more than half the adult fare. The total cost of a single journey for an adult and two children is £1.20. Adult fares are all multiples of 10 p.",
        q: "What is the adult fare?",
        options: ["30 p", "40 p", "50 p", "60 p", "70 p"],
        answer: 2,
      },
      {
        passage: "A town library plans to replace its printed overdue notices with messages sent only through its phone app. Every current borrower owns a smartphone. App messages cost the library less than printed notices, and the saved money would buy extra books. The committee therefore argues that the change will save money without reducing borrowers' opportunity to learn that their books are overdue. Owning a phone is common even among people who seldom use it to read library news, but the committee regards this as irrelevant.",
        q: "Which one of the following is an underlying assumption of the argument?",
        options: ["Borrowers prefer buying books to paying overdue charges.", "Every borrower visits the library at least once a month.", "The app will prevent books from becoming overdue.", "All borrowers will be able to access the overdue notices through the app.", "Printing is the library's largest expense."],
        answer: 3,
      },
      {
        passage: "A volunteer needs a projector with brightness of at least 3000 units, mass no greater than 2.5 kg and a daily hire price no greater than £45. Brightness, mass and prices are shown below. The volunteer will choose the qualifying projector with the lowest daily price.",
        table: {
          head: ["Model", "Brightness", "Mass (kg)", "Hire/day", "Warranty (years)"],
          rows: [["P", "2800", "2.0", "£30", "3"], ["Q", "3500", "2.7", "£39", "5"], ["R", "3200", "2.4", "£44", "2"], ["S", "3000", "2.5", "£42", "1"], ["T", "4000", "2.2", "£48", "4"]],
        },
        q: "Which projector should be chosen?",
        options: ["P", "Q", "R", "S", "T"],
        answer: 3,
      },
      {
        passage: "The effect of shortening degree courses at universities from three years to two would be that students would have two-thirds as much time to think about their subject. The result would be graduates whose understanding of their subject was shallower and whose intellectual development was much less extended. Any measure that leads to a lowering of the quality of graduates should be resisted by universities.",
        q: "Which one of the following conclusions can reliably be drawn from the above passage?",
        options: ["University graduates at present have an in-depth understanding of their subject.", "Universities should oppose the shortening of degree courses to two years.", "Universities are not proposing to reduce the length of degree courses to two years.", "Students should oppose moves by universities to shorten degree courses.", "Universities should adopt more rigorous standards for the award of degrees."],
        answer: 1,
      },
      {
        passage: "The petrol tank of Jenny's car holds 50 litres of petrol. A warning light comes on when only 5 litres are left. She always fills it as soon as she can after the warning light comes on. The car travels 100 km on 8 litres of petrol. Last time she put petrol in, which she was able to do immediately after the light came on, she only had $6 with her so she spent it all on fuel at 60c per litre. She then drove 50 km and saw a new garage offering petrol at 50c per litre - an offer too good to miss. She filled the tank completely and paid with her credit card.",
        q: "How much did it cost?",
        options: ["$15.50", "$17.50", "$19.50", "$22.50", "$24.50"],
        answer: 2,
      },
      {
        passage: "A college introduced optional online revision sessions last term. Students who attended at least four sessions scored, on average, ten marks more in the final examination than students who attended none. Both groups sat the same paper. The college director concludes that attending the sessions improves examination performance and proposes making them compulsory. She dismisses the possibility that the difference simply reflects who chose to attend, because the sessions were open to everyone.",
        q: "Which one of the following, if true, most weakens the argument?",
        options: ["The sessions used examples from the course syllabus.", "Some non-attenders passed the examination.", "The final examination lasted two hours.", "The sessions could accommodate all students.", "Before the sessions began, attenders already scored ten marks more on a comparable test."],
        answer: 4,
      },
      {
        passage: "A maintenance team paints both edges of a 240 m path with continuous lines and paints six symbols. One litre paints 30 m of continuous line; each symbol needs 0.4 litres. Paint is sold only in 4-litre tins. No paint is wasted and there is none in stock.",
        q: "What is the minimum number of tins required?",
        options: ["5", "4", "6", "7", "8"],
        answer: 0,
      },
      {
        passage: "If drivers were made to pay for road use according to the amount of time they spent on the road, they would drive more dangerously. Experiments were conducted with volunteers using a driving simulator. In the first experiment, the volunteers were charged for time spent driving below 10 mph in order to see how people coped with trying to avoid congestion. In the second experiment, they were charged for the time spent in a particular area. The results were alarming. The volunteers in the first experiment jumped many red lights in an attempt to keep their speed up. Those in the second frequently broke the speed limit, and overtook in dangerous situations. In the interests of road safety, we should not introduce such payment schemes.",
        q: "Which one of the following is an underlying assumption of the above argument?",
        options: ["Driving simulators are a reliable guide to real-life driving.", "We need to do more experiments on schemes of payment for road use.", "More people should practise their driving skills using a simulator.", "Schemes involving payment for road use will not solve the problem of road congestion.", "Road congestion could be solved in ways other than payment for road-use schemes."],
        answer: 0,
      },
      {
        passage: "Splashford Swimming Pool charges £2 per session for adults and £1 for children. Also available is a Family Swimcard. At a cost of £50, the Family Swimcard allows unlimited use of the pool for one year for 2 adults and up to 3 children. For larger families, every additional child must pay half the children's rate each time. Mr and Mrs Teal and their 4 children are keen swimmers. They used their Swimcard when the family went swimming 40 times last year.",
        q: "How much did the Swimcard save the Teal family last year?",
        options: ["£50", "£190", "£230", "£250", "£270"],
        answer: 3,
      },
      {
        passage: "A local council's new website records complaints about missed rubbish collections. In its first month, 120 complaints were submitted, compared with 80 written complaints in the month before the website opened. The council leader says this proves the collection service has become less reliable. She adds that a complaint is a complaint, whether submitted on paper or online, so the change in reporting method cannot explain the rise. No figures on the number of missed collections have been collected.",
        q: "Which one of the following best identifies the flaw in the argument?",
        options: ["It assumes that all residents have rubbish collected on the same day.", "It overlooks the possibility that an easier reporting method increases complaints without increasing missed collections.", "It confuses the cost of running the website with the cost of collecting rubbish.", "It fails to prove that every complaint is dishonest.", "It assumes a reliable service receives no complaints."],
        answer: 1,
      },
      {
        passage: "A worker must reach the office by 09:00. Walking from home to the bus stop takes 8 minutes; walking from Central to the office takes 12 minutes. The worker must be at the stop at least 2 minutes before departure. Services run exactly as shown.",
        table: {
          head: ["Service", "Departs stop", "Arrives Central", "Seats"],
          rows: [["P", "07:50", "08:28", "40"], ["Q", "08:00", "08:40", "50"], ["R", "08:10", "08:47", "35"], ["S", "08:15", "08:50", "60"], ["T", "08:25", "09:02", "45"]],
        },
        q: "What is the latest time the worker can leave home?",
        options: ["07:55", "08:00", "08:03", "08:08", "08:13"],
        answer: 1,
      },
      {
        passage: "Every archive room with an original manuscript has controlled humidity. Room J does not have controlled humidity. Therefore Room J does not contain an original manuscript.",
        q: "Which one of the following most closely parallels the reasoning?",
        options: ["Every trained guide has a badge. Lina has a badge, so Lina is a trained guide.", "Every refrigerated parcel is labelled. This parcel is not refrigerated, so it is not labelled.", "Some members have keys. Omar is a member, so Omar has a key.", "Every licensed boat has a registration number. This boat has no registration number, so it is not licensed.", "Every open shop has its lights on. This shop is open, so its lights are on."],
        answer: 3,
      },
      {
        passage: "A display board measures 180 cm by 120 cm. Photographs measure 30 cm by 20 cm. All photographs are placed in the same orientation, with the 30 cm side along the 180 cm side, with no gaps or overlaps. The number needed is found by dividing along each side and multiplying: (180/30) × (120/20).",
        q: "Which calculation has the same structure?",
        options: ["Finding the cost of a 6 m by 4 m carpet at £5 per square metre.", "Finding how many 2 m lengths can be cut from a 24 m rope.", "Finding how many 40 cm by 25 cm trays cover a 200 cm by 100 cm shelf in a fixed orientation.", "Finding the distance travelled in 3 hours at 60 km/h.", "Finding the volume of a 4 cm by 5 cm by 6 cm box."],
        answer: 2,
      },
      {
        passage: "A museum accidentally sent visitors an email promising free entry on Saturday. The offer was approved by an employee who was not authorised to set prices. Nevertheless, the museum should honour it for people who made plans in reliance on the email. When an organisation's own mistake leads people reasonably to rely on a clear promise, the organisation should bear the resulting cost rather than withdraw the promise.",
        q: "Which one of the following best illustrates the principle used in the argument?",
        options: ["A hotel honours an incorrectly advertised room price for customers who booked in reasonable reliance on its advertisement.", "A shop refunds a customer who dislikes a correctly described product.", "An airline lowers its prices when a competitor lowers theirs.", "A theatre cancels a performance because its lead actor is ill.", "A club rejects a discount request that it has never offered."],
        answer: 0,
      },
      {
        passage: "Two inspection lights flash together at 08:00. One then flashes every 18 seconds and the other every 24 seconds, continuing without interruption.",
        q: "How many times do they flash together after 08:00 and up to and including 08:06?",
        options: ["3", "4", "6", "8", "5"],
        answer: 4,
      },
      {
        passage: "Every grant application funded this year was submitted before the deadline and reviewed by two independent assessors. Some applications submitted before the deadline were not funded. No application reviewed by only one assessor was funded. Application R was submitted before the deadline and was reviewed by exactly one assessor. Application S was funded, but nothing else about S is stated.",
        q: "Which one of the following conclusions is best supported by the passage?",
        options: ["R was rejected because its subject was unsuitable.", "Every application reviewed by two assessors was funded.", "R was not funded and S was reviewed by two independent assessors.", "S was submitted later than R.", "Every unfunded application missed the deadline."],
        answer: 2,
      },
      {
        passage: "The graph shows a workshop's output over five days. Every item produced on Tuesday, Thursday and Friday was inspected. On Monday and Wednesday exactly half were inspected. No item was counted more than once.",
        image: "images/crit-q18.svg",
        q: "How many items were inspected in total?",
        options: ["140", "160", "190", "200", "240"],
        answer: 2,
      },
      {
        passage: "A supermarket will replace disposable produce bags with reusable bags sold at cost. The manager claims this will reduce the total amount of plastic used for produce bags over the next year. Each reusable bag contains ten times as much plastic as a disposable one. The manager says customers will keep bringing reusable bags back, but has no evidence yet about how often they will do so. Assume that the same amount of produce will be sold under either policy.",
        q: "Which one of the following, if true, most strengthens the argument?",
        options: ["Reusable bags are available in several colours.", "In a representative year-long trial, each reusable bag purchased replaced an average of thirty disposable bags.", "The supermarket already recycles cardboard boxes.", "Some customers prefer to buy loose vegetables.", "The reusable bags cost more to manufacture than disposable bags."],
        answer: 1,
      },
      {
        passage: "A solid rectangular block is made from 1 cm cubes. It is 5 cm long, 4 cm wide and 3 cm high. The outside of the assembled block, including its bottom, is painted. The block is then separated into its cubes.",
        q: "How many cubes have paint on exactly two faces?",
        options: ["12", "16", "20", "24", "28"],
        answer: 3,
      },
      {
        passage: "A city wants to reduce the number of cars entering its centre at peak time. It proposes free bus travel during that period, without changing routes or service frequency. A survey of drivers found that many would like to save money on their journeys. On that basis, the transport committee predicts that making buses free will persuade at least some current peak-time drivers to use buses instead. It has not investigated the particular journeys these drivers make.",
        q: "Which one of the following is an underlying assumption of the argument?",
        options: ["At least some current peak-time drivers who want to save money could use the existing bus services for their journeys.", "Every driver regards money as more important than travel time.", "Free buses would eliminate all traffic congestion.", "No current bus passenger owns a car.", "Bus drivers support the proposal."],
        answer: 0,
      },
      {
        passage: "A youth group is choosing one of five halls for a single two-hour booking. It needs seating for at least 75 people, wheelchair access and permission to bring its own food. Charges are per hour and there are no other fees.",
        table: {
          head: ["Hall", "Seats", "Wheelchair access", "Own food", "£/hour"],
          rows: [["A", "70", "Yes", "Yes", "35"], ["B", "90", "No", "Yes", "40"], ["C", "100", "Yes", "No", "45"], ["D", "80", "Yes", "Yes", "55"], ["E", "120", "Yes", "Yes", "60"]],
        },
        q: "What is the lowest total booking cost that meets all the requirements?",
        options: ["£70", "£80", "£90", "£100", "£110"],
        answer: 4,
      },
      {
        passage: "A factory installed a new ventilation system in January. Recorded worker absences fell by 20% in the following three months compared with the same three months a year earlier. The owner concludes that the ventilation system caused the reduction. Staffing numbers, working hours and the way absences were recorded were unchanged. The owner says that, since the comparison uses the same months, seasonal illness cannot be an alternative explanation.",
        q: "Which one of the following, if true, most weakens the argument?",
        options: ["The ventilation system also reduced odours in the building.", "The factory produces the same goods as last year.", "Some workers had no absences in either period.", "Nearby factories with no ventilation changes experienced the same 20% fall in absences over those periods.", "The new system uses less electricity than the old one."],
        answer: 3,
      },
      {
        passage: "A bicycle-hire service charges £6 for the first hour or part of it, then £2 for each additional hour or part of it. Hiring a bicycle for 2 hours 10 minutes costs £10.",
        q: "Which one of the following uses the same charging structure?",
        options: ["A café charges £6 per meal and £2 per drink.", "A shop takes £2 off a £6 item for every hour of a sale.", "A parcel service charges £6 for the first kilogram or part of it, then £2 for each additional kilogram or part of it.", "A car park charges £6 for every complete hour and nothing for incomplete hours.", "A membership costs £6, with every visit costing £2 including the first."],
        answer: 2,
      },
      {
        passage: "All parcels sent by the express service are tracked. This parcel is tracked, so it must have been sent by the express service. The sender did not keep the receipt, but that does not matter: tracking is exactly what makes the express service different from untracked delivery. We therefore know which service was used even without a record of the purchase.",
        q: "Which one of the following best identifies the flaw in the argument?",
        options: ["It assumes that the sender still possesses the parcel.", "It fails to consider that other delivery services may also track parcels.", "It assumes that express parcels always arrive on time.", "It relies on the cost of a service to determine its speed.", "It treats the absence of a receipt as proof that the parcel was not sent."],
        answer: 1,
      },
      {
        passage: "A printer produces 24 identical booklets in 6 minutes. It then stops for 3 minutes to reload paper after every batch of 24 booklets. Each batch must finish before the next begins, and printing speed is constant. The printer starts loaded at 10:00.",
        q: "At what time will the 100th booklet finish printing?",
        options: ["10:25", "10:31", "10:34", "10:37", "10:40"],
        answer: 3,
      },
      {
        passage: "The council should keep a small reserve of printed maps even after it launches its navigation app. Most visitors will probably prefer the app, and updating it will be cheaper than reprinting maps. Nevertheless, visitors sometimes arrive with a flat phone battery or without a compatible device. These visitors still need to find essential services. A limited supply of printed maps would provide that access at a modest cost, without preventing the council from moving most of its information online.",
        q: "Which one of the following best expresses the main conclusion of the argument?",
        options: ["Most visitors will prefer the navigation app.", "Updating an app costs less than printing maps.", "Every visitor should be required to carry a paper map.", "The council should abandon its navigation app.", "The council should retain a limited supply of printed maps."],
        answer: 4,
      },
      {
        passage: "A sports club has 80 members, of whom 25% are juniors. Ten adults then leave and ten new juniors join. No other membership changes occur.",
        q: "What percentage of the club's members are now juniors?",
        options: ["30%", "37.5%", "40%", "42.5%", "50%"],
        answer: 1,
      },
      {
        passage: "A school should allow pupils to revise their project plans after receiving comments on a first draft. Some teachers object that this makes the final work less independent. Yet the purpose of the project is to teach pupils to evaluate and improve an idea, rather than merely record their first attempt. Comments can identify weaknesses without supplying a solution, leaving pupils to decide how to respond. Requiring a brief explanation of each revision would also show whether the pupils had understood the advice.",
        q: "Which one of the following best expresses the main conclusion of the argument?",
        options: ["Teachers should write final project plans for pupils.", "Pupils should have an opportunity to revise their plans after feedback.", "All teacher comments reduce pupils' independence.", "First drafts should receive the highest marks.", "Pupils always understand feedback without explanation."],
        answer: 1,
      },
      {
        passage: "A family wants a return ferry trip on the same day. They will arrive at the mainland terminal at 09:10 and must be there at least 15 minutes before departure. The crossing takes 40 minutes in either direction. They need at least 3 hours on the island, measured from arrival to departure. They must be back at the mainland by 15:00. The table lists all sailings that day.",
        table: {
          head: ["Direction", "Departures"],
          rows: [["Mainland to island", "09:00, 09:30, 10:00, 10:30, 11:00"], ["Island to mainland", "12:30, 13:20, 14:10, 14:40, 15:20"]],
        },
        q: "What is the latest outward departure they can use?",
        options: ["09:00", "09:30", "10:00", "10:30", "11:00"],
        answer: 3,
      },
    ],
  },
};
