import { useEffect, useState } from "react";

const useScrollControl = (scrollContainerRef) => {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
  
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        setShowLeftArrow(container.scrollLeft > 0);
        setShowRightArrow(
          container.scrollLeft < container.scrollWidth - container.clientWidth
        );
      }
    };
  
    useEffect(() => {
      const container = scrollContainerRef.current;
      if (container) {
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
      }
    }, [scrollContainerRef]);
  
    const scroll = (scrollOffset) => {
      const container = scrollContainerRef.current;
      if (container) {
        container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
      }
    };
  
    return { showLeftArrow, showRightArrow, scroll };
  };


  export default useScrollControl
  