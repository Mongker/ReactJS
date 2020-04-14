import {connect} from 'react-redux';

// Components
import Option from './Option';

function mapStateToProps(state, ownProps) {
    const index = state.todoUiReducer;
    return {
        index,
    };
}

function mapDispatchToProps(dispatch) {
    return{};

}

export default connect(mapStateToProps, mapDispatchToProps)(Option);
