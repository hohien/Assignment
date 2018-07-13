import React, { Component } from 'react';

import {
    Platform,
    View,Text
} from 'react-native';

import Colors from '../../../values/Colors';
import Dimens from '../../../values/Dimens';

import SearchArtist from './SearchArtist';
const Toolbar = (props) => {
    const {container,title,searchArtist} = styles;
    return (
        <View style={container}>
            <Text style={title}>
                {props.title}
            </Text>
            <SearchArtist style = {searchArtist}/>
        </View>
    );
}


const styles= {
    container:{
        ...Platform.select({
            ios:{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.6,
                shadowRadius: 2,  
            },
            android:{
                elevation: 4,
            }
        }),
        flexDirection: 'row',
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        marginLeft:8,
        marginRight: 8,
        paddingLeft: 16,
        height: Platform.OS === "ios" ? Dimens.height_toolbar + 20 : Dimens.height_toolbar,
        backgroundColor:Colors.gray50,
        alignItems: 'center',
    },
    title:{
        color:Colors.blackTitle,
        fontSize: Dimens.title_size,
    },
    searchArtist:{
      flex:1
    }
}

export default Toolbar;