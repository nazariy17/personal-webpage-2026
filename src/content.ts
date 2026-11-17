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
  organisation: 'Mercedes-Benz Tech Innovation' | 'Softrino';
  visual: 'architecture' | 'solutions' | 'enablement' | 'ai';
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

// Reconciled with the master career record updated 17 November 2026.
// See docs/COPY_REVIEW.md for the source revision and wording decisions.
export const profile: Profile = {
  name: 'Nazariy Bohun',
  role: 'Senior Software Engineer · Technical Product & Solution Ownership · Former Co-Founder',
  portraitImage: '/images/nazar-portrait-transparent.png',
  aboutImage: '/images/nazar-portrait.jpg',
  portraitVideo: null,
  email: 'nazariy17@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nazariybohun/',
  languages: 'German: B2 — daily working language · English: C1 · Portuguese and Ukrainian: native',
  introduction: 'Senior Software Engineer and former Softrino co-founder with 15+ years of experience. I combine hands-on engineering, technical product and solution responsibilities, and direct client delivery to turn business problems into working software.',
  bio: [
    'At Mercedes-Benz Tech Innovation, I connect requirements, technical decisions and delivery. My current work spans an Angular frontend and Kotlin / Spring Boot backend-for-frontend, from implementation and testing to releases, deployment configuration and production diagnosis.',
    'In SAFe teams, I contribute technical feasibility, estimates, dependencies and risks to refinement and PI Planning. I prioritise technical debt with the engineering team and agree defect priorities with the Product Owner, helping turn product needs into realistic delivery plans.',
    'As a Softrino co-founder, I led client discovery, defined functional solutions and proposed the scope of initial MVPs and later releases. I agreed priorities and delivery trade-offs directly with clients, recruited and guided developers, and coordinated delivery through testing, release and support.',
  ],
};

export const achievements: Achievement[] = [
  {
    title: 'Making application state understandable',
    context: 'Mercedes-Benz Tech Innovation · Technical judgement',
    organisation: 'Mercedes-Benz Tech Innovation',
    visual: 'architecture',
    scope: 'Vue · Pinia · Playwright',
    description: 'Proposed replacing an inherited Redux implementation with Pinia, explained the technical case and implemented the change after team agreement. Refactored the frontend and added Playwright coverage for key workflows and regressions.',
    outcome: 'Clearer state flow, more readable code and corrected data handling.',
    tags: ['Architecture', 'Vue', 'Regression testing'],
  },
  {
    title: 'From a client problem to a release plan',
    context: 'Softrino · Client discovery & solution delivery',
    organisation: 'Softrino',
    visual: 'solutions',
    scope: 'Co-founder · Active role 2011–2017',
    description: 'Led discovery with clients, translated business needs into functional solutions and proposed what to deliver in an initial MVP and subsequent releases. Sequenced work around client priorities, technical dependencies, budget and available capacity.',
    outcome: 'Scoped release plans and delivery trade-offs agreed directly with clients, followed through to implementation, release and support.',
    tags: ['Client discovery', 'MVP scoping', 'Release sequencing'],
  },
  {
    title: 'Building foundations other teams can use',
    context: 'Mercedes-Benz Tech Innovation · Developer enablement',
    organisation: 'Mercedes-Benz Tech Innovation',
    visual: 'enablement',
    scope: 'Reusable tooling across assignments',
    description: 'Helped create a Vue 3 migration template and starter standard after working in an early migration team. Across assignments, contributed reusable GitHub Actions, shared documentation and onboarding/offboarding automation across GitHub and collaboration tools.',
    outcome: 'Reusable foundations for project setup, access and everyday delivery, adopted beyond the original team.',
    tags: ['Developer experience', 'Automation', 'Standards'],
  },
  {
    title: 'Giving an AI prototype its interface',
    context: 'Mercedes-Benz Tech Innovation · AI-enabled product',
    organisation: 'Mercedes-Benz Tech Innovation',
    visual: 'ai',
    scope: 'Sole frontend developer · About 2 months',
    description: 'Developed the React conversational frontend of an internal AI-enabled component-comparison prototype, collaborating with the Python / LLM backend team.',
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
      'Shape technical scope and assess feasibility, dependencies and risks in SAFe refinement and PI Planning; prioritise technical debt with engineers and defects jointly with the Product Owner.',
      'Share delivery and operational responsibility within the current frontend / backend-for-frontend team, including implementation, review, testing, deployment and production diagnosis. Experience includes on-call duty across assignments.',
      'Completed a deadline-driven GitHub migration of two repositories, two services and approximately 15 workflows, resolving configuration and connectivity issues until deployment worked again.',
      'Propose and implement technical improvements and reusable developer tooling. Facilitate retrospectives, workshops and technical decisions; co-facilitate planning and refinement.',
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
    area: 'Co-Founder · Nov 2011–Aug 2017',
    description: 'Co-founded a software company in Lisbon and led technical discovery and delivery for international mobile and web clients. Shaped solutions, MVP scope and release sequencing around business needs and technical dependencies.',
    highlights: [
      'Led requirements analysis and architecture, prepared estimates and agreed scope, priorities and capacity trade-offs directly with clients.',
      'Proposed initial MVP releases and follow-up scope, explaining what each milestone would deliver within the agreed budget and timeline.',
      'Handled recruitment and guided developers within a five-person core team, with approximately ten contributors involved at peak.',
      'Built and supported partner lead-submission APIs; worked on SEPA direct-debit scheduling, bank API integration and duplicate-charge prevention.',
    ],
  },
  {
    company: 'Independent work · Portugal',
    area: 'Independent Software Developer · Approx. 2006–2011',
    description: 'Backend and frontend client work as a sole proprietor, before co-founding Softrino.',
    highlights: [
      'As the sole software engineer, developed a management-system backend from scratch for inventory workflows connected with scanning equipment and barcode-enabled staff stations.',
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    title: 'Product, solutions & client delivery',
    description: 'Technical product and solution responsibilities grounded in engineering, plus direct client discovery and delivery as a co-founder.',
    items: ['Requirements & solution definition', 'SAFe / PI Planning', 'Feasibility, dependencies & risks', 'Technical-debt prioritisation', 'Joint defect prioritisation', 'MVP scope & release sequencing', 'Client discovery & trade-offs'],
  },
  {
    title: 'Full-stack engineering',
    description: 'Kotlin / Java services and TypeScript frontends, with experience in application search, integrations, web and mobile products.',
    items: ['Kotlin / Java', 'Spring Boot', 'Angular / TypeScript', 'Vue / Pinia', 'React', 'PostgreSQL', 'REST APIs', 'Elasticsearch / application search', 'Earlier: native iOS, PHP / Laravel, Node.js / Express'],
  },
  {
    title: 'Quality, operations & enablement',
    description: 'Testing, release workflows, production support and reusable tools that help engineering teams deliver.',
    items: ['GitHub Actions', 'Playwright', 'Docker / Kubernetes / K9s', 'AWS deployment configuration', 'Pact', 'SonarQube / Black Duck', 'Grafana / Kibana', 'On-call & production support', 'Reusable developer tooling'],
  },
  {
    title: 'AI-assisted engineering',
    description: 'Configure and use agent-assisted workflows for exploration, scoped implementation and review, while retaining responsibility for design, correctness and testing.',
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
