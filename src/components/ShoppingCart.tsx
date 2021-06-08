import React from 'react'
import Style from './ShoppingCart.module.css'
import { appContext } from '../AppState'

interface Props {}

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render () {
    return (
      <appContext.Consumer>
        {(value) => {
          return (
            <div className={Style.cardContainer}>
              <button
                className={Style.button}
                onClick={() => {
                  this.setState({
                    isOpen: !this.state.isOpen
                  })
                }}
              >
                购物车{value.shoppingCart.items.length}(件)
              </button>
              <div
                className={Style.cartDropDown}
                style={{
                  display: this.state.isOpen ? 'block' : 'none'
                }}
              >
                <ul>
                 {value.shoppingCart.items.map((i,index)=>
                 <li key={index}>{i.name}</li>
                 )}
                </ul>
              </div>
            </div>
          )
        }}
      </appContext.Consumer>
    )
  }
}

export default ShoppingCart
