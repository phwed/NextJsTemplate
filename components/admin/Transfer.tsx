"use client";

import React from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import TransferModal from "./TransferModal";
import { ArrowSwapHorizontal } from "iconsax-react";

const Transfer = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full">
      <Button
        className="w-full bg-brand-500 text-white rounded-md flex items-center gap-5"
        size='lg'
        onClick={onOpen}
      >
        <ArrowSwapHorizontal/>
        Transfer
      </Button>

      <TransferModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};

export default Transfer;
