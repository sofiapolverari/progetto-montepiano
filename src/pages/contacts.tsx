import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/layout/header/header";
import { Footer } from "../components/layout/footer/footer";
import { ContactSection } from "../components/contacts-section/contact-section";
import { BannerText } from "../components/banner-text/banner-text";
import { mockHeader, mockFooter } from "../fixture-for-pages/homepage";
import {
  mockContactSectionConsiglio,
  mockContactSectionInfo,
  mockContactSectionMap,
  mockBannerText,
} from "../fixture-for-pages/contacts";
import GlobalStyle from "../globalStyles";
import { Layout } from "../components/layout/layout";

/* animazione linea= initial: { translateX: direction === "left" ? "-100%" : "100%" },
              whileInView: { translateX: "0%" },
              viewport: { once: true },
              transition: { duration: 0.9, ease: "easeOut" },  */

const ContactsPage: React.FC<PageProps> = () => {
  return (
    <Layout {...{ ...mockFooter, ...mockHeader }}>
      <Header {...mockHeader} />
      <BannerText {...mockBannerText} />
      <ContactSection {...mockContactSectionConsiglio} />
      <hr
        style={{ width: "100%", height: "5px", backgroundColor: "#273e0a" }}
      />
      <ContactSection {...mockContactSectionInfo} />
      <hr
        style={{ width: "100%", height: "5px", backgroundColor: "#273e0a" }}
      />
      <ContactSection {...mockContactSectionMap} />
    </Layout>
  );
};

export default ContactsPage;

export const Head: HeadFC = () => <title>Contacts</title>;
