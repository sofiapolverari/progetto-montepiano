import * as React from "react";
import { graphql, HeadProps, type PageProps } from "gatsby";
import { BlogEntry } from "../components/blog-entry/blog-entry";
import { Layout } from "../components/layout/layout";
import { MainColorPaletteType } from "../constants/colors";


const BlogEntryPage: React.FC<PageProps<Queries.BlogEntryQuery>> = ({
  data: { contentfulBlogEntry, contentfulLayout },
}) => {
  const color = contentfulBlogEntry?.section?.color as MainColorPaletteType;
  return (
    <Layout {...contentfulLayout!} color={color}>
      <BlogEntry
        {...(contentfulBlogEntry as Queries.BlogEntryDataFragment)}
        color={color}
      />
    </Layout>
  );
};

export default BlogEntryPage;

//TODO Complete Seo
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
