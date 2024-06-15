import React from "react";
import styled, { css } from "styled-components";
import { SocialButton } from "../../../social-button/social-button";
import { HamburgerButton } from "../hamburger-button/hamburger-button";

// TODO TIPIZZARE FC E SISTEMARE RIPETIZIONE COLORE

interface HeaderMainProps {
  color: "pakistan-green" | "field-drab" | "chestnut" | "brunswick-green";
  hamburgerButtonOnClick?: () => void;
  linkUrl: string[];
}

const Root = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
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
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderMain = ({
  color,
  hamburgerButtonOnClick,
  linkUrl,
  ...props
}: HeaderMainProps) => {
  return (
    <Root color={color}>
      <HamburgerButton color={color} onClick={hamburgerButtonOnClick} />
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
