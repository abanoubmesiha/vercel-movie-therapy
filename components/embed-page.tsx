"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";

function EmbedPage({ src }: { src: string }) {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div style={{ position: 'relative', width: '100%', height: '700px' }}>
      <iframe
        ref={iframeRef}
        src={src}
        width="100%"
        height="100%"
        style={{ pointerEvents: 'none' }} // Disable iframe interactions
      />
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          cursor: 'pointer',
          zIndex: 1
        }}
        onClick={() => {
          router.push("/recommend");
          router.refresh();
        }}
      />
    </div>
  );
}

export default EmbedPage;