import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
type Project = {
  id: string;
  number: string;
  title: string;
  image: string;
  type: 'image' | 'drawing';
};
type FilterCategory = {
  id: string;
  title: string;
  options: string[];
};
type GoudGebouwdFeedPageProps = {
  className?: string;
  onNavigate?: (page: 'feed' | 'map' | 'index' | 'about') => void;
};
const heroTitleLines = ['FOUT', 'GEBOUWD'];
const projects: Project[] = [{
  id: '1',
  number: '#09',
  title: 'Doorsnede b-b nieuw',
  image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  type: 'drawing'
}, {
  id: '2',
  number: '#07',
  title: 'Garrelsweer',
  image: 'https://images.unsplash.com/photo-1760266307142-d4e3c086389a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=800',
  type: 'image'
}, {
  id: '3',
  number: '#06',
  title: 'Uithuizen-Noord',
  image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  type: 'image'
}, {
  id: '4',
  number: '#07',
  title: 'Blok 6 zijgevel',
  image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  type: 'image'
}, {
  id: '5',
  number: '',
  title: 'Herbestemming, restauratie en hoogwaardige nieuwbouw gaan prima samen',
  image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
  type: 'image'
}, {
  id: '6',
  number: '',
  title: '',
  image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
  type: 'drawing'
}, {
  id: '7',
  number: '',
  title: 'Met duurzame keuzes en slimme oplossingen in ontwerp hebben we een aardbeving bestendige nieuwbouw gerealiseerd',
  image: '',
  type: 'image'
}, {
  id: '8',
  number: '',
  title: '',
  image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80',
  type: 'drawing'
}, {
  id: '9',
  number: '',
  title: '',
  image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800&q=80',
  type: 'image'
}, {
  id: '10',
  number: '',
  title: '',
  image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80',
  type: 'image'
}];
const filterCategories: FilterCategory[] = [{
  id: 'architect',
  title: 'Architect',
  options: ['De Zwarte Hond', 'ONIX', 'LAOS', 'MX13', 'Zofa Architecten']
}, {
  id: 'erfgoedstatus',
  title: 'Erfgoedstatus',
  options: ['Rijksmonument', 'Gemeentelijk monument', 'Beschermd stadsgezicht']
}, {
  id: 'bijzonderheden',
  title: 'Bijzonderheden',
  options: ['Duurzaam', 'Renovatie', 'Nieuwbouw', 'Herbestemming']
}, {
  id: 'aannemer',
  title: 'Aannemer',
  options: ['Van Wijnen', 'Dura Vermeer', 'BAM', 'Heijmans']
}];

