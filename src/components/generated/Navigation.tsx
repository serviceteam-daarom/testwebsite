"use client";

import * as React from "react";

export interface NavigationProps {
  currentPage: 'feed' | 'map' | 'index' | 'about';
  onNavigate?: (page: 'feed' | 'map' | 'index' | 'about') => void;
  className?: string;
}

type Page = NavigationProps['currentPage'];

const pageToHash: Record<Page, string> = {
  feed: '#feed',
  map: '#map',
  index: '#index',
  about: '#about'
};

const pageToLabel: Record<Page, string> = {
  feed: 'Feed',
  map: 'Kaart',
  index: 'Index',
  about: 'Over'
};

const LEFT_LINKS: Page[] = ['feed', 'map', 'index'];
const RIGHT_LINKS: Page[] = ['about'];

export default function Navigation({
  currentPage,
  onNavigate,
  className = ''
}: NavigationProps) {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
    if (!onNavigate) {
      return;
    }

    event.preventDefault();
    onNavigate(page);

    if (typeof window !== 'undefined') {
      const targetHash = pageToHash[page];
      if (window.location.hash !== targetHash) {
        window.history.replaceState(null, '', targetHash);
      }
    }
  };

  const renderLink = (page: Page) => (
    <a
      key={page}
      href={pageToHash[page]}
      className="menu-link"
      aria-current={currentPage === page ? 'page' : undefined}
      onClick={event => handleLinkClick(event, page)}
    >
      {pageToLabel[page]}
    </a>
  );

  return (
    <section className={`menu ${className}`.trim()}>
      <nav className="menu-left" aria-label="Hoofdmenu">
        {LEFT_LINKS.map(renderLink)}
      </nav>
      <div className="menu-right">
        {RIGHT_LINKS.map(renderLink)}
      </div>
    </section>
  );
}
