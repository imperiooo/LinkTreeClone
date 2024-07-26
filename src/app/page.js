// import Image from "next/image";
// import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <section>
        <h1 className="text-4xl font-bold">Your one Link <br></br> for Everything</h1>
        <h2>Share your links, social profiles, contact info and more on one page</h2>
      </section>
    </main>
  );
}
