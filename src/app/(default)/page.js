// import Image from "next/image";
// import Link from "next/link";
// import Header from "../components/header";
'use client'
import HeroForm from "@/components/forms/HeroForm";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <main>
      <section className="pt-10">
        <div className="max-w-md mb-8">
        <h1 className="text-6xl font-bold">Your one Link <br></br> for Everything</h1>
        <h2 className="text-gray-500 text-xl mt-6">Share your links, social profiles, contact info <br></br> and more on one page</h2>
        </div>
        <SessionProvider>
        <HeroForm></HeroForm>
        </SessionProvider>
      </section>
    </main>
  );
}
