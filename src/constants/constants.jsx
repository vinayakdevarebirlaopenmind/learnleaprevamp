import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LogoutIcon from "@mui/icons-material/Logout";
import VarunTulli from "../assets/image/varun-tuli.jpeg";
import Soumali from "../assets/image/Soumali Ghoshal - K12.jpeg";
import Santosh from "../assets/image/S.Santosh.jpeg";
//trending search
export const trendingSearches = [
  { id: 1, name: "Certificate Program for ECCEd", path: "/ecced-certificate" },
  { id: 2, name: "Diploma Program for ECCEd", path: "/ecced-diploma" },
  {
    id: 3,
    name: "Certificate Program for K12 Teachers",
    path: "/k12-certificate",
  },
  {
    id: 4,
    name: "Certificate Program for Leadership in Education",
    path: "/leadership-in-education",
  },
  { id: 5, name: "Burlington English Program", path: "/burlington-english" },
];

//links
export const menuItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 1, name: "My Cart", path: "/cart" },
  { id: 2, name: "My Wishlist", path: "/yourwishlist" },
  { id: 3, name: "Purchase History", path: "/purchase-history" },
  { id: 4, name: "About LearnLeap", path: "/aboutus" },
  // { id: 5, name: "Events", path: "/events" },
  { id: 6, name: "Enquire Now", path: "/enquireform" },
  { id: 7, name: "FAQs", path: "/faqs" },
  { id: 8, name: "Apply as instructor", path: "/applyasintructor" },
  { id: 9, name: "Privacy Policy", path: "/privacypolicy" },
  { id: 10, name: "Refund Policy", path: "/refundpolicy" },
];

//course cards
export const courses = [
  {
    id: 1,
    title: "Certificate Program for ECCEd",
    instructor: "Satwant Palekar, Priya Gopal",
    rating: 4.4,
    reviews: "9,070",
    price: 10000,
    oldPrice: "₹25,499",
    image:
      "https://birlalearnleap.com/media/cache/lg/26d796cb7beb9d6a953afc096d5501a689813933.jpg",
    route: "/ecced-certificate",
  },
  {
    id: 2,
    title: "Diploma Program for ECCEd",
    instructor: "Satwant Palekar, Priya Gopal",
    rating: 4.5,
    reviews: "153",
    price: 35000,
    oldPrice: "₹55,499",
    image:
      "https://birlalearnleap.com/media/cache/lg/449ebc4f2f7e15c2b1f06b0843bb23586612a9ee.jpg",
    route: "/ecced-diploma",
  },
  {
    id: 3,
    title: "Certificate Program for K12 Teachers",
    instructor: "Satwant Palekar, Priya Gopal",
    rating: 4.4,
    reviews: "128",
    price: 10000,
    oldPrice: "₹13,499",
    image:
      "https://birlalearnleap.com/media/cache/lg/55fca700a276414de12f141b89a54be87de8c6d9.jpg",
    route: "/k12-certificate",
  },
  {
    id: 4,
    title: "Certificate Program for Leadership in Education",
    instructor: "Satwant Palekar, Priya Gopal",
    rating: 4.3,
    reviews: "4,175",
    price: 20000,
    oldPrice: "₹35,499",
    image:
      "https://birlalearnleap.com/media/cache/lg/dfb1f9348970f0f137e261d5e9d0731b1382f36c.jpg",
    route: "/leadership-in-education",
  },
  {
    id: 5,
    title: "Burlington English Program",
    instructor: "Satwant Palekar, Priya Gopal",
    rating: 4.3,
    reviews: "4,175",
    price: 12000,
    oldPrice: "₹17,000",
    image:
      "https://birlalearnleap.com/media/cache/lg/af5102bc12187f2ef1056a01e79f85912785040c.jpg",
    route: "/burlington-english",
  },
];
export const trendingSearchesWithCourses = trendingSearches.map((search) => {
  const course = courses.find((course) => course.route === search.path);
  return { ...search, course };
});

//format to indian number
export function FormatIndianNumber(number) {
  return number.toLocaleString("en-IN");
}

