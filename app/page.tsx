export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
            <svg className="h-10 w-10 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
          </div>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground">Sahii India</h1>
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm text-muted-foreground shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          Coming Soon
        </div>

        {/* Main Heading */}
        <div className="space-y-6">
          <h2 className="font-serif text-5xl font-medium leading-tight tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
            Expert Apple repairs,
            <br />
            right at your doorstep
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Professional repair services for your iPhone, iPad, Mac, and other Apple devices. We come to you.
          </p>
        </div>
      </div>
    </main>
  )
}
