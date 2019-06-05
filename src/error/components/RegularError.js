import React, {Component} from 'react';
import NotFoundImg from '../../../images/Link404.png'
import { withRouter } from 'react-router';
import './RegularError.css'

class RegularError extends Component{

    handleForwardClick = () => {
        this.props.history.goForward();
    }
    handleBackClick = () => {
        this.props.history.goBack();
    }
    handleRandomClick = () => {
        const random = Math.round(Math.random() * (21 - 1) + 1);
        this.props.history.push(`/videos?videoId=${random}`)
    }

    render(){
        return (
            <div className="RegularError">
                <img className="RegularError-img" src={NotFoundImg}/>
                <h3 className="RegularError-msg">No podemos encontrar lo que buscas</h3>
                <p className="RegularError-text">Vuelve a intentarlo más tarde</p>
                <button className="Button"
                    onClick={this.handleBackClick}
                >
                    Página Anterior
                </button>

                <button className="Button"
                    onClick={this.handleForwardClick}
                >
                    Página Siguiente
                </button>

                <button className="Button"
                    onClick={this.handleRandomClick}
                >
                    Vídeo Random
                </button>
            </div>
        )
    }
    

}

export default withRouter(RegularError);