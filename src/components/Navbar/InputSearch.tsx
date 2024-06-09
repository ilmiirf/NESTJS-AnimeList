"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    const keyword = searchRef.current?.value;

    if (!keyword || keyword.trim() === "") return;

    router.push(`/search/${keyword}`);
  };
  return (
    <div className="relative">
      <input
        placeholder="Search..."
        className="p-3 rounded-lg w-full outline-none focus:bg-primary"
        ref={searchRef}
        onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
      />
      <button
        className="absolute top-2 end-2 text-secondary"
        onClick={handleSearch}
      >
        <MagnifyingGlass className="w-7 h-7" />
      </button>
    </div>
  );
};

export default InputSearch;
