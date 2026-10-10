"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

interface HomeLogoLinkProps {
  children: ReactNode;
}

const HomeLogoLink = ({ children }: HomeLogoLinkProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      event.preventDefault();

      window.history.replaceState(null, "", "/");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Link href="/" onClick={handleClick} className="flex items-center gap-3">
      {children}
    </Link>
  );
};

export default HomeLogoLink;
