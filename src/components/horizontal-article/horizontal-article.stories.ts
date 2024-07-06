import type { Meta, StoryObj } from "@storybook/react";

import { HorizontalArticle } from "./horizontal-article";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof HorizontalArticle> = {
  title: "Components/HorizontalArticle",
  component: HorizontalArticle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof HorizontalArticle>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    color: "pakistan-green",
    title: "Aperitivo Erbomagico",
    dateLabel: "25 Giugno ore 18.00",
    imageUrl: "https://www.chairoffice.co.uk/media/17298/paper-sizes.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra.",
  },
};
export const FieldDrab: Story = {
  args: {
    color: "field-drab",
    title: "Aperitivo Erbomagico",
    dateLabel: "25 Giugno ore 18.00",
    imageUrl: "https://www.chairoffice.co.uk/media/17298/paper-sizes.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra.",
  },
};
export const Chestnut: Story = {
  args: {
    color: "chestnut",
    title: "Aperitivo Erbomagico",
    dateLabel: "25 Giugno ore 18.00",
    imageUrl: "https://www.chairoffice.co.uk/media/17298/paper-sizes.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra.",
  },
};
export const BrunswickGreen: Story = {
  args: {
    color: "brunswick-green",
    title: "Aperitivo Erbomagico",
    dateLabel: "25 Giugno ore 18.00",
    imageUrl: "https://www.chairoffice.co.uk/media/17298/paper-sizes.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra.",
  },
};
