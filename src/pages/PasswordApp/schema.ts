import * as yup from "yup";

export const schema = yup.object({
  first: yup.string().required("Digite no primeiro campo"),
  second: yup.string().required("Digite no segundo campo"),
  third: yup.string().required("Digite no terceiro campo"),
  four: yup.string().required("Digite no quarto campo"),
});
