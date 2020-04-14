import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

class TickSuccess extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isActiveAll} = this.props;
        if(isActiveAll !== prevProps.isActiveAll) {
            this.onState(isActiveAll);
        }
    }

    onState = (isActiveAll) => {
        this.setState((prevState) => ({
            isActive: isActiveAll,
        }))
    };

    onChange = () => {
        const {onClick} = this.props;
        this.setState((prevState) => ({
            isActive: !prevState.isActive,
        }))
        onClick();
    };

    render() {
        const {isActive} = this.state;
        const {isActiveAll, todo} = this.props;
        console.log('linhnvg', isActiveAll);
        return (
            <div style={todo.isActive.isActive ? {opacity: '1', padding: '0 24px 0px'} : {opacity: '1', padding: '0 24px 0px'}}>
                {/* <img src={'./tick.png'} alt={'tick'} /> */}
                <Checkbox onChange={this.onChange} checked={!todo.isActive.isActive}/>
            </div>
        );
    }
}

TickSuccess.propTypes = {
    // Object
    todo: PropTypes.object,
    // Boolean
    isActiveCheck: PropTypes.bool,
    isActiveAll: PropTypes.bool,

    // func
    onClick: PropTypes.func,
}

TickSuccess.defaultProps = {
    isActiveAll: false,
}

export default TickSuccess;
