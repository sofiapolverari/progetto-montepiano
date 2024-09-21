import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import { DropdownMenuButton } from "./dropdown-menu-button/dropdown-menu-button";
import { AnimatePresence, motion } from "framer-motion";
import {
  MainColorPalette,
  MainColorPaletteType,
} from "../../../../constants/colors";

export interface DropdownMenuProps
  extends Pick<Queries.LayoutDataFragment, "sections"> {
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
  @media (max-width: 640px) {
    width: 100%;
    height: calc(100vh - 90px);
    overflow: scroll;
  }
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
              {sections?.map(
                (page, i) =>
                  page && (
                    <DropdownMenuButton
                      linkUrl={`/${page.slug}`}
                      label={page.title}
                      color={color}
                      key={i}
                    />
                  )
              )}
            </Root>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
