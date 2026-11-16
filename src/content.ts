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
  languages: string;
}

export interface Experience {
  company: string;
  area: string;
  description: string;
  highlights: string[];
}

export interface Achievement {
  title: string;
  context: string;
  scope: string;
  description: string;
  outcome: string;
  tags: string[];
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
  nextSteps: string;
  tags: string[];
  status: 'In development';
}

// Public summaries grounded in the November 2026 career review.
// Keep formal titles, individual contributions and shared responsibility distinct.
export const profile: Profile = {
  name: 'Nazariy Bohun',
  role: 'Senior Software Engineer · Technical Solutions & Delivery',
  portraitImage: '/images/nazar-portrait-transparent.png',
  aboutImage: '/images/nazar-portrait.jpg',
  portraitVideo: null,
  email: 'nazariy17@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nazariybohun/',
  languages: 'German: B2 — daily working language · English: C1 · Portuguese and Ukrainian: native',
  introduction: 'Senior Software Engineer and former software-company co-founder with 15+ years of experience. I turn requirements into technical solutions, combining hands-on engineering, shared prioritisation and responsibility for delivery.',
  bio: [
    'At Mercedes-Benz Tech Innovation, my work connects requirements, technical decisions and delivery. I shape stories in refinement and PI planning, share sprint and defect prioritisation with Product Owners, and maintain the technical backlog with the engineering team.',
    'My engineering experience spans enterprise applications, automotive software, mobile products and web platforms. In my current team, I work across the Angular frontend and Kotlin / Spring Boot backend-for-frontend, from implementation and testing to releases and production diagnosis.',
    'Earlier, I co-founded Softrino in Lisbon, working directly with clients on scope, estimates and priorities. Today I also design and use AI-assisted development workflows, while staying responsible for the resulting code, tests and technical decisions.',
  ],
};

export const achievements: Achievement[] = [
  {
    title: 'Keeping software delivery moving',
    context: 'Mercedes-Benz Tech Innovation · Delivery migration',
    scope: '2 repositories · 2 services · ~15 workflows',
    description: 'Completed a deadline-driven GitHub migration covering build, release and deployment workflows. Reconfigured integrations and resolved configuration and database-connectivity issues.',
    outcome: 'Completed within the required deadline, with deployment working again.',
    tags: ['GitHub Actions', 'CI/CD', 'Deployment'],
  },
  {
    title: 'Making application state understandable',
    context: 'Mercedes-Benz Tech Innovation · Frontend architecture',
    scope: 'Vue · Pinia · Playwright',
    description: 'Proposed replacing an inherited Redux implementation with Pinia, explained the technical case and implemented the change after team agreement. Added automated coverage for key workflows and regressions.',
    outcome: 'Clearer state flow, more readable code and corrected data handling.',
    tags: ['Architecture', 'Vue', 'Regression testing'],
  },
  {
    title: 'Building foundations other teams can use',
    context: 'Mercedes-Benz Tech Innovation · Developer enablement',
    scope: 'Reusable tooling across assignments',
    description: 'Contributed a Vue 3 migration template and starter standard. Across several assignments, built reusable GitHub Actions, shared documentation and onboarding/offboarding automation spanning GitHub and collaboration tools.',
    outcome: 'Reusable foundations for project setup, access and everyday delivery.',
    tags: ['Developer experience', 'Automation', 'Standards'],
  },
  {
    title: 'Giving an AI prototype its interface',
    context: 'Mercedes-Benz Tech Innovation · AI-enabled product',
    scope: 'Sole frontend developer · 2-month assignment',
    description: 'Built the React conversational frontend of an internal AI-enabled component-comparison prototype, collaborating with the Python / LLM backend team.',
    outcome: 'Delivered the conversational interface for a prototype with real users.',
    tags: ['React', 'Conversational UI', 'AI prototype'],
  },
];

