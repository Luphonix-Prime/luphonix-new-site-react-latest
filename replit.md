# Luphonix React Project

## Overview
This is a digital innovation agency website built with React, featuring 3D visualizations, animations, and modern UI components. The project showcases services, projects, and includes a blog system with a dynamic theme switcher.

## Project Architecture
- **Frontend**: React 18 with React Router for navigation
- **3D Graphics**: Three.js with React Three Fiber and Drei for 3D components
- **Animations**: Framer Motion and GSAP for smooth animations
- **Styling**: Custom CSS with CSS Variables for theming
- **Build System**: Create React App (Webpack + Babel)

## Development Configuration
- **Development Server**: Runs on port 5000 with host 0.0.0.0
- **Proxy Support**: Configured with DANGEROUSLY_DISABLE_HOST_CHECK=true for Replit environment
- **Hot Reloading**: Enabled for development

## Key Features
- Multi-theme system (Default, Cyber Blue, Royal Purple, Sunset Orange, Matrix Red)
- 3D models and animations (Ganesha, Krishna, Shiva models)
- Responsive design with modern animations
- Blog system with admin capabilities
- Contact forms and service showcases

## Dependencies
- React ecosystem (React, React DOM, React Router)
- 3D libraries (@react-three/fiber, @react-three/drei, three.js)
- Animation libraries (framer-motion, gsap)
- UI libraries (lucide-react, @tabler/icons-react)
- Spline integration (@splinetool/react-spline)

## Development Commands
- `npm start` - Start development server on port 5000
- `npm run build` - Build for production
- `npm test` - Run test suite

## Deployment
- **Target**: Autoscale deployment
- **Build**: `npm run build`
- **Serve**: Static file serving from build directory

## Known Issues
- ESLint warnings for accessibility and code style (non-blocking)
- Missing source map for @mediapipe/tasks-vision (dependency issue)
- Memory constraints during compilation due to large 3D dependencies

## Recent Changes
- [2025-09-10] Initial Replit environment setup
- [2025-09-10] Fixed ESLint cache corruption issue
- [2025-09-10] Configured development server for Replit proxy environment
- [2025-09-10] Added compatible Three.js dependencies
- [2025-09-10] Deployment configuration completed

## User Preferences
- Keep existing code structure and file organization
- Maintain theme system and 3D visualization features
- Preserve blog and admin functionality