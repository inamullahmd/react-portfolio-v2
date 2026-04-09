import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToTarget = () => {
      if (!hash) return;

      const id = decodeURIComponent(hash.slice(1));
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (hash) {
      const frame = window.requestAnimationFrame(() => {
        window.setTimeout(scrollToTarget, 0);
      });

      return () => window.cancelAnimationFrame(frame);
    }
  }, [pathname, hash]);

  return null;
}