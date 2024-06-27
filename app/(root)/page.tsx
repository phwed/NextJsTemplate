import HomeStats from "@/components/stats/HomeStats";
import { DetailsWrapper } from "@/components/wrappers";
import React from "react";
import dynamic from "next/dynamic";
import Transfer from "@/components/admin/Transfer";
import SideCards from "@/components/admin/SideCards";

const Transactions = dynamic(() => import("@/components/admin/Transactions"), {
  ssr: false,
});
const MoneyFlow = dynamic(() => import("@/components/admin/MoneyFlow"), {
  ssr: false,
});

const Home = () => {
  return (
    <main className="flex flex-col gap-5">
      <HomeStats />

      <DetailsWrapper>
        <section className="col-span-1 lg:col-span-2 flex flex-col gap-5">
          <MoneyFlow />
          <Transactions />
        </section>
        <section className="lg:col-span-2 xl:col-span-1 flex flex-col gap-5">
          <Transfer />
          <SideCards />
        </section>
      </DetailsWrapper>
    </main>
  );
};

export default Home;
