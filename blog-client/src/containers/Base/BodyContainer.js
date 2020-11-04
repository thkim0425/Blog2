import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import { PostCard } from "components/PostCard";

class BodyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };

    axios
      .get("http://localhost:3000/api/post")
      .then((res) => {
        //console.log(res);
        this.setState({ post: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { visible } = this.props;
    if (!visible) return null;

    console.log("post: ", this.state.post.length);

    const mapToComponent = (data) => {
      return data.map((post, i) => {
        console.log(post);
        return <PostCard post={post} />;
      });
    };

    return (
      <>
        <PostList>{mapToComponent(this.state.post)}</PostList>
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
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
