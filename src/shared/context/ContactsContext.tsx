import { ReactNode, createContext, useState } from "react";
import { Contact } from "../interfaces";

interface ContactProviderProps {
  children: ReactNode;
}

interface ContactsContextData {
  contacts: Contact[];
  updateGrid: boolean;
  setUpdateGrid: (update: boolean) => void;
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  openModal: boolean;
  setOpenModal: (isOpen: boolean) => void;
  contactSelected: number;
  setContactSelected: React.Dispatch<React.SetStateAction<number>>;
}

export const ContactsContext = createContext<ContactsContextData>(
  {} as ContactsContextData
);

export function ContactsProvider({ children }: ContactProviderProps) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [updateGrid, setUpdateGrid] = useState(false);
  const [contactSelected, setContactSelected] = useState(0);

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        setContacts,
        updateGrid,
        setUpdateGrid,
        openModal,
        setOpenModal,
        contactSelected,
        setContactSelected,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}
