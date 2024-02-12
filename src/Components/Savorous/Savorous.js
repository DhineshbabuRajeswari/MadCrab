import React from 'react'
import display_products from '../Assets/SavorousDisplay'
import Products from '../Item/Products'
import './Savorous.css'


const Savorous = () => {
  return (
    <div className='savorous'>
      <h1>Savorous Delicacies</h1>

      <div className="savorous-item">
        {
          display_products.map(
            (item,i)=>{
                return <Products key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
          )
        }
      </div>
    </div>
  )
}

export default Savorous