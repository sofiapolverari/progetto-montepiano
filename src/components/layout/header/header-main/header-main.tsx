import React, { ForwardedRef } from "react";
import styled, { css } from "styled-components";
import { SocialButton } from "../../social-button/social-button";
import { HamburgerButton } from "../hamburger-button/hamburger-button";
import {
  MainColorPalette,
  MainColorPaletteType,
} from "../../../../constants/colors";
import { FC } from "react";

interface HeaderMainProps {
  color: MainColorPaletteType;
  hamburgerButtonOnClick?: () => void;
  linkUrl: string[];
  dropdownButtonRef: ForwardedRef<HTMLDivElement>;
}

const Root = styled.div<{ color: MainColorPaletteType }>`
  position: relative;
  z-index: 10;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ color }) => MainColorPalette[color]};
  padding-top: 5px;
  padding-bottom: 5px;
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

export const HeaderMain: FC<HeaderMainProps> = ({
  color,
  hamburgerButtonOnClick,
  linkUrl,
  dropdownButtonRef,
  ...props
}) => {
  return (
    <Root color={color}>
      <HamburgerButton
        color={color}
        onClick={hamburgerButtonOnClick}
        ref={dropdownButtonRef}
      />
      <SocialWrapper>
        {linkUrl?.[0] && (
          <SocialButton linkUrl={linkUrl[0]} icon={"facebook"} />
        )}
        {linkUrl?.[1] && (
          <SocialButton linkUrl={linkUrl[1]} icon={"instagram"} />
        )}
        {linkUrl?.[2] && (
          <SocialButton linkUrl={linkUrl[2]} icon={"whatsapp"} />
        )}
      </SocialWrapper>
    </Root>
  );
};
