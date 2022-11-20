import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
import img4 from "../assets/Images/4.webp";
import img5 from "../assets/Images/5.webp";
import img6 from "../assets/Images/6.webp";
import img7 from "../assets/Images/7.webp";
import img8 from "../assets/Images/8.webp";
import img9 from "../assets/Images/9.webp";
import img10 from "../assets/Images/10.webp";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* max-height: 100vh !important; */
  /* @media screen and (max-width: 64em) {
    flex-direction: column;
  } */
`;
const Wrap = styled.div`
  width: 35%;
  z-index: 5;
  padding-right: 30px;
  padding-left: 5%;
  background: ${(props) => props.theme.body};
  padding-top: 50px;
  align-self: stretch;
  @media screen and (max-width: 64em) {
    width: 100%;
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
const Title = styled.div`
  font-size: ${(props) => props.theme.fontxxxl} !important;
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  margin-bottom: 40px;
  @media screen and (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl} !important;
  }
  @media screen and (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl} !important;
  }
`;

const Text = styled.div`
  color: ${(props) => props.theme.text};
  /* min-height: 100vh; */
  z-index: 6;
  display: flex;
  justify-content: center;
  & p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
  }
  @media screen and (max-width: 64em) {
    & p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }
  @media screen and (max-width: 48em) {
    & p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media screen and (max-width: 30em) {
    & p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  width: 75%;
  align-self: stretch;
  overflow: hidden;
  background: ${(props) => props.theme.grey};
  display: flex;
  justify-content: flex-start;
  padding-left: 30px;
  align-items: center;
  & .warp {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }
  @media screen and (max-width: 64em) {
    width: 100%;
    padding-left: 0px;
  }
`;

const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 20rem;
  margin-right: 6rem;
  & img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  & h1 {
    display: inline-block;
    width: fit-content;
    /* margin: 0 2rem; */
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
  @media screen and (max-width: 64em) {
    width: 15rem;
    margin: 0px 6rem;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      initial={{
        filter: "grayscale(100%)",
      }}
      whileInView={{
        filter: "grayscale(0%)",
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: false,
        amount: "all",
      }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

function Shop() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();
    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", //locomotive element
          scrub: true,
          pin: true,
          // markers: true,
        },
        // ? we have to increase scrolling height of this section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });
      // Horizontal Scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", //locomotive element
          scrub: true,
          // markers: true,
        },
        // ? we have to increase scrolling height of this section same as the scrolling element width
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instances
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section id="shop" ref={ref}>
      <Wrap>
        <Title>New Collection</Title>
        <Text>
          <p>
            The brand new collection is currently being developed in USA. We
            create our products using best quality material, including the use
            of some of the pure fabrics to make our products. All products are
            made using the best materials, from the finest cotton to the finest
            fabrics.
            <br />
            <br />
            We have lots of different clothing options like shoes, jackets and
            dresses. Not only clothes but we also provide unique Jewellery as
            well. It is great for us to carry our new clothes all around the
            country and look different.
          </p>
        </Text>
      </Wrap>
      <Right>
        <div className="warp" ref={horizontalRef}>
          <Product img={img1} title="Man Basics"></Product>
          <Product img={img2} title="Tops"></Product>
          <Product img={img3} title="Sweatshirts"></Product>
          <Product img={img4} title="Ethnic Wear"></Product>
          <Product img={img5} title="Blazers"></Product>
          <Product img={img6} title="Suits"></Product>
          <Product img={img7} title="Antiques"></Product>
          <Product img={img8} title="Jewellery"></Product>
          <Product img={img9} title="Watches"></Product>
          <Product img={img10} title="Special Edition"></Product>
        </div>
      </Right>
    </Section>
  );
}

export default Shop;
