import { DeliveryDayCalendar, DeliveryDayCard, Modal } from "components";
import { useDeliveryDayDate, useModal } from "hooks";

export const App = () => {
  const { showModal, toggleModal } = useModal();
  const { deliveryDayDate, updateDeliveryDayDate } = useDeliveryDayDate();

  return (
    <div className="app">
      <DeliveryDayCard
        showModal={showModal}
        toggleModal={toggleModal}
        deliveryDayDate={deliveryDayDate}
      />

      {showModal && (
        <Modal>
          <DeliveryDayCalendar
            toggleModal={toggleModal}
            deliveryDayDate={deliveryDayDate}
            updateDeliveryDayDate={updateDeliveryDayDate}
          />
        </Modal>
      )}
    </div>
  );
};
