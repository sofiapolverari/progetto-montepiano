import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface HeroBannerProps {
  color: "alabaster" | "pakistan-green";
}

const Root = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Photo = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 0;
  object-fit: cover;
`;

const LogoWrapper = styled.div`
  display: flex;
  z-index: 10;
  padding-left: 50px;
  padding-top: 50px;
  width: 40px;
`;

const Logo = styled.img`
  width: 800px;
  filter: drop-shadow(3px 5px 2px #e9e5d9);
`;

const ScrollDown = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  color: #273e0a;
  font-size: 100px;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(255, 0, 0, 0), #e9e5d9); //Alabaster
`;

const LogoAnimation = styled(motion.div)`
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
`;

const ArrowAnimation = styled(motion.div)`
  z-index: 10;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const HeroBanner: FC<HeroBannerProps> = ({ color, ...props }) => {
  return (
    <Root>
      <Photo src="/photo-hero.jpg" />
      <AnimatePresence mode={"popLayout"}>
        <LogoAnimation
          initial={{ translateY: "-100%" }}
          animate={{ translateY: "0%" }}
          transition={{ ease: "easeOut", duration: 0.9 }}
        >
          <LogoWrapper>
            <Logo
              src={
                color === "alabaster"
                  ? "/logo_montepiano_alabaster_logotype.png"
                  : "/logo_montepiano_pkgreen.png"
              }
            />
          </LogoWrapper>
        </LogoAnimation>
      </AnimatePresence>
      <AnimatePresence mode={"popLayout"}>
        <ArrowAnimation
          initial={{ translateY: "100%" }}
          animate={{ translateY: "0%" }}
          transition={{ ease: "easeOut", duration: 0.9 }}
        >
          <ScrollDown>⮟</ScrollDown>
        </ArrowAnimation>
      </AnimatePresence>
    </Root>
  );
};

// controllare il tipo di verde
