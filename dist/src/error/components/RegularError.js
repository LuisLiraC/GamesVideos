import React from 'react';
import NotFoundImg from '../../../images/Link404.png'
import './RegularError.css'

function RegularError(){
    return (
        <div className="RegularError">
            <img className="RegularError-img" src={NotFoundImg}/>
            <h3 className="RegularError-msg">No podemos encontrar lo que buscas</h3>
            <span className="RegularError-text">Vuelve a intentarlo más tarde</span>
        </div>
    )
}

export default RegularError;