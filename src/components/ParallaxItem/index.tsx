import { ReactNode, VFC } from 'react'
import styles from './styles.module.css'

interface ItemCSS extends React.CSSProperties {
  '--x': number
  '--y': number
  '--z': number
  '--r': number
  '--rx': number
  '--ry': number
  '--mx': number
  '--my': number
  '--height': number
  '--width': number
  '--motion-rate': number
}

type ParallaxItemConfig = {
  positionX?: number
  positionY?: number
  positionZ?: number
  rotate?: number
  rotateX?: number
  rotateY?: number
  moveX?: number
  moveY?: number
  height?: number
  width?: number
  motionRate?: number
}

const DEFAULT_CONFIG: ParallaxItemConfig = {
  // Starting positions for X and Y
  positionX: 50,
  positionY: 50,
  positionZ: 0,
  // Range of movement in decimal where 1 === 100. Use negative for opposite directions.
  // Range of movement in decimal where 1 === 100. Use negative for opposite directions.
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  moveX: 0,
  moveY: 0,
  motionRate: 1,
}

type ParallaxItemProps = {
  config: ParallaxItemConfig
  children: ReactNode | ReactNode[]
}

export const ParallaxItem: VFC<ParallaxItemProps> = ({ config, children }) => {
  const {
    positionX,
    positionY,
    positionZ,
    rotate,
    rotateX,
    rotateY,
    moveX,
    moveY,
    height,
    width,
  } = { ...DEFAULT_CONFIG, ...config }

  return (
    <div
      className={styles.wrap}
      style={
        {
          '--x': positionX,
          '--y': positionY,
          '--z': positionZ,
          '--r': rotate,
          '--rx': rotateX,
          '--ry': rotateY,
          '--mx': moveX,
          '--my': moveY,
          '--height': height,
          '--width': width,
        } as ItemCSS
      }
    >
      {children}
    </div>
  )
}

ParallaxItem.defaultProps = {
  config: DEFAULT_CONFIG,
}
