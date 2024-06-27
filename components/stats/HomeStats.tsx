import React from "react";
import { StatsWrapper } from "../wrappers";
import DashCard from "../shared/DashCard";

export default function HomeStats() {
  return (
    <StatsWrapper>
      <DashCard title="Income" count={12000} image="/icons/trend.svg" />

      <DashCard title="Expense" count={5000} image="/icons/trend-down.svg" />

      <DashCard title="Investment" count={1000} image="/icons/trend.svg" />

      <DashCard title="Savings" count={2100} image="/icons/trend.svg" />
    </StatsWrapper>
  );
}
