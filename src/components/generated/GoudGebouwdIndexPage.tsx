"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
export interface GoudGebouwdIndexPageProps {
  className?: string;
  onNavigate?: (page: 'feed' | 'map' | 'index' | 'about') => void;
}
type Project = {
  id: string;
  number: string;
  title: string;
  location: string;
  architect: string;
  year: string;
  category: string;
};
const projects: Project[] = [{
  id: '1',
  number: '#01',
  title: 'Herbestemming voormalige school',
  location: 'Garrelsweer',
  architect: 'De Zwarte Hond',
  year: '2021',
  category: 'Herbestemming'
}, {
  id: '2',
  number: '#02',
  title: 'Restauratie gemeentehuis',
  location: 'Garrelsweer',
  architect: 'ONIX',
  year: '2022',
  category: 'Restauratie'
}, {
  id: '3',
  number: '#03',
  title: 'Nieuwbouw wooncomplex',
  location: 'Garrelsweer',
  architect: 'LAOS',
  year: '2020',
  category: 'Nieuwbouw'
}, {
  id: '4',
  number: '#04',
  title: 'Verbouwing boerderij',
  location: 'Garrelsweer',
  architect: 'MX13',
  year: '2021',
  category: 'Renovatie'
}, {
  id: '5',
  number: '#05',
  title: 'Duurzaam appartementencomplex',
  location: 'Garrelsweer',
  architect: 'Zofa Architecten',
  year: '2023',
  category: 'Nieuwbouw'
}, {
  id: '6',
  number: '#06',
  title: 'Monumentale kerk herbestemming',
  location: 'Garrelsweer',
  architect: 'De Zwarte Hond',
  year: '2022',
  category: 'Herbestemming'
}, {
  id: '7',
  number: '#07',
  title: 'Wilgenbos woonwijk',
  location: 'Garrelsweer',
  architect: 'ONIX',
  year: '2021',
  category: 'Nieuwbouw'
}, {
  id: '8',
  number: '#08',
  title: 'Rijksmonument restauratie',
  location: 'Garrelsweer',
  architect: 'LAOS',
  year: '2020',
  category: 'Restauratie'
}, {
  id: '9',
  number: '#09',
  title: 'Aardbevingsbestendige woningen',
  location: 'Garrelsweer',
  architect: 'MX13',
  year: '2023',
  category: 'Nieuwbouw'
}, {
  id: '10',
  number: '#10',
  title: 'Dorpscentrum vernieuwing',
  location: 'Garrelsweer',
  architect: 'Zofa Architecten',
  year: '2022',
  category: 'Renovatie'
}, {
  id: '11',
  number: '#11',
  title: 'Verduurzaming gemeentehuis',
  location: 'Garrelsweer',
  architect: 'De Zwarte Hond',
  year: '2021',
  category: 'Renovatie'
}, {
  id: '12',
  number: '#12',
  title: 'Historisch pakhuis herbestemming',
  location: 'Garrelsweer',
  architect: 'ONIX',
  year: '2023',
  category: 'Herbestemming'
}];
export const GoudGebouwdIndexPage = (props: GoudGebouwdIndexPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const categories = ['all', 'Nieuwbouw', 'Renovatie', 'Herbestemming', 'Restauratie'];
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = searchQuery === '' || project.title.toLowerCase().includes(searchQuery.toLowerCase()) || project.location.toLowerCase().includes(searchQuery.toLowerCase()) || project.architect.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return <div className={`min-h-screen bg-[#f6f7f3] ${props.className || ''}`}>
      <Navigation currentPage="index" onNavigate={props.onNavigate} />
      
      <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div className="mb-12 sm:mb-16 lg:mb-20" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#4a4237] mb-6 sm:mb-8 tracking-tight leading-[0.95]">
              <span className="block">PROJECT</span>
              <span className="block">INDEX</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6b6b6b] max-w-2xl leading-relaxed">
              <span>Een overzicht van alle geselecteerde projecten</span><br />
              <span>uit het Groningse versterkingsgebied.</span>
            </p>
          </motion.div>

          <motion.div className="mb-8 sm:mb-12 flex flex-col sm:flex-row gap-4 sm:gap-6" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <div className="flex-1">
              <input type="text" placeholder="Zoek op project, locatie of architect..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-6 py-4 bg-white border border-[#e0e0e0] rounded-sm text-[#4a4237] placeholder:text-[#999] focus:outline-none focus:border-[#4a7c59] transition-colors" />
            </div>
          </motion.div>

          <motion.div className="flex flex-wrap gap-3 mb-12 sm:mb-16" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-3 rounded-sm text-sm font-medium transition-all duration-300 ${selectedCategory === category ? 'bg-[#4a7c59] text-white shadow-md' : 'bg-white text-[#6b6b6b] border border-[#e0e0e0] hover:border-[#4a7c59] hover:text-[#4a7c59]'}`}>
                <span>{category === 'all' ? 'Alle projecten' : category}</span>
              </button>)}
          </motion.div>

          <motion.div className="space-y-3" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            {filteredProjects.map((project, index) => <motion.div key={project.id} className="bg-white border border-[#e0e0e0] rounded-sm overflow-hidden hover:shadow-lg hover:border-[#4a7c59] transition-all duration-300 cursor-pointer group" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.5 + index * 0.05
          }}>
                <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center">
                  <div className="sm:col-span-1">
                    <span className="text-[#4a7c59] font-mono text-sm font-medium">
                      {project.number}
                    </span>
                  </div>
                  <div className="sm:col-span-5">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#4a4237] group-hover:text-[#4a7c59] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-sm text-[#6b6b6b]">
                      {project.location}
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-sm text-[#6b6b6b]">
                      {project.architect}
                    </p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-sm text-[#6b6b6b]">
                      {project.year}
                    </p>
                  </div>
                  <div className="sm:col-span-1">
                    <span className="inline-block px-3 py-1 bg-[#f6f7f3] text-[#4a7c59] text-xs font-medium rounded-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>)}
          </motion.div>

          {filteredProjects.length === 0 && <motion.div className="text-center py-20" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6
        }}>
              <p className="text-[#6b6b6b] text-lg">
                <span>Geen projecten gevonden.</span>
              </p>
            </motion.div>}
        </div>
      </div>
    </div>;
};
