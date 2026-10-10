import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";
import { ResearchAreas } from "@/components/research-areas";

export default function Home() {
  const descriptionParagraphs = aboutMe.description.split("\n\n");

  return (
    <div className="min-h-screen bg-[#f3f4ef] text-[#202923]">
      <div className="mx-auto max-w-screen-xl px-6 py-8 sm:px-10 md:py-14">
        <nav aria-label="Page sections" className="mb-10 flex gap-6 border-b border-[#c9cec5] pb-4 font-sans text-xs uppercase tracking-[0.14em] text-[#59645c]">
          <a className="transition-colors hover:text-[#a04f36]" href="#research">Research</a>
          <a className="transition-colors hover:text-[#a04f36]" href="#publications">Papers</a>
          <a className="transition-colors hover:text-[#a04f36]" href="#education">Background</a>
        </nav>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <aside className="md:col-span-4 md:border-r md:border-[#c9cec5] md:pr-8">
            <div className="md:sticky md:top-10">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </aside>

          <div className="space-y-14 md:col-span-8">
            {descriptionParagraphs[0] && (
              <section className="space-y-4 text-[#3e4941]">
                <p
                  className="font-serif text-base leading-7 [&_a]:text-[#202923] [&_a]:underline [&_a:hover]:text-[#a04f36]"
                  dangerouslySetInnerHTML={{ __html: descriptionParagraphs[0] }}
                />
              </section>
            )}

            {descriptionParagraphs.length > 1 && (
              <section className="space-y-4 text-[#3e4941]">
                {descriptionParagraphs.slice(1).map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-serif text-base leading-7 [&_a]:text-[#202923] [&_a]:underline [&_a:hover]:text-[#a04f36]"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </section>
            )}

            <p className="border-l-2 border-[#a04f36] bg-[#e9ebe4] px-4 py-3 font-sans text-sm leading-6 text-[#39463d]">
              I’m seeking internship opportunities and full-time roles for 2027!.
            </p>

            <ResearchAreas />

            {sectionOrder.map((sectionName) => {
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="scroll-mt-10">
                        <h2 className="mb-7 font-sans text-xs font-semibold tracking-[0.16em] text-[#59645c] uppercase">
                          News
                        </h2>
                        <div
                          aria-label="News announcements"
                          className="flex snap-x snap-proximity gap-6 overflow-x-auto overscroll-x-contain pb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a04f36]"
                          role="region"
                          tabIndex={0}
                        >
                          {newsData.map((news) => (
                            <div key={`${news.date}-${news.title}`} className="w-[min(82vw,20rem)] shrink-0 snap-start border-r border-[#c9cec5] pr-6 last:border-r-0">
                              <NewsEntry news={news} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="scroll-mt-10">
                        <h2 className="mb-7 font-sans text-xs font-semibold tracking-[0.16em] text-[#59645c] uppercase">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section key={sectionName} id="publications" className="scroll-mt-10">
                        <h2 className="mb-7 font-sans text-xs font-semibold tracking-[0.16em] text-[#59645c] uppercase">
                          Publications
                        </h2>
                        <div className="space-y-12">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="my-8 h-px bg-[#c9cec5]" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="scroll-mt-10">
                        <h2 className="mb-7 font-sans text-xs font-semibold tracking-[0.16em] text-[#59645c] uppercase">
                          Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="scroll-mt-10">
                        <h2 className="mb-7 font-sans text-xs font-semibold tracking-[0.16em] text-[#59645c] uppercase">
                          Portfolio
                        </h2>
                        <div className="space-y-12">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
