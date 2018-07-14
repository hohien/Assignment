import {artistDataReducer,searchArtistReducer,selectedIndexFilter} from './ArtistReducer';

import {combineReducers} from 'redux';

export default combineReducers({
    artistdata: artistDataReducer,
    searchQuery: searchArtistReducer,
    selectedIndexFilter: selectedIndexFilter,
});