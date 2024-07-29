import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import {
  LeafCardEvent,
  LeafCardEventProps,
} from "./leaf-card-event/leaf-card-event";

//TODO il colore delle card deve essere omogeneo quindi deve essere preso come proprietà e sovrascritto
export interface LeafGridProps {
  items: LeafCardEventProps[];
  itemSize: "small" | "big";
}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
  flex-wrap: wrap;
  row-gap: 60px;
`;

const StyledLeafCardEvent = styled(LeafCardEvent)<
  Pick<LeafGridProps, "itemSize">
>`
  flex-grow: 0;
  flex-basis: ${({ itemSize }) => (itemSize === "small" ? "15%" : "20%")};
  flex-shrink: 0;
`;

export const LeafGrid: FC<LeafGridProps> = ({ items, itemSize, ...props }) => {
  return (
    <Root>
      {items.map((item) => (
        <StyledLeafCardEvent
          date={item.date}
          title={item.title}
          linkUrl={item.linkUrl}
          imageUrl={item.imageUrl}
          color={item.color}
          itemSize={itemSize}
        />
      ))}
    </Root>
  );
};
