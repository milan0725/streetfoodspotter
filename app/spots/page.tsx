import Link from "next/link";


import Search from "../components/Search";
import { getAllSpots } from "../lib/db";

// This page is a server component, so we can fetch directly from the database
export default function Home() {
  const spots = getAllSpots();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#d9ed92] to-[#184e77] px-4">
      <section className="w-300 text-center py-16 rounded-xl shadow-lg bg-white/80 backdrop-blur-md">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 drop-shadow-lg">Spots</h1>
        <Search spots={spots} />
        <div className="flex justify-center mt-8 mb-4">
          <Link href="/spots/new">
            <button className="bg-[#184e77] text-white border-none rounded-md px-4 py-2 font-semibold hover:opacity-90">Spot toevoegen</button>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/">
            <button className="bg-[#184e77] text-white border-none rounded-md px-4 py-2 font-semibold hover:opacity-90">Terug naar Home</button>
          </Link>
        </div>
      </section>
    </main>
  );
}