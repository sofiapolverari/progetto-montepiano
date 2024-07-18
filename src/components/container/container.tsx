import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { FC } from "react";

const Root = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1290px;
  padding: 0px 20px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const Container: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <Root>
      <Wrapper {...props}>{children}</Wrapper>
    </Root>
  );
};
