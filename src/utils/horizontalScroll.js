import { useRef, useEffect } from "react"

let scrollAmount = 0

export const useHorizontalScroll = () => {
  const elRef = useRef()
  useEffect(() => {
    const el = elRef.current
    if (el) {
      const onWheel = (e) => {
        e.preventDefault()
        if (e.deltaY > -6 && e.deltaY < 6) return
        el.scrollTo({
          left: el.scrollLeft + e.deltaY / 3,
        })
        scrollAmount = +el.scrollLeft + e.deltaY / 3
      }
      el.addEventListener("wheel", onWheel)
      return () => el.removeEventListener("wheel", onWheel)
    }
  }, [])
  return elRef
}

export const scrolledX = () => {
  return scrollAmount
}
