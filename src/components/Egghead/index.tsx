/* eslint-disable @next/next/no-img-element */
import { VFC } from 'react'
import { createPublicPath } from 'utils/path'

import './styles.css'

export const Egghead: VFC = () => {
  return (
    <div className="wrap">
      <img
        className="img"
        src={createPublicPath(`/images/egghead.png`)}
        alt={`egghead icon`}
      />
      <div className="egg">
        <div className="specs__arms" />
        <div className="egg_shell shell">
          <div className="shell__piece shell__piece--top" />
          <div className="shell__piece shell__piece--middle" />
          <div className="shell__piece shell__piece--bottom" />
        </div>
        <div className="egg_specs specs">
          <div className="specs_lens specs__lens--left" />
          <div className="specs_lens specs__lens--right" />
          <div className="specs_bridge" />
        </div>
      </div>
    </div>
  )
}
