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
            placeholder="Buscar..."
            type="text"
            name="search"
            onChange={props.handleChange}
        />
    </form>
)

export default Search;