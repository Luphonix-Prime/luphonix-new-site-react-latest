
// Mock data for the application
export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    icon: "fas fa-code",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Security Implementation"]
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    icon: "fas fa-mobile-alt",
    features: ["Cross-platform Development", "Native Performance", "App Store Optimization", "Push Notifications"]
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centered design solutions that create engaging and intuitive digital experiences.",
    icon: "fas fa-paint-brush",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment integration and inventory management.",
    icon: "fas fa-shopping-cart",
    features: ["Payment Gateway Integration", "Inventory Management", "Order Tracking", "Analytics"]
  },
  {
    id: 5,
    title: "AI/ML Development",
    description: "Artificial intelligence and machine learning solutions to automate and optimize processes.",
    icon: "fas fa-brain",
    features: ["Data Analysis", "Predictive Modeling", "Natural Language Processing", "Computer Vision"]
  },
  {
    id: 6,
    title: "Blockchain Development",
    description: "Decentralized applications and smart contracts on various blockchain platforms.",
    icon: "fas fa-link",
    features: ["Smart Contracts", "DApps", "Token Development", "Web3 Integration"]
  },
  {
    id: 7,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern applications.",
    icon: "fas fa-cloud",
    features: ["Cloud Migration", "Auto Scaling", "Load Balancing", "Monitoring"]
  },
  {
    id: 8,
    title: "DevOps & CI/CD",
    description: "Streamlined development workflows with automated testing and deployment.",
    icon: "fas fa-cogs",
    features: ["Automated Testing", "Continuous Deployment", "Infrastructure as Code", "Monitoring"]
  }
];

export const projects = [
  {
    id: 1,
    title: "EcoTech Marketplace",
    short_description: "A sustainable technology marketplace connecting eco-friendly product vendors with conscious consumers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    category: "E-commerce",
    featured: true,
    project_url: "https://ecotech-marketplace.demo",
    github_url: "https://github.com/luphonix/ecotech-marketplace"
  },
  {
    id: 2,
    title: "FinanceAI Dashboard",
    short_description: "An AI-powered financial analytics dashboard providing real-time insights and predictions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
    category: "AI/ML",
    featured: true,
    project_url: "https://financeai-dashboard.demo",
    github_url: "https://github.com/luphonix/financeai-dashboard"
  },
  {
    id: 3,
    title: "HealthTrack Mobile App",
    short_description: "A comprehensive health tracking application with wearable device integration.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Firebase", "HealthKit", "Google Fit"],
    category: "Mobile App",
    featured: true,
    project_url: "https://healthtrack-app.demo"
  },
  {
    id: 4,
    title: "CryptoVault DeFi Platform",
    short_description: "A decentralized finance platform for secure cryptocurrency staking and yield farming.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Solidity", "Web3.js", "React", "MetaMask", "Ethereum"],
    category: "Blockchain",
    featured: false,
    project_url: "https://cryptovault-defi.demo",
    github_url: "https://github.com/luphonix/cryptovault-defi"
  },
  {
    id: 5,
    title: "SmartCity IoT Dashboard",
    short_description: "An IoT monitoring dashboard for smart city infrastructure management.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "Node.js", "InfluxDB", "Grafana", "MQTT"],
    category: "Web Development",
    featured: false,
    project_url: "https://smartcity-iot.demo"
  },
  {
    id: 6,
    title: "EduLearn LMS Platform",
    short_description: "A comprehensive learning management system with interactive course features.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Django", "React", "PostgreSQL", "Redis", "WebRTC"],
    category: "Web Development",
    featured: false,
    project_url: "https://edulearn-lms.demo",
    github_url: "https://github.com/luphonix/edulearn-lms"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    slug: "future-web-development-trends-2024",
    excerpt: "Explore the cutting-edge technologies and methodologies shaping the future of web development, from AI integration to progressive web apps.",
    content: "The web development landscape continues to evolve at an unprecedented pace...",
    featured_image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Web Development", "Technology", "AI", "PWA"],
    author: "Sarah Johnson",
    created_at: "2024-01-15T10:00:00Z",
    read_time: 8
  },
  {
    id: 2,
    title: "Building Scalable Microservices with Node.js and Docker",
    slug: "scalable-microservices-nodejs-docker",
    excerpt: "Learn how to architect and deploy microservices that can handle millions of requests while maintaining performance and reliability.",
    content: "Microservices architecture has become the gold standard for building scalable applications...",
    featured_image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Node.js", "Docker", "Microservices", "DevOps"],
    author: "Michael Chen",
    created_at: "2024-01-10T14:30:00Z",
    read_time: 12
  },
  {
    id: 3,
    title: "AI-Powered UX: How Machine Learning is Transforming Design",
    slug: "ai-powered-ux-machine-learning-design",
    excerpt: "Discover how artificial intelligence is revolutionizing user experience design through personalization and predictive interfaces.",
    content: "The intersection of AI and UX design is creating unprecedented opportunities...",
    featured_image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["AI", "UX Design", "Machine Learning", "Personalization"],
    author: "Emily Rodriguez",
    created_at: "2024-01-05T09:15:00Z",
    read_time: 6
  },
  {
    id: 4,
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    slug: "blockchain-real-world-applications",
    excerpt: "Explore practical blockchain implementations beyond digital currencies, including supply chain, healthcare, and identity management.",
    content: "While cryptocurrency brought blockchain into the mainstream, its applications extend far beyond...",
    featured_image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Blockchain", "Supply Chain", "Healthcare", "Identity"],
    author: "David Park",
    created_at: "2024-01-01T16:45:00Z",
    read_time: 10
  },
  {
    id: 5,
    title: "Mobile-First Development: Best Practices for 2024",
    slug: "mobile-first-development-best-practices-2024",
    excerpt: "Master the art of mobile-first design and development with these proven strategies for creating exceptional mobile experiences.",
    content: "With mobile traffic now accounting for over 60% of web usage, mobile-first development isn't just a trend...",
    featured_image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Mobile Development", "Responsive Design", "Performance", "UX"],
    author: "Lisa Thompson",
    created_at: "2023-12-28T11:20:00Z",
    read_time: 7
  },
  {
    id: 6,
    title: "Cybersecurity in the Age of Cloud Computing",
    slug: "cybersecurity-cloud-computing",
    excerpt: "Essential security practices and strategies for protecting cloud-based applications and data in an increasingly connected world.",
    content: "As businesses migrate to the cloud, cybersecurity challenges evolve and multiply...",
    featured_image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Cybersecurity", "Cloud Computing", "Data Protection", "Security"],
    author: "Alex Kumar",
    created_at: "2023-12-25T13:10:00Z",
    read_time: 9
  }
];

export default {
  services,
  projects,
  blogPosts
};
