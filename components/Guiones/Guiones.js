import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';

export default class Guiones extends Component{
    contruct(props){
        super(props);
    }
    getPalabraConFormato(){
        return this.props.palabraAdivinadaHastaElMomento.split('').joint(' ')
    }
    render(){
        return(
            <Text style={styles.guiones}>{this.getPalabraConFormato()}</Text>
        );
    }
}

const styles=StyleSheet.create({
    guiones:{
        fontSize:40,
        textAlign:'center'
    }
});