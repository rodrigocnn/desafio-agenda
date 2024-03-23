import { Container } from "./styles";

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
