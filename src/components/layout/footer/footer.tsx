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
import { graphql, useStaticQuery } from "gatsby";
import { RichText } from "../../rich-text/rich-text";

export interface FooterProps
  extends Pick<
    Queries.LayoutDataFragment,
    "facebookUrl" | "instagramUrl" | "whatsappUrl"
  > {
  color: MainColorPaletteType;
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
  padding-top: 20px;
  padding-bottom: 20px;
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
  gap: 30px;
  padding-bottom: 20px;
  padding-right: 20px;
`;

const TextBox = styled(RichText)`
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
  facebookUrl,
  instagramUrl,
  whatsappUrl,
  ...props
}) => {
  //TODO - ALBERTO rich text non funziona controllare
  const { allContentfulSponsor, contentfulRichTextLabel } =
    useStaticQuery<Queries.Query>(graphql`
      query {
        contentfulRichTextLabel(contentfulid: { eq: "footer-label" }) {
          label {
            raw
          }
        }
        allContentfulSponsor {
          nodes {
            ...SponsorData
          }
        }
      }
    `);

  return (
    <Root color={color}>
      <TopWrapper>
        <LogoWrapper>
          <Logo src="/logo_montepiano_alabaster_logotype.png" />
        </LogoWrapper>
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
      </TopWrapper>
      {/* <Carousel items={allContentfulSponsor.nodes} /> */}
      {contentfulRichTextLabel?.label?.raw && <TextBox raw={contentfulRichTextLabel?.label?.raw}/>}
    </Root>
  );
};

// TODO MANDARE A CAPO IL TESTO, CREARE CARTELLINA PER I SOCIAL, ALLINEARE LA TESTA
