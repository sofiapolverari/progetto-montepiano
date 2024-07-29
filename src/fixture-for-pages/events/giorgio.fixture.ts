import { BlogEntryProps } from "../../components/blog-entry/blog-entry";
import { mockBlogEntry } from "../../components/blog-entry/blog-entry.mock";

export const mockGiorgio: BlogEntryProps = {
  ...mockBlogEntry,
  color: "chestnut",
  title: "Aperitivo Erbomagico",
  poster: {
    url: "https://www.fineprint.co.uk/wp-content/uploads/2022/05/A-PaperSizes-768x1009.jpg",
  },
  direction: "vertical",
};
