import { useEffect, useState } from "react";
import "./styles.css";

const work = [
  { number: "01", title: "ISE Platform", note: "A global infrastructure experience for understanding node health, clusters, topology, and network activity.", tags: "PRODUCT DESIGN · DATA UX · FULL-STACK", primary: "Open Figma prototype", href: "https://symbol-desert-66256692.figma.site", indexHref: "#work" },
  { number: "02", title: "TAD Platform", note: "A connected workflow that helped move firewall requests from months toward days.", tags: "API INTEGRATION · AUTOMATION · ENTERPRISE UX", primary: "Read the engineering case study", href: "https://www.shainagonzalesdesigns.com/#case-tad-platform", indexHref: "#tad-platform" },
  { number: "03", title: "Nova Design System", note: "A reusable system spanning foundations, components, wireframes, and coordinated light and dark themes.", tags: "SYSTEMS · ACCESSIBILITY · HANDOFF", primary: "Explore in Figma", href: "https://www.figma.com/design/F7BbXAhoAhKdo1ySdAKNY7/nova-style-system?node-id=5-844&t=Sac2vEKOdGaL2tzS-1" },
];

const stages = [
  ["Context", "Multiple tools, inconsistent experiences, and growing operational complexity slowed teams down and created avoidable risk."],
  ["Leadership", "Led discovery, aligned stakeholders across product and engineering, and established a shared product vision."],
  ["System", "Created modular workflows and reusable patterns, then partnered with engineering through delivery."],
  ["Outcome", "Made high-stakes work easier to understand, reduced friction, and established a foundation that could scale."],
];

