import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import {
  MainColorPalette,
  SecondaryColorPalette,
  MainColorPaletteType,
} from "../../constants/colors";

interface HorizontalArticleProps {
  title: string;
  dateLabel?: string;
  imageUrl: string;
  body: string;
  color: MainColorPaletteType;
  direction: "vertical" | "horizontal";
  //propieta orizzontale o verticale
  //duplica la foto, usa and e cerca di riusare il layout
  //containerizzalo
}

// TODO frecce per switchare tra gli eventi per sfogliarli senza tornare alla pagina principale?
// TODO filtro per ordinarli per data? Mettere in evidenza?

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1<{ color: MainColorPaletteType }>`
  color: ${({ color }) => MainColorPalette[color]};
  font-size: 60px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
  @media (min-width: 1280px) {
    font-size: 80px; //dim responsive del testo
  }
  @media (min-width: 1536px) {
    font-size: 100px;
  }
`;

const DateLabel = styled.h2<{ color: MainColorPaletteType }>`
  text-align: center;
  width: 100%;
  color: ${({ color }) => SecondaryColorPalette[color]};
  font-size: 40px;
  text-transform: uppercase;
  margin: 0px;
  /* line-height: 40px; */
  @media (min-width: 1280px) {
    font-size: 45px; //dim responsive del testo
  }
  @media (min-width: 1536px) {
    font-size: 65px;
  }

  //display: inline-block;
`;

const TextBox = styled.div<{ color: MainColorPaletteType }>`
  background-color: ${({ color }) => MainColorPalette[color]};
  color: #e9e5d9; //Alabaster
  padding: 15px;
  margin-top: 30px;
  align-self: stretch;
  @media (min-width: 1280px) {
    font-size: 20px; //dim responsive del testo
  }
  @media (min-width: 1536px) {
    font-size: 40px;
  }
  width: 1000px; // non c'è nel vertical
`;

const ImageWrapper = styled.div<Pick<HorizontalArticleProps, "direction">>`
  align-self: ${({ direction }) =>
    direction === "horizontal" ? "center" : "left"};
  justify-self: ${({ direction }) =>
    direction === "horizontal" ? "center" : "left"};
  flex-basis: 30%;
`;

const ImageAnimatedWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const Photo = styled.img<Pick<HorizontalArticleProps, "direction">>`
  align-self: ${({ direction }) =>
    direction === "horizontal" ? "center" : "left"};
  justify-self: ${({ direction }) =>
    direction === "horizontal" ? "center" : "left"};
  width: ${({ direction }) => (direction === "horizontal" ? "80%" : "100%")};
  max-width: ${({ direction }) =>
    direction === "horizontal" ? "auto" : "500px"};
`;
// non abbiamo body wrapper e column wrapper

export const HorizontalArticle: FC<HorizontalArticleProps> = ({
  title,
  dateLabel,
  imageUrl,
  body,
  color,
  direction,
  ...props
}) => {
  return (
    <Root>
      <AnimatePresence mode={"popLayout"}>
        <motion.div
          initial={{ translateX: "-100%", opacity: 0 }}
          animate={{ translateX: "0%", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
        >
          <Title color={color}> {title} </Title>
          {dateLabel && <DateLabel color={color}>{dateLabel}</DateLabel>}
        </motion.div>
      </AnimatePresence>
      {direction === "horizontal" && (
        <ImageWrapper direction={direction}>
          <ImageAnimatedWrapper
            {...{
              initial: { translateX: "100%", opacity: 0 },
              whileInView: { translateX: "0%", opacity: 1 },
              viewport: { once: true },
              transition: { ease: "easeOut", duration: 0.4 },
            }}
          >
            <Photo src={imageUrl} direction={direction} />
          </ImageAnimatedWrapper>
        </ImageWrapper>
      )}
      <TextBox color={color}> {body} </TextBox>
      {direction === "vertical" && (
        <ImageWrapper direction={direction}>
          <ImageAnimatedWrapper
            {...{
              initial: { translateX: "100%", opacity: 0 },
              whileInView: { translateX: "0%", opacity: 1 },
              viewport: { once: true },
              transition: { ease: "easeOut", duration: 0.4 },
            }}
          >
            <Photo src={imageUrl} direction={direction} />
          </ImageAnimatedWrapper>
        </ImageWrapper>
      )}
    </Root>
  );
};

// sistema i nomi
// e importante fixare le stories? al momento alternati direx e link
//controllare il doppione photo e image wrapper
