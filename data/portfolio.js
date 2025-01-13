const header = {
  // the `wordmark` property is optional - it can be left empty or deleted
  // if so, it will be overwritten by your full name, or a default wordmark if the full name is invalid
  wordmark: '',
}

const about = {
  // each of these properties is optional - they can be left empty or deleted
  // the first element in the `names` array will be treated as your first name, and all the elements combined will be treated as your full name
  // each element in the `description` array will be treated as a separate paragraph
  names: ['Hamayoun', 'Bhatti'],
  greetingEmoji: '👋',
  role: 'Software Engineer',
  company: 'Xconsol',
  description: [
    "I'm Hamayoun Bhatti, a passionate Web Developer. With 3+ Years Of experience in this field, I'm driven by a relentless pursuit of excellence. I thrive on challenges and am inspired by the potential to solve problems, innovate, and create meaningful solutions, and my work reflects my dedication to contribute to sustainable design solutions that benefit society. Explore my portfolio to see how I bring creativity and expertise to every project. Let's connect and collaborate to make great things happen! ",
  ],
  resume: 'resumes/hamayounbhatti.pdf',
  social: {
    github: 'https://github.com/HamayounBhatti',
    linkedin: 'https://www.linkedin.com/in/hamayoun-bhatti-271516166/',
  },
}

const projects = [
  // projects can be added and removed
  // if the array is left empty, the "Projects" section won't render
  // each element in each `description` array will be treated as a separate paragraph
  {
    thumbnail: 'images/jobskills.png',
    name: 'Job Skills',
    description: [
      'JobSkills is a Laravel app where employers manage jobs, hire or fire candidates, schedule meetings, and give feedback, while candidates create profiles, search, and apply for jobs.'
    ],
    stack: ['PHP', 'Laravel', 'Javascript', 'jQuery'],
    livePreview: 'https://www.jobskills.sa',
  },
  {
    thumbnail: 'images/portfolio-1.png',
    name: 'My First Portfolio Website',
    description: [
      "Hamayoun Bhatti's portfolio highlights his expertise as a Junior Software Engineer specializing in Laravel, showcasing projects, professional experience, and personal interests in an engaging, user-friendly design.",
    ],
    stack: ['PHP', 'Laravel', 'Javascript', 'jQuery'],
    livePreview: 'http://hamayounbhatti.online/?i=2',
  },
  // {
  //   thumbnail: 'images/placeholder-image.jpeg',
  //   name: 'Project 3',
  //   description: [
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   ],
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://example.com',
  // },
  // {
  //   thumbnail: 'images/placeholder-image.jpeg',
  //   name: 'Project 4',
  //   description: [
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   ],
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://example.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if the array is left empty, the "Skills" section won't render
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Next.js',
  'Laravel',
  'PHP',
  'Material UI',
  'Git',
  'RestApi',
  'JQuery',
  'MySql',
  'Bootstrap',
]

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  email: 'hamayounzaheer786@gmail.com',
}

export { header, about, projects, skills, contact }
