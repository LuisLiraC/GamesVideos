import React, { Component } from 'react';
import Search from '../components/Search';

class SearchContainer extends Component {
    state = {
        value: "Zelda"
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.input.value, 'submit');
    }

    setInputRef = (element) => {
        this.input = element;
    }

    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <Search 
                setRef={this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value}
            />
        )
    }
}

export default SearchContainer;