type Props = {
  width?: number;
  height?: number;
  backgroundColor?: string;
  textColor?: string;
};

export const mockImg = ({
  width = 1920,
  height = 1080,
  backgroundColor = "DEDEDE",
  textColor = "FFFFFF",
}: Props = {}) => {
  return {url:`https://placehold.co/${width}x${height}/${backgroundColor}/${textColor}/png`};
};
