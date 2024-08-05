import React from "react";
import styled, { css } from "styled-components";
import {
  MainColorPalette,
  SecondaryColorPalette,
  MainColorPaletteType,
} from "../../constants/colors";
import { FC } from "react";

export interface LeafButtonProps {
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
  href?: string;
}

/**
 * Style for the main button
 */
const Root = styled.div<{ color: MainColorPaletteType }>`
  display: flex;
  border-radius: 0% 40% 0% 40%;
  color: #e9e5d9;
  min-width: 100px;
  height: 60px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 35px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease-out;
  cursor: pointer;
  filter: drop-shadow(5px 5px 2px gray);
  background-color: ${({ color }) => MainColorPalette[color]};

  &:hover {
    color: #273e0a;
    background-color: ${({ color }) => SecondaryColorPalette[color]};
    filter: drop-shadow(10px 10px 2px gray);
    transform: translateY(-5px);
  }
`;

/**
 * Primary UI component for user interaction
 */
export const LeafButton: FC<LeafButtonProps> = ({
  color,
  label,
  href,
  ...props
}) => {
  const button = <Root color={color}>{label}</Root>;
  return href ? <a href={href}>{button}</a> : button;
};
