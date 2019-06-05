import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import './Youtuber.css';

class Youtuber extends PureComponent {
    render(){
        return (
            <div className="Youtuber">
                <img src={this.props.logoSrc} />
                <a className="Youtuber-name" href={this.props.channel} target="_blank">{this.props.name}</a>
            </div>
        )
    }
}

export default Youtuber;