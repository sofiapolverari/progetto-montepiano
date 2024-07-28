import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../../components/layout/header/header";
import { Footer } from "../../components/layout/footer/footer";
import { BlogEntry } from "../../components/blog-entry/blog-entry";
import { mockHeader, mockFooter } from "../../fixture-for-pages/events";
import { mockGiorgio } from "../../fixture-for-pages/events";
import GlobalStyle from "../../globalStyles";
import { Layout } from "../../components/layout/layout";

const GiorgioPage: React.FC<PageProps> = () => {
  return (
    <Layout {...{ ...mockFooter, ...mockHeader }}>
      <BlogEntry {...mockGiorgio} />
      <Footer {...mockFooter} />
    </Layout>
  );
};

export default GiorgioPage;

export const Head: HeadFC = () => <title>Giorgio</title>;
