import type { Meta, StoryObj } from "@storybook/react";

import { LeafButton } from "./leaf-button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof LeafButton> = {
  title: "Components/LeafButton",
  component: LeafButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof LeafButton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    color: "pakistan-green",
    label: "Entra",
  },
};

export const LongText: Story = {
  args: {
    color: "pakistan-green",
    label: "Scopri tutti gli Eventi",
  },
};

export const FieldDrab: Story = {
  args: {
    color: "field-drab",
    label: "Entra",
  },
};

export const Chestnut: Story = {
  args: {
    color: "chestnut",
    label: "Entra",
  },
};

export const BrunswickGreen: Story = {
  args: {
    color: "brunswick-green",
    label: "Entra",
  },
};
