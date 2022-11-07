import * as yup from "yup";

export const schema = yup.object({
  pin1: yup.string().required("Digite no primeiro campo"),
  pin2: yup.string().required("Digite no segundo campo"),
  pin3: yup.string().required("Digite no terceiro campo"),
  pin4: yup.string().required("Digite no quarto campo"),
});
