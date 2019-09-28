import React, {Component} from 'react';
import {StyleSheet,View,Text,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import { Spiner, ErrorMsg } from './common'; 
import EmployeeItem from './EmployeeItem';


class EmployeeLists extends Component {

    componentWillMount(){
       this.props.employeesFetch();  
    }

    renderEmployees(){
        if(this.props.loading){
            return (<View style = {Styles.container}>
                <Spiner size = 'large'/>
            </View> 
          );
        }else if(this.props.error){
          return (
            <ErrorMsg> 
               {this.props.error} 
            </ErrorMsg>
          );
        }else if(this.props.employees.length){
            return (
                <FlatList
                    data={this.props.employees}
                    renderItem={({item}) => (
                        <EmployeeItem 
                           employee = {item}
                        />
                    )}
                    keyExtractor={(item) => (item.id).toString()}
            />
            );
        }
        return null;
    }
    
    render(){
        return(
          <View> 
            {this.renderEmployees()}
          </View>
        )
    } 
}

const mapStateToProps = (state) => {
    let {employees,error,loading} =   state.employees;
    return {employees,error,loading}
}

const Styles = StyleSheet.create({
    container:{
        marginTop:50
    }
});

export default connect(mapStateToProps,{employeesFetch})(EmployeeLists); 