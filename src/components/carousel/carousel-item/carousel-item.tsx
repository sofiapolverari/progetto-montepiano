import React from "react";
import styled, { css } from "styled-components";
import { CAROUSEL_HEIGHT } from "../constants";

export interface CarouselItemProps {
  linkUrl: string;
  imageUrl: string;
  $isCenter: boolean;
}

const Root = styled.div<Pick<CarouselItemProps, "$isCenter">>`
  display: flex;
  position: relative;
  border-radius: 0% 20% 0% 20%;
  width: ${({$isCenter}) => !$isCenter ? "25vw": `50vw`};
  height: ${({$isCenter}) => $isCenter ? CAROUSEL_HEIGHT: `calc(${CAROUSEL_HEIGHT}/2)`};
  overflow: hidden;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
`;

const Photo = styled.img<Pick<CarouselItemProps, "$isCenter">>`
  height: 100%;
  object-fit: contain; //TODO tagliamo o anita manda la dimensione giusta?

  ${({ $isCenter }) => {
    if (!$isCenter)
      return css`
        filter: grayscale(100%);
      `;
  }}
`;

export const CarouselItem = ({
  linkUrl,
  imageUrl,
  $isCenter,
  ...props
}: CarouselItemProps) => {
  return (
    <a href={linkUrl}>
      <Root $isCenter={$isCenter}>
        <Photo src={imageUrl} $isCenter={$isCenter} />
      </Root>
    </a>
  );
};
