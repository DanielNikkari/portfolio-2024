import { useRef, useEffect } from "react"

export const useHorizontalScroll = () => {
  const elRef = useRef()
  useEffect(() => {
    const el = elRef.current
    if (el) {
      const onWheel = (e) => {
        e.preventDefault()
        if (e.deltaY > -6 && e.deltaY < 6) return
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        })
      }
      el.addEventListener("wheel", onWheel)
      return () => el.removeEventListener("wheel", onWheel)
    }
  }, [])
  return elRef
}

export const scrolledX = () => {
  const scrolled = document.getElementById("horizontal-scroll-container")

  if (scrolled) {
    return scrolled.scrollLeft
  }
  return 0
}

export const getScrollAreaWidth = () => {
  const scrolled = document.getElementById("horizontal-scroll-container")
  return [scrolled.scrollWidth, scrolled.clientWidth]
}
