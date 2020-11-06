import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
class PostCard extends Component {
  constructor(props) {
    super(props);

    this.handleDeletePost = this.handleDeletePost.bind(this);

    // this.state = { username: "" };
    // const loggedInfo = storage.get("loggedInfo");
    // if (loggedInfo) {
    //   this.setState({ username: loggedInfo["username"] });
    // }

    // const username = loggedInfo["username"];
    // this.state = { username: username };
    //this.handleGetUsername = this.handleGetUsername.bind(this);
  }

  // handleGetUsername = () => {
  //   const loggedInfo = storage.get("loggedInfo");
  //   const username = loggedInfo["username"];
  //   this.setState({ username: username });
  // };

  handleDeletePost = async () => {
    await axios
      .delete(
        "http://localhost:3000/api/post/" + this.props.post._id,
        this.state
      )
      .then(() => console.log("Post Deleted"))
      .catch((err) => {
        console.error(err);
      });
    // refresh
    window.location.reload(false);
  };
  render() {
    return (
      <Card>
        <Title>{this.props.post.title}</Title>
        <Author>{this.props.post.author}</Author>
        <Letter>{this.props.post.letter}</Letter>

        <DeleteButton onClick={this.handleDeletePost}>글 지우기</DeleteButton>
      </Card>
    );
  }
}
export default PostCard;

const Card = styled.div`
  width: 230px;
  height: 320px;
  display: flex-column;
  justify-content: flex-start;
  margin: 18px 18px;
`;

const Title = styled.div`
width: 230px;
height 30px;
background-color : #333333;
color : #FFFFFF;
text-align : center;
padding-top : 20px;
`;

const Author = styled.div`
  width: 230px;
  height: 30px;
  background-color: #888888;
  color: #000000;
  text-align: center;
  padding-top: 20px;
`;

const Letter = styled.div`
  width: 230px;
  height: 175px;
  background-color: #bbbbbb;
  color: #ffffff;
  text-align: center;
  padding-top: 20px;
`;

const DeleteButton = styled.button`
  width: 230px;
  height: 35px;
  border: none;
`;
