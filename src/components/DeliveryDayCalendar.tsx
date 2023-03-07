import { animated, useSpring } from "@react-spring/web";
import { useDeliveryDayDate } from "../hooks";
import { Calendar as ReactCalendar } from "react-calendar";
import { getDisabledTiles, formatShortWeekday, tileClassName } from "utils";
import { useState } from "react";

interface DeliveryDayCalenderProps {
  toggleModal: () => void;
  deliveryDayDate: Date;
  updateDeliveryDayDate: (date: Date) => void;
}

export const DeliveryDayCalendar = ({
  toggleModal,
  deliveryDayDate,
  updateDeliveryDayDate,
}: DeliveryDayCalenderProps) => {
  const [newDeliveryDate, setNewDeliveryDate] = useState<Date>(deliveryDayDate);
  const { currentMonth, currentYear } = useDeliveryDayDate();

  const springs = useSpring({
    from: { y: 100 },
    to: { y: -100 },
  });

  return (
    <animated.div
      className="delivery-day-calendar"
      style={{
        ...springs,
      }}
    >
      <p>{currentMonth + " " + currentYear}</p>

      <ReactCalendar
        value={newDeliveryDate ? newDeliveryDate : deliveryDayDate}
        onChange={(e: Date) => setNewDeliveryDate(e)}
        showNavigation={false}
        formatShortWeekday={formatShortWeekday}
        tileDisabled={getDisabledTiles}
        tileClassName={tileClassName}
      />

      <div>
        <button onClick={toggleModal}>
          cancel, <br /> don't change
        </button>
        <button
          onClick={() => {
            updateDeliveryDayDate(newDeliveryDate);
            toggleModal();
          }}
        >
          change date
        </button>
      </div>
    </animated.div>
  );
};
