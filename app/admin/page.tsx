export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#0b0f13] p-6 text-zinc-100">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-[#10151c] p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-amber-300">Private admin</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Portfolio Dashboard</h1>
            </div>
            <div className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-200">
              Login required
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Projects",
              "Achievements",
              "Certifications",
              "Experience",
              "Blog Posts",
              "Skills",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">{item}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-semibold text-white">0</span>
                  <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                    Draft
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-white/10 p-6 text-sm text-zinc-300">
            This private admin area is intentionally scaffolded as a secure placeholder for future authentication, CRUD workflows,
            publish controls, image uploads, and data management. The public portfolio reads from a structured content layer and
            can later be connected to a database or CMS.
          </div>
        </div>
      </div>
    </main>
  );
}
