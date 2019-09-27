import {
  EMPLOYEE_UPDATE ,
  EMPLOYEE_CREATE ,
  EMPLOYEE_CREATE_FAILED,
  EMPLOYEE_DELETE ,
  EMPLOYEES_FETCH_SUCCESS ,
  EMPLOYEES_FETCH_FAILED,
  EMPLOYEE_FORM_RESET,
  EMPLOYEE_DELETE_FAILED
} from './types';

import { Actions } from 'react-native-router-flux'; 

const BASE_URL = 'http://dummy.restapiexample.com/api/v1';

export const employeeFormUpdate = ({prop,value}) => {
  return {
    type:EMPLOYEE_UPDATE,
    payload:{prop,value}
  }
}

export const employeesFetch = () => {
  let URL = BASE_URL + '/employees';
  return (dispatch) => {
    fetch(URL,{
      method: 'GET',
    })
    .then(responce => responce.json())
    .then((lists) => { return dispatch({type:EMPLOYEES_FETCH_SUCCESS,payload:lists}); })  
    .catch((e) => { return dispatch({type:EMPLOYEES_FETCH_FAILED , payload:e.message}); 
    });
  }
}

export const empoloyeeCreate = ({employee_name,employee_salary,employee_age}) => {
  let URL = BASE_URL + '/create';
  var emp = {name:employee_name, salary:employee_salary, age:employee_age}
  return (dispatch) => {
     fetch(URL,{
       method:'POST',
       body: JSON.stringify(emp),
       headers: {'Content-Type': 'application/json'}
     })
     .then(responce => responce.json())
     .then((result) => createEmpSuccess(dispatch,result)) 
     .catch((e) => {return dispatch({type:EMPLOYEE_CREATE_FAILED,payload:e.message})});  
  };
}

const createEmpSuccess = (dispatch,emp) => {
  dispatch({type:EMPLOYEE_CREATE});
  Actions.employeeLists({type:'reset'})
}

const createEmpFailure = (dispatch,e) => {
  dispatch ({type:EMPLOYEE_CREATE_FAILED})  
}

export const employeeDelete = ({id}) => {
  let URL = BASE_URL + `/delete/${id}`;
  return (dispatch) => {
    fetch(URL,{
      method:'DELETE'
    })
    .then(()=>{
      dispatch({type:EMPLOYEE_DELETE})
      Actions.employeeLists({type:'reset'})
    }).catch((err) => {
      return {type:EMPLOYEE_DELETE_FAILED , payload:'Delete Opeartion Failed'}
    });
  }
}

export const resetFormData = () => {
  return{type:EMPLOYEE_FORM_RESET}
}

