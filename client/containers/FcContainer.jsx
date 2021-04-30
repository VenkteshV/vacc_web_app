import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Landing from '../components/Landing.jsx';
import { persistData, triggerExcuse} from '../actions/persist';
const mapStateToProps = (state) => ({
  config: state.config,
  renderBadge: state.pledge.renderBadge || false,
  renderNegBadge : state.pledge.renderNegBadge ||false,
  selectedValues: state.config.selectedValues
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    persistData,
    triggerExcuse,
}, dispatch);

const FcContainer = connect(mapStateToProps, mapDispatchToProps)(Landing);

export default FcContainer;
