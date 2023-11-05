import React from 'react';
import { LinkPreview } from 'react-link-previewer';
import cn from 'classnames';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  host?: string;
}

function CustomLinkPreview({ href, host = "https://vercel-og-service.vercel.app/", className, ...rest }: Props) {
  return (
    <a href={href}>
    <LinkPreview
    external={true}
    rel="noopener noreferrer"
    className={cn("font-medium underline transition duration-200  hover:text-blue-500 dark:text-white dark:hover:text-[#60a5fa]", className)}
    {...rest} host={host} href={href}/>
    </a>
  );

}

export default CustomLinkPreview;
