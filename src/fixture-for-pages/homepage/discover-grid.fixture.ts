import { LeafCardEventProps } from "../../components/leaf-grid/leaf-card-event/leaf-card-event";
import { LeafGridProps } from "../../components/leaf-grid/leaf-grid";

export const mockDiscoverGrid : LeafGridProps = {
items: new Array(2).fill(0).map<LeafCardEventProps>((_, i) => ({
    title: i?"Storia":"Cosa visitare",
    linkUrl: "www.google.it",
    imageUrl:
      "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
    color: "field-drab",
}))
}