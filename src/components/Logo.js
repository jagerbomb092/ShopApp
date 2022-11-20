import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
const Container = styled.div`
  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;
  a {
    display: flex;
    align-items: flex-end;
    /* justify-content: center; */
  }
  svg {
    width: 1.8rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }
`;
const Text = styled.div`
  overflow: hidden;
  div {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => props.theme.text};
    padding-top: 0.5rem;
    margin-left: 8px;
    padding: 3px 0px;
  }
`;
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      delay: 5,
      ease: "easeInOut",
    },
  },
};
const pathText = {
  hidden: {
    y: "120%",
  },
  visible: {
    y: "0%",

    transition: {
      duration: 5,
      ease: "easeInOut",
      delay: 2,
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="none"
        >
          <g></g>
          <g>
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
            />
          </g>
        </svg>
        <Text>
          <motion.div variants={pathText} initial="hidden" animate="visible">
            Seoul Vibe Studio
          </motion.div>
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
