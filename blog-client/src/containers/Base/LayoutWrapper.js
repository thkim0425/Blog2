import React from "react";
import styled from "styled-components";
import oc from "open-color";

// children 이 들어가는 곳
const Contents = styled.div`
  background: ${oc.gray[1]};
  display: flex-column;
  align-items: center;
  justify-content: center;
`;

const LayoutWrapper = ({ children }) => <Contents>{children}</Contents>;
export default LayoutWrapper;
