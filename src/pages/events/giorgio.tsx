import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../../components/layout/header/header";
import { Footer } from "../../components/layout/footer/footer";
import { Article } from "../../components/article/article";
import { mockHeader, mockFooter } from "../../fixture-for-pages/events";
import { mockGiorgio } from "../../fixture-for-pages/events";
import GlobalStyle from "../../globalStyles";

const GiorgioPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Header {...mockHeader} />
        <Article {...mockGiorgio} />
        <Footer {...mockFooter} />
      </div>
    </>
  );
};

export default GiorgioPage;

export const Head: HeadFC = () => <title>Giorgio</title>;
