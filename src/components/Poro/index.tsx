/* eslint-disable @next/next/no-img-element */
import { VFC } from 'react'
import { createPublicPath } from 'utils/path'

import './styles.css'

export const Poro: VFC = () => {
  return (
    <div className="poro-wrap">
      <img src={createPublicPath(`/images/poro.png`)} alt={`poro icon`} />
      <div className="poro">
        <div className="poro-body">
          <div className="poro-body_base poro-body__top-right" />
          <div className="poro-body_base poro-body__top-left" />
          <div className="poro-body_base poro-body__center" />
          <div className="poro-body_base poro-body__center-left" />
          <div className="poro-body_base poro-body__left-hand" />
          <div className="poro-body_base poro-body__bottom-left" />
          <div className="poro-body_base poro-body__left-foot" />
          <div className="poro-body_base poro-body__bottom" />
          <div className="poro-body_base poro-body__center-right" />
          <div className="poro-body_base poro-body__right-hand" />
          <div className="poro-body_base poro-body__right-foot" />
        </div>
      </div>
    </div>
  )
}
