import type { Metadata } from "next";

const sections = [
  "Overview",
  "Problem",
  "Goals",
  "Research / Requirements",
  "Solution",
  "Design / Architecture",
  "Development",
  "Challenges",
  "Results",
  "Technologies",
  "Screenshots",
  "GitHub / Live Demo",
];

export const metadata: Metadata = {
  title: "Project Case Study | Ikasha Dissanayake",
  description: "Placeholder project case study template for future portfolio work.",
};

export default function ProjectCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#0b0f13] px-4 py-16 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-white/10 bg-[#10151c] p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.26em] text-amber-300">Case Study</p>
          <h1 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Project Case Study Placeholder</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
            This template is structured so software projects, UX work, IT support workflows, and networking initiatives can all be documented consistently.
          </p>

          <div className="mt-10 space-y-4">
            {sections.map((section, index) => (
              <div key={section} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-xl font-semibold text-white">{section}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  Placeholder content for this project section. Replace with a real overview, problem statement, research findings, implementation details, and results as needed.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
