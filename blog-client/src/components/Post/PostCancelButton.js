import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { shadow } from "lib/styleUtils";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;

  background: ${oc.gray[6]};
  color: white;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;

  cursor: pointer;
  user-select: none;
  transition: 0.2s all;

  &:hover {
    background: ${oc.gray[5]};
    ${shadow(0)}
  }

  &:active {
    background: ${oc.gray[7]};
  }

  //이 아래는 밑줄 제거용임.
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
//hover  는 마우스 올렸을때, active는 마우스 눌렀을때.

const PostCancelButton = () => <StyledButton to="/">취소하기</StyledButton>;

export default PostCancelButton;
