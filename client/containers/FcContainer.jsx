import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Landing from '../components/Landing.jsx';
import { persistData, persistReason} from '../actions/persist';
const mapStateToProps = (state) => ({
  config: state.config,
  selectedValues: state.config.selectedValues
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    persistData,
    persistReason,
}, dispatch);

const FcContainer = connect(mapStateToProps, mapDispatchToProps)(Landing);

export default FcContainer;
