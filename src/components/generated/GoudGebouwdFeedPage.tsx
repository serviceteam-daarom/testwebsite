import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Filter, X } from 'lucide-react';
import Navigation from './Navigation';

type Project = {
  id: string;
  number: string;
  title: string;
  location: string;
  description: string;
  image: string;
  tags: string[];
};

type FilterGroup = {
  id: string;
  title: string;
  options: string[];
};

type Story = {
  id: string;
  kicker: string;
  quote: string;
  author: string;
};

type ProgrammeHighlight = {
  id: string;
  title: string;
  copy: string;
};

type GoudGebouwdFeedPageProps = {
  className?: string;
  onNavigate?: (page: 'feed' | 'map' | 'index' | 'about') => void;
};

const heroCopy = [
  'Goud Gebouwd zet geslaagde versterkingsprojecten in de schijnwerpers.',
  'Samen met bewoners, ontwerpers en bouwers maken we het Groningse landschap weerbaar, veilig en prachtig om in te wonen.'
];

const heroHighlights = [
  { label: 'Architectenpartners', value: '17' },
  { label: 'Bewoners betrokken', value: '1.200+' },
  { label: 'Dorpskernen', value: '13' }
];

const stats = [
  { label: 'Projecten opgeleverd', value: '48' },
  { label: 'Projecten in uitvoering', value: '21' },
  { label: 'Bewonersverhalen', value: '32' },
  { label: 'Collectieve trajecten', value: '9' }
];

const filterGroups: FilterGroup[] = [
  {
    id: 'type',
    title: 'Type project',
    options: ['Nieuwbouw', 'Herbestemming', 'Renovatie', 'Versterking']
  },
  {
    id: 'status',
    title: 'Status',
    options: ['Opgeleverd', 'In uitvoering']
  },
  {
    id: 'architect',
    title: 'Architect',
    options: ['De Zwarte Hond', 'NOHNIK', 'Onix', 'KAW', 'Studio WA']
  },
  {
    id: 'thema',
    title: 'Thema',
    options: ['Erfgoed', 'Duurzaam', 'Collectief', 'Landschap']
  }
];

const optionToGroup = filterGroups.reduce<Record<string, string>>((map, group) => {
  group.options.forEach(option => {
    map[option] = group.id;
  });
  return map;
}, {});

const projects: Project[] = [
  {
    id: 'project-ten-boer',
    number: '#01',
    title: 'Dorpshuis Ten Boer',
    location: 'Ten Boer',
    description: 'Nieuw dorpshuis met collectieve ruimtes voor ontmoeting en cultuur.',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=960&q=80',
    tags: ['Nieuwbouw', 'Opgeleverd', 'Collectief', 'De Zwarte Hond']
  },
  {
    id: 'project-garrelsweer',
    number: '#02',
    title: 'Herstel Platanenweer',
    location: 'Garrelsweer',
    description: 'Versterking en restauratie van de monumentale boerderij Platanenweer.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Platanenweer%2C_a_national_monument_in_the_municipality_of_Eemsmond.jpg/1024px-Platanenweer%2C_a_national_monument_in_the_municipality_of_Eemsmond.jpg',
    tags: ['Herbestemming', 'Opgeleverd', 'Erfgoed', 'Onix']
  },
  {
    id: 'project-uithuizen',
    number: '#03',
    title: 'Sterke school Uithuizen',
    location: 'Uithuizen',
    description: 'Toekomstbestendige school met ruimte voor buitenonderwijs en sport.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=960&q=80',
    tags: ['Nieuwbouw', 'In uitvoering', 'Duurzaam', 'KAW']
  },
  {
    id: 'project-zuidwolde',
    number: '#04',
    title: 'Wierdewoningen Zuidwolde',
    location: 'Zuidwolde',
    description: 'Aardbevingsbestendige woningen rond de historische wierde.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=960&q=80',
    tags: ['Versterking', 'In uitvoering', 'Landschap', 'NOHNIK']
  },
  {
    id: 'project-loppersum',
    number: '#05',
    title: 'Centrumplan Loppersum',
    location: 'Loppersum',
    description: 'Herinrichting van het centrum met aandacht voor erfgoed en verblijfskwaliteit.',
    image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=960&q=80',
    tags: ['Herbestemming', 'In uitvoering', 'Erfgoed', 'Studio WA']
  },
  {
    id: 'project-bierum',
    number: '#06',
    title: 'Bewonerscollectief Bierum',
    location: 'Bierum',
    description: 'Collectief versterkingsplan waarbij bewoners samen keuzes maken.',
    image: 'https://images.unsplash.com/photo-1465800872432-2f3d8880f768?w=960&q=80',
    tags: ['Versterking', 'Opgeleverd', 'Collectief', 'Onix']
  },
  {
    id: 'project-zeerijp',
    number: '#07',
    title: 'Pastorie Zeerijp',
    location: 'Zeerijp',
    description: 'Restauratie met duurzame installaties en behoud van historische kwaliteiten.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=960&q=80',
    tags: ['Herbestemming', 'Opgeleverd', 'Erfgoed', 'De Zwarte Hond']
  },
  {
    id: 'project-middelstum',
    number: '#08',
    title: 'Dorpshuis Middelstum',
    location: 'Middelstum',
    description: 'Hergebruik van een karakteristieke boerderij als dorpshuis en zorgpunt.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=960&q=80',
    tags: ['Herbestemming', 'Opgeleverd', 'Collectief', 'NOHNIK']
  }
];

