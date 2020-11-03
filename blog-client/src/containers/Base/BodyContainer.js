import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import { PostCard } from "components/PostCard";

class BodyContainer extends Component {
  render() {
    const { visible } = this.props;
    if (!visible) return null;

    axios
      .get("http://localhost:3000/api/post")
      .then(() => console.log("get postlist"))
      .catch((err) => {
        console.error(err);
      });

    return (
      <>
        <PostList>
          <PostCard />
          <PostCard />
          <PostCard />
        </PostList>
      </>
    );
  }
}
export default connect(
  (state) => ({
    visible: state.base.getIn(["header", "visible"]),
  }),
  (dispatch) => ({})
)(BodyContainer);

// children 이 들어가는 곳
const PostList = styled.div`
  height: 420px;
  width: 800px;
  background-color: #000000;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// axios
//       .post("http://localhost:3000/api/post/write", this.state)
//       .then(() => console.log("Post Created"))
//       .catch((err) => {
//         console.error(err);
//       });
