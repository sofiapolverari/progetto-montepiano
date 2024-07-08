import React from "react";
import styled, { css } from "styled-components";
import { SocialButton } from "../social-button/social-button";
import { CAROUSEL_HEIGHT } from "../../carousel/constants";
import { Carousel, CarouselProps } from "../../carousel/carousel";
import {
  MainColorPalette,
  MainColorPaletteType,
} from "../../../constants/colors";
import { FC } from "react";

export interface FooterProps {
  color: MainColorPaletteType;
  linkUrl: string[];
  body: string[];
  carouselItems: CarouselProps["items"];
}

const Root = styled.div<{ color: MainColorPaletteType }>`
  flex-direction: column;
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ color }) => MainColorPalette[color]};
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const LogoWrapper = styled.div`
  display: flex;
  z-index: 10;
  padding-left: 20px;
  padding-bottom: 40px;
`;

const Logo = styled.img`
  width: 400px;
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
`;

const CarouselBox = styled.div`
  height: ${CAROUSEL_HEIGHT};
`;

const TextBox = styled.div`
  color: #e9e5d9; //Alabaster
  padding-top: 25px;
  padding-bottom: 25px;
  text-align: center;
  align-self: stretch;
  @media (min-width: 1280px) {
    font-size: 20px; //dim responsive del testo
  }
  @media (min-width: 1536px) {
    font-size: 40px;
  }
`;

export const Footer: FC<FooterProps> = ({
  color,
  linkUrl,
  body,
  carouselItems,
  ...props
}) => (
  <Root color={color}>
    <TopWrapper>
      <LogoWrapper>
        <Logo src="/logo_montepiano_alabaster_logotype.png" />
      </LogoWrapper>
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
    </TopWrapper>
    <Carousel items={carouselItems} />
    <TextBox>
      {body.map((paragraph) => (
        <div>{paragraph}</div>
      ))}
    </TextBox>
  </Root>
);

// TODO MANDARE A CAPO IL TESTO, CREARE CARTELLINA PER I SOCIAL, ALLINEARE LA TESTA
