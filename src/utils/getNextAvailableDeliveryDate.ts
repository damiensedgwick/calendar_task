export const getNextAvailableDeliveryDate = (date: Date): Date => {
  let nextAvailableDate = new Date(date);

  const day = date.getDay();

  if (day === 2 || day === 6) {
    nextAvailableDate.setDate(date.getDate() + 1);
  }

  if (day === 5) {
    nextAvailableDate.setDate(date.getDate() + 2);
  }

  return nextAvailableDate;
};
