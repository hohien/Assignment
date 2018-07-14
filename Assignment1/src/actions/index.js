import TypeAction from './TypeAction';


export const SearchArtistAction = (query) =>{

    return {
        type:TypeAction.SEARCH_ARTIST,
        query: query.trim().toLowerCase()
    }
}

export const FilterArtistAction = (filterType, filterArtistIndex) =>{
    return {
        type:filterType,
        filterArtistIndex
    }
}

export const FetchingArtistSuccess = (artistData) =>{
    return {
        type:TypeAction.FETCHING_USERS_SUCCESS,
        artistData
    }

}

export const FetchingArtistFailure = (errorFetchingArtists) =>{
    type:TypeAction.FETCHING_USERS_FAILURE,
    errorFetchingArtists
}

export const fetchingArtist = ()=>{
    return async dispatch => {
        try {
            let response = await fetch ("https://rallycoding.herokuapp.com/api/music_albums");
            let result = await response.json();
            
            dispatch(FetchingArtistSuccess(result));
        } catch (error) {
            dispatch(FetchingArtistFailure(error));
        }


    }
}