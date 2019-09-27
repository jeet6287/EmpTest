import _ from 'lodash';
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button , Confirm, Spiner,ErrorMsg } from './common';
import { employeeFormUpdate, employeeDelete } from '../actions';
import EmployeeDetails from './EmployeeDetails';

class EmployeeEditPage extends Component {
    constructor() {
        super();
        this.state = {
          modalPopUp:false
        }
    }

    UNSAFE_componentWillMount(){
      _.each(this.props.employee,(value,prop) => {
          this.props.employeeFormUpdate({prop,value}) 
      });
    }

    onAccept(){
      this.props.employeeDelete({id:this.props.employee.id});  
    }
    
    onDecline() {
        this.setState({modalPopUp: !this.state.modalPopUp})
    }

    renderErrorMsg(){
      if(this.props.error){
        return (
          <ErrorMsg>
              {this.props.error}
          </ErrorMsg>
        );
      }
    }

    render(){
        return(
          <Card>
             <EmployeeDetails />    
             <CardSection>
                <Button onPress = {()=> this.setState({modalPopUp: !this.state.modalPopUp})}>
                  Remove Employee
                </Button>
             </CardSection>
            
               <Confirm
                  visible = {this.state.modalPopUp}
                  onAccept = {this.onAccept.bind(this)}
                  onDecline = {this.onDecline.bind(this)}
                  >
                  Are you sure want to delete the selected employee ?
                </Confirm>

          </Card>
        )
     }
}

const mapStateToProps = (state) => {
    const {loading, error} = state.employees;
    const {employee_name,employee_salary,employee_age} = state.employeeForm;
    return {loading, error,employee_name,employee_salary,employee_age}
  }

export default connect(mapStateToProps,{employeeFormUpdate,employeeDelete})(EmployeeEditPage); 