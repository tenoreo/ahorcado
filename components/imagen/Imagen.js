import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';

export default class Imagen extends Component{
    contruct(props){
        super(props);
    }
    render(){
        return(
            <Image style={styles.image} source={imagenes[this.props.numFallos.toString()]}/>
        );
    }
}

const styles=StyleSheet.create({
    image:{
        flex:1,
        padding:20,
        width:underfined,
        height:underfined,
        resizeMode:'contain',
        borderColor:'red',
        borderWidth:2,
        alignItems:'center'
    }
});

const imagenes={
    '0':require('../../img/0.png'),
    '1':require('../../img/1.png'),
    '2':require('../../img/2.png'),
    '3':require('../../img/3.png'),
    '4':require('../../img/4.png'),
    '5':require('../../img/5.png'),
    '6':require('../../img/6.png'),
}