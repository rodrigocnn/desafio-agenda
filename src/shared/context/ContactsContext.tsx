import { ReactNode, createContext, useState } from "react";
import { Contact } from "../interfaces";

interface ContactProviderProps {
  children: ReactNode;
}

interface ContactsContextData {
  contacts: Contact[];
  addContact: (newContact: Contact) => void;
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  openModal: boolean;
  setOpenModal: (isOpen: boolean) => void;
}

export const ContactsContext = createContext<ContactsContextData>(
  {} as ContactsContextData
);

export function ContactsProvider({ children }: ContactProviderProps) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const addContact = (newContact: Contact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <ContactsContext.Provider
      value={{ contacts, addContact, setContacts, openModal, setOpenModal }}
    >
      {children}
    </ContactsContext.Provider>
  );
}
