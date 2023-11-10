import { useRef, useEffect } from "react"

export function useHorizontalScroll() {
  const elRef = useRef()
  console.log(elRef)
  useEffect(() => {
    const el = elRef.current
    if (el) {
      const onWheel = (e) => {
        e.preventDefault()
        if (e.deltaY > -6 && e.deltaY < 6) return
        el.scrollTo({
          left: el.scrollLeft + e.deltaY / 3,
        })
      }
      el.addEventListener("wheel", onWheel)
      return () => el.removeEventListener("wheel", onWheel)
    }
  }, [])
  return elRef
}
