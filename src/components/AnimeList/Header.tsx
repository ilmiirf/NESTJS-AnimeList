"use client";

import Link from "next/link";
import React from "react";

interface HeaderProps {
  title: string;
  linkHref?: string;
  linkText?: string;
}
const Header = ({ title, linkHref, linkText }: HeaderProps) => {
  return (
    <div className="px-6 py-8 flex justify-between items-center text-primary ">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {linkHref && linkText && (
        <Link
          href={linkHref}
          className="text-md underline hover:text-accent-200 transition-all"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default Header;
