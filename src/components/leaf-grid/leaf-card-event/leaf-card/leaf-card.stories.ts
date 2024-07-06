import type { Meta, StoryObj } from "@storybook/react";

import { LeafCard } from "./leaf-card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof LeafCard> = {
  title: "Components/LeafCardEvent/LeafCard",
  component: LeafCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof LeafCard>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    color: "pakistan-green",
    label: "Villa Sperling",
    linkUrl: "https://www.prolocomontepiano.com/",
    imageUrl:
      "https://www.infobuild.it/wp-content/uploads/progettazione-case-di-campagna.jpg",
  },
};

export const FieldDrab: Story = {
  args: {
    color: "field-drab",
    label: "Villa Sperling",
    linkUrl: "https://www.prolocomontepiano.com/",
    imageUrl:
      "https://www.infobuild.it/wp-content/uploads/progettazione-case-di-campagna.jpg",
  },
};

export const Chestnut: Story = {
  args: {
    color: "chestnut",
    label: "Villa Sperling",
    linkUrl: "https://www.prolocomontepiano.com/",
    imageUrl:
      "https://www.infobuild.it/wp-content/uploads/progettazione-case-di-campagna.jpg",
  },
};

export const BrunswickGreen: Story = {
  args: {
    color: "brunswick-green",
    label: "Villa Sperling",
    linkUrl: "https://www.prolocomontepiano.com/",
    imageUrl:
      "https://www.infobuild.it/wp-content/uploads/progettazione-case-di-campagna.jpg",
  },
};
