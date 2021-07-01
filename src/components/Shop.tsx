import React from 'react'
import style from './Shop.module.css'

interface PropsType {
  shopList: string[]
}
interface state {
  btnStatus: boolean
  list: string[]
}

class Shop extends React.Component<PropsType, state> {
  constructor (prop: PropsType) {
    super(prop)
    this.state = {
      btnStatus: false,
      list: this.props.shopList
    }
  }

  componentDidUpdate (prevProps: any) {
    console.log(prevProps)
  
  }

  componentWillUpdate () {
    
  }

//   static getDerivedStateFromProps (nextProps: PropsType, prevState: state) {
//     console.log(nextProps)
//   }

  tabListShow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
       if (this.state.list.length >0) {
        this.setState({
            btnStatus: !this.state.btnStatus
          })
       }
  }

  render () {
    return (
      <div className={style.shop_warp}>
        <div className={style.shop_box}>
          <button onClick={this.tabListShow}>
            已购买：{this.state.list.length}
          </button>
          {this.state.btnStatus && this.state.list.length > 0 ? (
            <ul className={style.shop_list}>
              {this.state.list.map((item, index) => {
                return <li>{item}</li>
              })}
            </ul>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

export default Shop
