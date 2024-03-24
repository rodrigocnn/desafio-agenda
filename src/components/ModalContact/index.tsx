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
    contact,
    contactSelected,
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
          value={contact?.name}
        />
        <Input
          error={handleInputError("mainPhone")}
          onChange={handleChange}
          name="mainPhone"
          placeholder="Telefone Principal"
          value={contact?.mainPhone}
        />
        <Input
          error={handleInputError("mobilePhone")}
          onChange={handleChange}
          name="mobilePhone"
          placeholder="Telefone Celular"
          value={contact?.mobilePhone}
        />
        <Input
          error={handleInputError("workPhone")}
          onChange={handleChange}
          name="workPhone"
          placeholder="Telefone Trabalho"
          value={contact?.workPhone}
        />

        {/* <select id="categorias">
          <option value="">Selecione Categoria</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Emergencia">Emergência</option>
        </select> */}

        <button onClick={onSubmit} type="submit">
          {contactSelected !== 0 ? "Atualizar" : "Cadastrar"}
        </button>
      </Form>
    </Modal>
  );
}
