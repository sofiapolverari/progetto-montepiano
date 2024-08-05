import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { BannerText } from "../components/banner-text/banner-text";
import { Layout } from "../components/layout/layout";
import styled from "styled-components";
import { LeafButton } from "../components/leaf-button/leaf-button";
import { LeafGrid } from "../components/leaf-grid/leaf-grid";
import { orderBy } from "lodash";

/* animazione linea= initial: { translateX: direction === "left" ? "-100%" : "100%" },
              whileInView: { translateX: "0%" },
              viewport: { once: true },
              transition: { duration: 0.9, ease: "easeOut" },  */

const SectionIndex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-right: auto;
  margin-left: auto;
`;

const AllEventsArticlesPage: React.FC<
  PageProps<Queries.AllEventsArticlesQuery>
> = ({
  data: { contentfulLayout, contentfulLabel, allContentfulBlogEntrySection },
}) => {
  const articles = allContentfulBlogEntrySection?.nodes?.reduce<
    Queries.BlogEntryCardDataFragment[]
  >(
    (acc, section) => [
      ...acc,
      ...((section.blogentry as Queries.BlogEntryCardDataFragment[]) ?? []),
    ],
    []
  );

  const sortedArticles = orderBy(articles, "showIndex", "desc");

  return (
    <Layout color="chestnut" {...contentfulLayout!}>
      <BannerText color="chestnut" title={contentfulLabel?.label ?? ""} />
      <SectionIndex>
        <LeafButton color="chestnut" label="Eventi" href="/eventi" />
        <LeafButton color="chestnut" label="News" href="/news" />
        <LeafButton color="chestnut" label="Curiosità" href="/curiosita" />
      </SectionIndex>
      <LeafGrid itemSize="big" color={"chestnut"} items={sortedArticles} />
    </Layout>
  );
};

export default AllEventsArticlesPage;

export const Head: HeadFC = () => (
  <title>Montepiano | Eventi, News e Curiosità</title>
);

export const query = graphql`
  query AllEventsArticles {
    contentfulLayout {
      ...LayoutData
    }
    contentfulLabel(contentfulid: { eq: "events-news-curiosity-page-title" }) {
      label
    }
    allContentfulBlogEntrySection(
      filter: { contentfulid: { in: ["eventi", "notizie", "curiosita"] } }
    ) {
      nodes {
        contentfulid
        blogentry {
          ...BlogEntryCardData
        }
      }
    }
  }
`;
