// import Image from "next/image";
// import Link from "next/link";
// import Header from "../components/header";

export default function Home() {
  return (
    <main>
      <section className="pt-10">
        <div className="max-w-md mb-8">
        <h1 className="text-6xl font-bold">Your one Link <br></br> for Everything</h1>
        <h2 className="text-gray-500 text-xl mt-6">Share your links, social profiles, contact info <br></br> and more on one page</h2>
        </div>
      <form className="inline-flex items-center shadow-lg shadow-gray-500/20">
        <span className="bg-white pl-4 py-4">Linklist.to/</span>
        <input type="text" className="py-4" placeholder="Username"></input>
        <button type="submit" className="bg-blue-500 text-white py-4 px-6">Join For Free</button>
      </form>
      </section>
    </main>
  );
}
