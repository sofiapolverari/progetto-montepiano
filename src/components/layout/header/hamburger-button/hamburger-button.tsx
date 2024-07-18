import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import {
  MainColorPalette,
  MainColorPaletteType,
} from "../../../../constants/colors";
import { FC } from "react";

interface HamburgerButtonProps {
  color: MainColorPaletteType;
  onClick?: () => void;
}

// TODO Inserire un Root trasparente piu grande per l-hoover

const LeafHamburger = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  border-radius: 0% 50% 0% 50%;
  background-color: #e9e5d9;
  width: 50px;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.3s ease-out;
  overflow: hidden;
  cursor: pointer;
`;

const ButtonText = styled.div<{ color: MainColorPaletteType }>`
  display: flex;
  height: 100%;
  position: relative;
  z-index: 50;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 25px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: all 0.3s ease-out;
  opacity: 0%;
  color: ${({ color }) => MainColorPalette[color]};
`;

const Slicers = styled.div<{ color: MainColorPaletteType }>`
  display: flex;
  width: 100%;
  height: 20%;
  transition: all 0.3s ease-out;
  background-color: ${({ color }) => MainColorPalette[color]};
`;

const Root = styled.div<{ color: MainColorPaletteType }>`
  height: 50px;
  margin-left: 20px;
  position: relative;
  transition: all 0.3s ease-out;
  cursor: pointer;
  background-color: ${({ color }) => MainColorPalette[color]};

  &:hover {
    ${LeafHamburger} {
      width: 100%;
    }

    ${Slicers} {
      opacity: 0;
    }
    ${ButtonText} {
      opacity: 1;
    }
  }
`;

export const HamburgerButton = forwardRef<HTMLDivElement, HamburgerButtonProps>(
  ({ color, onClick, ...props }, ref) => {
    return (
      <Root color={color} onClick={onClick} ref={ref}>
        <ButtonText color={color}>Esplora</ButtonText>
        <LeafHamburger>
          <Slicers color={color}></Slicers>
          <Slicers color={color}></Slicers>
        </LeafHamburger>
      </Root>
    );
  }
);
