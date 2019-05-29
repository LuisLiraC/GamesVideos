import React from 'react';
import Category from './Category';
import Media from '../../playlist/components/Media';
import './Categories.css';
import SearchContainer from '../../widgets/containers/SearchContainer';

function Categories (props) {
    return (
        <div className="Categories">
            <SearchContainer />
            {
                props.loading && (
                    <p>Buscando...</p>
                )
            }
            {
                props.search.map((item)=> {
                    return <Media 
                        openModal={props.handleOpenModal}
                        {...item.toJS()}
                        key={item.get('id')}
                    />
                })
            }
            {
                props.categories.map( (item) => {
                    return (
                        <Category 
                            key={item.get('id')} 
                            {...item.toJS()} 
                            handleOpenModal={props.handleOpenModal}
                        />
                    )
                })
            }
        </div>
    )
}

export default Categories;