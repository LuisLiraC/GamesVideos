import React, {PureComponent} from 'react';
import './Song.css';

class Song extends PureComponent {

    handleClick = event => {
        this.props.openModal(this.props)
    }

    render(){
        return (
            <div className="Song" onClick={this.handleClick}>
                <p className="Song-name">{this.props.songname}</p>
                <p className="Song-game">{this.props.game}</p>
            </div>
        )
    }

}

export default Song;