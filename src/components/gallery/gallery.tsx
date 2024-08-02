import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { GalleryItem } from "./gallery-item/gallery-item";
import { GalleryItemProps } from "./gallery-item/gallery-item";

//suppongo non serva il container ma per sicurezza chiederò

export interface GalleryProps {
  items: Pick<GalleryItemProps, "imageUrl">[];
}

const time = "0.3s";

const Root = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 18vh);
  grid-template-columns: repeat(2, 45vw);
  transition: all ${time} ease(gravity);
  background-color: #273e0a;
  border-radius: 10px;
  padding: 0.25em;
  cursor: zoom-in;
  // grid-gap: .25em;

  @media (min-width: 40em) {
    grid-template-rows: repeat(2, 20vh);
  }

  @media (min-width: 10em) and (orientation: landscape) {
    grid-template-columns: repeat(5, 18vw);
    grid-template-rows: repeat(2, 45vh);
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(10, 8vw);
    grid-template-rows: 25vh;
  }
`;

export const Gallery: FC<GalleryProps> = ({ items: items, ...props }) => {
  return (
    <Root>
      <GalleryGrid>
        {items?.map((item) => (
          <GalleryItem imageUrl={item.imageUrl} />
        ))}
      </GalleryGrid>
    </Root>
  );
};
