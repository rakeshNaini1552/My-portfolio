/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rakesh Naini",
  title: "Hi all, I'm Rakesh Naini",
  subTitle: emoji(
  "Full stack developer, I am passionate about building user-centric applications and constantly seek opportunities to learn and grow in the tech landscape. Feel free to explore my projects and connect with me on LinkedIn or GitHub!"),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rakesh-naini",
  linkedin: "https://www.linkedin.com/in/rakesh-naini591/",
  gmail: "rakeshn1552@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fas fa-azure"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Missouri - Kansas City",
      logo: require("./assets/images/umkc-logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2023 - December 2024",
      desc: "",
      descBullets: [
        "GPA: 3.9/4.0"
      ]
    },
    {
      schoolName: "Jawaharlal Nehru Technological University",
      logo: require("./assets/images/jntu.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security and Advance Operating Systems",
      descBullets: ["GPA: 3.6/4.0"]
    }
  ]
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Software Developer",
      company: "Deutsche Bank",
      companylogo: require("./assets/images/Deutsche.png"),
      date: "Sep 2023 – Present",
      desc: "Contributed to a Credit Management System for a leading financial institution, streamlining the credit lifecycle from applications to repayment tracking. Developed user-friendly interfaces for managing credit activities and implemented secure, real-time back-end services. Leveraged cloud technologies to ensure scalability, availability, and performance during peak usage.",
      descBullets: [
        // "Developed robust microservices using Spring Boot and Java 11 to modularize workflows, enhancing system scalability",
        // "Integrated Apache Kafka for seamless real-time messaging between microservices, ensuring efficient data processing",
        // "Deployed containerized applications using Docker and orchestrated services with Kubernetes, improving deployment efficiency by 40%",
        // "Optimized UI responsiveness using Bootstrap and CSS3 to deliver a visually appealing and mobile-friendly user experience",
        // "Improved backend data storage and retrieval using MongoDB for unstructured data and MySQL for relational data",
        // "Leveraged AWS cloud services, including S3 for document storage and EC2 for backend hosting, ensuring high availability",
        // "Created dynamic RESTful APIs adhering to OpenAPI specifications, ensuring smooth interactions between frontend and backend"
      ]
    },
    {
      role: "Software Developer",
      company: "Centene Corporation",
      companylogo: require("./assets/images/Centene.png"),
      date: "Nov 2021 – Aug 2023",
      desc: "Developed a virtual consultation platform for a healthcare client, featuring secure appointment scheduling, real-time chat and video consultations, and efficient patient record management.",
      descBullets:[
        // "Designed and implemented RESTful APIs using Spring Boot and Spring MVC, ensuring scalability and performance",
        // "Developed backend systems leveraging Java 11 and frameworks like Hibernate for efficient ORM and database interaction",
        // "Optimized application performance by integrating caching mechanisms with Redis and MongoDB",
        // "Implemented asynchronous message processing using RabbitMQ and Kafka for distributed system communication",
        // "Integrated serverless functions on AWS Lambda to handle event-driven processes efficiently",
        // "Configured logging and monitoring tools such as log4j to ensure error tracking and system performance monitoring",
        // "Created responsive and interactive web pages using HTML5, CSS3, and JavaScript, following best UX/UI practices",
        // "Designed and maintained relational databases with MySQL, optimizing queries for better performance",
        // "Implemented NoSQL solutions with MongoDB to support flexible and scalable data models",
        // "Automated build and deployment pipelines using Jenkins and Maven, ensuring rapid and reliable software releases"
      ]
    },
    {
      role: "Software Developer",
      company: "Save A Lot",
      companylogo: require("./assets/images/savealot.png"),
      date: "Aug 2019 – Oct 2021",
      desc: "Contributed to a full-stack enterprise application that streamlined operations and enhanced customer engagement. Developed responsive user interfaces with React and Redux, implemented J2EE back-end services, and optimized database performance with SQL and PL/SQL. Leveraged Kubernetes and Docker for scalable, efficient deployment, improving productivity and customer satisfaction.",
      descBullets:[
        // "Designed and implemented responsive web interfaces using React, Redux, and JavaScript, ensuring a seamless user experience across devices",
        // "Improved application performance by optimizing React components and minimizing unnecessary re-renders",
        // "Created interactive and reusable React components, standardizing design and accelerating development processes",
        // "Implemented RESTful and SOAP API integrations to dynamically update front-end data in real time, enhancing user engagement",
        // "Developed robust server-side components using J2EE and Servlets, ensuring reliable business logic and API services",
        // "Wrote optimized SQL queries and PL/SQL scripts for data manipulation, reducing query execution time by 30%",
        // "Utilized Kubernetes and Docker to containerize and orchestrate deployment, achieving scalability and fault tolerance",
        // "Collaborated using JIRA for task management, sprint planning, and bug tracking, ensuring timely project delivery",
        // "Created UML diagrams to document system architectures, improving team understanding of workflows and designs",
        // "Improved backend performance and reduced system response times by 40% through efficient database query tuning"
      ]
    },
    {
      role: "Software Engineer",
      company: "BigBasket",
      companylogo: require("./assets/images/bigbasket.png"),
      date: "Dec 2017 – Jul 2019",
      desc: "Developed a web application that streamlined client business processes, enhancing efficiency and usability. Contributed to both front-end and back-end, enabling real-time communication, reliable data management, and automated deployment. Improved system performance, reduced errors, and accelerated feature delivery, boosting user satisfaction and productivity.",
      descBullets:[
        // "Developed a robust web application using Java 8, J2EE, and Servlets, ensuring seamless integration between client-side and server-side components",
        // "Implemented dynamic and responsive user interfaces using React, Redux, and HTML/JavaScript, enhancing user experience across devices",
        // "Designed and optimized relational databases with MySQL, SQL, and PL/SQL for efficient data management and retrieval",
        // "Integrated SOAP Web Services and JMS to enable real-time communication and ensure interoperability across distributed systems",
        // "Containerized applications using Docker and deployed them on Kubernetes clusters to ensure scalability, reliability, and portability",
        // "Collaborated effectively in Agile sprints using Jira for task tracking and GIT for version control to streamline workflows",
        // "Deployed secure and scalable applications on Apache Tomcat servers, ensuring high availability and performance",
        // "Resolved performance bottlenecks by optimizing JDBC connections and SQL queries, improving database response time by 30%",
      ]
    }
  ]
};


// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "PROJECTS THAT I HAVE WORKED ON!",
  projects: [
    {
      image: require("./assets/images/lea.png"),
      projectName: "LEA- judidciary case management system",
      projectDesc: " user-friendly web application for clients and lawyers to manage cases with features like video calls and chat-box.",
      footerLink: [
        {
          name: "Visit project repo",
          url: "https://github.com/rakesh-naini/Judiciary-case-management-system"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Problem solving",
      progressPercentage: "80%"
    },
    {
      Stack: "Leadership",
      progressPercentage: "84%"
    },
    {
      Stack: "Software expertise",
      progressPercentage: "90%"
    },
    {
      Stack: "Data analysis",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS certified - Developer Associate",
      subtitle:
        " proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline. Badge owners are able to develop, deploy, and debug cloud-based applications that follow AWS best practices.",
      image: require("./assets/images/aws.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "View certificate of completion",
          url: "https://www.credly.com/badges/35822e6a-3a74-4508-884b-d89367f19f39/linked_in?t=sp9bsb"
        }
      ]
    },
    {
      title: "Software Engineering Job Simulation - JPMorgan Chase & Co's",
      subtitle:
        "Proficiency in Apache Kafka, ResfulAPI, Spring, H2.",
      image: require("./assets/images/kafka.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View certificate of completion",
          url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/E6McHJDKsQYh79moz_JPMorgan%20Chase%20&%20Co_eTyfdZkqdb3o2QAo4_1729731006939_completion_certificate.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};




// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Checkout my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? do drop a mail.",
  number:"+1(913)717-9270",
  email_address: "rakeshn1552@gmail.com"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
