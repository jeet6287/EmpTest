import {
  EMPLOYEE_UPDATE ,
  EMPLOYEE_FORM_RESET,
  EMPLOYEE_CREATE_FAILED
  
} from '../actions/types';

const INITIAL_STATE = {employee_name:'', employee_salary:'', employee_age:'',error:'',loading:''}

 export default (state = INITIAL_STATE , action) => {
    switch (action.type) {
      case EMPLOYEE_UPDATE:
         return {...state , [action.payload.prop]:action.payload.value }
      case EMPLOYEE_CREATE_FAILED: 
         return {...state , error:'Something went wrong.Employee Not Created.'}      
      case EMPLOYEE_FORM_RESET:
         return INITIAL_STATE;
      default:
         return state;
    }
 };
