import React, { FC, PropsWithChildren } from "react";
import { Footer, FooterProps } from "./footer/footer";
import { Header, HeaderProps } from "./header/header";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

interface LayoutProps extends FooterProps, HeaderProps {}

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  ...props
}) => (
  <>
    <GlobalStyle />
    <BodyWrapper>
      <Header {...props} />
      {children}
      <Footer {...props} />
    </BodyWrapper>
  </>
);
