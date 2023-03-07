import { format } from "date-fns";
import van from "assets/van.svg";
import calendar from "assets/calendar.svg";

interface DeliveryDayCardProps {
  showModal: boolean;
  toggleModal: () => void;
  deliveryDayDate: Date;
}

export const DeliveryDayCard = ({
  toggleModal,
  deliveryDayDate,
}: DeliveryDayCardProps) => {
  return (
    <div className="delivery-day-card">
      <div className="card-header">
        <p>
          Choose your delivery <br />
          day <span>Delivery is always free</span>
        </p>
      </div>
      <div className="card-body">
        <div className="card-body-left">
          <p>{format(deliveryDayDate, "EEE MMMM dd")}</p>
          <div>
            <img src={van} alt="A small illustrative van icon" />
            <small>Earliest delivery</small>
          </div>
        </div>
        <div className="card-body-right">
          <button onClick={toggleModal}>
            <img src={calendar} alt="A small illustrative van icon" />
            <small>{`${format(deliveryDayDate, "dd")}`}</small>
            <span>Change &gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
