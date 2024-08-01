import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface HeroBannerProps {
  color: "alabaster" | "pakistan-green";
  imageSrc?: string | null;
}

const Root = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;
  overflow: hidden;
`;

const ColorMask = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 90px);
  background-color: #e9e5d9; //Alabaster
  opacity: 20%;
  z-index: 5;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  z-index: 0;
  object-fit: cover;
`;

const LogoWrapper = styled.div`
  display: flex;
  padding-left: 50px;
  padding-top: 100px;
  width: 40px;
`;

const Logo = styled.img`
  width: 700px;
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

export const HeroBanner: FC<HeroBannerProps> = ({ color, imageSrc, ...props }) => {
  return (
    <Root>
      <ColorMask />
      {imageSrc && <Photo src={imageSrc} />}
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
