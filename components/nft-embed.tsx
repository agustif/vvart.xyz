//NFTEmbed.tsx
import React from 'react';

interface NFTEmbedProps {
  tokenId: string;
}

const NFTEmbed: React.FC<NFTEmbedProps> = ({ tokenId }) => {
  const url = `https://raw.seadn.io/files/${tokenId}.html`;

  return (
    <iframe
      src={url}
      width="100%"
      height="100%"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      id="AssetMedia--frame"
      sandbox="allow-scripts"
      style={{ minHeight: '150px', cursor: "pointer" }}
    />
  );
};

export default NFTEmbed;
