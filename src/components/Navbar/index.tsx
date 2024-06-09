import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-accent-300">
      <nav className="flex md:flex-row flex-col justify-between md:items-center px-10 py-6 gap-3">
        <Link href={"/"} className="font-bold text-primary text-2xl">
          AnimeList
        </Link>
        <InputSearch />
      </nav>
    </header>
  );
};

export default Navbar;
