import React from 'react';
import Playlist from '../../playlist/components/Playlist';
import './Category.css';

function Category (props) {
    return (
        <div className="Category">
            <span className="Category-description">{props.description}</span>
            <h3 className="Category-title">{props.title}</h3>
            <Playlist
                playlist={props.playlist}
                handleOpenModal={props.handleOpenModal}
            />
        </div>
    )
}

export default Category;