import "../styles/Skills.css"
import { useIsVisible } from "react-is-visible"
import { useRef } from "react"
import Tooltip from "@mui/material/Tooltip"
import Zoom from "@mui/material/Zoom"

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
import pandasIcon from "../assets/icons/pandas-icon.png"
import cIcon from "../assets/icons/c-icon.png"
import denoicon from "../assets/icons/deno-icon.png"
import javaIcon from "../assets/icons/java-icon.png"

export const Skills = ({ navBarActiveStyle }) => {
  const nodeRef = useRef()
  const tableRef = useRef()
  const titleRef = useRef()
  const isVisible = useIsVisible(nodeRef)

  const skills = [
    {
      skill: "JavaScript",
      icon: jsIcon,
    },
    {
      skill: "CSS",
      icon: cssIcon,
    },
    {
      skill: "HTML5",
      icon: htmlIcon,
    },
    {
      skill: "Node.js",
      icon: nodeIcon,
    },
    {
      skill: "React",
      icon: reactIcon,
    },
    {
      skill: "Java",
      icon: javaIcon,
    },
    {
      skill: "Deno",
      icon: denoicon,
    },
    {
      skill: "C++",
      icon: cppIcon,
    },
    {
      skill: "C",
      icon: cIcon,
    },
    {
      skill: "Python",
      icon: pythonIcon,
    },
    {
      skill: "Pandas (Python)",
      icon: pandasIcon,
    },
    {
      skill: "Numpy (Python)",
      icon: numpyIcon,
    },
    {
      skill: "Docker",
      icon: dockerIcon,
    },
    {
      skill: "Git",
      icon: gitIcon,
    },
    {
      skill: "Figma",
      icon: figmaIcon,
    },
    {
      skill: "Mongo DB",
      icon: mongoIcon,
    },
    {
      skill: "SQL",
      icon: sqlIcon,
    },
    {
      skill: "Google suite",
      icon: gsuiteIcon,
    },
    {
      skill: "Microsoft suite",
      icon: msuiteIcon,
    },
    {
      skill: "Power BI",
      icon: pbiIcon,
    },
  ]

  const renderTable = () => {
    const tableRows = []
    let i = 0
    while (i < skills.length) {
      const rowCells = []
      for (let j = 0; j < 4; j++) {
        if (i + j < skills.length) {
          rowCells.push(
            "ontouchstart" in window ? (
              <Tooltip
                title={skills[i + j].skill}
                placement="bottom"
                arrow
                TransitionComponent={Zoom}
                enterTouchDelay={0}
                key={j + i}
              >
                <td className="skill-table-item" key={j + i}>
                  <img
                    className="skill-icon"
                    src={skills[i + j].icon}
                    alt="skill icon"
                  />
                </td>
              </Tooltip>
            ) : (
              <Tooltip
                title={skills[i + j].skill}
                placement="bottom"
                arrow
                TransitionComponent={Zoom}
                followCursor
                key={j + i}
              >
                <td className="skill-table-item" key={j + i}>
                  <img
                    className="skill-icon"
                    src={skills[i + j].icon}
                    alt="skill icon"
                  />
                </td>
              </Tooltip>
            )
          )
        }
      }
      i += 4
      tableRows.push(<tr key={i}>{rowCells}</tr>)
    }
    return tableRows
  }

  isVisible &&
    (() => {
      let currentNav = document.querySelector("." + navBarActiveStyle)
      if (currentNav && currentNav.classList) {
        currentNav.classList.remove(navBarActiveStyle)
      }
      let skillsSectionNav = document.getElementById("skills-nav")
      skillsSectionNav.classList.add(navBarActiveStyle)
    })()

  return (
    <section id="skills-container">
      <div id="skills" ref={nodeRef}>
        <h2 className="section-title" ref={titleRef}>
          Skills 🚀
        </h2>
        <table className="display-table" ref={tableRef}>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </section>
  )
}
