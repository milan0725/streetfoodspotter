
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#d9ed92] to-[#184e77] px-4">
      <section className="w-full max-w-xl text-center py-16 rounded-xl shadow-lg bg-white/80 backdrop-blur-md">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 drop-shadow-lg">Street Food Spotter</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">Ontdek en deel de beste streetfood spots in jouw stad.</p>
        <Link href="/spots" className="px-8 py-3 bg-gradient-to-r from-[#d9ed92] to-[#184e77] text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-200 text-lg hover:bg-gradient-to-r hover:from-[#184e77] hover:to-[#d9ed92] hover:text-[#184e77]" style={{ textShadow: '0 2px 8px #184e77' }}>
          Bekijk Spots
        </Link>
      </section>
    </main>
  );
}
