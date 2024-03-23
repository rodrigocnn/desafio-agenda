import { useContext, useEffect } from "react";
import { ContactsContext } from "../shared/context/ContactsContext";
import { api } from "../services/api";

export function useTableContacts() {
  const { contacts, setContacts } = useContext(ContactsContext);

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
      const fetchedContacts = await getContacts();
      setContacts(fetchedContacts);
    }

    fetchContacts();
  }, [contacts]);

  return {
    contacts,
  };
}
