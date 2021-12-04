type Item = {
  key: string
  name: string
  config: {
    positionX: number
    positionY: number
    positionZ?: number
    moveX?: number
    moveY?: number
    height?: number
    width?: number
    rotate?: number
  }
}

export const ITEMS: Item[] = [
  {
    key: 'anchor',
    name: 'anchor',
    config: {
      positionX: 50,
      positionY: 50,
      positionZ: -1,
      width: 68,
      rotate: 0.06,
    },
  },
  {
    key: 'seahorse',
    name: 'seahorse',
    config: {
      positionX: 74,
      positionY: 15,
      moveX: 1.5,
      moveY: -0.85,
      width: 10,
    },
  },
  {
    key: 'rockfish',
    name: 'rockfish',
    config: {
      positionX: 35,
      positionY: 94,
      moveX: 1.5,
      moveY: -0.85,
      width: 10,
      rotate: 0.6,
    },
  },
  {
    key: 'anglerfish',
    name: 'anglerfish',
    config: {
      positionX: 97,
      positionY: 63,
      moveX: 1.5,
      moveY: -0.85,
      width: 10,
      rotate: -0.5,
    },
  },
  {
    key: 'conch-shell',
    name: 'conch-shell',
    config: {
      positionX: 10,
      positionY: 40,
      moveX: 0.1,
      moveY: 0.1,
      width: 10,
      rotate: 1.8,
    },
  },
  {
    key: 'angelfish',
    name: 'angelfish',
    config: {
      positionX: 40,
      positionY: 35,
      positionZ: -2,
      moveX: 1.5,
      moveY: 0.85,
      width: 10,
      rotate: 0.1,
    },
  },
  {
    key: 'fish',
    name: 'fish',
    config: {
      positionX: 20,
      positionY: 65,
      positionZ: -2,
      moveX: 1,
      moveY: -0.4,
      width: 8,
      rotate: -0.2,
    },
  },
  {
    key: 'jellyfish',
    name: 'jellyfish',
    config: {
      positionX: 10,
      positionY: 80,
      moveX: 0.1,
      moveY: 0.1,
      width: 10,
      rotate: -0.1,
    },
  },
  {
    key: 'shark2',
    name: 'shark2',
    config: {
      positionX: 74,
      positionY: 70,
      moveX: 1.5,
      moveY: 0.1,
      width: 30,
      rotate: 0.2,
    },
  },
  {
    key: 'starfish',
    name: 'starfish',
    config: {
      positionX: 90,
      positionY: 90,
      moveX: 0.1,
      moveY: 0.1,
      width: 10,
      rotate: -1.8,
    },
  },
]
