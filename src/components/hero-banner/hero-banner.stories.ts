import type { Meta, StoryObj } from "@storybook/react";
import { HeroBanner } from "./hero-banner";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof HeroBanner> = {
  title: "Components/HeroBanner",
  component: HeroBanner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof HeroBanner>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    color: "pakistan-green",
  },
};

export const Alabaster: Story = {
  args: {
    color: "alabaster",
  },
};
