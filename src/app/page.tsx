import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import NavMenu from "@/components/NavMenu";

const heroImage =
  "https://www.figma.com/api/mcp/asset/424bfd41-7764-46b6-b716-1b5819917c8f";

const services = [
  {
    num: "[ 1 ]",
    name: "Brand Discovery",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/2947bf99-3451-4f60-aa5c-a958dbe50417",
  },
  {
    num: "[ 2 ]",
    name: "Web design & Dev",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/246ce6c5-c040-4d47-b80e-64c6801fae19",
  },
  {
    num: "[ 3 ]",
    name: "Marketing",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/af5c2899-7c1f-49ef-bf12-422d4dcc413f",
  },
  {
    num: "[ 4 ]",
    name: "Photography",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/1ce0c9e6-edd7-4f1e-b431-e50e00468817",
  },
];

type SanityProject = {
  _id: string;
  title: string;
  tags: string[] | null;
  image: unknown;
};

const PROJECTS_QUERY = defineQuery(
  `*[_type == "project"] | order(order asc) {
    _id,
    title,
    tags,
    image
  }`
);

// Cards at index 0 and 3 are taller to create visual diagonal rhythm
function cardHeight(index: number) {
  return index === 0 || index === 3 ? "md:h-[744px]" : "md:h-[699px]";
}

function projectImageUrl(image: unknown, tall: boolean) {
  if (!image) return null;
  return urlFor(image).width(800).height(tall ? 744 : 699).fit("crop").url();
}

