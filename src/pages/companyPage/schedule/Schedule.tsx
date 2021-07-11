import React from 'react'
import { Button, Radio } from 'antd'
import classNames from 'classnames'
import "./schedule.scss"
import OlympicGames from './olympic-games/olympic-games' // 奥运会奖牌榜
import China from './china/china' //中国奖牌榜

interface Prop {}

interface StateType {
  tabList: { isOk: boolean; tabName: string; tabEN: string }[]
  tabShow: string
  tabRightContent: { text: string; num: number }[]
}

export class Schedule extends React.Component<Prop, StateType> {
  constructor (props) {
    super(props)
    this.state = {
      tabList: [
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
      tabShow: 'olympicGames',
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

  tabList = (tabName: string) => {
    let newTabList: any[] = []
    let newTabShow: string = ''
    this.state.tabList.forEach(item => {
      if (item.tabEN == tabName) {
        item.isOk = true
        newTabShow = item.tabEN
      } else {
        item.isOk = false
      }
      newTabList.push(item)
    })
    this.setState({
      tabList: newTabList,
      tabShow: newTabShow
    })
  }

  render () {
    return (
      <div className='mian'>
        {' '}
        // 这个是模拟宽度
        <div className='schedule-warp'>
          <div className='tab-box'>
            <div className='tab-list'>
              {this.state.tabList.map((item, index) => {
                return (
                  <span
                    className={classNames(
                      'item-btn',
                      item.isOk ? 'item-btn-isOk' : ''
                    )}
                    key={`${item.tabEN}${index}`}
                    onClick={() => {
                      this.tabList(item.tabEN)
                    }}
                  >
                    {item.tabName}
                  </span>
                )
              })}
            </div>
            <div className='content-right'>
              {this.state.tabRightContent.map((item, index) => {
                return (
                  <div className='content-box' key={`${index}content`}>
                    {item.text}
                    <span className='content-num'>{item.num}</span>
                  </div>
                )
              })}
            </div>
          </div>
          {this.state.tabShow == 'olympicGames' ? (
            <OlympicGames></OlympicGames>
          ) : (
            <China></China>
          )}
        </div>
      </div>
    )
  }
}
