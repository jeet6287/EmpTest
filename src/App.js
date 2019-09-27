import React, {Component} from 'react';
import {View,Text,StatusBar,StyleSheet,BackHandler} from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore ,applyMiddleware } from 'redux';

import reducers from './reducers';
import RouterPage from './Router';

class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
       <Provider store = {createStore(reducers ,{} , applyMiddleware(ReduxThunk))}>
         <RouterPage />
        </Provider>
      </View>
    )
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  handleBackButton() {
    return true;
  }
}


export default App;  