// @component: GoudGebouwdFeedPage
export const GoudGebouwdFeedPage = (props: GoudGebouwdFeedPageProps) => {
  const [openFilters, setOpenFilters] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const toggleFilter = (filterId: string) => {
    setOpenFilters(prev => prev.includes(filterId) ? prev.filter(id => id !== filterId) : [...prev, filterId]);
  };
  const toggleFilterOption = (categoryId: string, option: string) => {
    setSelectedFilters(prev => {
      const current = prev[categoryId] || [];
      const updated = current.includes(option) ? current.filter(o => o !== option) : [...current, option];
      return {
        ...prev,
        [categoryId]: updated
      };
    });
  };

  // @return
  return <div className={`min-h-screen bg-[#f6f7f3] ${props.className || ''}`}>
      <Navigation currentPage="feed" onNavigate={props.onNavigate} />
      
      <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16 sm:mb-20">
            <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] leading-[0.95] font-bold text-[#4a4237] mb-6 sm:mb-8 tracking-tight overflow-hidden" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.3,
            delay: 0.2
          }}>
              {heroTitleLines.map((line, index) => <motion.span key={line} className="block" initial={{
              y: 100,
              opacity: 0
            }} animate={{
              y: 0,
              opacity: 1
            }} transition={{
              duration: 0.8,
              delay: 0.3 + index * 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}>
                {line}
              </motion.span>)}
            </motion.h1>
            <motion.div className="text-[#4a4237] text-base sm:text-lg leading-relaxed max-w-xl" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 1.1,
            ease: [0.22, 1, 0.36, 1]
          }}>
              <p>
                <span>Welkom bij Fout Gebouwd. Een inspiratiegids</span><br />
                <span>met projecten uit het Groningse</span><br />
                <span>versterkingsgebied, met weinig oog voor</span><br />
                <span>de bewoners en de dorpen. Geselecteerd</span><br />
                <span>door de bewoners van de provincie Groningen,</span><br />
                <span>voor het Nationaal Coördinator Groningen en de politiek in Den Haag.</span>
              </p>
            </motion.div>
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 1.4,
          ease: [0.22, 1, 0.36, 1]
        }}>
            {projects.slice(0, 3).map((project, idx) => <div key={project.id} className="group cursor-pointer">
                {idx === 0 && <div className="bg-[#4a7c59] text-white p-8 mb-6 rounded-sm">
                    <h3 className="text-2xl leading-tight font-medium">
                      <span>Herbestemming,</span><br />
                      <span>restauratie en</span><br />
                      <span>hoogwaardige</span><br />
                      <span>nieuwbouw gaan</span><br />
                      <span>prima samen</span>
                    </h3>
                  </div>}
                <div className="aspect-[4/3] bg-white rounded-sm overflow-hidden mb-3">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="text-sm">
                  <span className="text-[#4a7c59] font-mono">{project.number}</span>
                  <span className="text-[#4a4237] ml-2">{project.title}</span>
                </div>
              </div>)}
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 1.6,
          ease: [0.22, 1, 0.36, 1]
        }}>
            {projects.slice(3, 6).map((project, idx) => <div key={project.id} className="group cursor-pointer">
                {idx === 1 && <div className="bg-[#4a7c59] text-white p-8 mb-6 rounded-sm">
                    <h3 className="text-2xl leading-tight font-medium">
                      <span>Met duurzame keuzes</span><br />
                      <span>en slimme</span><br />
                      <span>oplossingen in</span><br />
                      <span>ontwerp hebben we</span><br />
                      <span>een aardbeving</span><br />
                      <span>bestendige</span><br />
                      <span>nieuwbouw</span><br />
                      <span>gerealiseerd</span>
                    </h3>
                  </div>}
                {project.image && <div className="space-y-3">
                    <div className="aspect-[4/3] bg-white rounded-sm overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    {project.number && <div className="text-sm">
                        <span className="text-[#4a7c59] font-mono">{project.number}</span>
                        <span className="text-[#4a4237] ml-2">{project.title}</span>
                      </div>}
                  </div>}
              </div>)}
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 1.8,
          ease: [0.22, 1, 0.36, 1]
        }}>
            {projects.slice(6).map(project => <div key={project.id} className="group cursor-pointer">
                {project.image && <div className="space-y-3">
                    <div className="aspect-[4/3] bg-white rounded-sm overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    {project.number && <div className="text-sm">
                        <span className="text-[#4a7c59] font-mono">{project.number}</span>
                        <span className="text-[#4a4237] ml-2">{project.title}</span>
                      </div>}
                  </div>}
              </div>)}
          </motion.div>

          <motion.div className="fixed bottom-8 right-8 bg-white rounded-sm shadow-lg p-6 w-80 border border-[#e0e0e0] max-h-[calc(100vh-200px)] overflow-y-auto hidden lg:block" initial={{
          opacity: 0,
          x: 100
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 2,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <div className="text-sm text-[#666] mb-4 font-mono">Filters %</div>
            <div className="space-y-2">
              {filterCategories.map(category => <div key={category.id} className="border-b border-[#e0e0e0] last:border-b-0">
                  <button onClick={() => toggleFilter(category.id)} className="w-full flex justify-between items-center py-3 text-left hover:text-[#4a7c59] transition-colors">
                    <span className="text-sm text-[#4a4237]">{category.title}</span>
                    {openFilters.includes(category.id) ? <Minus className="w-4 h-4 text-[#4a4237]" /> : <Plus className="w-4 h-4 text-[#4a4237]" />}
                  </button>
                  {openFilters.includes(category.id) && <div className="pb-3 space-y-2">
                      {category.options.map(option => <label key={option} className="flex items-center gap-2 cursor-pointer group/option">
                          <input type="checkbox" checked={selectedFilters[category.id]?.includes(option) || false} onChange={() => toggleFilterOption(category.id, option)} className="w-4 h-4 border-2 border-[#4a4237] rounded-none checked:bg-[#4a7c59] checked:border-[#4a7c59] cursor-pointer" />
                          <span className="text-sm text-[#666] group-hover/option:text-[#4a4237]">
                            {option}
                          </span>
                        </label>)}
                    </div>}
                </div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};
