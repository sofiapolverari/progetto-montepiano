import React from "react";
import styled, { css } from "styled-components";
import { SocialButton } from "../../social-button/social-button";
//carosello

interface FooterProps {
  color: "pakistan-green" | "field-drab" | "chestnut" | "brunswick-green";
  linkUrl: string[];
  body: string[];
}

const Root = styled.div`
  flex-direction: column;
  position: relative;
  display: flex;
  width: 100%;
  padding: 20px 50px;
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

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  color: #e9e5d9; //Alabaster
  text-transform: uppercase;
  font-weight: bold;
  font-size: x-large;
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const CarouselBox = styled.div`
  height: 300px; //fissa?
`;

const TextBox = styled.div`
  color: #e9e5d9; //Alabaster
  text-align: center;
  align-self: stretch;
  @media (min-width: 1280px) {
    font-size: 20px; //dim responsive del testo
  }
  @media (min-width: 1536px) {
    font-size: 40px;
  }
`;

export const Footer = ({ color, linkUrl, body, ...props }: FooterProps) => {
  return (
    <Root color={color}>
      <TopWrapper>
        <Title>montepiano</Title>
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
      <CarouselBox />
      <TextBox>
        {body.map((paragraph) => (
          <div>{paragraph}</div>
        ))}
      </TextBox>
    </Root>
  );
};

// TODO MANDARE A CAPO IL TESTO, CREARE CARTELLINA PER I SOCIAL, ALLINEARE LA TESTA
