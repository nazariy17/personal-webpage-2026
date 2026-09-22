export interface Profile {
  name: string;
  role: string;
  portraitImage: string | null;
  aboutImage: string | null;
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
  role: "Software Engineering · Architecture · Technical Leadership",
  portraitImage: '/images/nazar-portrait-transparent.png',
  aboutImage: '/images/nazar-portrait.jpg',
  portraitVideo: null,
  email: 'nazariy17@gmail.com',
  linkedin: 'https://de.linkedin.com/in/nazariybohun',
  introduction: "I translate business and product requirements into technical solutions across architecture, APIs, integrations, and delivery. With enterprise and founder experience, I coordinate decisions across teams and stakeholders, grounded in code, CI/CD, and system constraints.",
  bio: [
    'I’m a software engineer and former startup founder, currently working on business-critical software in the Mercedes-Benz environment. My background spans iOS, modern web applications, backend services, integrations, databases, and Kubernetes.',
    'Before enterprise engineering, I co-founded and ran Softrino in Portugal. We were accepted into the Startup Lisboa community, and I represented the company at startup and technology events.',
    'My work increasingly connects business requirements with architecture and delivery: coordinating technical decisions, discussing system constraints, reviewing code, and helping teams move from requirements to implementation. Product thinking and AI-assisted engineering remain part of that work.'
  ],
};

export const personal = {
  background: 'I grew up, lived, and worked across Portugal and Germany, which has given me an international perspective on collaboration, product development, and working with people from different backgrounds.',
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
