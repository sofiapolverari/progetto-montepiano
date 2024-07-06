import React from "react";
import styled, { css } from "styled-components";
import { DropdownMenuButton } from "./dropdown-menu-button/dropdown-menu-button";
import { AnimatePresence, motion } from "framer-motion";
import pagesList from "../../../../page-list.json";
import {
  MainColorPalette,
  MainColorPaletteType,
} from "../../../../constants/colors";
import { FC } from "react";

interface DropdownMenuProps {
  color: MainColorPaletteType;
  isOpen: boolean;

  // TODO forse inseriremo le pagine che ci vanno
}

const Root = styled.div<{ color: MainColorPaletteType }>`
  width: 250px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${({ color }) => MainColorPalette[color]};
`;

export const DropdownMenu: FC<DropdownMenuProps> = ({
  color,
  isOpen,
  ...props
}) => {
  return (
    <AnimatePresence mode={"popLayout"}>
      {isOpen && (
        <motion.div
          initial={{ translateY: "-100%" }}
          animate={{ translateY: "0%" }}
          exit={{ translateY: "-100%" }}
          transition={{ ease: "easeOut", duration: 0.4 }}
        >
          <Root color={color}>
            {pagesList.map((page) => (
              <DropdownMenuButton
                linkUrl={page.url}
                label={page.label}
                color={color}
              />
            ))}
          </Root>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
