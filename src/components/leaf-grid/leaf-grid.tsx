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
import { Container } from "../container/container";
import {
  AnimatedWrapper,
  AnimatedWrapperProps,
} from "../animated-wrapper/animated-wrapper";

export interface LeafGridProps {
  items:
    | readonly Queries.BlogEntryCardDataFragment[]
    | readonly Queries.BlogSectionCardDataFragment[]
    | null;
  itemsize: "small" | "big";
  color: MainColorPaletteType;
  direction?: AnimatedWrapperProps["direction"];
}

const Root = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
  flex-wrap: wrap;
  row-gap: 60px;
  width: 100%;
  overflow: hidden;
  @media (max-width: 640px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const StyledAnimatedWrapper = styled(AnimatedWrapper)<
  Pick<LeafGridProps, "itemsize">
>`
  flex-grow: 0;
  flex-basis: ${({ itemsize: itemSize }) => (itemSize === "small" ? "15%" : "20%")};
  flex-shrink: 0;

  @media (max-width: 640px) {
    flex-basis: 100%;
  }
`;

export const LeafGrid: FC<LeafGridProps> = ({
  items,
  itemsize: itemSize,
  color,
  direction,
  ...props
}) => {
  return (
    <Root {...props}>
      {items?.map((item, i) => (
        <StyledAnimatedWrapper direction={direction} itemsize={itemSize} key={i}>
          {isEvent(item) ? (
            <LeafCardEvent {...item} color={color} />
          ) : (
            <LeafCardSection {...item} color={color} />
          )}
        </StyledAnimatedWrapper>
      ))}
    </Root>
  );
};

const isEvent = (item: any): item is Queries.BlogEntryCardDataFragment => true;
