import React, { useState } from "react";
import styled, { css } from "styled-components";
import { CarouselItem } from "./carousel-item/carousel-item";
import { CarouselItemProps } from "./carousel-item/carousel-item";

interface CarouselProps {
  items: Pick<CarouselItemProps, "linkUrl" | "imageUrl">[];
}

const Root = styled.div``;

export const Carousel = ({ items, ...props }: CarouselProps) => {
  const [index, SetIndex] = useState(0);
  return (
    <Root>
      {items.map((item) => (
        <CarouselItem imageUrl={item.imageUrl} linkUrl={item.linkUrl} isGrayscale= // TODO{isGrayscale}
         />
      ))}
    </Root>
  );
};
