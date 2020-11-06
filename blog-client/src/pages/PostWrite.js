import React, { Component } from "react";
import axios from "axios";
import {
  InputWithLabel,
  TextareaWithLabel,
  ButtonAlignWrapper,
  SubmitButton,
  PostCancelButton,
  PostWrapper,
} from "components/Post";

import storage from "lib/storage";

class PostWrite extends Component {
  constructor(props) {
    super(props);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeLetter = this.handleChangeLetter.bind(this);
    this.handleSavePost = this.handleSavePost.bind(this);
    const loggedInfo = storage.get("loggedInfo");
    const username = loggedInfo["username"];
    this.state = { title: "", letter: "", author: username };
  }

  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value });
    console.log("title");
    console.log(this.state.title);
  };

  handleChangeLetter = (e) => {
    this.setState({ letter: e.target.value });
    console.log("letter");
    console.log(this.state.letter);
  };

  handleSavePost = async () => {
    console.log(this.state.title);
    console.log(this.state.author);
    console.log(this.state.letter);
    const { history } = this.props;
    await axios
      .post("http://localhost:3000/api/post/write", this.state)
      .then(() => console.log("Post Created"))
      .catch((err) => {
        console.error(err);
      });
    history.push("/"); //send a post and go to "/"
  };

  render() {
    console.log("postWrite component");
    return (
      <PostWrapper>
        <InputWithLabel
          label="제목"
          name="title"
          placeholder="제목"
          onChange={this.handleChangeTitle}
        />
        <TextareaWithLabel
          label="본문"
          name="letter"
          placeholder="본문"
          onChange={this.handleChangeLetter}
        />
        <ButtonAlignWrapper>
          <SubmitButton onClick={this.handleSavePost}>올리기</SubmitButton>
          <PostCancelButton>취소하기</PostCancelButton>
        </ButtonAlignWrapper>
      </PostWrapper>
    );
  }
}

export default PostWrite;

// export const PostContext = React.createContext(
//   this.state.title,
//   this.state.letter,
//   this.state.author
// );
