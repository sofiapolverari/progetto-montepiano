import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./header";
const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;
const linkUrl = [
  "https://www.facebook.com/proloco.montepiano/?locale=it_IT",
  "https://www.instagram.com/prolocomontepiano/",
  "https://www.google.com/?hl=it",
];

export const Default: Story = {
  args: {
    facebookUrl: linkUrl[0],
    instagramUrl: linkUrl[1],
    whatsappUrl: linkUrl[2],

    color: "pakistan-green",
  },
};

export const FieldDrab: Story = {
  args: {
    ...Default.args,
    color: "field-drab",
  },
};

export const Chestnut: Story = {
  args: {
    ...Default.args,
    color: "chestnut",
  },
};

export const BrunswickGreen: Story = {
  args: {
    ...Default.args,
    color: "brunswick-green",
  },
};
