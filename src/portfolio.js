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
  github: "https://github.com/rakeshNaini1552",
  linkedin: "https://www.linkedin.com/in/rakeshn9182/",
  gmail: "rakeshmudhiraj591@gmail.com",
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
      role: "Java Full-stack Developer",
      company: "Bon Secours Mercy Health",
      companylogo: require("./assets/images/bsmh.jpg"),
      date: "Jul 2024 – Present",
      desc: "Reduced claim lookup delays by delivering Java 11 Spring Boot REST/GraphQL APIs, scaling with Kafka + AWS EKS, and improving UI performance 35% with React 18 + Redux.",
      descBullets: [
      //   "Designed and delivered RESTful and GraphQL APIs in Java 11 Spring Boot, cutting insurance claim lookup times by 40% and improving SLA compliance across 12+ hospital networks.",
      //   "Built React 18 components with Redux and TypeScript, reducing UI payload size by 35% for care managers handling patient eligibility and claims data.",
      //   "Architected event-driven microservices with Apache Kafka and AWS EKS, delivering asynchronous claim updates with 99.95% uptime and complete audit trails.",
      //   "Modeled complex insurance data in PostgreSQL and MongoDB Atlas; implemented indexed joins, sequences, and TTL policies for HIPAA-driven retention compliance.",
      //   "Involved in design reviews, mentored junior developers on Spring Security 6, OAuth2/JWT, and RBAC enforcement for PHI access control."
      ]
    },
    {
      role: "Java Full-stack Developer",
      company: "Bank of Montreal",
      companylogo: require("./assets/images/bmo.jpg"),
      date: "May 2023 – Jun 2024",
      desc: "Solved high-latency trade reconciliation by developing Java 17 Spring Boot + Spring Batch microservices, integrating with PostgreSQL/Oracle, and building React monitoring tools deployed on Azure AKS.",
      descBullets:[
        // "Developed Spring Boot microservices in Java 17 for regulatory trade compliance, integrating with PostgreSQL and Oracle to support intraday reconciliation of 500K+ trades/day.",
        // "Built secure REST APIs with Spring MVC and custom error handling; integrated OAuth2/JWT for tiered partner and internal access.",
        // "Created Angular-free micro frontends with React for internal monitoring tools, improving load time by 30% for compliance dashboards.",
        // "Implemented Spring Batch pipelines for high-volume Oracle data ingestion, reducing reconciliation delays by 25%.",
        // "Managed CI/CD with Azure DevOps and Helm on AKS; enhanced rollout reliability to achieve zero-downtime deployments."
      ]
    },
    {
      role: "Java Developer",
      company: "VMware",
      companylogo: require("./assets/images/vmware.jpg"),
      date: "Aug 2021 – Sep 2022",
      desc: "Addressed monolithic release bottlenecks by migrating to Java 11 Spring Boot microservices on PCF, optimizing MongoDB with indexes, and reducing defects via JavaScript + Bootstrap validation tools.",
      descBullets:[
        // "Migrated a legacy monolith to Java 11 Spring Boot microservices, enabling modular deployments on PCF with centralized configuration and faster feature delivery.",
        // "Designed backend APIs using layered Spring architecture and repository patterns; optimized MongoDB collections with compound indexes for fast environment metadata retrieval.",
        // "Built internal validation tools in JavaScript and Bootstrap to simulate configuration payloads, reducing pre-release defects by 20%.",
        // "Collaborated with product teams to ensure fault-tolerant service orchestration for global datacenter provisioning."
      ]
    },
    {
      role: "Software Engineer",
      company: "Astrazeneca",
      companylogo: require("./assets/images/astrazeneca.jpg"),
      date: "Dec 2019 – Aug 2021",
      desc: "Solved slow regulatory data ingestion by building Java 8 Spring Boot microservices, migrating SOAP to REST/OpenAPI, and tuning PostgreSQL + Cassandra, enabling faster audits and scalable Kubernetes deployments.",
      descBullets:[
        // "Built Java 8 Spring Boot microservices for pharmacovigilance data ingestion, processing millions of clinical adverse event records annually.",
        // "Developed REST APIs with Spring MVC, integrating Resilience4j for retries/fallbacks to ensure 99.9% message delivery.",
        // "Tuned PostgreSQL and Cassandra for timestamp-indexed, high-volume audit trail queries, reducing latency by 40%.",
        // "Migrated SOAP services to REST/OpenAPI 3, cutting inter-service communication overhead by 50%.",
        // "Deployed containerized ingestion flows on Kubernetes with autoscaling for seasonal regulatory reporting spikes."
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
          url: "https://github.com/rakeshNaini1552/LEA-judiciary-management-system"
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
  number:"+1(469)325-3162",
  email_address: "rakeshmudhiraj591@gmail.com"
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
