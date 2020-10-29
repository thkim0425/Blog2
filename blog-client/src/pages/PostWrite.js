import React, { Component } from "react";
import {} from "components/Post";
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

class PostWrite extends Component {
  render() {
    console.log("postWrite component");
    return (
      <PostWrapper>
        <InputWithLabel label="제목" name="title" placeholder="제목" />
        <TextareaWithLabel label="본문" name="letter" placeholder="본문" />
        <ButtonAlignWrapper>
          <SubmitButton>올리기</SubmitButton>
          <PostCancelButton>취소하기</PostCancelButton>
        </ButtonAlignWrapper>
      </PostWrapper>
    );
  }
}

export default PostWrite;
