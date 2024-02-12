import React from "react";
import './MenuContent.css'


const MenuContextProvider = ({id,name, image, new_price, old_price, handleClick}) =>{

    const shadow = {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
      }

    return(
        <div className='item'>
            <img src={image} alt="" width={250} height={300} />
            <p>{name}</p>
        <div className='item-price'>
            <div className="item-price-old">
                <span>{old_price}</span>
            </div>
            <div className="item-price-new">
                <span style={shadow}>${new_price}</span>
            </div>
            <div className='front-side'>
                <button onClick={() => handleClick(id)}>Add</button>
            </div>
        </div>
        
    </div>
    )
}

export default MenuContextProvider


{/* <div>
            <label htmlFor="drplist">Qty</label>        
            <select name="droplist" id="droplist">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button >Add</button>
        </div> */}
        {/* <div className='addbuttons'>
            <div className='front-side'>
                <button onClick={cname==="surpriceButton"?togglefn1:togglefn2}>Add</button>
            </div>
            <div className={cname}>
                <button onClick={handleUpgrade}>+</button>
                <span>{items}</span>
                <button onClick={handleDegrade}>-</button>
            </div>
        </div> */}







    // let [items, setItems] = useState(0)
    // let [cname, setCname] = useState("surpriceButton")

    // const handleUpgrade = () =>{
    //   let positive = (items>=0 && items<20) ? setItems(items+=1) : setItems(0)
    //   return positive
    // }
  
    // const handleDegrade = () =>{
    //   let negative = (items>0 && items<=20) ? setItems(items-=1) : setItems(0)
    //   return negative
    // }
  
    // const togglefn1 = () => {
    //   setCname('Addtoggle1')
    // }
  
    // const togglefn2 = () => {
    //   setCname('surpriceButton')
    // }


    //<div className='addbuttons'>
    //     <div className='front-side'>
    //         <button onClick={cname==="surpriceButton"?togglefn1:togglefn2}>Add</button>
    //     </div>
    //     <div className={cname}>
    //         <button onClick={handleDegrade}>-</button>
    //         <span>{items}</span>
    //         <button onClick={handleUpgrade}>+</button>
    //     </div>  
    // </div>