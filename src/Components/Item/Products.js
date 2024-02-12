import React from 'react'
import './Products.css'

const Products = (props) => {
  const shadow = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }
  return (
    <div className='item'>
        <img src={props.image} alt="" width={250} height={300} />
        <p>{props.name}</p>
        <div className='item-price'>
            <div className="item-price-old">
            <span>{props.old_price}</span>
            </div>
            <div className="item-price-new">
                <span style={shadow}>${props.new_price}</span>
            </div>
        </div>
    </div>
  )
}

export default Products