import type { Meta, StoryObj } from "@storybook/react";

import { LeafCardSection } from "./leaf-card-section";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof LeafCardSection> = {
  title: "Components/LeafCardEvent",
  component: LeafCardSection,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof LeafCardSection>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    color: "pakistan-green",
    date: "21 Maggio",
    title: "Festa della Rificolona",
    linkUrl: "www.google.it",
    imageUrl:
      "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
  },
};

export const FieldDrab: Story = {
  args: {
    color: "field-drab",
    date: "21 Maggio",
    title: "Festa della Rificolona",
    linkUrl: "www.google.it",
    imageUrl:
      "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
  },
};

export const Chestnut: Story = {
  args: {
    color: "chestnut",
    date: "21 Maggio",
    title: "Festa della Rificolona",
    linkUrl: "www.google.it",
    imageUrl:
      "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
  },
};

export const BrunswickGreen: Story = {
  args: {
    color: "brunswick-green",
    date: "21 Maggio",
    title: "Festa della Rificolona",
    linkUrl: "www.google.it",
    imageUrl:
      "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
  },
};
