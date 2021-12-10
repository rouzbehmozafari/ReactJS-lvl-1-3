import React from 'react';
import Collapse from './Collapse';
import faq from './Faq';

let array = ''
for (let i = 0; i < faq.length; i++){
    array += (`<Collapse q={faq[${i}].question} a = {faq[${i}].answer} />`)
}
console.log(array)
const CollList = () => {
    return ( 
        <div className="CollList">
            <Collapse q={faq[0].question} a = {faq[0].answer} />
            <Collapse q={faq[1].question} a = {faq[1].answer} />
            <Collapse q={faq[2].question} a = {faq[2].answer} />
            <Collapse q={faq[3].question} a = {faq[3].answer} />
        </div>

     );
}

export default CollList;