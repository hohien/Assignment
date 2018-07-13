import React, { Component } from 'react';

import {
    Platform,Image,
    View,Text,Dimensions,
    TouchableOpacity,
} from 'react-native';

import Colors from '../../../values/Colors';
import Dimens from '../../../values/Dimens';

const ArtistHeader =(props)=>{
    const {
        container,
        avatar,
        title,
        contentContainer,
        describe
    } = styles;
    return (
        <TouchableOpacity
            style={{}}
            activeOpacity={0.8} 
            onPress = {props.onPress}>
            <View style={container}>
                <Image 
                    style ={avatar}
                    source={{uri:`${props.artistAvatar}`}} />
                <View style={contentContainer}>
                    <Text style ={title}>{props.artistName}</Text>
                    <Text style = {describe}>{props.artistDescribe}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles= {
    container:{
        flex:1,
        height:48,
        backgroundColor:Colors.gray50,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingLeft:16,
        paddingRight:16,
        flexDirection: 'row',
    },
    contentContainer:{
        marginLeft: 16,
        justifyContent:'center',
        alignItems:'flex-start',
    },
    title:{
        color:Colors.blackTitle,
        fontSize: Dimens.title_size,
    },
    describe:{
        fontSize:Dimens.describe_size
    },
    avatar:{
        width:40,
        height:40,
        resizeMode:'cover',
    }
}

export default ArtistHeader;