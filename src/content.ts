// All editable copy and placeholders live here.
// Replace the two values below before sharing the page with anyone.

/** Monthly price shown after the free first month. Replace with a real number, e.g. '$29'. */
export const PRICE = '$[price]';

/** Where answers are sent. Replace with a real address, e.g. 'you@yourdomain.com'. */
export const CONTACT_EMAIL = '';

export const images = {
  heroScenery: '/images/hero-scenery.webp',
  howItWorks: '/images/how-it-works.webp',
  mobileNotes: '/images/mobile-notes.webp',
};

export const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Sample notes', href: '#sample-notes' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Early access', href: '#offer' },
];

export const steps = [
  { n: 1, title: 'Prepare', text: 'Add the candidate, role and a few key questions.' },
  { n: 2, title: 'Capture', text: 'AI takes the notes and transcribes the conversation while you focus on the interview.' },
  { n: 3, title: 'Get insights', text: 'Review a clear summary with key takeaways, insights and next steps.' },
];

// Everything below is invented sample data used to illustrate the concept.
export const sample = {
  candidate: 'Jordan Lee',
  role: 'Product Designer',
  stage: 'First round interview',
  recent: [
    { name: 'Jordan Lee', meta: 'Product Designer · today' },
    { name: 'Taylor Kim', meta: 'Data Analyst · yesterday' },
    { name: 'Sarah Brown', meta: 'Account Executive · Mon' },
  ],
  takeaways: [
    'Four years of design experience in B2B SaaS.',
    'Strong focus on user research and prototyping.',
    'Worked closely with engineering and product teams.',
  ],
  explore: [
    'Limited experience with complex data products.',
    'Ask about past team leadership roles.',
  ],
  nextSteps: ['Schedule next interview with the design lead.', 'Request a portfolio or work sample.'],
  skills: ['Product design', 'User research', 'UX prototyping', 'Team collaboration'],
  transcript: [
    { who: 'Jordan Lee', initials: 'JL', role: 'candidate', time: '10:00 AM', text: "I've been working on the redesign of the analytics dashboard over the past year." },
    { who: 'Interviewer', initials: 'IN', role: 'interviewer', time: '10:03 AM', text: 'Can you walk me through the main challenges?' },
    { who: 'Jordan Lee', initials: 'JL', role: 'candidate', time: '10:05 AM', text: "The biggest challenge was balancing the needs of different user groups, with a focus on our members at today's scale.", highlight: true },
    { who: 'Interviewer', initials: 'IN', role: 'interviewer', time: '10:08 AM', text: 'Can you summarize the process of the framework we see here?' },
  ],
  highlights: [
    { time: '10:05 AM', quote: 'Balancing the needs of different user groups at today’s scale.', tag: 'Prioritisation' },
    { time: '10:21 AM', quote: 'We ran weekly research sessions with five customers.', tag: 'User research' },
  ],
};

export const roadmap = [
  { name: 'Recruiting tools (ATS)', note: 'Send notes to the tool your team already uses. We are still deciding which to support first.' },
  { name: 'Calendar', note: 'Start an interview note from a calendar event.' },
  { name: 'Share & export', note: 'Copy a summary or export notes for your team.' },
];

export const feedbackQuestions = [
  { id: 'yes', label: 'Yes, I would try it', subject: 'Abrish AI: yes, I would try it' },
  { id: 'maybe', label: 'Maybe, I have questions', subject: 'Abrish AI: maybe, I have questions' },
  { id: 'no', label: 'No, not for me', subject: 'Abrish AI: no, not for me' },
];
