import { AppRegistry } from 'react-native';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ArtistScreen from './src/scenes/artist/ArtistScreen';


import reducer from './src/reducers/index';

const App =()=>{
    return (
        <Provider store={createStore(reducer)}>
            <ArtistScreen />
        </Provider>
    );
}

AppRegistry.registerComponent('Assignment1', () => App);
