import React from 'react';

const homepage=({routechange})=>{
    return (
        <div>
            <button type="button" onClick={()=>routechange('Signin')}>Signin</button>
            <button type="button" onClick={()=>routechange('Register')}>Register</button>
        </div>
    );
}

export default homepage;