import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { media } from "lib/styleUtils";
import img from "assets/images/camilo-jimenez-1bY8jXZBRk0-unsplash.jpg";
import { Link } from "react-router-dom";

// 상단 고정
const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
//${shadow(1)}

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
  background: gray;
  display: flex;
  justify-content: center;
  //height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: 20px;
  padding-left: 20px;
  ${media.wide`
        width: 992px;
    `}

  ${media.tablet`
        width: 100%;
    `}
`;

// 로고(배너 안)
const Logo = styled.div`
  font-size: 2em;
  letter-spacing: 2px;
  color: ${oc.violet[0]};
  text-align: center;
  margin-top: 50px;
`;
//letter-spacing : 글자간격.

// 로고(링크)
const LogoLink = styled(Link)`
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: ${oc.gray[0]};

  text-decoration: none;
`;

// &:focus,
//   &:hover,
//   &:visited,
//   &:link,
//   &:active {
//     text-decoration: none;
//   }
// 없어도됨.

// 중간 여백
const Spacer = styled.div`
  flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, ${oc.gray[0]}, ${oc.gray[3]});
`;

//배너.
const Banner = styled.div`
  height: 200px;
  display: block;
  background-image: url(${img});
`;

const Header = ({ children }) => {
  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <LogoLink to="/">홈</LogoLink>
          <Spacer />
          {children}
        </HeaderContents>
      </WhiteBackground>
      <Banner>
        <Logo>Taehoon's Blog</Logo>
      </Banner>
      <GradientBorder />
    </Positioner>
  );
};

export default Header;
