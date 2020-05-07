import React, {Component} from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { makeGetEmployeeState } from './reselect/getTaskSelector';
import PropTypes from 'prop-types';

const propTypes = {
	employees: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				employee_name: PropTypes.string.isRequired,
				employee_salary: PropTypes.string.isRequired,
				employee_age: PropTypes.string.isRequired
			})
		).isRequired,
	id: PropTypes.string,
};

const defaultProps = {
	id: '',
};

class ListTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1,
			limit: 10
		}
	}

	setPage = (pages) => {
        let page = this.state.page + pages;
        this.setState({
            page
        })       
    }

    setFirstLastPage = (page) => {
        this.setState({
            page
        })
    }

	render() {
		const { employees } = this.props;
		const { page, limit } = this.state;
		const a = employees.data ? employees.data : [];
		debugger;
		return (
			<div>
				<h2>List Employee</h2>
				<table className="table table-hover">
	                <tbody>
	                    <tr>
	                        <th>ID</th>
	                        <th>Employee Name</th>
	                        <th>Employee Salary</th>
	                        <th>Employee Age</th> 
	                        <th>Action</th>                         
	                    </tr>
	                    {
	                        a.map((employee, index) => {
	                            if( ((page - 1) * limit) <= index && index < (limit * page)) {
	                                return <Task
	                                        employee={employee} 
	                                        key={index} 
	                                        index={index}
	                                    />
	                            }
	                        })	                                                    
	                    }  
	                </tbody>                    
	            </table>
	            <p>{ page }/{ parseInt(employees.length/limit)+1 }</p> 
	          	<button 
	            	type="button" 
	            	className="btn btn-default button" 
	            	onClick={ () => { this.setFirstLastPage(1) } }
	            >First page</button>
	            <button 
	            	type="button" 
	            	className="btn btn-default button" 
	            	onClick={ () => { this.setPage(-1) } } 
	            	disabled={ page === 1 ? "disabled" : "" }
	            >Prev</button>
	            <button 
	            	type="button" 
	            	className="btn btn-default button" 
	            	onClick={ () => { this.setPage(1) } } 
	            	disabled={ page - 1 === parseInt(employees.length/limit) ? "disabled" : "" }
	            >Next</button>
	            <button 
	            	type="button" 
	            	className="btn btn-default button" 
	            	onClick={ () => { this.setFirstLastPage(1 + parseInt(employees.length/limit)) } }
	            >Last page</button>
            </div>
		);
	}
}

ListTask.propTypes = propTypes;
ListTask.defaultProps = defaultProps;

const makeMapStateToProps = () => {
    const getEmployeeState = makeGetEmployeeState();
    const mapStateToProps = (state, props) => {
		const employees = getEmployeeState(state, props)
		debugger;
        return {
			employees
        }
    }
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(ListTask);