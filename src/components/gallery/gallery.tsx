import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { GalleryItem } from "./gallery-item/gallery-item";
import { GalleryItemProps } from "./gallery-item/gallery-item";
import { ANIMATION_TIME } from "./constants";
import { Container } from "../container/container";

//suppongo non serva il container ma per sicurezza chiederò

export interface GalleryProps {
  items: string[];
}

const Root = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: min(80%, 1290px);
`

const GalleryGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 18vh);
  grid-auto-columns: minmax(0, 25%);
  transition: all ${ANIMATION_TIME} ease-out;
  border-radius: 10px;
  padding: 0.25em;
  cursor: zoom-in;

  @media (min-width: 40em) {
    grid-template-rows: repeat(2, 20vh);
  }

  @media (min-width: 10em) and (orientation: landscape) {
    grid-template-rows: repeat(2, 45vh);
  }

  @media (min-width: 60em) {
    grid-template-rows: 25vh;
  }
`;

export const Gallery: FC<GalleryProps> = ({ items: items, ...props }) => {
  return (
    <Root>
      <GalleryGrid>
        {items?.map((item) => (
          <GalleryItem imageUrl={item} />
        ))}
      </GalleryGrid>
    </Root>
  );
};
