import React, {Component} from 'react';
import {StyleSheet, Text,Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Card,CardSection } from './common';

class EmployeeItem extends Component {
    
    onSelectEmployee(){
        Actions.employeeEdit({employee:this.props.employee}); 
    }

    render(){
        let {employee_name} = this.props.employee;
        return(
            <TouchableOpacity onPress = {this.onSelectEmployee.bind(this)}>
             <Card>
                <CardSection>
                    <Image 
                      style = {Styles.image}
                      source={require('../../assets/user_img.png')} />
                    <Text style = {Styles.text}>{employee_name}</Text> 
                </CardSection>
                </Card>
            </TouchableOpacity>
        )
    }
}

const Styles = StyleSheet.create({
   image:{
       width:44,
       height:44
   },
   text:{
       fontSize:18,
       fontWeight:'500',
       alignSelf:'center',
       marginLeft: 20,
   }
});

export default EmployeeItem;