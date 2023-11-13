import "../styles/Projects.css"
import { useIsVisible } from "react-is-visible"
import { useRef } from "react"

// Project icons
import mobilepayIcon from "../assets/projects/MobilePay-Replica.png"
import quizzerIcon from "../assets/projects/quizzer-icon.png"
import towerdefenseIcon from "../assets/projects/tower-defense-icon.png"
import treehuggerIcon from "../assets/projects/treehugger.png"
import platformerIcon from "../assets/projects/y2-icon.png"

// Skills icons
import denoIcon from "../assets/icons/deno-icon.png"
import jsIcon from "../assets/icons/js-icon.png"
import htmlIcon from "../assets/icons/html-icon.png"
import cssIcon from "../assets/icons/css-icon.png"
import figmaIcon from "../assets/icons/figma-icon.png"
import dockerIcon from "../assets/icons/docker-icon.png"
import cppIcon from "../assets/icons/cpp-icon.png"
import reactIcon from "../assets/icons/react-icon.png"
import nodeIcon from "../assets/icons/node-icon.png"
import pythonIcon from "../assets/icons/python-icon.png"

export const Projects = () => {
  const nodeRef = useRef()
  const titleRef = useRef()
  const isVisible = useIsVisible(titleRef)

  const projects = [
    {
      project: "MobilePay Figma Replica",
      skillsUsed: [figmaIcon],
      description:
        "I created a faithful replica of the MobilePay user interface using Figma as part of the Data-Driven Concept Design Course. Our objective was to meticulously reproduce the selected application's interface with precision and attention to detail.",
      icon: mobilepayIcon,
      year: 2023,
      link: "https://www.figma.com/proto/vwUeBe4O78J1ZZdnoYE73j/A5-MobilePay-Replica?page-id=0%3A1&node-id=1%3A2&viewport=216%2C338%2C0.19&scaling=scale-down&starting-point-node-id=94%3A435",
    },
    {
      project: "Qu?zzer",
      skillsUsed: [denoIcon, jsIcon, htmlIcon, cssIcon, dockerIcon],
      description:
        "I made a full stack project that implements an quiz web app as part of course Web Software Development. I used deno as run time environment and Postgres as our database and containarized the application with Docker.",
      icon: quizzerIcon,
      year: 2022,
      link: "https://github.com/DanielNikkari/WSD_Project2",
    },
    {
      project: "Tree Hugger",
      skillsUsed: [reactIcon, nodeIcon, jsIcon, figmaIcon],
      description:
        "I created an application for logging planted trees as part of the course User Interface Construction. I utilized Figma to produce the prototypes (wireframe and later more mature prototype) and implemented the prototype on Node.js and React.",
      icon: treehuggerIcon,
      year: 2022,
      link: "https://github.com/DanielNikkari/tree_app_group_12",
    },
    {
      project: "Tower Defense",
      skillsUsed: [cppIcon],
      description:
        "We implemented a tower defense game in a team of 4 utilizing SFML library as part of the course Object Oriented Programming with C++. Our development approach was bolstered by the incorporation of agile practices, ensuring a dynamic and iterative process throughout the creation of the game.",
      icon: towerdefenseIcon,
      year: 2021,
      link: "https://github.com/DanielNikkari/Tower-Defense",
    },
    {
      project: "Platformer",
      skillsUsed: [pythonIcon],
      description:
        "A platformer game I created as part of Y2 Basics of Programming course. This was the first bigger project I programmed.",
      icon: platformerIcon,
      year: 2020,
      link: "https://github.com/DanielNikkari/Platformer_Y2-Daniel_Nikkari",
    },
  ]

  isVisible &&
    (() => {
      let currentNav = document.querySelector(".activeNav")
      currentNav.classList.remove("activeNav")
      let skillsSectionNav = document.getElementById("projects-nav")
      skillsSectionNav.classList.add("activeNav")
    })()

  return (
    <section id="projects">
      <div id="projects-container" ref={nodeRef}>
        <h2 id="project-section-title" ref={titleRef} className="section-title">
          My Projects 📚
        </h2>
        {projects.map((project, index) => {
          return (
            <div className="project-card" key={index}>
              <h3 className="project-title" key={index}>
                {project.project}
              </h3>
              <div className="project-info-container">
                <a href={project.link} key={index}>
                  <img
                    className="project-icon"
                    src={project.icon}
                    alt="project icon"
                  />
                </a>
                <div className="project-info">
                  <div className="project-skill-container">
                    {project.skillsUsed.map((skill, index) => (
                      <img key={index} src={skill} alt="skill icon" />
                    ))}
                  </div>
                  <div className="project-description">
                    {project.description}
                  </div>
                  <div className="project-year">{project.year}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
