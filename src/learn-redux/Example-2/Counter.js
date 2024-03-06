import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { descreaseCounter, inceraseCounter } from './Action'
import { counterActions } from './StoardData'



function Counter() {

   const counterValue = useSelector(state => state.counter.count)
   const showData = useSelector(state => state.counter.showData)

   const dispactch = useDispatch()

   function toggleData(){
    dispactch(counterActions.ToggleEvent())
   }

   function increaseBy5 (){
    dispactch(counterActions.inceraseBy5(4))
   }
  return (
   <div style={{padding : '20px'}}>
  {showData && <h2>Counter - {counterValue}</h2>}
   <button onClick={()=>dispactch(counterActions.incerase())}>Increase</button>
   <button onClick={()=>dispactch(counterActions.decrease())}>Descrease</button>
   <button onClick={increaseBy5}>Increase By 5</button>
   <div>
   <button onClick={toggleData}>taggle data</button>
   </div>
   </div>
  )
}

export default Counter