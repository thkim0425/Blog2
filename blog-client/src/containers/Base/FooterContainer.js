import React, { Component } from "react";
import Footer from "components/Base/Footer";
import { connect } from "react-redux";

class FooterContainer extends Component {
  render() {
    const { visible } = this.props;
    if (!visible) return null;
    console.log("call render...  containers/Base/FooterContainer.js");
    return <Footer></Footer>;
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(["header", "visible"]),
  }),
  (dispatch) => ({})
)(FooterContainer);
