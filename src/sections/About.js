import React from "react";
import styled from "styled-components";
import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  /* overflow: hidden; */
  display: flex;
  margin: 0 auto;
  @media screen and (max-width: 48em) {
    width: 90vw;
  }
  @media screen and (max-width: 30em) {
    width: 100vw;
  }
`;
const Wrap = styled.div`
  /* overflow: hidden; */
  /* position: absolute;
  top: 1rem;
  left: 5%; */
  width: 60%;
  z-index: 5;
  margin-top: 50px;
  padding-right: 10px;
  padding-left: 5%;
  @media screen and (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;
    padding: 2rem;
    backdrop-filter: blur(2px);
    background: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
`;
const Title = styled.div`
  /* overflow: hidden; */

  font-size: 8em !important;
  font-family: "Kaushan Script";
  @media screen and (max-width: 64em) {
    font-size: calc(5rem - 5vw) !important;
  }
  @media screen and (max-width: 48em) {
    font-size: calc(5rem - 10vw) !important;
  }
`;
const Left = styled.div`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  z-index: 5;
  @media screen and (max-width: 64em) {
    font-weight: 600;
  }
  @media screen and (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media screen and (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    /* width: 70%; */
  }

  /* margin-top: 20%; */
`;
const Right = styled.div`
  width: 40%;
  position: relative;
  margin-left: 10%;
  & img {
    width: 100%;
    height: auto;
  }
  & .small-img-1 {
    position: absolute;
    width: 40%;
    right: 80%;
    top: 50%;
  }
  & .small-img-2 {
    position: absolute;
    width: 40%;
    left: 80%;
    bottom: 30%;
  }
  @media screen and (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0;
    & img {
      object-fit: cover;
      height: 100vh;
    }
    & .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    & .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Wrap data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        <Title>About us</Title>
        <Left>
          We're fashion studio based in california. We create unique designs
          that will blow your mind. We also design unique jewellary pieces.
          Fashion is an ART that can not be grasped by everyone.
          <br />
          <br />
          We are very dedicated to making our products. We offer unique and
          creative products to a wide range of people. We have a variety of
          styles, but for most people, all of the options are in the box. We
          specialize in making things that make you happy.
          <br />
          <br />
          We strive to build on our vision. As a fashion label, we do our best
          to create amazing experiences for all people. We are always looking to
          make something that is easy for everyone.
        </Left>
      </Wrap>

      <Right>
        <img src={img1} alt="About us" />
        <img
          data-scroll
          data-scroll-speed="5"
          className="small-img-1"
          src={img2}
          alt="About us"
        />
        <img
          className="small-img-2"
          data-scroll
          data-scroll-speed="-2"
          src={img3}
          alt="About us"
        />
      </Right>
    </Section>
  );
};

export default About;
