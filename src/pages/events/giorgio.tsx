import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../../components/layout/header/header";
import { Footer } from "../../components/layout/footer/footer";
import { BlogEntry } from "../../components/blog-entry/blog-entry";
import { mockHeader, mockFooter } from "../../fixture-for-pages/events";
import { mockGiorgio } from "../../fixture-for-pages/events";
import GlobalStyle from "../../globalStyles";
import { Layout } from "../../components/layout/layout";
import styled from "styled-components";

const StyledBlogEntry = styled(BlogEntry)`
  margin-top: 60px;
  margin-bottom: 60px;
`

const GiorgioPage: React.FC<PageProps> = () => {
  return (
    <Layout {...{ ...mockFooter, ...mockHeader }}>
      <StyledBlogEntry {...mockGiorgio} />
    </Layout>
  );
};

export default GiorgioPage;

export const Head: HeadFC = () => <title>Giorgio</title>;
