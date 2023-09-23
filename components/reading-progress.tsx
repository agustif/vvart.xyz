// components/ReadingProgressBar.js

// import React, { useEffect, useState } from 'react';
// import {useWindowSize} from "@uidotdev/usehooks";
import React, { useEffect, useState, useCallback } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

export function ReadingProgressBar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const { height } = useWindowSize();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement?.scrollHeight - (height || 0);
      const scrollY = window.scrollY;
      const newScrollPosition = (scrollY / totalHeight) * 100;
      setScrollPosition(newScrollPosition);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [height]);

  return (
    <div className="reading-progress-container">
      <div className="reading-progress-bar" style={{ width: `${scrollPosition}%` }}></div>
      <style jsx>{`
        .reading-progress-container {
          width: 100%;
          height: 4px;
          background-color: #e0e0e0;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
        }
        .reading-progress-bar {
          height: 4px;
          background-color: #000;
        }
      `}</style>
    </div>
  );
      };

export default ReadingProgressBar