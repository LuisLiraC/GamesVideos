import React from 'react';
import MediaContainer from '../containers/MediaContainer';
import './Playlist.css';

function Playlist (props) {    
    return(
        <div className="Playlist">
            {
                props.playlist.map( (gameID) => {
                    return (
                        <MediaContainer 
                            id={gameID}
                            key={gameID}
                            openModal={props.handleOpenModal}
                        />
                    )
                })
            }
        </div>
    )
}

export default Playlist;