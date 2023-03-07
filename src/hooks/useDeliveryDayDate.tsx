import { useState } from "react";
import { format } from "date-fns";
import { getNextAvailableDeliveryDate } from "utils";

export const useDeliveryDayDate = () => {
  const [deliveryDayDate, setDeliveryDayDate] = useState<Date>(
    getNextAvailableDeliveryDate(new Date()),
  );

  const currentMonth = format(deliveryDayDate, "MMMM");
  const currentYear = format(deliveryDayDate, "yyyy");

  const updateDeliveryDayDate = (date: Date) => {
    setDeliveryDayDate(date);
  };

  return {
    currentMonth,
    currentYear,
    deliveryDayDate,
    updateDeliveryDayDate,
    setDeliveryDayDate,
  };
};
