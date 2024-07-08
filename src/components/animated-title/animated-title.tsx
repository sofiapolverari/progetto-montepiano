import React from "react";
import styled, { css } from "styled-components";
import { MainColorPalette, MainColorPaletteType } from "../../constants/colors";
import { AnimatePresence, motion } from "framer-motion";
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
  display: flex;
  height: 30px;
  justify-content: center;
  background-color: ${({ color }) => MainColorPalette[color]};
`;

const Title = styled.div`
  color: #e9e5d9; //Alabaster
  font-weight: bold;
  font-size: 20px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 10;
  text-align: center;
  justify-content: center;
  padding: 3px 0;
`;

export const AnimatedTitle: FC<AnimatedTitleProps> = ({
  label,
  color,
  direction,
  ...props
}) => {
  return (
    <Root>
      <AnimatePresence mode={"popLayout"}>
        {
          <motion.div
            {...{
              initial: { translateX: direction === "left" ? "-100%" : "100%" },
              whileInView: { translateX: "0%" },
              transition: { duration: 0.9, ease: "easeOut" },
            }}
          >
            <ColorBlock color={color} />
          </motion.div>
        }
      </AnimatePresence>

      <Title> {label} </Title>
    </Root>
  );
};
