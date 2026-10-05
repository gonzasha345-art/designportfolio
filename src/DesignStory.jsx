const stories = {
  bsa: {
    users: 'Employees submitting events and administrators coordinating corporate broadcasts and productions.',
    problem: 'Scheduling was only one part of the job. Event requests, approval states, and production coordination needed to make sense together.',
    constraints: 'The experience supported executive communications, including Mary Barra-level broadcasts, and events serving 1,000+ attendees. Administrative approvals added another layer to scheduling.',
    focus: 'The design problem: make the schedule readable without losing the information needed to manage a high-visibility event.',
    decisions: [['Schedule first', 'Use the calendar as a shared point of orientation, with event details available in context.'], ['Visible workflow states', 'Bring requests and approval states into the scheduling experience so the next step is easier to understand.'], ['Separate overview from detail', 'Give people a scan of the schedule before asking them to read event-level information.']],
    outcome: 'Led the UX/UI redesign and contributed to frontend implementation of a modernized broadcasting and event coordination experience.',
    lesson: 'A calendar is a workflow interface: the event, its state, and its next handoff need to be understood together.',
    image: `${import.meta.env.BASE_URL}assets/broadcasting.png`,
    caption: 'Representative portfolio concept: calendar hierarchy and event overview. This is not a GM production screenshot.',
    annotations: ['Calendar overview establishes the schedule.', 'Event detail gives the selected item context.', 'Approval state connects scheduling to the workflow.'],
  },
  ise: {
    users: 'Technical employees working with global infrastructure, locations, servers, IPs, nodes, and clusters.',
    problem: 'Dense infrastructure information needed an understandable structure across a global map, large tables, and creation workflows.',
    constraints: 'The interface had to accommodate geographic context, detailed technical records, node creation, and ICE clusters while staying useful for technical users.',
    focus: 'The design problem: connect a global overview to precise records and actions without making every detail compete for attention.',
    decisions: [['Orient before inspecting', 'Use the global dashboard and map to establish location and system context.'], ['Make detail navigable', 'Organize IPs, servers, nodes, and clusters into views that support technical inspection.'], ['Connect views to actions', 'Keep creation workflows connected to the infrastructure information people are working with.']],
    outcome: 'Designed and contributed to full-stack implementation of a global infrastructure experience spanning maps, tables, nodes, and clusters.',
    lesson: 'Technical detail can stay precise while the interface provides clear entry points, hierarchy, and paths between overview and action.',
    image: `${import.meta.env.BASE_URL}assets/operations-dashboard.png`,
    caption: 'Representative portfolio concept: global overview, system health, and detailed records. The linked remake is a separate exploration.',
    annotations: ['The map provides geographic orientation.', 'Summary information establishes system context.', 'Detailed records support technical investigation.'],
  },
  electron: {
    users: 'Employees seeking internal information, resources, and workflow support.',
    problem: 'Finding enterprise knowledge and navigating resources created friction in everyday work.',
    constraints: 'One of GM’s early internal AI chatbot experiences had to connect conversational interaction with enterprise information and implementation requirements.',
    focus: 'The design problem: make conversational assistance useful and understandable for employees looking for information.',
    decisions: [['Start with employee intent', 'Center the experience on questions and workflow assistance rather than AI novelty.'], ['Explain the interaction', 'In the portfolio remake, distinguish the employee question, search activity, and assistant response.'], ['Design with implementation', 'Bring interface decisions together with backend integrations and enterprise workflow support.']],
    outcome: 'Contributed as a developer/designer to an early internal AI assistant supporting knowledge retrieval and employee workflows.',
    lesson: 'An AI interface earns its place by helping people understand what is happening and reach useful information.',
    image: `${import.meta.env.BASE_URL}assets/electron-figma.png`,
    caption: 'Actual export from the independent Figma remake: Nexus AI mobile conversation. This is not the original GM product.',
    annotations: ['The employee question sets the task.', 'Search activity communicates the current state.', 'The conversation keeps assistance in context.'],
  },
};
const process = [
  ['Observe', 'Talk directly with employees and watch them use existing systems and workflows.'],
  ['Frame', 'Identify pain points and workflow problems before creating designs.'],
  ['Explore', 'Develop designs and prototypes to make the proposed experience tangible.'],
  ['Review', 'Present prototypes to stakeholders and gather stakeholder and user feedback.'],
  ['Iterate', 'Change the designs based on feedback, then test or review the updated experience again.'],
  ['Reflect', 'Join designers, developers, stakeholders, and project managers in retrospectives after completion.'],
];
export default function DesignStory({ project }) {
  const story = stories[project];
  return <section className="design-story" aria-labelledby="design-story-title">
    <nav className="story-nav" aria-label="Case study sections"><a href="#context">Context</a><a href="#discovery">Discovery</a><a href="#decisions">Decisions</a><a href="#exploration">Exploration</a><a href="#reflection">Impact & reflection</a></nav>
    <div id="context" className="story-block"><p className="eyebrow">01 / UNDERSTAND THE WORK</p><h2 id="design-story-title">The workflow behind the interface.</h2><div className="story-context">{[['Problem',story.problem],['Users',story.users],['Constraints',story.constraints]].map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
    <div id="discovery" className="story-block"><p className="eyebrow">02 / DISCOVERY → FEEDBACK → ITERATION</p><h2>Observe the work. Make ideas tangible. Refine together.</h2><p className="story-lede">Across my GM product-design work, I used direct employee conversations, workflow observation, prototypes, feedback, and repeated review. The sequence below shows how I connected discovery with delivery.</p><ol className="process-track">{process.map(([title,copy],index)=><li key={title}><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol><div className="story-insight"><h3>Design lens for this project</h3><p>{story.focus}</p></div></div>
    <div id="decisions" className="story-block"><p className="eyebrow">03 / DESIGN REASONING</p><h2>Give complexity a clear hierarchy.</h2><p className="story-lede">The portfolio exploration makes these interface priorities visible.</p><div className="decision-cards">{story.decisions.map(([title,copy],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
    <div id="exploration" className="story-block"><p className="eyebrow">04 / EXPLORATION & PROTOTYPE</p><h2>From workflow to a visible experience.</h2><div className="exploration-path"><span>Existing workflow observation</span><span>Wireframes & design exploration</span><span>Prototype review</span><span>Feedback & revision</span><span>Implementation</span></div><p className="story-lede">I created designs and prototypes, presented them, gathered feedback, revised the experience, and reviewed it again. The visuals below are independent portfolio remakes; original GM screens and revision records are not shown.</p><figure className={`story-visual ${project === 'electron' ? 'story-mobile-visual' : ''}`}><img src={story.image} alt={story.caption} loading="lazy" /><figcaption>{story.caption}</figcaption></figure><div className="actions"><a className="button primary" href={project === 'bsa' ? '#bsa-demo' : project === 'ise' ? 'https://www.figma.com/make/Jo6o4zhUv1Y7vPxtPbuwIl/iseexampleprototype?t=HNOiXZn6KcWP4UDI-20&fullscreen=1' : 'https://www.figma.com/design/PECexQvNxp0jLedKtJRZZk/ai-chat-bot?node-id=3-3'}>{project === 'bsa' ? 'Try the sample calendar' : project === 'ise' ? 'Try the ISE remake' : 'Explore the Figma design'}</a></div><ol className="visual-notes">{story.annotations.map(note=><li key={note}>{note}</li>)}</ol></div>
    <div id="reflection" className="story-block"><p className="eyebrow">05 / DELIVERY & REFLECTION</p><div className="reflection-grid"><article><h2>Original project impact</h2><p>{story.outcome}</p></article><article><h2>Design takeaway</h2><p>{story.lesson}</p></article></div><details className="retrospective"><summary>How I carry learning into the next project</summary><p>After projects were completed, designers, developers, stakeholders, and project managers discussed what worked, what was difficult, and what could improve. That retrospective practice connected design decisions with delivery experience.</p></details></div>
  </section>;
}
