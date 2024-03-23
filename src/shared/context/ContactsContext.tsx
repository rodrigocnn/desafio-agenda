import { ReactNode, createContext, useState } from "react";

interface Contact {
  id: number;
  name: string;
  mainPhone: string;
  mobilePhone: string;
  workPhone: string;
}

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

const teste = [
  {
    id: 1,
    name: "Rodrigo Cesar",
    mainPhone: "(77) 3612-6968",
    mobilePhone: "(77) 9833-1616",
    workPhone: "(77) 3612-6616",
  },

  {
    id: 1,
    name: "Marcela Moreira",
    mainPhone: "(77) 3612-6968",
    mobilePhone: "(77) 9833-1616",
    workPhone: "(77) 3612-6616",
  },

  {
    id: 1,
    name: "Luiza Costa",
    mainPhone: "(77) 3612-6968",
    mobilePhone: "(77) 9833-1616",
    workPhone: "(77) 3612-6616",
  },
];

export function ContactsProvider({ children }: ContactProviderProps) {
  const [contacts, setContacts] = useState<Contact[]>(teste);
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
