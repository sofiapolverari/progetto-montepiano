import React, { FC, PropsWithChildren } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import styled, { css } from "styled-components";
import GlobalStyle from "../../globalStyles";
import { graphql } from "gatsby";
import { MainColorPaletteType } from "../../constants/colors";

interface LayoutProps extends Queries.LayoutDataFragment {
  color: MainColorPaletteType;
  $isPadded?: Boolean;
}

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ChildWrapper = styled.div<Pick<LayoutProps, "$isPadded">>`
  ${({ $isPadded: padded }) =>
    padded &&
    css`
      padding: 50px 0px;

      @media (max-width: 640px) {
        padding: 20px 0px;
      }
    `}
`;

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  $isPadded: padded = true,
  ...props
}) => (
  <>
    <GlobalStyle />
    <BodyWrapper>
      <Header {...props} />
      <ChildWrapper $isPadded={padded}>{children}</ChildWrapper>
      <Footer {...props} />
    </BodyWrapper>
  </>
);

export const query = graphql`
  fragment LayoutData on ContentfulLayout {
    facebookUrl
    instagramUrl
    whatsappUrl
    sections {
      slug
      title
    }
    specialPages
  }
`;
