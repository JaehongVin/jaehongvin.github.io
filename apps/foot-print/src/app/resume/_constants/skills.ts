export interface SkillGroup {
  category: string;
  items: string;
}

export const SKILLS: SkillGroup[] = [
  {
    category: 'Languages',
    items: 'TypeScript, JavaScript(ES6+), HTML/CSS, SQL',
  },
  {
    category: 'Frameworks',
    items: 'React, Next.js, Vue, Nuxt.js, Node.js(Express)',
  },
  {
    category: 'State & Data',
    items: 'TanStack Query, TanStack Router, Zustand, Pinia',
  },
  { category: 'Styling', items: 'TailwindCSS, SCSS' },
  {
    category: 'Platform & Tooling',
    items:
      'AWS(Lambda, S3, EC2), GitLab CI, Sentry, Jira, Swagger, Figma, Notion',
  },
  { category: 'Collaboration', items: 'Agile(Scrum, Kanban)' },
];
