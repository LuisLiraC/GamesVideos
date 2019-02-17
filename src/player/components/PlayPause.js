import React from 'react';
import './PlayPause.css';
import Control from '../../icons/components/Control';

function PlayPause(props){
    const btnProps = {
        size: 25,
        color: "white"
    }
    return (
        <div className="PlayPause">
            {
                props.pause ?
                <button
                    onClick={props.handleClick}
                >
                    <Control.Play {...btnProps} />
                </button> :
                <button
                    onClick={props.handleClick}
                >
                    <Control.Pause {...btnProps} />
                </button>
            }
        </div>
    )
}

export default PlayPause;