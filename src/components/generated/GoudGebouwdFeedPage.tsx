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
const heroTitleLines = ['GOUD', 'GEBOUWD'];
const projects: Project[] = [{
  id: '1',
  number: '#09',
  title: 'Ten Boer',
  image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  type: 'drawing'
}, {
  id: '2',
  number: '#07',
  title: 'Garrelsweer',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Platanenweer%2C_a_national_monument_in_the_municipality_of_Eemsmond.jpg/800px-Platanenweer%2C_a_national_monument_in_the_municipality_of_Eemsmond.jpg',
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
  title: 'Lange stiltes, slechte communicatie en veel onzekerheden gaan helaas samen',
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
const IMAGE_DIMENSION = 800;
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
type FeedLayout = 'square' | 'tall' | 'wide';
type FeedItem = {
  kind: 'project';
  id: string;
  layout: FeedLayout;
  project: Project;
} | {
  kind: 'text';
  id: string;
  layout: FeedLayout;
  theme: 'gold' | 'green';
  heading: string[];
  kicker?: string;
};
const layoutClassMap: Record<FeedLayout, string> = {
  square: '',
  tall: 'sm:row-span-2',
  wide: 'sm:col-span-2'
};
const mediaMinHeight: Record<FeedLayout, string> = {
  square: 'min-h-[200px] sm:min-h-[240px] lg:min-h-[260px]',
  tall: 'min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]',
  wide: 'min-h-[200px] sm:min-h-[220px] lg:min-h-[260px]'
};
const textThemeClasses = {
  gold: {
    container: 'bg-[#e0d4b8] text-[#342a18]',
    kicker: 'text-[#8a5a1a]'
  },
  green: {
    container: 'bg-[#d5e2d3] text-[#26372a]',
    kicker: 'text-[#3f6a4c]'
  }
};
const feedItems: FeedItem[] = [{
  kind: 'text',
  id: 'message-1',
  layout: 'tall',
  theme: 'gold',
  kicker: 'Bewoners aan het woord',
  heading: ['Slechte communicatie,', 'lang wachten,', 'hoge kosten', 'en veel stress gaan', 'helaas samen']
}, {
  kind: 'project',
  id: projects[0].id,
  layout: 'tall',
  project: projects[0]
}, {
  kind: 'project',
  id: projects[1].id,
  layout: 'square',
  project: projects[1]
}, {
  kind: 'project',
  id: projects[2].id,
  layout: 'wide',
  project: projects[2]
}, {
  kind: 'project',
  id: projects[3].id,
  layout: 'square',
  project: projects[3]
}, {
  kind: 'text',
  id: 'message-2',
  layout: 'wide',
  theme: 'green',
  kicker: 'Vooruit met elkaar',
  heading: ['Met duurzame keuzes', 'en slimme oplossingen', 'hebben we een aardbeving', 'bestendige nieuwbouw gerealiseerd']
}, {
  kind: 'project',
  id: projects[4].id,
  layout: 'square',
  project: projects[4]
}, {
  kind: 'project',
  id: projects[5].id,
  layout: 'tall',
  project: projects[5]
}, {
  kind: 'project',
  id: projects[6].id,
  layout: 'square',
  project: projects[6]
}, {
  kind: 'project',
  id: projects[7].id,
  layout: 'square',
  project: projects[7]
}, {
  kind: 'project',
  id: projects[8].id,
  layout: 'wide',
  project: projects[8]
}, {
  kind: 'project',
  id: projects[9].id,
  layout: 'square',
  project: projects[9]
}];
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
  return (
    <div className={`min-h-screen bg-[#f3efe3] ${props.className || ''}`}>
      <Navigation currentPage="feed" onNavigate={props.onNavigate} />

      <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
            <div>
              <div className="mb-16 sm:mb-20">
                <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] leading-[0.92] font-bold text-[#2e2616] mb-6 sm:mb-8 tracking-tight overflow-hidden" initial={{
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
                  <span>Goud Gebouwd verzamelt voorbeelden van herstel en vernieuwing</span><br />
                  <span>uit het Groningse versterkingsgebied. Een plek om te laten zien</span><br />
                  <span>wat bewoners, architecten en bouwers samen voor elkaar krijgen,</span><br />
                  <span>en hoe we dorpen toekomstbestendig maken.</span>
                </p>
              </motion.div>
            </div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[220px] sm:auto-rows-[250px]" initial={{
            opacity: 0,
            y: 24
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}>
              {feedItems.map((item, index) => {
          const delay = 1.25 + index * 0.05;
          if (item.kind === 'text') {
            const theme = textThemeClasses[item.theme];
            return <motion.div key={item.id} className={`flex flex-col justify-between rounded-xl p-8 shadow-md ${layoutClassMap[item.layout]} ${theme.container}`} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay
          }}>
                    {item.kicker && <span className={`text-xs uppercase tracking-[0.3em] font-semibold ${theme.kicker}`}>
                        {item.kicker}
                      </span>}
                    <div className="mt-6 space-y-1 text-2xl sm:text-[26px] leading-snug font-medium">
                      {item.heading.map(line => <div key={line}>{line}</div>)}
                    </div>
                  </motion.div>;
          }
          return <motion.article key={item.id} className={`group flex flex-col ${layoutClassMap[item.layout]}`} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay
          }}>
                    <div className={`flex h-full flex-col rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg`}>
                      <div className={`relative flex-1 overflow-hidden rounded-t-xl ${mediaMinHeight[item.layout]}`}>
                        {item.project.image ? <img src={item.project.image} alt={item.project.title || 'Projectvisualisatie'} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /> : <div className="absolute inset-0 flex items-center justify-center bg-[#f1ede1] text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8a7f65]">
                            Geen beeld beschikbaar
                          </div>}
                      </div>
                      <div className="px-5 py-4 flex items-center gap-3 text-sm">
                        {item.project.number && <span className="font-mono uppercase tracking-wide text-[#7a6b4d]">{item.project.number}</span>}
                        <span className="text-[#3d3525] font-medium leading-snug">{item.project.title || 'Project in voorbereiding'}</span>
                      </div>
                    </div>
                  </motion.article>;
        })}
            </motion.div>
          </div>

          <motion.aside className="hidden lg:block" initial={{
            opacity: 0,
            x: 60
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 1.8,
            ease: [0.22, 1, 0.36, 1]
          }}>
            <div className="sticky top-32 space-y-6">
              <div className="rounded-xl border border-[#d9d4c5] bg-white/80 shadow-sm backdrop-blur-sm">
                <div className="border-b border-[#d9d4c5] px-6 py-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a5a1a]">Filters</div>
                  <p className="mt-2 text-sm text-[#6f6653] leading-relaxed">Verfijn projecten op architect, erfgoedstatus en meer om inspiratie sneller te vinden.</p>
                </div>
                <div className="px-6 py-4">
                  <div className="space-y-4">
                    {filterCategories.map(category => <div key={category.id} className="border-b border-[#ece7da] pb-4 last:border-b-0 last:pb-0">
                        <button onClick={() => toggleFilter(category.id)} className="flex w-full items-center justify-between text-left text-sm font-medium text-[#3d3525] transition-colors hover:text-[#8a5a1a]">
                          <span>{category.title}</span>
                          {openFilters.includes(category.id) ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </button>
                        {openFilters.includes(category.id) && <div className="mt-3 space-y-2">
                            {category.options.map(option => {
            const checked = selectedFilters[category.id]?.includes(option) || false;
            return <label key={option} className="flex items-center gap-3 text-sm text-[#6f6653] transition-colors hover:text-[#3d3525]">
                                <input type="checkbox" checked={checked} onChange={() => toggleFilterOption(category.id, option)} className="h-4 w-4 rounded-sm border border-[#b8af9a] text-[#8a5a1a] focus:ring-[#8a5a1a]" />
                                <span>{option}</span>
                              </label>;
          })}
                          </div>}
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
      </div>
    </div>
    );
  };