//course module dummy data
export const modules = [
  {
    title: "Module 1: Introduction",
    details:
      "Learn about the basics of Generative AI, its history, and applications.",
  },
  {
    title: "Module 2: Understanding LLMs",
    details:
      "Explore large language models, their working, and real-world applications.",
  },
  {
    title: "Module 3: Prompt Engineering",
    details: "Learn the art of crafting effective prompts for AI systems.",
  },
  {
    title: "Module 4: Hands-on AI Projects",
    details:
      "Work on real-world Generative AI projects for practical experience.",
  },
  {
    title: "Module 5: Hands-on AI Projects",
    details:
      "Work on real-world Generative AI projects for practical experience.",
  },
  {
    title: "Module 6: Hands-on AI Projects",
    details:
      "Work on real-world Generative AI projects for practical experience.",
  },
  {
    title: "Module 7: Hands-on AI Projects",
    details:
      "Work on real-world Generative AI projects for practical experience.",
  },
  {
    title: "Module 8: Hands-on AI Projects",
    details:
      "Work on real-world Generative AI projects for practical experience.",
  },
  {
    title: "Module 9: Hands-on AI Projects",
    details:
      "Work on real-world Generative AI projects for practical experience.",
  },
  {
    title: "Module 10: Hands-on AI Projects",
    details:
      "Work on real-world Generative AI projects for practical experience.",
  },
];
export const leaderShipmodules = [
  {
    title:
      "Module 1: Mission ,Vision and context of school , policy and practice",
    details:
      "Effectively navigate complex decision-making scenarios, foster equitable learning environments",
  },
  {
    title: "Module 2: School Culture and Leadership Skills",
    details:
      "Education leaders to apply lessons and best practices from other sectors as well as to strategically think and manage change during crisis.",
  },
  {
    title: "Module 3: Business and Financial Management Skills",
    details:
      "Effectively understand and immerse in the nuances of school business administration, budgeting, marketing and gaining insights and competencies to run their own schools more effectively.",
  },
  {
    title: "Module 4: Data Driven Approach and SMART Goals for Schools",
    details:
      "Utilize data and create a data driven approach in all school processes effectively, leverage data in decision-making within school setting.",
  },
  {
    title: "Module 5: School Affiliation, SOPs and Policies",
    details:
      "Understand and Implement the school affiliation process, craft the SOPs and Policies of the school with the school in alignment with the affiliating body.",
  },
  {
    title: "Module 6: Technology in Education",
    details:
      "Digitization of the content ,integration of the technology in classrooms and teacher training with cyber security laws with safety and security of digital footprints.",
  },
];
export const diplomaeccedmodules = [
  {
    title: "Module 1: Introduction",
    details:
      "Understand and apply the core principles of early education aligned with national guidelines.",
  },
  {
    title: "Module 2: Child Development &amp; Psychology",
    details: "Understanding cognitive, emotional and social development.",
  },
  {
    title: "Module 3: Behavior Management and Modification",
    details:
      "Strategies for reinforcing positive behaviors effectively amongst the toddlers.",
  },
  {
    title: "Module 4: Bloom’s Taxonomy and Multiple Intelligence",
    details:
      "Structuring learning to build higher order thinking skills and teaching as per MI approaches.",
  },
  {
    title: "Module 5: Theories and Approaches",
    details:
      "Exploring key pedagogical philosophies like Montessori, Piaget, Reggio Emilia , Waldorf Steiner and Vygotsky.",
  },
  {
    title: "Module 6: Competency Based Curriculum and Neuroscience",
    details:
      "Shifting from rote learning to skill mastery and joy of learning.",
  },
  {
    title: "Module 7: Growth Mindset, Creative and Critical Thinking",
    details:
      "Encouraging resilience and a lifelong love for learning. Fostering innovation and problem-solving in young learners.",
  },
  {
    title: "Module 8: Numeracy Literacy and ICT in early years",
    details:
      "Building strong early Math and language skills and Leveraging technology for effective learning.",
  },
  {
    title: "Module 9: Separation Anxiety &amp; Sibling Rivalry",
    details: "Managing emotional transitions in children.",
  },
  {
    title: "Module 10: 21st-Century Skills &amp; Future-Ready Learning",
    details:
      "Coding for Kids – Introducing computational thinking early, Leveraging technology for interactive learning. Preparing children with skills for the future.",
  },
  {
    title: "Module 11: Classroom &amp; Child Safety",
    details:
      "Classroom Management strategies for an engaging and inclusive environment.",
  },
  {
    title: "Module 12: Rules &amp;amp; Discipline in and outside the classroom",
    details:
      "Handling Special Needs Children with inclusive teaching practices Child Safety measures for a secure learning space",
  },
];
export const certificateProgramEcced = [
  {
    title: "Module 1: ECCE for Foundational Stage and NCF",
    details:
      "Discover how to develop play-based, age-appropriate curriculum that adhere to the National Curriculum Framework (NCF).",
  },
  {
    title: "Module 2: Psychology of Children",
    details:
      "Learn about young children's social, emotional, and cognitive development to improve your ability to educate.",
  },
  {
    title: "Module 3: Management of Behaviour",
    details:
      "Create constructive methods to control classroom conduct and foster a polite learning atmosphere.",
  },
  {
    title: "Module 4: Bloom's Taxonomy",
    details:
      "Utilizing Bloom's Taxonomy framework, create learning objectives that promote higher-order thinking.",
  },
  {
    title: "Module 5: Approaches and Theories",
    details:
      "Examine fundamental educational theories that promote child-centred learning, such as Reggio Emilia and Montessori.",
  },
  {
    title: "Module 6: Active Learning",
    details:
      "Create interesting, practical learning opportunities that encourage inquiry and discovery.",
  },
  {
    title: "Module 7: Curriculum Based on Competencies",
    details:
      "Develop a curriculum that prioritizes real-world application and skill proficiency.",
  },
  {
    title: "Module 8: A Growth Mind-set",
    details:
      "Instil a growth mind-set in young students to promote resilience and a love of learning.",
  },
  {
    title: "Module 9: A Variety of Intelligences",
    details:
      "Howard Gardner's Multiple Intelligences theory can be used to identify and support a variety of learning styles.",
  },
  {
    title: "Module 10: Young Learners' Critical and Creative Thinking",
    details:
      "Engage in activities that foster critical and creative thinking to stimulate logic and imagination.",
  },
  {
    title: "Module 11: Interaction in the Classroom",
    details:
      "Create efficient communication strategies to interest and assist young students.",
  },
  {
    title: "Module 12: Classroom Administration",
    details:
      "Use doable tactics to keep your classroom inclusive and well-organized.",
  },
  {
    title: "Module 13: Guidelines for the Classroom and Beyond",
    details:
      "Establish clear guidelines to guarantee safe and polite conduct both within and outside of the classroom.",
  },
  {
    title: "Module 14: Basic Literacy and Numeracy",
    details:
      "Develop good reading and math abilities using interactive, play-based strategies.",
  },
  {
    title: "Module 15: LSRW (Listening, Speaking, Reading, Writing)",
    details:
      "Use interesting, developmentally appropriate activities to improve the fundamental language abilities.",
  },
  {
    title: "Module 16: The Project Method",
    details:
      "Encourage self-directed thinking through practical, group learning activities.",
  },
  {
    title: "Module 17: Songs and Tales",
    details:
      "Use music and storytelling to improve language acquisition and cross-cultural comprehension.",
  },
  {
    title: "Module 18: Managing Children with Special Needs",
    details:
      "To help and modify learning for kids with unique needs, understand inclusive strategies.",
  },
  {
    title: "Module 19: An Up-and-Coming Child",
    details:
      "Give them the tools they need to solve problems, work together, and be digitally literate.",
  },
  {
    title: "Module 20: Safety of Children",
    details:
      "Assure children's digital, emotional, and physical safety in all educational settings.",
  },
];
export const k12ProgramModule = [
  {
    title: "Module 1 : Understanding Student Development and Learning Styles",
    details:
      "Overview of child and adolescent development theories, including cognitive, social, and emotional development. Discussing the typical learning milestones and how they impact classroom behavior and learning. Exploration of different learning styles and intelligences (e.g., visual, auditory, kinaesthetic). Strategies for recognizing and accommodating diverse learning preferences in the classroom to enhance engagement and effectiveness.",
  },
  {
    title: "Module 2 : Building a Positive Classroom Culture",
    details:
      "Strategies for fostering a supportive and inclusive classroom environment, including techniques for creating a welcoming atmosphere, establishing positive teacher-student relationships, and promoting a growth mindset.",
  },
  {
    title: "Module 3 : Strategies for Effective Classroom Management",
    details:
      "Setting expectations and rules, communicating them effectively, modeling behavior, implementing positive reinforcement, and using preventative strategies to maintain classroom discipline.",
  },
  {
    title: "Module 4 : Techniques for Managing Disruptive Behavior",
    details:
      "Identifying triggers, using de-escalation techniques, applying consistent consequences, building positive teacher-student relationships, and making classroom environment adjustments to minimize disruptions.",
  },
  {
    title:
      "Module 5 : Understanding Differentiated Instruction and Its Importance",
    details:
      "Overview of differentiated instruction, its significance in personalized learning, and the role of ongoing assessment and feedback in instructional planning.",
  },
  {
    title:
      "Module 6 : Practical Strategies for Differentiating Instruction to Meet Diverse Student Needs",
    details:
      "Approaches such as differentiating content, process, and product, using flexible grouping, and ensuring continuous professional reflection and adjustments.",
  },
  {
    title:
      "Module 7 : Overview of Current Educational Technologies and Their Benefits",
    details:
      "Introduction to various categories of educational technologies and their benefits in enhancing learning experiences.",
  },
  {
    title:
      "Module 8 : Hands-On Practice with Technology Tools and Integrating Them into Lesson Plans",
    details:
      "Exploring digital tools, engaging in hands-on activities, and customizing content to integrate technology effectively into lesson planning.",
  },
  {
    title:
      "Module 9 : Effective Assessment Strategies and Creating Meaningful Assessments",
    details:
      "Understanding different types of assessments, their purposes, principles of effective assessment, and alignment with Bloom’s Taxonomy and the National Curriculum Framework (NCF).",
  },
  {
    title:
      "Module 10 : Providing Constructive Feedback and Using Assessment Data to Inform Instruction",
    details:
      "Key elements of constructive feedback, strategies for effective feedback delivery, steps to using assessment data effectively, and integration of feedback into instructional planning.",
  },
  {
    title:
      "Module 11 : Techniques for Increasing Student Engagement and Motivation",
    details:
      "Creating a positive learning environment, incorporating student interests, interactive and collaborative learning, goal-setting, self-assessment, movement breaks, and creative thinking activities.",
  },
  {
    title: "Module 12 : Active Learning Strategies",
    details:
      "Implementing interactive activities and strategies to make lessons more engaging, aligning with the National Curriculum Framework (NCF) and new pedagogical approaches.",
  },
  {
    title:
      "Module 13 : Understanding the Principles of Inclusive Education and Legal Requirements",
    details:
      "Principles of inclusive education, equity and access, diversity as a strength, high expectations for all students, collaboration, social-emotional learning (SEL), and legal requirements in India.",
  },
  {
    title:
      "Module 14 : Strategies for Creating an Inclusive Classroom Environment and Supporting Students with Diverse Needs",
    details:
      "Establishing an inclusive classroom culture, differentiating instruction, making accommodations and modifications, incorporating Universal Design for Learning (UDL), collaborating with specialists and families, and using assistive technology.",
  },
  {
    title:
      "Module 15 : The Benefits of Collaborative Learning and Strategies for Fostering Group Work",
    details:
      "Exploring the advantages of collaborative learning, techniques for fostering effective group work, and creating an inclusive environment for teamwork.",
  },
  {
    title:
      "Module 16 : Designing Collaborative Activities and Managing Group Dynamics",
    details:
      "Structuring collaborative activities, managing group dynamics, and providing examples of effective group-based learning strategies.",
  },
  {
    title: "Module 17 : Communication",
    details:
      "Effective communication techniques with students, parents, and colleagues to enhance collaboration and engagement.",
  },
  {
    title: "Module 18 : Relationship Management",
    details:
      "Handling difficult conversations, building positive relationships with stakeholders, and strategies for maintaining long-term professional relationships.",
  },
  {
    title: "Module 19 : Techniques for Reflective Teaching and Self-Assessment",
    details:
      "Understanding reflective teaching, self-assessment techniques, and integrating these practices into daily instructional routines.",
  },
  {
    title: "Module 20 : Wrap-Up and Action Planning",
    details:
      "Recap of key concepts, self-reflection exercises, developing an action plan, setting SMART goals, creating a timeline for implementation, and commitment to continuous professional growth.",
  },
];

