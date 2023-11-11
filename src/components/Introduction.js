import "../styles/Introduction.css"
import { ReactComponent as GreetingsText } from "../assets/greetings-text.svg"
import { useEffect, useRef } from "react"
import { useIsVisible } from "react-is-visible"

export const Introduction = () => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)

  useEffect(() => {
    const greetingsText = document.getElementById("greetings-text")
    greetingsText.classList.remove("hide-greetings")
  }, [])

  isVisible &&
    (() => {
      let currentNav = document.querySelector(".activeNav")
      currentNav.classList.remove("activeNav")
      let skillsSectionNav = document.getElementById("intro-nav")
      skillsSectionNav.classList.add("activeNav")
    })()

  return (
    <section id="introduction">
      <GreetingsText ref={nodeRef} />
    </section>
  )
}
