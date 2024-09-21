import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { MainColorPalette, MainColorPaletteType } from "../../constants/colors";
import { Container } from "../container/container";

export interface BannerTextProps {
  title: string;
  color: MainColorPaletteType;
}

const Title = styled.h1<{ color: MainColorPaletteType }>`
  color: ${({ color }) => MainColorPalette[color]};
  font-size: 60px;
  text-transform: uppercase;
  text-align: center;
  margin: 20px 0px 20px 0px;
  @media (min-width: 1280px) {
    font-size: 80px; //dim responsive del testo
  }
  @media (min-width: 1536px) {
    font-size: 100px;
  }
  @media (max-width: 640px) {
    font-size: 55px;
    margin: 70px 0px 25px 0px;
  }
`;

export const BannerText: FC<BannerTextProps> = ({ title, color, ...props }) => {
  return (
    <Container>
      <Title color={color}> {title} </Title>
    </Container>
  );
};
