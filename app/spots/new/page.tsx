"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function NewSpotPage() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/spots/new", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      router.push("/spots");
      return;
    }

    const json = await res.json().catch(() => null);
    const msg = json?.error || "Er is iets misgegaan bij toevoegen.";
    alert(msg);
  }

  return (

    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#d9ed92] to-[#184e77] px-4">
      <section className="mb-12 mx-auto w-full max-w-2xl flex-col py-12 rounded-xl shadow-lg bg-white/70 ">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">Nieuwe Spot Toevoegen</h1>
          <form
            className="flex flex-col items-center gap-6 justify-center"
            onSubmit={handleSubmit}
          >
          <label className="flex flex-col text-gray-900 font-semibold">
            <span className="mb-1 text-center">Naam</span>
            <input
              type="text"
              name="name"
              className="mt-2 mb-2 p-2 rounded border border-gray-600 w-80 centered-input text-center"
              required
            />
          </label>
          <label className="flex flex-col text-gray-900 font-semibold">
            <span className="mb-1 text-center">Locatie</span>
            <input
              type="text"
              name="location"
              className="mt-2 mb-2 p-2 rounded border border-gray-600 w-80 centered-input text-center"
              required
            />
          </label>
          <label className="flex flex-col text-gray-900 font-semibold">
            <span className="mb-1 text-center">Afbeelding URL</span>
            <input
              type="url"
              name="image"
              className="mt-2 mb-2 p-2 rounded border border-gray-600 w-80 centered-input text-center"
              required
            />
          </label>
          <label className="flex flex-col text-gray-900 font-semibold">
            <span className="mb-1 text-center">Link</span>
            <input
              type="url"
              name="link"
              className="mt-2 mb-2 p-2 rounded border border-gray-600 w-80 centered-input text-center"
            />
          </label>
          <label className="flex flex-col text-gray-900 font-semibold">
            <span className="mb-1 text-center">Beschrijving</span>
            <textarea
              name="description"
              className="mt-2 mb-2 p-2 rounded border border-gray-600 w-80 centered-input text-center"
              rows={3}
              required
            />
          </label>
          <button
            type="submit"
            className="mt-6 justify-center bg-[#184e77] text-white border-none rounded-md px-4 py-2 font-semibold cursor-pointer text-lg"
          >
            Spot toevoegen
          </button>
        </form>

      </section>
    </main>
  );
}
