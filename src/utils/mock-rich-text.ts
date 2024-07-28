export const mockRichText = (...paragraphs: string[]) => {
  return {
    raw: JSON.stringify({
      nodeType: "document",
      data: {},
      content: paragraphs.map((text) => ({
        nodeType: "paragraph",
        data: {},
        content: [{ nodeType: "text", value: text, marks: [], data: {} }],
      })),
    }),
  };
};
