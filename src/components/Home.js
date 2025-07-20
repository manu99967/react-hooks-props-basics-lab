// src/components/Home.jsx
import React from "react";

export default function Home({ name, city, color }) {
  return (
    <div>
      <h1 style={{ color }}>{`${name} is a Web Developer from ${city}`}</h1>
    </div>
  );
}
