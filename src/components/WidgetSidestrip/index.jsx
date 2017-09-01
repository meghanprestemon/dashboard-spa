import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  showWidgetSidebar,
  hideWidgetSidebar,
} from '../../actions';

const WidgetSidestrip = (props) => {
  return (
    <div
      className="side-strip"
      onClick={props.showSidebar ? () => props.hideWidgetSidebar(props.id) : () => props.showWidgetSidebar(props.id)}
    >
      <Icon
        className="close-widget"
        name={props.showSidebar ? 'chevron right' : 'ellipsis vertical'}
      />
    </div>
  );
}

WidgetSidestrip.propTypes = {
  id: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;
  const showSidebar = state.widgets.metadata[ownProps.id].showSidebar;
  return { id, showSidebar };
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  showWidgetSidebar,
  hideWidgetSidebar,
},
dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WidgetSidestrip);
