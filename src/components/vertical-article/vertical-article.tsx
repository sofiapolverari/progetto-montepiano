import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import {
  MainColorPalette,
  SecondaryColorPalette,
  MainColorPaletteType,
} from "../../constants/colors";

interface VerticalArticleProps {
  title: string;
  dateLabel?: string;
  imageUrl: string;
  body: string;
  color: MainColorPaletteType;

  //color
}

// TODO animazione a partire dall-angolo per la comparsa delle immagini
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

const BodyWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  align-self: stretch; //TODO controllare che funzioni (ricorda che funziona solo se il babbo è flex e c'è qualcuno dentro che detta la larghezza)
  @media (min-width: 1280px) {
    font-size: 20px; //dim responsive del testo
  }
  @media (min-width: 1536px) {
    font-size: 40px;
  }
`;

const ImageWrapper = styled.div`
  align-self: center;
  justify-self: center;
  flex-basis: 30%;
`;

const Photo = styled.img`
  max-width: 500px;
  width: 100%;
`;

export const VerticalArticle: FC<VerticalArticleProps> = ({
  title,
  dateLabel,
  imageUrl,
  body,
  color,
  ...props
}) => {
  return (
    <Root>
      <BodyWrapper>
        <div style={{ flexBasis: "40%" }}>
          <AnimatePresence mode={"popLayout"}>
            <motion.div
              initial={{ translateX: "-100%", opacity: 0 }}
              animate={{ translateX: "0%", opacity: 1 }}
              // exit={{ translateY: "-100%" }}
              transition={{ ease: "easeOut", duration: 0.4 }}
            >
              <ColumnWrapper>
                <Title color={color}> {title} </Title>
                {dateLabel && <DateLabel color={color}>{dateLabel}</DateLabel>}
                <TextBox color={color}> {body} </TextBox>
              </ColumnWrapper>
            </motion.div>
          </AnimatePresence>
        </div>
        <ImageWrapper>
          <AnimatePresence mode={"popLayout"}>
            <motion.div
              initial={{ translateX: "100%", opacity: 0 }}
              animate={{ translateX: "0%", opacity: 1 }}
              // exit={{ translateY: "-100%" }}
              transition={{ ease: "easeOut", duration: 0.4 }}
            >
              <Photo src={imageUrl} />
            </motion.div>
          </AnimatePresence>
        </ImageWrapper>
      </BodyWrapper>
    </Root>
  );
};

// TODO dai un nome e una categoria al div con flexbasis
