import React, { createRef } from 'react'
import './project-modal.scss'
import { Modal, Button } from 'antd'
import { projectDataList } from './project-mock'
import classNames from 'classnames'

interface Prop {
  callBack: () => void
}
interface State {
  visible: boolean
  hotData: any[]
  allData: any[]
}

projectDataList.hot.forEach((item: any) => {
  item['isOk'] = false
})
projectDataList.all.forEach((item: any) => {
  item['isOk'] = false
})

export class ProjectModal extends React.Component<Prop, State> {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      hotData: projectDataList.hot,
      allData: projectDataList.all
    }
  }

  /**
   * @function 热门项目选择
   * @param item 当前项目
   */
  hotActive = item => {
    let newHokDate = this.state.hotData.map(val => {
      return { ...val, isOk: item.code == val.code ? !item.isOk : val.isOk }
    })
    let currentItem = newHokDate.find(val => item.code == val.code)
    let newAllDate = this.state.allData.map(val => {
      return {
        ...val,
        isOk:
          currentItem && currentItem.code == val.code
            ? currentItem.isOk
            : val.isOk
      }
    })
    this.setState({
      hotData: newHokDate,
      allData: newAllDate
    })
  }

  /**
   * @function 全部项目选择
   * @param item 当前项目
   */
  allActive = item => {
    let newAllData = this.state.allData.map(val => {
      return { ...val, isOk: item.code == val.code ? !item.isOk : val.isOk }
    })
    this.setState({
      allData: newAllData
    })
  }

  /**
   * @function 全选/反选
   * @param {boolean} status true全选/false反选
   */
  antiElection = (status: boolean) => {
    let newAllData = this.state.allData.map(val => {
      return { ...val, isOk: status || !val.isOk }
    })

    // 取相同项 更改热门
    let identicalData = [...this.state.hotData]
    identicalData.forEach(hotItem => {
      newAllData.forEach(allItem => {
        if (hotItem.code == allItem.code) {
          hotItem.isOk = allItem.isOk
        }
      })
    })

    this.setState({
      hotData: identicalData,
      allData: newAllData
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
  render () {
    const { hotData, allData } = this.state
    return (
      <Modal
        className='component-projeact-modal'
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
          <p className={'title'}>2020东京奥运会项目</p>
          <div className={'hot'}>
            <p className={'type-text'}>热门项目</p>
            <ul className={'project-list'}>
              {hotData.map((item, index) => {
                return (
                  <li className={'item'} key={`project-modal${index}`}>
                    <span
                      className={classNames(
                        'item-text',
                        item.isOk ? 'item-isOk' : ''
                      )}
                      onClick={() => {
                        this.hotActive(item)
                      }}
                    >
                      {item.text}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'all'}>
            <p className={'type-text'}>全部项目</p>
            <ul className={'project-list'}>
              {allData.map((item, index) => {
                return (
                  <li className={'item'} key={`project-modal${index}`}>
                    <span
                      className={classNames(
                        'item-text',
                        item.isOk ? 'item-isOk' : ''
                      )}
                      onClick={() => {
                        this.allActive(item)
                      }}
                    >
                      {item.text}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
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
