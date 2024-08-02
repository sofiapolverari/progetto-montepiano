import type { Meta, StoryObj } from "@storybook/react";
import { Gallery } from "./gallery";
import { galleryItems } from "./gallery.fixture";

const meta: Meta<typeof Gallery> = {
  title: "Components/Gallery",
  component: Gallery,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Gallery>;

export const Default: Story = {
  args: {
    items: galleryItems,
  },
};
