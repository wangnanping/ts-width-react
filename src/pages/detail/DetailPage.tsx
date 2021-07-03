import React, { useState, useReducer } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { hanleUseReducer } from './reducer'
interface MatchParams {
  touristRouteId: string
}

const nums = { nums: 0 }

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = props => {
  //   console.log(props.history);
  //   console.log(props.location);
  //   console.log(props.match);
  const [state, dispatch] = useReducer(hanleUseReducer, nums)
  const num = state.nums
  return (
    <div>
      <h1>路游路线详情页面, 路线ID: {props.match.params.touristRouteId}</h1>
      <p>useReducer</p>
      number:{num}
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'add' })
          }}
        >
          加1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'reduce' })
          }}
        >
          减1
        </button>
      </div>
    </div>
  )
}
