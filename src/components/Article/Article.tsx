import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import {
  MainColorPalette,
  SecondaryColorPalette,
  MainColorPaletteType,
} from "../../constants/colors";

interface ArticleProps {
  title: string;
  dateLabel?: string;
  imageUrl: string;
  body: string;
  color: MainColorPaletteType;
  direction: "vertical" | "horizontal";
}

// TODO frecce per switchare tra gli eventi per sfogliarli senza tornare alla pagina principale?
// TODO filtro per ordinarli per data? Mettere in evidenza?

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 25px;
  padding-left: 50px;
  padding-right: 50px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  padding-bottom: 20px;
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
  max-width: 1000px;
`;

const ImageWrapper = styled.div<Pick<ArticleProps, "direction">>`
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

const Photo = styled.img<Pick<ArticleProps, "direction">>`
  width: ${({ direction }) => (direction === "horizontal" ? "80%" : "100%")};
  min-width: ${({ direction }) =>
    direction === "horizontal" ? "auto" : "500px"};
`;
// non abbiamo body wrapper e column wrapper

export const Article: FC<ArticleProps> = ({
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
      <ColumnWrapper>
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
        <AnimatePresence mode={"popLayout"}>
          <motion.div
            initial={{ translateX: "-100%", opacity: 0 }}
            animate={{ translateX: "0%", opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
          >
            <TextBox color={color}> {body} </TextBox>
          </motion.div>
        </AnimatePresence>
      </ColumnWrapper>
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

// e importante fixare le stories? al momento alternati direx e link
//controllare i doppioni
// la ripeto l'animazione del text box?
//containerizzalo
