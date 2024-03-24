/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { ContactsContext } from "../shared/context/ContactsContext";
import { Contact, FieldValidate } from "../shared/interfaces";
import { api } from "../services/api";
import { contactSchema } from "../validations";
import { ValidationError } from "yup";

export function useModalContact() {
  const {
    contacts,
    openModal,
    setOpenModal,
    setUpdateGrid,
    updateGrid,
    contactSelected,
  } = useContext(ContactsContext);
  const [contact, setContact] = useState<Contact>();
  const [validations, setValidations] = useState<FieldValidate>();

  const filterContactUpdate = () => {
    return contacts.find((item: Contact) => item.id === contactSelected);
  };

  useEffect(() => {
    async function getContactUpdate() {
      const contactFiltered = await filterContactUpdate();
      setContact(contactFiltered);
    }

    getContactUpdate();
  }, [contactSelected]);

  const handleCloseModal = () => {
    setOpenModal(false);
    setValidations(undefined);
  };

  const phoneMask = (value: string): string => {
    const numero = value.replace(/\D/g, "");
    if (numero.length >= 2 && numero.length <= 6) {
      return `(${numero.substring(0, 2)}) ${numero.substring(2)}`;
    } else if (numero.length > 6) {
      return `(${numero.substring(0, 2)}) ${numero.substring(
        2,
        6
      )}-${numero.substring(6, 10)}`;
    }

    return numero;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    const handleValue = fieldName === "name" ? value : phoneMask(value);
    setContact({ ...contact, [fieldName]: handleValue } as Contact);
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
      let response = null;
      if (contactSelected) {
        response = await api.put(`contacts/${contactSelected}`, contact);
      } else {
        response = await api.post("contacts", contact);
      }

      if (response.data) {
        setUpdateGrid(!updateGrid);
        toast("Novo Contato Salvo com Sucesso", { type: "success" });
      } else {
        toast("Não foi possivel realizar operação", { type: "error" });
      }
    }
  };

  return {
    contact,
    contactSelected,
    openModal,
    validations,
    handleInputError,
    handleCloseModal,
    handleChange,
    onSubmit,
  };
}
