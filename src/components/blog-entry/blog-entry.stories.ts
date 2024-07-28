import type { Meta, StoryObj } from "@storybook/react";

import { BlogEntry } from "./blog-entry";
import { blogEntryMock } from "./blog-entry.mock";

//TODO portare tutto in fixture, non voglio vedere nessuna costante duplicata

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof BlogEntry> = {
  title: "Components/Article",
  component: BlogEntry,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof BlogEntry>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    ...blogEntryMock
  },
};
export const FieldDrab: Story = {
  args: {
    ...blogEntryMock,
    color: "field-drab",
  },
};
export const Chestnut: Story = {
  args: {
    ...blogEntryMock,
    color: "chestnut",
  },
};
export const BrunswickGreen: Story = {
  args: {
    ...blogEntryMock,
    color: "brunswick-green",
  },
};

export const Vertical: Story = {
  args: {
    ...blogEntryMock,
    direction: "vertical",
  },
};
