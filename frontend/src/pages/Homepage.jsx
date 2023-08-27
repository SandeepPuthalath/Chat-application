import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  email:Yup.string().required("Please enter your email"),
  password: Yup.string().required("Please enter your password")
})

const Homepage = () => {
  
  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validationSchema,
    onSubmit:(values) =>{
      console.log(values)
    }
  })

  return (
    <div className="flex justify-center items-center min-h-screen max-h-screen">
      <div className="min-w-full min-h-screen md:min-w-[24rem] md:min-h-[28rem] bg-gray-900 shadow-gray-50 md:rounded-md py-20">
        <div className="flex flex-col gap-5 text-gray-100">
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
                    className="bg-gray-50 w-full rounded-md py-1 text-gray-900 uppercase text-xl font-bold"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
