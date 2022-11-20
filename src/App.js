import { AnimatePresence } from "framer-motion";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect, useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import {LocomotiveScroll} from 'locomotive-scroll'
import styled, { ThemeProvider } from "styled-components";
import Loader from "./components/Loader";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import About from "./sections/About";
import Banner from "./sections/Banner";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import NewArrival from "./sections/NewArrival";
import Shop from "./sections/Shop";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
const MenuWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  z-index: 10;
  transform: translateY(0%);
  transition: all 0.3s ease-in-out;
  &.hide {
    transform: translateY(-100%);
  }
  @media screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
  }
`;
function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  });

  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          // onUpdate={(e) => {
          //   console.log(e);
          // }}
          // onLocationChange={(scroll) => console.log(scroll)} // If you want to reset the scroll position to 0 for example
          // onUpdate={(e) => console.log(e)} // Will trigger on
          containerRef={containerRef}
        >
          <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>

          <ScrollTriggerProxy />
          <AnimatePresence>
            <main
              data-scroll-container
              ref={containerRef}
              className="App"
              // onprogress={(e) => {
              //   console.log(e);
              // }}
            >
              <MenuWrap id={"header"}>
                <Logo />
                <NavBar />
              </MenuWrap>
              <Home />
              <About />
              <Shop />
              <Banner />
              <NewArrival />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
