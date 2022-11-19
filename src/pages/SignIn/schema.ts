import * as yup from "yup";

export const schema = yup.object({
  password: yup
    .string()
    .required("Informe uma senha!")
    .min(8, "A senha deve conter pelo menos 8 caracteres!"),
});
