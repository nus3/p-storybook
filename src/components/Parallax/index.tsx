/* eslint-disable @next/next/no-img-element */

import { CSSProperties, ReactNode, useCallback, useRef, VFC } from 'react'
import gsap from 'gsap'

import styles from './styles.module.css'
import { useParallax } from 'components/Parallax/hook'

type ParallaxConfig = {
  coefficientX?: number
  coefficientY?: number
  rotate?: number
  rotateX?: number
  rotateY?: number
}

interface ContainerCSS extends CSSProperties {
  '--r': number
  '--rx': number
  '--ry': number
}

export type ParallaxProps = {
  config: ParallaxConfig
  children: ReactNode | ReactNode[]
}

const calcXY =
  (
    element: HTMLDivElement,
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

export const Parallax: VFC<ParallaxProps> = ({ config, children }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const callback = useCallback((x: number, y: number) => {
    if (!containerRef.current) return

    containerRef.current.style.setProperty(
      '--range-x',
      `${Math.floor(gsap.utils.clamp(-60, 60, x * 100))}`,
    )
    containerRef.current.style.setProperty(
      '--range-y',
      `${Math.floor(gsap.utils.clamp(-60, 60, y * 100))}`,
    )
  }, [])

  // window.innerWidth * 0.5が実際のコードと違うからバグったならここが原因かも
  useParallax(callback, containerRef, window.innerWidth * 0.5)

  return (
    <div
      className={styles.parallax}
      ref={containerRef}
      style={
        {
          '--r': config.rotate,
          '--rx': config.rotateX,
          '--ry': config.rotateY,
        } as ContainerCSS
      }
    >
      {children}
    </div>
  )
}

export const ParallaxWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => <div className={styles.wrap}>{children}</div>
