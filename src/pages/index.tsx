import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { HeroBanner } from "../components/hero-banner/hero-banner";
import { AnimatedTitle } from "../components/animated-title/animated-title";
import { LeafGrid } from "../components/leaf-grid/leaf-grid";
import { BannerImage } from "../components/banner-image/banner-image";
import { LeafButton } from "../components/leaf-button/leaf-button";
import { Layout } from "../components/layout/layout";

const IndexPage: React.FC<PageProps<Queries.HomeQuery>> = ({
  data: { contentfulHomepage, contentfulLayout, allContentfulLabel },
}) => {
  const labels: Record<string, string> = allContentfulLabel.nodes.reduce<
    Record<string, string>
  >(
    (acc, item) => ({ ...acc, [item.contentfulid ?? ""]: item.label ?? "" }),
    {}
  );
  if (!contentfulHomepage) return null;
  const { heroImage, highlightedArticles, indexPages, chaletImage } =
    contentfulHomepage;
  return (
    <Layout color="pakistan-green" {...contentfulLayout!} $isPadded={false}>
      <HeroBanner color="pakistan-green" image={heroImage?.gatsbyImageData} />
      <AnimatedTitle
        label={labels["homepage-highlighted-events-title"] ?? ""}
        color="chestnut"
        direction="left"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <LeafGrid
          items={highlightedArticles as Queries.BlogEntryCardDataFragment[]}
          color="chestnut"
          itemsize="small"
          direction="left"
        />
        <LeafButton
          color="chestnut"
          href="/eventi"
          label={labels["discover-all-events-button"] ?? ""}
        />
      </div>

      {/* <AnimatedTitle
        label={googleMapsTitle}
        color="pakistan-green"
        direction="right"
      />
      <div
        style={{
          width: "100%",
          height: "600px",
          backgroundColor: "grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        MAPPA GOOGLE
      </div> */}
      <AnimatedTitle
        label={labels["homepage-discover-montepiano-title"] ?? ""}
        color="field-drab"
        direction="right"
      />
      <LeafGrid
        items={indexPages as Queries.BlogSectionCardDataFragment[]}
        color="field-drab"
        itemsize="small"
        direction="right"
      />
      <AnimatedTitle
        label={labels["homepage-chalet-montepiano-title"] ?? ""}
        color="brunswick-green"
        direction="left"
      />
      {chaletImage?.url && (
        <BannerImage
          color="brunswick-green"
          linkUrl="/chalet-di-montepiano"
          imageUrl={chaletImage?.url}
          direction="left"
          label={labels["homepage-discover-chalet-hover"] ?? ""}
        />
      )}
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Proloco Montepiano</title>;

export const query = graphql`
  query Home {
    contentfulHomepage {
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      indexPages {
        ...BlogSectionCardData
      }
      highlightedArticles {
        ...BlogEntryCardData
      }
      chaletImage {
        url
      }
    }
    contentfulLayout {
      ...LayoutData
    }
    allContentfulLabel {
      nodes {
        label
        contentfulid
      }
    }
  }
`;
