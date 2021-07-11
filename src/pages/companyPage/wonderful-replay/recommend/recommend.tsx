import React from 'react'
import './recommend.scss'

interface Prop {
  title: string
  time: string
  duration: string
  see: number
  src: string
}

export class Recommend extends React.Component<Prop> {
  constructor (props) {
    super(props)
  }
  render () {
    const { title, time, duration, see, src } = this.props
    return (
      <li className='recommend-item'>
        <div
          className='image-text-box'
          style={{ backgroundImage: `url(${src})` }}
        >
          <span className='title'>
            <span className='title-text'>{title}</span>
          </span>
          <span>{duration}</span>
        </div>
        <p className='remarks'>
          <span>{time}</span> <span className='seeNum'>(图标){see}</span>
        </p>
      </li>
    )
  }
}
