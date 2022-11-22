import React from 'react';
import {useNavigate} from 'react-router-dom';
function Error(){
    const validate=useNavigate();
    return(
        <div>
            <h1>Error ocurrence</h1>
            <button onClick={()=>validate('/Home')}>Click</button>
        </div>
    )
}
export default Error;