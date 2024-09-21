import React from "react";
import styled from "styled-components";
import { LeafCard } from "../leaf-card/leaf-card";
import { FC } from "react";
import {
  MainColorPalette,
  MainColorPaletteType,
} from "../../../constants/colors";
import { graphql } from "gatsby";

export interface LeafCardSectionProps
  extends Queries.BlogSectionCardDataFragment {
  color: MainColorPaletteType;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const LeafCardSection: FC<LeafCardSectionProps> = ({
  title,
  cardImage,
  slug,
  color,
  ...props
}) => {
  return cardImage?.url ? (
    <Root {...props}>
      <LeafCard
        label="Scopri"
        linkUrl={`/${slug}`}
        imageUrl={cardImage?.url}
        color={color}
      />
      <Title color={color} href={`/${slug}`}> {title} </Title>
    </Root>
  ) : null;
};

export const query = graphql`
  fragment BlogSectionCardData on ContentfulBlogSection {
    title
    cardImage {
      url
    }
    slug
  }
`;
