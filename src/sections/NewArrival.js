import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import img1 from "../assets/Images/11.webp";
import img2 from "../assets/Images/12.webp";
import img3 from "../assets/Images/13.webp";
import img4 from "../assets/Images/14.webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: yellow; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 4vw ${(props) => props.theme.text};
  z-index: 11;
  border: 3px solid ${(props) => props.theme.body};
  @media screen and (max-width: 70em) {
    width: 40vw;
    height: 80vh;
  }
  @media screen and (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};
  }
  @media screen and (max-width: 48em) {
    width: 60vw;
  }
  @media screen and (max-width: 30em) {
    width: 80vw;
    height: 60vh;
  }
`;
const Title = styled.div`
  font-size: ${(props) => props.theme.fontxxxl} !important;
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
  @media screen and (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl} !important;
  }
  @media screen and (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl} !important;
  }
  /* margin-bottom: 40px; */
`;
const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;
  @media screen and (max-width: 48em) {
    display: none;
  }
  /* margin-top: 20%; */
`;
const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1 {
    width: 5rem;
    margin: 0 2rem;
  }
  @media screen and (max-width: 64em) {
    width: 30vw;
  }
  @media screen and (max-width: 48em) {
    width: 40vw;
  }
  @media screen and (max-width: 30em) {
    width: 60vw;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 5rem 0;
  & img {
    width: 100%;
    height: auto;
    z-index: 6;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </Item>
  );
};
function NewArrival() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ScrollingRef = useRef(null);
  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();
    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App", //locomotive element
          scrub: true,
          pin: true,
          // markers: true,
        },
        // ? we have to increase scrolling height of this section same as the scrolling element width
        ease: "none",
      });
      // Vertical Scrolling
      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App", //locomotive element
            scrub: true,
            // markers: true,
          },
          // ? we have to increase scrolling height of this section same as the scrolling element width
        }
      );
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instances
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);
  return (
    <Section id="new-arrival" ref={ref}>
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        New Arrivals
      </Title>
      <Container ref={ScrollingRef}>
        <div>
          <Product img={img1} title="Denim"></Product>
          <Product img={img2} title="Cool Dresses"></Product>
          <Product img={img3} title="Jackets"></Product>
          <Product img={img4} title="T-shirt"></Product>
        </div>
      </Container>
      <Text data-scroll data-scroll-speed="-4">
        There is new collection available for cool clothes in all sizes. This
        collection is a great way to find a new look for you. It offers a
        variety of cool apparel styles to fit your taste, while you can also
        find some cool clothes that you can wear everyday.
        <br />
        <br />
        The first line of clothing you will see on this collection is for men.
        The collection also includes three new styles for women.
        <br />
        <br />
        Give it a try and experience a new look.
      </Text>
    </Section>
  );
}

export default NewArrival;
