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

//TODO inserire un controllo che inserisce le varie parti del componente solo quanod ci sono i dati corrispettivi nel database
//TODO quando l'articolo è horizontal le animazioni dovrebbero entrare leggermente da sotto passando da opacità 0 a opacità 1

export interface BlogEntryProps extends Queries.BlogEntryDataFragment {
  color: MainColorPaletteType;
}

// TODO frecce per switchare tra gli eventi per sfogliarli senza tornare alla pagina principale?
// TODO filtro per ordinarli per data? Mettere in evidenza?

const Root = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 70px;
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

const TextBox = styled(RichText)<{ color: MainColorPaletteType }>`
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

const Photo = styled.img<Pick<BlogEntryProps, "direction">>`
  width: ${({ direction }) => (direction === "horizontal" ? "80%" : "100%")};
  min-width: ${({ direction }) =>
    direction === "horizontal" ? "auto" : "500px"};
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
    <div {...props} style={{ display: "flex", flexDirection:"column", gap:"70px"}}>
    <Root >
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

        {direction === "horizontal" && poster?.url && (
          <ImageAnimatedWrapper
            {...{
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { ease: "easeOut", duration: 0.4, delay: 0.5 },
            }}
          >
            <Photo src={poster?.url} direction={direction} />
          </ImageAnimatedWrapper>
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
      {direction === "vertical" && poster?.url && (
        <ImageAnimatedWrapper
          {...{
            initial: { translateX: "100%", opacity: 0 },
            whileInView: { translateX: "0%", opacity: 1 },
            viewport: { once: true },
            transition: { ease: "easeOut", duration: 0.4 },
          }}
        >
          <Photo src={poster?.url} direction={direction} />
        </ImageAnimatedWrapper>
      )}
    </Root>
    <Gallery items={images?.map((img) => img?.url).filter(Boolean) as string[]} />
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
    images{
      url
    }
  }
`;
