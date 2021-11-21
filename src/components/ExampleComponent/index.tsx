import { useState, VFC } from 'react'

import styles from './styles.module.css'

export type ExampleComponentProps = {
  onClickFoo: () => void
}

export const ExampleComponent: VFC<ExampleComponentProps> = ({
  onClickFoo,
}: ExampleComponentProps) => {
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
        <button className={styles.btn} onClick={onClickFoo}>
          Foo
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
