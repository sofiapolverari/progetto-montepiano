import { carouselItems } from "../../components/carousel/carousel.fixture";
import { FooterProps } from "../../components/layout/footer/footer";

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

export const mockFooter: FooterProps = {
  linkUrl: linkUrl,
  body: body,
  carouselItems: carouselItems,
  color: "chestnut",
};
