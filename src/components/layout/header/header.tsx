import React, { useRef, useState } from "react";
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
  z-index: 100;
`;

// Needed to insert header into page elements flow
const Spacer = styled.div`
  height: 90px;
`;

/*useEffect(effect:() => {

  const closeDropdown = e => {if (e.path[0].tagName !== 'BUTTON') {setIsOpen(value: false);
  }
};

document.body.addEventListener(type: 'click', closeDropdown);

return () => document.body.addEventListener(type: 'click', closeDropdown);

}, deps:[]);*/

export const Header: FC<HeaderProps> = ({ color, linkUrl, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const HandleHamburgerButtonOnClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const dropDowMenuRef = useRef<HTMLDivElement>(null);
  const dropDownButtonRef = useRef<HTMLDivElement>(null);

  const handleClickOutsideDropdown = (e: any) => {
    if (
      !dropDowMenuRef.current?.contains(e.target as Node) &&
      !dropDownButtonRef.current?.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  window.addEventListener("click", handleClickOutsideDropdown);

  return (
    <>
      <Spacer />
      <Root>
        <HeaderMain
          color={color}
          linkUrl={linkUrl}
          hamburgerButtonOnClick={HandleHamburgerButtonOnClick}
          dropdownButtonRef={dropDownButtonRef}
        />
        <DropdownMenu color={color} isOpen={isOpen} ref={dropDowMenuRef} />
      </Root>
    </>
  );
};
