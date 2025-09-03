import { useEffect } from 'react';

const SEOHead = ({ 
  title = "Luphonix | Digital Innovation Agency", 
  description = "Leading digital innovation agency specializing in web development, mobile apps, AI/ML solutions, and 3D visualization. Transform your business with cutting-edge technology.",
  keywords = "Luphonix, digital innovation, web development, mobile apps, AI development, machine learning, 3D visualization, WebGL, React development",
  canonical = "https://luphonix.com",
  ogImage = "https://luphonix.com/og-image.jpg",
  structuredData = null
}) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
    
    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: ogImage }
    ];
    
    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });
    
    // Update Twitter Card tags
    const twitterTags = [
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage }
    ];
    
    twitterTags.forEach(tag => {
      let twitterTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.name = tag.name;
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', tag.content);
    });
    
    // Add structured data if provided
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]#page-structured-data');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.type = 'application/ld+json';
        structuredDataScript.id = 'page-structured-data';
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.innerHTML = JSON.stringify(structuredData);
    }
    
  }, [title, description, keywords, canonical, ogImage, structuredData]);

  return null; // This component doesn't render anything
};

export default SEOHead;