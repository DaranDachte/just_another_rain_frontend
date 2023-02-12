import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().min(3).max(10).required(),
  topic: yup.string().required(),
  text: yup.string().min(10).max(300).required(),
  email:yup.string().email().required(),
});

