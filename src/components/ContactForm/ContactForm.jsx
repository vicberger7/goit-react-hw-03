import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const contactsSchema = Yup.object({
  contactName: Yup.string().required("Name is required").min(3).max(50),
  contactNumber: Yup.string().required("Number is required"),
});

const formInitialValues = {
  name: "",
  number: "",
};

export default function ContactForm({ onAddContact }) {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={contactsSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>Name</label>
        <Field className={css.field} type="text" name="name" />
        <label>Number</label>
        <Field className={css.field} type="text" name="number" />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
