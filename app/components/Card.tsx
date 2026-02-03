import React from "react";


interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div
      style={{
        borderRadius: "8px",
        padding: "1.5rem",
        margin: "1rem 0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        background: "#a9a7a5",
        maxWidth: "400px",
      }}
    >
      <div>{children}</div>
    </div>
  );
}
