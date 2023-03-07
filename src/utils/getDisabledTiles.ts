export const getDisabledTiles = ({ date }: { date: Date }) => {
  switch (date.getDay()) {
    case 0:
      return false;
    case 1:
      return false;
    case 2:
      return true;
    case 3:
      return false;
    case 4:
      return false;
    case 5:
      return true;
    case 6:
      return true;
    default:
      return false;
  }
};
