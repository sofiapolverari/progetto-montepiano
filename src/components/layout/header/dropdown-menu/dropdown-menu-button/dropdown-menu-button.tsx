import React from "react";
import styled, { css } from "styled-components";
import {
  SecondaryColorPalette,
  MainColorPaletteType,
} from "../../../../../constants/colors";

interface DropdownMenuButtonProps {
  label?: string;
  linkUrl: string;
  color: MainColorPaletteType;
}

const Root = styled.a<{ color: MainColorPaletteType }>`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #e9e5d9;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s ease-out;
  text-align: center;

  &:hover {
    color: #273e0a;
    background-color: ${({ color }) => SecondaryColorPalette[color]};
  }
`;

/**
 * Primary UI component for user interaction
 */
export const DropdownMenuButton = ({
  color,
  label,
  linkUrl,
  ...props
}: DropdownMenuButtonProps) => {
  return (
    <Root color={color} href={linkUrl}>
      {label}
    </Root>
  );
};
