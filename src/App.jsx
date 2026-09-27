import { useEffect, useState } from "react";
import "./styles.css";

const productResumeHref = `${import.meta.env.BASE_URL}Shaina-Gonzales-Senior-Product-UX-Resume.pdf`;
const staffResumeHref = `${import.meta.env.BASE_URL}Shaina-Gonzales-Staff-Systems-Design-Resume.pdf`;

const work = [
  { number: "01", title: "ISE Platform", note: "A global infrastructure experience for understanding node health, clusters, topology, and network activity.", tags: "PRODUCT DESIGN · DATA UX · FULL-STACK", primary: "Open Figma prototype", href: "https://symbol-desert-66256692.figma.site", indexHref: "#work" },
  { number: "02", title: "TAD Platform", note: "A connected workflow that helped move firewall requests from months toward days.", tags: "API INTEGRATION · AUTOMATION · ENTERPRISE UX", primary: "Read the engineering case study", href: "https://www.shainagonzalesdesigns.com/#case-tad-platform", indexHref: "#tad-platform" },
  { number: "03", title: "Nova Design System", note: "A reusable system spanning foundations, components, wireframes, and coordinated light and dark themes.", tags: "SYSTEMS · ACCESSIBILITY · HANDOFF", primary: "Explore in Figma", href: "https://www.figma.com/design/F7BbXAhoAhKdo1ySdAKNY7/nova-style-system?node-id=5-844&t=Sac2vEKOdGaL2tzS-1", indexHref: "#nova-system" },
  { number: "04", title: "Electron AI Assistant", note: "An enterprise AI experience designed to make internal knowledge and workflows easier to access.", tags: "AI UX · TRUST · PRODUCT STRATEGY", primary: "Explore the Figma prototype", href: "https://www.figma.com/design/PECexQvNxp0jLedKtJRZZk/ai-chat-bot?node-id=3-3&t=xt8KgkJXdxjnDGiD-1", indexHref: "#electron-ai" },
];

const stages = [
  ["Context", "Multiple tools, inconsistent experiences, and growing operational complexity slowed teams down and created avoidable risk."],
  ["Decision 01", "Prioritized health, topology, and alerts so technical teams could understand system state before exploring supporting detail."],
  ["Decision 02", "Used progressive disclosure, filters, and repeatable dashboard patterns to keep dense infrastructure data scannable."],
  ["Outcome", "Made high-stakes work easier to understand, reduced friction, and established a foundation that could scale."],
];

const tadStages = [
  ["Before", "Firewall requests depended on lengthy approval cycles, disconnected sources, and manual handoffs that could take up to two months."],
  ["Intervention", "Mapped dependencies and helped shape a centralized workflow connecting collaboration, knowledge, intelligence, and infrastructure systems."],
  ["Technical execution", "Supported JavaScript and enterprise API integration work across Slack, Confluence, Gleam, and additional platforms."],
  ["After", "The connected workflow helped move turnaround from months toward days and created a more scalable operational foundation."],
];

