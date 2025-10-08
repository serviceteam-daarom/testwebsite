import { useCallback, useMemo, useState } from 'react';
import { Container, Theme } from './settings/types';
import { GoudGebouwdFeedPage } from './components/generated/GoudGebouwdFeedPage';
import { GoudGebouwdMapPage } from './components/generated/GoudGebouwdMapPage';
import { GoudGebouwdIndexPage } from './components/generated/GoudGebouwdIndexPage';
import { GoudGebouwdAboutPage } from './components/generated/GoudGebouwdAboutPage';

let theme: Theme = 'light';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';

function App() {
  const [currentPage, setCurrentPage] = useState<'feed' | 'map' | 'index' | 'about'>('feed');

  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const handleNavigate = useCallback((page: 'feed' | 'map' | 'index' | 'about') => {
    setCurrentPage(page);
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