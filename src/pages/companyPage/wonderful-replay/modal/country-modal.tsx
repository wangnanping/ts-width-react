import React, { createRef } from 'react'
import './country-modal.scss'
import { Modal, Button, Input, message } from 'antd'
import { country } from './country-mock'
import classNames from 'classnames'

interface Prop {
  callBack: () => void
}
interface State {
  visible: boolean
  hot: any[]
  allCity: any
  searchStr: string
}

// 全部城市和热门城市显示
let newallCity = { ...country.allCity }
country.hot.forEach(element => {
  Object.keys(newallCity).forEach((objName, index) => {
    newallCity[objName].forEach((item, index) => {
      if (item.id == element.id) {
        item.isOk = element.isOk
      }
    })
  })
})

export class CountryModal extends React.Component<Prop, State> {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      hot: country.hot,
      allCity: newallCity,
      searchStr: ''
    }
  }
  // 设置ref

  componentDidMount () {
    console.log(13)
  }

  /**
   * 修改城市状态
   */
  setAllCity (activeItem) {
    let newAllCity = { ...this.state.allCity }
    Object.keys(newAllCity).forEach((objName, index) => {
      newAllCity[objName].forEach((item, index) => {
        if (item.id == activeItem.id) {
          item.isOk = activeItem.isOk
        }
      })
    })
    this.setState({
      allCity: newAllCity
    })
  }

  /**
   * @function 点击热门国家
   */
  hotActive = hodItem => {
    let newHokDate = this.state.hot.map(val => {
      return {
        ...val,
        isOk: hodItem.id == val.id ? !hodItem.isOk : val.isOk
      }
    })
    let currentItem = newHokDate.find(val => hodItem.id == val.id)
    this.setAllCity(currentItem)
    this.setState({
      hot: newHokDate
    })
  }

  /**
   * @function 选择国家
   */
  areaActive = areaItem => {
    let newAllCity = [...this.state.allCity]
    let newHokDate = [...this.state.hot]
    newAllCity.forEach(item => {
      item?.list.forEach(i => {
        if (i.id == areaItem.id) {
          i.isOk = !i.isOk
          newHokDate.forEach(h => {
            if (h.id == i.id) {
              h.isOk = i.isOk
            }
          })
        }
      })
    })
    this.setState({
      hot: newHokDate,
      allCity: newAllCity
    })
  }

  /**
   * @function 全选/反选
   * @param {boolean} status true全选/false反选
   */
  antiElection = (status: boolean) => {
    let newAllCity = [...this.state.allCity]
    let newHokDate = [...this.state.hot]
    newAllCity.forEach(item => {
      item?.list.forEach(i => {
        i.isOk = status || !i.isOk
        newHokDate.forEach(h => {
          if (h.id == i.id) {
            h.isOk = i.isOk
          }
        })
      })
    })
    this.setState({
      hot: newHokDate,
      allCity: newAllCity
    })
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }
  hideModal = () => {
    this.setState({
      visible: false
    })
  }

  _renderDom = () => {
    const { allCity } = this.state
    return Object.keys(allCity).map((obj, i) => {
      return (
        <li className={'list-item'}>
          <span className={'letter'}>{obj}</span>
          <div className={'area'}>
            {allCity[obj].map((areaItem, areaIndex) => {
              return (
                <span
                  className={classNames(
                    'area-item',
                    `${areaItem.enName.replace(/\s+/g,"")}${areaItem.id}`,
                    areaItem.isOk ? 'area-item-isOk' : ''
                  )}
                  key={`area-item${areaIndex}`}
                  onClick={() => {
                    this.areaActive(areaItem)
                  }}
                >
                  {areaItem.cnName}
                </span>
              )
            })}
          </div>
        </li>
      )
    })
  }

  /**
   * 搜索位置并定位
   */
  searchTo = () => {
    const { searchStr, allCity } = this.state
    if (searchStr) {
      for (let objName of Object.keys(allCity)) {
        let status = false
        for (let item of newallCity[objName]) {
          if (
            item.cnName.includes(searchStr) ||
            item.enName.includes(searchStr)
          ) {
            let dom: any = document.querySelector(`.${item.enName}${item.id}`)
            let dom1: any = document.getElementById('classified-area-box')
            if (dom && dom1) {
              dom1.scrollTop =
                dom.getBoundingClientRect().top -
                dom1.getBoundingClientRect().top
            }

            status = true
            break
          }
        }
        if (status) {
          break
        }
      }
    } else {
      message.error('请输入搜索内容')
    }
  }

  render () {
    const { hot, allCity, searchStr } = this.state
    return (
      <Modal
        className='component-country-modal'
        style={{
          padding: 0,
          borderRadius: '8px',
          overflow: 'hidden',
          border: 'solid 1px #ee7568'
        }}
        bodyStyle={{
          padding: '28px 20px'
        }}
        visible={this.state.visible}
        onCancel={this.hideModal}
        mask={false}
        maskClosable={false}
        keyboard={false}
        footer={null}
      >
        <div className={'content-box'}>
          <p className={'title'}>国家/地区</p>
          <div className={'type-box'}>
            <span className={'type-text'}>热门国家</span>
            <div className={'search'}>
              <Input
                onChange={e => {
                  this.setState({
                    searchStr: e.target.value
                  })
                }}
                className={'search-inp'}
                placeholder='请输入国家/地区'
              />
              <Button className={'search-btn'} onClick={this.searchTo}>
                搜索
              </Button>
            </div>
          </div>
          <ul className={'hot-list'}>
            {hot.map((item, index) => {
              return (
                <li
                  className={classNames('item')}
                  key={`country-modal${index}`}
                >
                  <span
                    className={classNames(
                      'item-text',
                      item.isOk ? 'item-isOk' : ''
                    )}
                    onClick={() => {
                      this.hotActive(item)
                    }}
                  >
                    {item.cnName}
                  </span>
                </li>
              )
            })}
          </ul>
          <ul className={'classified-area'} id='classified-area-box'>
            {this._renderDom()}
            {/* {allCity.map((item, index) => {
              return (
                <li className={'list-item'} key={`classified-area${index}`}>
                  <span className={'letter'}>{item.letter}</span>
                  <div className={'area'}>
                    {item.list.map((areaItem, areaIndex) => {
                      return (
                        <span
                          className={classNames(
                            'area-item',
                            areaItem.isOk ? 'area-item-isOk' : ''
                          )}
                          key={`area-item${areaIndex}`}
                          onClick={() => {
                            this.areaActive(areaItem)
                          }}
                        >
                          {areaItem.text}
                        </span>
                      )
                    })}
                  </div>
                </li>
              )
            })} */}
          </ul>
          <div className={'operation-btn'}>
            <Button className={'btn'} onClick={() => this.antiElection(true)}>
              全选
            </Button>
            <Button className={'btn'} onClick={() => this.antiElection(false)}>
              反选
            </Button>
            <Button className={'btn btn-background '} onClick={this.hideModal}>
              确认
            </Button>
          </div>
        </div>
      </Modal>
    )
  }
}
