const CategoryLoading = () => {
  return (
    <main className="min-h-screen bg-bazar-bg">
      <div className="mx-auto w-full max-w-[1120px] px-4 py-6 lg:px-0">
        {/* Header Skeleton */}
        <div className="mb-7 flex h-[106px] animate-pulse items-center gap-4 rounded-2xl border border-bazar-border bg-bazar-surface p-6">
          <div className="size-14 rounded-xl bg-bazar-border" />

          <div>
            <div className="h-6 w-28 rounded-md bg-bazar-border" />
            <div className="mt-3 h-3 w-48 rounded bg-bazar-border" />
          </div>
        </div>

        {/* Count + Sort Skeleton */}
        <div className="mb-5 flex items-center justify-between">
          <div className="h-4 w-40 animate-pulse rounded bg-bazar-border" />

          <div className="h-9 w-36 animate-pulse rounded-lg bg-bazar-border" />
        </div>

        {/* Cards Skeleton */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="min-h-[128px] animate-pulse rounded-2xl border border-bazar-border bg-bazar-surface p-4"
            >
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-xl bg-bazar-border" />

                <div className="flex-1">
                  <div className="h-4 w-2/3 rounded bg-bazar-border" />
                  <div className="mt-2 h-3 w-1/3 rounded bg-bazar-border" />
                </div>
              </div>

              <div className="mt-5 h-3 w-20 rounded bg-bazar-border" />
              <div className="mt-2 h-5 w-24 rounded bg-bazar-border" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CategoryLoading;
