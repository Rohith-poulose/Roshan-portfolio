import { Project, Service, Metric, Inquiry } from './types';

// CENTRALIZED SITE CONTENT
// Edit this section to update your details across the entire website
export const SITE_CONTENT = {
  name: "ROSHAN",
  brandName: "ROSHAN", // Used in Navbar
  role: "Editor & Strategist",
  email: "hello@roshan.com",
  phone: "+1 (555) 123-4567",
  location: "Los Angeles, CA",
  socials: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    vimeo: "https://vimeo.com"
  },
  hero: {
    titlePrefix: "Visuals that ",
    titleHighlight: "resonate.",
    subtitle: "Crafting cinematic narratives and digital strategies for forward-thinking brands."
  },
  about: {
    title: "The Story.",
    bioParagraphs: [
      "I'm Roshan, a visual storyteller and digital strategist based in Los Angeles. My journey began with a simple camera and a curiosity for how images can evoke emotion. Over the last decade, that curiosity has evolved into a career defined by cinematic precision.",
      "I don't just edit videos; I craft narratives. Whether it's a high-energy commercial or a slow-burn documentary, my approach is always rooted in the \"why\" behind the shot.",
      "Beyond the timeline, I help brands amplify their voice. Understanding the algorithm is just as important as understanding the lens. I bridge that gap."
    ],
    stats: {
      yearsExp: "10+",
      projects: "150+",
      awards: "3",
      turnaround: "Fast"
    }
  },
  contact: {
    title: "Let's talk.",
    subtitle: "Have a project in mind? I'd love to hear about it. Fill out the form or reach out directly."
  }
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Nights',
    category: 'Commercial',
    client: 'Nike',
    thumbnailUrl: 'https://picsum.photos/1920/1080?random=1',
    videoUrl: 'https://vimeo.com/123456789',
    description: 'A high-energy commercial capturing the essence of urban nightlife.',
    featured: true,
    year: 2024
  },
  {
    id: '2',
    title: 'Silent Echoes',
    category: 'Music Video',
    client: 'The Weekend',
    thumbnailUrl: 'https://picsum.photos/1920/1080?random=2',
    videoUrl: 'https://vimeo.com/987654321',
    description: 'Cinematic visual storytelling for the latest chart-topping hit.',
    featured: true,
    year: 2023
  },
  {
    id: '3',
    title: 'Eco Future',
    category: 'Documentary',
    client: 'National Geographic',
    thumbnailUrl: 'https://picsum.photos/1920/1080?random=3',
    videoUrl: 'https://vimeo.com/456789123',
    description: 'A deep dive into sustainable technologies shaping our world.',
    featured: false,
    year: 2024
  },
  {
    id: '4',
    title: 'Brand Growth',
    category: 'Social Media',
    client: 'TechStart',
    thumbnailUrl: 'https://picsum.photos/1920/1080?random=4',
    videoUrl: 'https://vimeo.com/789123456',
    description: 'Viral short-form content designed for maximum engagement.',
    featured: false,
    year: 2024
  }
];

export const MOCK_SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Cinematic Video Editing',
    description: 'Turning raw footage into masterpiece narratives with premium color grading and sound design.',
    icon: 'film',
    features: ['4K Workflow', 'Color Grading', 'Sound Design', 'VFX']
  },
  {
    id: 's2',
    title: 'Digital Strategy',
    description: 'Data-driven marketing campaigns to amplify your brand voice and reach the right audience.',
    icon: 'trending-up',
    features: ['Market Analysis', 'Campaign Management', 'SEO', 'Analytics']
  }
];

export const MOCK_METRICS: Metric[] = [
  { id: 'm1', label: 'Projects Completed', value: '150', suffix: '+' },
  { id: 'm2', label: 'Client Satisfaction', value: '100', suffix: '%' },
  { id: 'm3', label: 'Views Generated', value: '50', suffix: 'M+' },
];

export const MOCK_INQUIRIES: Inquiry[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@fashionbrand.com',
    service: 'Video Editing',
    message: 'We are launching a new summer collection and need a 30s commercial spot.',
    status: 'New',
    date: '2024-03-15'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'mike@techstartup.io',
    service: 'Digital Marketing',
    message: 'Need help scaling our paid social campaigns for Q2.',
    status: 'Read',
    date: '2024-03-12'
  },
  {
    id: '3',
    name: 'Sarah Connor',
    email: 'sarah@indiefilms.net',
    service: 'Documentary',
    message: 'Looking for a colorist for my upcoming short film.',
    status: 'Replied',
    date: '2024-03-10'
  }
];
