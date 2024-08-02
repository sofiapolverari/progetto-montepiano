import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Gallery } from "../components/gallery/gallery";
import { GalleryItem } from "../components/gallery/gallery-item/gallery-item";
import { mockGalleryItems } from "../components/gallery/gallery.fixture";

const GalleryTest: React.FC<PageProps> = () => {
  return <Gallery {...mockGalleryItems} />;
};

export default Gallery;

export const Head: HeadFC = () => <title>Gallery</title>;
