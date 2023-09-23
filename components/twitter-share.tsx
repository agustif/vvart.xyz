"use client"
// components/ShareTwitter.js
import React, { useRef, useEffect } from 'react';
import {useTextSelection} from 'use-text-selection';
import { Icons } from './icons';
import { Button } from './ui/button';
import autoAnimate from '@formkit/auto-animate';
import { useWindowSize } from "@uidotdev/usehooks";

const TwitterShare = () => {
  const { clientRect, isCollapsed, textContent: text } = useTextSelection();
  const totalChars = text ? text.length : 0;
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const handleShareClick = () => {
    if (text) {
      const twitterShareUrl = "https://twitter.com/intent/tweet";
      const encodedText = encodeURIComponent(text);
      const currentUrl = encodeURIComponent(window.location.href);
      const hashtags = "#VVArt.xyz #ChecksGuide"; // Change this to your preferred hashtags
      window.open(`${twitterShareUrl}?text="${encodedText}"&url=${currentUrl}&hashtags=${hashtags}`);
    }
  };
  const isTabletSizeOrBigger = useWindowSize()?.width ?? 0 > 1024;


  return (
    <div ref={parent}>
      {clientRect && !isCollapsed && (
        <div className="flex items-center">

          <Button
            size={"small" as "sm"}
            className="-ml-6 animate-bounce gap-2 rounded-md bg-blue-400 px-2  py-1 text-white shadow-sm backdrop-blur-xl hover:bg-blue-500 lg:-ml-20"
            style={{
              position: 'absolute',
              top: `${clientRect.top + window.scrollY + clientRect.height}px`,
              // marginLeft: "-40px", // Updated left property
              transform: 'translateX(-40%)',
              zIndex: 1000, // Ensure it's above other content
            }}
            onClick={handleShareClick}
          >
            <Icons.twitter className="h-4 w-4" />
            {isTabletSizeOrBigger && 'Tweet it'}
          </Button>
          <span
            style={{
              position: 'absolute',
              top: `${clientRect.top + window.scrollY + 30 + clientRect.height}px `,
              // left: "-10px",
              transform: 'translateX(-50%)',
              zIndex: 1000, // Ensure it's above other content
            }}
            className="bg-backdro-blur-sm -ml-1 mr-2 rounded-full bg-white/90 px-3 py-2 text-xs text-gray-900 dark:bg-gray-900/90 dark:text-white lg:-ml-7"
          >
            {totalChars}/280
          </span>
        </div>
      )}
    </div>
  );
}

export default TwitterShare;