const tadStages = [
  ["Challenge", "Firewall requests depended on lengthy approval cycles, disconnected sources, and manual handoffs that could take up to two months."],
  ["Technical role", "Mapped system dependencies and supported JavaScript and enterprise API integration work across collaboration, knowledge, and intelligence platforms."],
  ["Orchestration", "Helped shape a centralized workflow connecting Slack, Confluence, Gleam, and additional enterprise systems while protecting sensitive implementation details."],
  ["Outcome", "The connected workflow helped move request turnaround from months toward days and created a more scalable foundation for infrastructure operations."],
];

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const project = work[0];

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Shaina Gonzales, home">
          <span>SHAINA</span>
          <small>GONZALES · PRODUCT DESIGN LEAD</small>
        </a>
        <button className="menu-button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav id="main-nav" className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          <a href="#work">Selected Work</a>
          <a href="#practice">Practice</a>
          <a href="#about">About</a>
          <a href="https://www.shainagonzalesdesigns.com/Shaina-Gonzales-Resume.pdf">Resume</a>
          <a href="#contact">Contact</a>
          <a href="https://www.shainagonzalesdesigns.com/">Engineering portfolio</a>
        </nav>
        <a className="header-cta" href="#work">Explore the work</a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">PRODUCT DESIGN / SYSTEMS / PEOPLE / IMPACT</p>
            <h1 id="hero-title">Design leadership for complex products.</h1>
            <p className="hero-lede">7+ years turning research, systems thinking, and cross-functional partnership into products people can trust.</p>
            <div className="actions">
              <a className="button primary" href="#work">Explore the work</a>
              <a className="button secondary" href="#practice">See how I lead</a>
            </div>
            <p className="scroll-note">SCROLL TO EXPLORE</p>
          </div>

          <div className="work-index" aria-label="Selected work index">
            <p className="eyebrow">SELECTED WORK</p>
            {work.map((item, index) => (
              <a className={index === 0 ? "index-row active" : "index-row"} key={item.number} href={item.indexHref || item.href}>
                <span className="index-number">{item.number}</span>
                <span className="index-content">
                  <strong>{item.title}</strong>
                  <span>{item.note}</span>
                  <small>{item.tags}</small>
                </span>
              </a>
            ))}
            <a className="all-work" href="#work">VIEW ALL WORK</a>
          </div>
        </section>

        <section className="featured" id="work" aria-labelledby="project-title">
          <div className="section-topline"><span>FEATURED WORK</span><span>{project.number} / 03</span></div>
          <div className="project-heading">
            <span className="project-number">{project.number}</span>
            <div>
              <h2 id="project-title">{project.title}</h2>
              <p>{project.note}</p>
              <div className="tag-row"><span>PRODUCT DESIGN</span><span>DESIGN SYSTEMS</span><span>CROSS-FUNCTIONAL LEADERSHIP</span></div>
            </div>
              <div className="project-summary">
                <p>I bring together research, systems thinking, and cross-functional partnership to simplify complex workflows and build foundations that last.</p>
                <div className="project-links"><a href={project.href}>{project.primary}</a><a href="https://github.com/gonzasha345-art/designportfolio">Portfolio repository</a></div>
              </div>
          </div>
          <div className="case-grid">
            {stages.map(([title, copy]) => (
              <article key={title}><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <figure className="product-visual">
            <img src={`${import.meta.env.BASE_URL}assets/operations-dashboard.png`} alt="Representative ISE infrastructure dashboard with global topology, node health, cluster status, IP addresses, and network analytics" />
            <figcaption>
              <span>CLEARER SYSTEMS.<br />STRONGER TEAMS.</span>
              <p>Complex work should feel simple.</p>
            </figcaption>
          </figure>
        </section>

        <section className="featured tad-feature" id="tad-platform" aria-labelledby="tad-project-title">
          <div className="section-topline"><span>FEATURED WORK</span><span>02 / 03</span></div>
          <div className="project-heading">
            <span className="project-number">02</span>
            <div>
              <h2 id="tad-project-title">TAD Platform</h2>
              <p>A connected enterprise workflow that brought APIs, automation, collaboration tools, and infrastructure operations into one orchestration path.</p>
              <div className="tag-row"><span>ENTERPRISE APIs</span><span>WORKFLOW AUTOMATION</span><span>SYSTEMS THINKING</span></div>
            </div>
            <div className="project-summary">
              <p>As an API Integration &amp; Workflow Automation Contributor, I connected technical systems thinking with clear workflow design to support a faster, more scalable firewall request process.</p>
              <div className="project-links"><a href="https://www.shainagonzalesdesigns.com/#case-tad-platform">Read the engineering case study</a><a href="https://github.com/gonzasha345-art/designportfolio">Portfolio repository</a></div>
            </div>
          </div>
          <div className="case-grid">
            {tadStages.map(([title, copy]) => (
              <article key={title}><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <figure className="tad-system-visual" aria-label="Conceptual TAD integration architecture">
            <div className="tad-source-list">
              <div><strong>Slack API</strong><span>Collaboration</span></div>
              <div><strong>Confluence API</strong><span>Knowledge</span></div>
              <div><strong>AI / Gleam</strong><span>Intelligence</span></div>
            </div>
            <div className="tad-flow-arrow" aria-hidden="true">→</div>
            <div className="tad-hub"><small>ORCHESTRATION</small><strong>TAD</strong><span>Connected workflow</span></div>
            <div className="tad-flow-arrow" aria-hidden="true">→</div>
            <div className="tad-output"><small>AUTOMATED OUTCOME</small><strong>Firewall Workflow</strong><span>Months → days</span></div>
            <figcaption><span>CONNECTED SYSTEMS.<br />FASTER OUTCOMES.</span><p>Technical complexity, made actionable.</p></figcaption>
          </figure>
        </section>

        <section className="practice" id="practice">
          <p className="eyebrow">MY PRACTICE</p>
          <div className="practice-heading">
            <h2>From ambiguity to a shared direction.</h2>
            <p>I lead with curiosity, make complexity visible, and create enough structure for teams to move forward together.</p>
          </div>
          <div className="principles">
            <article><span>01</span><h3>Listen deeply</h3><p>Understand the people, pressures, constraints, and systems behind the request.</p></article>
            <article><span>02</span><h3>Frame the right problem</h3><p>Translate research into a clear opportunity and a decision-making model teams can share.</p></article>
            <article><span>03</span><h3>Build for adoption</h3><p>Partner through delivery, measure what matters, and leave the product stronger than I found it.</p></article>
          </div>
        </section>

        <section className="about" id="about">
          <p className="eyebrow">ABOUT</p>
          <div><h2>A designer who connects people, product, and technology.</h2></div>
          <div className="about-copy">
            <p>I’m Shaina Gonzales, a product designer and UX/UI leader with 7+ years of experience across enterprise platforms, design systems, research, visual design, and front-end collaboration.</p>
            <p>My range helps me move comfortably from executive conversations and discovery sessions to workflow architecture, interface craft, and engineering handoff.</p>
            <a className="text-link" href="https://www.shainagonzalesdesigns.com/">View my full-stack engineering portfolio</a>
          </div>
        </section>

        <section className="experience" id="experience">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>Seven-plus years across design, software, and enterprise products.</h2>
          <div className="experience-list">
            <article><span>2023–2026</span><div><h3>General Motors</h3><strong>Full-Stack Software Engineer</strong><p>Led and contributed to product work spanning enterprise platforms, UX/UI, APIs, SQL-backed workflows, AI-assisted tools, analytics, and automation.</p></div></article>
            <article><span>2020–2023</span><div><h3>Trinetica</h3><strong>UX/UI Design Intern → UX/UI Designer & Software Contributor</strong><p>Designed enterprise web and SaaS experiences from flows and wireframes through high-fidelity systems, usability testing, and production collaboration.</p></div></article>
            <article><span>2021–2023</span><div><h3>All American Petting Zoo</h3><strong>Web Developer / UI-UX Designer</strong><p>Designed and developed the business website, branding, custom tools, customer journeys, content, and digital presence.</p></div></article>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">LET’S MAKE COMPLEX WORK CLEARER</p>
          <h2>Looking for design leadership that brings people together?</h2>
          <a className="contact-link" href="mailto:shaina.gonzales@outlook.com">shaina.gonzales@outlook.com</a>
          <div className="footer-links"><a href="https://www.linkedin.com/in/shainag3">LinkedIn</a><a href="https://github.com/gonzasha345-art/designportfolio">Portfolio repository</a><a href="https://github.com/gonzasha345-art">GitHub profile</a><a href="https://www.shainagonzalesdesigns.com/">Engineering portfolio</a><a href="#top">Back to top</a></div>
        </section>
      </main>
    </div>
  );
}
