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