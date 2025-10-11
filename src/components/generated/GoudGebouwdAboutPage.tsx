"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
export interface GoudGebouwdAboutPageProps {
  className?: string;
  onNavigate?: (page: 'feed' | 'map' | 'index' | 'about') => void;
}
export const GoudGebouwdAboutPage = (props: GoudGebouwdAboutPageProps) => {
  return <div className={`min-h-screen bg-[#f6f7f3] ${props.className || ''}`}>
      <Navigation currentPage="about" onNavigate={props.onNavigate} />
      
      <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div className="mb-16 sm:mb-20 lg:mb-24" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#4a4237] mb-8 sm:mb-12 tracking-tight leading-[0.95]">
              <span className="block">OVER FOUT</span>
              <span className="block">GEBOUWD</span>
            </h1>
          </motion.div>

          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }}>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4a4237] mb-6">
                <span>Wat is Fout Gebouwd?</span>
              </h2>
              <div className="space-y-6 text-[#6b6b6b] text-base sm:text-lg leading-relaxed">
                <p>
                  <span>Fout Gebouwd is een inspiratiegids die projecten</span><br />
                  <span>toont uit het Groningse versterkingsgebied</span><br />
                  <span>die zijn uitgevoerd met oog voor ruimtelijke</span><br />
                  <span>kwaliteit en karakter.</span>
                </p>
                <p>
                  <span>Na de aardbevingen in Groningen is er veel</span><br />
                  <span>aandacht gekomen voor het versterken van</span><br />
                  <span>gebouwen. Dit platform toont hoe dat op een</span><br />
                  <span>inspirerende en kwalitatieve manier kan.</span>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4a4237] mb-6">
                <span>Selectie criteria</span>
              </h2>
              <div className="space-y-6 text-[#6b6b6b] text-base sm:text-lg leading-relaxed">
                <p>
                  <span>De projecten zijn geselecteerd door het atelier</span><br />
                  <span>van de regiobouwmeester, onderdeel van</span><br />
                  <span>Nationaal Coördinator Groningen.</span>
                </p>
                <p>
                  <span>Elk project voldoet aan hoge standaarden op</span><br />
                  <span>het gebied van architectonische kwaliteit,</span><br />
                  <span>duurzaamheid en respect voor het lokale karakter.</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-[#4a7c59] text-white p-10 sm:p-12 lg:p-16 rounded-sm mb-20" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.4
        }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              <span>Onze missie</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl">
              <span>Het inspireren en informeren van NCG en IMG,</span><br />
              <span>overheid en andere professionals over de</span><br />
              <span>gang van zaken bij versterking en</span><br />
              <span>nieuwbouw in het Groningse landschap.</span>
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-20" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.6
        }}>
            <div className="bg-white p-8 rounded-sm border border-[#e0e0e0]">
              <div className="text-4xl sm:text-5xl font-bold text-[#4a7c59] mb-4">
                <span>50+</span>
              </div>
              <h3 className="text-lg font-semibold text-[#4a4237] mb-3">
                <span>Projecten</span>
              </h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                <span>Zorgvuldig geselecteerde</span><br />
                <span>voorbeeldprojecten uit</span><br />
                <span>de hele regio</span>
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-[#e0e0e0]">
              <div className="text-4xl sm:text-5xl font-bold text-[#4a7c59] mb-4">
                <span>100+</span>
              </div>
              <h3 className="text-lg font-semibold text-[#4a4237] mb-3">
                <span>Architecten</span>
              </h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                <span>Betrokken bij de</span><br />
                <span>realisatie van deze</span><br />
                <span>inspirerende werken</span>
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-[#e0e0e0]">
              <div className="text-4xl sm:text-5xl font-bold text-[#4a7c59] mb-4">
                <span>2019</span>
              </div>
              <h3 className="text-lg font-semibold text-[#4a4237] mb-3">
                <span>Start initiatief</span>
              </h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                <span>Sinds de oprichting</span><br />
                <span>inspireren we de regio</span><br />
                <span>met kwalitatieve bouw</span>
              </p>
            </div>
          </motion.div>

          <motion.div className="border-t border-[#e0e0e0] pt-12" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.8
        }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4a4237] mb-8">
              <span>Contact</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-[#4a4237] mb-3">
                  <span>Team van Fout Gebouwd</span>
                </h3>
                <div className="text-[#6b6b6b] space-y-2">
                  <p>
                    <span>Atelier Regiobouwmeester</span>
                  </p>
                  <p>
                    <span>Cascadeplein 10</span><br />
                    <span>9726 AD Groningen</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#4a4237] mb-3">
                  <span>Meer informatie</span>
                </h3>
                <div className="text-[#6b6b6b] space-y-2">
                  <p>
                    <span>info@foutgebouwd.nl</span>
                  </p>
                  <p>
                    <span>www.nationaalcoordinatorgroningen.nl</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};
