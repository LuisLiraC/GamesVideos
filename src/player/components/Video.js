import React, {Component} from 'react';
import './Video.css';

class Video extends Component {
    togglePay(){
        if(this.props.pause) {
            this.video.play();
        } else {
            this.video.pause();
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.pause !== this.props.pause){
            this.togglePay();
        }
    }
    setRef = element => {
        this.video = element;
    }
    render(){
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked
        } = this.props;

        return (
            <div className="Video">
                <iframe 
                    src={this.props.src}
                    // autoPlay={this.props.autoPlay}
                    // ref={this.setRef}
                    // onLoadedMetadata={handleLoadedMetadata}
                    // onTimeUpdate={handleTimeUpdate}
                    // onSeeking={handleSeeking}
                    // onSeeked={handleSeeked}
                    // width="560" 
                    height="400"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />
            </div>
        )
    }
}

export default Video;

