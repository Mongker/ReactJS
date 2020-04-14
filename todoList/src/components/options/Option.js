import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Styles
import './css/index.css';
import {Link} from 'react-router-dom';

class Option extends Component {
    constructor(props) {
        super(props);

    }

    onClickAll = (event) => {
        // do something
    };

    onClickActive = (event) => {
        // do something
    };

    onClickCompleted = (event) => {
        // do something
    };

    render() {
        const {index} = this.props;
        return (
            <div style={{display: 'inline-flex'}}>
                <div style={{paddingRight: '50px', paddingLeft: '20px'}}>{index} item</div>
                <div style={{paddingRight: '50px'}} onClick={this.onClickAll}>
                    <Link to={'/'}>All</Link>
                </div>
                <div style={{paddingRight: '50px'}} onClick={this.onClickActive}>
                    <Link to={'/active'}>Active</Link>
                </div>
                <div style={{paddingRight: '50px', float: 'right'}} onClick={this.onClickCompleted}>
                    <Link to={'/completed'}>Completed</Link>
                </div>
            </div>
        );
    }
}

Option.propTypes = {
    // Number
    index: PropTypes.number,
    // Actions
    getActive: PropTypes.func,
    getCompleted: PropTypes.func,
    getAll: PropTypes.func,
};

Option.defaultProps = {
    getActive: () => {},
    getCompleted: () => {},
    getAll: () => {},
}

export default Option;
