import React from 'react'
import './ratings.css'
import Customers from '../Customers/Customers'
import reviewers from '../Assets/Reviews' 

const Ratings = () => {
  return (
    <div className='ratings'>
        <div className="ratings-title">
            <p>Our Valuable Customers</p>
        </div>
        <div className="ratings-banner">
            {
            reviewers.map(
                (item,i)=>{
                    return<Customers key={i} id={item.id} name={item.name} image={item.image} review={item.review}/>
                }
            )
            }
        </div>
    </div>
  )
}

export default Ratings