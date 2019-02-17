import React from 'react';
import Control from '../../icons/components/Control';
import './Volume.css';

function Volume(props) {
    const btnProps = {
        size: 25,
        color: "white"
    }
    return (
        <button className="Volume">
            <Control.Volume {...btnProps} />
            <div className="Volume-range">
                <input 
                    type="range" 
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolumeChange}
                />
            </div>
        </button>
    )
}

export default Volume;