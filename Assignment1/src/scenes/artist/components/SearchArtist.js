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

    componentDidMount(){
        this.props.onQueryArtist("");
    }
    
    render(){
        const {containerStyle,inputStyle,inputContainer} = styles;
        return (

                <SearchBar
                    clearIcon
                    lightTheme
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
        backgroundColor:"white"
   
    },
    inputStyle:{
        fontSize:14,
        backgroundColor:"white"
    },
    inputContainer:{ 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"white"
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

