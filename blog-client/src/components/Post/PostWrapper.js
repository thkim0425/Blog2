import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { shadow } from "lib/styleUtils";

// frame
const Positioner = styled.div`
  position: relative;
  left: 50%;
  max-width: 70%;
  transform: translate(-50%, 10%);
`;
//border: 5px solid ${oc.red[3]};
//position: absolute;
//top: 60%;
//left: 50%;
//transform: translate(-50%, -50%);

// 로고
const LogoWrapper = styled.div`
  background: ${oc.gray[6]};
  height: 2rem;
  display: flex-column;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
`;

const Logo = styled.div`
  color: white;
  font-family: "Rajdhani";
  font-size: 1.4rem;
  letter-spacing: 2px;
  text-decoration: none;
  text-align: center;
`;

// children 이 들어가는 곳
const Contents = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`;

const PostWrapper = ({ children }) => (
  <Positioner>
    <LogoWrapper>
      <Logo>글 쓰기</Logo>
    </LogoWrapper>
    <Contents>{children}</Contents>
  </Positioner>
);

export default PostWrapper;
