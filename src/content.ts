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

export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
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

// Career positioning aligned with the September 2026 LinkedIn profile review.
// Add portrait assets to public/ and set portraitImage or portraitVideo below.
export const profile: Profile = {
  name: 'Nazar',
  role: 'Technical Product Ownership · Software Engineering · Applied AI',
  portraitImage: '/images/nazar-portrait-transparent.png',
  aboutImage: '/images/nazar-portrait.jpg',
  portraitVideo: null,
  email: 'nazariy17@gmail.com',
  linkedin: 'https://de.linkedin.com/in/nazariybohun',
  introduction: 'Senior Software Engineer and former co-founder pursuing Technical Product Owner roles. I connect requirements, priorities and technical delivery, drawing on enterprise engineering and client-facing experience while developing my applied AI capabilities.',
  bio: [
    'I’m a Senior Software Engineer with 15+ years across enterprise, automotive, mobile and web software, including work in the Daimler / Mercedes-Benz environment since 2017. Technical Product Ownership is my primary career direction, backed by hands-on engineering and founder experience.',
    'At Mercedes-Benz Tech Innovation, I work with Product Owners to clarify requirements, write and refine user and technical stories, and support backlog prioritization. My current work combines a vehicle-order-management platform with architecture, integrations and delivery responsibilities.',
    'Earlier, I co-founded Softrino in Lisbon, working directly with clients on requirements, estimates and priorities, and coordinating delivery through implementation, testing, release and support.',
    'Senior engineering and technical leadership remain a parallel path. Applied AI is my growth direction: I use AI-assisted and agentic engineering tools daily, contributed the React frontend of an internal AI prototype, and am exploring an experimental engineering assistant.',
    'Portuguese / EU citizen, based in Germany and open to relocation to German-speaking Switzerland.'
  ],
};

export const personal = {
  background: 'I grew up, lived, and worked across Portugal and Germany, which has given me an international perspective on collaboration, product development, and working with people from different backgrounds.',
  everyday: 'I’m a father of three. Away from software, I make time for cycling, travel, and building things, from side projects to something practical at home.',
  interests: [
    { title: 'Aviation', description: 'Working toward an EASA LAPL, studying flight theory and radio communication.' },
    { title: 'Photography', description: 'Portrait, travel, and aviation photography.' },
    { title: 'Motorcycling', description: 'Exploring Europe and the Alps on two wheels.' },
    { title: 'Family & building', description: 'Father of three, always learning and building something.' },
  ],
};

export const skills: SkillGroup[] = [
  {
    title: 'Product & delivery',
    description: 'Experience supporting Product Owners and coordinating client delivery.',
    items: ['Requirements analysis', 'User stories & refinement', 'Backlog prioritization support', 'Stakeholder communication', 'Estimation & scope', 'Scrum facilitation', 'Technical delivery'],
  },
  {
    title: 'Software engineering',
    description: 'The technical foundation I bring to product decisions and delivery.',
    items: ['Kotlin', 'Java', 'Spring Boot', 'Angular', 'TypeScript', 'React', 'Swift / iOS', 'PostgreSQL', 'REST APIs', 'Kafka', 'Docker', 'Kubernetes', 'CI/CD', 'Domain-Driven Design'],
  },
  {
    title: 'Applied AI',
    description: 'Daily AI-assisted engineering, prototype work and ongoing exploration of LLM applications.',
    items: ['AI-assisted engineering', 'Agentic development workflows', 'AI prototype frontend', 'Exploring LLM agents', 'Exploring tools / MCP integrations'],
  },
];

export const experience: Experience[] = [
  {
    company: 'Mercedes-Benz Tech Innovation', area: 'Senior Software Engineer · Dec 2018–present',
    description: 'Work with Product Owners on requirements, stories, implementation scope and prioritization. Contribute to a vehicle-order-management platform using Angular, Kotlin / Spring Boot and PostgreSQL, modernizing inherited code toward DDD. Took ownership of migrating 2 repositories, 2 services and approximately 15 CI/CD workflows. Regularly facilitated Scrum events during six months of rotating team responsibility, and owned the React frontend of an internal AI prototype.',
  },
  {
    company: 'Softrino', area: 'Co-Founder · Technical & Delivery Lead · 2011–2017',
    description: 'Worked directly with international clients to clarify requirements, prepare estimates and agree priorities. Coordinated mobile and web delivery from implementation through testing, release and support. Recruited and mentored developers within a five-person core team, with approximately ten people involved at peak including students, contractors and external contributors.',
  },
  {
    company: 'Questax / Daimler TSS', area: 'Senior iOS Software Engineer · Oct 2017–Nov 2018',
    description: 'Developed a connected private car-sharing product for Mercedes-Benz vehicles, with App Store release responsibility and Java backend contributions. Simplified an overcomplicated state architecture to address asynchronous consistency problems and reduce unnecessary API interactions. Collaborated with the Product Owner and engineering team on requirements and implementation decisions.',
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
