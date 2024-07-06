import React from "react";
import styled, { css } from "styled-components";
import { MainColorPalette, MainColorPaletteType } from "../../constants/colors";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

interface BannerImageProps {
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
`;
const Mask = styled.div<{ color: MainColorPaletteType }>`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => MainColorPalette[color]};
  opacity: 0;
  transition: all 0.3s ease-out;
`;

const Photo = styled.img`
  width: 100vw;
  height: 80vh;
  object-fit: cover;
  transition: all 0.3s ease-out;
`;

const Root = styled.a`
  display: flex;
  position: relative;
  width: 100vw;
  height: 80vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    ${Mask} {
      opacity: 0.7;
    }
    ${Label} {
      opacity: 1;
    }
    ${Photo} {
      transform: scale(1.5); //non funziona
    }
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
              transition: { duration: 0.9, ease: "easeOut" },
            }}
          >
            <Photo src={imageUrl} /> <Mask color={color} />
          </motion.div>
        }
      </AnimatePresence>
      <Label> {label} </Label>
    </Root>
  );
};
