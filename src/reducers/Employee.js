import {
  EMPLOYEE_CREATE, 
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEES_FETCH_FAILED,
  EMPLOYEE_DELETE
} from '../actions/types';

const INITIAL_STATE = { error:'',loading:true} 

export default (state = INITIAL_STATE , action) => {
    switch (action.type) { 
      case EMPLOYEES_FETCH_SUCCESS:
        return {...state, employees:action.payload,loading:false, error:''}; 
      case EMPLOYEES_FETCH_FAILED:  
         return {...state, loading:false, error:'Something went wrong.Employees Not Found.'};     
      case EMPLOYEE_DELETE:
            return {...state, error:'',loading:true}; 
      case EMPLOYEE_CREATE:
          return {...state, error:'',loading:true}; 
           
      default:
         return state;
    }
};

