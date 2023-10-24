import React from 'react';
import { LinkPreview } from 'react-link-previewer';
import cn from 'classnames';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  host?: string;
}

function CustomLinkPreview({ href, host = "https://vercel-og-service.vercel.app/", className, ...rest }: Props) {
  return (
    <LinkPreview        target="_blank"
    rel="noopener noreferrer"
    className={cn("font-medium underline underline-offset-4 transition-all duration-200 hover:text-blue-500 hover:underline-offset-8 dark:text-white dark:hover:text-[#60a5fa]", className)}
    {...rest} host={host} href={href}/>
  );
}

export default CustomLinkPreview;
