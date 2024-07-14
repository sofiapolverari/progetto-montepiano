import type { Meta, StoryObj } from "@storybook/react";
import { ContactSection } from "./contact-section";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ContactSection> = {
  title: "Components/ContactSection",
  component: ContactSection,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "alabaster",
      values: [{ name: "alabaster", value: "#e9e5d9" }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactSection>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: "CONSIGLIO DIRETTIVO",
    subtitle: "Presidente",
    body: "Mazzetti Elena",
  },
};
