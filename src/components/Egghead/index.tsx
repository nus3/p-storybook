/* eslint-disable @next/next/no-img-element */
import { VFC } from 'react'
import { createPublicPath } from 'utils/path'

import styles from './styles.module.css'

export const Egghead: VFC = () => {
  return (
    <div className={styles.wrap}>
      <img
        className={styles.img}
        src={createPublicPath(`/images/egghead.png`)}
        alt={`egghead icon`}
      />
      <div className={styles.egg} />
    </div>
  )
}
