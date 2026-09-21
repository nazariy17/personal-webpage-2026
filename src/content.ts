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
}

// Replace provisional content here after checking against the final CV.
// Add portrait assets to public/ and set portraitImage or portraitVideo below.
export const profile: Profile = {
  name: 'Nazar',
  role: 'Software Engineer & Founder',
  portraitImage: null,
  portraitVideo: null,
  email: null,
  linkedin: null,
  introduction: 'I connect software engineering with product thinking and an entrepreneurial perspective.',
  bio: [
    'My background spans enterprise software, mobile applications, and building a software company.',
    'From Mercedes-Benz projects to Softrino and Lisbon’s startup community, I bring an understanding of both the technology and the people behind it.'
  ],
};
export const skills: string[] = ['Angular', 'TypeScript', 'JavaScript', 'Java', 'Kotlin', 'Swift', 'iOS', 'PostgreSQL', 'Kubernetes', 'REST APIs', 'Git', 'Full-stack development'];
export const experience: Experience[] = [
  { company: 'Mercedes-Benz', area: 'Enterprise engineering', description: 'Full-stack development across business-critical systems, connecting frontend applications, backend services, and integrations.' },
  { company: 'Softrino', area: 'Entrepreneurship · Lisbon', description: 'Software-company experience and first-hand involvement in the Startup Lisboa community.' },
  { company: 'Mobile & web', area: 'Product development', description: 'A technical foundation spanning iOS applications, modern web interfaces, and backend services.' },
];
export const projects: Project[] = [1, 2, 3].map(id => ({ id, title: `Project name ${id}`, category: 'Selected work', summary: 'Case study in preparation.', description: 'The complete case study will cover the challenge, my role, the approach, and the outcome.', tags: ['Details coming soon'] }));
