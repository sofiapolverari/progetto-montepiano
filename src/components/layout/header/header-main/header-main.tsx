import React, { ForwardedRef } from "react";
import styled, { css } from "styled-components";
import { SocialButton } from "../../social-button/social-button";
import { HamburgerButton } from "../hamburger-button/hamburger-button";
import {
  MainColorPalette,
  MainColorPaletteType,
} from "../../../../constants/colors";
import { FC } from "react";

interface HeaderMainProps extends Pick<Queries.LayoutDataFragment, "facebookUrl" | "instagramUrl"| "whatsappUrl">{
  color: MainColorPaletteType;
  hamburgerButtonOnClick?: () => void;
  dropdownButtonRef: ForwardedRef<HTMLDivElement>;
}

const Root = styled.div<{ color: MainColorPaletteType }>`
  position: relative;
  height: 90px;
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
  dropdownButtonRef,
  facebookUrl,
  instagramUrl,
  whatsappUrl,
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
        {facebookUrl && (
          <SocialButton linkUrl={facebookUrl} icon={"facebook"} />
        )}
        {instagramUrl && (
          <SocialButton linkUrl={instagramUrl} icon={"instagram"} />
        )}
        {whatsappUrl && (
          <SocialButton linkUrl={whatsappUrl} icon={"whatsapp"} />
        )}
      </SocialWrapper>
    </Root>
  );
};
