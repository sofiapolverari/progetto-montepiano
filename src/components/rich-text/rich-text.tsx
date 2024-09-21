import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import React, { FC } from "react";
import styled from "styled-components";

interface RichTextProps {
  raw?: string | null;
}

const Body = styled.div`
  white-space: break-spaces;
`

const OrderedList = styled.ol`
  list-style-type: decimal;
  padding-left: 16px;
  & li {
    margin: 12px 0px;
  }
`

const UnorderedList = styled.ol`
  list-style-type: disc;
  padding-left: 16px;
  & li {
    margin: 12px 0px;
  }
`

const Quote= styled.div`
  font-style: italic;
`
export const RichText: FC<RichTextProps> = ({ raw, ...props }) => {
  return (
    <Body {...props}>
      {raw &&
        documentToReactComponents(JSON.parse(raw), {
          renderText: (text) => {
            return text
              .split("\n")
              .reduce<(string | JSX.Element | false)[]>((acc, textSegment, index) => {
                return [...acc, index > 0 && <br key={index} />, textSegment];
              }, []);
          },
          renderNode: {
            [BLOCKS.PARAGRAPH]: (_, children) => <p>{children}</p>,
            [BLOCKS.HEADING_1]: (_, children) => <h1>{children}</h1>,
            [BLOCKS.HEADING_2]: (_, children) => <h2>{children}</h2>,
            [BLOCKS.HEADING_3]: (_, children) => <h3>{children}</h3>,
            [BLOCKS.HEADING_4]: (_, children) => <h4>{children}</h4>,
            [BLOCKS.HEADING_5]: (_, children) => <h5>{children}</h5>,
            [BLOCKS.HEADING_6]: (_, children) => <h6>{children}</h6>,
            [BLOCKS.OL_LIST]: (_, children) => <OrderedList>{children}</OrderedList>,
            [BLOCKS.UL_LIST]: (_, children) => <UnorderedList>{children}</UnorderedList>,
            [BLOCKS.LIST_ITEM]: (_, children) => <li>{children}</li>,
            [BLOCKS.QUOTE]: (_, children) => <Quote>{children}</Quote>,
          },
        })}
    </Body>
  );
};