export default k12ProgramModule;
export const BurlingtonProgramModule = [
  {
    title: "Module 1 : General English (Everyday & Advanced)",
    details:
      "Step-by-step language learning with practical conversation-based lessons.",
  },
  {
    title: "Module 2 : English for Specific Careers",
    details:
      "Specialized English courses tailored for different industries such as healthcare, business, IT, and tourism.",
  },
  {
    title: "Module 3 : Soft Skills & Career Readiness",
    details:
      "Training on workplace skills like professional communication, teamwork, and career pathway planning.",
  },
  {
    title: "Module 4 : Assessment & Proficiency Testing (VTest) ",
    details:
      "AI-driven online test evaluating listening, speaking, reading, and writing skills.",
  },
  {
    title: "Module 5 : Interactive & Adaptive Learning",
    details:
      "AI-powered personalized learning journeys based on individual proficiency levels.",
  },
  {
    title: "Module 6 : Inclusive & Blended Learning Approach",
    details:
      "A mix of traditional, digital, and AI-assisted methods for effective language acquisition.",
  },
];

//testimonial list homepage
export const testimonials = [
  {
    id: 1,
    name: " Soumali Ghoshal ",
    image: Soumali,
    status: "Verified Graduate",
    title: " K12 Teacher Training",
    description:
      "It was a wonderful experience.  I have learnt many new things from this K-12 Teacher Training program. The practical activities and case studies helped me to solidify learning and I make it applicable to the classroom immediately. This course helped me to understand students in a better way and the classroom management tricks helped me to create a positive learning environment among the students. The use of technology and multimedia in the classroom had increased students' understanding of the subject matter. Finally I must admit that I have gained a lot of confidence in my teaching skills. Thanks again to the whole team.",
  },
  {
    id: 2,
    name: "Varun Tuli",
    image: VarunTulli,
    status: "Verified Teacher",
    title: " K12 Teacher Training ",
    description:
      "Success story - A big thanks to the team of Birla LearnLeap for a phenomenal teaching course and that too so much helpful. I thank the teachers and mentors for constant help and assistance. The wisdom, skills that I got from here and the certificate will be a great help to me in my teaching career. I'm very much glad that I was a part of Birla LearnLeap k- 12 teaching course. Thank you Team Birla LearnLeap and K-12.",
  },
  {
    id: 3,
    name: "S. Santosh",
    image: Santosh,
    status: "Verified Graduate",
    title: "K12 Teacher Training ",
    description:
      "Success story - I enrolled in the Birla LearnLeap K12 Teacher Training Program with the goal of learning various strategies to enhance my teaching skills. Through the program, I had the opportunity to learn how to design lesson plans, including those tailored for students with differentiated skills. I also gained valuable insights into incorporating AI in learning, as well as strategies for engaging distracted minds and making the classroom more interactive and effective.",
  },
  {
    id: 4,
    name: "Ms. Janette Fernando",
    image:
      "https://birlalearnleap.com/media/cache/md/440d0edea73ba2af80190099c44fcfa58fe3c7c0.jpg",
    status: "Verified Graduate",
    title: "Leadership Course",
    description:
      "The Educational Leadership Course at Birla has profoundly transformed my approach to leadership. Through interactive lessons and insightful discussions on effective practices and various leadership styles, I’ve gained valuable tools to foster a collaborative and inclusive environment. The course has enhanced my understanding of how to inspire change and empower others, making me feel more prepared to lead with confidence in my school community. I now have a clearer vision for my leadership role and am excited to apply these skills to make a meaningful impact. I highly recommend this course to anyone seeking to grow as a leader in education!",
  },
  {
    id: 5,
    name: "Patrick Abrams",
    image:
      "https://birlalearnleap.com/media/cache/md/4b07778e38d98f19b192725e3c5091a7bb514c6b.png",
    status: "Verified Graduate",
    title: "Leadership Course",
    description:
      "Enrolling in the Educational Leadership Certificate program from LearnLeap was one of the best decisions I’ve made for my career. The valuable acumens I learned have helped me become a more effective leader and advance professionally. The curriculum was clear and easy to follow, and I felt supported every step of the way. I now feel better prepared to tackle challenges and inspire others. Ms. Priya, our facilitator, added so much value to the experience with her insightful guidance and constant encouragement. The placement assistance was an incredible bonus, playing a key role in helping me secure the job I was aiming for. I highly recommend this program to anyone eager to grow as a leader and make a meaningful impact in education!",
  },
];

