import React from "react";
import styled, { css, keyframes } from "styled-components";
import { MainColorPalette, MainColorPaletteType } from "../../constants/colors";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { LeafButton } from "../leaf-button/leaf-button";

export interface BannerImageProps {
  label: string;
  color: MainColorPaletteType;
  direction: "left" | "right";
  linkUrl: string;
  imageUrl: string;
}

const Label = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  opacity: 0;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 80px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #e9e5d9; //Alabaster
  cursor: pointer;
  transition: all 0.3s ease-out;
  @media (max-width: 640px) {
    display: none;
  }
`;

const MaskAnimation = keyframes`
  from {
  -webkit-mask-position: 0 0;
  mask-position: 0 0;
 }

 to {
  -webkit-mask-position: 100% 0;
  mask-position: 100% 0;
 }

`;

const MaskAnimationHover = keyframes`
  from {
  -webkit-mask-position: 100% 0;
  mask-position: 100% 0;
 }

 to {
  -webkit-mask-position: 0 0;
  mask-position: 0 0;
 }

`;

const Mask = styled.div<{ color: MainColorPaletteType }>`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 101%;
  height: 100%;
  background-color: ${({ color }) => MainColorPalette[color]};
  opacity: 0.8;
  //transition: all 0.3s ease-out;
  mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png");
  mask-size: 3000% 100%;
  animation: ${MaskAnimation} 0.7s steps(29) forwards;
  @media (max-width: 640px) {
    display: none;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-out;
`;

const Root = styled.a`
  display: flex;
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
  cursor: pointer;
  @media (min-width: 641px) {
    &:hover {
      ${Mask} {
        animation: ${MaskAnimationHover} 0.7s steps(29) forwards;
      }
      ${Label} {
        opacity: 1;
      }
      ${Photo} {
        transform: scale(1.5);
      }
    }
  }
`;

const ChaletButtonWrapper = styled.div`
  display: none;
  position: absolute;
  bottom: 40px;
  z-index: 20;
  width: 100%;
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
  }
`;

const ColorMask = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  background-color: #90bcac;
  background-blend-mode: multiply;
  opacity: 50%;
  z-index: 5;
  position: absolute;
  left: 0px;
  top: 0px;
  @media (max-width: 640px) {
    display: flex;
  }
`;

export const BannerImage: FC<BannerImageProps> = ({
  label,
  color,
  direction,
  imageUrl,
  linkUrl,
  ...props
}) => {
  return (
    <Root href={linkUrl}>
      <AnimatePresence mode={"popLayout"}>
        {
          <motion.div
            {...{
              initial: { translateX: direction === "left" ? "-100%" : "100%" },
              whileInView: { translateX: "0%" },
              viewport: { once: true },
              transition: { duration: 0.9, ease: "easeOut" },
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <ColorMask />
            <Photo src={imageUrl} /> <Mask color={color} />
          </motion.div>
        }
      </AnimatePresence>
      <Label> {label} </Label>
      <ChaletButtonWrapper>
        <LeafButton color={color} label={label} />
      </ChaletButtonWrapper>
    </Root>
  );
};
