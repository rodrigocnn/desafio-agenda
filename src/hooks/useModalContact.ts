import { useContext, useState } from "react";
import { toast } from "react-toastify";

import { ContactsContext } from "../shared/context/ContactsContext";
import { Contact } from "../shared/interfaces";
import { api } from "../services/api";

export function useModalContact() {
  const { openModal, setOpenModal, setUpdateGrid } =
    useContext(ContactsContext);
  const [contact, setContact] = useState<Contact>();

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    setContact({ ...contact, [fieldName]: value } as Contact);
  };

  const onSubmit = async (
    event: React.FormEvent<EventTarget | HTMLFormElement>
  ) => {
    event.preventDefault();
    const response = await api.post("contacts", contact);
    if (response.data) {
      setUpdateGrid(true);
      toast("Novo Contato Salvo com Sucesso", { type: "success" });
    }
  };

  return {
    openModal,
    handleCloseModal,
    handleChange,
    onSubmit,
  };
}
