import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { FC } from "react";
import {
  MainColorPalette,
  SecondaryColorPalette,
  MainColorPaletteType,
} from "../../constants/colors";
import { Container } from "../container/container";
import { BannerText } from "../banner-text/banner-text";
import React from "react";

export interface ArticleProps {
  title: string;
  dateLabel?: string;
  imageUrl: string;
  body: string;
  color: MainColorPaletteType;
  direction: "vertical" | "horizontal";
}

// TODO frecce per switchare tra gli eventi per sfogliarli senza tornare alla pagina principale?
// TODO filtro per ordinarli per data? Mettere in evidenza?

const Root = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 25px;
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

const ImageAnimatedWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-basis: 30%;
`;

const Photo = styled.img<Pick<ArticleProps, "direction">>`
  width: ${({ direction }) => (direction === "horizontal" ? "80%" : "100%")};
  min-width: ${({ direction }) =>
    direction === "horizontal" ? "auto" : "500px"};
`;

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
        {direction === "horizontal" ? (
          <motion.div
            {...{
              initial: { translateY: "+100%", opacity: 0 },
              whileInView: { translateY: "0%", opacity: 1 },
              viewport: { once: true },
              transition: { ease: "easeOut", duration: 0.4 },
            }}
          >
            <BannerText color={color} title={title} />
            {dateLabel && <DateLabel color={color}>{dateLabel}</DateLabel>}
          </motion.div>
        ) : (
          <motion.div
            {...{
              initial: { translateX: "-100%", opacity: 0 },
              whileInView: { translateX: "0%", opacity: 1 },
              viewport: { once: true },
              transition: { ease: "easeOut", duration: 0.4 },
            }}
          >
            <BannerText color={color} title={title} />
            {dateLabel && <DateLabel color={color}>{dateLabel}</DateLabel>}
          </motion.div>
        )}

        {direction === "horizontal" && (
          <ImageAnimatedWrapper
            {...{
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { ease: "easeOut", duration: 0.4, delay: 0.5 },
            }}
          >
            <Photo src={imageUrl} direction={direction} />
          </ImageAnimatedWrapper>
        )}
        {direction === "horizontal" ? (
          <motion.div
            {...{
              initial: { translateY: "+100%", opacity: 0 },
              whileInView: { translateY: "0%", opacity: 1 },
              viewport: { once: true },
              transition: { ease: "easeOut", duration: 0.4 },
            }}
          >
            <TextBox color={color}> {body} </TextBox>
          </motion.div>
        ) : (
          <motion.div
            {...{
              initial: { translateX: "-100%", opacity: 0 },
              whileInView: { translateX: "0%", opacity: 1 },
              viewport: { once: true },
              transition: { ease: "easeOut", duration: 0.4 },
            }}
          >
            <TextBox color={color}> {body} </TextBox>
          </motion.div>
        )}
      </ColumnWrapper>
      {direction === "vertical" && (
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
      )}
    </Root>
  );
};
