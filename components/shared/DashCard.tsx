import Image from "next/image";
import React from "react";

interface DashCardProps {
  title: string;
  count: number;
  image: string;
}

export default function DashCard({ title, count, image }: DashCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-md flex flex-col gap-5 relative">
      <div>
        <h1>{title}</h1>
      </div>

      <span className="flex gap-2 items-end">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium">{count}</h1>
        <p className='mb-2'>GHS</p>
      </span>

      <Image alt="Active Users" src={image} width={40} height={40} className="absolute right-0 top-[-15px]" />
    </div>
  );
}
