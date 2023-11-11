import { useRef, useEffect } from "react"

let scrollAmount = 0

export const useHorizontalScroll = () => {
  let lastDragPoint = 0
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

      let startDragPoint
      const onDrag = (e) => {
        if (lastDragPoint !== undefined) {
          const currentDragPoint = e.touches[0].screenY
          const dragDelta = currentDragPoint - lastDragPoint

          // console.log("scroll delta:", dragDelta)
          e.preventDefault()
          if (dragDelta === 0) return
          el.scrollTo({
            left: el.scrollLeft - dragDelta * 1.5,
          })
          lastDragPoint = currentDragPoint
          scrollAmount = +el.scrollLeft - dragDelta
        } else {
          // Initialize lastDragPoint when starting the drag
          lastDragPoint = e.touches[0].screenY
        }
        // lastDragPoint = e.touches[0].screenY
      }

      const onTouchStart = (e) => {
        // Reset lastDragPoint when starting a new touch
        lastDragPoint = undefined
        startDragPoint = e.touches[0].screenY
      }

      const onTouchEnd = () => {
        // Clean up after touch ends
        lastDragPoint = 0
      }

      if ("ontouchstart" in window) {
        el.addEventListener("touchstart", onTouchStart)
        el.addEventListener("touchmove", onDrag)
        el.addEventListener("touchend", onTouchEnd)
      } else {
        el.addEventListener("wheel", onWheel)
      }
      return () => {
        if ("ontouchstart" in window) {
          el.removeEventListener("touchstart", onTouchStart)
          el.removeEventListener("touchmove", onDrag)
          el.removeEventListener("touchend", onTouchEnd)
        } else {
          el.removeEventListener("wheel", onWheel)
        }
      }
    }
  }, [])
  return elRef
}

export const scrolledX = () => {
  return scrollAmount
}

// let scrollAmount = 0

// export const useHorizontalScroll = () => {
//   const elRef = useRef()
//   useEffect(() => {
//     const el = elRef.current
//     if (el) {
//       const onWheel = (e) => {
//         e.preventDefault()
//         if (e.deltaY > -6 && e.deltaY < 6) return
//         el.scrollTo({
//           left: el.scrollLeft + e.deltaY / 3,
//         })
//         scrollAmount = +el.scrollLeft + e.deltaY / 3
//       }
//       el.addEventListener("wheel", onWheel)
//       return () => el.removeEventListener("wheel", onWheel)
//     }
//   }, [])
//   return elRef
// }
