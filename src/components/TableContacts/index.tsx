import { useContext } from "react";
import { Container } from "./styles";
import { ContactsContext } from "../../shared/context/ContactsContext";

export function TableContacts() {
  const { contacts } = useContext(ContactsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone Principal</th>
            <th>Telefone Celular</th>
            <th>Telefone Trabalho</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td> {contact.mainPhone}</td>
              <td> {contact.mobilePhone}</td>
              <td> {contact.workPhone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
