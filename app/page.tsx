"use client";

import LeftSidebar from "@/components/LeftSidebar";
import Live from "@/components/Live";
import RightSidebar from "@/components/RightSidebar";
import NavBar from "@/components/users/NavBar";

export default function Page() {
  return (
    <main className='h-screen overflow-hidden'>
      <NavBar />

      <section className='flex h-full flex-row'>
        <LeftSidebar />

        <Live />

        <RightSidebar />
      </section>
    </main>
  );
}
