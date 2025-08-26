
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const LanguageDetails = () => {
  const { language } = useParams();

  const languageData = {
    'react': {
      title: 'React.js',
      description: 'A powerful JavaScript library for building user interfaces with component-based architecture.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tips: [
        {
          title: 'Use Functional Components with Hooks',
          description: 'Prefer functional components over class components. They are simpler, easier to test, and perform better.',
          code: `const MyComponent = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return <div>Count: {count}</div>;
};`
        },
        {
          title: 'Optimize with React.memo',
          description: 'Use React.memo to prevent unnecessary re-renders of components when props haven\'t changed.',
          code: `const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{data.map(item => <span key={item.id}>{item.name}</span>)}</div>;
});`
        },
        {
          title: 'Custom Hooks for Reusable Logic',
          description: 'Extract complex logic into custom hooks for better code reusability and organization.',
          code: `const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setStoredValue = (value) => {
    setValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  
  return [value, setStoredValue];
};`
        }
      ],
      bestPractices: [
        'Use TypeScript for better type safety',
        'Keep components small and focused',
        'Use proper key props in lists',
        'Implement error boundaries',
        'Use React DevTools for debugging'
      ]
    },
    'nodejs': {
      title: 'Node.js',
      description: 'Server-side JavaScript runtime built on Chrome\'s V8 engine for scalable backend applications.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tips: [
        {
          title: 'Use Async/Await for Better Error Handling',
          description: 'Prefer async/await over callbacks and promises for cleaner, more readable asynchronous code.',
          code: `// Good
const fetchUserData = async (userId) => {
  try {
    const user = await User.findById(userId);
    const posts = await Post.findByUserId(userId);
    return { user, posts };
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};`
        },
        {
          title: 'Environment Variables for Configuration',
          description: 'Use environment variables to manage configuration and sensitive data securely.',
          code: `// config.js
const config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/myapp',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key'
};

module.exports = config;`
        },
        {
          title: 'Middleware for Cross-cutting Concerns',
          description: 'Use middleware functions to handle authentication, logging, and error handling.',
          code: `// middleware/auth.js
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.sendStatus(401);
  }
  
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};`
        }
      ],
      bestPractices: [
        'Use npm scripts for task automation',
        'Implement proper error handling',
        'Use clustering for better performance',
        'Keep dependencies up to date',
        'Use linting tools like ESLint'
      ]
    },
    'python': {
      title: 'Python',
      description: 'Versatile programming language perfect for AI, data science, and web development.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tips: [
        {
          title: 'List Comprehensions for Efficiency',
          description: 'Use list comprehensions for cleaner and more efficient code when creating lists.',
          code: `# Instead of this
squares = []
for x in range(10):
    squares.append(x**2)

# Use this
squares = [x**2 for x in range(10)]

# With conditions
even_squares = [x**2 for x in range(10) if x % 2 == 0]`
        },
        {
          title: 'Context Managers for Resource Management',
          description: 'Use context managers (with statement) for proper resource management.',
          code: `# File handling
with open('file.txt', 'r') as f:
    content = f.read()
# File is automatically closed

# Custom context manager
from contextlib import contextmanager

@contextmanager
def database_connection():
    conn = create_connection()
    try:
        yield conn
    finally:
        conn.close()`
        },
        {
          title: 'Virtual Environments for Dependency Management',
          description: 'Use virtual environments to isolate project dependencies.',
          code: `# Create virtual environment
python -m venv myenv

# Activate (Windows)
myenv\\Scripts\\activate

# Activate (Linux/Mac)
source myenv/bin/activate

# Install dependencies
pip install -r requirements.txt`
        }
      ],
      bestPractices: [
        'Follow PEP 8 style guidelines',
        'Use type hints for better code documentation',
        'Write unit tests with pytest',
        'Use virtual environments',
        'Document your code with docstrings'
      ]
    },
    'mongodb': {
      title: 'MongoDB',
      description: 'NoSQL database that provides high performance, high availability, and easy scalability.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tips: [
        {
          title: 'Efficient Indexing Strategies',
          description: 'Create indexes on frequently queried fields to improve performance.',
          code: `// Create single field index
db.users.createIndex({ "email": 1 })

// Create compound index
db.orders.createIndex({ "userId": 1, "createdAt": -1 })

// Create text index for search
db.articles.createIndex({ "title": "text", "content": "text" })`
        },
        {
          title: 'Aggregation Pipeline for Complex Queries',
          description: 'Use aggregation pipelines for complex data processing and analysis.',
          code: `db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: {
      _id: "$userId",
      totalAmount: { $sum: "$amount" },
      orderCount: { $sum: 1 }
    }
  },
  { $sort: { totalAmount: -1 } },
  { $limit: 10 }
])`
        },
        {
          title: 'Schema Design Best Practices',
          description: 'Design your schema based on your query patterns, not normalized table structure.',
          code: `// Embedding for one-to-few relationships
{
  _id: ObjectId("..."),
  name: "John Doe",
  addresses: [
    { type: "home", street: "123 Main St", city: "NYC" },
    { type: "work", street: "456 Office Blvd", city: "NYC" }
  ]
}

// Referencing for one-to-many relationships
{
  _id: ObjectId("..."),
  name: "John Doe",
  orderIds: [ObjectId("..."), ObjectId("...")]
}`
        }
      ],
      bestPractices: [
        'Design schema around query patterns',
        'Use appropriate data types',
        'Implement proper indexing',
        'Use MongoDB Atlas for managed hosting',
        'Monitor performance with MongoDB Compass'
      ]
    },
    'typescript': {
      title: 'TypeScript',
      description: 'Strongly typed programming language that builds on JavaScript by adding static type definitions.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tips: [
        {
          title: 'Define Clear Interfaces',
          description: 'Use interfaces to define the shape of objects and ensure type safety.',
          code: `interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const fetchUser = async (id: number): Promise<ApiResponse<User>> => {
  // Implementation
};`
        },
        {
          title: 'Utility Types for Transformation',
          description: 'Use built-in utility types to transform existing types.',
          code: `interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Pick specific properties
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<User>;`
        },
        {
          title: 'Generic Functions for Reusability',
          description: 'Use generics to create reusable functions that work with multiple types.',
          code: `function createArray<T>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

const stringArray = createArray(3, "hello"); // string[]
const numberArray = createArray(5, 42); // number[]

class Repository<T> {
  private items: T[] = [];
  
  add(item: T): void {
    this.items.push(item);
  }
  
  findById(id: string): T | undefined {
    return this.items.find(item => (item as any).id === id);
  }
}`
        }
      ],
      bestPractices: [
        'Enable strict mode in tsconfig.json',
        'Use meaningful interface and type names',
        'Leverage type inference when possible',
        'Use union types for flexible APIs',
        'Document complex types with comments'
      ]
    },
    'docker': {
      title: 'Docker',
      description: 'Platform for developing, shipping, and running applications using containerization technology.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tips: [
        {
          title: 'Multi-stage Builds for Optimization',
          description: 'Use multi-stage builds to reduce image size and improve security.',
          code: `# Dockerfile
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:16-alpine AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`
        },
        {
          title: 'Efficient Layer Caching',
          description: 'Order Dockerfile instructions to maximize layer caching and reduce build times.',
          code: `# Good - dependencies change less frequently
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]

# Bad - entire context copied before dependencies
FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`
        },
        {
          title: 'Docker Compose for Development',
          description: 'Use Docker Compose to orchestrate multiple services in development.',
          code: `# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - db
  
  db:
    image: mongo:4.4
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:`
        }
      ],
      bestPractices: [
        'Use official base images when possible',
        'Minimize image layers',
        'Use .dockerignore to exclude unnecessary files',
        'Run containers as non-root users',
        'Keep images updated and scan for vulnerabilities'
      ]
    }
  };

  const currentLanguage = languageData[language?.toLowerCase()] || languageData['react'];

  return (
    <div className="language-details">
      {/* Hero Section */}
      <section className="hero" style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${currentLanguage.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <Link 
            to="/" 
            style={{ 
              color: 'var(--accent-green)', 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              marginBottom: '30px',
              fontSize: '14px'
            }}
          >
            <i className="fas fa-arrow-left" style={{ marginRight: '10px' }}></i>
            Back to Home
          </Link>
          
          <h1 className="hero-title" style={{ marginBottom: '20px' }}>
            {currentLanguage.title} <span className="gradient-text">Tips & Tricks</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '600px' }}>
            {currentLanguage.description}
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Essential Tips & Tricks</h2>
          <div style={{ display: 'grid', gap: '40px', marginTop: '60px' }}>
            {currentLanguage.tips.map((tip, index) => (
              <div key={index} className="tip-card" style={{
                background: 'var(--card-bg)',
                borderRadius: '15px',
                padding: '40px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '15px',
                  color: 'var(--accent-green)'
                }}>
                  {tip.title}
                </h3>
                <p style={{ 
                  marginBottom: '25px',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)'
                }}>
                  {tip.description}
                </p>
                <div style={{
                  background: 'var(--secondary-bg)',
                  borderRadius: '10px',
                  padding: '20px',
                  border: '1px solid var(--border-color)',
                  overflowX: 'auto'
                }}>
                  <pre style={{
                    margin: 0,
                    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    whiteSpace: 'pre-wrap'
                  }}>
                    <code>{tip.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="container">
          <h2 className="section-title">Best Practices</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '40px'
          }}>
            {currentLanguage.bestPractices.map((practice, index) => (
              <div key={index} style={{
                background: 'var(--card-bg)',
                padding: '25px',
                borderRadius: '10px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--accent-green)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <i className="fas fa-check" style={{ color: 'white', fontSize: '18px' }}></i>
                </div>
                <p style={{ margin: 0, lineHeight: '1.5' }}>{practice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to Start Your Project?</h2>
          <p className="section-subtitle">
            Let's build something amazing together using {currentLanguage.title}
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px' }}>
            <Link to="/contact" className="cta-button">
              Start Your Project
              <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </Link>
            <Link to="/projects" className="cta-button" style={{
              background: 'transparent',
              border: '1px solid var(--accent-green)'
            }}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LanguageDetails;
