import { LeafGridProps } from "../../components/leaf-grid/leaf-grid";

export const mockLeafGrid: LeafGridProps = {
  items: new Array(27).fill({
    date: "21 Maggio",
    title: "Festa della Rificolona",
    linkUrl: "www.google.it",
    imageUrl:
      "https://www.prolocomontepiano.com/wp-content/uploads/2023/08/manhattan-768x1086.jpg",
    color: "chestnut",
  }),
  itemSize: "big",
};
