import React, { Component } from "react";
import styled from "styled-components";

class PostCard extends Component {
  render() {
    return (
      <Card>
        <Title>{this.props.post.title}</Title>
        <Author>{this.props.post.author}</Author>
        <Letter>{this.props.post.letter}</Letter>
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
height 50px;
background-color : #333333;
color : #FFFFFF;
text-align : center;
`;

const Author = styled.div`
width: 230px;
height 50px;
background-color : #888888;
color : #000000;
text-align : center;
`;

const Letter = styled.div`
  width: 230px;
  height: 220px;
  background-color: #bbbbbb;
  color: #ffffff;
  text-align: center;
`;
