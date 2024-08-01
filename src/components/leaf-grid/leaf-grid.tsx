import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import {
  LeafCardEvent,
  LeafCardEventProps,
} from "./leaf-card-event/leaf-card-event";
import {
  LeafCardSection,
  LeafCardSectionProps,
} from "./leaf-card-section/leaf-card-section";
import { MainColorPaletteType } from "../../constants/colors";

//TODO il colore delle card deve essere omogeneo quindi deve essere preso come proprietà e sovrascritto
//TODO Alberto - ripensare
export interface LeafGridProps {
  items: readonly Queries.BlogEntryCardDataFragment[] | readonly Queries.BlogSectionCardDataFragment[] | null;
  itemSize: "small" | "big";
  color: MainColorPaletteType;
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
  width: 100%;
`;

const StyledLeafCardEvent = styled(LeafCardEvent)<
  Pick<LeafGridProps, "itemSize">
>`
  flex-grow: 0;
  flex-basis: ${({ itemSize }) => (itemSize === "small" ? "15%" : "20%")};
  flex-shrink: 0;
`;

const StyledLeafCardSection = styled(LeafCardSection)<
  Pick<LeafGridProps, "itemSize">
>`
  flex-grow: 0;
  flex-basis: ${({ itemSize }) => (itemSize === "small" ? "15%" : "20%")};
  flex-shrink: 0;
`;

export const LeafGrid: FC<LeafGridProps> = ({ items, itemSize, color, ...props }) => {
  return (
    <Root {...props}>
      {items?.map((item) =>
        isEvent(item) ? (
          <StyledLeafCardEvent {...item} itemSize={itemSize} color={color} />
        ) : (
          <StyledLeafCardSection {...item} itemSize={itemSize} color={color}/>
        )
      )}
    </Root>
  );
};

const isEvent = (item: any): item is Queries.BlogEntryCardDataFragment => true;
