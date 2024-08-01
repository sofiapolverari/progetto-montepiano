import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";

export interface GalleryItemProps {
  imageUrl: string;
}

const Root = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: all $time/2 ease(downhill);
  position: relative;
  box-shadow: 0 0 0 #0000;
  opacity: 0.67;
  filter: sepia(80%) hue-rotate(180deg);

  &:first-child {
    border-radius: 10px 10px 0 0;
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }

  @media (min-width: 40em) and (max-width: 59.99em) {
    &:first-child {
      border-radius: 10px 0 0 0;
    }
    &:nth-child(5) {
      border-radius: 0 10px 0 0;
    }
    &:nth-child(6) {
      border-radius: 0 0 10px 0;
    }
    &:last-child {
      border-radius: 0 0 0 10px;
    }
  }

  @media (min-width: 60em) {
    &:first-child {
      border-radius: 10px 0 0 10px;
    }
    &:last-child {
      border-radius: 0 10px 10px 0;
    }
  }

  &:hover {
    opacity: 1;
    z-index: 1;
    box-shadow: 1em 1em 1em #0004;
    transition: all $time ease(downhill);
    filter: sepia(0%) hue-rotate(0deg);
    border-radius: 5px;
    width: 300%;
    height: 300%;
    left: -100%;
    top: -100%;

    @media (min-width: 40em) {
      width: 250%;
      height: 500%;
      left: -75%;
      top: -200%;
    }

    @media (min-width: 10em) and (orientation: landscape) {
      width: 250%;
      height: 200%;
    }

    @media (min-width: 40em) and (orientation: portrait) {
      width: 300%;
      height: 300%;
      left: -100%;
      top: -100%;
    }

    @media (min-width: 60em) {
      width: 350%;
      height: 150%;
      left: -75%;
      top: -25%;

      ~ img {
        left: 175%;
      }
    }

    @media (min-width: 60em) and (orientation: landscape) {
      width: 300%;
      height: 300%;
      left: -75%;
      top: -100%;

      ~ img {
        left: 100%;
      }
    }
  }
`;

export const GalleryItem: FC<GalleryItemProps> = ({ imageUrl, ...props }) => {
  return <Root src={imageUrl} />;
};
