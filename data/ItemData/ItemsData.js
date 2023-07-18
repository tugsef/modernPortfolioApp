import { AiOutlineRobot } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";
import { AiOutlineApi } from "react-icons/ai";
import { LiaHackerrank } from "react-icons/lia";
import { MdScreenshotMonitor } from "react-icons/md";
import { GiComputerFan } from "react-icons/gi";
import { TbBrandPython } from "react-icons/tb";
import { BiLogoJava, BiLogoReact } from "react-icons/bi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { RxFramerLogo } from "react-icons/rx";

//Navbar
export const itemNavbar = [
  {
    name: "About",
    href: "/",
  },
  {
    name: "Resume",
    href: "/resume",
  },
  {
    name: "Certificates",
    href: "/certificates",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

//About
export const itemAbout = [
  {
    title: "Frontend Development",
    decreption: (
      <p className="text-xs">
        I can build a beautiful and scalable SPA using <b>HTML</b>,<b>CSS</b>{" "}
        and <b>Next.js</b>
      </p>
    ),
    icon: <AiOutlineRobot className="text-white" size={35} />,
  },
  {
    title: "Backend Development",
    decreption: (
      <p className="text-xs">
        handle database, server, api using <b>Java</b> , <b>Springboot</b>,
        <b>PostgreSQL</b> & other popular frameworks
      </p>
    ),
    icon: <AiOutlineDatabase className="text-white" size={35} />,
  },
  {
    title: "API Development",
    decreption: (
      <p className="text-xs">
        I can develop robust REST API using <b>rest-api & Node API</b>
      </p>
    ),
    icon: <AiOutlineApi className="text-white" size={35} />,
  },
  {
    title: "Competitive Coder",
    decreption: (
      <p className="text-xs">
        a daily problem solver in <b>Hackerank</b> and <b>Algorithms</b>
      </p>
    ),
    icon: <LiaHackerrank className="text-white" size={35} />,
  },
  {
    title: "UI/UX Designer",
    decreption: (
      <p className="text-xs">
        stunning user interface designer using <b>Figma</b> and <b>Framer</b>
      </p>
    ),
    icon: <MdScreenshotMonitor className="text-white" size={35} />,
  },
  {
    title: "Continuous Learning",
    decreption: (
      <p className="text-xs">
        Every day, I improve myself by practicing current trends in <b>IT</b>{" "}
        world
      </p>
    ),
    icon: <GiComputerFan className="text-white" size={35} />,
  },
];

//Resume
export const languages = [
  { name: "Python", icon: <TbBrandPython className="text-white" />, skor: "50%" },
  { name: "Java", icon: <BiLogoJava className="text-white" />, skor: "85%" },
  {
    name: "Springboot",
    icon: <BiLogoSpringBoot className="text-white" />,
    skor: "95%",
  },
  {
    name: "JavaScript",
    icon: <DiJavascript1 className="text-white" />,
    skor: "50%",
  },
  { name: "React", icon: <BiLogoReact className="text-white" />, skor: "90%" },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-white" />,
    skor: "80%",
  },
];

export const tools = [
  { name: "Framer", icon: <RxFramerLogo className="text-white" />, skor: "65%" },
];

//Certificate
export const itemCertificates = [
  {
    id: 1,
    name: "İnönü Univercity Backend and Frontend",
    url: "https://res.cloudinary.com/dvfdwlbuy/image/upload/v1689363776/yuksekogretim-mezun-belgesi-sorgulama-1_rwpqqb.png",
    imageUrl: "/certificite/inonu.jpg",
  },
  {
    id: 8,
    name: "ODTÜ Welcome To Software Develpoment Path",
    url: "https://academy.patika.dev/certificates/fce72756",
    imageUrl: "/certificite/patikaMETU.png",
  },
  {
    id: 9,
    name: "WEB Developpment Path with Intermediate Java",
    url: "https://academy.patika.dev/certificates/64e5bd93",
    imageUrl: "/certificite/patikaJava.png",
  },
  {
    id: 2,
    name: "Java Sololearn",
    url: "https://www.sololearn.com/certificates/CT-H0BTZ9F5",
    imageUrl: "/certificite/javaSololearn.png",
  },
  {
    id: 3,
    name: "Java Udemy",
    url: "https://www.udemy.com/certificate/UC-2db254bc-5a30-4267-b414-de7f9db4d6c5/",
    imageUrl: "/certificite/javaUdemyc.jpg",
  },
  {
    id: 4,
    name: "CSS",
    url: "https://www.sololearn.com/certificates/CC-BL3OAFEX",
    imageUrl: "/certificite/cssSololearn.jpg",
  },
  {
    id: 5,
    name: "HTML",
    url: "https://www.sololearn.com/certificates/CC-C6EV3Y60",
    imageUrl: "/certificite/htmlSololearn.jpg",
  },
  {
    id: 6,
    name: "SQL",
    url: "https://www.sololearn.com/certificates/CT-F88HMQ1B",
    imageUrl: "/certificite/sqlSololearn.png",
  },
  {
    id: 7,
    name: "Design Pattern",
    url: "https://www.udemy.com/certificate/UC-99627cd3-2338-440d-98ca-b8defc26a01d/",
    imageUrl: "/certificite/designPatternUdemyc.jpg",
  },
];

// projects
export const projects = [
  {
    id: 1,
    name: "E-Commerce App",
    description:
      "This project is a shopping site where users serving as e-commerce can register and see their carts.",
    imageUrl: "/projects/ecommercec.png",
    deployed_url: "https://github.com/tugsef/react-e-Commerce",
    github_url: "https://github.com/tugsef/react-e-Commerce",
    category: ["react", "java", "springboot"],
    key_techs: [
      "React",
      "Redux",
      "Semantic UI",
      "Java",
      "Springboot",
      "PostgreSQL",
      "RestApi",
      "React-router-dom",
    ],
  },
  {
    id: 2,
    name: "Rent A Car App",
    imageUrl: "/projects/rentacar.png",
    deployed_url: "https://github.com/tugsef/springBootRentACarProject",
    github_url: "https://github.com/tugsef/springBootRentACarProject",
    category: ["java", "springboot"],
    description:
      "There are two type of users exits in system, first one is admin who has full rights and he can perform any type of operation in the project such as adding a new car, reporting etc ",
    key_techs: ["Java", "Springboot", "PostgreSQL", "RestApi"],
  },

  {
    id: 3,
    name: "Agency Tourism App",
    imageUrl: "/projects/agencyTourismc.PNG",
    deployed_url: "https://github.com/tugsef/agencyTourism/",
    github_url: "https://github.com/tugsef/agencyTourism",
    category: ["react", "java", "springboot"],
    description:
      "You can search for a hotel wherever you want and make a reservation. The program has been secured with Spring Security.",
    key_techs: [
      "React",
      "Java",
      "Springboot",
      "Semantic ui",
      "Axios",
      "Spring Security",
    ],
  },

  {
    id: 4,
    name: "Hospital Automatoin System",
    imageUrl: "/projects/hospitalLoginc.png",
    deployed_url: "https://github.com/tugsef/hospitalAutomatoinSystem",
    github_url: "https://github.com/tugsef/hospitalAutomatoinSystem",
    category: ["java"],
    description:
      "Adding and removing the powers of the chief physician, adding and removing doctors. Patients can make an appointment",
    key_techs: ["Java", "JDBS", "Swing", "SQL", "PostgreSQL"],
  },

  {
    id: 5,
    name: "Organization Agency",
    imageUrl: "/projects/organizationc.png",
    deployed_url: "https://organizationokay.netlify.app/",
    github_url: "https://github.com/tugsef/organizationapp",
    category: ["react", "nextjs"],
    description: "Made for the organization company.",
    key_techs: ["React", "Tailwind"],
  },

  {
    id: 6,
    name: "Weather App",
    imageUrl: "/projects/react.png",
    deployed_url: "https://github.com/tugsef/weater-app",
    github_url: "https://github.com/tugsef/weater-app",
    category: ["react"],
    description:
      "There is a feature to search for weather details according to the entered location.",
    key_techs: ["React", "Next.js", "Bootstrap", "SASS", "Axios"],
  },
  // {
  //   id: 7,
  //   name: "To Do App",
  //   imageUrl: "/certificite/cssSololearn.jpg",
  //   deployed_url: "https://to-do-type-script-puce.vercel.app/",
  //   github_url: "https://github.com/Yunus-Emre-Tasci/ToDo_TypeScript",
  //   category: ["react", "typescript"],
  //   description:
  //     "To-do list is prepared using Mock API. Typescript is used, lists can be deleted and updated. ",
  //   key_techs: ["React", "Typescript", "Axios", "Mock API"],
  // },
  // {
  //   id: 8,
  //   name: "Fire Contact",
  //   imageUrl: "/certificite/cssSololearn.jpg",
  //   deployed_url: "https://fire-contact-one.vercel.app/",
  //   github_url: "https://github.com/Yunus-Emre-Tasci/Fire-Contact",
  //   category: ["react", "firebase"],
  //   description:
  //     "I made this project using bootstrap CSS. Skills/Tools: React-router library, Bootstrap library, Toastify library and Firebase Database.",
  //   key_techs: ["React", "Firebase", "Firestore", "Material UI"],
  // },
  // {
  //   id: 9,
  //   name: "Recipe App",
  //   imageUrl: "/certificite/cssSololearn.jpg",
  //   deployed_url: "https://recipe-app-react-n76u.vercel.app/",
  //   github_url: "https://github.com/Yunus-Emre-Tasci/Recipe_App_React",
  //   category: ["react"],
  //   description:
  //     "In this project, the data obtained by using the edamam API are displayed as menu lists, meal selection and calorie display.",
  //   key_techs: ["React", "Reacr-router-dom", "Axios", "Styled-component"],
  // },
];
