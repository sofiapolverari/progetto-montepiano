import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../../components/layout/header/header";
import { Footer } from "../../components/layout/footer/footer";
import { BannerText } from "../../components/banner-text/banner-text";
import { LeafGrid } from "../../components/leaf-grid/leaf-grid";
import { mockHeader, mockFooter } from "../../fixture-for-pages/events";
import { mockBannerText, mockLeafGrid } from "../../fixture-for-pages/events";
import { Container } from "../../components/container/container";

import { Layout } from "../../components/layout/layout";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  margin-top: 60px;
  margin-bottom: 60px;
`

const EventsPage: React.FC<PageProps> = () => {
  return (
    <Layout {...{ ...mockFooter, ...mockHeader }}>
      <StyledContainer>
        <BannerText {...mockBannerText} />
        <LeafGrid {...mockLeafGrid} />
      </StyledContainer>
    </Layout>
  );
};

export default EventsPage;

export const Head: HeadFC = () => <title>Events</title>;

// fai giorgio
// posso inserire i vari link reali
