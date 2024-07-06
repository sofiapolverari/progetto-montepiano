import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { LeafCardEvent, LeafCardEventProps } from "./leaf-card-event/leaf-card-event";

interface LeafGridProps {
  items: LeafCardEventProps[];
}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
`;

const StyledLeafCardEvent = styled(LeafCardEvent)`
  flex-grow: 0;
  flex-basis: 15%;
  flex-shrink: 1;
`;

export const LeafGrid: FC<LeafGridProps> = ({ items, ...props }) => {
  return (
    <Root>
      {items.map((items) => (
        <StyledLeafCardEvent
          date={items.date}
          title={items.title}
          linkUrl={items.linkUrl}
          imageUrl={items.imageUrl}
          color={items.color}
        />
      ))}
    </Root>
  );
};

//TODO GAP min e ridimensiona leaf card event
