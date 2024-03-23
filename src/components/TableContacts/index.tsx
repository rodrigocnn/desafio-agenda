import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { ButtonAction, Container, ContainerButtons } from "./styles";
import { useTableContacts } from "../../hooks/useTableContacts";

export function TableContacts() {
  const { contacts } = useTableContacts();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
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
                  <ButtonAction>
                    <BiSolidEdit />
                  </ButtonAction>
                  <ButtonAction>
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
