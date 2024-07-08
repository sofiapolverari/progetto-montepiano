import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Facebook } from "./social-icon/facebook.svg";
import { ReactComponent as Instagram } from "./social-icon/instagram.svg";
import { ReactComponent as Whatsapp } from "./social-icon/whatsapp.svg";
import { FC } from "react";

interface SocialButtonProps {
  linkUrl: string;
  icon: "facebook" | "instagram" | "whatsapp";
}

const Root = styled.a`
  color: #e9e5d9
`;

export const SocialButton: FC<SocialButtonProps> = ({
  linkUrl,
  icon,
  ...props
}) => {
  let socialIcon = <></>;
  if (icon === "facebook") {
    socialIcon = <Facebook />;
  } else if (icon === "instagram") {
    socialIcon = (
      <Instagram />
    );
  } else if (icon === "whatsapp") {
    socialIcon = <Whatsapp />;
  }

  return <Root href={linkUrl}>{socialIcon}</Root>;
};
