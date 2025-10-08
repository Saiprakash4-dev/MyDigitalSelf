import LinkedIn_PP from './assets/LinkedIn_PP.jpeg';
const resumeContent = {
  profile: {
    name: "Sai Prakash",
    tagline: "Full Stack Developer",
    summary: "I build scalable and efficient web applications with a focus on user experience.",
    location: "Dallas, TX",
    image: LinkedIn_PP
  },
  aboutMe: "Accomplished Full Stack developer with experience in designing and developing complex, high-performance web applications.",
  workExperience: [
    {
      company: "Walmart Global Tech",
      role: "Full Stack Developer",
      duration: "Dec 2023 - Present",
      description: "Built scalable web applications using React and Java Spring Boot, with strong expertise in microservices and micro frontend architecture. Delivered high-performance, secure solutions through API development, Kafka pipelines, analytics integration, and system upgrades, ensuring zero-downtime deployments, compliance, and reliability."
    },
    {
      company: "Truist Bank",
      role: "Software Engineer",
      duration: "Jan 2023 - Nov 2023",
      description: "Built full-stack applications with React, Node.js, and Spring Boot, delivering features like real-time tracking, financial insights, and secure authentication. Optimized performance with GraphQL, CI/CD pipelines, and OpenShift deployments, while ensuring reliability through automated testing and Dynatrace monitoring."
    },
    {
      company: "VSoft Technologies",
      role: "Software Engineer",
      duration: "Oct 2019 - July 2021",
      description: "Built Angular-based applications with reusable components, services, and optimized performance features like lazy loading and AOT compilation. Delivered loan application workflows through REST APIs, Spring Boot, and Apache Camel integrations, with quality ensured via Karma, Jasmine, and Git."
    },
    {
      company: "Envision Enterprise Solutions",
      role: "Associate Software Engineer",
      duration: "May 2018 - sep 2019",
      description: "Built J2EE applications using Struts MVC, SOAP web services, and Oracle JDBC, with robust validation via jQuery. Ensured quality and reliability through SonarQube, Chrome DevTools, Bitbucket, and JIRA."
    }
  ],
  skills: ["Java", "JavaScript", "TypeScript", "React", "Spring Boot", "Angular", "Node.js", "Microservices", "Git", "SQL", "NoSQL"],
  projects: [
    {
      name: "Portfolio Website",
      description: "A personal portfolio website to showcase my projects and skills.",
      link: "https://myportfolio.com"
    },
    {
      name: "E-commerce App",
      description: "An e-commerce application with features like product search and cart management.",
      link: "https://ecommerceapp.com"
    }
  ],
  education: [
    {
      institution: "University of Central Missouri",
      degree: "Bachelors in Computer Science"
    },
    {
        institution: "Andhra University",
        degree: "Bachelors Degree in Computer Science"
    }
  ],
  contact: {
    email: "saiprakash6035@gmail.com",
    phone: "4084548047",
    linkedIn: "https://www.linkedin.com/in/sai-prakash-408454804722222222/",
    github: "https://github.com/Saiprakash4-dev"
  }
};

export default resumeContent;
