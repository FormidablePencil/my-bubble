import { useState, useEffect } from "react";

//Todo: if window reload components should not animated when scrolling up,
function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting) setIntersecting(entry.isIntersecting); //don't update when false
      },
      {
        rootMargin
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      // eslint-disable-next-line
      observer.unobserve(ref.current);
    };
    // eslint-disable-next-line
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

export default useOnScreen