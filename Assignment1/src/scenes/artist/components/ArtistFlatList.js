import React, { Component } from 'react';

import {    
    View,
    Linking,
    FlatList,
    Alert,
    StyleSheet,
} from 'react-native';

import Colors from '../../../values/Colors';

import ArtistItem from './ArtistItem';

import {connect} from 'react-redux';
import {fetchingArtist}from '../../../actions/index';
class ArtistFlatList extends Component{

    _onPressItem =(data,index) =>{
        Linking.canOpenURL(data.url).then(isSupported=>{
            if (isSupported){
                Linking.openURL(data.url);
            } else {
                Alert.alert("Link was error","Try later!");
            }
        });
    };

    _keyExtractor = (item,index) => item.url; 

    _renderItem = ({item,index}) => (
        <ArtistItem 
            index = {index}
            data ={item}
            onPress = {this._onPressItem}
            keyExtractor ={this._keyExtractor}
        />
    );

    componentDidMount(){
        this.props.fetchingArtist();
    }
    render(){

        const {container,flatList} = styles;

        return(
            
            <View style= {container}>
                <FlatList
                    style={flatList}
                    keyExtractor ={this._keyExtractor}
                    data ={this.props.artistData}
                    renderItem ={this._renderItem}
                />
            </View>

        );
    }

}

const styles = StyleSheet.create(
    {
        container:{
            flex: 100,
            backgroundColor:Colors.bgColor,
        },
        flatList:{
            flex:1
        }
    }
);

function mapStateToProps(state){

    return {
        artistData:state.artistdata.artistData
    }
}
export default connect(mapStateToProps,{fetchingArtist})(ArtistFlatList);
