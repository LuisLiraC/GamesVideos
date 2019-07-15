import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './Song.css';

class Song extends PureComponent {

    handleClick = event => {
        
        this.props.openModal(this.props)
    }

    render(){
        return (
            <Link to={{
                pathname: '/videos',
                search: `?songId=${this.props.id}`
            }} >
                <div className="Song" onClick={this.handleClick}>
                    <p className="Song-name">{this.props.songname}</p>
                    <p className="Song-game">{this.props.game}</p>
                </div>
            </Link>
        )
    }

}

export default Song;