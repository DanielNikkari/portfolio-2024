import "./styles/Portfolio.css"
import "./styles/generalStyles.css"
import { Introduction } from "./components/Introduction"
import { Skills } from "./components/Skills"
import { NavBar } from "./components/NavBar"
import { Projects } from "./components/Projects"
import { SocialsInfo } from "./components/SocialsInfo"

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
        <Projects />
        <SocialsInfo />
      </div>
    </div>
  )
}

export default Portfolio
