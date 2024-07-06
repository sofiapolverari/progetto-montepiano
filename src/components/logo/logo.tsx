import React from "react";
import { FC } from "react";
import styled, { css } from "styled-components";
import { LightColorCode, MainColorPalette } from "../../constants/colors";

interface LogoProps {
  color: "alabaster" | "pakistan-green";
}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logomark = styled.img`
  height: 60%;
  width: 60%;
  filter: drop-shadow(5px 5px 2px #e9e5d9);
`;

const Logotype = styled.div<Pick<LogoProps, "color">>`
  font-size: 80px;
  font-weight: bolder;
  margin-left: 5px;
  color: ${({ color }) =>
    color === "alabaster"
      ? LightColorCode
      : MainColorPalette["pakistan-green"]};
`;

export const Logo: FC<LogoProps> = ({ color, ...props }) => {
  return (
    <Root>
      <Logomark
        src={
          color === "alabaster"
            ? "/logo_montepiano_alabaster.png"
            : "/logo_montepiano_pakistan_green.png"
        }
      />
      <Logotype color={color}>MONTEPIANO</Logotype>
    </Root>
  );
};

//TODO costante a parte per il bianco e il verde
