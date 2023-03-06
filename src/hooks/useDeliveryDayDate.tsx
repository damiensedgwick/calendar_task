import { useState } from "react";
import { format } from "date-fns";

export const useDeliveryDayDate = () => {
  const [deliveryDayDate, setDeliveryDayDate] = useState<Date>(new Date());

  console.log("deliveryDayDate", deliveryDayDate);

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
  };
};
