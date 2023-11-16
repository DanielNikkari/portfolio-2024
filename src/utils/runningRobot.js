import botSpriteRight from "../assets/sprties/bot-sprite-walk-right.png"
import botSpriteLeft from "../assets/sprties/bot-sprite-walk-left.png"
import botSpriteStanding from "../assets/sprties/bot-sprite-standing.png"
import botSpriteStandRight from "../assets/sprties/bot-sprite-stand-right.png"
import botSpriteStandLeft from "../assets/sprties/bot-sprite-stand-left.png"
import botSpriteBored from "../assets/sprties/bot-bored.png"
import helloBubble from "../assets/sprties/speech-bubbles/greetings-bubble.png"
import sadBubble from "../assets/sprties/speech-bubbles/sad-bubble.png"
import questionBubble from "../assets/sprties/speech-bubbles/question-bubble.png"
import waitBubble from "../assets/sprties/speech-bubbles/wait-bubble.png"
import workBubble from "../assets/sprties/speech-bubbles/work-bubble.png"
import endBubble from "../assets/sprties/speech-bubbles/end-bubble.png"
import skillsBubble from "../assets/sprties/speech-bubbles/skills-bubble.png"
import porjectsBubble from "../assets/sprties/speech-bubbles/projects-bubble.png"

export const runningRobot = async () => {
  const canvas = await waitForElm("#running-robot")
  const scrolledWindow = await waitForElm("#horizontal-scroll-container")

  const skillsSection = await waitForElm("#skills")
  const projectsSection = await waitForElm("#projects-container")
  const workSection = await waitForElm(".work-title-container")
  const socialsSection = await waitForElm("#socials-trigger")
  const skillsSectionPosLeft = skillsSection.getBoundingClientRect().left
  const skillsSectionPosRight = skillsSection.getBoundingClientRect().right
  const projectsSectionLeft = projectsSection.getBoundingClientRect().left
  const projectsSectionRight = projectsSection.getBoundingClientRect().right
  const workSectionLeft = workSection.getBoundingClientRect().left
  const workSectionRight = workSection.getBoundingClientRect().right
  const socialsSectionPos = socialsSection.getBoundingClientRect().left
  // canvas.width = scrolledWindow.scrollWidth
  const fps = 35

  const c = canvas.getContext("2d")

  let speechStage = 0
  let speechTriggerStage = 0
  let caseToggle = false

  class Robot {
    constructor() {
      this.velocity = 13
      this.position = {
        x: 100,
        y: 60,
      }
      this.width = 140
      this.height = 90

      this.img = createImage(botSpriteStanding)
      this.frames = 0
      this.sprites = {
        stand: {
          straight: createImage(botSpriteStanding),
          right: createImage(botSpriteStandRight),
          left: createImage(botSpriteStandLeft),
        },
        run: {
          right: createImage(botSpriteRight),
          left: createImage(botSpriteLeft),
        },
        idle: {
          bored: createImage(botSpriteBored),
        },
      }

      this.currentSprite = this.sprites.stand.straight
    }

    draw() {
      c.drawImage(
        this.currentSprite,
        32 * this.frames,
        0,
        30,
        20,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      )
    }

    update() {
      this.frames++
      if (
        (this.currentSprite === this.sprites.run.right ||
          this.currentSprite === this.sprites.run.left) &&
        this.frames > 5
      ) {
        this.frames = 0
      } else if (
        this.currentSprite === this.sprites.stand.straight ||
        this.currentSprite === this.sprites.stand.right ||
        this.currentSprite === this.sprites.stand.left
      ) {
        this.frames = 0
      } else if (
        this.currentSprite === this.sprites.idle.bored &&
        this.frames > 9
      ) {
        robot.currentSprite = robot.sprites.stand.straight
        this.frames = 0
      }
      this.draw()
    }
  }

  class Speechbubble {
    constructor(image, x = 0, y = 0, width, height) {
      this.position = {
        x: x,
        y: y,
      }
      this.width = width
      this.height = height
      this.active = false
      this.img = createImage(image)
    }

    draw() {
      c.drawImage(
        this.img,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      )
    }

    update() {
      this.draw()
    }
  }

  const createImage = (imgSrc) => {
    const image = new Image()
    image.src = imgSrc
    return image
  }

  const speechBubbles = () => {
    let bubbleToShow
    switch (speechStage) {
      case 0:
        bubbleToShow = helloBubbleObj
        break
    }
    speechStage++
    return bubbleToShow
  }

  const speechTriggers = (bubble) => {
    let bubbleToShow
    switch (speechTriggerStage) {
      case 1:
        bubbleToShow = skillsBubbleObj
        break
      case 2:
        bubbleToShow = porjectsBubbleObj
        break
      case 3:
        bubbleToShow = workBubbleObj
        break
      case 4:
        bubbleToShow = endBubbleObj
        break
    }
    console.log(speechTriggerStage)
    return bubbleToShow
  }

  // Check which section the user has scrolled to
  const checkTriggers = () => {
    if (
      scrolledWindow.scrollLeft + scrolledWindow.clientWidth / 2 >
        skillsSectionPosLeft &&
      scrolledWindow.scrollLeft + scrolledWindow.clientWidth / 2 <
        skillsSectionPosRight
    ) {
      // Trigger for Skills section
      speechTriggerStage = 1
    } else if (
      scrolledWindow.scrollLeft + scrolledWindow.clientWidth / 2 >
        projectsSectionLeft &&
      scrolledWindow.scrollLeft + scrolledWindow.clientWidth / 2 <
        projectsSectionRight
    ) {
      // Trigger for Projects section
      speechTriggerStage = 2
    } else if (
      scrolledWindow.scrollLeft + scrolledWindow.clientWidth / 2 >
        workSectionLeft &&
      scrolledWindow.scrollLeft + scrolledWindow.clientWidth / 2 <
        workSectionRight
    ) {
      // Trigger for Work experience section
      speechTriggerStage = 3
    } else if (
      socialsSectionPos <=
      scrolledWindow.scrollLeft + scrolledWindow.clientWidth / 2
    ) {
      // Trigger for Socials section
      console.log("Socials")
      speechTriggerStage = 4
    } else {
      // Reset values
      speechTriggerStage = 0
      stageBubbleToShow = null
    }
  }

  // Initiate objects
  const robot = new Robot()
  const helloBubbleObj = new Speechbubble(helloBubble, 0, 0, 200, 90)
  const endBubbleObj = new Speechbubble(endBubble, 0, -5, 200, 100)
  const skillsBubbleObj = new Speechbubble(skillsBubble, 0, -5, 300, 100)
  const porjectsBubbleObj = new Speechbubble(porjectsBubble, 0, -5, 300, 100)
  const workBubbleObj = new Speechbubble(workBubble, 0, -5, 300, 80)

  let prevCanvasPos
  let bubbleToShow = null
  let stageBubbleToShow = null
  let timout

  setInterval(() => {
    robot.currentSprite = robot.sprites.idle.bored
  }, 6000)

  const animate = () => {
    prevCanvasPos = canvas.style.left.replace("px", "")
    c.clearRect(0, 0, canvas.width, canvas.height)
    robot.update()

    checkTriggers()

    if (stageBubbleToShow) {
      stageBubbleToShow.update()
    } else if (bubbleToShow) {
      bubbleToShow.update()
    }

    if (
      canvas.style.left.replace("px", "") <
      scrolledWindow.scrollLeft + scrolledWindow.clientWidth / 2 - 70
    ) {
      canvas.style.left = Number(prevCanvasPos) + robot.velocity + "px"
      robot.currentSprite = robot.sprites.run.right
      caseToggle = false
      bubbleToShow = null
      clearTimeout(timout)
    } else if (
      canvas.style.left.replace("px", "") >
      scrolledWindow.scrollLeft + scrolledWindow.clientWidth / 2 + 20
    ) {
      canvas.style.left = Number(prevCanvasPos) - robot.velocity + "px"
      robot.currentSprite = robot.sprites.run.left
      caseToggle = false
      bubbleToShow = null
      clearTimeout(timout)
    } else {
      if (robot.currentSprite === robot.sprites.run.right) {
        robot.currentSprite = robot.sprites.stand.right
        timout = setTimeout(() => {
          robot.currentSprite = robot.sprites.stand.straight
        }, 1500)
      } else if (robot.currentSprite === robot.sprites.run.left) {
        robot.currentSprite = robot.sprites.stand.left
        timout = setTimeout(() => {
          robot.currentSprite = robot.sprites.stand.straight
        }, 1500)
      }
      if (!caseToggle) {
        bubbleToShow = speechBubbles()
        stageBubbleToShow = speechTriggers()
        caseToggle = true
      }
    }

    setTimeout(() => {
      requestAnimationFrame(animate)
    }, 1000 / fps)
  }

  animate()
}

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector))
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect()
        resolve(document.querySelector(selector))
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })
}
