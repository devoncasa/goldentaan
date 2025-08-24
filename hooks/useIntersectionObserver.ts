
import { RefObject, useEffect, useState } from 'react';

export const useIntersectionObserver = <T extends HTMLElement,>(
  elementRef: RefObject<T>,
  options: IntersectionObserverInit
): IntersectionObserverEntry | undefined => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const node = elementRef?.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, options);

    observer.observe(node);

    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef.current, options.threshold, options.root, options.rootMargin]);

  return entry;
};
