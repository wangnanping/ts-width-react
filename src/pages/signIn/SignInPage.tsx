import React from 'react'
import stroe from '../../redux/store'
import Style from './SignInPage.module.css'

export const SignInPage: React.FC = props => {
  console.log(props)
  console.log(stroe.getState())
  return (
    <>
      <div className={Style.tree}>
        <ul>
          <li>
            <a href='#'>
              <div className={Style.heda}></div>
            </a>
            <ul>
              <li>
                <a href='#'>
                  <div className={Style.heda}></div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div className={Style.heda}></div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div className={Style.heda}></div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div className={Style.heda}></div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div className={Style.heda}></div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div className={Style.heda}></div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div >
        <ul className={Style.list}>
          <li>12</li>
          <li>12</li>
          <li>12</li>
          <li>12</li>
          <li>12</li>
        </ul>
      </div>
    </>
  )
}
