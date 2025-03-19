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
  { id: 2, name: "Events", path: "/events" },
  { id: 3, name: "Enquire Now", path: "/enquireform" },
  { id: 4, name: "FAQs", path: "/faqs" },
];

//course cards
export const courses = [
  {
    id: 1,
    title: "Certificate Program for ECCEd",
    instructor: "Sandeep Pinto, R Shreya Ghoshal, Dr. Sunita George",
    rating: 4.4,
    reviews: "9,070",
    price: 10,
    oldPrice: "₹13,499",
    image:
      "https://birlalearnleap.com/media/cache/lg/26d796cb7beb9d6a953afc096d5501a689813933.jpg",
    route: "/ecced-certificate",
  },
  {
    id: 2,
    title: "Diploma Program for ECCEd",
    instructor: "Priya Gopal, Dr. Sunita George, Sandeep Pinto",
    rating: 4.5,
    reviews: "153",
    price: 35000,
    oldPrice: "₹40,999",
    image:
      "https://birlalearnleap.com/media/cache/lg/449ebc4f2f7e15c2b1f06b0843bb23586612a9ee.jpg",
    route: "/ecced-diploma",
  },
  {
    id: 3,
    title: "Certificate Program for K12 Teachers",
    instructor: "Priya Gopal, Dr. Sunita George",
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
    instructor: "Priya Gopal,  Sandeep Pinto",
    rating: 4.3,
    reviews: "4,175",
    price: 10000,
    oldPrice: "₹15,000",
    image:
      "https://birlalearnleap.com/media/cache/lg/dfb1f9348970f0f137e261d5e9d0731b1382f36c.jpg",
    route: "/leadership-in-education",
  },
  {
    id: 5,
    title: "Burlington English Program",
    instructor: "Priya Gopal,  Sandeep Pinto",
    rating: 4.3,
    reviews: "4,175",
    price: 12000,
    oldPrice: "₹17,000",
    image:
      "https://birlalearnleap.com/media/cache/lg/af5102bc12187f2ef1056a01e79f85912785040c.jpg",
    route: "/burlington-english",
  },
];

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
      "Success story - A big thanks to the team of Birla LearnLeap for a phenomenal teaching course and that too so much helpful. I thank the teachers and mentors for constant help and assistance. The wisdom, skills that I got from here and the certificate will be a great help to me in my teaching career. I'm very much glad that I was a part of Birla Learn leap k- 12 teaching course. Thank you Team Birla LearnLeap and K-12.",
  },

  {
    id: 3,
    name: "Jeanette Harmon",
    image:
      "https://6476867bca65513195636a27--gorgeous-dolphin-b58832.netlify.app/images/image-jeanette.jpg",
    status: "Verified Graduate",
    title: "An overall wonderful and rewarding experience",
    description:
      "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
  },
  {
    id: 4,
    name: "Patrick Abrams",
    image:
      "https://6476867bca65513195636a27--gorgeous-dolphin-b58832.netlify.app/images/image-patrick.jpg",
    status: "Verified Graduate",
    title:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    description:
      "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
  },
  {
    id: 5,
    name: "S. Santosh",
    image: Santosh,
    status: "Verified Graduate",
    title: "K12 Teacher Training ",
    description:
      "Success story - I enrolled in the Birla Learn Leap K12 Teacher Training Program with the goal of learning various strategies to enhance my teaching skills. Through the program, I had the opportunity to learn how to design lesson plans, including those tailored for students with differentiated skills. I also gained valuable insights into incorporating AI in learning, as well as strategies for engaging distracted minds and making the classroom more interactive and effective.",
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
