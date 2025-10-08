"use client";

import * as React from "react";
import { motion } from "framer-motion";
export interface NavigationProps {
  currentPage: 'feed' | 'map' | 'index' | 'about';
  onNavigate?: (page: 'feed' | 'map' | 'index' | 'about') => void;
  className?: string;
}
export default function Navigation({
  currentPage,
  onNavigate,
  className = ''
}: NavigationProps) {
  return <motion.nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e8e6dc] ${className}`} initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1]
  }}>
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 py-5 sm:py-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-6 sm:gap-8 lg:gap-12">
            <button onClick={() => onNavigate?.('feed')} className={`text-sm sm:text-base font-medium transition-all duration-300 relative group ${currentPage === 'feed' ? 'text-[#4a7c59]' : 'text-[#6b6b6b] hover:text-[#333]'}`}>
              <span>Feed</span>
              {currentPage === 'feed' && <motion.div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#4a7c59]" layoutId="activeNav" transition={{
              type: "spring",
              stiffness: 380,
              damping: 30
            }} />}
            </button>
            <button onClick={() => onNavigate?.('map')} className={`text-sm sm:text-base font-medium transition-all duration-300 relative group ${currentPage === 'map' ? 'text-[#4a7c59]' : 'text-[#6b6b6b] hover:text-[#333]'}`}>
              <span>Kaart</span>
              {currentPage === 'map' && <motion.div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#4a7c59]" layoutId="activeNav" transition={{
              type: "spring",
              stiffness: 380,
              damping: 30
            }} />}
            </button>
            <button onClick={() => onNavigate?.('index')} className={`text-sm sm:text-base font-medium transition-all duration-300 relative group ${currentPage === 'index' ? 'text-[#4a7c59]' : 'text-[#6b6b6b] hover:text-[#333]'}`}>
              <span>Index</span>
              {currentPage === 'index' && <motion.div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#4a7c59]" layoutId="activeNav" transition={{
              type: "spring",
              stiffness: 380,
              damping: 30
            }} />}
            </button>
          </div>
          <div>
            <button onClick={() => onNavigate?.('about')} className={`text-sm sm:text-base font-medium transition-all duration-300 relative group ${currentPage === 'about' ? 'text-[#4a7c59]' : 'text-[#6b6b6b] hover:text-[#333]'}`}>
              <span>Over</span>
              {currentPage === 'about' && <motion.div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#4a7c59]" layoutId="activeNav" transition={{
              type: "spring",
              stiffness: 380,
              damping: 30
            }} />}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>;
}