import React from 'react';



const Itemcontainer = (props) => {
    return ( 
        <div className="items">
            
                <img src={props.imgSrc} alt="img" />
                <h3>{props.title}</h3>
                <p>{props.price}</p>
                <a href="#">BUY NOW</a>
            
        </div>

     );
}
 
export default Itemcontainer;