import { LeafCardEventProps } from "../../components/leaf-grid/leaf-card-event/leaf-card-event";
import { LeafGridProps } from "../../components/leaf-grid/leaf-grid";

export const mockEventGrid : LeafGridProps = {
items: new Array(3).fill(0).map<LeafCardEventProps>(() => ({
    date: "21 Maggio",
    title: "Festa della Rificolona",
    linkUrl: "www.google.it",
    imageUrl:
      "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
    color: "pakistan-green",
}))
}