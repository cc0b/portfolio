
/* ── Tokens ── */
const DARK = {
  bg: "#0e0e0d", bg2: "#141413", border: "rgba(232,228,216,0.07)",
  text: "#e8e4d8", muted: "rgba(232,228,216,0.42)", faint: "rgba(232,228,216,0.16)",
  accent: "#4cc9a0", accentDim: "rgba(76,201,160,0.10)",
};
const LIGHT = {
  bg: "#f6f3ec", bg2: "#ede9df", border: "rgba(20,19,15,0.09)",
  text: "#1a1916", muted: "rgba(20,19,15,0.42)", faint: "rgba(20,19,15,0.14)",
  accent: "#3a9f7e", accentDim: "rgba(58,159,126,0.08)",
};

const SERIF = "'Newsreader', Georgia, serif";
const SANS  = "'Inter', sans-serif";

/* tabular small-caps style for labels */
const LABEL = {
  fontFamily: SANS, fontSize: 11, letterSpacing: "0.14em",
  textTransform: "uppercase", fontWeight: 400,
};

function useTheme(isDark) { return isDark ? DARK : LIGHT; }

/* Reveal: entrance animation removed — it could not render reliably across runtimes.
   Content is rendered statically visible. This is a plain passthrough wrapper. */
function Reveal({ children, delay = 0, style = {} }) {
  return (
    <div style={style}>{children}</div>
  );
}

/* ── Nav — quiet, asymmetric ── */
function Nav({ page, setPage, isDark, setDark, t }) {
  const links = ["Index", "Work", "About", "Contact"];
  const route = (l) => l === "Index" ? "Home" : l;
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: t.bg,
      display: "grid", gridTemplateColumns: "180px 1fr auto",
      alignItems: "center", gap: 48,
      padding: "0 56px", height: 76,
      transition: "background 0.3s",
    }}>
      <button onClick={() => setPage("Home")} style={{
        background: "none", border: "none", cursor: "pointer", padding: 0,
        textAlign: "left",
      }}>
        <span style={{ fontFamily: SERIF, fontSize: 17, color: t.text, letterSpacing: "-0.005em" }}>Caleb Li</span>
      </button>

      <div style={{ display: "flex", gap: 36, justifyContent: "center" }}>
        {links.map((l, i) => (
          <button key={l} onClick={() => setPage(route(l))} style={{
            background: "none", border: "none", cursor: "pointer", padding: 0,
            display: "flex", alignItems: "baseline", gap: 6,
          }}>
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 10, color: t.muted, fontWeight: 300 }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span style={{
              fontFamily: SERIF, fontSize: 15,
              color: page === route(l) ? t.text : t.muted,
              fontWeight: 400, transition: "color 0.3s",
              borderBottom: page === route(l) ? `1px solid ${t.accent}` : "1px solid transparent",
              paddingBottom: 2,
            }}>
              {l}
            </span>
          </button>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 20, justifySelf: "end" }}>
        <span style={{ ...LABEL, color: t.muted, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 5, height: 5, background: t.accent, borderRadius: "50%", display: "inline-block" }}/>
          Available
        </span>
        <button
          onClick={() => setDark(d => !d)}
          aria-label="Toggle dark mode"
          title={isDark ? "Switch to light" : "Switch to dark"}
          style={{
            background: "none", border: "none", cursor: "pointer", padding: 0,
            display: "flex", alignItems: "center", gap: 10,
          }}
        >
          <span style={{ ...LABEL, color: t.muted }}>{isDark ? "Dark" : "Light"}</span>
          <span style={{
            position: "relative", width: 34, height: 18,
            borderRadius: 999, border: `1px solid ${t.faint}`,
            background: "none", transition: "border-color 0.3s",
            display: "inline-block", flexShrink: 0,
          }}>
            <span style={{
              position: "absolute", top: "50%", left: isDark ? 18 : 3,
              transform: "translateY(-50%)",
              width: 12, height: 12, borderRadius: "50%",
              background: t.text, transition: "left 0.3s cubic-bezier(0.4,0,0.2,1)",
            }}/>
          </span>
        </button>
      </div>
    </nav>
  );
}

/* ── Small reusable: section header with marginal number ── */
function SectionHeader({ num, label, t }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "60px 1fr", gap: 32,
      paddingBottom: 20, borderBottom: `1px solid ${t.border}`,
      alignItems: "baseline", marginBottom: 48,
    }}>
      <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 13, color: t.muted, fontWeight: 300 }}>§ {num}</span>
      <span style={{ ...LABEL, color: t.muted }}>{label}</span>
    </div>
  );
}

