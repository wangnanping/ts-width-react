import React from 'react'
import style from './Shop.module.css'
import { appContext } from '../AppState'

interface PropsType {}
interface state {
  btnStatus: boolean
}

class Shop extends React.Component<PropsType, state> {
  constructor (prop: PropsType) {
    super(prop)
    this.state = {
      btnStatus: false
    }
  }

  componentDidUpdate (prevProps: any) {
    console.log(prevProps)
  }

  componentWillUpdate () {}

  //   static getDerivedStateFromProps (nextProps: PropsType, prevState: state) {
  //     console.log(nextProps)
  //   }

  tabListShow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({
      btnStatus: !this.state.btnStatus
    })
  }

  render () {
    const { btnStatus } = this.state
    return (
      <appContext.Consumer>
        {value => {
          console.log(value)
          return (
            <div className={style.shop_warp}>
              <div className={style.shop_box}>
                <button onClick={this.tabListShow}>
                  已购买：{value.shopList.items.length}
                </button>

                <ul
                  className={style.shop_list}
                  style={{
                    display: btnStatus ? 'block' : 'none'
                  }}
                >
                  {value.shopList.items.map((item, index) => {
                    return <li key={index}>{item.name}</li>
                  })}
                </ul>
              </div>
            </div>
          )
        }}
      </appContext.Consumer>
    )
  }
}

export default Shop
