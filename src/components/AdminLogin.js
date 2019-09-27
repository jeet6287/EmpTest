import React , { Component } from 'react';
import {View,StyleSheet,AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Card, CardSection , Input , Button, Spiner ,ErrorMsg} from './common';

class AdminLogin extends Component {
  constructor(props){
      super(props);
      this.state = {
          userid:'',
          password:'',
          error:'',
          loading:false,
      }
  }

  UNSAFE_componentWillMount(){
    this.getUserName(); 
  }

  updateUsername(text){
    this.setState({userid:text});
  }

  updatePassword(text){ 
    this.setState({password:text});
  }

  saveUserName = async(name) => {
    try {
        await AsyncStorage.setItem('username',name);
        Actions.success();
    } catch (error) {
        console.log(error);
    }
  }

  getUserName = async() => {
    let userid = '';  
    try {
        this.setState({userid:'',password:'',error:'',loading:false});
        userid = await AsyncStorage.getItem('username') || null;
        if(userid){Actions.success();}
    } catch (error) {
        console.log(error);
    }
  }

  onLoginPressed(){
    const {userid,password} = this.state;
    if(userid.trim().toLowerCase() === 'admin' && password === '123456'){
       this.setState({error:'', loading:true});
       this.saveUserName(userid.toLowerCase());
    }else {
        this.setState({error:'username and password not correct!!'});
    }
  }

  renderErrorMsg(){
    if(this.state.error){
      return (
        <ErrorMsg>
            {this.state.error}
          </ErrorMsg>
      )
    }
  }

  renderButton(){
    if(this.state.loading){
     return <Spiner size = 'large'/>
    }
    return (
      <Button onPress = {this.onLoginPressed.bind(this)}>
        Login
      </Button>
    );
  }

  render(){
    return(
       <View style = {styles.container}>
        <Card>
          <CardSection>
            <Input
              label = 'Username'
              placeholder = 'username'
              onChangeText = {this.updateUsername.bind(this)}
              value = {this.state.userid}
            />
          </CardSection>

          <CardSection>
           <Input
             isSecureText
             label = 'Password'
             placeholder = 'password'
             onChangeText = {this.updatePassword.bind(this)}
             value = {this.state.password}
           />
          </CardSection>

          {this.renderErrorMsg()}

          <CardSection>
            {this.renderButton()} 
          </CardSection>

       </Card>
    </View> 
    );
  }
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    alignItems:'stretch',
    justifyContent:'center'
  }
});

export default AdminLogin; 

