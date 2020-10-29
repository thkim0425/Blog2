import React, { Component } from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "containers/Base/HeaderContainer";
import BodyContainer from "containers/Base/BodyContainer";
import FooterContainer from "containers/Base/FooterContainer";
import LayoutWrapper from "containers/Base/LayoutWrapper";
import { PostWrite } from "containers/Post";

class Home extends Component {
  render() {
    console.log("call render...  pages/Home.js");
    return (
      <LayoutWrapper>
        <HeaderContainer />
        <BodyContainer />
        <FooterContainer />
      </LayoutWrapper>
    );
  }
}

export default Home;
