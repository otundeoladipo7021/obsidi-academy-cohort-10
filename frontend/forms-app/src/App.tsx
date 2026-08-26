import React, { type JSX } from "react";
import {
  Formik,
  Form,
  Field,
  type FormikHelpers,
  type FormikProps,
} from "formik";
import { useCookies } from "react-cookie";

// 1. Define the exact shape of the data we expect in this form
interface FormValues {
  name: string;
  email: string;
}

// 2. Initialize the local storage key constant
const LOCAL_STORAGE_KEY: string = "email";

const App = (): JSX.Element => {
  // 3. Initialize the useCookies hook
  const [cookies, setCookie] = useCookies(["name"]);

  // 4. Set initial values to fetch data from cookies and local storage
  const initialValues: FormValues = {
    // cookies.name is likely 'string | undefined'.
    // The || "" fallback guarantees it evaluates to a strict 'string'.
    name: cookies.name || "",
    // localStorage.getItem natively returns 'string | null'.
    // The || "" fallback guarantees it evaluates to a strict 'string'.
    email: localStorage.getItem(LOCAL_STORAGE_KEY) || "",
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      onSubmit={(
        values: FormValues,
        { setSubmitting }: FormikHelpers<FormValues>,
      ): void => {
        // Simulate an asynchronous API call
        setTimeout(() => {
          // Save the name to a cookie and email to local storage
          setCookie("name", values.name, { path: "/" });
          localStorage.setItem(LOCAL_STORAGE_KEY, values.email);

          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }: FormikProps<FormValues>) => (
        <Form>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="name" style={{ display: "block" }}>
              Name
            </label>
            <Field type="text" name="name" id="name" />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="email" style={{ display: "block" }}>
              Email Address
            </label>
            <Field type="email" name="email" id="email" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default App;
