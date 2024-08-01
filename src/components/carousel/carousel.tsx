import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { CarouselItem } from "./carousel-item/carousel-item";
import { CarouselItemProps } from "./carousel-item/carousel-item";
import { AnimatePresence, motion } from "framer-motion";
import { CAROUSEL_HEIGHT } from "./constants";
import { getPositiveModulo } from "../../utils/get-positive-modulo";
import { FC } from "react";
import { graphql } from "gatsby";

export interface CarouselProps {
  items: readonly Queries.SponsorDataFragment[];
}

const Root = styled.div`
  height: ${CAROUSEL_HEIGHT}; // Do we keep it fixed?
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ItemAnimation = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
`;

export const Carousel: FC<CarouselProps> = ({ items: _items, ...props }) => {
  const items = _items.length < 3 ? [..._items, ..._items, ..._items] : _items;
  // If there are not enough items to animate, make them enough!

  const [index, SetIndex] = useState(0);

  useEffect(() => {
    setInterval(
      () => SetIndex((prevI) => getPositiveModulo(prevI + 1, items.length)),
      2000
    );
  }, []);
  // When the page is rendered start counting and keep sliding pages every 1.5 second
  // Begin again when you pass the array length

  return (
    <Root>
      <AnimatePresence initial={false} mode="popLayout">
        {items.map((item, i) => {
          let position: "left" | "center" | "right" | null = null;
          if (getPositiveModulo(i + 1, items.length) === index)
            position = "left";
          if (getPositiveModulo(i - 1, items.length) === index)
            position = "right";
          if (i === index) position = "center";

          return (
            position && (
              <ItemAnimation
                key={i}
                initial={{
                  translateX: "100vw",
                }}
                exit={{
                  translateX: "-25vw",
                }}
                animate={{
                  translateX:
                    position === "left"
                      ? "0vw"
                      : position === "center"
                      ? "25vw"
                      : "75vw",
                }}
                transition={{ ease: "easeOut", duration: 0.4 }}
              >
                <CarouselItem
                  imageUrl={item.image?.url!}
                  linkUrl={item.url!}
                  $isCenter={position === "center"}
                />
              </ItemAnimation>
            )
          );
        })}
      </AnimatePresence>
    </Root>
  );
};

// spazio tra i caroselli no gap al babbo, ma ai singoli item
// spazio tra gli elementi sopra e sotto togliere padding dal root del footer e metterli singolarmente a tutti tranne al carosello
//storybook che sborda da tutto schermo

export const query = graphql`
  fragment SponsorData on ContentfulSponsor {
    url
    image {
      url
    }
  }
`;
