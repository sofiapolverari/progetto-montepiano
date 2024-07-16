import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedWrapperProps {
  direction: "left" | "right";
}

const Root = styled.div`
  width: 100%;
`;

export const AnimatedWrapper: FC<PropsWithChildren<AnimatedWrapperProps>> = ({
  direction,
  children,
  ...props
}) => {
  return (
    <Root {...props}>
      <AnimatePresence mode={"popLayout"}>
        {
          <motion.div
            {...{
              initial: { translateX: direction === "left" ? "-100%" : "100%" },
              whileInView: { translateX: "0%" },
              viewport: { once: true },
              transition: { duration: 0.9, ease: "easeOut" },
            }}
          >
            <div>{children}</div>;
          </motion.div>
        }
      </AnimatePresence>
    </Root>
  );
};