/* ── HomePage ── */
function HomePage({ setPage, t }) {
  const [hovered, setHovered] = React.useState(null);
  const projects = [
    { id: 1, name: "Good Study",       tag: "Note-taking, real-time sync", year: "2025" },
    { id: 2, name: "Velocity Bingo",   tag: "Event networking game",       year: "2025" },
    { id: 3, name: "MANFRD Portfolio", tag: "Personal site for a friend",   year: "2024" },
  ];

  return (
    <div style={{ paddingTop: 76 }}>
      {/* Hero — restrained, with marginal asides */}
      <section style={{
        minHeight: "calc(100vh - 76px)",
        padding: "140px 56px 80px",
        maxWidth: 1180, margin: "0 auto",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 220px", gap: 48, alignItems: "start" }}>
          {/* Left marginal number */}
          <Reveal>
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 13, color: t.muted, fontWeight: 300, paddingTop: 12 }}>
              § 00
            </span>
          </Reveal>

          {/* Center content */}
          <div>
            <Reveal>
              <h1 style={{
                fontFamily: SERIF, fontWeight: 300,
                fontSize: "clamp(56px, 7.4vw, 108px)",
                lineHeight: 1.02, letterSpacing: "-0.025em",
                color: t.text, marginBottom: 40,
              }}>
                Caleb Li
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p style={{
                fontFamily: SERIF, fontSize: 22, fontWeight: 400,
                lineHeight: 1.55, color: t.text, maxWidth: 560,
                marginBottom: 56,
              }}>
                Studying Business Analytics &amp; Information Systems at the University of Auckland.
                <span style={{ color: t.muted, fontStyle: "italic" }}>
                  &nbsp;Making things in the time between classes.
                </span>
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ display: "flex", gap: 28, alignItems: "baseline" }}>
                <button onClick={() => setPage("Work")} style={{
                  background: "none", border: "none", cursor: "pointer", padding: 0,
                  fontFamily: SERIF, fontStyle: "italic", fontSize: 17, color: t.text,
                  borderBottom: `1px solid ${t.text}`, paddingBottom: 4,
                }}>
                  See work
                </button>
                <button onClick={() => setPage("Contact")} style={{
                  background: "none", border: "none", cursor: "pointer", padding: 0,
                  fontFamily: SANS, fontSize: 13, color: t.muted,
                }}>
                  Get in touch
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right marginalia */}
          <Reveal delay={300} style={{ paddingTop: 12 }}>
            <div style={{ borderTop: `1px solid ${t.border}`, paddingTop: 16 }}>
              <p style={{ ...LABEL, color: t.muted, marginBottom: 10 }}>Currently</p>
              <p style={{ fontFamily: SERIF, fontSize: 14, lineHeight: 1.6, color: t.text, fontWeight: 400 }}>
                Second-year Commerce student. Open to internships and freelance work.
              </p>
              <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 13, lineHeight: 1.6, color: t.muted, marginTop: 16, fontWeight: 300 }}>
                Last updated&nbsp;
                <span style={{ fontStyle: "normal" }}>May 2026</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Work index */}
      <section style={{ padding: "0 56px 160px", maxWidth: 1180, margin: "0 auto" }}>
        <Reveal>
          <SectionHeader num="01" label="Selected Work · 2024 – 2025" t={t}/>
        </Reveal>

        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 60}>
            <div
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setPage("Work")}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 1fr 100px",
                gap: 32, alignItems: "baseline",
                padding: "32px 0",
                borderBottom: `1px solid ${t.border}`,
                cursor: "pointer",
                opacity: hovered !== null && hovered !== p.id ? 0.4 : 1,
                transition: "opacity 0.5s",
              }}
            >
              <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 13, color: t.muted, fontWeight: 300 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div style={{
                fontFamily: SERIF, fontSize: 28, color: t.text,
                fontWeight: 400, letterSpacing: "-0.01em",
                transform: hovered === p.id ? "translateX(8px)" : "none",
                transition: "transform 0.4s ease",
              }}>
                {p.name}
              </div>
              <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 15, color: t.muted, fontWeight: 400 }}>
                {p.tag}
              </div>
              <span style={{ fontFamily: SERIF, fontSize: 14, color: t.muted, textAlign: "right" }}>
                {p.year}
              </span>
            </div>
          </Reveal>
        ))}
      </section>

      <Footer t={t}/>
    </div>
  );
}

