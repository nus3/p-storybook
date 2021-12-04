/* eslint-disable @next/next/no-img-element */

import { CSSProperties, ReactNode, useCallback, useRef, VFC } from 'react'
import gsap from 'gsap'

import styles from './styles.module.css'
import { useParallax } from 'components/Parallax/hook'
import { ITEMS } from 'components/ParallaxItem/item'
import { ParallaxItem } from 'components/ParallaxItem'

type ParallaxConfig = {
  rotate?: number
  rotateX?: number
  rotateY?: number
  motionRate?: number
}

interface ContainerCSS extends CSSProperties {
  '--r': number
  '--rx': number
  '--ry': number
  '--motion-rate': number
}

export type ParallaxProps = {
  config: ParallaxConfig
}

export const Parallax: VFC<ParallaxProps> = ({ config }) => {
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
          '--motion-rate': config.motionRate,
        } as ContainerCSS
      }
    >
      {ITEMS.map((item) => (
        <ParallaxItem key={item.key} config={item.config}>
          <img
            className={styles.item}
            src={`/icons/${item.name}.png`}
            alt={`${item.name} icon`}
          />
        </ParallaxItem>
      ))}
    </div>
  )
}

export const ParallaxWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => <div className={styles.wrap}>{children}</div>
