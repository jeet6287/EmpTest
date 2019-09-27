import React ,{Component} from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';

const Button = (props) => {
   return (
     <TouchableOpacity onPress = {props.onPress} style = {styles.containerStyle}>
      <Text style = {styles.textStyle}> {props.children} </Text>
     </TouchableOpacity>
   )
};

const styles = StyleSheet.create({
  textStyle:{
    fontSize:16,
    alignSelf:'center',
    paddingTop:10,
    paddingBottom:10,
    color:"#007aaf",
    fontWeight:'600'
  },

  containerStyle:{
    flex:1,
    alignSelf:'stretch',
    backgroundColor:'#fff',
    borderRadius:5,
    borderColor:'#007aaf',
    borderWidth:1,
    marginLeft:5,
    marginRight:5
  }
});

export {Button};
