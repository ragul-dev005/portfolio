export const profile = {
  name: 'Ragul R',
  role: 'Aspiring Web Developer',
  email: 'ragulneon@gmail.com',
  phone: '+91 9342769810',
  location: 'Nagercoil, Tamil Nadu',
  github: 'https://github.com/ragul-dev005',
  linkedin: 'https://www.linkedin.com/in/ragul-dev/',
};

export const heroRoles = ['Web Developer', 'React Developer', 'Frontend Engineer'];

export const aboutSummary =
  'Aspiring Web Developer with a strong interest in Cloud Computing and Linux. ECE graduate with hands-on internship experience in embedded systems and software development, now focused on building scalable, user-friendly web applications using React, JavaScript, and MongoDB.';

export const aboutDetails = [
  { label: 'Email', value: profile.email },
  { label: 'Phone', value: profile.phone },
  { label: 'Location', value: profile.location },
  { label: 'GitHub', value: profile.github },
  { label: 'LinkedIn', value: profile.linkedin },
];

export const skills = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'React.js'],
  },
  {
    category: 'Languages',
    items: ['JavaScript', 'Java (learning)'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Eclipse IDE'],
  },
  {
    category: 'OS / Systems',
    items: ['Linux (Basic)'],
  },
  {
    category: 'Soft Skills',
    items: ['Problem-Solving', 'Analytical Thinking', 'Adaptability'],
  },
];

export const experience = [
  {
    title: 'Software Developer Intern',
    company: 'Top Tech Developers (Remote)',
    duration: 'June 2025',
    bullets: [
      'Contributed to real-world software projects improving problem-solving skills',
      'Strengthened coding abilities in Java and modern web technologies',
      'Collaborated on innovative solutions for real-world problem statements',
    ],
  },
  {
    title: 'Embedded Systems & Sensor Interfacing Intern',
    company: 'Keltron Knowledge Services Group, Kerala',
    duration: 'October 2024',
    bullets: [
      'Developed automation systems using IR sensors, relays, and microcontrollers',
      'Interfaced input/output peripherals with Arduino IDE and Wokwi Simulator',
      'Built sensor-based decision systems with practical automation applications',
    ],
  },
];

export const projects = [
  {
    title: 'WeatherHub',
    description:
      'A real-time weather app that shows current conditions and forecasts for any location.',
    stack: ["React", "JavaScript", "OpenWeather API"],
    status: 'live',
    liveurl: 'https://weatherhub-dev.vercel.app/',
    github: 'https://github.com/ragul-dev005/weatherhub.git',
    
  },
  {
    title: 'Cloud Tools Dashboard',
    description:
      'Designing a lightweight dashboard for cloud-focused tools with responsive charts, user controls, and modular components.',
    stack: ['React.js', 'HTML5', 'CSS3'],
    status: 'In Progress',
    github: '#',
    demo: '#',
  },
  {
    title: 'Sensor Automation Prototype',
    description:
      'Creating a visual interface to support sensor automation workflows, integrating hardware-inspired design with web interaction.',
    stack: ['JavaScript', 'React.js', 'CSS'],
    status: 'Coming Soon',
    github: '#',
    demo: '#',
  },
];

export const certifications = [
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'TATA Forage',
    date: 'July 2025',
  },
  {
    title: 'Software Development Internship Certification',
    issuer: 'Top Tech Developers',
    date: 'June 2025',
  },
  {
    title: 'Embedded Systems & Sensor Interfacing Internship',
    issuer: 'Keltron',
    date: 'October 2024',
  },
];
