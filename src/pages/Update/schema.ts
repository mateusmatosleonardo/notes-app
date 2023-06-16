import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required("Informe um título, por favor!"),
  content: yup.string().required("Informe o conteúdo da nota, por favor!"),
});
