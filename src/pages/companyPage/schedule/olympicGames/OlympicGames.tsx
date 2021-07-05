import React from 'react'
import Style from './OlympicGames.module.css'
import { Table, Tag, Space } from 'antd';

interface Prop {}
export default  class OlympicGames extends React.Component<Prop> {
  constructor (props) {
    super(props)
  }

  render () {
    return <div>奥运会奖牌榜</div>
  }
}