/* ── WorkPage ── */
function WorkPage({ t }) {
  const [active, setActive] = React.useState(1);
  const projects = [
    {
      id: 1, name: "Good Study", tag: "Note-taking, real-time sync", year: "2025",
      stack: ["Next.js", "React", "Supabase", "TypeScript"],
      role: "Designed & built end-to-end",
      desc: "A full-stack note app with real-time sync, auth, and a public demo. Built because my notes were scattered across five apps and I wanted one place to put them.",
      link: "https://goodgoodstudy.vercel.app/demo",
    },
    {
      id: 2, name: "Velocity Bingo", tag: "Event networking game", year: "2025",
      stack: ["HTML", "CSS", "JavaScript"],
      role: "Solo build over a weekend",
      desc: "An interactive networking bingo game for Velocity's 200-person innovation event. 500+ page visits, no backend, no dependencies — a small thing that just worked.",
      link: "https://velocity-bingo.vercel.app",
    },
    {
      id: 3, name: "MANFRD Portfolio", tag: "Personal site for a friend", year: "2024",
      stack: ["Next.js", "React", "Tailwind"],
      role: "Visual design + development",
      desc: "A portfolio website for a friend's personal brand. Clean typography, fast performance, considered details.",
      link: "https://manfrd.vercel.app",
    },
  ];
  const current = projects.find(p => p.id === active);

  return (
    <div style={{ paddingTop: 76, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "120px 56px" }}>
        <Reveal>
          <SectionHeader num="01" label="Work · An index" t={t}/>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "60px 240px 1fr", gap: 48, alignItems: "start" }}>
          {/* Marginal numeral */}
          <Reveal>
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 13, color: t.muted, fontWeight: 300, paddingTop: 8 }}>
              §
            </span>
          </Reveal>

          {/* Index */}
          <Reveal>
            <div style={{ position: "sticky", top: 110 }}>
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  style={{
                    display: "block", width: "100%",
                    background: "none", border: "none", cursor: "pointer",
                    textAlign: "left", padding: "14px 0",
                    borderTop: i === 0 ? `1px solid ${t.border}` : "none",
                    borderBottom: `1px solid ${t.border}`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                    <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 12, color: active === p.id ? t.text : t.muted, fontWeight: 300, width: 18 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{
                      fontFamily: SERIF, fontSize: 17,
                      color: active === p.id ? t.text : t.muted,
                      fontWeight: 400, transition: "color 0.3s",
                      letterSpacing: "-0.005em",
                    }}>
                      {p.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Detail */}
          <div key={current.id} style={{ animation: "fadeIn 0.6s ease" }}>
            <p style={{ ...LABEL, color: t.muted, marginBottom: 16 }}>{current.tag}</p>
            <h2 style={{
              fontFamily: SERIF, fontWeight: 400,
              fontSize: 52, letterSpacing: "-0.02em",
              color: t.text, marginBottom: 28, lineHeight: 1.05,
            }}>
              {current.name}
            </h2>
            <p style={{
              fontFamily: SERIF, fontSize: 19, lineHeight: 1.7,
              color: t.text, fontWeight: 400, marginBottom: 48, maxWidth: 580,
            }}>
              {current.desc}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, paddingTop: 32, borderTop: `1px solid ${t.border}` }}>
              <div>
                <p style={{ ...LABEL, color: t.muted, marginBottom: 10 }}>Year</p>
                <p style={{ fontFamily: SERIF, fontSize: 16, color: t.text }}>{current.year}</p>
              </div>
              <div>
                <p style={{ ...LABEL, color: t.muted, marginBottom: 10 }}>Role</p>
                <p style={{ fontFamily: SERIF, fontSize: 16, color: t.text, fontStyle: "italic", fontWeight: 400 }}>{current.role}</p>
              </div>
              <div>
                <p style={{ ...LABEL, color: t.muted, marginBottom: 10 }}>Stack</p>
                <p style={{ fontFamily: SERIF, fontSize: 16, color: t.text }}>{current.stack.join(", ")}</p>
              </div>
            </div>

            <div style={{ marginTop: 56 }}>
              <a href={current.link} target="_blank" rel="noreferrer" style={{
                fontFamily: SERIF, fontStyle: "italic", fontSize: 17,
                color: t.text, borderBottom: `1px solid ${t.text}`, paddingBottom: 4,
              }}>
                Visit live site →
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer t={t}/>
    </div>
  );
}

