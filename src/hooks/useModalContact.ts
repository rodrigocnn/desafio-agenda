import { useContext, useState } from "react";
import { toast } from "react-toastify";

import { ContactsContext } from "../shared/context/ContactsContext";
import { Contact, FieldValidate } from "../shared/interfaces";
import { api } from "../services/api";
import { contactSchema } from "../validations";
import { ValidationError } from "yup";

export function useModalContact() {
  const { openModal, setOpenModal, setUpdateGrid, updateGrid } =
    useContext(ContactsContext);
  const [contact, setContact] = useState<Contact>();
  const [validations, setValidations] = useState<FieldValidate>();

  const handleCloseModal = () => {
    setOpenModal(false);
    setValidations(undefined);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    setContact({ ...contact, [fieldName]: value } as Contact);
    setValidations(undefined);
  };

  const validation = async () => {
    try {
      await contactSchema.validate(contact);
      return true;
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        toast(error.errors[0], { type: "error" });
        const fieldNameValidation = {
          fieldName: error.path as string,
          validate: false,
        };
        setValidations(fieldNameValidation);
      }

      return false;
    }
  };

  const handleInputError = (field: string) => {
    return validations?.fieldName === field && !validations.validate;
  };

  const onSubmit = async (
    event: React.FormEvent<EventTarget | HTMLFormElement>
  ) => {
    event.preventDefault();
    setValidations(undefined);

    if (await validation()) {
      const response = await api.post("contacts", contact);
      if (response.data) {
        setUpdateGrid(!updateGrid);
        toast("Novo Contato Salvo com Sucesso", { type: "success" });
      } else {
        toast("Não foi possivel realizar operação", { type: "error" });
      }
    }
  };

  return {
    openModal,
    validations,
    handleInputError,
    handleCloseModal,
    handleChange,
    onSubmit,
  };
}
