import { mockImg } from "../../utils/mock-img";
import { mockRichText } from "../../utils/mock-rich-text";
import { BlogEntryProps } from "./blog-entry";

export const mockBlogEntry:BlogEntryProps = {
    color: "pakistan-green",
    title: "Aperitivo Erbomagico",
    date: "2024-07-18T10:10",
    poster:mockImg({width:1080, height:1920}),
    body: mockRichText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus diam lorem, quis malesuada dolor aliquet at. Pellentesque dignissim ipsum vel sapien commodo porta. Nam eleifend lorem vitae lacus dictum, eu porttitor dui pharetra."),
    direction: "horizontal",
}