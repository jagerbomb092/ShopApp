import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

import Logo from "../assets/Svgs/star_white_48dp.svg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    width: 10vw;
    height: auto;
  }
  & h3 {
    font-size: ${(props) => props.theme.fontxl};
    font-family: "Kaushan Script";
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;
  & ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
    @media screen and (max-width: 48em) {
      justify-content: center;
    }
    & li {
      margin: 1.8rem 2rem;
      padding: 0.2rem;
      font-size: ${(props) => props.theme.fontlg};
      text-transform: uppercase;
      position: relative;
      cursor: pointer;
      transition: all 0.3s ease;
      &::after {
        content: " ";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: ${(props) => props.theme.text};
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s;
      }
      &:hover {
        &::after {
          transform-origin: bottom left;
          transform: scaleX(1);
        }
      }
      @media screen and (max-width: 48em) {
        margin: 0.8rem 1rem;
        font-size: ${(props) => props.theme.fontmd};
      }
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontsm};
  display: flex;
  justify-content: space-between;
  align-items: center;
  & a {
    text-decoration: underline;
  }
  @media screen and (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;
    & span {
      transform: none !important;
    }
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();
  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <img
          data-scroll
          data-scroll-speed="-1"
          src={Logo}
          alt="Seoul Vibe Studio"
        />
        <h3 data-scroll data-scroll-speed="-1">
          Seoul Vibe Studio
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{
          y: "-400px",
        }}
        whileInView={{
          y: "0%",
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: false }}
      >
        <ul>
          <li
            onClick={() => {
              handleScroll("#home");
            }}
          >
            home
          </li>
          <li
            onClick={() => {
              handleScroll(".about");
            }}
          >
            about
          </li>
          <li
            onClick={() => {
              handleScroll("#shop");
            }}
          >
            shop
          </li>
          <li
            onClick={() => {
              handleScroll("#new-arrival");
            }}
          >
            new arrival
          </li>
          <li>
            <a href="https://google.com" target={"_blank"} rel="noreferrer">
              look book
            </a>
          </li>
          <li>
            <a href="https://google.com" target={"_blank"} rel="noreferrer">
              review
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="-1"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
          <span
            data-scroll
            data-scroll-speed="-1"
            data-scroll-direction="horizontal"
          >
            Made with &hearts; by &nbsp;
            <a
              href="https://project-cv.netlify.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              Tuan Nghia
            </a>
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
