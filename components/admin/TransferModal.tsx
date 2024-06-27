import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Bank, UserTick } from "iconsax-react";

interface props {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}

export default function TransferModal({ isOpen, onOpen, onOpenChange }: props) {
  const formik = useFormik({
    initialValues: {
      source: "",
      destination: "",
      amount: "",
    },
    validationSchema: yup.object({
      source: yup.string().required("Source is required"),
      destination: yup.string().required("Destination is required"),
      amount: yup.string().required("Amount is required"),
    }),
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      size="lg"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Transfer Funds
            </ModalHeader>
            <ModalBody>
              <div className="flex gap-5 flex-wrap mb-10">
                <Button
                  startContent={<UserTick size={20} />}
                  className="bg-brand-500 text-white"
                >
                  Own Account
                </Button>

                <Button startContent={<Bank size={20} />}>
                  Stanbic Account
                </Button>

                <Button startContent={<Bank size={20} />}>Other Banks</Button>
              </div>

              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-5"
              >
                <Input
                  label="Source"
                  placeholder="Source Account"
                  value={formik.values.source}
                  variant="bordered"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.source}
                  color={formik.errors.source ? "danger" : "default"}
                  errorMessage={formik.errors.source}
                  name="name"
                />
                <Input
                  label="Destination"
                  placeholder="Destination Account"
                  value={formik.values.destination}
                  variant="bordered"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.destination}
                  color={formik.errors.destination ? "danger" : "default"}
                  errorMessage={formik.errors.destination}
                  name="destination"
                />
                <Input
                  label="Amount"
                  placeholder="Enter Amount"
                  value={formik.values.amount}
                  variant="bordered"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.amount}
                  color={formik.errors.amount ? "danger" : "default"}
                  errorMessage={formik.errors.amount}
                  name="amount"
                />
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                SUBMIT
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
