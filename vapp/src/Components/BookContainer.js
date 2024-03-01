import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import purchase_book from './BookAction'

function BookContainer() {
    const NoOfBooks=useSelector(state => state.NumberofBooks)
    const dispatch=useDispatch()
  return (
    <div>
      <p>Book Container</p>
      <h3>Number of book is {NoOfBooks}</h3>
      <button onClick={()=>{dispatch(purchase_book())}}>Buy Book</button>
    </div>
  )
}

export default BookContainer
