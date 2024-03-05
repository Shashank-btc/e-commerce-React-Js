import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { descreaseCounter, inceraseCounter } from './Action'

function Counter() {

   const counterValue = useSelector(state => state.count)

   const dispactch = useDispatch()
  return (
   <>
   <h2>Counter - {counterValue}</h2>
   <button onClick={()=>dispactch(inceraseCounter())}>Increase</button>
   <button onClick={()=>dispactch(descreaseCounter())}>Descrease</button>
   </>
  )
}

export default Counter