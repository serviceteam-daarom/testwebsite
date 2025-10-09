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

  return (
    <header id="header" className={`o-app__header ${className}`.trim()}>
      <div className="m-header">
        <nav className="m-header__nav" aria-label="Hoofdmenu">
          <ul className="m-header__list">
            {(['feed', 'map', 'index'] as Page[]).map(page => (
              <li key={page} className="m-header__item">
                <a
                  href={pageToHash[page]}
                  className="m-header__link"
                  aria-current={currentPage === page ? 'page' : undefined}
                  onClick={event => handleLinkClick(event, page)}
                >
                  {pageToLabel[page]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="m-header__actions" aria-label="actiemenu">
          <ul className="m-header__list">
            <li className="m-header__item">
              <a
                href={pageToHash.about}
                className="m-header__link"
                aria-current={currentPage === 'about' ? 'page' : undefined}
                onClick={event => handleLinkClick(event, 'about')}
              >
                {pageToLabel.about}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
