const details = {
  'project-gamification': {
    challengeTitle: 'Learning, participation, and progress in one place.',
    decisionTitle: 'Connect learning with visible progress.',
    deliveryTitle: 'Carry the experience into frontend and data integration.',
    context: 'General Motors wanted to modernize internal learning and employee engagement through a centralized platform. The product brought together employee profiles, video-based learning, interactive educational content, events, and competitive leaderboards.',
    tension: 'Learning content and participation signals need to coexist. A dashboard can make progress visible, but scores alone do not explain what someone can learn or do next.',
    scope: ['Designed the platform from concept to production as the lead UX/UI designer.', 'Created user flows, wireframes, interactive prototypes, and high-fidelity Figma designs.', 'Led frontend implementation and partnered with backend and database teams on SQL integration.'],
    annotations: [
      ['Navigation', 'The recreated preview groups destinations in a persistent sidebar. This establishes a place for related activities without putting every feature into the main dashboard.'],
      ['Progress overview', 'Summary cards and the weekly XP chart make participation visible at different levels of detail. These are sample values in the remake.'],
      ['Recognition', 'The leaderboard and achievements show the gamification layer. The linked prototype is the place to explore the broader learning experience.'],
    ],
    considerations: [
      ['Learning versus competition', 'Recognition can support participation, but it should not become the only way to understand success. Learning content and the next useful action need a clear place alongside scores.'],
      ['Overview versus detail', 'A shared overview gives related activities context. Individual learning and event flows still need enough detail to support their own tasks.'],
      ['Interface versus data', 'Profiles, event tracking, and progress depend on consistent data. SQL integration and backend collaboration connect the visible experience to the behavior underneath it.'],
    ],
    walkthrough: [
      ['Orient', 'Identify the available destinations and the progress information on the overview.'],
      ['Explore', 'Open the independent prototype and inspect how learning, participation, and recognition are presented.'],
      ['Evaluate', 'Consider whether a useful learning action is as easy to find as a score or leaderboard.'],
    ],
    reflection: 'The remake makes progress and recognition prominent. A next design iteration could give learning content equal visual weight and test whether people can identify their next useful action. That is a direction for further exploration, not a reported finding from the original project.',
  },
  'project-bsa': {
    challengeTitle: 'One event workflow. Different responsibilities.',
    decisionTitle: 'Keep the schedule connected to the coordination work.',
    deliveryTitle: 'Connect interface behavior to event data and workflow logic.',
    context: 'General Motors needed to redesign and redevelop a broadcasting and event management platform for executive broadcasts, large internal events, and live corporate productions. Employees submitting events and administrators coordinating production needed support within the same platform.',
    tension: 'A schedule answers when an event happens. Requests, approvals, and role-based visibility answer what can happen next and who can act. The product needed to support both.',
    scope: ['Contributed across UX/UI and frontend development, designing the platform experience from the ground up.', 'Created wireframes, user flows, interactive prototypes, UI systems, and multi-view calendar workflows.', 'Worked with backend, database, and infrastructure teams on event data structures, workflow logic, integrations, and scalability.'],
    annotations: [
      ['Calendar views', 'The recreated screen exposes Month, Week, and List controls. Different views offer different ways to scan the same schedule.'],
      ['Dated events', 'Events sit within the calendar grid so their timing and relationship to other scheduled work are visible.'],
      ['Event labels', 'Short titles and category treatments give the schedule a first layer of context. The sample demo below connects an event to its details and approval state.'],
    ],
    considerations: [
      ['Schedule versus coordination', 'The calendar is an entry point. Event details and request states need to stay connected so users can understand the work behind a date.'],
      ['Shared context versus permissions', 'Employees and administrators work with related event information but have different responsibilities. Role-based visibility needs to be supported in application logic as well as in the interface.'],
      ['Scanning versus inspection', 'A month view supports scanning across dates; an agenda provides more room for individual events. Keeping selection connected to a detail panel preserves context while a user inspects an event.'],
    ],
    walkthrough: [
      ['Scan', 'Switch between Month and Agenda in the sample calendar below.'],
      ['Narrow', 'Filter by Broadcast or Planning to inspect a subset of the sample events.'],
      ['Inspect', 'Select an event and read its time, type, approval status, and workflow context.'],
    ],
    reflection: 'The sample calendar demonstrates views, filters, and event inspection. A fuller remake could connect those interactions to request submission and review, then test whether employees and administrators understand their next action. Those flows and test results are not represented by the current demo.',
  },
};

export const caseDetails = project => details[project.slug];

export function Contribution({ detail }) {
  return <div className="case-contribution"><h4>What I contributed</h4><ul>{detail.scope.map(item => <li key={item}>{item}</li>)}</ul></div>;
}

export function PreviewAnnotations({ detail }) {
  return <div className="preview-annotations" aria-label="Portfolio preview annotations">{detail.annotations.map(([title,copy],index) => <article key={title}><span className="annotation-number">0{index+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>;
}

export function DesignConsiderations({ detail }) {
  return <div className="design-considerations"><p className="detail-label">DESIGN CONSIDERATIONS FOR THE REMAKE</p><p className="detail-intro">A closer reading of the recreated experience and its tradeoffs.</p>{detail.considerations.map(([title,copy]) => <article key={title}><h4>{title}</h4><p>{copy}</p></article>)}</div>;
}

export function ExploreRemake({ project, detail }) {
  return <section className="remake-walkthrough" id="explore"><div><p className="eyebrow">EXPLORE THE RECREATED EXPERIENCE</p><h3>{project.slug === 'project-bsa' ? 'Try the coordination pattern.' : 'Look beyond the leaderboard.'}</h3><p>{project.slug === 'project-bsa' ? 'The independent BSA Figma remake is now available. The local calendar below remains a separate sample interaction demo.' : 'The independent Figma prototype extends the portfolio preview. It uses recreated content and sample data.'}</p><a className="button primary" href={project.prototype || '#bsa-demo'}>{project.prototype ? (project.slug === 'project-bsa' ? 'Open the BSA remake ↗' : 'Open the learning prototype ↗') : 'Try the sample calendar ↓'}</a></div><ol>{detail.walkthrough.map(([title,copy]) => <li key={title}><strong>{title}</strong><p>{copy}</p></li>)}</ol></section>;
}
