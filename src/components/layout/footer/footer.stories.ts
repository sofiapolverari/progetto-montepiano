import type { Meta, StoryObj } from "@storybook/react";

import { Footer, FooterProps } from "./footer";
import { carouselItems } from "../../carousel/carousel.fixture";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;
const linkUrl = [
  "https://www.facebook.com/proloco.montepiano/?locale=it_IT",
  "https://www.instagram.com/prolocomontepiano/",
  "https://www.google.com/?hl=it",
];

const body = [
  "Sede Sociale: Via Badia, 46 - 59026 Montepiano (PO)",
  "Tel. 0574959031 C.F. 03734140480 P.IVA 00320920978",
  "Ufficio Informazioni: Via Badia, 44 - 59026 Montepiano (PO) info@prolocomontepiano.com prolocomontepiano@pec.it",
];

const standardArgs: Partial<FooterProps> = {
  linkUrl: linkUrl,
  body: body,
  carouselItems: carouselItems,
};

export const Default: Story = {
  args: {
    ...standardArgs,
    color: "pakistan-green",
  },
};

export const FieldDrab: Story = {
  args: {
    ...standardArgs,
    color: "field-drab",
  },
};

export const Chestnut: Story = {
  args: {
    ...standardArgs,
    color: "chestnut",
  },
};

export const BrunswickGreen: Story = {
  args: {
    ...standardArgs,
    color: "brunswick-green",
  },
};
