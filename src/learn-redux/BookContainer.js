import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {purchase_book , sellBook }  from './BookAction'

function BookContainer() {
   const no_ofBook =  useSelector(state => state.NumberOfBooks)
  
  const dispactch = useDispatch()
   return (
    <>
    <div>BookContainer</div>
    <h2>no of Book - {no_ofBook} </h2>  
    <button onClick={()=>dispactch(purchase_book())}>Buy book</button>
    <button onClick={()=>dispactch(sellBook())}>Sell book</button>
    </>
  )
}

export default BookContainer