const stories: Story[] = [
  {
    id: 'story-ten-boer',
    kicker: 'Bewoners aan het woord',
    quote: 'We hebben eindelijk een veilig huis waar we elkaar kunnen ontmoeten. Het voelt alsof het dorp weer klopt.',
    author: 'Sjoukje, Ten Boer'
  },
  {
    id: 'story-loppersum',
    kicker: 'Proces',
    quote: 'De ontwerpers luisterden naar iedere wens en vertaalden dat naar een plan dat past in onze dorpskern.',
    author: 'Herman, Loppersum'
  },
  {
    id: 'story-garrelsweer',
    kicker: 'Vakmanschap',
    quote: 'De restauratie brengt de ziel van de boerderij terug en maakt hem klaar voor de toekomst.',
    author: 'Nienke, Garrelsweer'
  }
];

const programmeHighlights: ProgrammeHighlight[] = [
  {
    id: 'highlight-collectief',
    title: 'Collectieve aanpak',
    copy: 'Bewoners, gemeente en ontwerpers werken nauw samen zodat iedere versterking meerwaarde oplevert voor het dorp.'
  },
  {
    id: 'highlight-vakmanschap',
    title: 'Vakmanschap & erfgoed',
    copy: 'We versterken monumenten met respect voor historie en voegen nieuwe functies toe die het verhaal levend houden.'
  },
  {
    id: 'highlight-toekomst',
    title: 'Vooruitkijken',
    copy: 'Met duurzame materialen en slimme energieoplossingen bouwen we aan dorpen die klaar zijn voor de toekomst.'
  }
];

