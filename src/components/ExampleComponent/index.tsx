import { VFC } from 'react'

import styles from './styles.module.css'

export const ExampleComponent: VFC = () => {
  return <button className={styles.btn}>ボタンだよ</button>
}
