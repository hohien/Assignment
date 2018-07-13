import ArtistData from '../scenes/artist/data/Data.json';
import TypeAction from '../actions/TypeAction';
import {_} from 'lodash';

const defaultArtistData = {
    artistData: ArtistData,
    artistFilter: ArtistData
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
        default:{
            return state;
        }
    }

}

const defaultQueryArtist ={
    queryArtist:"",
}
export const SearchArtistReducer =(state = defaultQueryArtist, action)=>{
        return {
            queryArtist: action.query
        }
}