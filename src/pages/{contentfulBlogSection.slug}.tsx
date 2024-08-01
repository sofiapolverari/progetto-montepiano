import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { BannerText } from "../components/banner-text/banner-text";
import { LeafGrid } from "../components/leaf-grid/leaf-grid";
import { mockHeader, mockFooter } from "../fixture-for-pages/events";
import { mockBannerText, mockLeafGrid } from "../fixture-for-pages/events";
import { Container } from "../components/container/container";

import { Layout } from "../components/layout/layout";
import styled from "styled-components";
import { MainColorPaletteType } from "../constants/colors";

const StyledContainer = styled(Container)`
  margin-top: 60px;
  margin-bottom: 60px;
`;

const EventsPage: React.FC<PageProps<Queries.BlogSectionQuery>> = ({
  data: { contentfulBlogSection, contentfulLayout },
}) => {
  console.log(contentfulBlogSection)
  const color: MainColorPaletteType =
    (contentfulBlogSection?.blogSection?.color as MainColorPaletteType) ??
    "pakistan-green";
  return (
    <Layout {...contentfulLayout!} color={color}>
      <StyledContainer>
        <BannerText title={contentfulBlogSection?.title ?? ""} color={color} />
        <LeafGrid itemSize="big" color={color} items={contentfulBlogSection?.blogSection?.blogentry as Queries.BlogEntryCardDataFragment[]} />
      </StyledContainer>
    </Layout>
  );
};

export default EventsPage;

export const Head: HeadFC = () => <title>Events</title>;

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
