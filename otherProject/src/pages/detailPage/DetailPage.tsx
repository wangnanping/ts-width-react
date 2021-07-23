import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
interface MatchParams {
  id: string
}
export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = props => {
  return <h1>路游路线详情ing页面，路线ID：{props.match.params.id}</h1>
}
