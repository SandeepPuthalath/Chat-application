import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

const LoginComp = ({ handleChangeToSignup }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="min-w-full min-h-screen md:min-w-[24rem] md:min-h-[28rem] bg-gray-900 shadow-gray-50 md:rounded-md py-20">
      <div className="flex flex-col justify-center items-center gap-5 text-gray-100">
        <div className="flex justify-center items-center">
          <h3 className="text-xl font-bold uppercase">Login in</h3>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={formik.handleSubmit}>
            <div className="px-5">
              <div className="w-72 py-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-md font-medium capitalize text-gray-900 dark:text-gray-100"
                >
                  email
                </label>
                <input
                  onChange={formik.handleChange}
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="flex relative">
                    <span className="absolute text-sm text-red-500">
                      {formik.errors.email}
                    </span>
                  </div>
                )}
              </div>
              <div className="w-72 py-3">
                <label
                  htmlFor="password"
                  className="block mb-2 text-md font-medium capitalize text-gray-900 dark:text-gray-100"
                >
                  password
                </label>
                <input
                  onChange={formik.handleChange}
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your password"
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="flex relative">
                    <span className="absolute text-red-500 text-sm">
                      {formik.errors.password}
                    </span>
                  </div>
                )}
              </div>
              <div className="w-72 py-8">
                <button
                  type="submit"
                  className="bg-gray-50 w-full rounded-md py-1 text-gray-900 uppercase text-xl font-bold hover:bg-transparent border-2 hover:text-gray-50"
                >
                  {/* this is spinner  */}
                  {/* <div role="status">
                        <svg
                          aria-hidden="true"
                          class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="text-sm">loading...</span>
                      </div> */}
                  Login
                </button>
              </div>
              <div className="flex">
                <p className=" text-sm cursor-default">
                  Do not have an account..?{" "}
                  <span
                    onClick={handleChangeToSignup}
                    className="text-blue-600 cursor-pointer"
                  >
                    Register now
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
