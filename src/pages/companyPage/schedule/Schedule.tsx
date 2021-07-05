import React from 'react'
import Style from './Schedule.module.css'
import { Button, Radio } from 'antd'
import classNames from 'classnames'

import OlympicGames from './olympicGames/OlympicGames'
import China from './china/China'

interface Prop {}

interface StateType {
  tabActive: {
    isOk: boolean
    tabName: string
    tabEN: string
  }[]
  tabRightContent: { text: string; num: number }[]
}

export class Schedule extends React.Component<Prop, StateType> {
  constructor (props) {
    super(props)
    this.state = {
      tabActive: [
        {
          isOk: true,
          tabName: '奥运会奖牌榜',
          tabEN: 'olympicGames'
        },
        {
          isOk: false,
          tabName: '中国奖牌榜',
          tabEN: 'china'
        }
      ],
      tabRightContent: [
        {
          text: '金牌',
          num: 200
        },
        {
          text: '银牌',
          num: 200
        },
        {
          text: '铜牌',
          num: 200
        },
        {
          text: '总数',
          num: 200
        }
      ]
    }
  }

  tabActive = (tabName: string) => {
    let newTabList: any = []
    this.state.tabActive.forEach(item => {
      item.tabEN == tabName ? (item.isOk = true) : (item.isOk = false)
      newTabList.push(item)
    })
    this.setState({
      tabActive: newTabList
    })
  }

  render () {
    return (
      <div className={Style.mian}>
        {' '}
        // 这个是模拟宽度
        <div className={Style.schedule_warp}>
          <div className={Style.tab_box}>
            <div className={Style.tab_list}>
              {this.state.tabActive.map((item, index) => {
                return (
                  <span
                    className={classNames(
                      Style.item_btn,
                      item.isOk ? Style.item_btn_isOk : ''
                    )}
                    key={`${item.tabEN}${index}`}
                    onClick={() => {
                      this.tabActive(item.tabEN)
                    }}
                  >
                    {item.tabName}
                  </span>
                )
              })}
            </div>
            <div className={Style.content_right}>
              {this.state.tabRightContent.map((item, index) => {
                return (
                  <div className={Style.content_box} key={`${index}content`}>
                    {item.text}
                    <span className={Style.content_num}>{item.num}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <OlympicGames></OlympicGames> // 奥运会奖牌榜
          <China></China> //中国奖牌榜
        </div>
      </div>
    )
  }
}
