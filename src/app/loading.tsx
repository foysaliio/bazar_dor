const Loading = () => {
  return (
    <main className="min-h-screen bg-bazar-bg">
      <div className="mx-auto w-full max-w-[1120px] px-4 py-8 lg:px-0">
        {/* Hero Skeleton */}
        <div className="h-[283px] animate-pulse rounded-3xl border border-bazar-border bg-bazar-surface" />

        {/* Section Skeleton */}
        <div className="mt-10">
          <div className="mb-5 h-7 w-44 animate-pulse rounded-lg bg-bazar-border" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-[128px] animate-pulse rounded-2xl border border-bazar-border bg-bazar-surface p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-xl bg-bazar-border" />

                  <div className="flex-1">
                    <div className="h-4 w-2/3 rounded bg-bazar-border" />
                    <div className="mt-2 h-3 w-1/3 rounded bg-bazar-border" />
                  </div>
                </div>

                <div className="mt-4 h-4 w-24 rounded bg-bazar-border" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