export const experience: Experience[] = [
  {
    company: 'Mercedes-Benz Tech Innovation',
    area: 'Senior Software Engineer · Dec 2018–present',
    description: 'Software delivery across vehicle-order management, automotive software-update workflows and an internal AI prototype. Direct employment began at Daimler TSS, continuing the private car-sharing assignment started through Questax.',
    highlights: [
      'Translate requirements into technical scope and stories; contribute to PI planning and shared sprint prioritisation.',
      'Share delivery and operational responsibility within the current frontend / backend-for-frontend team, including implementation, reviews, testing, deployment and production diagnosis.',
      'Propose and implement architecture improvements, contribute reusable developer tooling, and facilitate retrospectives, workshops and technical decisions.',
    ],
  },
  {
    company: 'Questax / Daimler TSS',
    area: 'Senior iOS Software Engineer · Oct 2017–Nov 2018',
    description: 'Assigned through Questax to a connected private car-sharing product for Mercedes-Benz vehicles. Joined Daimler TSS directly in December 2018 and continued on the same product until approximately early 2021.',
    highlights: [
      'Developed native iOS features, took App Store release responsibility and contributed to the Java backend.',
      'Proposed and implemented simpler state management to address asynchronous consistency problems and unnecessary API interactions.',
    ],
  },
  {
    company: 'Softrino',
    area: 'Co-Founder · Technical & Delivery Lead · Nov 2011–Aug 2017',
    description: 'Co-founded a software company in Lisbon and coordinated mobile and web delivery for international clients, from discovery and implementation through release and support.',
    highlights: [
      'Translated client needs into scope and estimates, and agreed priorities when requests exceeded available capacity.',
      'Recruited and mentored developers within a five-person core team, with approximately ten contributors involved at peak.',
      'Delivered web applications and integrations using technologies including PHP / Laravel and Node.js / Express, alongside mobile products.',
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    title: 'Technical solutions & delivery',
    description: 'Turning business needs into executable work, with engineering judgement throughout planning and delivery.',
    items: ['Requirements & refinement', 'Technical-backlog prioritisation', 'Shared sprint planning', 'PI planning', 'Stakeholder collaboration', 'Workshop facilitation'],
  },
  {
    title: 'Full-stack engineering',
    description: 'Kotlin / Java services and TypeScript frontends, backed by experience across enterprise, web and mobile products.',
    items: ['Kotlin / Java', 'Spring Boot', 'Angular / TypeScript', 'Vue / Pinia', 'React', 'PostgreSQL', 'REST APIs', 'Earlier: native iOS, PHP / Laravel, Node.js / Express'],
  },
  {
    title: 'Quality, operations & enablement',
    description: 'Testing, release workflows, production investigation and tools that make delivery easier for other developers.',
    items: ['GitHub Actions', 'Playwright', 'Docker / Kubernetes', 'Pact', 'SonarQube / Black Duck', 'Grafana / Kibana', 'Production support', 'Reusable developer tooling'],
  },
  {
    title: 'AI-assisted engineering',
    description: 'Practical use and configuration of agentic workflows, with code review, testing and engineering decisions kept in human hands.',
    items: ['GitHub Copilot / Devin', 'Parallel agent workflows', 'Implementation / test / review coordination', 'n8n automation', 'AI product frontend'],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Engineering Agent',
    category: 'Developer productivity',
    summary: 'An experimental engineering assistant for repository understanding, investigation and implementation decisions.',
    description: 'A personal project in development, exploring how an assistant can use repository context to investigate problems, plan changes and support code review.',
    nextSteps: 'Explore tool integrations and evaluate the quality of repository-grounded answers and proposed changes.',
    tags: ['Repository context', 'Task planning', 'Code review'],
    status: 'In development',
  },
  {
    id: 2,
    title: 'Planes Over Me',
    category: 'Aviation & location',
    summary: 'A personal aviation application being developed to show which aircraft are nearby or overhead.',
    description: 'A project bringing together aviation and web development. The goal is to connect live aircraft data with location information in a clear, useful interface.',
    nextSteps: 'Explore aviation data sources, map interactions and the integration needed for location-based aircraft information.',
    tags: ['Aviation data', 'Geospatial information', 'Web application'],
    status: 'In development',
  },
];

export const personal = {
  background: 'Away from software, I’m usually looking for a different perspective — in the air, behind a camera or on a road through the Alps.',
  everyday: 'I’m a father of three. I enjoy cycling, travel and practical projects at home.',
  interests: [
    { title: 'Aviation', description: 'Working toward an EASA LAPL, studying flight theory and radio communication.' },
    { title: 'Photography', description: 'Portraits, travel and aviation, with an eye for the details.' },
    { title: 'Motorcycling', description: 'Exploring Europe and the Alps on two wheels.' },
  ],
};
