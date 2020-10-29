import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { Link } from "react-router-dom";
import { shadow } from "lib/styleUtils";

const BorderedButton = styled(Link)`
  font-weight: 600;
  color: ${oc.gray[0]};
  border: 1px solid ${oc.gray[0]};
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s all;
  margin-right: 15px;

  &:hover {
    background: ${oc.gray[6]};
    color: white;
    ${shadow(1)}
  }

  &:active {
    /* 마우스 클릭시 아래로 미세하게 움직임 */
    transform: translateY(3px);
  }
`;

const PostButton = () => <BorderedButton to="/post">글쓰기</BorderedButton>;

export default PostButton;
