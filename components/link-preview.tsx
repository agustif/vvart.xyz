import React from 'react';
import { LinkPreview } from 'react-link-previewer';
import cn from 'classnames';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  host?: string;
}

function CustomLinkPreview({ href, host = "https://vercel-og-service.vercel.app/", className, ...rest }: Props) {
  return (
    <LinkPreview
    external={true}
    rel="noopener noreferrer"
    className={cn("font-medium transition-all duration-200 hover:underline-offset-8 group-hover:text-blue-500 dark:text-white dark:hover:text-[#60a5fa]", className)}
    {...rest} host={host} href={href}/>
  );
}

export default CustomLinkPreview;
