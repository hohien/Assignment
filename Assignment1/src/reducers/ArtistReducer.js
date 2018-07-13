import ArtistData from '../scenes/artist/data/Data.json';
import TypeAction from '../actions/TypeAction';
import {_} from 'lodash';

const defaultArtistData = {
    artistData: ArtistData,
    artistFilter: []
}

export const ArtistDataReducer = (state = defaultArtistData, action) =>{
    switch(action.type){
        case TypeAction.SEARCH_ARTIST:{
            return {
                ...state,
                
                artistFilter: 
                action.query.length ===0?state.artistData:
                    _.filter(state.artistData, artist=>{
                        var title = artist.title;
                        title = title.trim().toLowerCase();
                        return title.indexOf(action.query)>=0;
                    })
                
            }
        }

        case TypeAction.FILTER_BIGGER_300000:{
            return {
                ...state,
                artistFilter:
                    _.filter(state.artistData, artist=>{
                        
                        return artist.price>=300000;
                    })
            }
        }
        case TypeAction.FILTER_SMALLER_100000:{
            return {
                ...state,
                artistFilter:
                    _.filter(state.artistData, artist=>{
                        
                        return artist.price<100000;
                    })
            }
        }
        case TypeAction.FILTER_SMALLER_300000:{
            return {
                ...state,
                artistFilter:
                    _.filter(state.artistData, artist=>{
                        
                        return artist.price<300000;
                    })
            }
        }
        default:{
            return state;
        }
    }

}

export const SearchArtistReducer =(state = {queryArtist:""}, action)=>{
        return {
            queryArtist: action.query
        }
}

export const SelectedIndexFilter =(state = {selectedIndexFilter:0}, action)=>{
    return {
        selectedIndexFilter:action.filterArtistIndex
    }
}