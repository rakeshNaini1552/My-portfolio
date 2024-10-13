/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rakesh N",
  title: "Hi all, I'm Rakesh Naini",
  subTitle: emoji(
  "Blockchain Engineer | Full stack developer, I am passionate about building user-centric applications and constantly seek opportunities to learn and grow in the tech landscape. Feel free to explore my projects and connect with me on LinkedIn or GitHub!"),
  resumeLink:
    "https://docs.google.com/document/d/1Tct_NTn-xNsVXyLTcDQL991aPtM4Axc0pa1ZPFHsK_s/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rakeshNaini1552",
  linkedin: "https://www.linkedin.com/in/rakesh-naini",
  gmail: "rakeshnaini155@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Blockchain Engineer | FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
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
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "GPA: 3.9/4.0"
      ]
    },
    {
      schoolName: "Vardhaman College of Engineering",
      logo: require("./assets/images/vardhaman-logo.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "June 2017 - August 2021",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["GPA: 3.6/4.0"]
    }
  ]
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Blockchain Engineer",
      company: "Cognizant",
      companylogo: require("./assets/images/ctsLogo.png"),
      date: "Jul 2021 – Sep 2022",
      desc: "Performed testing for DAML-based Blockchain product for analysing scalability, performance, and sustainability using Python",
      descBullets: [
        "Provided Azure as an environment to run blockchain tests which led to a 19% increase in customer satisfaction scores",
        "Automated blockchain tests for Azure and AWS that helped the client rely on cloud platforms for up to 40%",
        "Managed and documented support ticket requests, ensuring timely resolution and client notification"
      ]
    },
    {
      role: "Full stack Intern - Java",
      company: "Cognizant",
      companylogo: require("./assets/images/ctsLogo.png"),
      date: "Feb 2021 – Jul 2021",
      desc: "Developed a web portal for automating schedules for medical representatives utilizing Spring Boot for backend and JSP for frontend",
      descBullets:[
        "Integrated an in-memory H2 database to manage medicine stock and handle HTTP requests/responses efficiently",
        "Assisted in content and functionality updates for internal and client websites"

      ]
    }
  ]
};


// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ctsLogo.png"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
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
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
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
      title: "Full-Stack Web Developer",
      subtitle:
        "Proficiency in Node, React, PostgreSQL, Web3 and DApps.",
      image: require("./assets/images/fullStack.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View certificate of completion",
          url: "https://www.udemy.com/certificate/UC-e766428c-7b10-474d-a415-06ce23411489/"
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
  number:"+1(913)257-0088",
  email_address: "rakeshnaini155@gmail.com"
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
