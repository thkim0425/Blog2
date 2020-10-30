import React from "react";
import styled from "styled-components";
import oc from "open-color";

const Aligner = styled.div`
  text-align: center;
  color: ${oc.gray[0]};
  display: flex;
`;

const ButtonAlignWrapper = ({ children }) => <Aligner>{children}</Aligner>;

export default ButtonAlignWrapper;
