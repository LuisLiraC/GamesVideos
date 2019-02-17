import React from 'react';
import Control from '../../icons/components/Control';
import './FullScreen.css';

function FullScreen(props){
    const btnProps = {
        size: 25,
        color: "white"
    }
    return (
        <div 
            className="FullScreen"
            onClick={props.handleFullScreenClick}
        >
            <Control.FullScreen {...btnProps}/>
        </div>
    )
}

export default FullScreen;