import React, { useEffect, useMemo, useState } from 'react';
import { Plus, Minus, Search, ZoomIn, ZoomOut, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
type FilterId = 'architect' | 'erfgoedstatus' | 'bijzonderheden' | 'aannemer';
type MarkerFilters = {
  architect: string;
  erfgoedstatus: string;
  bijzonderheden: string[];
  aannemer: string;
};
type MapMarker = {
  id: string;
  projectNumber: string;
  title: string;
  image: string;
  x: number;
  y: number;
  clusterCount?: number;
  filters: MarkerFilters;
};
type FilterCategory = {
  id: FilterId;
  title: string;
  options: string[];
};
type GoudGebouwdMapPageProps = {
  className?: string;
  onNavigate?: (page: 'feed' | 'map' | 'index' | 'about') => void;
};
const mapMarkers: MapMarker[] = [{
  id: '1',
  projectNumber: '#12',
  title: 'Lauwersoog',
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&q=80',
  x: 32,
  y: 15,
  filters: {
    architect: 'De Zwarte Hond',
    erfgoedstatus: 'Rijksmonument',
    bijzonderheden: ['Nieuwbouw', 'Duurzaam'],
    aannemer: 'Van Wijnen'
  }
}, {
  id: '2',
  projectNumber: '#16',
  title: 'Project',
  image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&q=80',
  x: 46,
  y: 18,
  filters: {
    architect: 'ONIX',
    erfgoedstatus: 'Beschermd stadsgezicht',
    bijzonderheden: ['Renovatie'],
    aannemer: 'Dura Vermeer'
  }
}, {
  id: '3',
  projectNumber: '#13',
  title: 'Winsum',
  image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=200&q=80',
  x: 40,
  y: 28,
  filters: {
    architect: 'LAOS',
    erfgoedstatus: 'Gemeentelijk monument',
    bijzonderheden: ['Herbestemming'],
    aannemer: 'BAM'
  }
}, {
  id: '4',
  projectNumber: '',
  title: 'Uithuizen',
  image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=200&q=80',
  x: 56,
  y: 12,
  clusterCount: 4,
  filters: {
    architect: 'MX13',
    erfgoedstatus: 'Gemeentelijk monument',
    bijzonderheden: ['Renovatie', 'Duurzaam'],
    aannemer: 'BAM'
  }
}, {
  id: '5',
  projectNumber: '#08',
  title: 'Bedum',
  image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=200&q=80',
  x: 62,
  y: 15,
  filters: {
    architect: 'Zofa Architecten',
    erfgoedstatus: 'Rijksmonument',
    bijzonderheden: ['Nieuwbouw'],
    aannemer: 'Heijmans'
  }
}, {
  id: '6',
  projectNumber: '#14',
  title: 'Project',
  image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=200&q=80',
  x: 41,
  y: 35,
  filters: {
    architect: 'De Zwarte Hond',
    erfgoedstatus: 'Gemeentelijk monument',
    bijzonderheden: ['Herbestemming', 'Duurzaam'],
    aannemer: 'Van Wijnen'
  }
}, {
  id: '7',
  projectNumber: '#40',
  title: 'Project',
  image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=200&q=80',
  x: 49,
  y: 35,
  filters: {
    architect: 'ONIX',
    erfgoedstatus: 'Beschermd stadsgezicht',
    bijzonderheden: ['Renovatie'],
    aannemer: 'Dura Vermeer'
  }
}, {
  id: '8',
  projectNumber: '',
  title: 'Overschild',
  image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=200&q=80',
  x: 66,
  y: 32,
  clusterCount: 5,
  filters: {
    architect: 'MX13',
    erfgoedstatus: 'Rijksmonument',
    bijzonderheden: ['Nieuwbouw', 'Duurzaam'],
    aannemer: 'Heijmans'
  }
}, {
  id: '9',
  projectNumber: '#26',
  title: 'Delfzijl',
  image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=200&q=80',
  x: 70,
  y: 28,
  filters: {
    architect: 'LAOS',
    erfgoedstatus: 'Gemeentelijk monument',
    bijzonderheden: ['Renovatie'],
    aannemer: 'Van Wijnen'
  }
}, {
  id: '10',
  projectNumber: '#25',
  title: 'Zuidhorn',
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=200&q=80',
  x: 30,
  y: 50,
  filters: {
    architect: 'Zofa Architecten',
    erfgoedstatus: 'Beschermd stadsgezicht',
    bijzonderheden: ['Herbestemming'],
    aannemer: 'BAM'
  }
}, {
  id: '11',
  projectNumber: '#02',
  title: 'Groningen',
  image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=200&q=80',
  x: 47,
  y: 62,
  filters: {
    architect: 'De Zwarte Hond',
    erfgoedstatus: 'Rijksmonument',
    bijzonderheden: ['Nieuwbouw', 'Duurzaam'],
    aannemer: 'Van Wijnen'
  }
}, {
  id: '12',
  projectNumber: '#34',
  title: 'Project',
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&q=80',
  x: 54,
  y: 67,
  filters: {
    architect: 'MX13',
    erfgoedstatus: 'Gemeentelijk monument',
    bijzonderheden: ['Renovatie'],
    aannemer: 'Heijmans'
  }
}, {
  id: '13',
  projectNumber: '#17',
  title: 'Hoogezand',
  image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=200&q=80',
  x: 62,
  y: 69,
  filters: {
    architect: 'ONIX',
    erfgoedstatus: 'Rijksmonument',
    bijzonderheden: ['Renovatie', 'Duurzaam'],
    aannemer: 'Dura Vermeer'
  }
}, {
  id: '14',
  projectNumber: '#27',
  title: 'Drieborg',
  image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=200&q=80',
  x: 88,
  y: 60,
  filters: {
    architect: 'Zofa Architecten',
    erfgoedstatus: 'Gemeentelijk monument',
    bijzonderheden: ['Herbestemming'],
    aannemer: 'Heijmans'
  }
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

// @component: GoudGebouwdMapPage
export const GoudGebouwdMapPage = (props: GoudGebouwdMapPageProps) => {
  const [openFilters, setOpenFilters] = useState<FilterId[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Record<FilterId, string[]>>({
    architect: [],
    erfgoedstatus: [],
    bijzonderheden: [],
    aannemer: []
  });
  const [searchValue, setSearchValue] = useState('');
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const toggleFilter = (filterId: FilterId) => {
    setOpenFilters(prev => prev.includes(filterId) ? prev.filter(id => id !== filterId) : [...prev, filterId]);
  };
  const toggleFilterOption = (categoryId: FilterId, option: string) => {
    setSelectedFilters(prev => {
      const current = prev[categoryId] || [];
      const updated = current.includes(option) ? current.filter(o => o !== option) : [...current, option];
      return {
        ...prev,
        [categoryId]: updated
      };
    });
  };
  const handleClearFilters = () => {
    setSelectedFilters({
      architect: [],
      erfgoedstatus: [],
      bijzonderheden: [],
      aannemer: []
    });
    setOpenFilters([]);
  };
  const handleZoomIn = () => {
    setZoomLevel(prev => {
      const next = Math.min(1.8, +(prev + 0.2).toFixed(2));
      return next;
    });
  };
  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const next = Math.max(0.6, +(prev - 0.2).toFixed(2));
      return next;
    });
  };
  const activeFilterCount = useMemo(() => Object.values(selectedFilters).reduce((total, options) => total + options.length, 0), [selectedFilters]);
  const filteredMarkers = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase();
    return mapMarkers.filter(marker => {
      const matchesSearch = normalizedSearch === '' || marker.title.toLowerCase().includes(normalizedSearch) || marker.projectNumber.toLowerCase().includes(normalizedSearch);
      const matchesFilters = Object.entries(selectedFilters).every(([categoryId, options]) => {
        if (options.length === 0) {
          return true;
        }
        const value = marker.filters[categoryId as FilterId];
        if (Array.isArray(value)) {
          return options.some(option => value.includes(option));
        }
        return options.includes(value);
      });
      return matchesSearch && matchesFilters;
    });
  }, [searchValue, selectedFilters]);
  useEffect(() => {
    if (hoveredMarker && !filteredMarkers.some(marker => marker.id === hoveredMarker)) {
      setHoveredMarker(null);
    }
  }, [filteredMarkers, hoveredMarker]);
  const renderFilters = () => <div className="space-y-2">
      {filterCategories.map(category => <div key={category.id} className="border-b border-[#e0e0e0] last:border-b-0">
          <button type="button" onClick={() => toggleFilter(category.id)} className="w-full flex justify-between items-center py-3 text-left hover:text-[#4a7c59] transition-colors">
            <span className="text-sm text-[#4a4237]">{category.title}</span>
            {openFilters.includes(category.id) ? <Minus className="w-4 h-4 text-[#4a4237]" /> : <Plus className="w-4 h-4 text-[#4a4237]" />}
          </button>
          {openFilters.includes(category.id) && <div className="pb-3 space-y-2">
              {category.options.map(option => <label key={option} className="flex items-center gap-2 cursor-pointer group/option">
                  <input type="checkbox" checked={selectedFilters[category.id].includes(option)} onChange={() => toggleFilterOption(category.id, option)} className="w-4 h-4 border-2 border-[#4a4237] rounded-none checked:bg-[#4a7c59] checked:border-[#4a7c59] cursor-pointer" />
                  <span className="text-sm text-[#666] group-hover/option:text-[#4a4237]">
                    {option}
                  </span>
                </label>)}
            </div>}
        </div>)}
    </div>;

  // @return
  return <div className={`h-screen bg-[#f6f7f3] overflow-hidden ${props.className || ''}`}>
      <Navigation currentPage="map" onNavigate={props.onNavigate} />

      <div className="h-full flex flex-col pt-[68px]">
        <div className="flex-1 relative">
          <motion.div className="absolute inset-0 bg-[#e8e6dc]" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }}>
            <div className="w-full h-full origin-center transition-transform duration-300 ease-out" style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'center center'
          }}>
              <svg viewBox="0 0 1600 900" className="w-full h-full" style={{
              filter: 'saturate(0.8) brightness(0.98)'
            }}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d0cfc5" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              
              <rect width="1600" height="900" fill="url(#grid)" />
              
              <path d="M 200 150 Q 300 100 450 130 L 600 120 Q 750 140 850 180 L 950 200 Q 1050 190 1150 210 L 1350 240" fill="none" stroke="#b0afa5" strokeWidth="2" strokeDasharray="8,4" opacity="0.4" />
              
              <path d="M 150 700 Q 250 680 350 690 L 500 685 Q 650 700 750 695 L 900 700" fill="none" stroke="#b0afa5" strokeWidth="2" strokeDasharray="8,4" opacity="0.4" />
              
              <ellipse cx="400" cy="250" rx="120" ry="80" fill="#c8d5c0" opacity="0.15" />
              <ellipse cx="900" cy="400" rx="150" ry="100" fill="#c8d5c0" opacity="0.15" />
              <ellipse cx="600" cy="650" rx="100" ry="70" fill="#c8d5c0" opacity="0.15" />

              {filteredMarkers.map(marker => <g key={marker.id}>
                  <motion.g initial={{
                scale: 0,
                opacity: 0
              }} animate={{
                scale: 1,
                opacity: 1
              }} transition={{
                duration: 0.5,
                delay: 0.3 + parseInt(marker.id, 10) * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }} onMouseEnter={() => setHoveredMarker(marker.id)} onMouseLeave={() => setHoveredMarker(null)} style={{
                cursor: 'pointer'
              }}>
                    {marker.clusterCount ? <circle cx={`${marker.x}%`} cy={`${marker.y}%`} r="24" fill="#4a7c59" stroke="white" strokeWidth="3" /> : <g>
                        <circle cx={`${marker.x}%`} cy={`${marker.y}%`} r="6" fill="#4a7c59" stroke="white" strokeWidth="2" />
                        {marker.image && <g>
                            <rect x={`${marker.x - 3}%`} y={`${marker.y - 8}%`} width="60" height="45" fill="white" stroke="#4a7c59" strokeWidth="2" rx="2" />
                            <image href={marker.image} x={`${marker.x - 2.8}%`} y={`${marker.y - 7.5}%`} width="56" height="40" preserveAspectRatio="xMidYMid slice" clipPath="inset(0 round 2px)" />
                          </g>}
                      </g>}
                    
                    {marker.clusterCount && <text x={`${marker.x}%`} y={`${marker.y}%`} textAnchor="middle" dominantBaseline="central" fill="white" fontSize="14" fontWeight="600">
                        {marker.clusterCount}
                      </text>}
                    
                    {marker.projectNumber && <text x={`${marker.x}%`} y={`${marker.y + (marker.image ? 5 : 2)}%`} textAnchor="middle" fill="#4a7c59" fontSize="11" fontWeight="500" fontFamily="monospace">
                        {marker.projectNumber}
                      </text>}
                  </motion.g>
                  
                    {hoveredMarker === marker.id && !marker.clusterCount && <motion.g initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.2
              }}>
                      <rect x={`${marker.x - 4}%`} y={`${marker.y - 12}%`} width="100" height="30" fill="white" stroke="#4a7c59" strokeWidth="1" rx="4" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))" />
                      <text x={`${marker.x - 3}%`} y={`${marker.y - 8}%`} fill="#4a4237" fontSize="10" fontWeight="500">
                        {marker.title}
                      </text>
                    </motion.g>}
                </g>)}
              </svg>
            </div>
          </motion.div>

          {filteredMarkers.length === 0 && <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/95 border border-[#e0e0e0] rounded-sm px-6 py-4 text-sm text-[#4a4237] shadow-lg">
                Geen projecten gevonden. Pas de filters of zoekopdracht aan.
              </div>
            </div>}

          <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 flex-col sm:flex-row w-full max-w-md px-4 sm:px-0" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }}>
            <div className="bg-white rounded-sm shadow-lg border border-[#e0e0e0] flex items-center gap-2 px-4 py-3 flex-1">
              <Search className="w-4 h-4 text-[#666] flex-shrink-0" />
              <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Zoek op plaats" className="flex-1 text-sm text-[#4a4237] placeholder:text-[#999] outline-none bg-transparent" />
            </div>

            <button type="button" onClick={() => setIsMobileFiltersOpen(prev => !prev)} className="bg-white rounded-sm shadow-lg border border-[#e0e0e0] px-4 py-3 hover:bg-[#f6f7f3] transition-colors lg:hidden" aria-expanded={isMobileFiltersOpen} aria-controls="map-mobile-filters">
              <span className="text-sm text-[#4a4237] font-medium">Filters{activeFilterCount ? ` (${activeFilterCount})` : ''}</span>
            </button>
          </motion.div>

          <motion.div className="absolute bottom-8 right-8 flex flex-col gap-2" initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }}>
            <button type="button" onClick={handleZoomIn} disabled={zoomLevel >= 1.8} className={`bg-white rounded-sm shadow-lg border border-[#e0e0e0] p-3 transition-colors ${zoomLevel >= 1.8 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f6f7f3]'}`} aria-label="Zoom in">
              <ZoomIn className="w-5 h-5 text-[#4a4237]" />
            </button>
            <button type="button" onClick={handleZoomOut} disabled={zoomLevel <= 0.6} className={`bg-white rounded-sm shadow-lg border border-[#e0e0e0] p-3 transition-colors ${zoomLevel <= 0.6 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f6f7f3]'}`} aria-label="Zoom uit">
              <ZoomOut className="w-5 h-5 text-[#4a4237]" />
            </button>
          </motion.div>

          <motion.div className="absolute top-8 right-8 bg-white rounded-sm shadow-lg p-6 w-80 border border-[#e0e0e0] max-h-[calc(100vh-200px)] overflow-y-auto hidden lg:block" initial={{
          opacity: 0,
          x: 100
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 1
        }}>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-[#666] font-mono">Filters{activeFilterCount ? ` (${activeFilterCount})` : ''}</div>
              <button type="button" onClick={handleClearFilters} className="text-xs uppercase tracking-wide text-[#4a7c59] hover:text-[#2f5238]">
                Reset
              </button>
            </div>
            {renderFilters()}
          </motion.div>

          {isMobileFiltersOpen && <div id="map-mobile-filters" className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-end sm:items-center justify-center lg:hidden z-10" role="dialog" aria-modal="true">
              <div className="bg-white rounded-t-sm sm:rounded-sm shadow-2xl w-full sm:max-w-sm max-h-[70vh] overflow-y-auto p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-[#4a4237] font-medium">Filters{activeFilterCount ? ` (${activeFilterCount})` : ''}</div>
                  <button type="button" onClick={() => setIsMobileFiltersOpen(false)} className="text-[#4a4237] hover:text-[#2f5238]">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                {renderFilters()}
                <div className="flex items-center justify-between gap-3 pt-4">
                  <button type="button" onClick={handleClearFilters} className="px-4 py-2 border border-[#e0e0e0] rounded-sm text-sm text-[#4a4237] hover:border-[#4a7c59] hover:text-[#4a7c59]">
                    Reset
                  </button>
                  <button type="button" onClick={() => setIsMobileFiltersOpen(false)} className="px-4 py-2 bg-[#4a7c59] text-white rounded-sm text-sm hover:bg-[#3a6647]">
                    Toepassen
                  </button>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>;
};