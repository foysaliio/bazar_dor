"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

interface HomeLogoLinkProps {
  children: ReactNode;
}

const HomeLogoLink = ({ children }: HomeLogoLinkProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;

    event.preventDefault();

    router.replace("/");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link href="/" onClick={handleClick} className="flex items-center gap-3">
      {children}
    </Link>
  );
};

export default HomeLogoLink;
