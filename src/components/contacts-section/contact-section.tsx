import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";

interface ContactSectionProps {
  title: string;
  subtitle: string;
  body: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;

const InfoBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 20px;
  /* & h5 {
    background: green;
  }
  & h6 {
    background: green;
  } */
`;

const Subtitle = styled.div`
  font-weight: bold;
  color: #273e0a; //pakistan-green
`;

const Body = styled.h6`
  font-size: 30;
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
  ...props
}) => {
  return (
    <Root>
      <Title>{title}</Title>
      <InfoBox>
        <Subtitle>{subtitle}</Subtitle>
        <Body>{body}</Body>
      </InfoBox>
    </Root>
  );
};

//TODO risolverel a quest degli h5 - 6 e far si che anita possa mettere quanti titolini vuole
//Anita potra andare a capo come vuole?