// faq section
export const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive suite of digital solutions including web development, mobile app development, cloud services, and digital transformation consulting.",
  },
  {
    question: "How can I get started?",
    answer:
      "Getting started is easy! Simply click the contact button on this page, and our team will reach out to schedule a free consultation to discuss your needs.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing models tailored to your specific needs. This includes project-based pricing, hourly rates, and retainer options.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. Typically, small projects take 4-6 weeks, while larger projects can span 3-6 months.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages to ensure your solutions continue to perform optimally after launch.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with a wide range of modern technologies including React, Angular, Node.js, Python, AWS, and more.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with a wide range of modern technologies including React, Angular, Node.js, Python, AWS, and more.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with a wide range of modern technologies including React, Angular, Node.js, Python, AWS, and more.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with a wide range of modern technologies including React, Angular, Node.js, Python, AWS, and more.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with a wide range of modern technologies including React, Angular, Node.js, Python, AWS, and more.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with a wide range of modern technologies including React, Angular, Node.js, Python, AWS, and more.",
  },
];

export const profileDropdown = [
  {
    id: 1,
    title: "Profile",
    icon: <AssignmentIndIcon />,
    route: "/profile",
  },
  {
    id: 2,
    title: "Logout",
    icon: <LogoutIcon />,
    route: "/logout",
  },
];

// export const API_URL = "http://localhost:8080";
export const API_URL = "https://birlaedutech.in";
