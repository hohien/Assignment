import React, { Component } from 'react';

import {
    Platform,
    Image,
    View,Text,Dimensions,
    TouchableOpacity
} from 'react-native';

import Colors from '../../../values/Colors';
import Dimens from '../../../values/Dimens';

import ArtistHeader from './ArtistHeader';
import {Button,Card} from 'react-native-elements';
var screenUtils = Dimensions.get('window');

export default class ArtistItem extends Component {


    render(){
        const {line,container,imageMain,buttonBuy,artistHeader} = styles;
        return (
            <View style ={container}>
                <ArtistHeader 
                    styles = {artistHeader}
                    artistName = {this.props.data.title}
                    artistDescribe ={this.props.data.artist}
                    artistAvatar = {this.props.data.thumbnail_image}
                    artistPrice = {this.props.data.price}
                />

                <View
                    style={line}
                />

                <TouchableOpacity activeOpacity={0.9}>
                    <Image 
                        style={imageMain} 
                        source={{uri:`${this.props.data.image}`}}/>
                </TouchableOpacity>

                
                <View
                    style={line}
                />

                <Button
                    title={"Buy Now"}
                    buttonStyle ={buttonBuy}
                    onPress = {()=>{
                        this.props.onPress(this.props.data,this.props.index);
                        }}
                    color = {Colors.blue500}
                    fontWeight= 'bold'
                    fontSize= {Dimens.title_size}
                    />
            </View>
            
        );
    }
}

const styles= {
    container:{

        borderLeftWidth: 1,
        borderRightWidth:1,
        borderTopWidth:1,
        
        borderBottomWidth: 3,
        borderBottomColor: Colors.brown200,

        marginLeft:16,
        marginRight:16,

        borderColor: Colors.brown200,

        backgroundColor:Colors.gray50,
        
        marginBottom:12,
    },
    artistHeader:{
        
    },
    line:{
        marginBottom:4,
        borderBottomColor: Colors.brown200,
        borderBottomWidth: 1,
    },
    imageMain:{
        borderRadius:2,
        marginLeft: 4,
        marginBottom: 4,
        marginRight:4,
        height:250,
        flex:1,
        resizeMode:'cover',
        marginTop: 1,
    },

    buttonBuy:{
        marginBottom:4 ,
        marginLeft: 8,
        marginRight: 8,
        backgroundColor:'white',
        borderColor: Colors.blue500,
        borderWidth: 1,
        borderRadius: 5,
    },
    
    textButtonBuy: {

    }
}