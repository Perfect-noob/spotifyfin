import React from 'react';

const currentsong =({commentstringchange})=>{
    return(
        <div>
            <h1> Song name</h1>
            <div>
                <input onChange={commentstringchange} type="text" placeholder="Type comment"></input>
            </div>
            <div>
                <button type="button">Like this song!</button>
            </div>
            <div>
                <h1>this will show number of likes</h1>
            </div>
            <div>
                <h1>this will show comments</h1>
            </div>
        </div>
    );
}

export default currentsong;