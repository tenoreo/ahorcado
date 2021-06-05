import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import Imagen from '../imagen/Imagen';
import Guiones from '../Guiones/Guiones';
import Botonera from '../botonera/Botonera';

export default class ahorcado extends Component{
    constructor(props){
        super(props);
        
        this.state={
            numfallos:0,
            getPalabraAdivinar:palabra,
            palabraAdivinadaHastaElMomento:this.inicializarPalabraAdivinarHastaMomento(palabra)
        }
    }
    getPalabraAdivinar(){
        let palabras=['MANZANILLO','UVITA','BONITA'];
        return palabras[Math.floor(Math.random()*palabras.length)];
    }
    inicializarPalabraAdivinarHastaMomento(palabra){
        let palabraInicializada="";
        for(let i=0;i<palabra.length;i++){
            palabraInicializada+="-";
        }
        return palabraInicializada;
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Imagen style={styles.imagen} numfallos={this.state.numFallos}/>
                </View>
                <View>
                    <Guiones style={styles.guiones} palabra />
                </View>
                <View>
                    <Botonera style={styles.botonera}/>
                </View>
            </View>
            );
    } 
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:80,
        justiifyContent:'center',
        backgroundColor:'#F5EBC2'
    },
    imagen:{
        backgroundColor:'white',
        justifyContent:'center'

    },
    botonera:{
        backgroundColor:'yellow',
        justifyContent:'center'
    },
    guiones:{
        backgroundColor:'blue',
        justifyContent:'center'
    }
});