import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";

import { Form } from "./styles";
import { useModalContact } from "../../hooks/useModalContact";
import { Input } from "../Input";

Modal.setAppElement("#root");

export function ModalContact() {
  const {
    onSubmit,
    handleChange,
    handleCloseModal,
    handleInputError,
    openModal,
  } = useModalContact();

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

      <Form>
        <h2>Cadastrar contato</h2>
        <Input
          error={handleInputError("name")}
          onChange={handleChange}
          name="name"
          placeholder="Nome"
        />
        <Input
          error={handleInputError("mainPhone")}
          onChange={handleChange}
          name="mainPhone"
          placeholder="Telefone Principal"
        />
        <Input
          error={handleInputError("mobilePhone")}
          onChange={handleChange}
          name="mobilePhone"
          placeholder="Telefone Celular"
        />
        <Input
          error={handleInputError("workPhone")}
          onChange={handleChange}
          name="workPhone"
          placeholder="Telefone Trabalho"
        />

        {/* <select id="categorias">
          <option value="">Selecione Categoria</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Emergencia">Emergência</option>
        </select> */}

        <button onClick={onSubmit} type="submit">
          Cadastrar
        </button>
      </Form>
    </Modal>
  );
}
