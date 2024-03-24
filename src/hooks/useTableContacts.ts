import { useContext, useEffect, useState } from "react";
import { ContactsContext } from "../shared/context/ContactsContext";
import { api } from "../services/api";
import { toast } from "react-toastify";

export function useTableContacts() {
  const {
    contacts,
    setContacts,
    updateGrid,
    setUpdateGrid,
    setOpenModal,
    setContactSelected,
  } = useContext(ContactsContext);

  const [openModalFilter, setOpenModalFilter] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function getContacts() {
    try {
      const response = await api.get("contacts");
      return response.data;
    } catch (error) {
      console.error("Erro ao obter contatos:", error);
      return [];
    }
  }

  useEffect(() => {
    async function fetchContacts() {
      setLoading(true);
      const fetchedContacts = await getContacts();
      setContacts(fetchedContacts);
      setLoading(false);
    }

    fetchContacts();
  }, [updateGrid]);

  async function deleteContact(id: number) {
    try {
      const response = await api.delete(`contacts/${id}`);
      setUpdateGrid(!updateGrid);
      if (response.data) {
        toast("Contato Excluído com Sucesso", { type: "success" });
      }
    } catch (error) {
      console.error("Erro ao obter contatos:", error);
      return [];
    }
  }

  async function editContact(id: number) {
    setContactSelected(id);
    setOpenModal(true);
  }

  return {
    contacts,
    openModalFilter,
    loading,
    deleteContact,
    setOpenModal,
    setOpenModalFilter,
    editContact,
  };
}
