import React from 'react';
import './VideoPlayerControls.css';

function VideoPlayerControls(props){
    return(
        <div className="VideoPlayerControls">
            {props.children}
        </div>
    )
}

export default VideoPlayerControls;