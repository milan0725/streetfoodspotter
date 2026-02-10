"use client";

import React, { useMemo, useState } from "react";
import Card from "./Card";
import Link from "next/link";

interface Spot {
  id?: number | string;
  rowid?: number | string;
  name: string;
  location: string;
  image: string;
}

export default function Search({ spots }: { spots: Spot[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return spots;
    return spots.filter((s) => (s.name + " " + s.location).toLowerCase().includes(q));
  }, [spots, query]);

  return (
    <>
      <div className="flex justify-center mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search spots..."
          className="w-full md:w-1/2 px-4 py-2 rounded-md border border-gray-200 shadow-sm text-gray-800"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {filtered.map((spot: any, idx: number) => (
          <Card key={idx}>
            <img
              src={spot.image}
              alt={spot.name}
              className="w-[250px] h-[180px] object-cover rounded-md mx-auto mb-4"
            />
            <div className="flex items-center justify-between gap-4">
              <div className="text-left">
                <div className="text-gray-900 font-semibold text-lg mb-1">{spot.name}</div>
                <div className="text-gray-600 text-sm">{spot.location}</div>
              </div>
              <Link href={`/spots/${spot.id ?? spot.rowid}`}>
                <button className="bg-[#184e77] text-white border-none rounded-md px-3 py-2 font-semibold hover:opacity-90">
                  meer info
                </button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
