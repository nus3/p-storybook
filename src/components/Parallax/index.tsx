/* eslint-disable @next/next/no-img-element */

import { CSSProperties, useEffect, useRef, VFC } from 'react'
import gsap from 'gsap'
import classnames from 'classnames'

import styles from './styles.module.css'

export type ParallaxProps = {}

const calcXY =
  (
    element: EventTarget & HTMLDivElement,
    proximity: number,
    bounds: number,
    callback: (x: number, y: number) => void,
  ) =>
  ({ x, y }: PointerEvent) => {
    const elementBounds = element.getBoundingClientRect()
    const centerX = elementBounds.left + elementBounds.width / 2
    const centerY = elementBounds.top + elementBounds.height / 2
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
    callback(boundX, boundY)
  }

interface ItemCSSCustomProperties extends CSSProperties {
  '--move-x': number
  '--move-y': number
  '--rotate': number
  '--x': number
  '--y': number
  '--size': number
  '--hue': number
}

export const Parallax: VFC<ParallaxProps> = ({}: ParallaxProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    document.addEventListener(
      'pointermove',
      calcXY(containerRef.current, 100, 100, (x, y) => {
        const clampedX = Math.floor(gsap.utils.clamp(-100, 100, x)) / 100
        const clampedY = Math.floor(gsap.utils.clamp(-100, 100, y)) / 100

        if (!containerRef.current) return

        containerRef.current.style.setProperty('--ratio-x', `${clampedX}`)
        containerRef.current.style.setProperty('--ratio-y', `${clampedY}`)
      }),
    )
  }, [containerRef])

  return (
    <div className={styles.hoo}>
      <div className={styles.wrap} ref={containerRef}>
        <img
          src="/icons/a.png"
          alt="icon of a"
          className={classnames(styles.item, styles.item1)}
          style={
            {
              '--move-x': -1,
              '--rotate': 90,
              '--x': 10,
              '--y': 60,
              '--size': 30,
              '--hue': 220,
            } as ItemCSSCustomProperties
          }
        />
        <img
          src="/icons/b.png"
          alt="icon of b"
          className={classnames(styles.item, styles.item2)}
          style={
            {
              '--move-x': 1.6,
              '--move-y': -2,
              '--rotate': -45,
              '--x': 75,
              '--y': 20,
              '--size': 50,
              '--hue': 240,
            } as ItemCSSCustomProperties
          }
        />
        <img
          src="/icons/c.png"
          alt="icon of c"
          className={classnames(styles.item, styles.item3)}
          style={
            {
              '--move-x': -3,
              '--move-y': 1,
              '--rotate': 360,
              '--x': 75,
              '--y': 80,
              '--size': 40,
              '--hue': 260,
            } as ItemCSSCustomProperties
          }
        />
      </div>
    </div>
  )
}
