import { researchAreas } from "@/data/research-areas";

export function ResearchAreas() {
  return (
    <section id="research" className="scroll-mt-10">
      <div className="mb-5 flex items-end justify-between border-b border-[#c9cec5] pb-3">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#59645c]">
          Research areas
        </h2>
        <span className="font-sans text-xs text-[#7a817a]">Selected themes</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {researchAreas.map((area) => (
          <article
            key={area.title}
            className="min-h-44 border border-[#c9cec5] border-t-2 border-t-[#a04f36] bg-white/50 p-4 sm:p-5"
          >
            <h3 className="font-serif text-lg leading-snug text-[#202923]">
              {area.title}
            </h3>
            <p className="mt-3 font-sans text-sm leading-6 text-[#5d665f]">
              {area.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}