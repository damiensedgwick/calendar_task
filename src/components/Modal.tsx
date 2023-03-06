import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return <div className="modal">{children}</div>;
};
