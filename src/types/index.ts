export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'photo' | 'video' | 'combined';
  date: string;
  featured?: boolean;
  fullDescription?: string;
  additionalImages?: string[];
  videoUrl?: string;
  client?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  author: string;
  publishDate: string;
  tags: string[];
}