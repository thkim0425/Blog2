import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  InputWithLabel,
  TextareaWithLabel,
  ButtonAlignWrapper,
  SubmitButton,
  PostCancelButton,
  PostWrapper,
} from "components/Post";
import * as postActions from "redux/modules/post";
import * as authActions from "redux/modules/auth";

class PostWrite extends Component {
  handleChange = (e) => {
    const { AuthActions } = this.props; //changeInput 빌려쓰는용도.
    const { name, value, form } = e.target;
    console.log("이다음게 name임.");
    console.log(name);
    console.log("이다음게 value임.");
    console.log(value);

    AuthActions.changeInput({
      name,
      value,
      form,
    });
  };

  handleSavePost = async () => {};

  render() {
    console.log("postWrite component");
    //const { title } = this.props.form.toJS();
    const { handleChange } = this;
    return (
      <PostWrapper>
        <InputWithLabel
          label="제목"
          name="title"
          placeholder="제목"
          //value={title}
          onChange={handleChange}
        />
        <TextareaWithLabel
          label="본문"
          name="letter"
          placeholder="본문"
          onChange={handleChange}
        />
        <ButtonAlignWrapper>
          <SubmitButton>올리기</SubmitButton>
          <PostCancelButton>취소하기</PostCancelButton>
        </ButtonAlignWrapper>
      </PostWrapper>
    );
  }
}

export default connect(
  (state) => ({ form: state.auth.getIn(["post", "form"]) }),
  (dispatch) => ({
    PostActions: bindActionCreators(postActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch),
  })
)(PostWrite);
