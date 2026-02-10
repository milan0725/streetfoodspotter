"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Button({ children, className = "", href, ...props }: ButtonProps) {
  const base =
    "bg-[#184e77] text-white border-none rounded-md px-3 py-2 font-semibold transition-transform transform hover:scale-105 hover:-translate-y-1 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#184e77]/30 " +
    className;

  if (href) {
    return (
      <Link href={href} className={base} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={base}>
      {children}
    </button>
  );
}
