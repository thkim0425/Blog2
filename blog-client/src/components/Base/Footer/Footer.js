import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { media, shadow } from "lib/styleUtils";

// 하단 고정
const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 55px;
  ${shadow(1)};
`;
//position : absolute
//하단고정

const WhiteBackground = styled.div`
  background: gray;
  display: flex;
  justify-content: center;
  height: auto;
`;

const FooterContents = styled.div`
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.wide`
        width: 500;
    `}

  ${media.tablet`
        width: 100%;
    `}
`;

// 로고(배너 안)
const Logo = styled.div`
  font-size: 1em;
  letter-spacing: 2px;
  color: ${oc.gray[0]};
  font-family: "Rajdhani";
  text-align: center;
`;
//letter-spacing : 글자간격.

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, ${oc.gray[5]}, ${oc.gray[6]});
`;

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <Positioner>
      <WhiteBackground>
        <FooterContents>
          <Logo>
            Copyright &copy; <span>{thisYear()}</span>
          </Logo>
        </FooterContents>
      </WhiteBackground>

      <GradientBorder />
    </Positioner>
  );
};

export default Footer;
