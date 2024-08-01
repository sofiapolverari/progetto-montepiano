import React from "react";
import styled, { css, keyframes } from "styled-components";
import { FC } from "react";
import {
  MainColorPalette,
  MainColorPaletteType,
} from "../../../constants/colors";

interface LeafCardProps {
  // size?: "small" | "medium" | "large"; TODO
  label?: string;
  linkUrl: string;
  imageUrl?: string | null;
  color: MainColorPaletteType;
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
  font-size: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #e9e5d9; //Alabaster
  cursor: pointer;
  transition: all 0.3s ease-out;
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
  opacity: 0.7;
  mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png");
  mask-size: 3000% 100%;
  animation: ${MaskAnimation} 0.7s steps(29) forwards;
`;

const Root = styled.div`
  display: flex;
  position: relative;
  border-radius: 0% 50% 0% 50%;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-out;
  filter: drop-shadow(5px 5px 2px gray);
  cursor: pointer;
  &:hover {
    border-radius: 100%;

    filter: drop-shadow(10px 10px 2px gray);

    transform: translateY(-5px);

    ${Mask} {
      animation: ${MaskAnimationHover} 0.7s steps(29) forwards;
    }
    ${Label} {
      opacity: 1;
      transition-delay: 0.7s;
    }
  }
`;

const Photo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const LeafCard: FC<LeafCardProps> = ({
  label,
  linkUrl,
  imageUrl,
  color,
  ...props
}) => {
  return (
    <a href={linkUrl}>
      <Root>
        <Photo src={imageUrl ?? ""} /> <Mask color={color} />
        <Label> {label} </Label>
      </Root>
    </a>
  );
};

//TODO sistemare la story per le dimensioni
