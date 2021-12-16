import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const songplayer=()=>{
    return (
        <div>
            <ReactAudioPlayer
                src="my_audio_file.ogg"
                autoPlay
                controls
            />
        </div>
    );
}

export default songplayer;