import React , {Component} from 'react';
import { Text ,View } from 'react-native';
import {connect} from 'react-redux';

import {employeeFormUpdate } from '../actions';
import {  CardSection , Input } from './common';

class EmployeeDetails extends Component {
  render(){
    return(
      <View>
        <CardSection>
           <Input
            isEditable = {this.props.isEdit}
            label = 'Name'
            placeholder = 'employee name'
            value = {this.props.employee_name}
            onChangeText = {value => this.props.employeeFormUpdate({prop:'employee_name',value})}
           />
        </CardSection>

        <CardSection>
          <Input
           isEditable = {this.props.isEdit}
           label = 'Salary'
           placeholder = '000000$'
           value = {this.props.employee_salary}
           onChangeText = {value => this.props.employeeFormUpdate({prop:'employee_salary',value})}
          />
        </CardSection>

        <CardSection>
          <Input
            isEditable = {this.props.isEdit}
            label = "Age"
            placeholder = '00'
            value = {this.props.employee_age}
            onChangeText = {value => this.props.employeeFormUpdate({prop:'employee_age',value})}
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  let {employee_name,employee_salary,employee_age} = state.employeeForm;
  return {employee_name,employee_salary,employee_age};
}
 
export default connect(mapStateToProps,{employeeFormUpdate})(EmployeeDetails);  