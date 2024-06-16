import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { CarouselItem } from "./carousel-item/carousel-item";
import { CarouselItemProps } from "./carousel-item/carousel-item";
import { AnimatePresence, motion } from "framer-motion";
import { CAROUSEL_HEIGHT } from "./constants";
import { getPositiveModulo } from "../../utils/get-positive-modulo";

export interface CarouselProps {
  items: Pick<CarouselItemProps, "linkUrl" | "imageUrl">[];
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

export const Carousel = ({ items:_items, ...props }: CarouselProps) => {
  const items = _items.length <3? [..._items, ..._items, ..._items]: _items;
  // If there are not enough items to animate, make them enough!

  const [index, SetIndex] = useState(0);

  useEffect(() => {
    setInterval(
      () => SetIndex((prevI) => getPositiveModulo(prevI + 1, items.length)),
      1500
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
                  imageUrl={item.imageUrl}
                  linkUrl={item.linkUrl}
                  $isCenter={
                    position === "center"
                  }
                />
              </ItemAnimation>
            )
          );
        })}
      </AnimatePresence>
    </Root>
  );
};
