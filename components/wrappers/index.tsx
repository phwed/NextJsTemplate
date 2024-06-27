import React from "react";

interface props {
  children: React.ReactNode;
}

export const StatsWrapper = (props: props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-5">
      {props.children}
    </div>
  );
};

export const DetailsWrapper = (props: props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
      {props.children}
    </div>
  );
};

