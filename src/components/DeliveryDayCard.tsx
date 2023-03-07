interface DeliveryDayCardProps {
  showModal: boolean;
  toggleModal: () => void;
  deliveryDayDate: Date;
}

export const DeliveryDayCard = ({
  showModal,
  toggleModal,
  deliveryDayDate,
}: DeliveryDayCardProps) => {
  console.log(deliveryDayDate);

  return (
    <div>
      <p>Delivery Day Card</p>
      <p>{deliveryDayDate.toDateString()}</p>
      <button onClick={toggleModal} style={{ margin: "1rem" }}>
        {showModal ? "Close" : "Open"}
      </button>
    </div>
  );
};
