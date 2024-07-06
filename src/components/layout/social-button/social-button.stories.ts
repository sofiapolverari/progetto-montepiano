import type { Meta, StoryObj } from "@storybook/react";

import { SocialButton } from "./social-button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof SocialButton> = {
  title: "Layout/SocialButton",
  component: SocialButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof SocialButton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    linkUrl:
      "https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fproloco.montepiano%2F%3Flocale%3Dit_IT",
    icon: "facebook",
  },
};

export const Instagram: Story = {
  args: {
    linkUrl: "https://www.instagram.com/prolocomontepiano/",
    icon: "instagram",
  },
};

export const Whatsapp: Story = {
  args: {
    linkUrl: "https://www.google.com",
    icon: "whatsapp",
  },
};
