import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { shadow } from "lib/styleUtils";

const Wrapper = styled.div`
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
`;
//hover  는 마우스 올렸을때, active는 마우스 눌렀을때.

const AuthButton = ({ children, onClick }) => (
  <Wrapper onClick={onClick}>{children}</Wrapper>
);

export default AuthButton;
