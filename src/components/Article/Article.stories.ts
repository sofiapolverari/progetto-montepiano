import type { Meta, StoryObj } from "@storybook/react";

import { Article } from "./article";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Article> = {
  title: "Components/Article",
  component: Article,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof Article>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    color: "pakistan-green",
    title: "Aperitivo Erbomagico",
    dateLabel: "25 Giugno ore 18.00",
    imageUrl: "https://www.chairoffice.co.uk/media/17298/paper-sizes.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra.",
    direction: "horizontal",
  },
};
export const FieldDrab: Story = {
  args: {
    color: "field-drab",
    title: "Aperitivo Erbomagico",
    dateLabel: "25 Giugno ore 18.00",
    imageUrl:
      "https://www.fineprint.co.uk/wp-content/uploads/2022/05/A-PaperSizes-768x1009.jpg",

    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra.",
    direction: "horizontal",
  },
};
export const Chestnut: Story = {
  args: {
    color: "chestnut",
    title: "Aperitivo Erbomagico",
    dateLabel: "25 Giugno ore 18.00",
    imageUrl: "https://www.chairoffice.co.uk/media/17298/paper-sizes.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra.",
    direction: "horizontal",
  },
};
export const BrunswickGreen: Story = {
  args: {
    color: "brunswick-green",
    title: "Aperitivo Erbomagico",
    dateLabel: "25 Giugno ore 18.00",
    imageUrl:
      "https://www.fineprint.co.uk/wp-content/uploads/2022/05/A-PaperSizes-768x1009.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra.",
    direction: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    color: "pakistan-green",
    title: "Aperitivo Erbomagico",
    dateLabel: "25 Giugno ore 18.00",
    imageUrl: "https://www.chairoffice.co.uk/media/17298/paper-sizes.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra.",
    direction: "vertical",
  },
};
