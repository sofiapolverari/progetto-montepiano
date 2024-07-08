import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/layout/header/header";
import {
  mockHeader,
  mockHeroBanner,
  eventTitle,
  mockEventGrid,
  googleMapsTitle,
  discoverTitle,
  mockDiscoverGrid,
  chaletTitle,
  mockBannerImage,
  mockFooter
} from "../fixture-for-pages/homepage";
import { HeroBanner } from "../components/hero-banner/hero-banner";
import { AnimatedTitle } from "../components/animated-title/animated-title";
import { AnimatedWrapper } from "../components/animated-wrapper/animated-wrapper";
import { LeafGrid } from "../components/leaf-grid/leaf-grid";
import { BannerImage } from "../components/banner-image/banner-image";
import { Footer } from "../components/layout/footer/footer";
import GlobalStyle from "../globalStyles";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <GlobalStyle/>
    <div style={{width: "100vw", display:"flex", flexDirection: "column"}}>
      <Header {...mockHeader} />
      <HeroBanner {...mockHeroBanner} />
      <AnimatedTitle label={eventTitle} color="chestnut" direction="left" />
      <AnimatedWrapper direction="left">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            width: "100%",
          }}
        >
          <LeafGrid {...mockEventGrid} />
          Scopri tutti gli eventi
        </div>
      </AnimatedWrapper>
      <AnimatedTitle
        label={googleMapsTitle}
        color="pakistan-green"
        direction="right"
      />
      <div style={{width:"100%", height:"600px", backgroundColor:"grey", display:"flex", alignItems:"center", justifyContent:"center"}}>
        MAPPA GOOGLE
      </div>
      <AnimatedTitle
        label={discoverTitle}
        color="field-drab"
        direction="left"
      />
      <AnimatedWrapper direction="left">
          <LeafGrid {...mockDiscoverGrid} />
      </AnimatedWrapper>
      <AnimatedTitle label={chaletTitle} color="brunswick-green" direction="right" />
      <BannerImage {...mockBannerImage}/>
      <Footer {...mockFooter}/>
    </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
