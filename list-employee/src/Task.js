import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { deleteEmployee }  from './action/action';
import { Link } from 'react-router-dom';

class Task extends Component {
    deleteE = () => {
        const { deleteEmp } = this.props;
        deleteEmp(this.props.employee.id);
    }

    render(){
        const { employee } = this.props;
        if(employee !== undefined) {
            return (
                <tr>
                    <td> { employee.id} </td>
                    <td> { employee.employee_name } </td>
                    <td> { employee.employee_salary } </td>
                    <td> { employee.employee_age } </td> 
                    <td>
                        <Link to= {`/repair-employee/${ employee.id }`}>
                            <i 
                                className="fas fa-pencil-alt float"
                                style={{color: "#00c5f7"}}
                            ></i>
                        </Link>
                        <i 
                            className="far fa-trash-alt float" 
                            onClick={ this.deleteE }
                            style={{color: "red"}}
                        ></i>
                    </td>
                </tr>
            );
        } else {
            return null;
        }          		    
    }  
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEmp: (id) => dispatch(deleteEmployee(id)),
    }
}

export default connect(null, mapDispatchToProps)(Task);
