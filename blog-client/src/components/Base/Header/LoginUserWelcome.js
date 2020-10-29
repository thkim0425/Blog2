import React from "react";
import styled from "styled-components";
import oc from "open-color";

const Logo = styled.div`
  font-size: 1em;
  letter-spacing: 2px;
  color: ${oc.gray[0]};
  font-family: "Rajdhani";
  padding-right: 15px;
`;
const LoginUserWelcome = ({ children }) => <Logo>환영합니다! {children} </Logo>;

export default LoginUserWelcome;
