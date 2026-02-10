
import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#d9ed92] to-[#184e77] px-4">
      <section className="w-full max-w-xl text-center py-16 rounded-xl shadow-lg bg-white/80 backdrop-blur-md">

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 drop-shadow-lg">Street Food Spotter</h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8">Ontdek en deel de beste streetfood spots in jouw stad.</p>

        <Button href="/spots">Bekijk Spots</Button>
        
      </section>
    </main>
  );
}

