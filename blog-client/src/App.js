import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, Auth, PostWrite } from "pages";

import storage from "lib/storage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "redux/modules/user";

class App extends Component {
  initializeUserInfo = async () => {
    const loggedInfo = storage.get("loggedInfo"); // 로그인 정보를 로컬스토리지에서 가져옵니다.
    console.log("loggedInfo :");
    console.log(loggedInfo);

    if (!loggedInfo) {
      console.log("loggedInfo 없음.");
      return; // 로그인 정보가 없다면 여기서 멈춥니다.
    }

    const { UserActions } = this.props;
    UserActions.setLoggedInfo(loggedInfo);
    try {
      await UserActions.checkStatus();
    } catch (e) {
      storage.remove("loggedInfo 삭제");
      window.location.href = "/auth/login?expired";
    }
  };

  componentDidMount() {
    console.log("Appjs ; call this.initializeUserInfo()");
    this.initializeUserInfo();
  }

  render() {
    console.log("/App.js");
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route exact path="/post" component={PostWrite} />
        {console.log("App.js render 함수 종료시점.")}
      </>
    );
  }
}

export default connect(null, (dispatch) => ({
  UserActions: bindActionCreators(userActions, dispatch),
}))(App);
