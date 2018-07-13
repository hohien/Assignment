import React, { Component } from 'react';

import {
    StyleSheet,
    View
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Colors from '../../../values/Colors';
import Dimens from '../../../values/Dimens';

import {SearchArtistAction} from "../../../actions/index";
import {connect} from 'react-redux';
class SearchArtist extends Component {

    _onChangeText  = (text)  =>{
        this.props.onQueryArtist(text);
    }
    render(){
        const {containerStyle,inputStyle,inputContainer} = styles;
        return (

                <SearchBar
                    clearIcon
                    containerStyle = {containerStyle}
                    
                    value = {this.props.query}
                    onChangeText = {this._onChangeText}
                    inputStyle ={inputStyle}
                    inputContainerStyle ={inputContainer}
                />
            
        );
    }
}

const styles=StyleSheet.create( {
    containerStyle:{
        marginLeft: 8,
        marginRight: 8,
        flex:1,
        justifyContent: 'flex-start',
        backgroundColor:"transparent",
        paddingTop: 8,
    },
    inputStyle:{
        fontSize:14,
        backgroundColor:"transparent",
    },
    inputContainer:{ 
        alignItems: 'center',
        justifyContent: 'center',
    }
    
});

function mapStateToProps(state){
    return {
        query:state.SearchArtistReducer.queryArtist
    };
}
function mapDispatchToProps(dispatch) {
    return{
        onQueryArtist: (query) => {dispatch(SearchArtistAction(query))}
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchArtist);

