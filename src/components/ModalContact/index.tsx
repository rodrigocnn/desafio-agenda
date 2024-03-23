import { useContext } from "react";
import Modal from "react-modal";
import { Container } from "./styles";
import { ContactsContext } from "../../shared/context/ContactsContext";

Modal.setAppElement("#root");

export function ModalContact() {
  const { openModal } = useContext(ContactsContext);

  const handleCloseModal = () => {};

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={openModal}
      onRequestClose={handleCloseModal}
      contentLabel="Example Modal"
    >
      <button
        type="button"
        onClick={handleCloseModal}
        className="react-modal-close"
      ></button>

      <Container>
        <h2>Cadastrar contato</h2>
        <input placeholder="Nome" />
        <input type="number" placeholder="Telefone Principal" />

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar </button>
      </Container>
    </Modal>
  );
}
