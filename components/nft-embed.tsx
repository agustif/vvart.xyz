//NFTEmbed.tsx
import React from 'react';

interface NFTEmbedProps {
  tokenId: string;
  embedId: string;
}

const NFTEmbed: React.FC<NFTEmbedProps> = ({ tokenId, embedId }) => {
  const url = `https://raw.seadn.io/files/${embedId}.html`;

        return (
          <>
            <iframe
              src={url}
              className="cursor-pointer rounded-md border-2 border-gray-950 transition-all duration-500 ease-in-out hover:animate-pulse hover:border-white"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{
                animationIterationCount: 3,
              }}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              id="AssetMedia--frame"
              sandbox="allow-scripts"
              // style={{ minHeight: '10px' }}
            />
            {/* <p> Checks #{`${tokenId}`}</p> */}
          </>
        );
      };

      export default NFTEmbed;
