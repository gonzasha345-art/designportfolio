const facts = {
  bsa: ['UX/UI design lead; frontend contributor', 'Backend and infrastructure teams; stakeholders', 'Scheduling → Approvals → UX/UI → Prototypes → Frontend', 'Modernized event coordination and administrative approval workflows.'],
  ise: ['UX/UI designer and full-stack developer', 'Product stakeholders and engineering partners', 'Maps → Tables → Node creation → UX/UI → Full-stack', 'Brought infrastructure maps, nodes, clusters, and data workflows into a shared experience.'],
  electron: ['Full-stack contributor with UX/UI focus', 'Cross-functional development team', 'Conversational interfaces → Integration → Implementation', 'Supported enterprise information retrieval and workflow assistance.'],
};
export default function ProjectFacts({ project }) {
  return <dl className="project-facts">{['Role','Team','Scope','Impact'].map((label,index)=><div key={label}><dt>{label}</dt><dd>{facts[project][index]}</dd></div>)}</dl>;
}
