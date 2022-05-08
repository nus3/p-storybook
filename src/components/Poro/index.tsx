/* eslint-disable @next/next/no-img-element */
import { VFC } from 'react'
import { createPublicPath } from 'utils/path'

import './styles.css'

// TODO: 残ってるところ
// 口
// 爪
// 角
// クッキー

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
        <div className="poro-head">
          <div className="poro-head_base poro-head__left-eye">
            <div className="poro-head_base poro-head__left-eye_bright" />
          </div>
          <div className="poro-head_base poro-head__left-eye_bottom" />
          <div className="poro-head_base poro-head__left-cheek" />
          <div className="poro-head_base poro-head__right-eye">
            <div className="poro-head_base poro-head__right-eye_bright" />
          </div>
          <div className="poro-head_base poro-head__right-eye_bottom" />
          <div className="poro-head_base poro-head__right-cheek" />
        </div>
      </div>
    </div>
  )
}
