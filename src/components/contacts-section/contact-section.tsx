import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { Container } from "../container/container";
import { ReactComponent as Consiglio } from "./contacts-icon/consiglio.svg";
import { ReactComponent as Posizione } from "./contacts-icon/posizione.svg";
import { ReactComponent as Telefono } from "./contacts-icon/telefono.svg";

interface ContactSectionProps {
  title: string;
  subtitle: string;
  body: string;
  icon: "consiglio" | "posizione" | "telefono";
}

const Root = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  padding-right: 70px;
  width: 500px;
  height: 300px;
`;

const IconWrapper = styled.a`
  width: 50px;
  padding: 15px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #273e0a; //pakistan-green
  text-transform: uppercase;
`;

const InfoBox = styled.div`
  margin-right: 40px;
  width: 1000px;
`;

const Subtitle = styled.h5`
  font-size: 23px;
  font-weight: bold;
  color: #828f71;
  text-transform: uppercase;
  text-shadow: 0.3px 0.5px 0 #273e0a;
`;

const Body = styled.h6`
  color: #273e0a; //pakistan-green
  font-size: 17px;
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

export const ContactSection: FC<ContactSectionProps> = ({
  title,
  subtitle,
  body,
  icon,
  ...props
}) => {
  let contactIcon = <></>;
  if (icon === "consiglio") {
    contactIcon = <Consiglio />;
  } else if (icon === "posizione") {
    contactIcon = <Posizione />;
  } else if (icon === "telefono") {
    contactIcon = <Telefono />;
  }

  return (
    <Root>
      <LeftBlock>
        <IconWrapper>{contactIcon}</IconWrapper>
        <Title>{title}</Title>
      </LeftBlock>
      <InfoBox>
        <Subtitle>{subtitle}</Subtitle>
        <Body>{body}</Body>
      </InfoBox>
    </Root>
  );
};

//TODO risolvere la quest degli h5 - 6 e far si che anita possa mettere quanti titolini vuole
// montare la pagina contact + linea
// come rendere dimensioni responsive
// come inserisce i vari titolini?
