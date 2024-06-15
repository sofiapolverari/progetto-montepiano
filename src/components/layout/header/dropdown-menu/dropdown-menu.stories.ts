import type { Meta, StoryObj } from "@storybook/react";

import { DropdownMenu } from "./dropdown-menu";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const defaultArgs = {
  isOpen: true,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    color: "pakistan-green",
  },
};

export const FieldDrab: Story = {
  args: {
    ...defaultArgs,
    color: "field-drab",
  },
};

export const Chestnut: Story = {
  args: {
    ...defaultArgs,
    color: "chestnut",
  },
};

export const BrunswickGreen: Story = {
  args: {
    ...defaultArgs,
    color: "brunswick-green",
  },
};
