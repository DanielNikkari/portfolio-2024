import "../styles/Introduction.css"
import { ReactComponent as GreetingsText } from "../assets/greetings-text.svg"
import { useEffect, useRef, useState } from "react"
import { useIsVisible } from "react-is-visible"

import scrollIcon from "../assets/icons/scroll-icon.png"
import swipeIcon from "../assets/icons/swipe-icon.png"

export const Introduction = () => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)
  const [showHelper, setShowHelper] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [helperShown, setHelperShown] = useState(false)

  useEffect(() => {
    const greetingsText = document.getElementById("greetings-text")
    greetingsText.classList.remove("hide-greetings")
  }, [])

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)") // Adjust the breakpoint as needed

    const handleMobileChange = (event) => {
      setIsMobile(event.matches)
    }

    mobileMediaQuery.addEventListener("change", handleMobileChange)
    setIsMobile(mobileMediaQuery.matches)

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange)
    }
  }, [])

  isVisible &&
    (() => {
      let currentNav = document.querySelector(".activeNav")
      if (currentNav && currentNav.classList) {
        currentNav.classList.remove("activeNav")
      }
      let skillsSectionNav = document.getElementById("intro-nav")
      skillsSectionNav.classList.add("activeNav")
    })()

  let scrollEl
  setTimeout(() => {
    if (!helperShown) {
      setShowHelper(true)
      setHelperShown(true)
      scrollEl = document.getElementById("horizontal-scroll-container")
      scrollEl.addEventListener("scroll", handleScrollEvent)
    }
  }, 2000)

  const handleScrollEvent = () => {
    setShowHelper(false)
    scrollEl.removeEventListener("scroll", handleScrollEvent)
  }

  return (
    <section id="introduction">
      <GreetingsText ref={nodeRef} />
      {showHelper && !isMobile && (
        <img id="scroll-helper" src={scrollIcon} alt="scroll icon" />
      )}
      {showHelper && isMobile && (
        <img id="swipe-helper" src={swipeIcon} alt="swipe icon" />
      )}
    </section>
  )
}
