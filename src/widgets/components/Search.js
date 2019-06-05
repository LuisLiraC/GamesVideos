import React from 'react';
import './Search.css';
import {Prompt} from 'react-router';

const Search = (props) => (
    <form 
        className="Search"
        onSubmit={props.handleSubmit}
    >
        <Prompt
            when={props.prompt}
            message="¿Estás seguro que quieres abandonar la página?"
        />
            <input 
                ref={props.setRef}
                className="Search-input" 
                placeholder="Buscar..."
                type="text"
                name="search"
                onChange={props.handleChange}
            />
    </form>
)

export default Search;