const novaStages = [
  ["Foundation", "Defined semantic color, typography, spacing, elevation, and light/dark foundations that could support multiple product surfaces."],
  ["Architecture", "Structured reusable components and variants around product intent, interaction states, and predictable implementation patterns."],
  ["Accessibility", "Built contrast, hierarchy, states, and responsive behavior into the system rather than treating accessibility as a final review."],
  ["Adoption", "Connected wireframes, high-fidelity components, documentation, and applied examples to make designer–developer handoff clearer."],
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
          <a href={productResumeHref} download="Shaina-Gonzales-Senior-Product-UX-Resume.pdf">Product/UX Resume</a>
          <a href={staffResumeHref} download="Shaina-Gonzales-Staff-Systems-Design-Resume.pdf">Staff Design Resume</a>
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
          <div className="section-topline"><span>FEATURED WORK</span><span>{project.number} / 04</span></div>
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
            <a className="product-image-link" href="https://symbol-desert-66256692.figma.site" aria-label="Open the ISE interactive Figma prototype">
              <img src={`${import.meta.env.BASE_URL}assets/operations-dashboard.png`} alt="Representative ISE infrastructure dashboard with global topology, node health, cluster status, IP addresses, and network analytics" />
            </a>
            <figcaption>
              <span>CLEARER SYSTEMS.<br />STRONGER TEAMS.</span>
              <p>Complex work should feel simple.</p>
            </figcaption>
          </figure>
        </section>

        <section className="featured tad-feature" id="tad-platform" aria-labelledby="tad-project-title">
          <div className="section-topline"><span>FEATURED WORK</span><span>02 / 04</span></div>
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

        <section className="featured nova-feature" id="nova-system" aria-labelledby="nova-project-title">
          <div className="section-topline"><span>FEATURED WORK</span><span>03 / 04</span></div>
          <div className="project-heading">
            <span className="project-number">03</span>
            <div>
              <h2 id="nova-project-title">Nova Design System</h2>
              <p>A dual-mode product system that carries ideas from early structure to accessible, production-ready interfaces.</p>
              <div className="tag-row"><span>DESIGN SYSTEM STRATEGY</span><span>ACCESSIBILITY</span><span>GOVERNANCE</span></div>
            </div>
            <div className="project-summary">
              <p>I created Nova to show how a lead designer establishes shared foundations, reduces repeated decisions, and gives design and engineering a common language for scaling quality.</p>
              <div className="project-links"><a href="https://www.figma.com/design/F7BbXAhoAhKdo1ySdAKNY7/nova-style-system?node-id=5-844&t=Sac2vEKOdGaL2tzS-1">Explore the complete Figma system</a></div>
            </div>
          </div>
          <div className="case-grid">
            {novaStages.map(([title, copy]) => (
              <article key={title}><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <a className="nova-system-visual" href="https://www.figma.com/design/F7BbXAhoAhKdo1ySdAKNY7/nova-style-system?node-id=5-844&t=Sac2vEKOdGaL2tzS-1" aria-label="Explore the Nova design system in Figma">
            <div className="nova-foundations">
              <span className="nova-label">FOUNDATIONS</span>
              <div className="nova-swatches"><i></i><i></i><i></i><i></i><i></i></div>
              <div className="nova-type"><strong>Aa</strong><span>Archivo / DM Sans</span></div>
            </div>
            <div className="nova-components">
              <span className="nova-label">COMPONENT EVOLUTION</span>
              <div className="component-step wireframe-card"><span></span><span></span><button>Action</button></div>
              <b aria-hidden="true">→</b>
              <div className="component-step polished-card"><small>ANALYTICS</small><strong>24.8k</strong><span>Active sessions</span><button>View report</button></div>
            </div>
            <div className="nova-modes">
              <div className="mode-card light-mode"><small>LIGHT MODE</small><strong>Clear hierarchy</strong><span>Semantic tokens</span></div>
              <div className="mode-card dark-mode"><small>DARK MODE</small><strong>Same system</strong><span>Adapted contrast</span></div>
            </div>
            <div className="nova-caption"><span>SYSTEMS THAT SCALE.</span><p>From token to component to product.</p></div>
          </a>
        </section>

        <section className="electron-case" id="electron-ai" aria-labelledby="electron-title">
          <div className="electron-index"><span>04</span><small>STRATEGIC CASE</small></div>
          <div className="electron-copy">
            <p className="eyebrow">ENTERPRISE AI / TRUST / PRODUCT STRATEGY</p>
            <h2 id="electron-title">Electron AI Assistant</h2>
            <p className="electron-lede">An enterprise assistant designed to make internal knowledge and workflow support faster to reach—while keeping trust, clarity, and responsible interaction at the center of the experience.</p>
            <div className="electron-decisions">
              <article><h3>Useful before impressive</h3><p>Focused the experience on real employee questions and task support rather than novelty.</p></article>
              <article><h3>Trust through clarity</h3><p>Considered transparent responses, understandable states, and safe paths when the system could not help.</p></article>
              <article><h3>Designed with engineering</h3><p>Balanced conversational UX with enterprise integrations, backend constraints, and scalable implementation.</p></article>
            </div>
            <div className="electron-actions">
              <a className="button electron-link" href="https://www.figma.com/design/PECexQvNxp0jLedKtJRZZk/ai-chat-bot?node-id=3-3&t=xt8KgkJXdxjnDGiD-1">Explore the Figma prototype</a>
              <a className="electron-case-link" href="https://www.shainagonzalesdesigns.com/#case-electron-chatbot">Read the engineering case study</a>
            </div>
          </div>
        </section>

        <section className="practice" id="practice">
          <p className="eyebrow">HOW I LEAD</p>
          <div className="practice-heading">
            <h2>Direction, alignment, quality, and momentum.</h2>
            <p>I make complex work visible, create decision frameworks teams can share, and stay close enough to delivery to protect both user value and technical feasibility.</p>
          </div>
          <div className="principles">
            <article><span>01</span><h3>Set direction</h3><p>Turn research, business needs, constraints, and technical realities into a product vision teams can act on.</p></article>
            <article><span>02</span><h3>Create alignment</h3><p>Facilitate decisions early, make tradeoffs explicit, and give product and engineering a shared model of the problem.</p></article>
            <article><span>03</span><h3>Raise the quality bar</h3><p>Use systems, critique, accessibility, and clear handoff practices to improve the work beyond a single screen.</p></article>
            <article><span>04</span><h3>Lead through delivery</h3><p>Stay involved through implementation, measure what matters, and leave the product and team stronger.</p></article>
          </div>
        </section>

        <section className="about" id="about">
          <p className="eyebrow">ABOUT</p>
          <div><h2>A designer who connects people, product, and technology.</h2></div>
          <div className="about-copy">
            <p>I’m Shaina Gonzales, a product designer and UX/UI leader with 7+ years of experience across enterprise platforms, design systems, research, visual design, and front-end collaboration.</p>
            <p>My range helps me move comfortably from executive conversations and discovery sessions to workflow architecture, interface craft, and engineering handoff.</p>
            <div className="resume-downloads" aria-label="Download design resumes">
              <a className="text-link" href={productResumeHref} download="Shaina-Gonzales-Senior-Product-UX-Resume.pdf">Download Senior Product/UX Resume</a>
              <a className="text-link" href={staffResumeHref} download="Shaina-Gonzales-Staff-Systems-Design-Resume.pdf">Download Staff Systems Design Resume</a>
            </div>
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
          <div className="footer-links"><a href={productResumeHref} download="Shaina-Gonzales-Senior-Product-UX-Resume.pdf">Product/UX Resume</a><a href={staffResumeHref} download="Shaina-Gonzales-Staff-Systems-Design-Resume.pdf">Staff Design Resume</a><a href="https://www.linkedin.com/in/shainag3">LinkedIn</a><a href="https://github.com/gonzasha345-art/designportfolio">Portfolio repository</a><a href="https://github.com/gonzasha345-art">GitHub profile</a><a href="https://www.shainagonzalesdesigns.com/">Engineering portfolio</a><a href="#top">Back to top</a></div>
        </section>
      </main>
    </div>
  );
}
