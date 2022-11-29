import * as yup from "yup";

export const schema = yup.object({
  servicename: yup.string().required("Informe o nome do serviço!"),
  username: yup.string().required("Informe seu nome de usuário ou e-mail!"),
  password: yup
    .string()
    .required("Informe uma senha!")
    .min(6, "A senha deve conter pelo menos 6 caracteres!"),
});
