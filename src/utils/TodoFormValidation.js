import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required").max(100, "Title is too long"),
  description: Yup.string().required("Gender is required").max(500, "Description is too long"),
  dueDate: Yup.date().required("Due Date is required").nullable(),
  status: Yup.number().required("Status is required")
});
