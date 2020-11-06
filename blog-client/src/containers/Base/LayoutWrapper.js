import React from "react";
import styled from "styled-components";

// children 이 들어가는 곳
const Contents = styled.div`
  width: 1400px;
  height: 900px;
  background: #ffffff;
  display: flex-column;
  align-items: center;
  justify-content: flex-start;
`;

const LayoutWrapper = ({ children }) => <Contents>{children}</Contents>;
export default LayoutWrapper;
