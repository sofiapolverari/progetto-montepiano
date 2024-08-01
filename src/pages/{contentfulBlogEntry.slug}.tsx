import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Header } from "../components/layout/header/header";
import { Footer } from "../components/layout/footer/footer";
import { BlogEntry } from "../components/blog-entry/blog-entry";
import { mockHeader, mockFooter } from "../fixture-for-pages/events";
import { mockGiorgio } from "../fixture-for-pages/events";
import GlobalStyle from "../globalStyles";
import { Layout } from "../components/layout/layout";
import styled from "styled-components";
import { MainColorPaletteType } from "../constants/colors";

const StyledBlogEntry = styled(BlogEntry)`
  margin-top: 60px;
  margin-bottom: 60px;
`;

const BlogEntryPage: React.FC<PageProps<Queries.BlogEntryQuery>> = ({
  data: { contentfulBlogEntry, contentfulLayout },
}) => {
  return (
    <Layout {...contentfulLayout!} color="brunswick-green">
      <StyledBlogEntry
        color={
          (contentfulBlogEntry?.section?.color as MainColorPaletteType) ??
          "pakistan-green"
        }
        {...(contentfulBlogEntry as Queries.BlogEntryDataFragment)}
      />
    </Layout>
  );
};

export default BlogEntryPage;

//TODO ALBERTO FIXARE IL SEO
export const Head: HeadFC = () => <title>Giorgio</title>;

export const query = graphql`
  query BlogEntry($id: String) {
    contentfulBlogEntry(id: { eq: $id }) {
      ...BlogEntryData
      section {
        color
      }
    }
    contentfulLayout {
      ...LayoutData
    }
  }
`;
