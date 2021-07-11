import React from 'react'
import './schedule-msg.scss'
import { Button, Radio, Tooltip, Affix } from 'antd'
import SCHEDULEGOLDIMG from '../../../assets/companyImage/icon-icon-schedule-gold@2x.png'
import SCHEDULECHINAIMG from '../../../assets/companyImage/icon-icon-schedule-china-1@2x.png'
import GUOQIIMG from '../../../assets/companyImage/1@2x.png'

import { dayData, dataList, RoundType, ChineseType } from './schedule-msg-mock'
import ResultData from './result.json'


interface Prop {}

interface State {
  affixTop: number
}



ResultData.forEach(resultItem => {
  dayData.forEach(item => {
    if (!resultItem.rounds.find(i => i.dateTime == item.dateTime)) {
      resultItem.rounds.unshift({
        dateTime: item.dateTime,
        title:'',
        isHasGold: '-1',
        isHasChina: '-1',
        details: []
      })
    } 
  })
})


console.log(ResultData)

export class ScheduleMsg extends React.Component<Prop, State> {
  render () {
    return (
      <div className='mian'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className={'schedule-msg-warp'}>
          <Affix offsetTop={0}>
            <div className={'sm-head'}>
              <div className={'sm-top'}>
                <ul>
                  <li>
                    <span className={'black-spot'}></span>比赛日
                  </li>
                  <li>
                    <img
                      className={'icon-img'}
                      alt='金牌赛事'
                      src={SCHEDULEGOLDIMG}
                    />
                    金牌赛事
                  </li>
                  <li>
                    <img
                      className={'icon-img'}
                      alt='中国队赛事'
                      src={GUOQIIMG}
                    />
                    中国队赛事
                  </li>
                  <li>
                    <img
                      className={'icon-img'}
                      alt='中国队夺金赛事'
                      src={SCHEDULECHINAIMG}
                    />
                    中国队夺金赛事
                  </li>
                </ul>
                <span className='tips'>*赛事时间为北京时间</span>
              </div>
              <div className={'sm-time-box'}>
                <span className='time-section'>2021年7月~8月</span>
                <ul>
                  {dayData.map(item => {
                    return (
                      <li>
                        <p>{item.num}</p>
                        <span>{item.text}</span>
                      </li>
                    )
                  })}
                </ul>
                <span className={'total_text'}>
                  <span>金牌总计</span>
                </span>
              </div>
            </div>
          </Affix>
          <ul className={'sm-content'}>
            {ResultData.map(item => {
              return (
                <li className={'content-list'}>
                  <div className={'tyleName'}>{item.typeName}</div>
                  <ul className={'day-list'}>
                    {item?.rounds.map(dayItem => {
                      return (
                        <li className={'day-item'}>
                          <Tooltip
                            overlayClassName='schedule-tooltip-box'
                            placement='bottomLeft'
                            autoAdjustOverflow={false}
                            arrowPointAtCenter={true}
                            title={
                              <div>
                                <span
                                  className={'schedule-tooltip-cover'}
                                ></span>
                                <p className={'titlse'}>{dayItem.title}</p>
                                {dayItem?.details.map((detailsItem, index) => {
                                  return (
                                    <p
                                      className={'schedule-tooltip'}
                                      key={`rounds-details-arr${index}`}
                                    >
                                      {detailsItem}
                                    </p>
                                  )
                                })}
                              </div>
                            }
                            color={'#fff'}
                            overlayStyle={{ width: '312px' }}
                          >
                            {dayItem?.isHasGold == '0' &&
                            dayItem?.isHasChina == '0' ? (
                              <span className={'black-spot'}></span>
                            ) : (
                              ''
                            )}
                            {dayItem?.isHasGold == '1' &&
                            dayItem?.isHasChina == '0' ? (
                              <img
                                alt=''
                                className={'icon-img'}
                                src={SCHEDULEGOLDIMG}
                              />
                            ) : (
                              ''
                            )}
                            {dayItem?.isHasGold == '1' &&
                            dayItem?.isHasChina == '2' ? (
                              <img
                                alt=''
                                className={'icon-img'}
                                src={SCHEDULECHINAIMG}
                              />
                            ) : (
                              ''
                            )}
                            {dayItem?.isHasGold == '0' &&
                            dayItem?.isHasChina == '1' ? (
                              <img
                                alt=''
                                className={'icon-img'}
                                src={GUOQIIMG}
                              />
                            ) : (
                              ''
                            )}
                          </Tooltip>
                        </li>
                      )
                    })}
                    <li className={'day-item total-box'}>
                      <span>{item.championTotal}</span>
                    </li>
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
