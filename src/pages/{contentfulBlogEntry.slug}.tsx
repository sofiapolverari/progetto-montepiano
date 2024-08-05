import * as React from "react";
import { graphql, HeadProps, type PageProps } from "gatsby";
import { BlogEntry } from "../components/blog-entry/blog-entry";
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
  const color = contentfulBlogEntry?.section?.color as MainColorPaletteType;
  return (
    <Layout {...contentfulLayout!} color={color}>
      <StyledBlogEntry
        {...(contentfulBlogEntry as Queries.BlogEntryDataFragment)}
        color={color}
      />
    </Layout>
  );
};

export default BlogEntryPage;

//TODO ALBERTO FIXARE IL SEO
export const Head: React.FC<HeadProps<Queries.BlogEntryQuery>> = ({
  data: { contentfulBlogEntry },
}) => <title>Montepiano | {contentfulBlogEntry?.title}</title>;

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
