export interface Profile {
  name: string;
  role: string;
  portraitImage: string | null;
  portraitVideo: string | null;
  email: string | null;
  linkedin: string | null;
  introduction: string;
  bio: string[];
}

export interface Experience {
  company: string;
  area: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  summary: string;
  description: string;
  tags: string[];
  status: 'In development';
}

// Portfolio copy supplied and approved for use by the owner.
// Add portrait assets to public/ and set portraitImage or portraitVideo below.
export const profile: Profile = {
  name: 'Nazar',
  role: 'Software Engineer · Product Thinker · Founder',
  portraitImage: null,
  portraitVideo: null,
  email: null,
  linkedin: null,
  introduction: 'I connect software engineering with product thinking and a founder’s perspective, with a growing focus on AI-assisted development and technical leadership.',
  bio: [
    'I’m a software engineer and former startup founder, currently working on business-critical software in the Mercedes-Benz environment. My background spans iOS, modern web applications, backend services, integrations, databases, and Kubernetes.',
    'Before enterprise engineering, I co-founded and ran Softrino in Portugal. We were accepted into the Startup Lisboa community, and I represented the company at startup and technology events.',
    'My work increasingly extends beyond implementation: technical decisions, architecture discussions, PR reviews, requirements, and helping people work through engineering problems. I’m especially interested in where product thinking, AI-assisted development, and technical leadership meet.'
  ],
};

export const personal = {
  background: 'Born in Ukraine, shaped by many years in Portugal, and now based in southern Germany. Living and working across countries has influenced how I communicate, collaborate, and think about products and organisations.',
  everyday: 'I’m a father of three. Away from software, I make time for cycling, travel, and building things — from side projects to something practical at home.',
  interests: [
    { title: 'Aviation', description: 'Working toward an EASA LAPL, studying flight theory and radio communication.' },
    { title: 'Photography', description: 'Portrait, travel, and aviation photography.' },
    { title: 'Motorcycling', description: 'Exploring Europe and the Alps on two wheels.' },
    { title: 'Family & building', description: 'Father of three, always learning and building something.' },
  ],
};

export const skills: string[] = [
  'Angular', 'TypeScript', 'JavaScript', 'Java', 'Kotlin', 'Swift', 'iOS', 'React',
  'PostgreSQL', 'REST APIs', 'Kubernetes', 'Git', 'Full-stack development',
  'Domain-Driven Design', 'AI-assisted software engineering',
];

export const experience: Experience[] = [
  {
    company: 'Mercedes-Benz', area: 'Enterprise engineering',
    description: 'Business-critical software across frontend applications, backend services, APIs, integrations, databases, and cloud/Kubernetes environments. The work combines technical decisions, collaboration, and problem solving with a clear understanding of business workflows.',
  },
  {
    company: 'Softrino', area: 'Entrepreneurship · Portugal',
    description: 'Co-founded and ran a software company, working directly with customers and taking ownership of product delivery. Part of the Startup Lisboa ecosystem, with experience representing the company at startup and technology events.',
  },
  {
    company: 'Mobile & Web', area: 'Product development',
    description: 'A foundation in iOS applications that expanded into modern web interfaces, backend services, APIs, and full-stack product development. Experience connecting implementation decisions with the needs of the product.',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Engineering Agent',
    category: 'AI / Developer Productivity',
    summary: 'An experimental assistant for understanding repositories, investigating problems, supporting implementation decisions, and automating parts of the development workflow.',
    description: 'An experimental project in development, exploring how an engineering assistant can support repository understanding, investigation, and implementation decisions. Planned areas include LLM agents, tools and MCP integrations, repository context, code analysis, task planning, implementation assistance, and code review. It is not a finished production system.',
    tags: ['LLM agents', 'Tools / MCP integrations', 'Repository context', 'Code analysis', 'Task planning', 'Implementation assistance', 'Code review', 'Developer workflows'],
    status: 'In development',
  },
  {
    id: 2,
    title: 'Planes Over Me',
    category: 'Aviation / Web Application',
    summary: 'A personal aviation project being developed to connect live aircraft data with location information, showing which aircraft are nearby or overhead.',
    description: 'A personal aviation application in development. The aim is to bring live aircraft data and location-based information together to show aircraft nearby or overhead. Technical areas being explored include aviation APIs, geospatial data, maps, frontend development, backend integration, and deployment.',
    tags: ['Aviation APIs', 'Location / geospatial data', 'Frontend application', 'Maps', 'Backend / API integration', 'Deployment'],
    status: 'In development',
  },
];
