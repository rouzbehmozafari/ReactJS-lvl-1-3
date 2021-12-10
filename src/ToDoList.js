import React from 'react';

const ToDoList = (prop) => {
    return ( 
        <div className="toDo">
            <img src={prop.imgSrcB} alt="img" /><span>{prop.li1}</span><img src={prop.imgSrcA} alt="img" />
        </div>
     );
}
 
export default ToDoList;