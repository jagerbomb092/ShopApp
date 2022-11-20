import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  @media screen and (max-width: 48em) {
    width: 90vw;
  }
`;

const Container = styled.div`
  align-self: stretch;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 48em) {
    justify-content: center;
  }
`;

const BannerComponent = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  @media screen and (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media screen and (max-width: 64em) {
    /* font-size: ${(props) => props.theme.fontxl}; */
    margin: 1rem 0;
  }
  @media screen and (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    margin: 0.5rem 0;
  }
  @media screen and (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  & span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }
`;

function Banner() {
  return (
    <Section>
      <Container id="up">
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            Fashion is an armour
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            to survive the reality of everyday life
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            One is never over-dressed or
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            under-dressed
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"
          >
            with a Little Black Dress
          </span>
        </BannerComponent>
      </Container>
    </Section>
  );
}

export default Banner;