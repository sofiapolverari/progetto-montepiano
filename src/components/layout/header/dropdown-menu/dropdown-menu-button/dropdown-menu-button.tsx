import React from "react";
import styled, { css } from "styled-components";

interface DropdownMenuButtonProps {
  label?: string;
  linkUrl: string;
  color: "reseda-green" | "citron" | "salmon" | "cambridge-blue"; // TO DO COLLEGARE AL BABBO
}

const Root = styled.a<Pick<DropdownMenuButtonProps, "color">>`
  display: flex;
  height: 25px;
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

  &:hover {
    color: #273e0a;
    ${({ color }) => {
      switch (color) {
        case "reseda-green":
          return css`
            background-color: #828f71;
          `;
        case "citron":
          return css`
            background-color: #dfd261;
          `;
        case "salmon":
          return css`
            background-color: #dc8570;
          `;
        case "cambridge-blue":
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
