"use client";

import { ChevronDown, LogOut, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

const NavbarAuth = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error("সাইন আউট করা যায়নি");
      return;
    }

    setIsOpen(false);

    toast.success("সফলভাবে সাইন আউট হয়েছে");

    router.push("/");
    router.refresh();
  };

  if (isPending) {
    return (
      <div className="h-10 w-[150px] animate-pulse rounded-lg bg-bazar-soft" />
    );
  }

  if (!session?.user) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/signin"
          className="rounded-lg px-4 py-2 text-sm font-medium text-bazar-text transition-all duration-300 hover:bg-bazar-soft hover:text-bazar-primary"
        >
          সাইন ইন
        </Link>

        <Link
          href="/signup"
          className="rounded-lg bg-bazar-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-bazar-primary-hover hover:shadow-md"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  const firstLetter = session.user.name?.trim().charAt(0).toUpperCase() || "U";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-10 cursor-pointer items-center gap-2 rounded-xl px-2.5 transition-all duration-300 hover:bg-bazar-soft"
      >
        {/* Avatar */}
        <div className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-bazar-primary">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name || "User"}
              width={32}
              height={32}
              className="size-8 rounded-full object-cover"
            />
          ) : (
            <span className="translate-y-px text-sm leading-none font-semibold text-white">
              {firstLetter}
            </span>
          )}
        </div>

        {/* Name */}
        <span className="hidden max-w-[130px] truncate text-sm font-medium text-bazar-text sm:block">
          {session.user.name}
        </span>

        <ChevronDown
          size={15}
          className={`shrink-0 text-bazar-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] right-0 z-[60] w-[200px] overflow-hidden rounded-xl border border-bazar-border bg-white p-1.5 shadow-lg">
          <Link
            href="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-bazar-text transition-all duration-300 hover:bg-bazar-soft hover:text-bazar-primary"
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-bazar-soft">
              <UserRound size={15} />
            </span>
            আমার প্রোফাইল
          </Link>

          <div className="my-1 h-px bg-bazar-border" />

          <button
            type="button"
            onClick={handleSignOut}
            className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-bazar-danger transition-all duration-300 hover:bg-red-50"
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-red-50">
              <LogOut size={15} />
            </span>
            সাইন আউট
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarAuth;
