import React, {Component, Fragment} from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Map as map} from 'immutable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Route, Switch, Redirect} from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import Videos from './Videos';
import Video from '../components/Video';
import Contact from '../components/Contact';
import NotFound from '../../error/components/RegularError';
import reducer from '../../reducers/Reducers';

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(
            logger,
            thunk
        )
    )
);


class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <Fragment> 
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/GamesVideos" component={Home} />
                        <Route exact path="/videos" component={Videos} />
                        <Route exact path="/videos/:id" component={Video} />
                        <Route exact path="/contacto" component={Contact} />
                        <Redirect exact from="/v" to="/videos" />
                        <Redirect from="/v/:id" to="/videos/:id" />
                        <Route component={NotFound}/>
                    </Switch>
                </Fragment>
            </Provider>
        )
    }
}

export default App;