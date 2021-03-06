import React from 'react';
import { StyleSheet,View , Text , TextInput } from 'react-native';

const Input = (props) => {
  return (
     <View style = {styles.containerStyle}>
      <Text style = {styles.textStyle}> {props.label} </Text>
      <TextInput
       editable = {props.isEditable}
       secureTextEntry = {props.isSecureText}
       placeholder = {props.placeholder}
       autoCorrect = {false}
       style = {styles.inputStyle}
       value = {props.value}
       onChangeText = {props.onChangeText}
      />
     </View>
  );
};

const styles = StyleSheet.create({
  inputStyle:{
    color:"#000",
    flex:2,
    paddingRight:5,
    paddingLeft:5,
    fontSize:18,
    lineHeight:23
  },
  textStyle:{
    fontSize:18,
    paddingLeft:20,
    flex:1
  },
  containerStyle:{
   height:40,
   alignItems:'center',
   flex:1,
   flexDirection:'row'
  }
});

export {Input};
