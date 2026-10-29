# Portfolio — Zahiya Bouattour

Portfolio d’architecture one-page de **Zahiya Bouattour**, étudiante en 4ᵉ année à l’École Nationale
d’Architecture et d’Urbanisme de Tunis (ENAU Tunis).

Réalisé à partir de son dossier PDF (10 planches) : **Siège de l’Ordre des Architectes** (El Manar),
**Musée de l’Écriture** (Centre Urbain Nord) et **Maison de l’Architecte** (La Marsa).

Direction artistique « monographie éditoriale », construite avec le design system **UI/UX Pro Max** :
typographie serif (Playfair Display + Source Serif 4), labels en monospace (JetBrains Mono), accent
bronze `#A16207` sur fond blanc, grille asymétrique et révélation au scroll respectueuse de
`prefers-reduced-motion`.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4** (tokens dans `src/index.css` via `@theme`)
- Aucune dépendance UI externe : icônes SVG maison

## Démarrer

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production → dist/
npm run preview  # prévisualisation du build
npm run lint     # oxlint
```

## Déploiement Vercel

Aucune configuration supplémentaire : preset **Vite** détecté automatiquement,
build command `npm run build`, output directory `dist`.

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

## Contenu

| Fichier | Rôle |
|---|---|
| `src/data/site.js` | **Tout le contenu éditorial** (coordonnées, biographie, démarche, projets, parcours) |
| `src/components/` | Header, Hero, Demarche, Projects, Parcours, Contact, Footer, Reveal, Icons |
| `src/index.css` | Design tokens Tailwind (`@theme`) + styles de base |
| `public/images/` | Visuels (rendus, plans, coupes, plans de masse, portrait, logos) |
| `design-system/` | Design system persisté (MASTER.md + override page) |

### Mettre à jour le contenu

Toutes les informations modifiables sont dans `src/data/site.js` : aucune modification de composant
n’est nécessaire. Pour remplacer un visuel, déposer le fichier dans `public/images/` puis mettre à
jour le champ `src` de l’image concernée.

### Traitement des visuels du PDF

Les plans du PDF source étaient en trait blanc sur fond noir : ils ont été **inversés** (trait noir
sur fond blanc) puis **recadrés automatiquement** sur leur contenu, pour s’intégrer à une mise en
page claire. Scripts dans `tools/`.

## Accessibilité

- Contrastes ≥ 4.5:1, focus visible, lien d’évitement
- Cibles tactiles ≥ 44 px, icônes SVG (aucune emoji), libellés `alt` sur chaque image
- Aucun défilement horizontal (vérifié à 375, 768, 1024 et 1440 px)
