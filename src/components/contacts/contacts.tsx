import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { ContactSection } from "./contacts-section/contact-section";

interface ContactsProps {}

const Root = styled.div`
  width: 100vw;
`;

const Container = styled.div`
  max-width: 1290px;
  padding: 100px;
`;
const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: #273e0a; //pakistan-green
  /* initial: { translateX: direction === "left" ? "-100%" : "100%" },
              whileInView: { translateX: "0%" },
              viewport: { once: true },
              transition: { duration: 0.9, ease: "easeOut" }, */
`;

export const Contacts: FC<ContactsProps> = ({ ...props }) => {
  return (
    <Root>
      <Container>
        <ContactSection title={""} subtitle={""} body={""} />
        <Line />
      </Container>
    </Root>
  );
};

// TODO linea animata
// come porca troia si importano le fottute proprieta