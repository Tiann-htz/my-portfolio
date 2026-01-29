// Detects scroll and plays/pauses glow animations
let scrollTimeout;

export const initScrollDetection = () => {
  let isScrolling = false;

  const handleScroll = () => {
    // Add active state while scrolling
    if (!isScrolling) {
      document.body.classList.add('scroll-active');
      isScrolling = true;
    }

    // Clear timeout
    clearTimeout(scrollTimeout);

    // Set timeout to detect when scrolling stops
    scrollTimeout = setTimeout(() => {
      document.body.classList.remove('scroll-active');
      isScrolling = false;
    }, 150); // 150ms after scroll stops
  };

  // Initial state - not scrolling, animations paused
  document.body.classList.remove('scroll-active');

  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
    clearTimeout(scrollTimeout);
  };
};