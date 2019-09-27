import { combineReducers } from 'redux';
import Employee from './Employee';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  employees:Employee,
  employeeForm:EmployeeFormReducer, 
}); 

