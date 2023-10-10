// components/ReadingProgressBar.js

import React, { useEffect, useState, useCallback } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import { Icons } from './icons';

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
      <div className="reading-progress-bar" style={{ width: `${scrollPosition}%` }}>
        <div className="reading-progress-percentage">{Math.round(scrollPosition)}%</div>
      </div>
        <Icons.logo className="absolute right-1 top-0.5 h-4 w-4 text-[#e0e0e0]" />
      <style jsx>{`
        .reading-progress-container {
          width: 100%;
          height: 20px;
          background-color: #e0e0e0;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
        }
        .reading-progress-bar {
          height: 20px;
          background-color: #000;
          position: relative;
        }
        .reading-progress-percentage {
          position: absolute;
          top: 0px;
          left: 10px;
          font-weight: 600;
          font-size: 12px;
          z-index: 1001;
          color: #fff;
          text-shadow: 0px 0px 5px #000;
        }
      `}</style>
    </div>
  );
};

export default ReadingProgressBar;
