import React from 'react';
import {StyleSheet, AsyncStorage} from 'react-native';
import { Scene , Router ,Actions} from 'react-native-router-flux';
import AdminLogin from './components/AdminLogin';
import EmployeeLists from './components/EmployeeLists';
import EmployeeEditPage from './components/EmployeeEditPage';
import CreateEmployee from './components/CreateEmployee';

const RouterPage = () => { 

  onLogoutUser = async() => {
    try {
      await AsyncStorage.removeItem('username');
      Actions.pop();
      Actions.login({type:'reset'}); 
    } catch (error) {
      console.log(error.message); 
    }
   }

  return (
    <Router>
      <Scene key = 'root' headerLayoutPreset={'center'} titleStyle={Styles.titleTextStyle} hideNavBar>
        <Scene key = 'auth'>
           <Scene key = 'login' component = {AdminLogin}  title ="Login" />
        </Scene>
        <Scene key = 'success'>
          <Scene
            leftTitle = 'Add' 
            rightTitle = 'Logout'
            onLeft = {() => Actions.createEmployee()} 
            onRight = {() => { this.onLogoutUser()}}   
            key = 'employeeLists'
            component = {EmployeeLists}
            
            title ="Employees"
            initial
            />
            <Scene
             key = 'createEmployee'
             component = {CreateEmployee}
             title = 'Create Employee'
            />
            <Scene
              key = 'employeeEdit'
              component = {EmployeeEditPage}
              title = 'Edit Employee' 
            />
        </Scene>
      </Scene>
    </Router>
  )
}

const Styles = StyleSheet.create({
  titleTextStyle:{
    color: '#000',
    fontSize:20,
    fontWeight:'600',
  }
});

export default RouterPage; 
