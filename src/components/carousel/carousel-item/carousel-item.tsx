import React from "react";
import styled, { css } from "styled-components";
import { CAROUSEL_HEIGHT } from "../constants";
import { FC } from "react";

export interface CarouselItemProps {
  linkUrl: string;
  imageUrl: string;
  $isCenter: boolean;
}

const Root = styled.div<Pick<CarouselItemProps, "$isCenter">>`
  display: flex;
  position: relative;
  width: ${({ $isCenter }) => (!$isCenter ? "25vw" : "50vw")};
  height: ${({ $isCenter }) =>
    $isCenter ? CAROUSEL_HEIGHT : `calc(${CAROUSEL_HEIGHT}/2)`};
  transition: all 0.3s ease-out;
  align-items: stretch;
`;

const Mask = styled.div`
  display: flex;
  border-radius: 0% 20% 0% 20%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin: 0px 10px;
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

export const CarouselItem: FC<CarouselItemProps> = ({
  linkUrl,
  imageUrl,
  $isCenter,
  ...props
}) => {
  return (
    <a href={linkUrl}>
      <Root $isCenter={$isCenter}>
        <Mask>
          <Photo src={imageUrl} $isCenter={$isCenter} />
        </Mask>
      </Root>
    </a>
  );
};
