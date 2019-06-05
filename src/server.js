import express from 'express';
import React from 'react';
import App from '../dist/ssr/app';
import { StaticRouter } from "react-router";
import ReactDOMServer from "react-dom/server";
const app = express();

app.use(express.static('dist'))
app.use('/images', express.static('images'))

app.get('*', (req, res) => {
    const context = {name: 'luis'}
    const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    )
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="/css/app.css">
        <title>GamesVideos</title>
    </head>
    <body>
    
        <!-- React Modules -->
        <div id="home-container">${html}</div>
        <div id="modal-container"></div>
    
        <!-- Scripts -->
        <!-- <script src="http://localhost:9000/js/app.js"></script> -->
        <script src="/js/app.js"></script>
    </body>
    </html>
    `);
    res.end();
})

app.listen(3000)
console.log("Servidor iniciado en el puerto: 3000")