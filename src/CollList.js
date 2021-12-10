import React from 'react';
import Collapse from './Collapse';
import faq from './Faq';


const CollList = () => {
    return ( 
        <div className="CollList">
            <Collapse q={faq[0].question} a={faq[0].answer} />
            <Collapse/>
        </div>

     );
}
 
export default CollList;