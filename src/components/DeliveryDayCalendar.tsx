import { animated, useSpring } from "@react-spring/web";
import { useDeliveryDayDate } from "../hooks";
import { Calendar as ReactCalendar } from "react-calendar";

interface DeliveryDayCalenderProps {
  toggleModal: () => void;
}

export const DeliveryDayCalendar = ({
  toggleModal,
}: DeliveryDayCalenderProps) => {
  const { deliveryDayDate, currentMonth, currentYear, updateDeliveryDayDate } =
    useDeliveryDayDate();

  const springs = useSpring({
    from: { y: 100 },
    to: { y: -100 },
  });

  const formatShortWeekday = (locale: string, date: Date) => {
    return date.toLocaleDateString(locale, { weekday: "short" })[0];
  };

  const tileDisabled = ({ date }: { date: Date }) => {
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

  const tileClassName = ({ date }: { date: Date }) => {
    if (tileDisabled({ date })) {
      return "disabled";
    }

    return null;
  };

  return (
    <animated.div
      className="delivery-day-calendar"
      style={{
        ...springs,
      }}
    >
      <p>{currentMonth + " " + currentYear}</p>

      <ReactCalendar
        value={deliveryDayDate}
        onChange={(e: Date) => updateDeliveryDayDate(e)}
        showNavigation={false}
        formatShortWeekday={formatShortWeekday}
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
      />

      <div>
        <button onClick={toggleModal}>
          cancel, <br /> don't change
        </button>
        <button>change date</button>
      </div>
    </animated.div>
  );
};
