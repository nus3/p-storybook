import { useState, VFC } from 'react'

import styles from './styles.module.css'

export const ExampleComponent: VFC = () => {
  const [rows, setRows] = useState<string[]>([])

  const handleClickAdd = () => {
    const r = [...rows]
    r.push('')
    setRows(r)
  }

  const handleClickReset = () => {
    setRows([])
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.btnWrap}>
        <button className={styles.btn} onClick={handleClickAdd}>
          Add
        </button>
        <button className={styles.btn} onClick={handleClickReset}>
          Reset
        </button>
      </div>
      <ul className={styles.list}>
        {rows.map((row, index) => (
          <li key={index} className={styles.item}>
            {`${index + 1}番目のコンテンツ`}
          </li>
        ))}
      </ul>
    </div>
  )
}
