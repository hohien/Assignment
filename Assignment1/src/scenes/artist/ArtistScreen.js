import React, { Component } from 'react';

import {    
    View,
    StyleSheet,
} from 'react-native';

import Colors from '../../values/Colors';

import Toolbar from './components/Toolbar'; 
import ArtistFilterGroup from './components/ArtistFilterGroup';
import ArtistFlatList from './components/ArtistFlatList';

class ArtistScreen extends Component{
    

    render(){
        
        const {container} = styles;
        
        return(
            
            <View style= {container}>

                
                <ArtistFlatList />
                
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:Colors.bgColor,
    },
 
});

export default ArtistScreen;