import React, { ForwardedRef } from "react";
import styled, { css } from "styled-components";
import { SocialButton } from "../../social-button/social-button";
import { HamburgerButton } from "../hamburger-button/hamburger-button";
import {
  MainColorPalette,
  MainColorPaletteType,
} from "../../../../constants/colors";
import { FC } from "react";
import { Container } from "../../../container/container";

interface HeaderMainProps
  extends Pick<
    Queries.LayoutDataFragment,
    "facebookUrl" | "instagramUrl" | "whatsappUrl"
  > {
  color: MainColorPaletteType;
  hamburgerButtonOnClick?: () => void;
  dropdownButtonRef: ForwardedRef<HTMLDivElement>;
}

const Root = styled.div<{ color: MainColorPaletteType }>`
  background-color: ${({ color }) => MainColorPalette[color]};
  position: relative;
  z-index: 10;
`;

const HeaderWrapper = styled.div`
  position: relative;
  height: 90px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  @media (max-width: 640px) {
    flex-direction: row-reverse;
    padding: 5px 30px;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 20px;
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
      <HeaderWrapper>
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
      </HeaderWrapper>
    </Root>
  );
};
