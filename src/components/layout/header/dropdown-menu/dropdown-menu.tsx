import React from "react";
import styled, { css } from "styled-components";
import { DropdownMenuButton } from "./dropdown-menu-button/dropdown-menu-button";
import { AnimatePresence, motion } from "framer-motion";

interface DropdownMenuProps {
  color: "pakistan-green" | "field-drab" | "chestnut" | "brunswick-green";
  isOpen: boolean;

  // TODO forse inseriremo le pagine che ci vanno
}

const Root = styled.div<Pick<DropdownMenuProps, "color">>`
  width: 190px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${({ color }) => {
    switch (color) {
      case "pakistan-green":
        return css`
          background-color: #273e0a;
        `;
      case "field-drab":
        return css`
          background-color: #6f6406;
        `;
      case "chestnut":
        return css`
          background-color: #8d4a3a;
        `;
      case "brunswick-green":
        return css`
          background-color: #165c51;
        `;
    }
  }}
`;

export const DropdownMenu = ({
  color,
  isOpen,
  ...props
}: DropdownMenuProps) => {
  let buttonColor: "reseda-green" | "citron" | "salmon" | "cambridge-blue" =
    "citron";
  switch (color) {
    case "pakistan-green":
      buttonColor = "reseda-green";
      break;
    case "field-drab":
      buttonColor = "citron";
      break;
    case "chestnut":
      buttonColor = "salmon";
      break;
    case "brunswick-green":
      buttonColor = "cambridge-blue";
      break;
  }
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
            <DropdownMenuButton
              color={buttonColor}
              linkUrl="https://www.prolocomontepiano.com/"
              label="Cosa Visitare"
            />
            <DropdownMenuButton
              color={buttonColor}
              linkUrl="https://www.prolocomontepiano.com/"
              label="Servizi"
            />
            <DropdownMenuButton
              color={buttonColor}
              linkUrl="https://www.prolocomontepiano.com/"
              label="Chalet"
            />
          </Root>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