/* ── AboutPage — pure biographical, no trait-talk ── */
function AboutPage({ setPage, t }) {
  const facts = [
    { k: "Education",  v: "BCom · Business Analytics & Information Systems" },
    { k: "University", v: "The University of Auckland" },
    { k: "Year",       v: "Second year, 2026" },
    { k: "Also",       v: "Certificate in Web Development" },
    { k: "Based",      v: "Auckland, Aotearoa New Zealand" },
  ];
  const stack = ["TypeScript", "React", "Next.js", "Tailwind", "Supabase", "Node", "Postgres", "SQL", "Tableau", "Figma", "Git"];
  const off = ["Drumming", "Guitar", "Hiking", "Camping", "Gym", "Cooking", "Reading"];

  return (
    <div style={{ paddingTop: 76, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "120px 56px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 280px", gap: 48, alignItems: "start", marginBottom: 120 }}>
          <Reveal>
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 13, color: t.muted, fontWeight: 300, paddingTop: 12 }}>§ 02</span>
          </Reveal>

          <div>
            <Reveal>
              <p style={{ ...LABEL, color: t.muted, marginBottom: 28 }}>About</p>
              <h1 style={{
                fontFamily: SERIF, fontWeight: 300,
                fontSize: 80, letterSpacing: "-0.025em",
                color: t.text, marginBottom: 48, lineHeight: 1.02, maxWidth: 760,
              }}>
                I&apos;m Caleb, a Commerce student at the University of Auckland.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p style={{ fontFamily: SERIF, fontSize: 19, lineHeight: 1.7, color: t.text, fontWeight: 400, maxWidth: 620, marginBottom: 24 }}>
                I&apos;m majoring in Business Analytics &amp; Information Systems, with a Certificate in Web Development on the side.
              </p>
              <p style={{ fontFamily: SERIF, fontSize: 19, lineHeight: 1.7, color: t.muted, fontWeight: 400, maxWidth: 620 }}>
                I build small web tools, play the drums and guitar, and spend most weekends outside the city.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} style={{ paddingTop: 12 }}>
            <div style={{ borderTop: `1px solid ${t.border}`, paddingTop: 16 }}>
              <p style={{ ...LABEL, color: t.muted, marginBottom: 16 }}>Quick facts</p>
              {facts.map((f, i) => (
                <div key={i} style={{ paddingBottom: 12, marginBottom: 12, borderBottom: i < facts.length - 1 ? `1px solid ${t.border}` : "none" }}>
                  <p style={{ ...LABEL, color: t.muted, fontSize: 10, marginBottom: 4 }}>{f.k}</p>
                  <p style={{ fontFamily: SERIF, fontSize: 13, color: t.text, lineHeight: 1.5 }}>{f.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Tools */}
        <div style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 48, marginBottom: 100 }}>
          <Reveal><span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 13, color: t.muted, fontWeight: 300 }}>03</span></Reveal>
          <Reveal>
            <SectionHeader num="" label="Tools" t={t}/>
            <div style={{ display: "flex", flexWrap: "wrap", columnGap: 36, rowGap: 14 }}>
              {stack.map(s => (
                <span key={s} style={{ fontFamily: SERIF, fontSize: 19, color: t.text, fontWeight: 400 }}>
                  {s}<span style={{ color: t.muted }}>,</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Off the clock */}
        <div style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 48, marginBottom: 100 }}>
          <Reveal><span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 13, color: t.muted, fontWeight: 300 }}>04</span></Reveal>
          <Reveal>
            <SectionHeader num="" label="Off the clock" t={t}/>
            <p style={{ fontFamily: SERIF, fontSize: 24, lineHeight: 1.5, color: t.text, fontWeight: 400, fontStyle: "italic", maxWidth: 720 }}>
              {off.map((o, i) => (
                <React.Fragment key={o}>
                  <span style={{ fontStyle: "normal" }}>{o}</span>
                  {i < off.length - 1 ? <span style={{ color: t.muted, fontStyle: "normal" }}>&nbsp;·&nbsp;</span> : "."}
                </React.Fragment>
              ))}
            </p>
          </Reveal>
        </div>

        {/* CTA */}
        <div style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 48 }}>
          <Reveal><span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 13, color: t.muted, fontWeight: 300 }}>05</span></Reveal>
          <Reveal>
            <div style={{ paddingTop: 32, borderTop: `1px solid ${t.border}`, display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 24 }}>
              <p style={{ fontFamily: SERIF, fontSize: 22, color: t.text, fontWeight: 400, maxWidth: 540 }}>
                Open to internships, freelance, and any project worth doing carefully.
              </p>
              <button onClick={() => setPage("Contact")} style={{
                background: "none", border: "none", cursor: "pointer", padding: 0,
                fontFamily: SERIF, fontStyle: "italic", fontSize: 18, color: t.text,
                borderBottom: `1px solid ${t.text}`, paddingBottom: 4,
              }}>
                Get in touch →
              </button>
            </div>
          </Reveal>
        </div>
      </div>
      <Footer t={t}/>
    </div>
  );
}

