import React from "react";

export interface ModalProps {
  modalOpen: boolean,
  setModalOpen: (open: boolean) => boolean | void,
  children: React.ReactNode
}