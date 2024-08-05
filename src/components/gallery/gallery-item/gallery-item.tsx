import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { ANIMATION_TIME } from "../constants";

export interface GalleryItemProps {
  imageUrl: string;
}

const Root = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: all ${ANIMATION_TIME}/2 ease-out;
  position: relative;
  box-shadow: 0 0 0 #0000;
  opacity: 0.67;
  background-color: red;
  filter: sepia(80%) hue-rotate(180deg);

  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }

  &:hover {
    opacity: 1;
    z-index: 100;
    box-shadow: 1em 1em 1em #0004;
    transition: all ${ANIMATION_TIME} ease-out;
    filter: sepia(0%) hue-rotate(0deg);
    border-radius: 5px;
    width: 160%;
    height: 160%;
    left: -40%;
    top: -40%;
  }
`;

export const GalleryItem: FC<GalleryItemProps> = ({ imageUrl, ...props }) => {
  return <Root src={imageUrl} />;
};
