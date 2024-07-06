import React from "react";
import styled, { css } from "styled-components";
import { LeafCard } from "./leaf-card/leaf-card";
import { FC } from "react";
import { MainColorPalette, MainColorPaletteType } from "../../../constants/colors";

export interface LeafCardEventProps {
  date?: string;
  title: string;
  linkUrl: string;
  imageUrl: string;
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
`;

const Title = styled.div<{ color: MainColorPaletteType }>`
  line-height: 1;
  display: flex;
  color: ${({ color }) => MainColorPalette[color]};
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  align-self: center;
  padding-top: 15px;
`;

export const LeafCardEvent: FC<LeafCardEventProps> = ({
  date,
  title,
  linkUrl,
  imageUrl,
  color,
  ...props
}) => {
  return (
    <Root {...props}>
      {date && <Date color={color}>{date}</Date>}
      <LeafCard
        label="Scopri"
        linkUrl={linkUrl}
        imageUrl={imageUrl}
        color={color}
      />
      <Title color={color}> {title} </Title>
    </Root>
  );
};
