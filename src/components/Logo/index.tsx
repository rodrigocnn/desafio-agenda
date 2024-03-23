import { IoIosContact } from "react-icons/io";
import { Title, Container } from "./styles";

export function Logo() {
  return (
    <Container>
      <Title>MyContacts</Title>
      <IoIosContact />
    </Container>
  );
}
