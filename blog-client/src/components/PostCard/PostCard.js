import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { PostIdConsumer } from "../../contexts/PostContext";

class PostCard extends Component {
  constructor(props) {
    super(props);

    this.handleDeletePost = this.handleDeletePost.bind(this);
  }

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
        {/* <div>{this.props.post._id}</div> */}
        {/* <PostIdConsumer>
          {(_id) => <DeleteButton>{_id.state.value}</DeleteButton>}
        </PostIdConsumer> */}

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
  margin: 15px 15px;
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
