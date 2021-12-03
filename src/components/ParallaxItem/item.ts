type Item = {
  identifier: string
  size: number
  backgroundPositionX: number
  backgroundPositionY: number
  config: {
    positionX: number
    positionY: number
    positionZ?: number
    moveX: number
    moveY: number
    height: number
    width: number
    rotate?: number
  }
}

export const ITEMS: Item[] = [
  {
    identifier: 'anchor',
    backgroundPositionX: 53.15,
    backgroundPositionY: 50,
    size: 739,
    config: {
      positionX: 50,
      positionY: 54,
      moveX: 0.15,
      moveY: -0.25,
      height: 58,
      width: 55,
      rotate: 0.01,
    },
  },
  {
    identifier: 'seahorse',
    size: 2620,
    backgroundPositionX: -0.075,
    backgroundPositionY: 0,
    config: {
      positionX: 74,
      positionY: 15,
      positionZ: -1,
      moveX: 1.5,
      moveY: -0.85,
      height: 17,
      width: 17,
    },
  },
  {
    identifier: 'rockfixh',
    size: 10000,
    backgroundPositionX: 3.75,
    backgroundPositionY: -1,
    config: {
      positionX: 35,
      positionY: 94,
      moveX: 1.5,
      moveY: -0.85,
      height: 7,
      width: 4,
      rotate: 0.6,
    },
  },
  {
    identifier: 'anglerfish',
    size: 5800,
    backgroundPositionX: 10.15,
    backgroundPositionY: -0.25,
    config: {
      positionX: 97,
      positionY: 63,
      moveX: 1.5,
      moveY: -0.85,
      height: 4,
      width: 8,
      rotate: -0.5,
    },
  },
]
