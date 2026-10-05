import { useEffect, useRef, useState } from "react";
import "./styles.css";
import PrototypeWork from "./PrototypeWork";
import { PortfolioHome, FlagshipCase, flagshipProjects } from "./PortfolioEditorial";

const designResumeHref = `${import.meta.env.BASE_URL}Shaina_Elizabeth_Gonzales_Design_Resume.pdf`;

const base = import.meta.env.BASE_URL;
const pageHref = (page) => `${base}${page === "home" ? "index" : page}.html`;

const work = [
  { number: "01", title: "ISE Platform", note: "A global infrastructure experience for understanding node health, clusters, topology, and network activity.", tags: "PRODUCT DESIGN · DATA UX · FULL-STACK", primary: "Open Figma prototype", href: "https://www.figma.com/make/Jo6o4zhUv1Y7vPxtPbuwIl/iseexampleprototype?t=HNOiXZn6KcWP4UDI-20&fullscreen=1", indexHref: pageHref("project-ise") },
  { number: "02", title: "TAD Platform", note: "A connected workflow that helped move firewall requests from months toward days.", tags: "API INTEGRATION · AUTOMATION · ENTERPRISE UX", primary: "Read the engineering case study", href: "https://www.shainagonzalesdesigns.com/project-tad.html", indexHref: pageHref("project-tad") },
  { number: "03", title: "Nova Design System", note: "A reusable system spanning foundations, components, wireframes, and coordinated light and dark themes.", tags: "SYSTEMS · ACCESSIBILITY · HANDOFF", primary: "Explore in Figma", href: "https://www.figma.com/design/F7BbXAhoAhKdo1ySdAKNY7/nova-style-system?node-id=5-844&t=Sac2vEKOdGaL2tzS-1", indexHref: pageHref("project-nova") },
  { number: "04", title: "Electron AI Assistant", note: "An enterprise AI experience designed to make internal knowledge and workflows easier to access.", tags: "AI UX · TRUST · PRODUCT STRATEGY", primary: "Explore the Figma prototype", href: "https://www.figma.com/design/PECexQvNxp0jLedKtJRZZk/ai-chat-bot?node-id=3-3&t=xt8KgkJXdxjnDGiD-1", indexHref: pageHref("project-electron") },
  { number: "05", title: "BSA Calendar", note: "A broadcasting event workflow with calendar views, requests, and approvals.", tags: "WORKFLOW DESIGN · INTERACTION DESIGN", href: "#bsa-demo", indexHref: pageHref("project-bsa") },
  { number: "06", title: "Gamification & Learning", note: "An independent learning experience remake connecting progress, resources, and participation.", tags: "LEARNING UX · GAMIFICATION", href: "https://grain-fluid-14768550.figma.site/", indexHref: pageHref("project-gamification") },
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
  const menuButton = useRef(null);
  const closeMenu = () => setMenuOpen(false);
  const handleEscape = event => {
    if (event.key === 'Escape' && menuOpen) {
      closeMenu();
      menuButton.current?.focus();
    }
  };

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const page = window.location.pathname.split('/').pop()?.replace('.html', '') || 'index';
  const isHome = page === 'index';
  const flagship = flagshipProjects.find(item => item.slug === page);
  const legacyPage = flagship ? '' : page;
  const project = work[0];
  const pageTitles = { 'project-asa': 'ASA Network Management', 'project-ise': 'ISE Global Infrastructure Dashboard', 'project-tad': 'TAD Platform', 'project-nova': 'Nova Design System', 'project-electron': 'Electron AI Assistant', 'project-bsa': 'Broadcasting Services Platform', 'project-gamification': 'Gamification & Learning Platform', about: 'About Shaina' };
  useEffect(() => { document.title = `${pageTitles[page] || 'Product Design & UX/UI Leadership'} | Shaina Gonzales`; }, [page]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#top">Skip to content</a>
      <header className="site-header" onKeyDown={handleEscape}>
        <a className="brand" href={pageHref("home")} aria-label="Shaina Gonzales, Product Designer, home">
          <span>SHAINA GONZALES</span>
          <small>PRODUCT DESIGNER</small>
        </a>
        <button ref={menuButton} className="menu-button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav id="main-nav" className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation" onClick={closeMenu}>
          <a href={`${pageHref("home")}#prototypes`}>Work</a>
          <a href={pageHref("about")} aria-current={page === "about" ? "page" : undefined}>About</a>
          <a href={designResumeHref}>Resume</a>
          <a href="https://www.shainagonzalesdesigns.com/index.html">Software Portfolio <span aria-hidden="true">↗</span></a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <nav className="discipline-switch" aria-label="Portfolio discipline">
        <a href={pageHref("home")} aria-current="page"><span className="discipline-dot" aria-hidden="true" />Product Design <small>YOU’RE HERE</small></a>
        <span className="discipline-arrow" aria-hidden="true">↔</span>
        <a href="https://www.shainagonzalesdesigns.com/index.html">Software Engineering <span aria-hidden="true">↗</span></a>
      </nav>

      <main id="top" tabIndex={-1}>
        {!isHome && <div className={page === "about" ? "page-intro about-page-intro" : "page-intro"}><a href={`${pageHref('home')}#prototypes`}>← Back to selected work</a>{page !== "about" && <p className="eyebrow">PRODUCT DESIGN CASE STUDY</p>}<h1>{page === 'about' ? <>About <span className="about-name">Shaina</span></> : pageTitles[page] || 'Page not found'}</h1>{!pageTitles[page] && <p><a href={pageHref('home')}>Return home</a></p>}</div>}
        {isHome && <PortfolioHome />}
        {flagship && <FlagshipCase project={flagship} />}
        {legacyPage.startsWith('project-') && page !== 'project-bsa' && <p className="remake-notice project-remake-notice"><strong>Independent portfolio remake.</strong> The visible designs and prototypes are recreated explorations, not actual GM applications or production screenshots. Case study background describes my past project experience; the remake demonstrates my design approach.</p>}
        {legacyPage === 'project-gamification' && <section className="featured learning-case"><div className="section-topline"><span>LEARNING UX / GAMIFICATION</span><span>06 / 06</span></div><div className="practice-heading"><h2>Make learning feel like progress.</h2><p>A portfolio remake exploring how learning resources, employee participation, and visible progress can come together in one experience.</p></div><div className="case-grid"><article><h3>Project context</h3><p>The original project focused on modernizing employee engagement and internal learning through a centralized platform.</p></article><article><h3>My original role</h3><p>Lead UX/UI designer and full-stack contributor, shaping user flows, wireframes, Figma designs, and frontend implementation.</p></article><article><h3>Design exploration</h3><p>Connect learning content, profiles, events, and leaderboards with a clear hierarchy that makes participation easy to understand.</p></article><article><h3>The remake</h3><p>Explore the independent Figma prototype to see the recreated experience. It does not connect to GM systems or employee data.</p></article></div><a className="learning-visual" href="https://grain-fluid-14768550.figma.site/"><img src="https://www.shainagonzalesdesigns.com/gamification-dashboard-concept.png" alt="Independent Gamification and Learning portfolio concept" /></a><div className="actions"><a className="button primary" href="https://grain-fluid-14768550.figma.site/">Try the Figma prototype</a><a className="button secondary" href="https://www.shainagonzalesdesigns.com/project-gamification.html">Read the engineering case study</a></div></section>}

        {legacyPage === "project-ise" && (
<section className="featured" id="work" aria-labelledby="project-title">
          <div className="section-topline"><span>FEATURED WORK</span><span>{project.number} / 06</span></div>
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
            <a className="product-image-link" href="https://www.figma.com/make/Jo6o4zhUv1Y7vPxtPbuwIl/iseexampleprototype?t=HNOiXZn6KcWP4UDI-20&fullscreen=1" aria-label="Open the ISE interactive Figma prototype">
              <img src={`${import.meta.env.BASE_URL}assets/operations-dashboard.png`} alt="Representative ISE infrastructure dashboard with global topology, node health, cluster status, IP addresses, and network analytics" />
            </a>
            <figcaption>
              <span>CLEARER SYSTEMS.<br />STRONGER TEAMS.</span>
              <p>Complex work should feel simple.</p>
            </figcaption>
          </figure>
        </section>
)}

        {page === "project-tad" && (
<section className="featured tad-feature" id="tad-platform" aria-labelledby="tad-project-title">
          <div className="section-topline"><span>FEATURED WORK</span><span>02 / 06</span></div>
          <div className="project-heading">
            <span className="project-number">02</span>
            <div>
              <h2 id="tad-project-title">TAD Platform</h2>
              <p>A connected enterprise workflow that brought APIs, automation, collaboration tools, and infrastructure operations into one orchestration path.</p>
              <div className="tag-row"><span>ENTERPRISE APIs</span><span>WORKFLOW AUTOMATION</span><span>SYSTEMS THINKING</span></div>
            </div>
            <div className="project-summary">
              <p>As an API Integration &amp; Workflow Automation Contributor, I connected technical systems thinking with clear workflow design to support a faster, more scalable firewall request process.</p>
              <div className="project-links"><a href="https://www.shainagonzalesdesigns.com/project-tad.html">Read the engineering case study</a><a href="https://github.com/gonzasha345-art/designportfolio">Portfolio repository</a></div>
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
)}

        {page === "project-nova" && (
<section className="featured nova-feature" id="nova-system" aria-labelledby="nova-project-title">
          <div className="section-topline"><span>FEATURED WORK</span><span>03 / 06</span></div>
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
)}

        {page === "project-electron" && (
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
              <a className="electron-case-link" href="https://www.shainagonzalesdesigns.com/project-electron.html">Read the engineering case study</a>
            </div>
          </div>
        </section>
)}

        {page === "about" && (
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
)}

        {page === "about" && (
<section className="about" id="about">
          <p className="eyebrow">ABOUT</p>
          <div><h2>A product designer who connects people, systems, and technology.</h2></div>
          <div className="about-copy">
            <p className="about-intro">I’m Shaina Gonzales, a product designer and UX/UI leader with 7+ years of experience shaping enterprise platforms, data-rich tools, workflow automation, AI-assisted products, and scalable design systems.</p>
            <p>My career began in visual communication and grew through UX/UI design into front-end and full-stack software work. That range helps me move from discovery and product strategy to workflow architecture, interface craft, design systems, and implementation partnership—without losing sight of the people doing the work.</p>
            <p>I’m at my best when the problem is ambiguous, the system is complex, and several disciplines need a shared direction. I make constraints visible, facilitate decisions, translate technical realities into understandable experiences, and stay involved through delivery so the intended experience survives implementation.</p>
            <p>I bring the perspective of a designer who understands code, APIs, data, accessibility, and enterprise constraints. I don’t treat design as a handoff; I use it to align teams, reduce risk, and build durable foundations.</p>
            <p className="about-meta">Based in Michigan · English + Spanish · Open to senior, lead, and staff-level product design opportunities</p>
            <div className="resume-downloads" aria-label="Download design resume">
              <a className="text-link" href={designResumeHref} download="Shaina_Elizabeth_Gonzales_Design_Resume.pdf">Download Design Resume</a>
            </div>
            <a className="text-link about-secondary-link" href="https://www.shainagonzalesdesigns.com/">Optional: explore my engineering portfolio</a>
          </div>
          <div className="about-strengths" aria-label="What I bring to a product team">
            <article><span>01</span><h3>Product direction</h3><p>Frame opportunities, define outcomes, and turn research and constraints into a path teams can act on.</p></article>
            <article><span>02</span><h3>Complex systems</h3><p>Simplify data-heavy workflows and create reusable patterns that scale across products.</p></article>
            <article><span>03</span><h3>Team alignment</h3><p>Bring product, engineering, and stakeholders together around clear decisions and tradeoffs.</p></article>
            <article><span>04</span><h3>Technical partnership</h3><p>Collaborate credibly across front-end, APIs, data, accessibility, QA, and delivery.</p></article>
          </div>
        </section>
)}

        {page === "about" && (
<section className="experience" id="experience">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>Seven-plus years across design, software, and enterprise products.</h2>
          <div className="experience-list">
            <article><span>January 2023 – May 2026</span><div><h3>General Motors</h3><strong>Full-Stack Software Engineer</strong><p>Translated business and user needs into wireframes, intuitive interfaces, and enterprise product experiences. Contributed across UX/UI, frontend implementation, APIs, data workflows, and AI-assisted tools, partnering across disciplines to carry design intent through delivery.</p></div></article>
            <article><span>January 2020 – January 2023</span><div><h3>Trinetica</h3><strong>UX/UI Design Intern → UX/UI Designer & Software Contributor</strong><p>Designed user-centered interfaces for enterprise web and SaaS applications, progressing from user flows and wireframes to interactive prototypes and high-fidelity Figma designs. Connected interface craft with software contributions and implementation collaboration.</p></div></article>
            <article><span>March 2021 – January 2023</span><div><h3>All American Petting Zoo</h3><strong>Web Developer / UI-UX Designer</strong><p>Designed and developed a website tailored to the business, bringing together wireframes, branding, customer journeys, and custom client-facing tools.</p></div></article>
          </div>
          <div className="education-foundations"><p className="eyebrow">SELECTED FREELANCE ENGAGEMENTS · 2017–2023</p><p className="experience-period-note">Client work completed during college and before General Motors; several engagements overlapped.</p><div className="experience-list"><article><span>Nonprofit · Digital design</span><div><h3>Growing Minds</h3><strong>Marketing &amp; Digital Design</strong><p>Led digital design for a nonprofit tutoring organization serving families through academic and practical-life learning programs. Designed and built the website, developed brand and campaign materials, and created billboards, event graphics, photography, and coordinated marketing assets.</p></div></article><article><span>Membership · Commerce</span><div><h3>Pin Seekers Golf Club</h3><strong>UX/UI &amp; Product Development</strong><p>Designed and built an end-to-end membership and commerce experience, including brand identity and the production website. Shaped registration, payments, course and event enrollment, rosters, schedules, and database-backed administration into connected user workflows.</p></div></article><article><span>Financial services · Systems</span><div><h3>Lincoln Financial Group</h3><strong>Full-Stack Development</strong><p>Contributed to full-stack work spanning complex databases, API integrations, data pipelines, and operational workflows. Built experience connecting application behavior across data and service layers, bringing an understanding of production constraints to my product design practice.</p></div></article></div></div>
          <div className="education-foundations"><p className="eyebrow">EDUCATION &amp; FOUNDATIONS</p><div className="experience-list"><article><span>2016 – 2022</span><div><h3>Purdue University</h3><strong>Graphic Design &amp; Computer Science</strong><p>Built a foundation spanning visual communication, UX thinking, software development, and technical problem solving—the combination that informs my design and engineering practice today.</p></div></article></div></div>
        </section>
)}

        {!isHome && page !== 'about' && pageTitles[page] && <nav className="case-navigation" aria-label="Explore more projects">{flagshipProjects.filter(item => item.slug !== page).map(item => <a key={item.slug} href={pageHref(item.slug)}>{item.title} →</a>)}</nav>}
        <section className="contact" id="contact">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let’s make complex work clearer.</h2>
          <a className="contact-link" href="mailto:shaina.gonzales@outlook.com">shaina.gonzales@outlook.com</a>
          <p className="contact-copy">Open to senior product design opportunities and thoughtful collaborations.</p>
          <div className="contact-socials"><a href="https://www.linkedin.com/in/shainag3">LinkedIn ↗</a><a href="https://www.figma.com/@shainagonzales1">Figma ↗</a><a href="https://github.com/gonzasha345-art">GitHub ↗</a></div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand" href={pageHref("home")} aria-label="Shaina Gonzales, Product Designer, home"><span>SHAINA GONZALES</span><small>PRODUCT DESIGNER</small></a>
        <nav aria-label="Footer navigation"><a href={`${pageHref("home")}#prototypes`}>Work</a><a href={pageHref("about")}>About</a><a href={designResumeHref}>Resume</a><a href="https://www.shainagonzalesdesigns.com/index.html">Software Portfolio ↗</a><a href="#contact">Contact</a></nav>
        <div className="footer-bottom"><p>Product design ↔ software engineering. One connected practice.</p><a href="https://www.figma.com/@shainagonzales1">Figma profile ↗</a><a href="https://github.com/gonzasha345-art/designportfolio">Portfolio repository ↗</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  );
}
