import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaFilter } from "react-icons/fa6";

import {
  ButtonAction,
  ButtonFilter,
  Container,
  ContainerButtons,
} from "./styles";
import { useTableContacts } from "../../hooks/useTableContacts";
import { ModalFilter } from "../ModalFilter";
import { Spinner } from "../Spinner";

export function TableContacts() {
  const {
    loading,
    contacts,
    deleteContact,
    setOpenModalFilter,
    openModalFilter,
    editContact,
  } = useTableContacts();

  return (
    <Container>
      {loading && <Spinner />}
      <ModalFilter open={openModalFilter} />

      <table>
        <thead>
          <tr>
            <th>
              Nome
              <ButtonFilter
                onClick={() => setOpenModalFilter(!openModalFilter)}
              >
                <FaFilter />
              </ButtonFilter>
            </th>
            <th>Telefone Principal</th>
            <th>Telefone Celular</th>
            <th>Telefone Trabalho</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.mainPhone}</td>
              <td>{contact.mobilePhone}</td>
              <td>{contact.workPhone}</td>
              <td>
                <ContainerButtons>
                  <ButtonAction onClick={() => editContact(contact.id)}>
                    <BiSolidEdit />
                  </ButtonAction>
                  <ButtonAction onClick={() => deleteContact(contact.id)}>
                    <RiDeleteBin6Line />
                  </ButtonAction>
                </ContainerButtons>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
