import React from 'react';
import Youtuber from './Youtuber';
import './YoutubersList.css'

export default function YoutubersList(props){
    return (
        <div className="Youtubers">
            <h3>Mis Youtubers favoritos sobre videojuegos</h3> 
            {
                props.youtubers.map( (item) => {
                    return (
                        <Youtuber 
                            key={item.get('id')}
                            {...item.toJS()}
                        />
                    )
                })
            }
        </div>
    )
}