import "../styles/Introduction.css"
import { ReactComponent as GreetingsText } from "../assets/greetings-text.svg"
import { useEffect } from "react"

export const Introduction = () => {
  useEffect(() => {
    const greetingsText = document.getElementById("greetings-text")
    console.log(greetingsText.classList)
    greetingsText.classList.remove("hide-greetings")
  }, [])

  return (
    <section id="introduction">
      <div id="greetings-text-container">
        <GreetingsText />
      </div>
    </section>
  )
}
