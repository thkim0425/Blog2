import React, { Component } from "react";
import Header, {
  LoginButton,
  LoginWrapper,
  LogoutButton,
  LoginUserWelcome,
  PostButton,
} from "components/Base/Header";
import { connect } from "react-redux";
import * as userActions from "redux/modules/user";
import { bindActionCreators } from "redux";
import storage from "lib/storage";

class HeaderContainer extends Component {
  handleLogout = async () => {
    const { UserActions } = this.props;
    try {
      await UserActions.logout();
    } catch (e) {
      console.log(e);
    }

    storage.remove("loggedInfo");
    window.location.href = "/"; // 홈페이지로 새로고침
  };

  render() {
    const { visible, user } = this.props;
    if (!visible) return null;
    console.log("call render...  containers/Base/HeaderContainer.js");
    return (
      <Header>
        {user.get("logged") ? (
          <LoginWrapper>
            <div>
              <PostButton>글쓰기</PostButton>
            </div>
            <LoginUserWelcome>
              {user.getIn(["loggedInfo", "username"])}{" "}
            </LoginUserWelcome>
            <div onClick={this.handleLogout}>
              <LogoutButton>로그아웃</LogoutButton>
            </div>
          </LoginWrapper>
        ) : (
          <LoginButton />
        )}
      </Header>
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(["header", "visible"]),
    user: state.user,
  }),
  (dispatch) => ({
    UserActions: bindActionCreators(userActions, dispatch),
  })
)(HeaderContainer);
