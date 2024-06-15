import React from "react";
import styled, { css } from "styled-components";

interface LeafCardProps {
  // size?: "small" | "medium" | "large"; TODO
  label?: string;
  linkUrl: string;
  imageUrl: string;
}
const Label = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  opacity: 0;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 60px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #e9e5d9;
  cursor: pointer;
  transition: all 0.3s ease-out;
`;
const Mask = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  border-radius: 0% 50% 0% 50%;
  background-color: #8d4a3a;
  opacity: 0;
  transition: all 0.3s ease-out;
`;
const Root = styled.div`
  display: flex;
  position: relative;
  border-radius: 0% 50% 0% 50%;
  width: 300px;
  height: 300px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    border-radius: 100%;

    ${Mask} {
      opacity: 0.7;
    }
    ${Label} {
      opacity: 1;
    }
  }
`;

const Photo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const LeafCard = ({
  label,
  linkUrl,
  imageUrl,
  ...props
}: LeafCardProps) => {
  return (
    <a href={linkUrl}>
      <Root>
        <Photo src={imageUrl} /> <Mask />
        <Label> {label} </Label>
      </Root>
    </a>
  );
};
