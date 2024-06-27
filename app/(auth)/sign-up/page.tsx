"use client";

import Header from "@/components/auth/Header";
import React from "react";
import { useFormik } from "formik";
import { Input, Button, Textarea } from "@nextui-org/react";
import * as yup from "yup";
import { EyeSlash, Eye } from "iconsax-react";

const Signup = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  const formik = useFormik({
    initialValues: {
      business_name: "",
      business_locaiton: "",
      business_email: "",
      business_phone: "",
      business_whatsapp: "",
      business_website: "",
      business_description: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: yup.object({
      business_name: yup.string().required("Business name is required"),
      business_locaiton: yup.string().required("Business location is required"),
      business_email: yup.string().email().required("Email is required"),
      business_phone: yup.string().required("Phone is required"),
      business_whatsapp: yup.string().required("Whatsapp is required"),
      business_website: yup.string().required("Website is required"),
      business_description: yup.string().required("Description is required"),
      password: yup.string().required("Password is required"),
      confirm_password: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values: signup) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col w-full min-h-[100dvh] py-16 px-8 justify-center">
      <Header
        title="Register your orgnanization"
        description="Add your organisation details as an administator"
      />

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-5 mt-10"
      >
        <Input
          label="Business Name"
          placeholder="Enter your business name"
          value={formik.values.business_name}
          variant="bordered"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.business_name}
          color={formik.errors.business_name ? "danger" : "default"}
          errorMessage={formik.errors.business_name}
          name="business_name"
        />

        <Input
          label="Business Location"
          placeholder="Enter your business location"
          value={formik.values.business_locaiton}
          variant="bordered"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.business_locaiton}
          color={formik.errors.business_locaiton ? "danger" : "default"}
          errorMessage={formik.errors.business_locaiton}
          name="business_locaiton"
        />

        <Input
          label="Email"
          placeholder="Enter your email"
          value={formik.values.business_email}
          variant="bordered"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.business_email}
          color={formik.errors.business_email ? "danger" : "default"}
          errorMessage={formik.errors.business_email}
          name="business_email"
        />

        <Input
          label="Phone"
          placeholder="Enter your phone number"
          value={formik.values.business_phone}
          variant="bordered"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.business_phone}
          color={formik.errors.business_phone ? "danger" : "default"}
          errorMessage={formik.errors.business_phone}
          name="business_phone"
        />

        <Input
          label="Whatsapp"
          placeholder="Enter your whatsapp number"
          value={formik.values.business_whatsapp}
          variant="bordered"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.business_whatsapp}
          color={formik.errors.business_whatsapp ? "danger" : "default"}
          errorMessage={formik.errors.business_whatsapp}
          name="business_whatsapp"
        />

        <Input
          label="Website"
          placeholder="Enter your website"
          value={formik.values.business_website}
          variant="bordered"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.business_website}
          color={formik.errors.business_website ? "danger" : "default"}
          errorMessage={formik.errors.business_website}
          name="business_website"
        />

        <Textarea
          label="Description"
          placeholder="Enter your business description"
          value={formik.values.business_description}
          variant="bordered"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.business_description}
          color={formik.errors.business_description ? "danger" : "default"}
          errorMessage={formik.errors.business_description}
          name="business_description"
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
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

        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleConfirmVisibility}
            >
              {isConfirmVisible ? (
                <EyeSlash className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <Eye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isConfirmVisible ? "text" : "password"}
          value={formik.values.confirm_password}
          variant="bordered"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.confirm_password}
          color={formik.errors.confirm_password ? "danger" : "default"}
          errorMessage={formik.errors.confirm_password}
          name="confirm_password"
        />

        <Button
          type="submit"
          size='lg'
          className="w-full mt-5 bg-brand-500 text-white"
        >
          Sign up
        </Button>

        <div>
          <p className="text-center text-gray-500">
            Already have an account?{" "}
            <a href="/sign-in" className="text-brand-500 dark:text-gray-600">
              Sign in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
