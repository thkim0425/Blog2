import React, { Component } from "react";
import { connect } from "react-redux";

class BodyContainer extends Component {
  render() {
    const { visible } = this.props;
    if (!visible) return null;
    return <div>postlist</div>;
  }
}
export default connect(
  (state) => ({
    visible: state.base.getIn(["header", "visible"]),
  }),
  (dispatch) => ({})
)(BodyContainer);
