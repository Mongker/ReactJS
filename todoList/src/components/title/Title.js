import React, {Component} from 'react';
import PropTypes from 'prop-types';

function Title() {
    return(
        <div style={{color: 'rgba(175, 47, 47, 0.15)', fontSize: '100px', textAlign: 'center', fontWeight: '100'}}>
            <span>Todo List</span>
        </div>
    );
}

Title.propTypes = {};

export default Title;
