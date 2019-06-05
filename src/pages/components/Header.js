import React, { Component } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import {withRouter} from 'react-router';

class Header extends Component {
  handleClick = () => {
    this.props.history.goBack();
  }
  render() {
    return (
      <header className="Header">
        <img src={logo} width={290}/>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="is-selected">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/videos" activeClassName="is-selected">
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" activeClassName="is-selected">
                Contacto
              </NavLink>
            </li>
            <div className="separator">

            </div>
            <li>
              <NavLink to="/v" activeClassName="is-selected">
                Redirect
              </NavLink>
            </li>
            <li>
              <a onClick={this.handleClick} >
                Back
              </a>
            </li>
            <li>
              <NavLink to="/404" activeClassName="is-selected">
                404
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(Header)