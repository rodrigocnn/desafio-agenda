import { useContext } from "react";

import { ContactsContext } from "../shared/context/ContactsContext";

export function useModalFilter() {
  const { contacts, setContacts, setUpdateGrid, updateGrid } =
    useContext(ContactsContext);

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = event.target.value;

    if (!value) {
      setUpdateGrid(!updateGrid);
    }

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    setContacts(filteredContacts);
  };

  return {
    handleSearch,
  };
}
