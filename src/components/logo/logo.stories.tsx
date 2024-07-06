import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "./logo";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    color: "alabaster",
  },
};

export const PakistanGreen: Story = {
  args: {
    color: "pakistan-green",
  },
};
