"use client";

import { ArrowLeft, Home, SearchX } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="mx-auto flex min-h-[75vh] w-full max-w-[1120px] items-center justify-center px-4 py-16 lg:px-0">
      <div className="relative w-full max-w-[680px] overflow-hidden rounded-[28px] border border-bazar-border bg-bazar-surface px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16">
        {/* Decorative Background */}
        <div className="absolute -top-20 -left-20 size-48 rounded-full bg-bazar-primary/5" />
        <div className="absolute -right-16 -bottom-20 size-44 rounded-full bg-bazar-primary/5" />

        <div className="relative z-10">
          {/* Icon */}
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-bazar-soft text-bazar-primary">
            <SearchX size={30} strokeWidth={1.8} />
          </div>

          {/* 404 */}
          <p className="mt-6 text-[64px] leading-none font-bold tracking-tight text-bazar-primary sm:text-[78px]">
            ৪০৪
          </p>

          {/* Title */}
          <h1 className="mt-4 text-2xl font-bold text-bazar-text sm:text-[28px]">
            পেজটি খুঁজে পাওয়া যায়নি
          </h1>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-[470px] text-sm leading-7 text-bazar-muted sm:text-[15px]">
            আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না। লিংকটি ভুল হতে পারে অথবা
            পেজটি সরিয়ে ফেলা হয়েছে।
          </p>

          {/* Divider */}
          <div className="mx-auto mt-7 h-px w-20 bg-bazar-border" />

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-bazar-primary px-5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-bazar-primary-hover hover:shadow-md"
            >
              <Home size={17} />
              হোম পেজে ফিরে যান
            </Link>

            <button
              type="button"
              onClick={() => history.back()}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-bazar-border bg-white px-5 text-sm font-medium text-bazar-text transition-all duration-300 hover:border-bazar-primary hover:bg-bazar-soft hover:text-bazar-primary"
            >
              <ArrowLeft size={17} />
              আগের পেজে যান
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
