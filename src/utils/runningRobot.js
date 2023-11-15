import knightSprite from "../assets/sprties/knight-running.png"
import botSpriteRight from "../assets/sprties/bot-sprite-walk-right.png"
import botSpriteLeft from "../assets/sprties/bot-sprite-walk-left.png"
import botSpriteStanding from "../assets/sprties/bot-sprite-standing.png"
import helloBubble from "../assets/sprties/speech-bubbles/greetings-bubble.png"
import sadBubble from "../assets/sprties/speech-bubbles/sad-bubble.png"
import questionBubble from "../assets/sprties/speech-bubbles/question-bubble.png"
import waitBubble from "../assets/sprties/speech-bubbles/wait-bubble.png"
import endBubble from "../assets/sprties/speech-bubbles/end-bubble.png"
import skillsBubble from "../assets/sprties/speech-bubbles/skills-bubble.png"

export const runningRobot = async () => {
  const canvas = await waitForElm("#running-robot")
  const scrolledWindow = await waitForElm("#horizontal-scroll-container")
  const skillsSection = await waitForElm("#skills")
  const socialsSection = await waitForElm("#socials-trigger")
  const skillsSectionPosLeft = skillsSection.getBoundingClientRect().left
  const skillsSectionPosRight = skillsSection.getBoundingClientRect().right
  const socialsSectionPos = socialsSection.getBoundingClientRect().left
  // canvas.width = scrolledWindow.scrollWidth
  const fps = 30

  const c = canvas.getContext("2d")

  let speechStage = 0
  let speechTriggerStage = 0
  let caseToggle = false

  class Robot {
    constructor() {
      this.velocity = 13
      this.position = {
        x: 100,
        y: 95,
      }
      this.width = 150
      this.height = 60

      this.img = createImage(botSpriteStanding)
      this.frames = 0
      this.sprites = {
        stand: {
          straight: createImage(botSpriteStanding),
        },
        run: {
          right: createImage(botSpriteRight),
          left: createImage(botSpriteLeft),
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
      } else if (this.currentSprite === this.sprites.stand.straight) {
        this.frames = 0
      }
      this.draw()
    }
  }

  class Speechbubble {
    constructor(image) {
      this.position = {
        x: 0,
        y: 0,
      }
      this.width = 200
      this.height = 100
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
      case 1:
        bubbleToShow = sadBubbleObj
        break
      case 3:
        bubbleToShow = questionBubbleObj
        break
      case 6:
        bubbleToShow = waitBubbleObj
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
      case 4:
        bubbleToShow = endBubbleObj
        break
    }
    return bubbleToShow
  }

  const checkTriggers = () => {
    if (
      scrolledWindow.scrollLeft + scrolledWindow.clientWidth / 2 >
        skillsSectionPosLeft &&
      scrolledWindow.scrollLeft + scrolledWindow.clientWidth / 2 <
        skillsSectionPosRight
    ) {
      speechTriggerStage = 1
    } else if (
      socialsSectionPos <=
      scrolledWindow.scrollLeft + scrolledWindow.clientWidth / 2
    ) {
      speechTriggerStage = 4
    } else {
      speechTriggerStage = 0
      stageBubbleToShow = null
    }
  }

  const robot = new Robot()
  const helloBubbleObj = new Speechbubble(helloBubble)
  const sadBubbleObj = new Speechbubble(sadBubble)
  const questionBubbleObj = new Speechbubble(questionBubble)
  const waitBubbleObj = new Speechbubble(waitBubble)
  const endBubbleObj = new Speechbubble(endBubble)
  const skillsBubbleObj = new Speechbubble(skillsBubble)

  let prevCanvasPos
  let bubbleToShow = null
  let stageBubbleToShow = null
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
    } else if (
      canvas.style.left.replace("px", "") >
      scrolledWindow.scrollLeft + scrolledWindow.clientWidth / 2 + 20
    ) {
      canvas.style.left = Number(prevCanvasPos) - robot.velocity + "px"
      robot.currentSprite = robot.sprites.run.left
      caseToggle = false
      bubbleToShow = null
    } else {
      robot.currentSprite = robot.sprites.stand.straight
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
