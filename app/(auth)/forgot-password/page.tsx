"use client";

import Header from "@/components/auth/Header";
import React from "react";
import { useFormik } from "formik";
import { Input, Button } from "@nextui-org/react";
import { EyeSlash, Eye } from "iconsax-react";
import * as yup from "yup";

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col w-full h-full px-8 justify-center">
      <Header
        title="Forgot your password!"
        description="Enter your email to reset your password"
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

        <Button
          size='lg'
          type="submit"
          className="w-full mt-5 bg-brand-500 text-white"
        >
          Reset Password
        </Button>

        <div>
          <p className="text-center text-gray-500">
            Remenber your password?{" "}
            <a href="/sign-in" className="text-brand-500 dark:text-gray-600">
              Sign in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
