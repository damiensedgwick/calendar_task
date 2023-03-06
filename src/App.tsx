import { DeliveryDayCalendar, DeliveryDayCard, Modal } from "components";
import { useModal } from "hooks";

export const App = () => {
  const { showModal, toggleModal } = useModal();

  return (
    <div className="app">
      <DeliveryDayCard showModal={showModal} toggleModal={toggleModal} />

      {showModal && (
        <Modal>
          <DeliveryDayCalendar toggleModal={toggleModal} />
        </Modal>
      )}
    </div>
  );
};
