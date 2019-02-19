import React, { Component } from 'react';
import HomeLayout from '../components/HomeLayout';
import Categories from '../../categories/components/Categories';
import Related from '../../related/components/Related';
import ModalContainer from '../../widgets/containers/ModalContainer';
import Modal from '../../widgets/components/Modal';
import HandleError from '../../error/containers/HandleError';
import VideoPlayer from '../../player/containers/VideoPlayer';

class Home extends Component {
    state = {
        modalVisible: false,
    }

    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media
        })
    }

    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false
        })
    }

    render () {
        return (
            <HandleError>
                <HomeLayout>
                    <Related 
                        soundtracks={this.props.data.soundtracks}
                        youtubers={this.props.data.youtubers}
                        handleOpenModal={this.handleOpenModal}
                    />
                    <Categories 
                        categories={this.props.data.categories} 
                        handleOpenModal={this.handleOpenModal}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick={this.handleCloseModal}
                            >
                                <VideoPlayer 
                                  autoPlay
                                  src={this.state.media.src}
                                  title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;