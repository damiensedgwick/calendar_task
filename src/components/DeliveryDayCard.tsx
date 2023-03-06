interface DeliveryDayCardProps {
  showModal: boolean;
  toggleModal: () => void;
}

export const DeliveryDayCard = ({
  showModal,
  toggleModal,
}: DeliveryDayCardProps) => {
  return (
    <button onClick={toggleModal} style={{ margin: "1rem" }}>
      {showModal ? "Close" : "Open"}
    </button>
  );
};
