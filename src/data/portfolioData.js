export const PROFILE = {
  name: 'Niranjan S Nayak',
  title: 'AI Engineer',
  roles: [
    'AI Engineer',
    'LLM & Agent Developer',
    'Full-Stack Developer',
    'Python & PyTorch Specialist'
  ],
  email: 'niranjannayak1209@gmail.com',
  phone: '+91 6363526914',
  location: 'Karnataka, India',
  status: 'Open to AI Engineering Opportunities',
  summary:
    'AI Engineer with hands-on experience in AI agent tools, provider integrations, API workflows, and Transformer-based Medical SLM development. Skilled in Python, PyTorch, NumPy, LangChain, RAG, REST APIs, and full-stack application development.',
  links: {
    linkedin: 'https://www.linkedin.com/in/niranjan-nayak-099b68262/',
    github: 'https://github.com/NiranjanNayak2004',
    leetcode: 'https://leetcode.com/u/Niranjan_S_Nayak_/',
    resume: '/resume.pdf'
  }
};

export const STATS = [
  {
    label: 'Medical SLM Intent Accuracy',
    value: 81.48,
    suffix: '%',
    decimals: 2,
    description: 'Trained across 5 medical intents'
  },
  {
    label: 'B.E. Degree CGPA',
    value: 8.27,
    suffix: '',
    decimals: 2,
    description: 'Computer Science & Design'
  },
  {
    label: 'Class XII (Science)',
    value: 87.13,
    suffix: '%',
    decimals: 2,
    description: 'Himalaya PU College'
  },
  {
    label: 'Industry Internships',
    value: 2,
    suffix: '',
    decimals: 0,
    description: 'AI Engineering & BigQuery'
  },
  {
    label: 'Flagship Projects',
    value: 4,
    suffix: '+',
    decimals: 0,
    description: 'End-to-End AI & Web Apps'
  }
];

export const SKILL_CATEGORIES = [
  {
    category: 'Languages',
    icon: 'FaCode',
    accent: 'cyan',
    skills: ['Python', 'JavaScript', 'SQL']
  },
  {
    category: 'AI / ML',
    icon: 'FaBrain',
    accent: 'purple',
    skills: [
      'PyTorch',
      'NumPy',
      'Transformers',
      'Intent Classification',
      'LangChain',
      'RAG',
      'Prompt Engineering'
    ]
  },
  {
    category: 'Backend',
    icon: 'FaDatabase',
    accent: 'emerald',
    skills: ['Flask', 'REST APIs', 'SQLAlchemy', 'MySQL', 'JWT']
  },
  {
    category: 'Frontend',
    icon: 'FaReact',
    accent: 'blue',
    skills: ['React.js', 'HTML', 'CSS']
  },
  {
    category: 'Tools & Cloud',
    icon: 'FaTools',
    accent: 'amber',
    skills: [
      'ART Platform',
      'Git',
      'GitHub',
      'Postman',
      'VS Code',
      'Figma',
      'Google Cloud Run'
    ]
  }
];

export const MARQUEE_TECH = [
  'PyTorch',
  'Python',
  'Transformers',
  'LangChain',
  'RAG',
  'React.js',
  'Flask',
  'MySQL',
  'Google BigQuery',
  'Google Cloud Run',
  'NumPy',
  'REST APIs',
  'ART Platform',
  'Postman',
  'Git'
];

export const EXPERIENCES = [
  {
    role: 'AI Engineer Intern',
    company: 'Aiotrix Private Limited',
    companyUrl: 'https://www.aiotrix.com/',
    period: '2026 – Present',
    badge: 'Current Role',
    highlights: 'AI Agents • Tool Development • API Integrations',
    points: [
      'Develop AI agent tools and provider integrations on the ART platform to connect agents with external APIs and services.',
      'Configure tool parameters, HTTP requests, headers, response handling, validation, and output schemas.',
      'Test API integrations, troubleshoot errors, and develop automated workflows for business use cases.',
      'Develop a Medical SLM prototype using PyTorch and NumPy, exploring intent classification, subject extraction, and medical fact and temporal relationship identification.'
    ],
    skills: ['ART Platform', 'PyTorch', 'NumPy', 'AI Agents', 'API Workflows', 'Python']
  },
  {
    role: 'BigQuery Database Intern',
    company: 'Sumana Embedded Technologies',
    location: 'Bangalore',
    companyUrl: 'https://www.sumanaetech.com/',
    period: 'May 18, 2025 – Nov 28, 2025',
    badge: 'Completed',
    highlights: 'Google BigQuery • SQL • IoT Data',
    points: [
      'Worked on structured data analysis using Google BigQuery for an IoT data ingestion use case.',
      'Developed SQL queries involving joins, filtering, grouping, and aggregations.',
      'Performed data cleaning, validation, and consistency checks before reporting.',
      'Optimized query performance by minimizing scanned data and selecting only required columns.',
      'Generated query-based insights used for internal monitoring and reporting.'
    ],
    skills: ['Google BigQuery', 'SQL', 'Data Cleaning', 'IoT Data', 'Performance Optimization']
  }
];

