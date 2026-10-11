const Footer = () => {
  return (
    <footer className="border-t border-bazar-border bg-bazar-surface">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-2.5 px-4 py-4 sm:flex-row sm:justify-between sm:gap-6 lg:px-0">
        {/* Brand Message */}
        <p className="text-center text-sm leading-5 text-bazar-muted sm:text-left">
          <span className="font-semibold text-bazar-text">বাজার দর</span>
          <span className="mx-1.5 text-bazar-border">•</span>
          প্রয়োজনীয় পণ্যের দাম এক নজরে
        </p>

        {/* Disclaimer */}
        <p className="max-w-[340px] text-center text-sm leading-5 text-bazar-muted sm:max-w-none sm:text-right">
          সকল দাম সম্ভাব্য
          <span className="mx-1.5 text-bazar-border">•</span>
          বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়
        </p>
      </div>
    </footer>
  );
};

export default Footer;
