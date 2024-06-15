import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Facebook } from "./social-icon/facebook.svg";
import { ReactComponent as Instagram } from "./social-icon/instagram.svg";
import { ReactComponent as Whatsapp } from "./social-icon/whatsapp.svg";

interface SocialButtonProps {
  linkUrl: string;
  icon: "facebook" | "instagram" | "whatsapp";
}

const Root = styled.a``;

export const SocialButton = ({
  linkUrl,
  icon,
  ...props
}: SocialButtonProps) => {
  let socialIcon = <></>;
  if (icon === "facebook") {
    socialIcon = <Facebook fill="#e9e5d9" height={30} />;
  } else if (icon === "instagram") {
    socialIcon = (
      <Instagram fill="#e9e5d9" height={30} style={{ color: "#e9e5d9" }} />
    );
  } else if (icon === "whatsapp") {
    socialIcon = <Whatsapp fill="#e9e5d9" height={30} />;
  }

  return <Root href={linkUrl}>{socialIcon}</Root>;
};
