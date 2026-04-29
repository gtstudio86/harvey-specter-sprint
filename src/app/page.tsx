"use client";

import { useState } from "react";

const heroImage =
  "https://www.figma.com/api/mcp/asset/424bfd41-7764-46b6-b716-1b5819917c8f";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

const portfolioProjects = [
  {
    title: "Surfers Paradise",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/5d68e25e-fe4f-48fb-83f3-10de98f890c7",
    desktopH: "md:h-[744px]",
  },
  {
    title: "Cyberpunk Caffe",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/88ce5ed2-a405-4735-8c53-cff82806103b",
    desktopH: "md:h-[699px]",
  },
  {
    title: "Agency 976",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/54037724-ee57-41b4-ae53-e59debb80d7c",
    desktopH: "md:h-[699px]",
  },
  {
    title: "Minimal Playground",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/1cdde88b-72d9-40c4-b360-44b3df790f77",
    desktopH: "md:h-[744px]",
  },
];

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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#fafafa]" style={{ fontFamily: "var(--font-inter)" }}>
      {/* Hero + Nav
          isolate creates a stacking context so that -z-10 keeps the image
          inside the section, not behind the page background.
          No overflow-clip — the dropdown needs to spill below. */}
      <section className="isolate relative flex flex-col items-center justify-between md:justify-start md:gap-[240px] min-h-svh md:h-[847px] px-8 pb-12 md:pb-0">

        {/* Background photo — behind everything in this stacking context */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <img
            alt=""
            src={heroImage}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Frosted blur strip — gradient mask prevents hard edge */}
        <div
          className="absolute left-0 right-0 bottom-0 h-[45%] backdrop-blur-[10px] pointer-events-none"
          style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 35%)" }}
        />

        {/* Nav */}
        <nav className="relative z-20 flex items-center justify-between w-full py-6">
          <span className="font-semibold text-base text-black tracking-[-0.64px] capitalize">
            H.Studio
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex gap-14 font-semibold text-base text-black tracking-[-0.64px] capitalize">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="leading-normal hover:opacity-60 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:block bg-black text-white text-sm font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px] cursor-pointer hover:bg-zinc-800 transition-colors">
            Let&apos;s talk
          </button>

          {/* Hamburger / X — mobile only.
              Nav is at z-20; dropdown starts at top-[72px] so it never
              overlaps this button — no z-index battle needed. */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 cursor-pointer"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <span className="relative block w-6 h-4">
                <span className="absolute inset-0 flex items-center">
                  <span className="block w-6 h-[2px] bg-white rotate-45" />
                </span>
                <span className="absolute inset-0 flex items-center">
                  <span className="block w-6 h-[2px] bg-white -rotate-45" />
                </span>
              </span>
            ) : (
              <span className="flex flex-col gap-[5px]">
                <span className="block w-6 h-[2px] bg-black" />
                <span className="block w-6 h-[2px] bg-black" />
                <span className="block w-6 h-[2px] bg-black" />
              </span>
            )}
          </button>
        </nav>

        {/* Mobile dropdown — slides down from nav, never covers it */}
        <div
          className={`md:hidden absolute left-0 right-0 z-30 bg-black overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 py-10" : "max-h-0 py-0"
          }`}
          style={{ top: "72px" }}
        >
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-semibold text-2xl text-white tracking-[-0.1em] capitalize hover:opacity-70 transition-opacity"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="mt-2 border border-white text-white text-sm font-medium tracking-[-0.56px] px-6 py-3 rounded-[24px] cursor-pointer hover:bg-white hover:text-black transition-colors">
              Let&apos;s talk
            </button>
          </div>
        </div>

        {/* Hero text
            No z-index on the wrapper — a stacking context here would trap
            mix-blend-overlay inside it, cutting off blending with the image.
            z-10 lives on each <p> directly so they participate in the section's
            stacking context and can blend with the image at -z-10. */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-start pb-[15px] w-full">

            {/* "[Hello i'm]" label */}
            <div className="flex items-center justify-center md:justify-start mb-[-15px] px-[18px] w-full">
              <p
                className="relative z-10 font-normal leading-[1.1] mix-blend-overlay text-white text-sm uppercase whitespace-nowrap"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                [ Hello i&apos;m ]
              </p>
            </div>

            {/* "Harvey   Specter" */}
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

          {/* Description + CTA — centered on mobile, right-aligned on desktop
              relative z-10 keeps it above the blur overlay (auto-z, step 6) */}
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

        {/* Label + rule */}
        <div className="flex flex-col gap-3 items-end w-full mb-6 md:mb-8">
          <p className="text-sm text-[#1f1f1f] text-right uppercase leading-[1.1]" style={{ fontFamily: "var(--font-geist-mono)" }}>
            [ 8+ years in industry ]
          </p>
          <div className="w-full h-px bg-black/20" />
        </div>

        {/* Typographic cascade
            Desktop: staggered indentation at 96px Inter Light
            Mobile:  centred stack at 32px */}
        <div className="flex flex-col gap-2 items-center md:items-start">

          {/* Mobile-only 001 label */}
          <p className="md:hidden text-sm text-[#1f1f1f] leading-[1.1] mb-1" style={{ fontFamily: "var(--font-geist-mono)" }}>
            001
          </p>

          {/* Line 1: A CREATIVE DIRECTOR   / */}
          <div className="flex items-start gap-3 uppercase">
            <p className="font-light text-[32px] md:text-[96px] text-black tracking-[-0.08em] leading-[0.84] whitespace-pre">
              {`A creative director   /`}
            </p>
            {/* Desktop 001 label — sits inline top-right of first line */}
            <p className="hidden md:block text-sm text-[#1f1f1f] leading-[1.1] pt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>
              001
            </p>
          </div>

          {/* Line 2: PHOTOGRAPHER — indented on desktop */}
          <div className="w-full flex justify-center md:justify-start md:pl-[214px] uppercase">
            <p className="font-light text-[32px] md:text-[96px] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              Photographer
            </p>
          </div>

          {/* Line 3: BORN & RAISED — deeply indented on desktop */}
          <div className="w-full flex justify-center md:justify-start md:pl-[610px] uppercase">
            <p className="font-light text-[32px] md:text-[96px] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              Born{" "}
              <span className="font-normal italic" style={{ fontFamily: "var(--font-playfair)" }}>&</span>
              {" "}raised
            </p>
          </div>

          {/* Line 4: ON THE SOUTH SIDE — full-width left on desktop */}
          <div className="w-full flex justify-center md:justify-start uppercase">
            <p className="font-light text-[32px] md:text-[96px] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              on the south side
            </p>
          </div>

          {/* Line 5: OF CHICAGO. + [ creative freelancer ] label */}
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

          {/* [ About ] label — desktop only (left column) */}
          <p className="hidden md:block text-sm text-[#1f1f1f] uppercase leading-[1.1] whitespace-nowrap" style={{ fontFamily: "var(--font-geist-mono)" }}>
            [ About ]
          </p>

          {/* Right column */}
          <div className="flex flex-col gap-5 md:flex-row md:gap-8 md:items-end md:w-[983px]">

            {/* Mobile-only header: 002 then [ About ] */}
            <div className="flex flex-col gap-5 md:hidden">
              <p className="text-sm text-[#1f1f1f] uppercase leading-[1.1]" style={{ fontFamily: "var(--font-geist-mono)" }}>002</p>
              <p className="text-sm text-[#1f1f1f] uppercase leading-[1.1]" style={{ fontFamily: "var(--font-geist-mono)" }}>[ About ]</p>
            </div>

            {/* Bracketed text block */}
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

            {/* 002 (desktop only) + portrait photo */}
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

        {/* [ services ] label */}
        <p className="text-sm text-white uppercase leading-[1.1] mb-8 md:mb-12" style={{ fontFamily: "var(--font-geist-mono)" }}>
          [ services ]
        </p>

        {/* [4]  ·  Deliverables — scales from 32px to 96px */}
        <div
          className="flex items-center justify-between text-white uppercase font-light tracking-[-0.08em] mb-12 md:mb-[48px]"
          style={{ fontSize: "clamp(2rem, 6.67vw, 6rem)", lineHeight: "normal" }}
        >
          <span>[4]</span>
          <span>Deliverables</span>
        </div>

        {/* Service rows */}
        <div className="flex flex-col gap-12">
          {services.map((svc) => (
            <div key={svc.num} className="flex flex-col gap-[9px]">

              {/* Number + rule */}
              <p className="text-sm text-white uppercase leading-[1.1]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                {svc.num}
              </p>
              <div className="w-full h-px bg-white/25 mb-[9px]" />

              {/* Name  |  description + image
                  Desktop: flex-row justify-between (name left, desc+img right)
                  Mobile: flex-col stacked */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <p className="font-bold italic text-[36px] text-white tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap shrink-0">
                  {svc.name}
                </p>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <p className="text-sm text-white leading-[1.3] tracking-[-0.04em] md:w-[393px]">
                    {svc.desc}
                  </p>
                  <div className="relative size-[151px] shrink-0 overflow-hidden">
                    <img
                      src={svc.img}
                      alt={svc.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
      {/* Selected Work / Portfolio Section */}
      <section id="projects" className="px-4 md:px-8 py-12 md:py-[80px]" style={{ fontFamily: "var(--font-inter)" }}>

        {/* Mobile header: 004 → [ portfolio ] → SELECTED WORK */}
        <div className="md:hidden flex flex-col gap-4 uppercase mb-8" style={{ fontFamily: "var(--font-geist-mono)" }}>
          <p className="text-sm text-[#1f1f1f] leading-[1.1]">004</p>
          <p className="text-sm text-[#1f1f1f] leading-[1.1]">[ portfolio ]</p>
          <p className="font-light text-[32px] text-black tracking-[-0.08em] leading-[0.86]" style={{ fontFamily: "var(--font-inter)" }}>Selected<br />Work</p>
        </div>

        {/* Desktop header: SELECTED WORK + 004 left | [ portfolio ] rotated right */}
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

        {/* Arrow icon shared by all cards */}
        {(() => {
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

          const ProjectCard = ({ title, tags, img, desktopH }: typeof portfolioProjects[0]) => (
            <div className="flex flex-col gap-2.5">
              <div className={`relative h-[390px] ${desktopH} overflow-hidden`}>
                <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <Tags tags={tags} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-black text-[24px] md:text-[36px] text-black tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap">
                  {title}
                </p>
                <Arrow />
              </div>
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
            <>
              {/* Two-column desktop grid, single-column mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-stretch">
                {/* Left column: projects 1 & 2 + desktop CTA
                    md:justify-between pushes the CTA to the bottom to align with right column */}
                <div className="flex flex-col gap-6 md:gap-0 md:justify-between">
                  <ProjectCard {...portfolioProjects[0]} />
                  <ProjectCard {...portfolioProjects[1]} />
                  <div className="hidden md:block">
                    <CTABlock />
                  </div>
                </div>
                {/* Right column: projects 3 & 4, starts 240px lower */}
                <div className="flex flex-col gap-6 md:pt-[240px]">
                  <ProjectCard {...portfolioProjects[2]} />
                  <ProjectCard {...portfolioProjects[3]} />
                </div>
              </div>
              {/* Mobile CTA below all projects */}
              <div className="md:hidden mt-6">
                <CTABlock />
              </div>
            </>
          );
        })()}

      </section>
      {/* Testimonials Section */}
      <section
        className="relative overflow-hidden px-4 md:px-8 py-16 md:py-[120px] md:h-[987px]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {/* Shared card style helper */}
        {/* ── DESKTOP ─────────────────────────────────────────────────
            DOM order controls stacking:
            1. Lukas card  → behind title
            2. Title       → on top of Lukas
            3. Marko/Sarah/Sofia → in front of title          */}

        {/* 1. Lukas — BEHIND title */}
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

        {/* 2. "Testimonials" title — centred in section, renders on top of Lukas */}
        <p className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 text-center font-medium text-black capitalize leading-[1.1]"
           style={{ fontSize: 198, letterSpacing: "-13.86px" }}>
          Testimonials
        </p>

        {/* 3. Marko — IN FRONT of title */}
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

        {/* 4. Sarah — IN FRONT of title */}
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

        {/* 5. Sofia — IN FRONT of title */}
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

        {/* ── MOBILE ──────────────────────────────────────────────── */}
        <div className="md:hidden flex flex-col gap-8">
          <p className="text-center font-medium text-black capitalize"
             style={{ fontSize: 64, letterSpacing: "-4.48px", lineHeight: 0.8 }}>
            Testimonials
          </p>
          {/* Two overlapping cards side by side */}
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

          {/* Title — horizontal on mobile, rotated vertical on desktop */}
          <p className="md:hidden font-light text-[32px] text-black tracking-[-0.08em] uppercase leading-[0.86] mb-8">
            Keep up with my latest news &amp; achievements
          </p>
          <div className="hidden md:flex items-center justify-center shrink-0 h-[706px] w-[110px] overflow-hidden">
            <div className="-rotate-90 whitespace-nowrap">
              <p className="font-light text-[64px] text-black tracking-[-0.08em] uppercase leading-[0.86]">Keep up with my latest</p>
              <p className="font-light text-[64px] text-black tracking-[-0.08em] uppercase leading-[0.86]">news &amp; achievements</p>
            </div>
          </div>

          {/* Cards — horizontal scroll on mobile, fixed layout on desktop */}
          <div className="flex gap-4 md:gap-0 items-start overflow-x-auto md:overflow-visible md:w-[1020px] pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">

            {/* Card 1 */}
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

            {/* Vertical divider — desktop only */}
            <div className="hidden md:block self-stretch w-px bg-black/15 shrink-0 mx-[15px]" />

            {/* Card 2 — offset 120px down on desktop */}
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

            {/* Vertical divider — desktop only */}
            <div className="hidden md:block self-stretch w-px bg-black/15 shrink-0 mx-[15px]" />

            {/* Card 3 */}
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

        {/* ── Top: CTA + social links + divider ── */}
        <div className="flex flex-col gap-6 md:gap-[48px] mb-[48px] md:mb-[120px]">

          {/* Desktop: three-column row. Mobile: stacked */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-0">

            {/* CTA */}
            <div className="flex flex-col gap-3 md:w-[298px]">
              <p className="font-light italic text-[24px] text-white tracking-[-0.04em] uppercase leading-[1.1]">
                Have a <span className="font-black not-italic">project</span> in mind?
              </p>
              <button className="border border-white text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-[24px] w-fit cursor-pointer hover:bg-white hover:text-black transition-colors">
                Let&apos;s talk
              </button>
            </div>

            {/* Social — center col on desktop, stacked on mobile */}
            <div className="text-[18px] text-white tracking-[-0.04em] uppercase leading-[1.1] md:text-center md:w-[298px]">
              <p>Facebook</p>
              <p>Instagram</p>
              {/* x.com + linkedin appear below on mobile, in right col on desktop */}
              <p className="md:hidden">X.com</p>
              <p className="md:hidden">Linkedin</p>
            </div>

            {/* Right social col — desktop only */}
            <div className="hidden md:block text-[18px] text-white tracking-[-0.04em] uppercase leading-[1.1] text-right w-[298px]">
              <p>X.com</p>
              <p>Linkedin</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/20" />
        </div>

        {/* ── Bottom: wordmark + legal ── */}

        {/* Desktop bottom row */}
        <div className="hidden md:flex items-end justify-between">
          {/* H.Studio clipped wordmark + rotated credit */}
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
          {/* Legal */}
          <div className="flex gap-[34px] items-center pb-8 text-[12px] text-white uppercase tracking-[-0.03em]">
            <a href="#" className="underline hover:opacity-60 transition-opacity">Licences</a>
            <a href="#" className="underline hover:opacity-60 transition-opacity">Privacy policy</a>
          </div>
        </div>

        {/* Mobile bottom */}
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
