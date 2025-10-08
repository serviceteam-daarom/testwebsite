import { useMemo, useState } from 'react';
import { Container, Theme } from '../../settings/types';
import { GoudGebouwdFeedPage } from './GoudGebouwdFeedPage';
import { GoudGebouwdMapPage } from './GoudGebouwdMapPage';
import { GoudGebouwdIndexPage } from './GoudGebouwdIndexPage';
import { GoudGebouwdAboutPage } from './GoudGebouwdAboutPage';
let theme: Theme = 'light';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';
type Page = 'feed' | 'map' | 'index' | 'about';
function App() {
  const [currentPage, setCurrentPage] = useState<Page>('feed');
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  setTheme(theme);
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };
  const generatedComponent = useMemo(() => {
    // THIS IS WHERE THE TOP LEVEL GENRATED COMPONENT WILL BE RETURNED!
    if (currentPage === 'map') {
      return <GoudGebouwdMapPage onNavigate={handleNavigate} />;
    }
    if (currentPage === 'index') {
      return <GoudGebouwdIndexPage onNavigate={handleNavigate} />;
    }
    if (currentPage === 'about') {
      return <GoudGebouwdAboutPage onNavigate={handleNavigate} />;
    }
    return <GoudGebouwdFeedPage onNavigate={handleNavigate} />;
  }, [currentPage]);
  if (container === 'centered') {
    return <div className="h-full w-full flex flex-col items-center justify-center">
        {generatedComponent}
      </div>;
  } else {
    return generatedComponent;
  }
}
export default App;