import * as React from "react";
import { graphql, HeadProps, type HeadFC, type PageProps } from "gatsby";
import { BannerText } from "../components/banner-text/banner-text";
import { LeafGrid } from "../components/leaf-grid/leaf-grid";
import { orderBy } from "lodash";

import { Layout } from "../components/layout/layout";
import styled from "styled-components";
import { MainColorPalette, MainColorPaletteType } from "../constants/colors";

const Subtitle = styled.h2<{ color: MainColorPaletteType }>`
  color: ${({ color }) => MainColorPalette[color]};
  font-size: 32px;
  text-align: center;
  margin: 20px 0px 20px 0px;
  @media (max-width: 640px) {
    margin: 70px 0px 25px 0px;
  }
`;

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

  const color: MainColorPaletteType =
    (contentfulBlogSection?.blogSection?.color as MainColorPaletteType) ??
    "pakistan-green";
  return (
    <Layout {...contentfulLayout!} color={color}>
        <BannerText title={contentfulBlogSection?.title ?? ""} color={color} />
        <Subtitle color={color}>{contentfulBlogSection?.subtitle}</Subtitle>
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
      subtitle
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
