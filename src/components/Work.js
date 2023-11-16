import "../styles/Work.css"
import { useRef } from "react"
import { useIsVisible } from "react-is-visible"
import schneiderIcon from "../assets/work/schneiderIcon.png"
import slushIcon from "../assets/work/slushIcon.png"
import nesteIcon from "../assets/work/nesteIcon.png"
import nokiaIcon from "../assets/work/nokiaIcon.png"
import aaltoIcon from "../assets/work/aaltoIcon.png"

export const Work = ({ navBarActiveStyle }) => {
  const titleRef = useRef()
  const isVisible = useIsVisible(titleRef)

  const workHistory = [
    {
      logo: schneiderIcon,
      year: 2021,
    },
    {
      logo: aaltoIcon,
      year: 2021,
    },
    {
      logo: nesteIcon,
      year: 2022,
    },
    {
      logo: nokiaIcon,
      year: 2023,
    },
  ]

  isVisible &&
    (() => {
      let currentNav = document.querySelector("." + navBarActiveStyle)
      if (currentNav && currentNav.classList) {
        currentNav.classList.remove(navBarActiveStyle)
      }
      let skillsSectionNav = document.getElementById("work-nav")
      skillsSectionNav.classList.add(navBarActiveStyle)
    })()

  return (
    <section id="work-section">
      <div className="work-title-container">
        <h2 ref={titleRef} id="work-section-title" className="section-title">
          Work Experience 💻
        </h2>
      </div>
      <div id="work-timeline">
        <div id="timeline">
          <div className="work-logo-container">
            {workHistory.map((work, index) => {
              return (
                <img
                  className="work-logo"
                  key={index}
                  src={work.logo}
                  alt="Work place logo"
                />
              )
            })}
          </div>
          <hr />
          <div className="dots-container">
            <span style={{ left: "5vw" }} className="dots"></span>
            <span style={{ left: "30vw" }} className="dots"></span>
            <span style={{ left: "50vw" }} className="dots"></span>
            <span style={{ left: "75vw" }} className="dots"></span>
          </div>
          <div className="work-year-container">
            {workHistory.map((work, index) => {
              return (
                <p key={index} className="work-year">
                  {work.year}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
