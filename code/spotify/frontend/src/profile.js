import React from 'react';

const profile =({routechange})=>{
    return(
        <div>
            <button type="button" onClick={()=>routechange('Home')} >Logout</button>
            
        
        </div>
    );
}

export default profile;