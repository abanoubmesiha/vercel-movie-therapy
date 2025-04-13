import { useSearchParams } from "next/navigation";
import { useEffect, useRef, type RefObject } from "react";

export function useScrollToBottom<T extends HTMLElement>(): [
  RefObject<T>,
  RefObject<T>
] {
  const containerRef = useRef<T>(null);
  const endRef = useRef<T>(null);
  const searchParams = useSearchParams();
  const isAutoBottomScrollDisabled = searchParams.get("isAutoBottomScrollDisabled");

  useEffect(() => {
    const container = containerRef.current;
    const end = endRef.current;

    if (container && end && isAutoBottomScrollDisabled !== "true") {
      const observer = new MutationObserver(() => {
        end.scrollIntoView({ behavior: "instant", block: "end" });
      });

      observer.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });

      return () => observer.disconnect();
    }
  }, [isAutoBottomScrollDisabled]);

  return [containerRef, endRef];
}
