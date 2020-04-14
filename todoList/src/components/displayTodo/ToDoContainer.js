import {connect} from 'react-redux';

import ToDo from './ToDo';

// Actions
import {todoUiActions} from '../../process/actions/todoUiActions';

function mapStateToProps(state, ownProps) {
    return{};
}

function mapDispatchToProps(dispatch) {
    return{
        single: (id, object) => dispatch(todoUiActions.single(id, object)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
