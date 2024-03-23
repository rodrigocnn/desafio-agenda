import { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import Modal from "react-modal";
import { Container } from "./styles";
import { ContactsContext } from "../../shared/context/ContactsContext";

Modal.setAppElement("#root");

export function ModalContact() {
  const { openModal, setOpenModal } = useContext(ContactsContext);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
      >
        <FaWindowClose />
      </button>

      <Container>
        <h2>Cadastrar contato</h2>
        <input placeholder="Nome" />
        <input type="number" placeholder="Telefone Principal" />

        <input placeholder="Telefone Celular" />

        <input placeholder="Telefone Trabalho" />

        <select id="categorias">
          <option value="pessoal">Selecione Categoria</option>
          <option value="pessoal">Pessoal</option>
          <option value="trabalho">Trabalho</option>
          <option value="emergencia">Emergência</option>
        </select>

        <button type="submit">Cadastrar </button>
      </Container>
    </Modal>
  );
}
