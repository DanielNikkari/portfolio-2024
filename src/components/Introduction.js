import "../styles/Introduction.css"
import { ReactComponent as GreetingsText } from "../assets/greetings-text.svg"
import { useEffect, useRef, useState } from "react"
import { useIsVisible } from "react-is-visible"
import { scrolledX } from "../utils/horizontalScroll"

import scrollIcon from "../assets/icons/scroll-icon.png"

export const Introduction = () => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)
  const [showHelper, setShowHelper] = useState(false)

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

  let scrollEl
  setTimeout(() => {
    if (scrolledX() < 500) {
      setShowHelper(true)
      scrollEl = document.getElementById("horizontal-scroll-container")
      scrollEl.addEventListener("scroll", handleScrollEvent)
    }
  }, 5000)

  const handleScrollEvent = () => {
    setShowHelper(false)
    scrollEl.removeEventListener("scroll", handleScrollEvent)
  }

  return (
    <section id="introduction">
      <GreetingsText ref={nodeRef} />
      {showHelper && (
        <img id="scroll-helper" src={scrollIcon} alt="scroll icon" />
      )}
    </section>
  )
}
