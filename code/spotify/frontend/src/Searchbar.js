import React from 'react';

const Searchbar =({searchstringchange})=>{
    return(
        <div>
            <input onChange={searchstringchange} type="text" placeholder="Search Songs"></input>
        </div>
    );
}

export default Searchbar;