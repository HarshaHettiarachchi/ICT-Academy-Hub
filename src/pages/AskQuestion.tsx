import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Form data structure
interface QuestionFormValues {
  name: string;
  email: string;
  question: string;
}

// Form validation rules using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must contain at least 3 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  question: Yup.string()
    .min(10, "Question must contain at least 10 characters")
    .required("Question is required"),
});


export default function AskQuestion() {

  // Default form values
  const initialValues: QuestionFormValues = {
    name: "",
    email: "",
    question: "",
  };


  return (

    <div
      className="
      min-h-screen
      pt-24
      px-6
      pb-20
      bg-white
      dark:bg-gray-950
      "
    >

      <div className="max-w-2xl mx-auto">

        <h1
          className="
          text-4xl
          font-bold
          text-center
          mb-8
          text-blue-900
          dark:text-white
          "
        >
          Ask Your Question
        </h1>


        {/* Question form container */}
        <div
          className="
          bg-gradient-to-br
          from-blue-50
          via-white
          to-cyan-50
          dark:from-gray-900
          dark:via-gray-950
          dark:to-blue-950
          border
          border-blue-200
          dark:border-gray-700
          rounded-2xl
          shadow-xl
          p-8
          "
        >

          {/* Formik handles form state and validation */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}

            onSubmit={(values, { resetForm }) => {

              // Submit form data
              console.log(values);

              alert("Question submitted successfully!");

              // Clear form after successful submission
              resetForm();

            }}
          >

            {() => (

              <Form className="space-y-5">


                {/* Name field */}
                <div>

                  <label
                    className="
                    block
                    font-semibold
                    mb-2
                    text-gray-700
                    dark:text-gray-200
                    "
                  >
                    Name
                  </label>


                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="
                    w-full
                    p-3
                    rounded-xl
                    border
                    border-blue-200
                    dark:border-gray-700
                    bg-white
                    dark:bg-gray-900
                    dark:text-white
                    "
                  />


                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />

                </div>



                {/* Email field */}
                <div>

                  <label
                    className="
                    block
                    font-semibold
                    mb-2
                    text-gray-700
                    dark:text-gray-200
                    "
                  >
                    Email
                  </label>


                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="
                    w-full
                    p-3
                    rounded-xl
                    border
                    border-blue-200
                    dark:border-gray-700
                    bg-white
                    dark:bg-gray-900
                    dark:text-white
                    "
                  />


                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />

                </div>



                {/* Question textarea field */}
                <div>

                  <label
                    className="
                    block
                    font-semibold
                    mb-2
                    text-gray-700
                    dark:text-gray-200
                    "
                  >
                    Your Question
                  </label>


                  <Field
                    as="textarea"
                    name="question"
                    rows={5}
                    placeholder="Write your question..."
                    className="
                    w-full
                    p-3
                    rounded-xl
                    border
                    border-blue-200
                    dark:border-gray-700
                    bg-white
                    dark:bg-gray-900
                    dark:text-white
                    "
                  />


                  <ErrorMessage
                    name="question"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />

                </div>



                {/* Submit button */}
                <button
                  type="submit"
                  className="
                  w-full
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  text-white
                  font-semibold
                  hover:scale-105
                  transition
                  shadow-lg
                  "
                >
                  Submit Question
                </button>


              </Form>

            )}

          </Formik>


        </div>

      </div>

    </div>

  );

}