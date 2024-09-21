import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { ContactSection } from "../components/contacts-section/contact-section";
import { BannerText } from "../components/banner-text/banner-text";
import { Layout } from "../components/layout/layout";

/* animazione linea= initial: { translateX: direction === "left" ? "-100%" : "100%" },
              whileInView: { translateX: "0%" },
              viewport: { once: true },
              transition: { duration: 0.9, ease: "easeOut" },  */

const ContactsPage: React.FC<PageProps<Queries.ContactsQuery>> = ({
  data: { allContentfulContact, contentfulLayout, allContentfulLabel },
}) => {
  const labels: Record<string, string> = allContentfulLabel.nodes.reduce<Record<string, string>>(
    (acc, item) => ({ ...acc, [item.contentfulid ?? ""]: item.label ?? "" }), {}
  );
  return (
    <Layout color="pakistan-green" {...contentfulLayout!}>
      <BannerText color="pakistan-green" title={labels["contacts-page-title"] ?? ""} />
      {allContentfulContact.nodes.map((contact, i) => (
        <>
          {
            // Only put separation line between contacts
            !!i && (
              <hr
                style={{
                  width: "100%",
                  height: "5px",
                  backgroundColor: "#273e0a",
                }}
                key={`${i}-hr`}
              />
            )
          }
          <ContactSection {...contact} key={i}/>
        </>
      ))}
    </Layout>
  );
};

export default ContactsPage;

export const Head: HeadFC = () => <title>Montepiano | Contacts</title>;

export const query = graphql`
  query Contacts {
    allContentfulContact {
      nodes {
        ...ContactData
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
