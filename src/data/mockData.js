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

export const slides = [
  {
    src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "React.js",
    description: "A JavaScript library for building dynamic, interactive user interfaces with component-based architecture and virtual DOM optimization.",
    button: "Master React",
    features: [
      "Virtual DOM for lightning-fast performance",
      "Component-based modular architecture",
      "Massive ecosystem & active community",
      "JSX for intuitive development",
      "State management with hooks"
    ],
    category: "Frontend",
    difficulty: "Intermediate",
    popularity: 95,
    tips: [
      {
        title: "Performance Optimization",
        description: "Use React.memo() to prevent unnecessary re-renders of components when props haven't changed. Combine with useMemo and useCallback for optimal performance.",
        example: "const ExpensiveComponent = React.memo(({ data }) => { return <div>{processData(data)}</div>; });"
      },
      {
        title: "State Management Best Practices",
        description: "Use the useState hook for local state and useContext for global state. For complex applications, consider Redux Toolkit or Zustand.",
        example: "const [count, setCount] = useState(0); // Local state\nconst theme = useContext(ThemeContext); // Global state"
      },
      {
        title: "Code Splitting & Lazy Loading",
        description: "Implement React.lazy() and Suspense to split your code and load components only when needed, reducing initial bundle size.",
        example: "const LazyComponent = React.lazy(() => import('./LazyComponent'));\n<Suspense fallback={<Loading />}><LazyComponent /></Suspense>"
      },
      {
        title: "Custom Hooks Pattern",
        description: "Extract reusable logic into custom hooks to keep components clean and promote code reusability across your application.",
        example: "const useCounter = (initial = 0) => { const [count, setCount] = useState(initial); return [count, () => setCount(c => c + 1)]; };"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine, enabling server-side development with unparalleled performance and scalability.",
    button: "Explore Node",
    features: [
      "Non-blocking I/O for high performance",
      "NPM package ecosystem",
      "Cross-platform development",
      "Event-driven architecture",
      "Microservices ready"
    ],
    category: "Backend",
    difficulty: "Intermediate",
    popularity: 87,
    tips: [
      {
        title: "Asynchronous Programming Mastery",
        description: "Master async/await patterns and Promises to handle asynchronous operations efficiently. Always handle errors properly.",
        example: "try { const data = await fetchData(); return data; } catch (error) { console.error('Error:', error); throw error; }"
      },
      {
        title: "Environment Configuration",
        description: "Use environment variables for configuration and never commit sensitive data. Use packages like dotenv for local development.",
        example: "require('dotenv').config(); const PORT = process.env.PORT || 3000; const DB_URL = process.env.DATABASE_URL;"
      },
      {
        title: "Middleware Implementation",
        description: "Create reusable middleware for common tasks like authentication, logging, and error handling in Express.js applications.",
        example: "const authMiddleware = (req, res, next) => { const token = req.headers.authorization; if (!token) return res.status(401).send('Unauthorized'); next(); };"
      },
      {
        title: "Clustering for Performance",
        description: "Use the cluster module to take advantage of multi-core systems and improve application performance under load.",
        example: "const cluster = require('cluster'); if (cluster.isMaster) { for (let i = 0; i < os.cpus().length; i++) cluster.fork(); } else { app.listen(PORT); }"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Python",
    description: "Versatile programming language perfect for web development, data science, AI/ML, and automation with clean, readable syntax.",
    button: "Learn Python",
    features: [
      "Simple, readable syntax",
      "Extensive standard library",
      "AI & Machine Learning ready",
      "Cross-platform compatibility",
      "Rapid prototyping capabilities"
    ],
    category: "Language",
    difficulty: "Beginner",
    popularity: 92,
    tips: [
      {
        title: "Pythonic Code Patterns",
        description: "Use list comprehensions, f-strings, and context managers to write more readable and efficient Python code.",
        example: "squares = [x**2 for x in range(10)]\nname = 'Alice'\ngreeting = f'Hello, {name}!'\nwith open('file.txt', 'r') as f: content = f.read()"
      },
      {
        title: "Virtual Environments",
        description: "Always use virtual environments to isolate project dependencies and avoid conflicts between different projects.",
        example: "python -m venv myenv\nsource myenv/bin/activate  # On Windows: myenv\\Scripts\\activate\npip install requirements.txt"
      },
      {
        title: "Type Hints & Documentation",
        description: "Use type hints to improve code readability and catch errors early. Document functions with docstrings.",
        example: "def calculate_area(radius: float) -> float:\n    '''Calculate the area of a circle.'''\n    return 3.14159 * radius ** 2"
      },
      {
        title: "Exception Handling",
        description: "Use specific exception types and proper error handling to make your code more robust and debuggable.",
        example: "try:\n    result = risky_operation()\nexcept ValueError as e:\n    logger.error(f'Invalid value: {e}')\nexcept Exception as e:\n    logger.error(f'Unexpected error: {e}')"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "MongoDB",
    description: "NoSQL document database that provides high performance, high availability, and easy scalability for modern applications.",
    button: "Dive into MongoDB",
    features: [
      "Flexible document-based storage",
      "Horizontal scaling capabilities",
      "Rich query language",
      "Built-in replication",
      "Cloud-native architecture"
    ],
    category: "Database",
    difficulty: "Intermediate",
    popularity: 78,
    tips: [
      {
        title: "Efficient Indexing Strategy",
        description: "Create compound indexes on frequently queried fields and use explain() to analyze query performance.",
        example: "db.users.createIndex({ 'email': 1, 'status': 1 })\ndb.users.find({ email: 'user@example.com' }).explain('executionStats')"
      },
      {
        title: "Aggregation Pipeline Power",
        description: "Use the aggregation pipeline for complex data transformations and analytics instead of multiple queries.",
        example: "db.orders.aggregate([\n  { $match: { status: 'completed' } },\n  { $group: { _id: '$userId', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } }\n])"
      },
      {
        title: "Schema Design Patterns",
        description: "Design your schema based on query patterns. Use embedding for one-to-few relationships and referencing for one-to-many.",
        example: "// Embedding\n{ user: 'john', addresses: [{ street: '123 Main St', city: 'NYC' }] }\n// Referencing\n{ user: 'john', orderIds: [ObjectId('...'), ObjectId('...')] }"
      },
      {
        title: "Connection Pool Optimization",
        description: "Configure connection pools properly and use connection limits to optimize database performance.",
        example: "const client = new MongoClient(uri, {\n  maxPoolSize: 10,\n  serverSelectionTimeoutMS: 5000,\n  socketTimeoutMS: 45000\n});"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Docker",
    description: "Containerization platform that packages applications with dependencies, ensuring consistent deployment across environments.",
    button: "Containerize Now",
    features: [
      "Application containerization",
      "Environment consistency",
      "Microservices architecture",
      "DevOps integration",
      "Resource optimization"
    ],
    category: "DevOps",
    difficulty: "Advanced",
    popularity: 85,
    tips: [
      {
        title: "Multi-Stage Builds",
        description: "Use multi-stage builds to create smaller, more secure production images by separating build and runtime environments.",
        example: "FROM node:16 AS builder\nCOPY . .\nRUN npm ci && npm run build\n\nFROM node:16-alpine AS production\nCOPY --from=builder /app/dist /app\nCMD ['node', 'server.js']"
      },
      {
        title: "Layer Optimization",
        description: "Order Dockerfile instructions to maximize layer caching. Put frequently changing instructions at the bottom.",
        example: "COPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nEXPOSE 3000\nCMD ['npm', 'start']"
      },
      {
        title: "Health Checks & Monitoring",
        description: "Implement health checks in your containers to enable proper orchestration and monitoring.",
        example: "HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\\n  CMD curl -f http://localhost:3000/health || exit 1"
      },
      {
        title: "Security Best Practices",
        description: "Run containers as non-root users, scan for vulnerabilities, and keep base images updated.",
        example: "RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001\nUSER nextjs\nCOPY --from=builder --chown=nextjs:nodejs /app ./\nCMD ['node', 'server.js']"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "AWS",
    description: "Comprehensive cloud computing platform offering scalable infrastructure, storage, databases, and AI services worldwide.",
    button: "Scale with AWS",
    features: [
      "Global cloud infrastructure",
      "200+ services available",
      "Auto-scaling capabilities",
      "Enterprise security",
      "Pay-as-you-use pricing"
    ],
    category: "Cloud",
    difficulty: "Advanced",
    popularity: 89,
    tips: [
      {
        title: "IAM Security Best Practices",
        description: "Use IAM roles instead of access keys, implement least privilege principle, and enable MFA for all users.",
        example: "{\n  'Version': '2012-10-17',\n  'Statement': [{\n    'Effect': 'Allow',\n    'Action': ['s3:GetObject'],\n    'Resource': 'arn:aws:s3:::my-bucket/*'\n  }]\n}"
      },
      {
        title: "Cost Optimization",
        description: "Use Reserved Instances for predictable workloads, implement auto-scaling, and monitor costs with AWS Cost Explorer.",
        example: "aws configure set aws_access_key_id YOUR_ACCESS_KEY\naws ec2 describe-reserved-instances\naws cloudwatch put-metric-alarm --alarm-name cpu-mon"
      },
      {
        title: "Serverless Architecture",
        description: "Use AWS Lambda for event-driven computing and API Gateway for serverless APIs to reduce operational overhead.",
        example: "exports.handler = async (event) => {\n  const response = {\n    statusCode: 200,\n    body: JSON.stringify('Hello from Lambda!')\n  };\n  return response;\n};"
      },
      {
        title: "Monitoring & Logging",
        description: "Use CloudWatch for monitoring, CloudTrail for API logging, and set up alerts for critical metrics.",
        example: "aws logs create-log-group --log-group-name /aws/lambda/my-function\naws cloudwatch put-metric-alarm --alarm-name high-cpu --metric-name CPUUtilization"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Next.js",
    description: "React framework with server-side rendering, static generation, and built-in optimizations for production-ready applications.",
    button: "Build with Next.js",
    features: [
      "Server-side rendering & static generation",
      "Built-in performance optimizations",
      "API routes for full-stack development",
      "Automatic code splitting",
      "Image optimization out of the box"
    ],
    category: "Frontend",
    difficulty: "Advanced",
    popularity: 91,
    tips: [
      {
        title: "Static Generation vs SSR",
        description: "Use getStaticProps for static generation when possible, and getServerSideProps only when you need real-time data.",
        example: "export async function getStaticProps() {\n  const data = await fetchData();\n  return { props: { data }, revalidate: 3600 };\n}"
      },
      {
        title: "Image Optimization",
        description: "Use Next.js Image component for automatic optimization, lazy loading, and responsive images.",
        example: "import Image from 'next/image'\n\n<Image\n  src='/profile.jpg'\n  width={500}\n  height={300}\n  alt='Profile'\n  priority\n/>"
      },
      {
        title: "API Routes Best Practices",
        description: "Create API routes for backend functionality, implement proper error handling and middleware.",
        example: "export default function handler(req, res) {\n  if (req.method === 'POST') {\n    const { data } = req.body;\n    res.status(200).json({ success: true, data });\n  } else {\n    res.setHeader('Allow', ['POST']);\n    res.status(405).end();\n  }\n}"
      },
      {
        title: "Dynamic Imports & Code Splitting",
        description: "Use dynamic imports to split code and load components only when needed, improving initial page load times.",
        example: "const DynamicComponent = dynamic(() => import('../components/Heavy'), {\n  loading: () => <p>Loading...</p>,\n  ssr: false\n});"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "TypeScript",
    description: "Strongly typed superset of JavaScript that compiles to plain JavaScript, providing better developer experience and code quality.",
    button: "Type with TypeScript",
    features: [
      "Static type checking",
      "Enhanced IDE support",
      "Better code refactoring",
      "Compile-time error detection",
      "Modern JavaScript features"
    ],
    category: "Language",
    difficulty: "Intermediate",
    popularity: 88,
    tips: [
      {
        title: "Advanced Type Definitions",
        description: "Use union types, intersection types, and generics to create flexible and reusable type definitions.",
        example: "type Status = 'loading' | 'success' | 'error';\ntype ApiResponse<T> = { data: T; status: Status; };\nfunction fetchData<T>(url: string): Promise<ApiResponse<T>> { }"
      },
      {
        title: "Interface vs Type Aliases",
        description: "Use interfaces for object shapes that might be extended, and type aliases for unions and computed types.",
        example: "interface User {\n  id: number;\n  name: string;\n}\n\ninterface AdminUser extends User {\n  permissions: string[];\n}\n\ntype UserRole = 'admin' | 'user' | 'guest';"
      },
      {
        title: "Utility Types Mastery",
        description: "Leverage built-in utility types like Partial, Required, Pick, and Omit to transform existing types.",
        example: "type UserUpdate = Partial<User>;\ntype UserCreation = Omit<User, 'id'>;\ntype UserInfo = Pick<User, 'name' | 'email'>;"
      },
      {
        title: "Type Guards & Assertions",
        description: "Use type guards to narrow types at runtime and type assertions when you know more than TypeScript does.",
        example: "function isString(value: unknown): value is string {\n  return typeof value === 'string';\n}\n\nif (isString(data)) {\n  console.log(data.toUpperCase());\n}"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Kubernetes",
    description: "Container orchestration platform for automating deployment, scaling, and management of containerized applications.",
    button: "Orchestrate with K8s",
    features: [
      "Container orchestration",
      "Automatic scaling & healing",
      "Service discovery & load balancing",
      "Rolling updates & rollbacks",
      "Multi-cloud deployment"
    ],
    category: "DevOps",
    difficulty: "Advanced",
    popularity: 84,
    tips: [
      {
        title: "Resource Management",
        description: "Always set resource requests and limits for containers to ensure proper scheduling and prevent resource starvation.",
        example: "resources:\n  requests:\n    memory: '64Mi'\n    cpu: '250m'\n  limits:\n    memory: '128Mi'\n    cpu: '500m'"
      },
      {
        title: "Health Checks Configuration",
        description: "Configure liveness and readiness probes to ensure Kubernetes can properly manage your application lifecycle.",
        example: "livenessProbe:\n  httpGet:\n    path: /health\n    port: 8080\n  initialDelaySeconds: 30\n  periodSeconds: 10\nreadinessProbe:\n  httpGet:\n    path: /ready\n    port: 8080"
      },
      {
        title: "ConfigMaps and Secrets",
        description: "Use ConfigMaps for configuration data and Secrets for sensitive information. Mount them as volumes or environment variables.",
        example: "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  database_url: 'postgres://localhost:5432/mydb'\n  api_key: 'secret-key'"
      },
      {
        title: "Namespace Organization",
        description: "Use namespaces to organize resources by environment, team, or application for better resource isolation and management.",
        example: "kubectl create namespace production\nkubectl create namespace staging\nkubectl apply -f deployment.yaml -n production"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "GraphQL",
    description: "Query language and runtime for APIs that allows clients to request exactly the data they need in a single request.",
    button: "Query with GraphQL",
    features: [
      "Single endpoint for all data",
      "Strongly typed schema",
      "Real-time subscriptions",
      "Efficient data fetching",
      "Self-documenting API"
    ],
    category: "Backend",
    difficulty: "Advanced",
    popularity: 79,
    tips: [
      {
        title: "Schema Design Best Practices",
        description: "Design your schema with the client in mind. Use meaningful names and organize types logically.",
        example: "type User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  content: String!\n  author: User!\n}"
      },
      {
        title: "Resolver Optimization",
        description: "Use DataLoader to solve the N+1 query problem and batch database requests efficiently.",
        example: "const userLoader = new DataLoader(async (userIds) => {\n  const users = await User.findByIds(userIds);\n  return userIds.map(id => users.find(user => user.id === id));\n});"
      },
      {
        title: "Error Handling Strategy",
        description: "Implement proper error handling with custom error types and meaningful error messages for better debugging.",
        example: "const resolvers = {\n  Query: {\n    user: async (_, { id }) => {\n      try {\n        return await User.findById(id);\n      } catch (error) {\n        throw new UserInputError('User not found', { id });\n      }\n    }\n  }\n};"
      },
      {
        title: "Query Complexity Analysis",
        description: "Implement query complexity analysis to prevent expensive queries from overwhelming your server.",
        example: "const server = new ApolloServer({\n  typeDefs,\n  resolvers,\n  plugins: [\n    require('graphql-query-complexity').createComplexityLimitRule(1000)\n  ]\n});"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "TensorFlow",
    description: "Open-source machine learning framework for developing and training ML models with support for deep learning and neural networks.",
    button: "Learn with TensorFlow",
    features: [
      "Deep learning & neural networks",
      "Cross-platform deployment",
      "Production-ready ML models",
      "TensorBoard for visualization",
      "Extensive pre-trained models"
    ],
    category: "AI/ML",
    difficulty: "Advanced",
    popularity: 86,
    tips: [
      {
        title: "Data Pipeline Optimization",
        description: "Use tf.data API to create efficient input pipelines with prefetching, parallel processing, and caching.",
        example: "dataset = tf.data.Dataset.from_tensor_slices((x_train, y_train))\ndataset = dataset.batch(32).prefetch(tf.data.AUTOTUNE).cache()"
      },
      {
        title: "Model Checkpointing",
        description: "Implement model checkpointing to save training progress and resume training from the best performing checkpoint.",
        example: "checkpoint = tf.keras.callbacks.ModelCheckpoint(\n  'model_best.h5',\n  monitor='val_accuracy',\n  save_best_only=True,\n  mode='max'\n)"
      },
      {
        title: "Transfer Learning",
        description: "Use pre-trained models and fine-tune them for your specific task to achieve better results with less training time.",
        example: "base_model = tf.keras.applications.VGG16(\n  weights='imagenet',\n  include_top=False,\n  input_shape=(224, 224, 3)\n)\nbase_model.trainable = False"
      },
      {
        title: "Model Optimization",
        description: "Use TensorFlow Lite to optimize models for mobile and edge deployment, reducing size and improving inference speed.",
        example: "converter = tf.lite.TFLiteConverter.from_saved_model(saved_model_dir)\nconverter.optimizations = [tf.lite.Optimize.DEFAULT]\ntflite_model = converter.convert()"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Rust",
    description: "Systems programming language focused on safety, speed, and concurrency without garbage collection.",
    button: "Build with Rust",
    features: [
      "Memory safety without GC",
      "Zero-cost abstractions",
      "Concurrent programming",
      "Cross-platform compilation",
      "Growing ecosystem (Cargo)"
    ],
    category: "Language",
    difficulty: "Advanced",
    popularity: 83,
    tips: [
      {
        title: "Ownership & Borrowing Mastery",
        description: "Understand ownership rules to write memory-safe code without garbage collection. Use references when you need to borrow data.",
        example: "fn calculate_length(s: &String) -> usize {\n    s.len()\n}\n\nlet s1 = String::from('hello');\nlet len = calculate_length(&s1);\nprintln!('Length: {}', len);"
      },
      {
        title: "Error Handling with Result",
        description: "Use Result<T, E> and Option<T> types for robust error handling instead of exceptions.",
        example: "fn divide(x: f64, y: f64) -> Result<f64, String> {\n    if y == 0.0 {\n        Err('Division by zero'.to_string())\n    } else {\n        Ok(x / y)\n    }\n}"
      },
      {
        title: "Pattern Matching Power",
        description: "Use match statements and if let expressions for powerful pattern matching and control flow.",
        example: "match result {\n    Ok(value) => println!('Success: {}', value),\n    Err(e) => eprintln!('Error: {}', e),\n}\n\nif let Some(x) = optional_value {\n    println!('Got: {}', x);\n}"
      },
      {
        title: "Traits for Shared Behavior",
        description: "Define traits to share behavior across different types, similar to interfaces in other languages.",
        example: "trait Summary {\n    fn summarize(&self) -> String;\n}\n\nimpl Summary for Article {\n    fn summarize(&self) -> String {\n        format!('{}...', &self.content[..50])\n    }\n}"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapidly building custom user interfaces with pre-built classes and responsive design.",
    button: "Style with Tailwind",
    features: [
      "Utility-first approach",
      "Responsive design system",
      "Customizable design tokens",
      "Built-in dark mode support",
      "Purge unused CSS automatically"
    ],
    category: "Frontend",
    difficulty: "Beginner",
    popularity: 90,
    tips: [
      {
        title: "Component Extraction",
        description: "Use @apply directive to extract repeating utility combinations into custom CSS classes for better maintainability.",
        example: ".btn-primary {\n  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;\n}\n\n<button class='btn-primary'>Click me</button>"
      },
      {
        title: "Custom Configuration",
        description: "Extend Tailwind's default theme in tailwind.config.js to match your design system and brand colors.",
        example: "module.exports = {\n  theme: {\n    extend: {\n      colors: {\n        brand: {\n          50: '#eff6ff',\n          900: '#1e3a8a'\n        }\n      }\n    }\n  }\n}"
      },
      {
        title: "JIT Mode Optimization",
        description: "Enable JIT (Just-In-Time) mode for faster builds and the ability to use arbitrary values in utilities.",
        example: "// tailwind.config.js\nmodule.exports = {\n  mode: 'jit',\n  content: ['./src/**/*.{js,jsx,ts,tsx}'],\n}\n\n// Usage\n<div class='w-[32rem] h-[18px] bg-[#1da1f2]'>"
      },
      {
        title: "Responsive Design Patterns",
        description: "Use responsive prefixes to create mobile-first designs that adapt beautifully to different screen sizes.",
        example: "<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>\n  <div class='p-4 text-center md:text-left'>\n    <h2 class='text-xl md:text-2xl lg:text-3xl'>Responsive Text</h2>\n  </div>\n</div>"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Solidity",
    description: "Programming language for writing smart contracts on Ethereum blockchain and other EVM-compatible networks.",
    button: "Contract with Solidity",
    features: [
      "Smart contract development",
      "EVM compatibility",
      "Built-in security features",
      "Gas optimization",
      "DeFi & NFT development"
    ],
    category: "Blockchain",
    difficulty: "Advanced",
    popularity: 75,
    tips: [
      {
        title: "Security Best Practices",
        description: "Always check for reentrancy attacks, use OpenZeppelin contracts, and implement proper access controls.",
        example: "import '@openzeppelin/contracts/security/ReentrancyGuard.sol';\n\ncontract MyContract is ReentrancyGuard {\n    function withdraw() external nonReentrant {\n        uint amount = balances[msg.sender];\n        balances[msg.sender] = 0;\n        payable(msg.sender).transfer(amount);\n    }\n}"
      },
      {
        title: "Gas Optimization Techniques",
        description: "Optimize gas usage by using efficient data types, packing structs, and minimizing storage operations.",
        example: "// Efficient struct packing\nstruct User {\n    uint128 balance;  // 16 bytes\n    uint64 timestamp; // 8 bytes\n    bool isActive;    // 1 byte (packed in same slot)\n}\n\n// Use unchecked for gas savings when overflow is impossible\nunchecked { i++; }"
      },
      {
        title: "Event Logging Strategy",
        description: "Use events for off-chain applications to track contract state changes efficiently and cost-effectively.",
        example: "event Transfer(address indexed from, address indexed to, uint256 value);\n\nfunction transfer(address to, uint256 amount) external {\n    balances[msg.sender] -= amount;\n    balances[to] += amount;\n    emit Transfer(msg.sender, to, amount);\n}"
      },
      {
        title: "Testing & Deployment",
        description: "Use Hardhat or Foundry for comprehensive testing and deployment. Test edge cases and security vulnerabilities.",
        example: "// Hardhat test\nconst { expect } = require('chai');\n\ndescribe('MyContract', function () {\n  it('Should transfer tokens correctly', async function () {\n    const [owner, addr1] = await ethers.getSigners();\n    await contract.transfer(addr1.address, 100);\n    expect(await contract.balanceOf(addr1.address)).to.equal(100);\n  });\n});"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Go",
    description: "Fast, statically typed language designed for simplicity and efficiency in building scalable backend services and cloud applications.",
    button: "Go with Golang",
    features: [
      "Fast compilation & execution",
      "Built-in concurrency (goroutines)",
      "Simple & readable syntax",
      "Strong standard library",
      "Cross-platform deployment"
    ],
    category: "Language",
    difficulty: "Intermediate",
    popularity: 82,
    tips: [
      {
        title: "Goroutines & Channels",
        description: "Use goroutines for lightweight concurrency and channels for safe communication between goroutines.",
        example: "func worker(jobs <-chan int, results chan<- int) {\n    for j := range jobs {\n        results <- j * 2\n    }\n}\n\ngo worker(jobs, results)\nresult := <-results"
      },
      {
        title: "Error Handling Patterns",
        description: "Handle errors explicitly using Go's idiomatic error handling patterns. Don't ignore errors.",
        example: "func divide(a, b float64) (float64, error) {\n    if b == 0 {\n        return 0, errors.New('division by zero')\n    }\n    return a / b, nil\n}\n\nresult, err := divide(10, 2)\nif err != nil {\n    log.Fatal(err)\n}"
      },
      {
        title: "Interface Design",
        description: "Keep interfaces small and focused. Use implicit interface implementation for flexible and testable code.",
        example: "type Writer interface {\n    Write([]byte) (int, error)\n}\n\ntype FileWriter struct {\n    filename string\n}\n\nfunc (fw FileWriter) Write(data []byte) (int, error) {\n    return os.WriteFile(fw.filename, data, 0644)\n}"
      },
      {
        title: "Package Organization",
        description: "Organize code into packages based on functionality, not layers. Keep package APIs small and focused.",
        example: "// Good package structure\nproject/\n  cmd/           // Main applications\n  pkg/           // Library code\n    user/        // User domain\n    auth/        // Authentication\n  internal/      // Private application code"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Vue.js",
    description: "Progressive JavaScript framework for building user interfaces with an approachable learning curve and powerful ecosystem.",
    button: "Create with Vue",
    features: [
      "Progressive framework design",
      "Template-based syntax",
      "Reactive data binding",
      "Component composition",
      "Excellent developer experience"
    ],
    category: "Frontend",
    difficulty: "Beginner",
    popularity: 85,
    tips: [
      {
        title: "Composition API Benefits",
        description: "Use Composition API for better code organization, TypeScript support, and reusable logic composition.",
        example: "import { ref, computed, onMounted } from 'vue'\n\nexport default {\n  setup() {\n    const count = ref(0)\n    const doubled = computed(() => count.value * 2)\n    \n    onMounted(() => {\n      console.log('Component mounted')\n    })\n    \n    return { count, doubled }\n  }\n}"
      },
      {
        title: "Custom Directives",
        description: "Create custom directives for reusable DOM manipulation logic across your application.",
        example: "app.directive('focus', {\n  mounted(el) {\n    el.focus()\n  }\n})\n\n// Usage\n<input v-focus />"
      },
      {
        title: "State Management with Pinia",
        description: "Use Pinia for state management - it's the official successor to Vuex with better TypeScript support.",
        example: "import { defineStore } from 'pinia'\n\nexport const useCounterStore = defineStore('counter', {\n  state: () => ({ count: 0 }),\n  getters: {\n    doubleCount: (state) => state.count * 2\n  },\n  actions: {\n    increment() {\n      this.count++\n    }\n  }\n})"
      },
      {
        title: "Performance Optimization",
        description: "Use v-memo for expensive list rendering and lazy loading with Suspense for better performance.",
        example: "<template>\n  <div v-for='item in list' :key='item.id' v-memo='[item.id, item.selected]'>\n    {{ item.name }}\n  </div>\n</template>\n\n<Suspense>\n  <template #default>\n    <AsyncComponent />\n  </template>\n  <template #fallback>\n    <div>Loading...</div>\n  </template>\n</Suspense>"
      }
    ]
  },
  {
    src: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Flutter",
    description: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    button: "Develop with Flutter",
    features: [
      "Single codebase for all platforms",
      "High-performance rendering",
      "Rich widget ecosystem",
      "Hot reload development",
      "Native platform integration"
    ],
    category: "Mobile",
    difficulty: "Intermediate",
    popularity: 81,
    tips: [
      {
        title: "Widget Composition Patterns",
        description: "Build complex UIs by composing simple widgets. Extract common patterns into reusable custom widgets.",
        example: "class CustomButton extends StatelessWidget {\n  final String text;\n  final VoidCallback onPressed;\n  \n  const CustomButton({required this.text, required this.onPressed});\n  \n  @override\n  Widget build(BuildContext context) {\n    return ElevatedButton(\n      onPressed: onPressed,\n      child: Text(text),\n    );\n  }\n}"
      },
      {
        title: "State Management Solutions",
        description: "Choose the right state management solution: setState for local state, Provider/Riverpod for app-wide state.",
        example: "// Using Provider\nclass CounterModel extends ChangeNotifier {\n  int _count = 0;\n  int get count => _count;\n  \n  void increment() {\n    _count++;\n    notifyListeners();\n  }\n}\n\n// Usage\nConsumer<CounterModel>(\n  builder: (context, counter, child) => Text('${counter.count}'),\n)"
      },
      {
        title: "Performance Optimization",
        description: "Use const constructors, avoid unnecessary rebuilds, and implement efficient list rendering with builders.",
        example: "// Use const constructors\nconst Text('Static text')\n\n// Efficient list rendering\nListView.builder(\n  itemCount: items.length,\n  itemBuilder: (context, index) => ListTile(\n    title: Text(items[index].title),\n  ),\n)"
      },
      {
        title: "Platform Integration",
        description: "Use platform channels to access native platform features and integrate with existing native code.",
        example: "class NativeBridge {\n  static const platform = MethodChannel('com.example/native');\n  \n  static Future<String> getNativeData() async {\n    try {\n      final result = await platform.invokeMethod('getData');\n      return result;\n    } catch (e) {\n      throw 'Failed to get native data: $e';\n    }\n  }\n}"
      }
    ]
  }
];

export default {
  services,
  projects,
  blogPosts,
  slides
};