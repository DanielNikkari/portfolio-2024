import { useRef, useEffect } from "react"

export const RunningRobot = ({ navBarActiveStyle }) => {
  const canvasRef = useRef()

  // Check if user is using Safari and add custom styling
  useEffect(() => {
    navBarActiveStyle.toLowerCase().includes("safari") &&
      (canvasRef.current.style.top = "-70px")
  }, [])

  return <canvas ref={canvasRef} id="running-robot" />
}
