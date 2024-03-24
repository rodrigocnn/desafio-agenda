import { useContext } from "react";
import { Logo } from "../Logo";
import { Container, Content } from "./styles";
import { ContactsContext } from "../../shared/context/ContactsContext";

export function Header() {
  const { setOpenModal, setContactSelected } = useContext(ContactsContext);

  const handleOpenModal = async () => {
    await setContactSelected(0);
    setOpenModal(true);
  };

  return (
    <Container>
      <Content>
        <Logo />
        <button onClick={handleOpenModal} type="button">
          Novo Contato
        </button>
      </Content>
    </Container>
  );
}
