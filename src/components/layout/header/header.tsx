import React, { useState } from "react";
import styled, { css } from "styled-components";
import { HeaderMain } from "./header-main/header-main";
import { DropdownMenu } from "./dropdown-menu/dropdown-menu";

interface HeaderProps {
  color: "pakistan-green" | "field-drab" | "chestnut" | "brunswick-green";
  linkUrl: string[];
}

const Root = styled.div`
  position: absolute;
  width: 100%;
`;

export const Header = ({ color, linkUrl, ...props }: HeaderProps) => {
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
