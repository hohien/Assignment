import { AppRegistry } from 'react-native';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ArtistScreen from './src/scenes/artist/ArtistScreen';


import reducer from './src/reducers/index';
import thunk from 'redux-thunk';

const store = createStore(reducer,applyMiddleware(thunk));
const App =()=>{
    return (
        <Provider store={store}>
            <ArtistScreen />
        </Provider>
    );
}

AppRegistry.registerComponent('Assignment1', () => App);
