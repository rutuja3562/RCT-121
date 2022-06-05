import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContex'

export const Product = () => {
    const[ state ]= useContext(AuthContext)
  return (
    <div>{state.token && <h3>Token: {state.token}</h3>}</div>
  )
}
