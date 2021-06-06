import React from 'react'
import Styles from "./Robot.module.css"

interface RobotProps {
  id: number
  name: string
  email: string
}
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
      <li className={Styles.cardContainer}>
          <img alt="robotes" src={`https://robohash.org/${id}`}/>
          <h2>{name}</h2>
          <p>{email}</p>
      </li>
  )
}
export default Robot
