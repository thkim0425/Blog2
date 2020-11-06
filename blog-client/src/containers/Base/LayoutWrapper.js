import React from "react";
import styled from "styled-components";

// children 이 들어가는 곳
const Contents = styled.div`
  width: 1440px;
  height: 900px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const LayoutWrapper = ({ children }) => <Contents>{children}</Contents>;
export default LayoutWrapper;
