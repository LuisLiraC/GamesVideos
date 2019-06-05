import React from 'react';
import logo from '../../../images/logo.png'
import Soundtracks from '../../soundtracks/components/Soundtracks';
import Youtubers from '../../youtuberslist/components/YoutubersList';
import './Related.css';

function Related (props) {
    return (
        <div className="Related">
            <Soundtracks 
                songs={props.soundtracks} 
                handleOpenModal={props.handleOpenModal}
            />
            <Youtubers youtubers={props.youtubers} />
        </div>
    )
}

export default Related;