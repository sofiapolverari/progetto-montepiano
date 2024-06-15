import type { Meta, StoryObj } from "@storybook/react";

import { HamburgerButton } from "./hamburger-button";
const meta: Meta<typeof HamburgerButton> = {
  title: "Components/HamburgerButton",
  component: HamburgerButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof HamburgerButton>;

export const Default: Story = {
  args: {
    color: "pakistan-green",
  },
};

export const FieldDrab: Story = {
  args: {
    color: "field-drab",
  },
};

export const Chestnut: Story = {
  args: {
    color: "chestnut",
  },
};

export const BrunswickGreen: Story = {
  args: {
    color: "brunswick-green",
  },
};
