import "./styles/Portfolio.css"
import { Introduction } from "./components/Introduction"
import { Skills } from "./components/Skills"
import { NavBar } from "./components/NavBar"

import { useHorizontalScroll } from "./utils/horizontalScroll"

const Portfolio = () => {
  const scrollRef = useHorizontalScroll()

  return (
    <div
      style={{ whiteSpace: "nowrap" }}
      id="horizontal-scroll-container"
      ref={scrollRef}
    >
      <div id="horizontal-scroll-area">
        <NavBar />
        <Introduction />
        <Skills />
      </div>
    </div>
  )
}

export default Portfolio
