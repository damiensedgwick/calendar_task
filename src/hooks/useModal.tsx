import { useState } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => setShowModal(!showModal);

  return { showModal, toggleModal };
};
