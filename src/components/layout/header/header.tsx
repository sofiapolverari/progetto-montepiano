import React, { useState } from "react";
import styled, { css } from "styled-components";
import { HeaderMain } from "./header-main/header-main";
import { DropdownMenu } from "./dropdown-menu/dropdown-menu";
import {
  MainColorPalette,
  MainColorPaletteType,
} from "../../../constants/colors";
import { FC } from "react";

export interface HeaderProps {
  color: MainColorPaletteType;
  linkUrl: string[]; //TODO commentare
}

const Root = styled.div`
  position: absolute;
  width: 100%;
`;

export const Header: FC<HeaderProps> = ({ color, linkUrl, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const HandleHamburgerButtonOnClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <Root>
      <HeaderMain
        color={color}
        linkUrl={linkUrl}
        hamburgerButtonOnClick={HandleHamburgerButtonOnClick}
      />
      <DropdownMenu color={color} isOpen={isOpen} />
    </Root>
  );
};
