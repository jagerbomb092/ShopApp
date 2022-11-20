import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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
        duration: 1.5,
        ease: "easeInOut",
        delay: duration,
      },
    },
  };
};
const NavBar = () => {
  return (
    <NavContainner>
      <Text>
        <motion.div variants={pathText(1.4)} initial="hidden" animate="visible">
          Home
        </motion.div>
      </Text>
      <Text>
        <motion.div
          variants={pathText(1.65)}
          initial="hidden"
          animate="visible"
        >
          About
        </motion.div>
      </Text>
      <Text>
        <motion.div variants={pathText(1.9)} initial="hidden" animate="visible">
          Shop
        </motion.div>
      </Text>
      <Text>
        <motion.div
          variants={pathText(2.15)}
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
