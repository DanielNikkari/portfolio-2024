import "../styles/SocialsInfo.css"
import linkedinIcon from "../assets/font-awesome/linkedin.svg"
import githubIcon from "../assets/font-awesome/github.svg"
import { useIsVisible } from "react-is-visible"
import { useRef, useEffect } from "react"

export const SocialsInfo = () => {
  const triggerRef = useRef()
  const isVisible = useIsVisible(triggerRef)

  useEffect(() => {
    if (!isVisible) {
      let currentNav = document.querySelector(".activeNav")
      if (currentNav && currentNav.classList) {
        currentNav.classList.remove("activeNav")
      }
    }
  }, [isVisible])

  isVisible &&
    (() => {
      let currentNav = document.querySelector(".activeNav")
      if (currentNav && currentNav.classList) {
        currentNav.classList.remove("activeNav")
      }
      let socialsSectionNav = document.getElementById("socials-nav")
      socialsSectionNav.classList.add("activeNav")
    })()

  return (
    <section id="socialsinfo-section">
      <div ref={triggerRef} id="socials-trigger"></div>
      <div className={isVisible ? "display-socials" : "hide-socials"}>
        <a href="https://www.linkedin.com/in/daniel-nikkari-9a67b9178/">
          <img
            className="socials-icon"
            src={linkedinIcon}
            alt="Linkedin icon"
          />
        </a>
        <a href="https://github.com/DanielNikkari">
          <img className="socials-icon" src={githubIcon} alt="Github icon" />
        </a>
      </div>
    </section>
  )
}
