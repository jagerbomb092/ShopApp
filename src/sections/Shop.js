import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
`;
const Title = styled.div`
  /* overflow: hidden; */

  font-size: ${(props) => props.theme.fontxxxl} !important;
  font-family: "Kaushan Script";
`;
function Shop() {
  return (
    <Section>
      <Wrap>
        <Title>Shop</Title>
      </Wrap>
    </Section>
  );
}

export default Shop;
