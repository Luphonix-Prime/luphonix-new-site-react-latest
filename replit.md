# Luphonix Digital Innovation Agency Website

## Overview
This is a React-based website for Luphonix Digital Innovation Agency, showcasing their services in web development, AI/ML solutions, 3D visualization, and digital transformation. The site features modern animations, 3D models, and a sophisticated dark theme with multiple color variants.

## Project Architecture
- **Frontend**: React 18 with React Router for SPA navigation
- **Styling**: Custom CSS with CSS custom properties (CSS variables) for theming
- **3D Graphics**: Three.js integration for 3D models and WebGL experiences
- **Animations**: GSAP and Framer Motion for smooth animations
- **Icons**: Tabler Icons, Lucide React, and React Icons

## Key Features
- **Multi-theme Support**: Default, Cyber Blue, Royal Purple, and Sunset Orange themes
- **3D Model Integration**: Interactive 3D models (Ganesha, Krishna, Lord Shiva)
- **Blog System**: Complete blog functionality with admin panel
- **Responsive Design**: Mobile-first approach with modern animations
- **SEO Optimized**: Comprehensive meta tags and structured data

## Recent Changes (January 2025)
- Successfully imported and configured for Replit environment
- Set up development server with proper host configuration for Replit proxy
- Configured workflow to run on port 5000
- Set up autoscale deployment configuration

## User Preferences
- Maintain the existing dark theme aesthetic
- Keep all 3D model functionality intact
- Preserve the sophisticated animation system

## Technical Setup

### Development
- The app runs on port 5000 with proper host configuration for Replit
- Uses Create React App with standard scripts
- Environment configured to work with Replit's proxy system

### Deployment
- Uses autoscale deployment target for optimal performance
- Build process: `npm run build`
- Runtime: `npm start`

### Dependencies
Key libraries include:
- React 18 ecosystem (react, react-dom, react-router-dom)
- Three.js for 3D graphics (@types/three, three, three-stdlib, postprocessing)
- Animation libraries (gsap, framer-motion, motion)
- UI components (@radix-ui/react-slot, lucide-react, @tabler/icons-react)
- Utilities (axios, clsx, class-variance-authority, tailwind-merge)

## File Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Route components
├── context/            # React context providers
├── data/               # Static data and mock content
└── utils/              # Utility functions

public/                 # Static assets including 3D models
attached_assets/        # Additional project assets
```

## Notes
- The project includes extensive 3D model files (.fbx, .glb) for interactive experiences
- Multiple theme variants are supported through CSS custom properties
- Blog functionality is implemented but may need backend integration for production use
- All animations and effects are optimized for performance