import * as yup from "yup";

export const schema = yup.object({
  firstPin: yup.string().required("Digite no primeiro campo"),
  secondPin: yup.string().required("Digite no segundo campo"),
  thirdPin: yup.string().required("Digite no terceiro campo"),
  fourPin: yup.string().required("Digite no quarto campo"),
});
