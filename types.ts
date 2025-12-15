export interface Project {
  id: string;
  title: string;
  category: 'Commercial' | 'Music Video' | 'Documentary' | 'Social Media';
  client: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
  featured: boolean;
  year: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Metric {
  id: string;
  label: string;
  value: string;
  suffix?: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  status: 'New' | 'Read' | 'Replied';
  date: string;
}

export interface AdminState {
  isAuthenticated: boolean;
  user: { email: string } | null;
}
