import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center gap-[3px] justify-center">
      <span className="text-white font-bold md:text-5xl text-4xl">FILM</span>
      <span className="border-l-[2px] border-white md:h-11 h-8"></span>
      <span className="text-white font-bold md:text-5xl text-4xl">ZONE</span>
    </div>
  );
}
