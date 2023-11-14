import "../styles/SocialsInfo.css"
import linkedinIcon from "../assets/font-awesome/linkedin.svg"
import githubIcon from "../assets/font-awesome/github.svg"
import { useIsVisible } from "react-is-visible"
import { useRef, useEffect, useState } from "react"

export const SocialsInfo = ({ navBarActiveStyle }) => {
  const triggerRef = useRef()
  const isVisible = useIsVisible(triggerRef)
  const [linkClicked, setLinkClicked] = useState(false)

  useEffect(() => {
    if (!isVisible) {
      let currentNav = document.querySelector(".activeNav")
      if (currentNav && currentNav.classList) {
        currentNav.classList.remove("activeNav")
      }
    }
  }, [isVisible])

  const handleSocialsClick = (e, link) => {
    e.preventDefault()
    setLinkClicked(true)
    setTimeout(() => {
      window.location.href = link
    }, 700)
    if (e.target.classList.toString().includes("reveal-social")) {
      e.target.classList.remove("reveal-social")
    }
    e.target.classList.add("animate-social")
    setTimeout(() => {
      e.target.classList.remove("animate-social")
      e.target.classList.add("reveal-social")
    }, 2000)
  }

  isVisible &&
    (() => {
      let currentNav = document.querySelector("." + navBarActiveStyle)
      if (currentNav && currentNav.classList) {
        currentNav.classList.remove(navBarActiveStyle)
      }
      let socialsSectionNav = document.getElementById("socials-nav")
      socialsSectionNav.classList.add(navBarActiveStyle)
    })()

  return (
    <section id="socialsinfo-section">
      <div ref={triggerRef} id="socials-trigger"></div>
      <div className={isVisible ? "display-socials" : "hide-socials"}>
        <a
          href="https://www.linkedin.com/in/daniel-nikkari-9a67b9178/"
          onClick={(e) =>
            handleSocialsClick(
              e,
              "https://www.linkedin.com/in/daniel-nikkari-9a67b9178/"
            )
          }
          className="noselect"
        >
          <img
            className="socials-icon"
            src={linkedinIcon}
            alt="Linkedin icon"
          />
        </a>
        <a
          href="https://github.com/DanielNikkari"
          onClick={(e) =>
            handleSocialsClick(e, "https://github.com/DanielNikkari")
          }
          className="noselect"
        >
          <img className="socials-icon" src={githubIcon} alt="Github icon" />
        </a>
      </div>
    </section>
  )
}
