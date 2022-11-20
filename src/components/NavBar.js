import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
const NavContainner = styled.div`
  width: 100vw;
  z-index: 6;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// const MenuBtn = styled.li`
//   list-style-type: style none;
//   color: ${(props) => props.theme.text};
//   width: 15rem;
//   height: 2.5rem;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
// `;
const Text = styled.div`
  overflow: hidden;
  & div {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => props.theme.text};
    padding-top: 0.5rem;
    margin-left: 16px;
    padding: 3px 0px;
    text-transform: uppercase;
    cursor: pointer;
    &::after {
      content: "";
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
  }
  &:hover {
    & div {
      &::after {
        transform-origin: bottom left;
        transform: scaleX(1);
      }
    }
  }
`;
const pathText = (duration) => {
  return {
    hidden: {
      y: "120%",
    },
    visible: {
      y: "0%",

      transition: {
        ease: [0.075, 0.82, 0.165, 1],
        duration: 2,
        delay: duration,
      },
    },
  };
};
const NavBar = () => {
  const { scroll } = useLocomotiveScroll();
  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    scroll.scrollTo(elem, {
      offset: "0",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  return (
    <NavContainner>
      <Text
        onClick={() => {
          handleScroll("#home");
        }}
      >
        <motion.div variants={pathText(5.4)} initial="hidden" animate="visible">
          Home
        </motion.div>
      </Text>
      <Text
        onClick={() => {
          handleScroll(".about");
        }}
      >
        <motion.div
          variants={pathText(5.65)}
          initial="hidden"
          animate="visible"
        >
          About
        </motion.div>
      </Text>
      <Text
        onClick={() => {
          handleScroll("#shop");
        }}
      >
        <motion.div variants={pathText(5.9)} initial="hidden" animate="visible">
          Shop
        </motion.div>
      </Text>
      <Text
        onClick={() => {
          handleScroll("#new-arrival");
        }}
      >
        <motion.div
          variants={pathText(6.15)}
          initial="hidden"
          animate="visible"
        >
          New Arrival
        </motion.div>
      </Text>
    </NavContainner>
  );
};

export default NavBar;
