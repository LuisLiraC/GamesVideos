import React from 'react';
import Song from './Song.js';
import './Soundtracks.css';

function Soundtracks(props){
    return (
        <div className="Soundtracks">
        <h3>Mis soundtracks favoritos</h3>
        {
            props.songs.map( (item) => {
                return (
                    <Song 
                        key={item.id}
                        {...item}
                        openModal={props.handleOpenModal}
                    />
                )
            })
        } 
        </div>
    )
}

export default Soundtracks;