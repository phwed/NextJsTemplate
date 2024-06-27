import { Avatar } from "@nextui-org/react";
import React from "react";

interface UserProps {
  name: string;
  role: string;
  initials?: string;
  profileUrl?: string;
}

export default function User({ name, role, initials, profileUrl }: UserProps) {
  return (
    <div className="flex gap-2 items-center">
      <Avatar
        src={profileUrl}
        name={initials}
        size="lg"
        className="bg-gray-400"
      />
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  );
}
