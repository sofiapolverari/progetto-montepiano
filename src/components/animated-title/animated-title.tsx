import React from "react";
import styled from "styled-components";
import { MainColorPalette, MainColorPaletteType } from "../../constants/colors";
import { motion } from "framer-motion";
import { FC } from "react";

interface AnimatedTitleProps {
  label: string;
  color: MainColorPaletteType;
  direction: "left" | "right";
}

const Root = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ColorBlock = styled.div<{ color: MainColorPaletteType }>`
  height: 100%;
  background-color: ${({ color }) => MainColorPalette[color]};
`;

const TitleAnimation = styled(motion.div)`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  height: 100%;
`;

const Title = styled.div`
  color: #e9e5d9; //Alabaster
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 10px;
  font-size: 40px;
  display: flex;
  width: 100%;
  position: relative;
  z-index: 20;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    font-size: 30px;
  }
`;

export const AnimatedTitle: FC<AnimatedTitleProps> = ({
  label,
  color,
  direction,
  ...props
}) => {
  return (
    <Root>
      <TitleAnimation
        {...{
          initial: { translateX: direction === "left" ? "-100%" : "100%" },
          whileInView: { translateX: "0%" },
          viewport: { once: true },
          transition: { duration: 0.9, ease: "easeOut" },
        }}
      >
        <ColorBlock color={color} />
      </TitleAnimation>

      <Title> {label} </Title>
    </Root>
  );
};
