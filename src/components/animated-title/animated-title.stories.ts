import type { Meta, StoryObj } from "@storybook/react";

import { AnimatedTitle } from "./animated-title";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof AnimatedTitle> = {
  title: "Components/AnimatedTitle",
  component: AnimatedTitle,

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
type Story = StoryObj<typeof AnimatedTitle>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    color: "pakistan-green",
    label: "Dove Siamo",
    direction: "left",
  },
};

export const FieldDrab: Story = {
  args: {
    color: "field-drab",
    label: "Scopri Montepiano",
    direction: "right",
  },
};

export const Chestnut: Story = {
  args: {
    color: "chestnut",
    label: "Eventi in Evidenza",
    direction: "left",
  },
};

export const BrunswickGreen: Story = {
  args: {
    color: "brunswick-green",
    label: "Chalet di Montepiano",
    direction: "right",
  },
};
