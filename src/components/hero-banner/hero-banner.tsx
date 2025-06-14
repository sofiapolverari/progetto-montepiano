import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../container/container";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

export interface HeroBannerProps {
  color: "alabaster" | "pakistan-green";
  image?: IGatsbyImageData | null;
}

const Root = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;
  overflow: hidden;
  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const ColorMask = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #e9e5d9; //Alabaster
  opacity: 15%;
  z-index: 5;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Photo = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  z-index: 0;
  object-fit: cover;
`;

const LogoWrapper = styled(Container)`
  display: flex;
  top: 60px;

  left: 0px;
  width: 100%;
  justify-content: center;
`;

const Logo = styled.img`
  width: 700px;
  filter: drop-shadow(3px 3px 2px #e9e5d9);
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const ScrollDown = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
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
  width: 100%;
  @media (max-width: 640px) {
    width: 100%;
    justify-self: center;
  }
`;

const ArrowAnimation = styled(motion.div)`
  z-index: 10;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const HeroBanner: FC<HeroBannerProps> = ({ image }) => {
  return (
    <Root>
      <ColorMask />
      {image && (
        <Photo image={image} alt="heroimage" />
      )}
      <AnimatePresence mode={"popLayout"}>
        <LogoAnimation
          initial={{ translateY: "-100%" }}
          animate={{ translateY: "0%" }}
          transition={{ ease: "easeOut", duration: 0.9 }}
        >
          <LogoWrapper>
            <Logo src="/logo_montepiano_pkgreen.png" />
          </LogoWrapper>
        </LogoAnimation>
      </AnimatePresence>
      <AnimatePresence mode={"popLayout"}>
        <ArrowAnimation
          initial={{ translateY: "100%" }}
          animate={{ translateY: "0%" }}
          transition={{ ease: "easeOut", duration: 0.9 }}
        >
          <ScrollDown />
        </ArrowAnimation>
      </AnimatePresence>
    </Root>
  );
};

// controllare il tipo di verde