export const PROJECTS = [
  {
    id: 'medical-slm',
    title: 'Medical Small Language Model (SLM)',
    subtitle: 'Transformer-Based Medical NLP & Intent Classification',
    featured: true,
    tags: ['Python', 'PyTorch', 'NumPy', 'Transformers', 'Intent Classification', 'Medical NLP'],
    stat: { label: 'Intent Accuracy', value: '81.48%' },
    bullets: [
      'Trained an intent classifier for five medical intents, achieving 81.48% training accuracy on 54 examples.',
      'Implemented pronoun-based subject extraction and explored medical fact extraction and temporal relationships.'
    ],
    github: 'https://github.com/NiranjanNayak2004',
    live: null
  },
  {
    id: 'prepforge-ai',
    title: 'PrepForge AI',
    subtitle: 'Career Preparation & Resume Intelligence Platform',
    featured: false,
    tags: ['Python', 'Flask', 'React.js', 'MySQL', 'LangChain', 'JWT', 'SQLAlchemy'],
    stat: { label: 'Architecture', value: 'Full-Stack RAG' },
    bullets: [
      'Built a full-stack platform for resume PDF processing, skill extraction, and resume-job matching with recommendations.',
      'Implemented JWT authentication, bcrypt password hashing, email OTP verification, and password reset.'
    ],
    github: 'https://github.com/NiranjanNayak2004/PrepForgeAI',
    live: null
  },
  {
    id: 'study-material-platform',
    title: 'Study Material Distribution Platform',
    subtitle: 'Academic Resource Management & Cloud Delivery System',
    period: '2025',
    featured: false,
    tags: ['React.js', 'Flask', 'MySQL', 'Google Drive API', 'Google Cloud Run', 'Firebase'],
    stat: { label: 'Deployment', value: 'GCP Cloud Run' },
    bullets: [
      'Designed and implemented a full-stack platform to manage and distribute academic study materials.',
      'Developed secure RESTful APIs using Flask for authentication, authorization, and content access.',
      'Designed normalized MySQL schemas for users, roles, subjects, semesters, and documents.',
      'Implemented role-based access control for secure separation between admin and student users.',
      'Integrated Google Drive API for document storage and metadata management.',
      'Tested APIs with Postman; deployed the backend on Google Cloud Run and the frontend on Firebase Hosting.'
    ],
    github: 'https://github.com/NiranjanNayak2004',
    live: null
  },
  {
    id: 'weather-app',
    title: 'Weather Forecasting Website',
    subtitle: 'Real-Time Dynamic Weather Visualization Engine',
    period: '2024',
    featured: false,
    tags: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
    stat: { label: 'Integration', value: 'OpenWeather API' },
    bullets: [
      'Responsive client-side web app for real-time weather visualization, using live OpenWeather API data based on user-entered city names.',
      'Implemented input validation for invalid locations and error handling for failed API responses and network issues.',
      'Manually tested UI behavior across screen sizes and browsers; optimized API usage and UI updates for performance.'
    ],
    github: 'https://github.com/NiranjanNayak2004',
    live: null
  }
];

export const EDUCATION = [
  {
    degree: 'B.E. in Computer Science and Design',
    institution: 'Canara Engineering College',
    location: 'Mangalore, Karnataka',
    period: '2022 – 2026',
    score: 'CGPA: 8.27',
    scoreLabel: 'CGPA',
    scoreValue: '8.27',
    description:
      'Rigorous curriculum focused on Data Structures, Algorithms, Artificial Intelligence, Database Management, Software Engineering, and Modern Computing Architectures.'
  },
  {
    degree: 'Class XI–XII (Science)',
    institution: 'Himalaya PU College',
    location: 'Ankola, Karnataka',
    period: '2020 – 2022',
    score: '87.13%',
    scoreLabel: 'Percentage',
    scoreValue: '87.13%',
    description:
      'Strong analytical foundation in Physics, Chemistry, Mathematics, and Computer Science.'
  }
];

export const CERTIFICATIONS = [
  {
    title: 'Python Programming',
    issuer: 'Coursera',
    tags: ['Python', 'Core Algorithms', 'Object-Oriented Programming']
  },
  {
    title: 'Programming with JavaScript',
    issuer: 'Meta (Coursera)',
    tags: ['JavaScript', 'DOM Manipulation', 'ES6+', 'Web Development']
  }
];
