import "../styles/NavBar.css"
import React from "react"
import { useEffect } from "react"

export const NavBar = () => {
  let introSection
  let skillsSection
  let projectsSection
  let socialsSection
  useEffect(() => {
    introSection = document.getElementById("introduction")
    skillsSection = document.getElementById("skills-container")
    projectsSection = document.getElementById("projects-container")
    socialsSection = document.getElementById("socials-trigger")
  }, [])

  const scrollToSection = (section, e) => {
    let currentNavItem = document.querySelector(".activeNav")
    if (currentNavItem && currentNavItem.classList) {
      currentNavItem.classList.remove("activeNav")
    }
    e.target.classList.add("activeNav")
    section.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <section id="navbar-section">
      <button
        id="intro-nav"
        onClick={(event) => scrollToSection(introSection, event)}
        className="navbar-item activeNav"
      >
        Home
      </button>
      <button
        id="skills-nav"
        onClick={(event) => scrollToSection(skillsSection, event)}
        className="navbar-item"
      >
        Skills 🚀
      </button>
      <button
        id="projects-nav"
        onClick={(event) => scrollToSection(projectsSection, event)}
        className="navbar-item"
      >
        Projects 📚
      </button>
      <button
        id="socials-nav"
        onClick={(event) => scrollToSection(socialsSection, event)}
        className="navbar-item"
      >
        Socials 📱
      </button>
    </section>
  )
}
