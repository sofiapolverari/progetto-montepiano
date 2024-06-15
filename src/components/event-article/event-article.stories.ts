import type { Meta, StoryObj } from "@storybook/react";

import { EventArticle } from "./event-article";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof EventArticle> = {
  title: "Components/EventArticle",
  component: EventArticle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof EventArticle>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    title: "Aperitivo Erbomagico",
    dateLabel: "25 Giugno ore 18.00",
    imageUrl:
      "https://www.artigrafichevilla.it/wp-content/uploads/2022/03/dimensioni-a4-formato35434.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra.",
  },
};
