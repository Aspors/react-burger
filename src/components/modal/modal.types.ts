import { ReactNode } from "react";

export type TModal = {
  children: ReactNode;
  handleShowModal: () => void;
  header?: string | null;
};
