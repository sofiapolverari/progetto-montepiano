import * as React from "react";
import { graphql, HeadProps, type HeadFC, type PageProps } from "gatsby";
import { BannerText } from "../components/banner-text/banner-text";
import { LeafGrid } from "../components/leaf-grid/leaf-grid";
import { orderBy } from "lodash";

import { Layout } from "../components/layout/layout";
import styled from "styled-components";
import { MainColorPaletteType } from "../constants/colors";

const EventsPage: React.FC<PageProps<Queries.BlogSectionQuery>> = ({
  data: { contentfulBlogSection, contentfulLayout },
}) => {
  const now = new Date();

  const sortedArticles = orderBy(
    contentfulBlogSection?.blogSection
      ?.blogentry,
    [
      (article) => !article?.date || new Date(article.date) >= now, // true for future or today
      (article) => article?.showIndex ?? 0,
      (article) => article?.date && Math.abs(new Date(article.date).getTime() - now.getTime()), // closeness to today
    ],
    ['desc', 'desc', 'asc'] // future first, higher showIndex first, closer date first
  );

  console.log(sortedArticles)
  const color: MainColorPaletteType =
    (contentfulBlogSection?.blogSection?.color as MainColorPaletteType) ??
    "pakistan-green";
  return (
    <Layout {...contentfulLayout!} color={color}>
        <BannerText title={contentfulBlogSection?.title ?? ""} color={color} />
        <LeafGrid itemsize="big" color={color} items={sortedArticles as Queries.BlogSectionCardDataFragment[]} />
    </Layout>
  );
};

export default EventsPage;

export const Head: React.FC<HeadProps<Queries.BlogSectionQuery>> = ({
    data: { contentfulBlogSection },
}) => <title>Montepiano | {contentfulBlogSection?.title}</title>;

export const query = graphql`
  query BlogSection($id: String) {
    contentfulBlogSection(id: { eq: $id }) {
      title
      blogSection {
        color
        blogentry {
          ...BlogEntryCardData
        }
      }
    }
    contentfulLayout {
      ...LayoutData
    }
  }
`;
