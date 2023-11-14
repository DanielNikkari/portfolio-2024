import "./styles/Portfolio.css"
import "./styles/generalStyles.css"
import { Introduction } from "./components/Introduction"
import { Skills } from "./components/Skills"
import { NavBar } from "./components/NavBar"
import { Projects } from "./components/Projects"
import { SocialsInfo } from "./components/SocialsInfo"
import { Work } from "./components/Work"
import { RunningRobot } from "./components/RunningRobot"

import { useHorizontalScroll } from "./utils/horizontalScroll"
import { userNavStyle } from "./utils/navBarUtil"
import { runningRobot } from "./utils/runningRobot"

const Portfolio = () => {
  const scrollRef = useHorizontalScroll()
  const navBarActiveStyle = userNavStyle()
  runningRobot()

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
        <Work navBarActiveStyle={navBarActiveStyle} />
        <SocialsInfo navBarActiveStyle={navBarActiveStyle} />
      </div>
      <RunningRobot navBarActiveStyle={navBarActiveStyle} />
    </div>
  )
}

export default Portfolio
