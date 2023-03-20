import React from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us page" />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form
        className="w-full max-w-lg"
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
      >
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`${
                errors?.name ? "border-red-500" : ""
              } appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors?.name ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              {...register("name", { required: true })}
            />
            {errors?.name && (
              <p className="text-red-500 text-xs italic">
                This field is required
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`${
                errors?.email ? "border-red-500" : ""
              } appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors?.email ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              {...register("email", { required: true })}
            />
            {errors?.email && (
              <p className="text-red-500 text-xs italic">
                This field is required
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={`${
                errors?.message ? "border-red-500" : "border-gray-200"
              } no-resize appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              id="message"
              name="message"
              placeholder="Your message"
              {...register("message", { required: true })}
            />
            {errors?.message && (
              <p className="text-red-500 text-xs italic">
                This field is required
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex flex-wrap justify-center mt-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <p className="text-center text-gray-500 text-xs">
            ©2023 Detroit Store. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
