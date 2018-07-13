import {ArtistDataReducer,SearchArtistReducer,SelectedIndexFilter} from './ArtistReducer';

import {combineReducers} from 'redux';

export default combineReducers({
    ArtistDataReducer,
    SearchArtistReducer,
    SelectedIndexFilter,
});