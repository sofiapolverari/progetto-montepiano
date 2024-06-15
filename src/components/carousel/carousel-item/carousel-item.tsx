import React from "react";
import styled, { css } from "styled-components";

export interface CarouselItemProps {
  linkUrl: string;
  imageUrl: string;
  isGrayscale: boolean;
}

const Root = styled.div`
  display: flex;
  position: relative;
  border-radius: 0% 20% 0% 20%;
  height: 300px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
`;

const Photo = styled.img<Pick<CarouselItemProps, "isGrayscale">>`
  height: 100%;
  object-fit: scale-down; //TODO tagliamo o anita manda la dimensione giusta?
  transition: all 0.3s ease-out;

  ${({ isGrayscale }) => {
    if (isGrayscale)
      return css`
        filter: grayscale(100%);
      `;
  }}
`;

export const CarouselItem = ({
  linkUrl,
  imageUrl,
  isGrayscale,
  ...props
}: CarouselItemProps) => {
  return (
    <a href={linkUrl}>
      <Root>
        <Photo src={imageUrl} isGrayscale={isGrayscale} />
      </Root>
    </a>
  );
};
