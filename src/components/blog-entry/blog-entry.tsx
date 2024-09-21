import { motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import {
  MainColorPalette,
  SecondaryColorPalette,
  MainColorPaletteType,
} from "../../constants/colors";
import { Container } from "../container/container";
import { graphql } from "gatsby";
import { getFormattedDate } from "../../utils/get-formatted-date";
import { RichText } from "../rich-text/rich-text";
import { Gallery } from "../gallery/gallery";

export interface BlogEntryProps extends Queries.BlogEntryDataFragment {
  color: MainColorPaletteType;
}

// TODO nice to have filtro per ordinarli per data? Mettere in evidenza?

const Root = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 70px;
  justify-content: center;
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
  word-wrap: break-word;
  max-width: 100%;
  @media (min-width: 1024px) {
    font-size: 60px; //dim responsive del testo
  }
  @media (min-width: 1280px) {
    font-size: 80px; //dim responsive del testo
  }
  @media (min-width: 1536px) {
    font-size: 100px;
  }
  @media (max-width: 640px) {
    font-size: 40px;
  }
  /* @media (min-width: 1680px) {
    font-size: 120px;
  } */
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
  @media (max-width: 640px) {
    font-size: 30px;
  }
  //display: inline-block;
`;

const TextBox = styled(RichText)<{ color: MainColorPaletteType }>`
  //background-color: ${({ color }) => MainColorPalette[color]};
  width: 100%;
  //color: #e9e5d9; //Alabaster
  color: ${({ color }) => MainColorPalette[color]};
  //padding: 15px;
  margin-top: 30px;
  align-self: stretch;
  text-align: justify;

  @media (min-width: 1024px) {
    font-size: 15px;
  }
  @media (min-width: 1280px) {
    font-size: 25px; //dim responsive del testo
  }
  @media (min-width: 1536px) {
    font-size: 35px;
  }
  /* @media (min-width: 1680px) {
    font-size: 40px;
  } */
`;

const VerticalImageAnimatedWrapper = styled(motion.div)<
  Pick<BlogEntryProps, "direction">
>`
  display: flex;
  justify-content: center;
  flex-basis: 40%;
  flex-shrink: 0;
  display: ${({ direction }) => (direction === "vertical" ? "block" : "none")};
  @media (max-width: 640px) {
    display: none;
  }
`;

const HorizontalImageAnimatedWrapper = styled(motion.div)<
  Pick<BlogEntryProps, "direction">
>`
  display: flex;
  justify-content: center;
  flex-basis: 40%;
  flex-shrink: 0;
  display: ${({ direction }) => (direction === "vertical" ? "none" : "block")};
  @media (max-width: 640px) {
    display: block;
    width: 100%;
  }
`;

const Photo = styled.img`
  width: 100%;
`;

export const BlogEntry: FC<BlogEntryProps> = ({
  title,
  date,
  poster,
  body,
  color,
  direction,
  images,
  ...props
}) => {
  const formattedDate = date ? getFormattedDate(date) : null;
  return (
    <div
      {...props}
      style={{ display: "flex", flexDirection: "column", gap: "70px" }}
    >
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
              <Title color={color}> {title} </Title>
              {formattedDate && (
                <DateLabel color={color}>{formattedDate}</DateLabel>
              )}
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
              <Title color={color}> {title} </Title>
              {formattedDate && (
                <DateLabel color={color}>{formattedDate}</DateLabel>
              )}
            </motion.div>
          )}

          {poster?.url && (
            <HorizontalImageAnimatedWrapper
              direction={direction}
              {...{
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: true },
                transition: { ease: "easeOut", duration: 0.4, delay: 0.5 },
              }}
            >
              <Photo src={poster?.url} />
            </HorizontalImageAnimatedWrapper>
          )}
          {body?.raw &&
            (direction === "horizontal" ? (
              <motion.div
                {...{
                  initial: { translateY: "+100%", opacity: 0 },
                  whileInView: { translateY: "0%", opacity: 1 },
                  viewport: { once: true },
                  transition: { ease: "easeOut", duration: 0.4 },
                }}
              >
                <TextBox color={color} raw={body.raw} />
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
                <TextBox color={color} raw={body.raw} />
              </motion.div>
            ))}
        </ColumnWrapper>
        {poster?.url && (
          <VerticalImageAnimatedWrapper
            direction={direction}
            {...{
              initial: { translateX: "100%", opacity: 0 },
              whileInView: { translateX: "0%", opacity: 1 },
              viewport: { once: true },
              transition: { ease: "easeOut", duration: 0.4 },
            }}
          >
            <Photo src={poster?.url} />
          </VerticalImageAnimatedWrapper>
        )}
      </Root>
      <Gallery
        items={images?.map((img) => img?.url).filter(Boolean) as string[]}
      />
    </div>
  );
};

export const query = graphql`
  fragment BlogEntryData on ContentfulBlogEntry {
    body {
      raw
    }
    date
    title
    poster {
      url
    }
    direction
    images {
      url
    }
  }
`;
