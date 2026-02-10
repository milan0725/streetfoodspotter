"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-xl p-6 my-4 shadow-md bg-white/80 max-w-[400px] transition-transform transform hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none">
      <div>{children}</div>
    </div>
  );
}
