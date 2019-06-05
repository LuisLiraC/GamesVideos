import React from 'react';
import logo from '../../../images/logo.png'
import technologies from '../../../images/technologies.png'
import LinkMusic from '../../../images/link_music.png'
import './generic-page.css';

const Home = () => (
  <div className="Page">
    <img src={logo}/>
    <p>GamesVideos es una plataforma creada con el aprendizaje obtenido de los cursos de <a href="https://platzi.com/react">React</a>, <a href="https://platzi.com/redux">Redux</a> y <a href="https://platzi.com/router">React Router</a></p>
    <div className="technologies" >
        <img src={technologies}/>
    </div>
    <img src={LinkMusic} className="LinkMusic" />
    <div>:D</div>
  </div>
)

export default Home