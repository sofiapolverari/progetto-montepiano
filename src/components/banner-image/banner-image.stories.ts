import type { Meta, StoryObj } from "@storybook/react";

import { BannerImage } from "./banner-image";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof BannerImage> = {
  title: "Components/BannerImage",
  component: BannerImage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof BannerImage>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    color: "pakistan-green",
    label: "Scopri",
    direction: "left",
    linkUrl: "https://www.prolocomontepiano.com/",
    imageUrl:
      "https://www.infobuild.it/wp-content/uploads/progettazione-case-di-campagna.jpg",
  },
};

export const FieldDrab: Story = {
  args: {
    color: "field-drab",
    label: "Scopri",
    direction: "left",
    linkUrl: "https://www.prolocomontepiano.com/",
    imageUrl:
      "https://www.infobuild.it/wp-content/uploads/progettazione-case-di-campagna.jpg",
  },
};

export const Chestnut: Story = {
  args: {
    color: "chestnut",
    label: "Scopri",
    direction: "left",
    linkUrl: "https://www.prolocomontepiano.com/",
    imageUrl:
      "https://www.infobuild.it/wp-content/uploads/progettazione-case-di-campagna.jpg",
  },
};

export const BrunswickGreen: Story = {
  args: {
    color: "brunswick-green",
    label: "Scopri",
    direction: "left",
    linkUrl: "https://www.prolocomontepiano.com/",
    imageUrl:
      "https://www.infobuild.it/wp-content/uploads/progettazione-case-di-campagna.jpg",
  },
};
