import "../styles/Skills.css"
import { useIsVisible } from "react-is-visible"
import { useRef } from "react"

// Icon imports
import jsIcon from "../assets/icons/js-icon.png"
import cppIcon from "../assets/icons/cpp-icon.png"
import cssIcon from "../assets/icons/css-icon.png"
import dockerIcon from "../assets/icons/docker-icon.png"
import figmaIcon from "../assets/icons/figma-icon.png"
import gitIcon from "../assets/icons/git-icon.png"
import gsuiteIcon from "../assets/icons/gsuite-icon.png"
import htmlIcon from "../assets/icons/html-icon.png"
import mongoIcon from "../assets/icons/mongo-icon.png"
import msuiteIcon from "../assets/icons/msuite-icon.png"
import nodeIcon from "../assets/icons/node-icon.png"
import numpyIcon from "../assets/icons/numpy-icon.png"
import pbiIcon from "../assets/icons/pbi-icon.png"
import pythonIcon from "../assets/icons/python-icon.png"
import reactIcon from "../assets/icons/react-icon.png"
import sqlIcon from "../assets/icons/sql-icon.png"

export const Skills = () => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)

  const skills = [
    {
      skill: "JavaScript",
      icon: jsIcon,
    },
    {
      skill: "C++",
      icon: cppIcon,
    },
    {
      skill: "CSS",
      icon: cssIcon,
    },
    {
      skill: "Docker",
      icon: dockerIcon,
    },
    {
      skill: "Figma",
      icon: figmaIcon,
    },
    {
      skill: "Git",
      icon: gitIcon,
    },
    {
      skill: "Google suite",
      icon: gsuiteIcon,
    },
    {
      skill: "HTML5",
      icon: htmlIcon,
    },
    {
      skill: "Mongo DB",
      icon: mongoIcon,
    },
    {
      skill: "Microsoft suite",
      icon: msuiteIcon,
    },
    {
      skill: "Node.js",
      icon: nodeIcon,
    },
    {
      skill: "Numpy (Python)",
      icon: numpyIcon,
    },
    {
      skill: "Power BI",
      icon: pbiIcon,
    },
    {
      skill: "Python",
      icon: pythonIcon,
    },
    {
      skill: "React",
      icon: reactIcon,
    },
    {
      skill: "SQL",
      icon: sqlIcon,
    },
  ]

  // const renderTable = () => {
  //   const tableRows = []

  //   for (let i = 0; i < 4; i++) {
  //     const rowCells = []
  //     for (let j = 0; j < 4; j++) {
  //       rowCells.push(
  //         <td className="skill-table-item" key={j}>
  //           <img className="skill-icon" src={jsIcon} />
  //         </td>
  //       )
  //     }
  //     tableRows.push(<tr key={i}>{rowCells}</tr>)
  //   }
  //   return tableRows
  // }

  const renderTable = () => {
    const tableRows = []
    let i = 0
    while (i < skills.length) {
      const rowCells = []
      for (let j = 0; j < 4; j++) {
        rowCells.push(
          <td className="skill-table-item" key={j}>
            <img
              className="skill-icon"
              src={skills[i + j].icon}
              alt="skill icon"
            />
          </td>
        )
      }
      i += 4
      tableRows.push(<tr key={i}>{rowCells}</tr>)
    }
    return tableRows
  }

  return (
    <section id="skills-container">
      <div id="skills" ref={nodeRef}>
        <h2 className={isVisible ? "section-title" : "hide"}>Skills</h2>
        <table className={isVisible ? "display-table" : "hide"}>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </section>
  )
}
