import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { motion } from "framer-motion";

export interface AnimatedWrapperProps {
  direction?: "left" | "right" | "bottom";
}

export const AnimatedWrapper: FC<PropsWithChildren<AnimatedWrapperProps>> = ({
  children,
  direction = "bottom",
  ...props
}) => {
  return (
    <motion.div
      {...{
        initial: {
          translateX:
            direction === "bottom"
              ? "0%"
              : direction === "left"
              ? "-100%"
              : "100%",
          opacity: 0,
          translateY: direction === "bottom" ? "60px" : "0px",
        },
        whileInView: { translateX: "0%", opacity: 1, translateY: "0px" },
        viewport: { once: true },
        transition: { duration: 0.9, ease: "easeOut" },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
