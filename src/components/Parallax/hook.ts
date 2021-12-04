import { RefObject, useEffect } from 'react'
import gsap from 'gsap'

export const useParallax = (
  callback: (x: number, y: number) => void,
  elementRef: RefObject<HTMLDivElement>,
  proximity = 100,
) => {
  useEffect(() => {
    const updateXY = ({ x, y }: PointerEvent) => {
      if (!elementRef.current) return

      const bounds = 100
      const elementBounds = elementRef.current.getBoundingClientRect()
      const centerX = elementBounds.left + elementBounds.width / 2
      const centerY = elementBounds.top + elementBounds.height / 2

      // gsap.utils.mapRangeはinputとoutputの最大・最小の比率を出し、valueをその比率で算出する
      // mapRange(inMin: number, inMax: number, outMin: number, outMax: number, value: number)
      const boundX = gsap.utils.mapRange(
        centerX - proximity,
        centerX + proximity,
        -bounds,
        bounds,
        x,
      )
      const boundY = gsap.utils.mapRange(
        centerY - proximity,
        centerY + proximity,
        -bounds,
        bounds,
        y,
      )
      callback(boundX / 100, boundY / 100)
    }

    window.addEventListener('pointermove', updateXY)
    return () => {
      window.removeEventListener('pointermove', updateXY)
    }
  }, [callback, elementRef, proximity])
}
