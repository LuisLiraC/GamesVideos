import React, { Component } from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout';
import Video from '../components/Video';
import Title from '../components/Title';
import PlayPause from  '../components/PlayPause';
import Timer from '../components/Timer';
import Controls from '../components/VideoPlayerControls';
import ProgressBar from '../components/ProgressBar';
import Spinner from '../components/Spinner';
import Volume from '../components/Volume';
import FullScreen from '../components/FullScreen';
import { connect } from 'react-redux';
import {fromJS} from 'immutable';

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false
    }
    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount(){
        this.setState({
            pause: (!this.props.autoPlay)
        })
    }

    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        })
    }

    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleProgressChange = event => {
        this.video.currentTime = event.target.value
    }

    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }

    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }

    handleVolumeChange = event => {
        this.video.volume = event.target.value
    }

    handleFullScreenClick = event => {
        if(!document.webkitIsFullScreen){
            this.player.webkitRequestFullScreen()
        } else {
            document.webkitExitFullscreen()
        }
    }

    setRef = element => {
        this.player = element
    }

    render(){
        return (
            <VideoPlayerLayout
                setRef={this.setRef}
            >
                <Title 
                    title={this.props.game.get('title')}
                />
                {/* <Controls>
                    <PlayPause 
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer 
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />
                    <ProgressBar 
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange}
                    />
                    <Volume 
                        handleVolumeChange={this.handleVolumeChange}
                    />
                    <FullScreen 
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Controls>
                <Spinner 
                    active={this.state.loading}
                /> */}
                <Video 
                    // autoPlay={this.props.autoPlay}
                    // pause={this.state.pause}
                    // handleLoadedMetadata={this.handleLoadedMetadata}
                    // handleTimeUpdate={this.handleTimeUpdate}
                    // handleSeeking={this.handleSeeking}
                    // handleSeeked={this.handleSeeked}
                    src={this.props.game.get('src')}
                />
            </VideoPlayerLayout>
        )
    }
}

function mapStateToProps(state, props){
    
    if (typeof(props.id) == typeof("string")){
        return {
            game: state.get('data').get('entities').get('game').get(props.id)
        }
    } else {
        return {
            game: fromJS({
                title: props.id.songname,
                src: props.id.src
            })
        }
    }
}

export default connect(mapStateToProps)(VideoPlayer);