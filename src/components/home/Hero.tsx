import Image from "next/image";

import HeroDate from "./HeroDate";

const Hero = () => {
  return (
    <section className="px-4 py-[30px] lg:px-0">
      <div className="mx-auto w-full max-w-280">
        <div className="flex min-h-[283px] flex-col overflow-hidden rounded-3xl border border-bazar-border bg-bazar-surface px-4 py-4 lg:h-[283px] lg:flex-row lg:items-center lg:justify-between">
          {/* Left Content */}
          <div className="w-full max-w-144">
            <div className="inline-flex h-7 items-center rounded-full bg-bazar-primary/10 px-3 text-sm font-medium text-bazar-primary">
              <HeroDate />
            </div>

            <h1 className="mt-2 max-w-120 text-[32px] leading-[1.25] font-bold text-bazar-text sm:text-4xl sm:leading-[45px]">
              আজকের বাজারের দাম এক নজরে
            </h1>

            <p className="mt-4 max-w-144 text-base leading-6 text-bazar-muted">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম - বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <a
              href="#সব-পণ্য"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-bazar-primary px-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-bazar-primary-hover hover:shadow-md"
            >
              সব পণ্য দেখুন
            </a>
          </div>

          {/* Right Image */}
          <div className="mt-8 flex w-full items-center justify-center lg:mt-0 lg:h-[251px] lg:w-[315px] lg:shrink-0">
            <Image
              src="/assets/images/bazar-hero.png"
              alt="বাজারের নিত্যপ্রয়োজনীয় পণ্য"
              width={285}
              height={263}
              priority
              className="h-auto w-[250px] object-contain sm:w-[280px] lg:w-[285px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
