import React, { Component } from 'react';
import HomeLayout from '../components/HomeLayout';
import Categories from '../../categories/components/Categories';
import Related from '../../related/components/Related';
import ModalContainer from '../../widgets/containers/ModalContainer';
import Modal from '../../widgets/components/Modal';
import HandleError from '../../error/containers/HandleError';
import VideoPlayer from '../../player/containers/VideoPlayer';
import { connect } from 'react-redux';
import { List as list } from 'immutable';
import * as actions from '../../actions/actions';
import {bindActionCreators} from 'redux';

class Videos extends Component {
    // state = {
    //     modalVisible: false,
    // }

    handleOpenModal = (id) => {
        this.props.actions.openModal(id)
        // this.setState({
        //     modalVisible: true,
        //     media
        // })
    }

    handleCloseModal = (event) => {
        this.props.actions.closeModal()
        // this.setState({
        //     modalVisible: false
        // })
    }

    componentDidMount() {
        // const search = this.props.location.search.slice(9, this.props.location.search.length)
        const search = this.props.location.search.split('=')[1];
        if (search) {
            this.handleOpenModal(search);
        }
    }
    
    render () {
        return (
            <HandleError>
                <HomeLayout>
                    <Related 
                        soundtracks={this.props.soundtracks}
                        youtubers={this.props.youtubers}
                        handleOpenModal={this.handleOpenModal}
                    />
                    <Categories 
                        categories={this.props.categories} 
                        handleOpenModal={this.handleOpenModal}
                        search={this.props.search}
                        loading={this.props.loading}
                    />
                    {
                        this.props.modal.get('visibility') &&
                        <ModalContainer>
                            <Modal
                                handleClick={this.handleCloseModal}
                            >
                                <VideoPlayer 
                                  autoPlay
                                  id={this.props.modal.get('gameId')}
                                //   src={this.state.media.src}
                                //   title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}


function mapStateToProps(state, props){
    const categories = state.get('data').get('categories').map((categoryId) => {
        return state.get('data').get('entities').get('categories').get(categoryId)
    })
    let queryResults = list();
    const query = state.get('data').get('search')
    if(query){
        const gameList = state.get('data').get('entities').get('game')
        queryResults = gameList.filter((game) => {
            return game.get('title').toLowerCase().includes(query.toLowerCase())
        }).toList();
    }

    return {
        categories: categories,
        youtubers: state.get('data').get('youtubers'),
        soundtracks: state.get('data').get('soundtracks'),
        search: queryResults,
        modal: state.get('modal'),
        loading: state.get('loading').get('active')
    }
}

function mapDispatchToProps(dispatch){
    return {
        // actions: bindActionCreators(acciones, dispatch)
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Videos);