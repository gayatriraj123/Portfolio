import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project_2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `     I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. i am a fresherI & have work with a variety of technologies, including React, Next.js, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "Jun 2024 - Jul 2024",
    role: "Web Developer",
    company: "Lets Grow More",
    description: `Developing web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Utilized Git for version control and collaborated on code reviews to maintain code quality.Enhanced application performance through optimization techniques, resulting in a 15% reduction in load time.`,
    technologies: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "College Campus automation ",
    image: project1,
    description:" Developed a comprehensive College Campus Automation system integrating modern web technologies for seamless campus operations. Utilizing the MERN stack for robust development, TailwindCSS for responsive design, and Redux for state management, our platform aims to simplify tasks such as class scheduling, attendance tracking, and resource allocation. This ongoing group project aims to streamline various campus processes such as student enrollment, course management, and administrative tasks.",
    technologies: ["MongoDb","Express","Nodejs","React", "TailwindCSS","Redux "],
  },
  {
    title: "E-Commerce Platfform ",
    image: project2,
    description:" The developing an e-commerce platform is to build a robust and user-friendly online marketplace where businesses can efficiently showcase Top items and sell their products. It aims to streamline the management of products, orders, and user accounts for both administrators and customers, including features like product catalog management, order processing, and user account management.",
    technologies: ["MongoDb","Express","Nodejs","React "],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};


export const EDUCATION = [
  {
    year: "2021 - 2024",
    degree: "Bachelor of Engineering in Electronics and Telecommunication Engineering",
    institution: "Savitribai Phule Pune University",
    description: "CGPA: 8.28",
  },
  {
    year: "2018 - 2021",
    degree: "Diploma in Computer Engineering",
    institution: "Gautam Polytechnic Engineering, Gautamnagar",
    description: "Percentage: 86.20",
  },
  {
    year: "2017 - 2018",
    degree: "SSC",
    institution: "Shri. Virbhadra Vidyalay Dhotre",
    description: "Percentage: 89.00",
  },
];
