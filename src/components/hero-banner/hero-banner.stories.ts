import type { Meta, StoryObj } from "@storybook/react";
import { HeroBanner } from "./hero-banner";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof HeroBanner> = {
  title: "Components/HeroBanner",
  component: HeroBanner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof HeroBanner>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    imageUrl:
      "https://scontent.ffco3-1.fna.fbcdn.net/v/t1.18169-9/22528537_1444289959022787_4826897574025966062_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=2a1932&_nc_ohc=RvAYUlWENW0Q7kNvgF4UIU_&_nc_ht=scontent.ffco3-1.fna&oh=00_AYApxbigYYXOjZX8ANQ57EM-LMzIcl0B3K1278ovMKdRAg&oe=66ACBE37",

    color: "alabaster",
  },
};

export const PakistanGreen: Story = {
  args: {
    imageUrl:
      "https://scontent.ffco3-1.fna.fbcdn.net/v/t1.18169-9/22528537_1444289959022787_4826897574025966062_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=2a1932&_nc_ohc=RvAYUlWENW0Q7kNvgF4UIU_&_nc_ht=scontent.ffco3-1.fna&oh=00_AYApxbigYYXOjZX8ANQ57EM-LMzIcl0B3K1278ovMKdRAg&oe=66ACBE37",

    color: "pakistan-green",
  },
};
