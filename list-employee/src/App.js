import React, {Component} from 'react';
import './App.css';
import AddTask from './AddTask';
import ListTask from './ListTask';
import { connect } from 'react-redux';
import { getListEmployee } from './action/action';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: '',
        }
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            empId: this.refs.empId.value
        });
    }

    setPage = (pages) => {
        let page = this.state.page + pages;
        this.setState({
            page
        })       
    }

    setFirstLastPage = (page) => {
        console.log("last page " + page);
        this.setState({
            page
        })
    }

    componentDidMount() {
        const {getListEmp} = this.props;
        getListEmp();
    }

    getListEmp = () => {
        const {getListEmp} = this.props;
        getListEmp();
        this.refs.empId.value = '';
        this.setState({
            empId: ''
        });
    }

    render(){
        return (
            <Router>
                <div className="container">                
                    <h1 
                        style={{
                            fontWeight: "600", 
                            textAlign: "center", 
                            textShadow: "rgb(63, 95, 249) -1px -2px 0.5em", 
                            letterSpacing: "3px"
                        }}
                    >Training React</h1>
                    <div className="md-form mt-0" style={{marginTop: "15px"}}>
                        <form onSubmit={ this.onHandleSubmit }>
                            <input 
                                className="form-control" 
                                type="text" 
                                placeholder="Search by employee_id" 
                                ref="empId"
                            />
                        </form>
                        <button 
                            type="button" 
                            className="btn btn-warning" 
                            onClick={ this.getListEmp } 
                            style={{marginTop: "5px"}}
                        >Back</button>
                    </div>
                    <br/>
                    <button type="button" className="btn btn-success">
                        <Link to="/">List Employee</Link>
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-success" 
                        style={{marginLeft: "5px"}}
                    ><Link to="/create-employee">Create Employee</Link></button>
                    <div>
                        <Switch>
                            <Route exact path="/" render={() => <ListTask id={ this.state.empId } /> }/>
                            <Route path="/create-employee" render={(props) => <AddTask {...props} /> }/>
                            <Route path="/repair-employee/:emp" render={(props) => <AddTask {...props} /> }/>
                        </Switch>
                    </div>
                
                </div>
            </Router>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListEmp: () => dispatch(getListEmployee()),
    }
}

const mapStateToProps = (state) => {
    return {
        showAddForm: state.showAddForm
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


