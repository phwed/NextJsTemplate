"use client";

import Header from "@/components/auth/Header";
import React from "react";
import { useFormik } from "formik";
import { Input, Button } from "@nextui-org/react";
import { EyeSlash, Eye } from "iconsax-react";
import * as yup from "yup";

const Signin = () => {

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required("Email is required"),
      password: yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      window.location.href = "/";
    },
  });

  return (
    <div className="flex flex-col w-full h-full px-8 justify-center">
      <Header
        title="Welcome Back!"
        description="Sign in to your account to continue"
      />

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-5 mt-10"
      >
        <Input
          label="Email"
          placeholder="Enter your email"
          value={formik.values.email}
          variant="bordered"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.email}
          color={formik.errors.email ? "danger" : "default"}
          errorMessage={formik.errors.email}
          name="email"
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeSlash className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <Eye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          value={formik.values.password}
          variant="bordered"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.password}
          color={formik.errors.password ? "danger" : "default"}
          errorMessage={formik.errors.password}
          name="password"
        />

        <div className="flex w-full bordered justify-end">
          <a href="/forgot-password" className="text-brand-500 dark:text-gray-600">
            Forgot password?
          </a>
        </div>

        <Button
          type="submit"
          size='lg'
          isLoading ={false}
          className="w-full mt-5 bg-brand-500 text-white"
        >
          Sign in
        </Button>

        <div>
          <p className="text-center text-gray-500">
            Don&apos;t have an account?{" "}
            <a href="/sign-up" className="text-brand-500 dark:text-gray-600">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
