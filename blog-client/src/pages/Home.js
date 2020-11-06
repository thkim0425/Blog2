import React, { Component } from "react";
import HeaderContainer from "containers/Base/HeaderContainer";
import BodyContainer from "containers/Base/BodyContainer";
import FooterContainer from "containers/Base/FooterContainer";
import LayoutWrapper from "containers/Base/LayoutWrapper";

class Home extends Component {
  render() {
    console.log("call render...  pages/Home.js");
    return (
      <LayoutWrapper>
        <HeaderContainer />
        <BodyContainer />
        {/* <FooterContainer /> */}
      </LayoutWrapper>
    );
  }
}

export default Home;