export const GoudGebouwdFeedPage = (props: GoudGebouwdFeedPageProps) => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const activeFilters = useMemo(() => Object.values(selectedFilters).flat(), [selectedFilters]);
  const visibleProjects = useMemo(() => {
    if (activeFilters.length === 0) {
      return projects;
    }

    return projects.filter(project =>
      activeFilters.every(filter => project.tags.includes(filter))
    );
  }, [activeFilters]);

  const toggleFilterOption = (groupId: string, option: string) => {
    setSelectedFilters(prev => {
      const current = prev[groupId] ?? [];
      const nextGroup = current.includes(option)
        ? current.filter(item => item !== option)
        : [...current, option];

      const nextState = { ...prev };
      if (nextGroup.length > 0) {
        nextState[groupId] = nextGroup;
      } else {
        delete nextState[groupId];
      }

      return nextState;
    });
  };

  const handleRemoveActiveFilter = (option: string) => {
    const groupId = optionToGroup[option];
    if (!groupId) {
      return;
    }

    setSelectedFilters(prev => {
      const nextGroup = (prev[groupId] ?? []).filter(item => item !== option);
      if (nextGroup.length === 0) {
        const { [groupId]: _removed, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [groupId]: nextGroup
      };
    });
  };

  const handleResetFilters = () => {
    setSelectedFilters({});
  };

  return (
    <div className={`min-h-screen bg-[#f4efe3] text-[#2f2613] ${props.className ?? ''}`}>
      <Navigation currentPage="feed" onNavigate={props.onNavigate} className="hidden" />

      <header className="border-b border-[#e0d5be] bg-[#faf7f1]/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.35em] text-[#8c6d36]">
            <span className="h-2 w-2 rounded-full bg-[#8c6d36]" aria-hidden="true" />
            <span>Goud Gebouwd</span>
          </div>
          <div className="hidden gap-6 text-sm font-medium text-[#5b4a2a] md:flex">
            <button
              type="button"
              className="transition-colors hover:text-[#c4892b]"
              onClick={() => props.onNavigate?.('feed')}
            >
              Projecten
            </button>
            <button
              type="button"
              className="transition-colors hover:text-[#c4892b]"
              onClick={() => props.onNavigate?.('map')}
            >
              Kaart
            </button>
            <button
              type="button"
              className="transition-colors hover:text-[#c4892b]"
              onClick={() => props.onNavigate?.('index')}
            >
              Index
            </button>
            <button
              type="button"
              className="transition-colors hover:text-[#c4892b]"
              onClick={() => props.onNavigate?.('about')}
            >
              Over het programma
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-6 pb-24 pt-14 sm:pt-20">
        <section className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-[#d5c5a0] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#8c6d36]">
                Programma versterking provincie Groningen
              </div>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-[#2c2313] sm:text-6xl lg:text-7xl">
                GOUD
                <br />
                GEBOUWD
              </h1>
              <div className="space-y-4 text-base leading-relaxed text-[#4e3d23] sm:text-lg">
                {heroCopy.map(line => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c4892b] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-transform hover:scale-[1.02]"
                  onClick={() => props.onNavigate?.('feed')}
                >
                  Alle projecten
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d9cbae] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8c6d36] transition-colors hover:border-[#c4892b] hover:text-[#c4892b]"
                  onClick={() => props.onNavigate?.('map')}
                >
                  Bekijk op kaart
                </button>
              </div>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-[#e0d5be] bg-white/80 p-8 shadow-sm"
          >
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8c6d36]">Highlights</span>
                <p className="mt-3 text-base leading-relaxed text-[#3f321b]">
                  Architectuur en vakmanschap in het Groningse versterkingsgebied. Geselecteerde projecten die laten zien wat er mogelijk is als je samenwerkt.
                </p>
              </div>
              <div className="space-y-4">
                {heroHighlights.map(item => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl bg-[#f6f0e4] px-5 py-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c6d36]">{item.label}</span>
                    <span className="text-2xl font-semibold text-[#2f2614]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </section>

        <section className="mt-16 grid gap-4 rounded-3xl border border-[#e2d7c2] bg-white/70 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(stat => (
            <div key={stat.label} className="rounded-2xl bg-[#f6f0e4] px-5 py-6">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c6d36]">{stat.label}</div>
              <div className="mt-3 text-3xl font-semibold text-[#2f2614]">{stat.value}</div>
            </div>
          ))}
        </section>

        <section className="mt-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8c6d36]">Projecten</span>
              <h2 className="mt-2 text-3xl font-semibold text-[#2f2613]">Ontdek versterkingsprojecten in Groningen</h2>
            </div>
            <div className="flex items-center gap-3">
              {activeFilters.length > 0 && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-2 rounded-full border border-[#d9cbae] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8c6d36] transition-colors hover:border-[#c4892b] hover:text-[#c4892b]"
                >
                  Reset filters
                </button>
              )}
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f6f0e4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8c6d36]">
                <Filter className="h-4 w-4" />
                {activeFilters.length} actief
              </span>
            </div>
          </div>

          {activeFilters.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {activeFilters.map(filter => (
                <button
                  key={filter}
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c4892b] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-sm transition-colors hover:bg-[#a97522]"
                  onClick={() => handleRemoveActiveFilter(filter)}
                >
                  {filter}
                  <X className="h-3.5 w-3.5" />
                </button>
              ))}
            </div>
          )}

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {filterGroups.map(group => (
              <div key={group.id} className="rounded-3xl border border-[#e2d7c2] bg-white/70 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c6d36]">{group.title}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.options.map(option => {
                    const isActive = selectedFilters[group.id]?.includes(option) ?? false;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleFilterOption(group.id, option)}
                        className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition-colors ${
                          isActive
                            ? 'bg-[#c4892b] text-white shadow-sm'
                            : 'border border-[#d9cbae] text-[#8c6d36] hover:border-[#c4892b] hover:text-[#c4892b]'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map(project => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-3xl border border-[#e2d7c2] bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 via-black/20 to-transparent px-5 py-4 text-sm font-medium text-white">
                    <span>{project.location}</span>
                    <span>{project.number}</span>
                  </div>
                </div>
                <div className="space-y-4 px-5 py-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#2f2614]">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-[#5b4a2a]">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-[#f6f0e4] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8c6d36]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-3">
          {stories.map(story => (
            <div key={story.id} className="flex h-full flex-col justify-between rounded-3xl border border-[#e2d7c2] bg-white/70 p-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8c6d36]">{story.kicker}</span>
                <p className="mt-4 text-lg font-medium leading-relaxed text-[#2f2614]">“{story.quote}”</p>
              </div>
              <p className="mt-6 text-sm font-semibold text-[#8c6d36]">{story.author}</p>
            </div>
          ))}
        </section>

        <section className="mt-20 grid gap-8 rounded-3xl border border-[#e2d7c2] bg-white/80 p-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8c6d36]">Werkwijze</span>
              <h2 className="mt-2 text-3xl font-semibold text-[#2f2613]">Samen werken aan veilige en mooie dorpen</h2>
            </div>
            <p className="text-base leading-relaxed text-[#4e3d23]">
              Goud Gebouwd verbindt bewonersinitiatieven, gemeenten en vakmensen. We kijken verder dan de versterkingsopgave en benutten elke ingreep voor ruimtelijke kwaliteit en nieuwe voorzieningen in het dorp.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {programmeHighlights.map(item => (
                <div key={item.id} className="rounded-2xl bg-[#f6f0e4] px-5 py-5">
                  <h3 className="text-lg font-semibold text-[#2f2614]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5b4a2a]">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl bg-[#2f2614] p-8 text-white">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f1d7a7]">Meedoen</span>
              <p className="text-lg leading-relaxed text-[#f9f0dd]">
                Werk je aan een versterkingsproject en wil je jouw verhaal delen? Laat het ons weten en draag bij aan het netwerk van Goud Gebouwd.
              </p>
            </div>
            <button
              type="button"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#c4892b] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-transform hover:scale-[1.02]"
              onClick={() => props.onNavigate?.('about')}
            >
              Neem contact op
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
