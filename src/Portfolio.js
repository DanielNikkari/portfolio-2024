import "./styles/Portfolio.css"
import "./styles/generalStyles.css"
import { Introduction } from "./components/Introduction"
import { Skills } from "./components/Skills"
import { NavBar } from "./components/NavBar"
import { Projects } from "./components/Projects"
import { SocialsInfo } from "./components/SocialsInfo"

import { useHorizontalScroll } from "./utils/horizontalScroll"
import { userNavStyle } from "./utils/navBarUtil"

const Portfolio = () => {
  const scrollRef = useHorizontalScroll()
  const navBarActiveStyle = userNavStyle()

  return (
    <div
      style={{ whiteSpace: "nowrap" }}
      id="horizontal-scroll-container"
      ref={scrollRef}
    >
      <div id="horizontal-scroll-area">
        <NavBar navBarActiveStyle={navBarActiveStyle} />
        <Introduction navBarActiveStyle={navBarActiveStyle} />
        <Skills navBarActiveStyle={navBarActiveStyle} />
        <Projects navBarActiveStyle={navBarActiveStyle} />
        <SocialsInfo navBarActiveStyle={navBarActiveStyle} />
      </div>
    </div>
  )
}

export default Portfolio
