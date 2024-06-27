import React from "react";
import Image from "next/image";
import { BRAND } from "@/contants";

interface Props {
  title: string;
  description: string;
}

export default function Header({ title, description }: Partial<Props>) {
  return (
    <div className="flex flex-col gap-5 mb-10">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h1 className="text-3xl font-medium">{BRAND.TITLE}</h1>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-medium">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
