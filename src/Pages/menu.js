import React from 'react'
import MenuContextProvider from '../Context/MenuContent'
import all_recipies from '../Components/Assets/Fish'
import './Styles/menu.css'

const Menu = ({handleClick}) => {
  return (
    <div className='menupage'>
        {
          all_recipies.map((item,i)=>{
            return <MenuContextProvider 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
            handleClick={()=>handleClick(item)}
             
            />
          })
        }
    </div>
  )
}

export default Menu