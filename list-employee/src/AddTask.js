import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { repairEmployee, createEmployee, getEmployeeById } from './action/action';
import { Link } from 'react-router-dom'; 
import { makeGetEmployeeState } from './reselect/getEmpById'; 
 
const makeMapStateToProps = () => {
	const getEmployeeState = makeGetEmployeeState();
	const mapStateToProps = (state, props) => {
		return {
			employee: getEmployeeState(state, props)
		}
	}
	return mapStateToProps;
}

class AddTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name : '',
			salary : '',
			age : ''
		}
	}

	isChange = (event) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState({
			[name] : value
		});
	}

    handleSubmit = () => {
    	const employee = {
    		employee_name: this.state.name, 
    		employee_salary: this.state.salary,
    		employee_age: this.state.age 
    	};
    	const { createEmp, history} = this.props;
    	history.push('/');
    	createEmp(employee);
    }

    handleRepairSubmit = () => {    	
    	const employee = { 
    		id: this.props.employee.id,
    		employee_name: this.refs.name.value,
    		employee_salary: this.refs.salary.value,
    		employee_age: this.refs.age.value
    		};
    	const { repairEmp, history } = this.props;
    	history.push('/');
    	repairEmp(employee);
    }

    componentDidMount() {
    	if(this.props.match.params.emp !== undefined) {
    		this.setState({
    			name: this.props.employee.employee_name,
    			salary: this.props.employee.employee_salary,
    			age: this.props.employee.employee_age
    		});
    	}
    }

	render(){
		const { match } = this.props;
		const { name, salary, age } = this.state;
		return(
			<div>
				<h2 
					style={{color: "#026e8a", fontWeight: "600"}}
				>{ match.params.emp !== undefined ? "Update Employee" : "Create Employee" }</h2>
				<div className="form-group">
					<label>Employee Name:</label>
					<input 
						type="text" 
						className="form-control" 
						value={name} 
						ref="name" 
						name="name" 
						placeholder="type of name" 
						onChange={ this.isChange }
					/>
					<label>Employee Salary:</label>
					<input 
						type="text" 
						className="form-control" 
						value={salary} 
						ref="salary" 
						name="salary" 
						placeholder="type of salary" 
						onChange={ this.isChange }
					/>
					<label>Employee Age:</label>
					<input 
						type="text" 
						className="form-control" 
						value={age} 
						ref="age" 
						name="age" 
						placeholder="type of age" 
						onChange={ this.isChange }
					/>
				</div>
				<button 
					type="submit" 
					className="btn btn-default" 
					onClick={ match.params.emp === undefined ? this.handleSubmit : this.handleRepairSubmit }
					style={{ marginRight : 5 + 'px' }} 
				>Submit</button>
				<button type="button" className="btn btn-default"><Link to="/">Back</Link></button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEmp: (employee) => dispatch(createEmployee(employee)),
        repairEmp: (employee) => dispatch(repairEmployee(employee)),
    }
}

export default connect(makeMapStateToProps, mapDispatchToProps)(AddTask);