import React from 'react'
import { project, city, type } from './mock'
import { Pagination, Input, Button } from 'antd'
import classNames from 'classnames'
import zhCN from 'antd/es/locale/zh_CN'

import { Recommend } from './recommend/recommend'
import { ProjectModal } from './modal/project-modal'
import { CountryModal } from './modal/country-modal'
import './wonderful-replay.scss'
import { data as recommendData } from './recommend/mock'

import TUIJIANIMG from '../../../assets/companyImage/icon-icon-tuijian@2x.png'
import ZHIBIMG from '../../../assets/companyImage/icon-icon-zhib@2x.png'
import GENGDOU from '../../../assets/companyImage/icon-icon-gengduo@2x.png'

interface Props {}

interface PaginationData {
  current: number
  pageSize: number
  total: number
}

interface State {
  projectList: {
    selectIsOk: boolean
    text: string
  }[]
  countryList: {
    selectIsOk: boolean
    text: string
  }[]
  typeList: {
    selectIsOk: boolean
    text: string
  }[]
  recommendDataList: any[]
  showQuickJumperValue: number | undefined | ''
  paginationData: PaginationData
}

export class WonderfulReplay extends React.Component<Props, State> {
  constructor (props) {
    super(props)
    this.state = {
      projectList: project,
      countryList: city,
      typeList: type,
      recommendDataList: recommendData,
      showQuickJumperValue: '',
      paginationData: {
        current: 1,
        pageSize: 10,
        total: 70
      }
    }
  }

  projectModalRef: any
  countryModalRed: any

  onPaginationChange = (page, pageSize) => {}

  /**
   * @function 项目弹窗模态框
   */
  seeMoreProject = () => {
    this.projectModalRef.showModal()
  }

  /**
   * @function 项目弹窗模态框callBack
   */
  projectModelCallBack = () => {}

  /**
   * @function 地区弹窗模态框callBack
   */
  countryModelCallBack = () => {}

  /**
   * @function 城市地区模态框
   */
  seeMoreCountry = () => {
    this.countryModalRed.showModal()
  }

  /**
   * @function 处理跳转页码，对页码进行重新赋值
   */
  goPageize = () => {
    const { showQuickJumperValue, paginationData } = this.state
    let num: number | undefined | '' = showQuickJumperValue
    if (num && /^[0-9]+$/.test(num as any)) {
      let currentPageSize = paginationData.total / paginationData.pageSize
      if (num > currentPageSize) {
        num = currentPageSize
      }
      this.setState({
        paginationData: {
          ...paginationData,
          current: num | 1
        },
        showQuickJumperValue: ''
      })
    }
  }

  /**
   * @function 针对跳转页码值做处理，不为正整数赋值''
   * @param e
   */
  showQuickJumperChange = e => {
    let num = e.target.value
    if (!num || !/^[0-9]+$/.test(num)) {
      num = ''
    }
    this.setState({
      showQuickJumperValue: num
    })
  }
  render () {
    const {
      projectList,
      countryList,
      typeList,
      recommendDataList,
      showQuickJumperValue,
      paginationData
    } = this.state
    return (
      <div className='mian'>
        <div className='WonderfulReplay-warp'>
          <div className='search-box'>
            <div className={classNames('search-public', 'project-box')}>
              <span className='title'>项目</span>
              <span className='all-btn'>全部</span>
              {projectList.map((item, index) => {
                return (
                  <span className='item' key={`projectList${index}`}>
                    {item.text}
                  </span>
                )
              })}
              <span className='more' onClick={this.seeMoreProject}>
                更多
                <img alt='' className='img' src={GENGDOU} />
              </span>
            </div>
            <div className={classNames('search-public', 'country-box')}>
              <span className='title'>国家地区</span>
              <span className='all-btn'>全部</span>
              {countryList.map((item, index) => {
                return (
                  <span className='item' key={`countryList${index}`}>
                    {item.text}
                  </span>
                )
              })}
              <span className='more' onClick={this.seeMoreCountry}>
                更多
                <img alt='' className='img' src={GENGDOU} />
              </span>
            </div>
            <div
              className={classNames(
                'search-public',
                'search-public-marginNo',
                'type-box'
              )}
            >
              <span className='title'>分类</span>
              <span className='all-btn'>全部</span>
              {typeList.map((item, index) => {
                return (
                  <span className='item' key={`typeList${index}`}>
                    {item.text}
                  </span>
                )
              })}
            </div>
          </div>
          <div className='content-title'>
            <img alt='今日推荐' src={TUIJIANIMG} />
            <span>今日推荐</span>
          </div>
          <ul className='recommend-warp'>
            {recommendDataList.map((item, index) => {
              return (
                <Recommend
                  title={item.title}
                  time={item.time}
                  duration={item.duration}
                  see={item.see}
                  src={item.src}
                  key={`recommendData${index}`}
                />
              )
            })}
          </ul>

          <div className='content-title'>
            <img alt='今日推荐' src={ZHIBIMG} />
            <span>全部回放</span>
          </div>
          <ul className='recommend-warp'>
            {recommendDataList.map((item, index) => {
              return (
                <Recommend
                  title={item.title}
                  time={item.time}
                  duration={item.duration}
                  see={item.see}
                  src={item.src}
                  key={`AllPlayback${index}`}
                />
              )
            })}
          </ul>
          <div className='pagination'>
            <Pagination
              total={paginationData.total}
              pageSize={paginationData.pageSize}
              showSizeChanger={false}
              current={paginationData.current}
              onChange={this.onPaginationChange}
            />
            <div className='new-showQuickJumper'>
              <span className='text'>跳转至</span>
              <Input
                className='showQuickJumper-inp'
                value={showQuickJumperValue}
                onChange={this.showQuickJumperChange}
              />
              <Button className='go-bth' onClick={this.goPageize}>
                GO
              </Button>
            </div>
          </div>
          <ProjectModal
            ref={refs => (this.projectModalRef = refs)}
            callBack={this.projectModelCallBack}
          />
          <CountryModal
            ref={refs => (this.countryModalRed = refs)}
            callBack={this.countryModelCallBack}
          />
        </div>
      </div>
    )
  }
}
