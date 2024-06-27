import React from "react";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <h1 className="text-2xl lg:text-3xl">{title}</h1>;
}
