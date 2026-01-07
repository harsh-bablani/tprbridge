/**
 * Utility functions for performance optimization
 */

/**
 * Preload an image to cache it before rendering
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

/**
 * Generate responsive image URLs for different screen sizes
 */
export const getResponsiveImageUrl = (
  baseUrl: string,
  width: number
): string => {
  // For Unsplash images, add width parameter
  if (baseUrl.includes('unsplash.com')) {
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}w=${width}`;
  }
  return baseUrl;
};

/**
 * Prefetch resources for better performance
 */
export const prefetchResource = (href: string, as: 'image' | 'script' | 'style' = 'image'): void => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = as;
  link.href = href;
  document.head.appendChild(link);
};

/**
 * Create a blur hash placeholder for images
 */
export const getBlurHash = (color: string = '#c53030'): string => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='${color.replace('#', '%23')}' width='400' height='300'/%3E%3C/svg%3E`;
};

/**
 * Lazy load an image with fade-in effect
 */
export const loadImageWithFadeIn = (
  imgElement: HTMLImageElement,
  src: string,
  duration: number = 300
): void => {
  const img = new Image();
  img.onload = () => {
    imgElement.src = src;
    imgElement.style.opacity = '0';
    imgElement.style.transition = `opacity ${duration}ms ease-in`;
    // Trigger reflow to apply initial opacity
    void imgElement.offsetHeight;
    imgElement.style.opacity = '1';
  };
  img.src = src;
};

/**
 * Defer non-critical scripts
 */
export const deferScript = (src: string): void => {
  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  document.body.appendChild(script);
};

/**
 * Enable resource hints for performance
 */
export const addResourceHints = (): void => {
  // DNS Prefetch for external resources
  const dnsPrefetchDomains = [
    'https://images.unsplash.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  dnsPrefetchDomains.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });

  // Preconnect for critical resources
  const preconnectDomains = [
    'https://images.unsplash.com',
  ];

  preconnectDomains.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};
