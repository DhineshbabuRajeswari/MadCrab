import React from 'react'
import './Customers.css'

const Customers = (props) => {
    const text = {
        textAlign: 'justify'
    }
  return (
    <div className='review-box'>
        <div className="review-image">
            <img src={props.image} alt="" width={200} height={200}/>
            <span>{props.name}</span>
        </div>
        <div className="review-review">
            <span style={text}>{props.review}</span>
        </div>
    </div>
  )
}

export default Customers