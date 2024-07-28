import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedWrapper } from "./animated-wrapper";
import React from "react";
import { LeafGrid } from "../leaf-grid/leaf-grid";
//TODO hai cambiato roba nelle props, va sistemato
//TODO portare tutto in fixture, non voglio vedere nessuna costante duplicata

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof AnimatedWrapper> = {
  title: "Components/AnimatedWrapper",
  component: AnimatedWrapper,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "alabaster",
      values: [{ name: "alabaster", value: "#e9e5d9" }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AnimatedWrapper>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    direction: "left",
    children: (
      <LeafGrid
        items={[
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "pakistan-green",
          },
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "pakistan-green",
          },
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "pakistan-green",
          },
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "pakistan-green",
          },
        ]}
      />
    ),
  },
};

export const FieldDrab: Story = {
  args: {
    direction: "left",
    children: (
      <LeafGrid
        items={[
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "field-drab",
          },
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "field-drab",
          },
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "field-drab",
          },
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "field-drab",
          },
        ]}
      />
    ),
  },
};

export const Chestnut: Story = {
  args: {
    direction: "left",
    children: (
      <LeafGrid
        items={[
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "chestnut",
          },
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "chestnut",
          },
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "chestnut",
          },
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "chestnut",
          },
        ]}
      />
    ),
  },
};
export const BrunswickGreen: Story = {
  args: {
    direction: "left",
    children: (
      <LeafGrid
        items={[
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "brunswick-green",
          },
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "brunswick-green",
          },
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "brunswick-green",
          },
          {
            date: "21 Maggio",
            title: "Festa della Rificolona",
            linkUrl: "www.google.it",
            imageUrl:
              "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
            color: "brunswick-green",
          },
        ]}
      />
    ),
  },
};
