import React from "react";
import styled, { css } from "styled-components";
import { LeafCard } from "../leaf-card/leaf-card";
import { FC } from "react";
import {
  MainColorPalette,
  MainColorPaletteType,
} from "../../../constants/colors";
import { graphql } from "gatsby";
import { getFormattedDate } from "../../../utils/get-formatted-date";

export interface LeafCardEventProps extends Queries.BlogEntryCardDataFragment {
  color: MainColorPaletteType;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.div<{ color: MainColorPaletteType }>`
  display: flex;
  color: ${({ color }) => MainColorPalette[color]};
  font-size: 24px;
  padding-bottom: 10px;
  @media (max-width: 640px) {
    font-size: 30px;
    font-weight: 700;
  }
`;

const Title = styled.a<{ color: MainColorPaletteType }>`
  line-height: 1;
  display: flex;
  color: ${({ color }) => MainColorPalette[color]};
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  align-self: center;
  padding-top: 15px;
  @media (max-width: 640px) {
    font-size: 40px;
  }
`;

export const LeafCardEvent: FC<LeafCardEventProps> = ({
  date: _date,
  title,
  cardImage,
  poster,
  slug,
  color,
  showIndex,
  // Remaining props are caught to let Styled Component assign additional css to the FC root
  ...props
}) => {
  const date = _date ? getFormattedDate(_date) : null;

  return cardImage?.url || poster?.url ? (
    <Root {...props}>
      {date && <Date color={color}>{date}</Date>}
      <LeafCard
        label="Scopri"
        linkUrl={`/${slug}`}
        imageUrl={cardImage?.url ?? poster?.url}
        color={color}
      />
      <Title color={color} href={`/${slug}`}> {title} </Title>
    </Root>
  ) : null;
};

export const query = graphql`
  fragment BlogEntryCardData on ContentfulBlogEntry {
    date
    title
    poster {
      url
    }
    cardImage {
      url
    }
    slug
    showIndex
  }
`;
