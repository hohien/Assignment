
import TypeAction from '../actions/TypeAction';
import {_} from 'lodash';

const defaultArtistData = {
    artistData: [],
    artistFilter: []
}

export const artistDataReducer = (state = defaultArtistData, action) =>{
   
    switch(action.type){

        case TypeAction.FETCHING_USERS_SUCCESS:{
            console.log(action.artistData);
            return {
                artistData:action.artistData,
                artistFilter:[]
            }
        }
        case TypeAction.FETCHING_USERS_FAILURE:{
            return {
                artistData:[],
                artistFilter:[]
            }
        }
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



export const searchArtistReducer =(state = "", action)=>{
    if (action.stype === TypeAction.SEARCH_ARTIST)
        return action.query;
        
        return state;
}

export const selectedIndexFilter =(state = 0, action)=>{
    return !action.filterArtistIndex?state:action.filterArtistIndex;
}