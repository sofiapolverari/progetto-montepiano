import React from "react";
import styled, { css } from "styled-components";
import {
  MainColorPalette,
  SecondaryColorPalette,
  MainColorPaletteType,
} from "../../constants/colors";
import { FC } from "react";

interface LeafButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  color: MainColorPaletteType;
  /**
   * How large should the button be?
   */
  // size?: "small" | "medium" | "large"; TODO
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Style for the main button
 */
const Root = styled.div<{ color: MainColorPaletteType }>`
  display: flex;
  border-radius: 0% 50% 0% 50%;
  color: #e9e5d9;
  min-width: 100px;
  height: 100px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  transition: all 0.3s ease-out;
  cursor: pointer;

  background-color: ${({ color }) => MainColorPalette[color]};

  &:hover {
    color: #273e0a;
    border-radius: 100%;
    background-color: ${({ color }) => SecondaryColorPalette[color]};
  }
`;

/**
 * Primary UI component for user interaction
 */
export const LeafButton: FC<LeafButtonProps> = ({ color, label, ...props }) => {
  return <Root color={color}>{label}</Root>;
};
