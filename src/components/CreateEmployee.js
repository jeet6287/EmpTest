import React , {Component} from 'react';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import { employeeFormUpdate, empoloyeeCreate , resetFormData} from '../actions';
import { Card , CardSection , Button, ErrorMsg } from './common';
import EmployeeDetails from './EmployeeDetails';

class CreateEmployee extends Component {

  constructor(props){
      super();
  }

  UNSAFE_componentWillMount(){
    this.props.resetFormData();
  }

  onButtonPressed(){
     const {employee_name,employee_salary,employee_age} = this.props;
     this.props.empoloyeeCreate({employee_name,employee_salary:employee_salary||'10000$',employee_age:employee_age||'30'});
  }

  okPressed(){
    Actions.employeeLists({type:'reset'});
  }

  renderErrorMsg(){
    if(this.props.error){
      return (
        <ErrorMsg>
           {this.props.error}
        </ErrorMsg>
      )
    }
  }

  render(){
    return(
      <Card>
        <EmployeeDetails {...this.props}/>  
        {this.renderErrorMsg()}
        {
          this.props.error ?
          <CardSection>
           <Button onPress = {this.okPressed.bind(this)}>
              Ok
            </Button>
       </CardSection> :
                   <CardSection>
                   <Button onPress = {this.onButtonPressed.bind(this)}>
                     Create
                   </Button>
                </CardSection>
        }

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {employee_name,employee_salary,employee_age,error} = state.employeeForm;
  return {employee_name,employee_salary,employee_age,error} 
}

export default connect(mapStateToProps,{employeeFormUpdate,empoloyeeCreate,resetFormData})(CreateEmployee);