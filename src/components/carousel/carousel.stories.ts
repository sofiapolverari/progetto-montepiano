import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./carousel";
import { carouselItems } from "./carousel.fixture";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    items:carouselItems
  },
};