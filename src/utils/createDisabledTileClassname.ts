import { getDisabledTiles } from "./getDisabledTiles";

export const tileClassName = ({ date }: { date: Date }) => {
  if (getDisabledTiles({ date })) {
    return "disabled";
  }

  return null;
};
