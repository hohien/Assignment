import React, { Component } from 'react';

import {    
    View,
    Linking,
    Alert,
    StyleSheet,
} from 'react-native';

import Colors from '../../../values/Colors';

import {ButtonGroup} from 'react-native-elements';
import {FilterArtistAction,SearchArtistAction} from '../../../actions/index';
import {connect} from 'react-redux';
import TypeAction from '../../../actions/TypeAction';

class ArtistFilterGroup extends Component{

    updateIndex = (selectedIndex) =>{
        switch(selectedIndex){
            case 0:{
                this.props.SearchArtistAction("");
                this.props.FilterArtistAction("",selectedIndex);
                break;
            }

            case 1:{
                this.props.FilterArtistAction(TypeAction.FILTER_SMALLER_100000,selectedIndex);
                break;
            }
            case 2:{
                this.props.FilterArtistAction(TypeAction.FILTER_SMALLER_300000,selectedIndex);
                break;
            }
            case 3:{
                this.props.FilterArtistAction(TypeAction.FILTER_BIGGER_300000,selectedIndex);
                break;
            }

        }
    }


    render(){

        const {container} = styles;

        const buttons =['None','<100000','<300000','>=300000'];

        return(
            
            <View style= {container}>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={this.props.selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 50}}
                />
            </View>

        );
    }

}

const styles = StyleSheet.create(
    {
        container:{
            height:50,
            backgroundColor:"white",
        }
    }
);
function mapStateToProps(state){
    console.log(`selectedIndex: ${state.SelectedIndexFilter}`);
    return {
        selectedIndex:state.selectedIndexFilter
        
    }
}
export default connect(mapStateToProps,{FilterArtistAction,SearchArtistAction})(ArtistFilterGroup);