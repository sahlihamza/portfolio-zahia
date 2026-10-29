/**
 * Contenu du portfolio — source : dossier PDF « portfolio zahiya »
 * (Zaiter-style: BOuattour Zahiya, ENAU Tunis) — CV et dossier complet à venir.
 */

export const profile = {
  firstName: 'Zahiya',
  lastName: 'BOUATTOUR',
  fullName: 'Zahiya Bouattour',
  role: 'Étudiante en architecture',
  school: 'École Nationale d’Architecture et d’Urbanisme de Tunis',
  year: '4ᵉ année',
  promo: 'Architecture · 2025–2026',
  location: 'Sidi Bousaid, Tunis',
  email: 'zahiabouattour@gmail.com',
  phone: '+216 44 142 002',
  // member: 'Membre de l’Ordre des Architectes',
}

export const about = {
  paragraphs: [
    'Actuellement étudiante en quatrième année d’architecture à l’École Nationale d’Architecture et d’Urbanisme (ENAU), je développe une approche de conception fondée sur l’analyse du contexte, la compréhension des usages et la recherche d’un équilibre entre forme, fonction et matérialité.',
    'Au fil de mon parcours académique, j’ai exploré différentes échelles de projet, de l’aménagement intérieur à la conception architecturale et urbaine. Ces expériences m’ont permis de développer mes capacités d’analyse, de conception spatiale, de représentation graphique et de modélisation 3D, tout en approfondissant ma maîtrise des outils numériques de conception.',
    'Curieuse, rigoureuse et attentive aux détails, je considère chaque projet comme une occasion d’enrichir ma réflexion architecturale, d’expérimenter de nouvelles solutions et de développer une vision sensible et cohérente de l’espace.',
    'À travers ce portfolio, je souhaite présenter mon parcours, mes compétences et ma démarche de conception, tout en affirmant ma volonté de continuer à apprendre, à collaborer et à évoluer dans le domaine de l’architecture.',
  ],
  qualities: ['Curieuse', 'Rigoureuse', 'Attentive aux détails', 'Collaborative', 'Ouverte à l’apprentissage'],
}

export const demarche = {
  intro:
    'Une approche de conception fondée sur l’analyse du contexte, la compréhension des usages et la recherche d’un équilibre entre forme, fonction et matérialité.',
  steps: [
    {
      number: '01',
      title: 'Analyse du contexte',
      body: 'Partir du site, de ses contraintes et de ses usages avant de dessiner la forme. Le contexte urbain et la matérialité du terrain guident chaque parti architectural.',
    },
    {
      number: '02',
      title: 'Compréhension des usages',
      body: 'Organiser les espaces selon leurs usages et leurs exigences d’accès, en articulating les fonctions entre elles et les relations entre l’usager et l’espace.',
    },
    {
      number: '03',
      title: 'Forme, fonction, matérialité',
      body: 'Travailler les volumes, les pleins et les vides, la circulation et la lumière naturelle pour developper une architecture contemporaine, lisible et adaptée.',
    },
  ],
}

