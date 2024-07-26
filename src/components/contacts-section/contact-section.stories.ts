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
    layout: "center",
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
    body: "Mazzetti Elena",
    icon: "consiglio",
  },
};

export const UfficioInfo: Story = {
  args: {
    title: "Ufficio Informazioni",
    body: "Via della Badia, 44 - Montepiano (PO) +39 0574 959031 +39 350 097 0030 info@prolocomontepiano.com ",
    icon: "telefono",
  },
};

export const ComeRaggiungerci: Story = {
  args: {
    title: "Come Raggiungerci",
    body: "A1- Autostrada del Sole Casello di Prato - Calenzano 35 km Raccordo con la strada provinciale 325 Casello di Barberino del Mugello 17 km Raccordo con la strada provinciale 325",
    icon: "posizione",
  },
};
