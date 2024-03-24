import { object, string } from "yup";

export const contactSchema = object().shape({
  workPhone: string().required("Telefone do Trabalho é obrigatório"),
  mobilePhone: string().required("Telefone Celular é obrigatório"),
  mainPhone: string().required("Telefone Principal é obrigatório"),
  name: string().required("Nome do Contato é obrigatório"),
});