/* ── ContactPage ── */
function ContactPage({ t }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => { navigator.clipboard.writeText("caleb.nz.li@gmail.com"); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  const links = [
    { label: "Email",     value: "caleb.nz.li@gmail.com",              href: "mailto:caleb.nz.li@gmail.com",                    copyable: true },
    { label: "LinkedIn",  value: "linkedin.com/in/caleb-li-0b3084272", href: "https://www.linkedin.com/in/caleb-li-0b3084272/", copyable: false },
    { label: "Instagram", value: "@caleb.lii",                          href: "https://www.instagram.com/caleb.lii/",            copyable: false },
    { label: "GitHub",    value: "github.com/cc0b",                     href: "https://github.com/cc0b",                         copyable: false },
  ];

  return (
    <div style={{ paddingTop: 76, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "120px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 280px", gap: 48, alignItems: "start" }}>
          <Reveal>
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 13, color: t.muted, fontWeight: 300, paddingTop: 12 }}>§ 03</span>
          </Reveal>

          <div>
            <Reveal>
              <p style={{ ...LABEL, color: t.muted, marginBottom: 28 }}>Contact</p>
              <h1 style={{
                fontFamily: SERIF, fontWeight: 300,
                fontSize: 64, letterSpacing: "-0.022em",
                color: t.text, marginBottom: 64, lineHeight: 1.05, maxWidth: 720,
              }}>
                Get in touch.
              </h1>
            </Reveal>

            {links.map((l, i) => (
              <Reveal key={l.label} delay={i * 80}>
                <div style={{
                  display: "grid", gridTemplateColumns: "100px 1fr auto",
                  gap: 32, alignItems: "baseline",
                  padding: "24px 0", borderTop: i === 0 ? `1px solid ${t.border}` : "none",
                  borderBottom: `1px solid ${t.border}`,
                }}>
                  <span style={{ ...LABEL, color: t.muted }}>{l.label}</span>
                  <a href={l.href} target="_blank" rel="noreferrer" style={{
                    fontFamily: SERIF, fontSize: 22, color: t.text, fontWeight: 400, letterSpacing: "-0.005em",
                  }}>
                    {l.value}
                  </a>
                  {l.copyable ? (
                    <button onClick={copy} style={{
                      background: "none", border: "none", cursor: "pointer", padding: 0,
                      fontFamily: SERIF, fontStyle: "italic", fontSize: 13,
                      color: copied ? t.text : t.muted, transition: "color 0.2s",
                    }}>{copied ? "copied" : "copy"}</button>
                  ) : (
                    <a href={l.href} target="_blank" rel="noreferrer" style={{
                      fontFamily: SERIF, fontStyle: "italic", fontSize: 13, color: t.muted,
                    }}>open →</a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} style={{ paddingTop: 12 }}>
            <div style={{ borderTop: `1px solid ${t.border}`, paddingTop: 16 }}>
              <p style={{ ...LABEL, color: t.muted, marginBottom: 10 }}>Reply time</p>
              <p style={{ fontFamily: SERIF, fontSize: 14, lineHeight: 1.6, color: t.text }}>
                Usually within a day or two.
              </p>
              <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 13, lineHeight: 1.6, color: t.muted, marginTop: 16, fontWeight: 300 }}>
                Auckland time, NZST (UTC+12).
              </p>
            </div>
          </Reveal>
        </div>
      </div>
      <Footer t={t}/>
    </div>
  );
}

/* ── Footer — colophon-style ── */
function Footer({ t }) {
  return (
    <footer style={{
      borderTop: `1px solid ${t.border}`,
      padding: "32px 56px",
      maxWidth: 1180, margin: "0 auto",
      display: "grid", gridTemplateColumns: "60px 1fr 1fr 1fr",
      gap: 48, alignItems: "baseline",
    }}>
      <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 12, color: t.muted, fontWeight: 300 }}>fin.</span>
      <span style={{ fontFamily: SERIF, fontSize: 13, color: t.muted, fontStyle: "italic" }}>Ngā mihi nui</span>
      <span style={{ fontFamily: SERIF, fontSize: 13, color: t.muted, textAlign: "center" }}>Set in Newsreader &amp; Inter</span>
      <span style={{ fontFamily: SERIF, fontSize: 13, color: t.muted, textAlign: "right" }}>© 2026 · Auckland</span>
    </footer>
  );
}

Object.assign(window, { Nav, HomePage, WorkPage, AboutPage, ContactPage, Footer, useTheme, DARK, LIGHT });
