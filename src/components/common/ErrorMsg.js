import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const ErrorMsg = (props) => {
   return (
     <View style = {styles.containerStyle}>
       <Text style = {styles.errorText}>{props.children}</Text>
     </View>
   );
};

const styles = StyleSheet.create({
   containerStyle:{
     padding:5,
     borderBottomWidth:1,
     backgroundColor:'#fff',
     justifyContent:'flex-start',
     flexDirection:'row',
     borderColor:"#ddd",
     position:'relative'
   },
   errorText:{
       fontSize:16,
       fontWeight:'600',
       color:'red',
       alignSelf:'center'
   }
}); 

export {ErrorMsg}; 