import Link from "next/link";


import Card from "../components/Card";
import { getAllSpots } from "../lib/db";

// This page is a server component, so we can fetch directly from the database
export default function Home() {
  const spots = getAllSpots();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#d9ed92] to-[#184e77] px-4">
      <section className="w-full max-w-4xl py-16 rounded-xl shadow-lg bg-white/50 backdrop-blur-md">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 drop-shadow-lg text-center">Spots</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {spots.map((spot: any, idx: number) => (
            <Card key={idx}>
              <img
                src={spot.image}
                alt={spot.name}
                style={{
                  width: "250px",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "1rem"
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                <div>
                  <div className="text-gray-900 font-semibold text-lg mb-1">{spot.name}</div>
                  <div className="text-gray-200 text-sm">{spot.location}</div>
                </div>
                <button
                  style={{
                    background: '#184e77',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.5rem 1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '1rem',
                    whiteSpace: 'nowrap'
                  }}
                >
                  meer info
                </button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}