import React from "react";
import styled, { css } from "styled-components";

interface HamburgerButtonProps {
  color: "pakistan-green" | "field-drab" | "chestnut" | "brunswick-green";
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

const ButtonText = styled.div<Pick<HamburgerButtonProps, "color">>`
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
  ${({ color }) => {
    switch (color) {
      case "pakistan-green":
        return css`
          color: #273e0a;
        `;
      case "field-drab":
        return css`
          color: #6f6406;
        `;
      case "chestnut":
        return css`
          color: #8d4a3a;
        `;
      case "brunswick-green":
        return css`
          color: #165c51;
        `;
    }
  }}
`;

const Slicers = styled.div<Pick<HamburgerButtonProps, "color">>`
  display: flex;
  width: 100%;
  height: 20%;
  transition: all 0.3s ease-out;

  ${({ color }) => {
    switch (color) {
      case "pakistan-green":
        return css`
          background-color: #273e0a;
        `;
      case "field-drab":
        return css`
          background-color: #6f6406;
        `;
      case "chestnut":
        return css`
          background-color: #8d4a3a;
        `;
      case "brunswick-green":
        return css`
          background-color: #165c51;
        `;
    }
  }}
`;

const Root = styled.div<Pick<HamburgerButtonProps, "color">>`
  height: 50px;
  position: relative;
  transition: all 0.3s ease-out;
  cursor: pointer;
  ${({ color }) => {
    switch (color) {
      case "pakistan-green":
        return css`
          background-color: #273e0a;
        `;
      case "field-drab":
        return css`
          background-color: #6f6406;
        `;
      case "chestnut":
        return css`
          background-color: #8d4a3a;
        `;
      case "brunswick-green":
        return css`
          background-color: #165c51;
        `;
    }
  }}

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

export const HamburgerButton = ({
  color,
  onClick,
  ...props
}: HamburgerButtonProps) => {
  return (
    <Root color={color} onClick={onClick}>
      <ButtonText color={color}>Esplora</ButtonText>
      <LeafHamburger>
        <Slicers color={color}></Slicers>
        <Slicers color={color}></Slicers>
      </LeafHamburger>
    </Root>
  );
};
