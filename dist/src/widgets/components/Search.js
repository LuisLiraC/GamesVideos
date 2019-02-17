import React from 'react';
import './Search.css';

const Search = (props) => (
    <form 
        className="Search"
        onSubmit={props.handleSubmit}
    >
        <input 
            ref={props.setRef}
            className="Search-input" 
            placeholder="Busca tu juego favorito"
            type="text"
            name="search"
            // defaultValue="Zelda"
            onChange={props.handleChange}
            value={props.value}
        />
    </form>
)

export default Search;