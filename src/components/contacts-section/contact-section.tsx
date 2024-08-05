import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { Container } from "../container/container";
import { ReactComponent as Consiglio } from "./contacts-icon/consiglio.svg";
import { ReactComponent as Posizione } from "./contacts-icon/posizione.svg";
import { ReactComponent as Telefono } from "./contacts-icon/telefono.svg";
import { graphql } from "gatsby";
import { RichText } from "../rich-text/rich-text";

export interface ContactSectionProps extends Queries.ContactDataFragment {}

const Root = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 30px;
`;

const LeftBlock = styled.div`
  display: flex;
  align-items: flex-start;
  padding-right: 70px;
  width: 500px;
  flex-shrink: 0;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #273e0a; //pakistan-green
  text-transform: uppercase;
  padding-left: 15px;
`;

const Body = styled(RichText)`
  color: #273e0a; //pakistan-green
  font-size: 17px;
  margin-bottom: 60px;

  & h5 {
    font-size: 30px;
    font-weight: bold;
    color: #828f71;
    //text-transform: uppercase;
    text-shadow: 0.3px 0.5px 0 #273e0a;
    line-height: 1;
    margin-bottom: 15px;
  }

  & p {
    margin-bottom: 20px;
  }
`;

export const ContactSection: FC<ContactSectionProps> = ({
  title,
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
        {contactIcon}
        <Title>{title}</Title>
      </LeftBlock>
      {body?.raw && <Body raw={body.raw} />}
    </Root>
  );
};

export const query = graphql`
  fragment ContactData on ContentfulContact {
    body {
      raw
    }
    title
    icon
  }
`;
