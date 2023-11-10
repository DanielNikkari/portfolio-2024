import "../styles/Skills.css"
import { useIsVisible } from "react-is-visible"
import { useRef } from "react"
import jsIcon from "../assets/icons/js-icon.png"

export const Skills = () => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)

  const skills = [
    {
      skill: "JavaScript",
      icon: jsIcon,
    },
  ]

  const renderTable = () => {
    const tableRows = []

    for (let i = 0; i < 4; i++) {
      const rowCells = []
      for (let j = 0; j < 4; j++) {
        rowCells.push(
          <tr className="skill-table-item" key={j}>
            <img className="skill-icon" src={jsIcon} />
          </tr>
        )
      }
      tableRows.push(<td key={i}>{rowCells}</td>)
    }
    return tableRows
  }

  return (
    <section id="skills-container">
      <div id="skills" ref={nodeRef}>
        <table className={isVisible ? "display-table" : "hide"}>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </section>
  )
}
