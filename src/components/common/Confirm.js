import React from 'react';
import {StyleSheet,View ,Text , Modal} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const Confirm = ({visible,children,onAccept,onDecline}) => {
   return (
     <Modal
       visible = {visible}
       transparent
       animationType = "slide"
       onRequestClose = {() => {}}
      >
      <View style = {styles.containerStyle}>
        <CardSection style = {styles.CardSectionStyle}>
          <Text style = {styles.childrenTextStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress = {onAccept}>  Yes </Button> 
          <Button onPress = {onDecline}> No  </Button>
        </CardSection>
      </View>
     </Modal>
   )
};

const styles = StyleSheet.create({
  containerStyle:{
    backgroundColor:'rgba(0,0,0,0.75)',
    justifyContent:'center',
    flex:1,
    position:'relative'
  },
  childrenTextStyle:{
    fontSize:18,
    textAlign:'center',
    lineHeight:25,
    flex:1
  },
  CardSectionStyle:{
    justifyContent:'center'
  }
});

export {Confirm};
