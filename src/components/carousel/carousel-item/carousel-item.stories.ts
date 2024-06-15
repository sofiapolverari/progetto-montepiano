import type { Meta, StoryObj } from "@storybook/react";

import { CarouselItem } from "./carousel-item";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CarouselItem> = {
  title: "Components/CarouselItem",
  component: CarouselItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof CarouselItem>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    linkUrl: "https://www.prolocomontepiano.com/",
    imageUrl:
      "https://www.prolocomontepiano.com/wp-content/uploads/2023/06/Banner-25x1m_page-0002.jpg",
  },
};
