import Button from "@/app/components/Button";
import { getSpotByIdOrRowId } from "../../lib/db";
import Link from "next/link";

interface SpotDetailProps {
  params: { id: string };
}

export default async function SpotDetail({ params }: SpotDetailProps) {
  const resolvedParams = await Promise.resolve(params);
  const spot = getSpotByIdOrRowId(resolvedParams.id);

  if (!spot) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#d9ed92] to-[#184e77] px-4">
        <div className="bg-white/80 p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Spot not found</h2>
          <Link href="/spots" className="text-blue-700 underline">Back to spots</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#d9ed92] to-[#184e77] px-4">
        <section className="w-full max-w-xl py-12 rounded-xl shadow-lg bg-white/70 backdrop-blur-md text-center">
        <img
          src={spot.image}
          alt={spot.name}
          style={{ width: "500px", height: "350px", objectFit: "cover", borderRadius: "8px", marginBottom: "1rem", display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        />
          <h1 className="text-3xl font-extrabold mb-2 text-gray-900 drop-shadow-lg">{spot.name}</h1>
          <div className="text-gray-700 mb-4">{spot.location}</div>
          <div className="text-gray-700 mb-4">{spot.description}</div>
          <div className="text-gray-700 mb-4">
            {spot.link ? (
              <a href={spot.link} className="text-blue-700 underline break-words" target="_blank">
                Open in Google Maps
              </a>
            ) : (
              <span className="text-gray-500">No link available</span>
            )}
          </div>
          <div className="flex justify-center">
            <Button href="/spots">Terug naar Spots</Button>
          </div>
      </section>
    </main>
  );
}
