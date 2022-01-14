/* eslint-disable @next/next/no-img-element */
import { VFC } from 'react'
import { createPublicPath } from 'utils/path'

import styles from './styles.module.css'

export const Poro: VFC = () => {
  return (
    <div className={styles.wrap}>
      <img
        className={styles.img}
        src={createPublicPath(`/images/poro.png`)}
        alt={`poro icon`}
      />
      <div className={styles.poroWrap}>
        <div className={styles.poro1} />
        <div className={styles.poro2} />
      </div>
    </div>
  )
}
