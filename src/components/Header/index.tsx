import { useContext } from "react";
import { Logo } from "../Logo";
import { Container, Content } from "./styles";
import { ContactsContext } from "../../shared/context/ContactsContext";

export function Header() {
  const { setOpenModal } = useContext(ContactsContext);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <Container>
      <Content>
        <Logo />
        <button onClick={handleOpenModal} type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