export default async function Home() {
  const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });

  const Arrow = () => (
    <div className="size-8 shrink-0 flex items-center justify-center rounded-full border border-black/30">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );

  const Tags = ({ tags }: { tags: string[] }) => (
    <div className="flex gap-3 items-center">
      {tags.map((t) => (
        <span key={t} className="backdrop-blur-[10px] bg-white/30 px-2 py-1 rounded-full text-sm font-medium text-[#111] tracking-[-0.04em] whitespace-nowrap">
          {t}
        </span>
      ))}
    </div>
  );

  const CTABlock = () => (
    <div className="flex items-stretch gap-3">
      <div className="flex flex-col justify-between shrink-0 w-4">
        <span className="block w-4 h-4 border-t border-l border-[#1f1f1f]" />
        <span className="block w-4 h-4 border-b border-l border-[#1f1f1f]" />
      </div>
      <div className="flex-1 flex flex-col gap-2.5 py-3">
        <p className="italic text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <button className="bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-[24px] w-fit cursor-pointer hover:bg-zinc-800 transition-colors">
          Let&apos;s talk
        </button>
      </div>
      <div className="flex flex-col justify-between shrink-0 w-4">
        <span className="block w-4 h-4 border-t border-r border-[#1f1f1f]" />
        <span className="block w-4 h-4 border-b border-r border-[#1f1f1f]" />
      </div>
    </div>
  );

  return (
    <main className="bg-[#fafafa]" style={{ fontFamily: "var(--font-inter)" }}>
      {/* Hero + Nav */}
      <section className="isolate relative flex flex-col items-center justify-between md:justify-start md:gap-[240px] min-h-svh md:h-[847px] px-8 pb-12 md:pb-0">

        <div className="absolute inset-0 -z-10 pointer-events-none">
          <img
            alt=""
            src={heroImage}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div
          className="absolute left-0 right-0 bottom-0 h-[45%] backdrop-blur-[10px] pointer-events-none"
          style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 35%)" }}
        />

        <NavMenu />

        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-start pb-[15px] w-full">
            <div className="flex items-center justify-center md:justify-start mb-[-15px] px-[18px] w-full">
              <p
                className="relative z-10 font-normal leading-[1.1] mix-blend-overlay text-white text-sm uppercase whitespace-nowrap"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                [ Hello i&apos;m ]
              </p>
            </div>
            <p
              className="relative z-10 w-full text-center font-medium text-white leading-[1.1] mix-blend-overlay capitalize mb-[-15px]"
              style={{
                fontSize: "clamp(2.5rem, 13.75vw, 12.375rem)",
                letterSpacing: "-0.07em",
              }}
            >
              Harvey&nbsp;&nbsp;&nbsp;Specter
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center md:items-end justify-center w-full mt-6 md:mt-0">
            <div className="flex flex-col gap-[17px] items-start">
              <p className="font-bold italic text-[#1f1f1f] text-sm tracking-[-0.56px] uppercase leading-[1.1] w-[260px] md:w-[294px]">
                <span>H.Studio is a </span>
                <span className="font-normal">full-service</span>
                <span>
                  {" "}creative studio creating beautiful digital experiences
                  and products. We are an{" "}
                </span>
                <span className="font-normal">award winning</span>
                <span>
                  {" "}design and art group specializing in branding, web
                  design and engineering.
                </span>
              </p>
              <button className="bg-black text-white text-sm font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px] cursor-pointer hover:bg-zinc-800 transition-colors">
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bio / Intro Section */}
      <section className="px-4 md:px-8 py-12 md:py-[120px]" style={{ fontFamily: "var(--font-inter)" }}>
        <div className="flex flex-col gap-3 items-end w-full mb-6 md:mb-8">
          <p className="text-sm text-[#1f1f1f] text-right uppercase leading-[1.1]" style={{ fontFamily: "var(--font-geist-mono)" }}>
            [ 8+ years in industry ]
          </p>
          <div className="w-full h-px bg-black/20" />
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="md:hidden text-sm text-[#1f1f1f] leading-[1.1] mb-1" style={{ fontFamily: "var(--font-geist-mono)" }}>
            001
          </p>
          <div className="flex items-start gap-3 uppercase">
            <p className="font-light text-[32px] md:text-[96px] text-black tracking-[-0.08em] leading-[0.84] whitespace-pre">
              {`A creative director   /`}
            </p>
            <p className="hidden md:block text-sm text-[#1f1f1f] leading-[1.1] pt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>
              001
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-start md:pl-[214px] uppercase">
            <p className="font-light text-[32px] md:text-[96px] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              Photographer
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-start md:pl-[610px] uppercase">
            <p className="font-light text-[32px] md:text-[96px] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              Born{" "}
              <span className="font-normal italic" style={{ fontFamily: "var(--font-playfair)" }}>&</span>
              {" "}raised
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-start uppercase">
            <p className="font-light text-[32px] md:text-[96px] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              on the south side
            </p>
          </div>
          <div className="w-full md:pl-[606px] flex flex-col items-center md:flex-row md:items-baseline md:gap-12 uppercase">
            <p className="font-light text-[32px] md:text-[96px] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              of chicago.
            </p>
            <p className="mt-3 md:mt-0 text-sm text-[#1f1f1f] leading-[1.1] uppercase whitespace-nowrap" style={{ fontFamily: "var(--font-geist-mono)" }}>
              [ creative freelancer ]
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 md:px-8 py-[80px]" style={{ fontFamily: "var(--font-inter)" }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <p className="hidden md:block text-sm text-[#1f1f1f] uppercase leading-[1.1] whitespace-nowrap" style={{ fontFamily: "var(--font-geist-mono)" }}>
            [ About ]
          </p>
          <div className="flex flex-col gap-5 md:flex-row md:gap-8 md:items-end md:w-[983px]">
            <div className="flex flex-col gap-5 md:hidden">
              <p className="text-sm text-[#1f1f1f] uppercase leading-[1.1]" style={{ fontFamily: "var(--font-geist-mono)" }}>002</p>
              <p className="text-sm text-[#1f1f1f] uppercase leading-[1.1]" style={{ fontFamily: "var(--font-geist-mono)" }}>[ About ]</p>
            </div>
            <div className="flex items-stretch gap-3 flex-1">
              <div className="flex flex-col justify-between shrink-0 w-4">
                <span className="block w-4 h-4 border-t border-l border-[#1f1f1f]" />
                <span className="block w-4 h-4 border-b border-l border-[#1f1f1f]" />
              </div>
              <p className="flex-1 text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em] py-3">
                Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
              </p>
              <div className="flex flex-col justify-between shrink-0 w-4">
                <span className="block w-4 h-4 border-t border-r border-[#1f1f1f]" />
                <span className="block w-4 h-4 border-b border-r border-[#1f1f1f]" />
              </div>
            </div>
            <div className="flex gap-6 items-start shrink-0">
              <p className="hidden md:block text-sm text-[#1f1f1f] leading-[1.1] uppercase" style={{ fontFamily: "var(--font-geist-mono)" }}>
                002
              </p>
              <div className="relative w-full md:w-[436px] md:h-[614px] aspect-[422/594] md:aspect-auto overflow-hidden">
                <img
                  src="https://www.figma.com/api/mcp/asset/92b32143-3c23-4c3e-8215-3f6c007aeab0"
                  alt="Portrait"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed photo */}
      <div className="relative w-full h-[500px] md:h-[900px] overflow-hidden">
        <img
          src="https://www.figma.com/api/mcp/asset/fbad5e40-675e-4ceb-b25c-b75c0b91e003"
          alt="Photographer with camera"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Services Section */}
      <section id="services" className="bg-black px-4 md:px-8 py-12 md:py-[80px]" style={{ fontFamily: "var(--font-inter)" }}>
        <p className="text-sm text-white uppercase leading-[1.1] mb-8 md:mb-12" style={{ fontFamily: "var(--font-geist-mono)" }}>
          [ services ]
        </p>
        <div
          className="flex items-center justify-between text-white uppercase font-light tracking-[-0.08em] mb-12 md:mb-[48px]"
          style={{ fontSize: "clamp(2rem, 6.67vw, 6rem)", lineHeight: "normal" }}
        >
          <span>[4]</span>
          <span>Deliverables</span>
        </div>
        <div className="flex flex-col gap-12">
          {services.map((svc) => (
            <div key={svc.num} className="flex flex-col gap-[9px]">
              <p className="text-sm text-white uppercase leading-[1.1]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                {svc.num}
              </p>
              <div className="w-full h-px bg-white/25 mb-[9px]" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <p className="font-bold italic text-[36px] text-white tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap shrink-0">
                  {svc.name}
                </p>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <p className="text-sm text-white leading-[1.3] tracking-[-0.04em] md:w-[393px]">
                    {svc.desc}
                  </p>
                  <div className="relative size-[151px] shrink-0 overflow-hidden">
                    <img src={svc.img} alt={svc.name} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work / Portfolio Section */}
      <section id="projects" className="px-4 md:px-8 py-12 md:py-[80px]" style={{ fontFamily: "var(--font-inter)" }}>

        <div className="md:hidden flex flex-col gap-4 uppercase mb-8" style={{ fontFamily: "var(--font-geist-mono)" }}>
          <p className="text-sm text-[#1f1f1f] leading-[1.1]">004</p>
          <p className="text-sm text-[#1f1f1f] leading-[1.1]">[ portfolio ]</p>
          <p className="font-light text-[32px] text-black tracking-[-0.08em] leading-[0.86]" style={{ fontFamily: "var(--font-inter)" }}>Selected<br />Work</p>
        </div>

        <div className="hidden md:flex items-start justify-between mb-[61px]">
          <div className="flex gap-2.5 items-start uppercase">
            <div className="font-light text-[96px] text-black tracking-[-0.08em]">
              <p className="leading-[0.86]">Selected</p>
              <p className="leading-[0.86]">Work</p>
            </div>
            <p className="text-sm text-[#1f1f1f] leading-[1.1] mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>004</p>
          </div>
          <div className="flex items-center justify-center h-[110px] w-4">
            <p className="-rotate-90 text-sm text-[#1f1f1f] leading-[1.1] uppercase whitespace-nowrap" style={{ fontFamily: "var(--font-geist-mono)" }}>
              [ portfolio ]
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-stretch">
          {/* Left column: first two projects + CTA */}
          <div className="flex flex-col gap-6 md:gap-0 md:justify-between">
            {(projects as SanityProject[]).slice(0, 2).map((project, i) => {
              const tall = i === 0;
              const imgUrl = projectImageUrl(project.image, tall);
              return (
                <div key={project._id} className="flex flex-col gap-2.5">
                  <div className={`relative h-[390px] ${cardHeight(i)} overflow-hidden bg-zinc-200`}>
                    {imgUrl && (
                      <img src={imgUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                    )}
                    <div className="absolute bottom-4 left-4">
                      <Tags tags={project.tags ?? []} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-black text-[24px] md:text-[36px] text-black tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap">
                      {project.title}
                    </p>
                    <Arrow />
                  </div>
                </div>
              );
            })}
            <div className="hidden md:block">
              <CTABlock />
            </div>
          </div>

          {/* Right column: last two projects, starts 240px lower */}
          <div className="flex flex-col gap-6 md:pt-[240px]">
            {(projects as SanityProject[]).slice(2, 4).map((project, i) => {
              const tall = i === 1; // index 3 overall
              const imgUrl = projectImageUrl(project.image, tall);
              return (
                <div key={project._id} className="flex flex-col gap-2.5">
                  <div className={`relative h-[390px] ${cardHeight(i + 2)} overflow-hidden bg-zinc-200`}>
                    {imgUrl && (
                      <img src={imgUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                    )}
                    <div className="absolute bottom-4 left-4">
                      <Tags tags={project.tags ?? []} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-black text-[24px] md:text-[36px] text-black tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap">
                      {project.title}
                    </p>
                    <Arrow />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:hidden mt-6">
          <CTABlock />
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="relative overflow-hidden px-4 md:px-8 py-16 md:py-[120px] md:h-[987px]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <div className="hidden md:flex absolute items-center justify-center"
             style={{ left: 676, top: 272, width: 362, height: 204 }}>
          <div style={{ transform: "rotate(2.9deg)" }}>
            <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 w-[353px] flex flex-col gap-4">
              <img src="https://www.figma.com/api/mcp/asset/bd908ab8-1438-44d1-a8d3-f93300537c98" alt="" className="h-[19px] w-auto object-contain object-left" />
              <p className="text-[18px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">Professional, precise, and incredibly fast at handling complex product visualizations and templates.</p>
              <p className="font-black text-[16px] text-black tracking-[-0.04em] uppercase">Lukas Weber</p>
            </div>
          </div>
        </div>

        <p className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 text-center font-medium text-black capitalize leading-[1.1]"
           style={{ fontSize: 198, letterSpacing: "-13.86px" }}>
          Testimonials
        </p>

        <div className="hidden md:flex absolute items-center justify-center"
             style={{ left: 102, top: 142, width: 381, height: 295 }}>
          <div style={{ transform: "rotate(-6.85deg)" }}>
            <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 w-[353px] flex flex-col gap-4">
              <img src="https://www.figma.com/api/mcp/asset/e2a86c78-aa55-4cb1-bda9-7e6fc1dcd6b5" alt="" className="h-[19px] w-auto object-contain object-left" />
              <p className="text-[18px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.</p>
              <p className="font-black text-[16px] text-black tracking-[-0.04em] uppercase">Marko Stojković</p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex absolute items-center justify-center"
             style={{ left: 305, top: 553, width: 363, height: 280 }}>
          <div style={{ transform: "rotate(2.23deg)" }}>
            <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 w-[353px] flex flex-col gap-4">
              <img src="https://www.figma.com/api/mcp/asset/c668990d-4553-44be-b73b-ec470a685333" alt="" className="h-[31px] w-auto object-contain object-left" />
              <p className="text-[18px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don&apos;t just make things look good; they solve business problems through visual clarity.</p>
              <p className="font-black text-[16px] text-black tracking-[-0.04em] uppercase">Sarah Jenkins</p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex absolute items-center justify-center"
             style={{ left: 987, top: 546, width: 367, height: 228 }}>
          <div style={{ transform: "rotate(-4.15deg)" }}>
            <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 w-[353px] flex flex-col gap-4">
              <img src="https://www.figma.com/api/mcp/asset/1efdbeb4-2760-4535-837c-21e98487d9a6" alt="" className="h-[36px] w-auto object-contain object-left" />
              <p className="text-[18px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.</p>
              <p className="font-black text-[16px] text-black tracking-[-0.04em] uppercase">Sofia Martínez</p>
            </div>
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-8">
          <p className="text-center font-medium text-black capitalize"
             style={{ fontSize: 64, letterSpacing: "-4.48px", lineHeight: 0.8 }}>
            Testimonials
          </p>
          <div className="flex items-start">
            <div className="relative z-10 shrink-0 -mr-2.5" style={{ transform: "rotate(-3.5deg)" }}>
              <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 w-[260px] flex flex-col gap-4">
                <img src="https://www.figma.com/api/mcp/asset/d20752a8-da0d-48d9-be2b-d533d0b9f20f" alt="" className="h-[19px] w-auto object-contain object-left" />
                <p className="text-[18px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.</p>
                <p className="font-black text-[16px] text-black tracking-[-0.04em] uppercase">Marko Stojković</p>
              </div>
            </div>
            <div className="shrink-0" style={{ transform: "rotate(2deg)" }}>
              <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 w-[260px] flex flex-col gap-4">
                <img src="https://www.figma.com/api/mcp/asset/1859888a-9de3-4692-a793-600be9afcc0f" alt="" className="h-[36px] w-auto object-contain object-left" />
                <p className="text-[18px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.</p>
                <p className="font-black text-[16px] text-black tracking-[-0.04em] uppercase">Sofia Martínez</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="bg-[#f3f3f3] px-4 md:px-8 py-16 md:py-[120px]" style={{ fontFamily: "var(--font-inter)" }}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <p className="md:hidden font-light text-[32px] text-black tracking-[-0.08em] uppercase leading-[0.86] mb-8">
            Keep up with my latest news &amp; achievements
          </p>
          <div className="hidden md:flex items-center justify-center shrink-0 h-[706px] w-[110px] overflow-hidden">
            <div className="-rotate-90 whitespace-nowrap">
              <p className="font-light text-[64px] text-black tracking-[-0.08em] uppercase leading-[0.86]">Keep up with my latest</p>
              <p className="font-light text-[64px] text-black tracking-[-0.08em] uppercase leading-[0.86]">news &amp; achievements</p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-0 items-start overflow-x-auto md:overflow-visible md:w-[1020px] pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex flex-col gap-4 shrink-0 w-[300px] md:w-[353px] md:h-[581px] md:justify-between">
              <div className="relative h-[398px] md:h-[469px] overflow-hidden shrink-0">
                <img src="https://www.figma.com/api/mcp/asset/02527bb0-edd9-4fc9-aec6-36bdf2c4ce2b" alt="News 1" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <p className="text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="flex items-center gap-2.5 border-b border-black pb-1 w-fit">
                <span className="text-sm font-medium text-black tracking-[-0.04em]">Read more</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 14.5L14.5 3.5M14.5 3.5H6.5M14.5 3.5V11.5" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <div className="hidden md:block self-stretch w-px bg-black/15 shrink-0 mx-[15px]" />
            <div className="flex flex-col gap-4 shrink-0 w-[300px] md:w-[353px] md:pt-[120px]">
              <div className="relative h-[398px] md:h-[469px] overflow-hidden shrink-0">
                <img src="https://www.figma.com/api/mcp/asset/cf53b6f5-931f-4a79-8cb0-4cadb41d0089" alt="News 2" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <p className="text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="flex items-center gap-2.5 border-b border-black pb-1 w-fit">
                <span className="text-sm font-medium text-black tracking-[-0.04em]">Read more</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 14.5L14.5 3.5M14.5 3.5H6.5M14.5 3.5V11.5" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <div className="hidden md:block self-stretch w-px bg-black/15 shrink-0 mx-[15px]" />
            <div className="flex flex-col gap-4 shrink-0 w-[300px] md:w-[353px] md:h-[581px] md:justify-between">
              <div className="relative h-[398px] md:h-[469px] overflow-hidden shrink-0">
                <img src="https://www.figma.com/api/mcp/asset/7499dc76-f81c-4725-9f59-1e96c44db54d" alt="News 3" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <p className="text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="flex items-center gap-2.5 border-b border-black pb-1 w-fit">
                <span className="text-sm font-medium text-black tracking-[-0.04em]">Read more</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 14.5L14.5 3.5M14.5 3.5H6.5M14.5 3.5V11.5" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black pt-12 md:pt-[48px] px-4 md:px-8" style={{ fontFamily: "var(--font-inter)" }}>
        <div className="flex flex-col gap-6 md:gap-[48px] mb-[48px] md:mb-[120px]">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-0">
            <div className="flex flex-col gap-3 md:w-[298px]">
              <p className="font-light italic text-[24px] text-white tracking-[-0.04em] uppercase leading-[1.1]">
                Have a <span className="font-black not-italic">project</span> in mind?
              </p>
              <button className="border border-white text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-[24px] w-fit cursor-pointer hover:bg-white hover:text-black transition-colors">
                Let&apos;s talk
              </button>
            </div>
            <div className="text-[18px] text-white tracking-[-0.04em] uppercase leading-[1.1] md:text-center md:w-[298px]">
              <p>Facebook</p>
              <p>Instagram</p>
              <p className="md:hidden">X.com</p>
              <p className="md:hidden">Linkedin</p>
            </div>
            <div className="hidden md:block text-[18px] text-white tracking-[-0.04em] uppercase leading-[1.1] text-right w-[298px]">
              <p>X.com</p>
              <p>Linkedin</p>
            </div>
          </div>
          <div className="w-full h-px bg-white/20" />
        </div>

        <div className="hidden md:flex items-end justify-between">
          <div className="relative h-[219px] overflow-hidden w-[1093px]">
            <p
              className="absolute top-1/2 -translate-y-1/2 font-semibold text-white capitalize leading-[0.8] whitespace-nowrap"
              style={{ fontSize: 290, letterSpacing: "-17.4px", left: "calc(50% - 541.5px)" }}
            >
              H.Studio
            </p>
            <div className="absolute top-1/2 -translate-y-1/2 h-[160px] w-[15px] flex items-center justify-center" style={{ left: "calc(50% - 546.5px)" }}>
              <p className="-rotate-90 text-white text-xs uppercase whitespace-nowrap leading-[1.1]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                [ Coded By Claude ]
              </p>
            </div>
          </div>
          <div className="flex gap-[34px] items-center pb-8 text-[12px] text-white uppercase tracking-[-0.03em]">
            <a href="#" className="underline hover:opacity-60 transition-opacity">Licences</a>
            <a href="#" className="underline hover:opacity-60 transition-opacity">Privacy policy</a>
          </div>
        </div>

        <div className="md:hidden flex flex-col items-center gap-4 h-[150px] overflow-hidden">
          <div className="flex gap-[34px] items-center text-[12px] text-white uppercase tracking-[-0.03em]">
            <a href="#" className="underline">Licences</a>
            <a href="#" className="underline">Privacy policy</a>
          </div>
          <p className="text-white uppercase leading-[1.1] text-center" style={{ fontSize: 10, fontFamily: "var(--font-geist-mono)" }}>
            [ Coded By Claude ]
          </p>
          <p className="font-semibold text-white capitalize leading-[0.8] whitespace-nowrap text-center" style={{ fontSize: 91.425, letterSpacing: "-5.49px" }}>
            H.Studio
          </p>
        </div>
      </footer>
    </main>
  );
}