export const projects = [
  {
    id: 'ordre-architectes',
    number: '01',
    title: 'Siège de l’Ordre des Architectes',
    place: 'El Manar, Tunis, Tunisie',
    type: 'Équipement institutionnel',
    surface: 'Salle de conférence de 400 places',
    programme:
      'Administration, espaces professionnels et salle de conférence de 400 places',
    demarche:
      'Organisation fonctionnelle, articulation des volumes et traitement des circulations',
    phase: 'APS',
    lead:
      'Un équipement institutionnel destiné à accueillir les activités administratives, professionnelles et événementielles de l’Ordre.',
    body: [
      'La réflexion architecturale s’articule autour de la relation entre représentation institutionnelle, fonctionnalité et qualité spatiale. Le projet vise à organiser les différents espaces selon leurs usages et leurs exigences d’accès, tout en assurant une articulation cohérente entre les fonctions administratives et les espaces ouverts au public, notamment la salle de conférence.',
      'À travers le travail sur les volumes, les pleins et les vides, la circulation et la lumière naturelle, la démarche cherche à développer une architecture contemporaine, lisible et adaptée à son contexte urbain.',
      'Ce projet constitue une exploration de la conception d’un équipement public, de l’organisation fonctionnelle à l’expression architecturale, en intégrant les contraintes techniques, structurelles et réglementaires.',
    ],
    images: [
      {
        src: '/images/p1-facade-jour.png',
        alt: 'Vue de jour du siège de l’Ordre des Architectes, façade vitrée et terrasses paysagères',
        caption: 'Façade —lumière du jour',
        span: 'wide',
      },
      {
        src: '/images/p1-facade-nuit.png',
        alt: 'Le même bâtiment de nuit, façade éclairée et parking arboré au premier plan',
        caption: 'Façade —lumière de la nuit',
        span: 'half',
      },
      {
        src: '/images/p1-terrasse.png',
        alt: 'Rendu d’un espace de travail ouvert avec vue sur la terrasse plantée',
        caption: 'Espace de travail —terrasse',
        span: 'half',
      },
      {
        src: '/images/p1-interieur.png',
        alt: 'Rendu de l’intérieur du siège : hall d’entrée avec vitrines d’exposition et mobilier d’accueil',
        caption: 'Hall d’accueil',
        span: 'half',
      },
      {
        src: '/images/p1-perspective.png',
        alt: 'Perspective de masse du bâtiment : volumes white en toit, arbres et rez-de-chaussée ouvert',
        caption: 'Perspective —volumes et pleins',
        span: 'half',
      },
      {
        src: '/images/p1-plan-masse.png',
        alt: 'Plan masse du siège de l’Ordre des architectes dans son environnement, échelle 1/500',
        caption: 'Plan masse — 1/500',
        span: 'half',
      },
      {
        src: '/images/p1-plan-sous-sol.png',
        alt: 'Plan du sous-sol : parking de 59 places, locaux techniques et cages d’escalier',
        caption: 'Plan sous-sol — 1/200',
        span: 'half',
      },
      {
        src: '/images/p1-plan-rdc.png',
        alt: 'Plan du rez-de-chaussée : salle de conférence, accueil, bureaux administratifs et salle du conseil',
        caption: 'Plan RDC — 1/200',
        span: 'half',
      },
      {
        src: '/images/p1-plan-etage-1.png',
        alt: 'Plan du premier étage : salle de conférence, salles de réunion et espace pause café',
        caption: 'Plan étage 1 — 1/200',
        span: 'half',
      },
      {
        src: '/images/p1-plan-etage-2.png',
        alt: 'Plan du deuxième étage : exposition permanente sur l’architecture en Tunisie',
        caption: 'Plan étage 2 — 1/200',
        span: 'half',
      },
      {
        src: '/images/p1-plan-etage-3.png',
        alt: 'Plan du troisième étage : bureaux administratifs',
        caption: 'Plan étage 3 — 1/200',
        span: 'half',
      },
      {
        src: '/images/p1-facade-est.png',
        alt: 'Façade est du siège de l’Ordre des architectes',
        caption: 'Façade est — 1/200',
        span: 'half',
      },
      {
        src: '/images/p1-facade-sud.png',
        alt: 'Façade sud du siège de l’Ordre des architectes',
        caption: 'Façade sud — 1/200',
        span: 'half',
      },
    ],
  },
  {
    id: 'musee-ecriture',
    number: '02',
    title: 'Musée de l’Écriture',
    place: 'Centre Urbain Nord, Tunis, Tunisie',
    type: 'Équipement culturel et muséal',
    surface: '1 690 m²',
    programme:
      'Expositions permanentes et temporaires, ateliers pédagogiques, accueil et espaces de services',
    demarche: 'L’écriture en système — émergence et évolution',
    phase: 'Conception architecturale et muséographique',
    lead:
      'Un musée consacré à l’écriture, à son émergence et à son évolution à travers les civilisations.',
    body: [
      'Implanté au Centre Urbain Nord de Tunis, le musée est pensé comme un espace de découverte, de transmission et de valorisation du patrimoine écrit.',
      'La démarche conceptuelle s’appuie sur la mise en scène du parcours du visiteur, en articulant les espaces d’exposition permanente et temporaire autour d’une organisation spatiale favorisant la fluidité des déplacements et la continuité de l’expérience muséale. L’atrium central constitue un élément structurant du projet, organisant les relations visuelles et spatiales entre les différentes fonctions.',
      'Le travail architectural explore la relation entre lumière, volumes et circulation afin de créer une expérience immersive où l’espace accompagne la découverte de l’écriture comme système de communication, de mémoire et de culture.',
    ],
    images: [
      {
        src: '/images/p2-interieur-arches.png',
        alt: 'Interior du musée de l’écriture : voûtes de pierre claire et grande calligraphie murale',
        caption: 'Parcours — voûtes et calligraphie',
        span: 'wide',
      },
      {
        src: '/images/p2-exterieur.png',
        alt: 'Vue extérieure du musée de l’écriture, façade minérale et esplanade plantée',
        caption: 'Vue extérieure',
        span: 'half',
      },
      {
        src: '/images/p2-interieur-inscriptions.png',
        alt: 'Salle d’exposition sombre dont les murs sont couverts d’inscriptions gravées',
        caption: 'Salle des inscriptions',
        span: 'half',
      },
      {
        src: '/images/p2-interieur-expo.png',
        alt: 'Galerie d’exposition où les visiteurs évoluent entre vitrines et panneaux',
        caption: 'Galerie d’exposition',
        span: 'wide',
      },
      {
        src: '/images/p2-plan-sous-sol.png',
        alt: 'Plan du sous-sol : archives et expositions permanentes autour de l’atrium',
        caption: 'Plan sous-sol',
        span: 'wide',
      },
      {
        src: '/images/p2-plan-rdc.png',
        alt: 'Plan du rez-de-chaussée : accueil, performance calligraphique, boutique et café culturel',
        caption: 'Plan RDC',
        span: 'wide',
      },
      {
        src: '/images/p2-plan-etage.png',
        alt: 'Plan de l’étage : administration, bibliothèque et ateliers',
        caption: 'Plan étage',
        span: 'wide',
      },
      {
        src: '/images/p2-facade.png',
        alt: 'Élévation de la façade nord-ouest du musée de l’écriture',
        caption: 'Façade nord-ouest',
        span: 'wide',
        ratio: 'aspect-[5/1]',
      },
      {
        src: '/images/p2-coupe-aa.png',
        alt: 'Coupe A-A du musée de l’écriture',
        caption: 'Coupe A-A',
        span: 'wide',
        ratio: 'aspect-[5/1]',
      },
      {
        src: '/images/p2-coupe-bb.png',
        alt: 'Coupe B-B du musée de l’écriture',
        caption: 'Coupe B-B',
        span: 'wide',
        ratio: 'aspect-[5/1]',
      },
    ],
  },
  {
    id: 'maison-architecte',
    number: '03',
    title: 'Maison de l’Architecte',
    place: 'La Marsa, Tunis, Tunisie',
    type: 'Équipement socioculturel et polyvalent',
    surface: '3 000 m²',
    programme:
      'Expositions permanentes et temporaires, ateliers pédagogiques, accueil et espaces de services',
    demarche: 'Pause urbaine',
    phase: 'Projet académique',
    lead:
      'Un équipement public implanté à La Marsa, à proximité du stade Abdelaziz Chtioui et de la salle couverte Raja Haider.',
    body: [
      'Le projet consiste en la conception architecturale d’un équipement public implanté à La Marsa, sur un terrain d’environ 3 500 m². Bénéficiant d’une situation urbaine stratégique et d’une bonne accessibilité grâce aux voies qui l’entourent, le site offre un potentiel intéressant pour développer un projet intégré à son environnement.',
      'La conception s’appuie sur une analyse approfondie des caractéristiques physiques du terrain, de son contexte urbain et des références architecturales afin de définir un parti architectural cohérent. Le projet vise à proposer une organisation spatiale fonctionnelle, articulant les espaces de détente, les lieux communs d’échange et d’interaction, les services ainsi que les circulations intérieures et extérieures.',
      'Ce projet représente une réflexion sur le rôle de l’architecture dans la médiation culturelle, à travers une conception qui associe organisation fonctionnelle, narration spatiale et qualité sensible des espaces.',
    ],
    images: [
      {
        src: '/images/p3-exterieur.png',
        alt: 'Rendu de la Maison de l’Architecte : volume blanc anguleux en béton, ombre portée et parking',
        caption: 'Volume extérieur',
        span: 'half',
      },
      {
        src: '/images/p3-interieur.png',
        alt: 'Rendu de l’intérieur de la Maison de l’Architecte : hall lumineux, arbre central et furniture contemporaine',
        caption: 'Hall — lumière et arbre central',
        span: 'half',
      },
      {
        src: '/images/p3-plan-masse.png',
        alt: 'Plan masse de la Maison de l’Architecte, implanté entre le stade et la salle couverte',
        caption: 'Plan masse',
        span: 'half',
      },
      {
        src: '/images/p3-planche.png',
        alt: 'Planche de présentation complète de la Maison de l’Architecte : plans, façades, coupes et rendus',
        caption: 'Planche de présentation',
        span: 'half',
      },
    ],
  },
]

export const parcours = {
  timeline: [
    {
      year: 'Baccalauréat',
      title: 'Lycée Gremda',
      detail: 'Baccalauréat en Sciences Techniques',
    },
    {
      year: '1er cycle',
      title: 'École Nationale d’Architecture et d’Urbanisme de Tunis',
      detail: 'Diplôme de dessinateur en architecture du premier cycle',
    },
    {
      year: '2025—2026',
      title: 'ENAU Tunis — 4ᵉ année d’architecture',
      detail: 'Sièges institutionnels, équipements culturels, conception et muséographie',
    },
  ],
  software: [
    { name: 'AutoCAD', note: 'Dessin technique', logo: '/images/soft-autocad.svg' },
    { name: 'Autodesk Revit', note: 'BIM', logo: '/images/soft-revit.svg' },
    { name: 'Adobe Photoshop', note: 'Retouche & mise en page', logo: '/images/soft-photoshop.svg' },
    { name: 'SketchUp', note: 'Modélisation 3D', logo: '/images/soft-sketchup.svg' },
  ],
  languages: [
    { name: 'Arabe', level: 'Langue maternelle' },
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Courant' },
  ],
}

export const nav = [
  { id: 'demarche', label: 'Démarche' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'projets', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]
