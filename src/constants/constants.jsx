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
    instructor: "Sandeep Pinto, RShreya Ghoshal, Dr. Sunita George",
    rating: 4.4,
    reviews: "9,070",
    price: 10000,
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
    name: "Daniel Clifford",
    image:
      "https://gorgeous-dolphin-b58832.netlify.app/images/image-daniel.jpg",
    status: "Verified Graduate",
    title:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    description:
      "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
  },
  {
    id: 2,
    name: "Jonathan Walters",
    image:
      "https://6476867bca65513195636a27--gorgeous-dolphin-b58832.netlify.app/images/image-jonathan.jpg",
    status: "Verified Graduate",
    title: "The team was very supportive and kept me motivated",
    description:
      "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
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
    name: "Kira Whittle",
    image:
      "https://6476867bca65513195636a27--gorgeous-dolphin-b58832.netlify.app/images/image-kira.jpg",
    status: "Verified Graduate",
    title: "Such a life-changing experience. Highly recommended!",
    description:
      "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
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
