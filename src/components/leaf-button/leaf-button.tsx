import React from "react";
import styled, { css } from "styled-components";

interface LeafButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  color: "pakistan-green" | "field-drab" | "chestnut" | "brunswick-green";
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
const Root = styled.div<Pick<LeafButtonProps, "color">>`
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
    color: #273e0a;
    border-radius: 100%;
    ${({ color }) => {
      switch (color) {
        case "pakistan-green":
          return css`
            background-color: #828f71;
          `;
        case "field-drab":
          return css`
            background-color: #dfd261;
          `;
        case "chestnut":
          return css`
            background-color: #dc8570;
          `;
        case "brunswick-green":
          return css`
            background-color: #90bcac;
          `;
      }
    }}
  }
`;

/**
 * Primary UI component for user interaction
 */
export const LeafButton = ({ color, label, ...props }: LeafButtonProps) => {
  return <Root color={color}>{label}</Root>;
};
