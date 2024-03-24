import { Form, Input, Modal } from "./styles";
import { useModalFilter } from "../../hooks/useModalFilter";

interface IModalFilterProps {
  open: boolean;
}

export function ModalFilter({ open }: IModalFilterProps) {
  const { handleSearch } = useModalFilter();

  if (!open) {
    return null;
  }

  return (
    <Modal>
      <Form>
        <Input onChange={handleSearch} name="name" placeholder="Nome" />
        {/* <ContainerButtons>
          <button type="submit">Filtrar</button>
          <button type="button" onClick={() => toggleModal(!open)}>
            Fechar
          </button>
        </ContainerButtons> */}
      </Form>
    </Modal>
  );
}
