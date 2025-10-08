import { useCallback, useEffect, useMemo, useState } from 'react';
import { Container, Theme } from './settings/types';
import { GoudGebouwdFeedPage } from './components/generated/GoudGebouwdFeedPage';
import { GoudGebouwdMapPage } from './components/generated/GoudGebouwdMapPage';
import { GoudGebouwdIndexPage } from './components/generated/GoudGebouwdIndexPage';
import { GoudGebouwdAboutPage } from './components/generated/GoudGebouwdAboutPage';

let theme: Theme = 'light';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';

type Page = 'feed' | 'map' | 'index' | 'about';

const resolvePageFromHash = (hash: string): Page => {
  const normalized = hash.replace('#', '') as Page;
  if (normalized === 'map' || normalized === 'index' || normalized === 'about') {
    return normalized;
  }
  return 'feed';
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    if (typeof window === 'undefined') {
      return 'feed';
    }
    return resolvePageFromHash(window.location.hash);
  });

  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleHashChange = () => {
      setCurrentPage(resolvePageFromHash(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = useCallback((page: Page) => {
    setCurrentPage(page);

    if (typeof window !== 'undefined') {
      const newHash = `#${page}`;
      if (window.location.hash !== newHash) {
        window.history.replaceState(null, '', newHash);
      }
    }
  }, []);

  const generatedComponent = useMemo(() => {
    // THIS IS WHERE THE TOP LEVEL GENRATED COMPONENT WILL BE RETURNED!
    switch (currentPage) {
      case 'map':
        return <GoudGebouwdMapPage onNavigate={handleNavigate} />;
      case 'index':
        return <GoudGebouwdIndexPage onNavigate={handleNavigate} />;
      case 'about':
        return <GoudGebouwdAboutPage onNavigate={handleNavigate} />;
      case 'feed':
      default:
        return <GoudGebouwdFeedPage onNavigate={handleNavigate} />;
    }
  }, [currentPage, handleNavigate]);

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {generatedComponent}
      </div>
    );
  } else {
    return generatedComponent;
  }
}

export default App;