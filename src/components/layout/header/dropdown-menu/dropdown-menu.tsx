import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import { DropdownMenuButton } from "./dropdown-menu-button/dropdown-menu-button";
import { AnimatePresence, motion } from "framer-motion";
import {
  MainColorPalette,
  MainColorPaletteType,
} from "../../../../constants/colors";
import { FC } from "react";

export interface DropdownMenuProps extends Pick<Queries.LayoutDataFragment, "sections"> {
  color: MainColorPaletteType;
  isOpen: boolean;
}

const Root = styled.div<{ color: MainColorPaletteType }>`
  width: 270px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${({ color }) => MainColorPalette[color]};
`;

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ color, isOpen, sections, ...props }, ref) => {
    return (
      <AnimatePresence mode={"popLayout"}>
        {isOpen && (
          <motion.div
            initial={{ translateY: "-100%" }}
            animate={{ translateY: "0%" }}
            exit={{ translateY: "-100%" }}
            transition={{ ease: "easeOut", duration: 0.4 }}
          >
            <Root color={color} ref={ref}>
              {sections?.map((page) => (
                page && <DropdownMenuButton
                  linkUrl={page.slug}
                  label={page.title}
                  color={color}
                />
              ))}
            </Root>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
