# Refonte du site : Wakalo Corp + Wakalo (covoiturage)

Date : 2026-10-24

## Intention

Le site actuel ne parle que de l'application de covoiturage Wakalo. Or Wakalo Corp est une
entreprise du numérique qui (1) conçoit et développe des applications sur mesure pour des clients
et (2) édite ses propres produits, dont Wakalo, l'application de covoiturage.

Un visiteur doit d'abord comprendre **« Wakalo Corp est une société du numérique qui crée des
solutions innovantes »**, puis découvrir **nos produits**, Wakalo en tête. Wakalo sert aussi de
preuve de savoir-faire pour les clients potentiels.

## Objectifs

- Positionner Wakalo Corp comme entreprise tech professionnelle et crédible.
- Donner envie à une entreprise de nous confier un projet d'application (CTA « Lancer un projet »).
- Présenter Wakalo comme produit phare, avec un lien vers une page dédiée et l'inscription bêta.

## Non-objectifs

- Pas de back-end nouveau, pas de CMS, pas de blog.
- Pas de portfolio client détaillé (pas encore de références publiables).
- Pas de refonte de l'application mobile elle-même.

## Anti-objectifs (échec même si « ça marche »)

- Que l'accueil donne encore l'impression d'un site « appli de covoiturage » seulement.
- Que Wakalo Corp et l'appli Wakalo se confondent visuellement.
- Un rendu « template générique » sans ancrage (Bénin, équipe réelle).

## Direction visuelle (choix C validé)

Inspiration Mobbin :
- Partie entreprise, claire et chaleureuse : Joby Aviation, Büro (hero avec équipe), OFF+BRAND (cartes).
- Section produit sombre type fiche produit : VanMoof (écrans + fonctionnalités alternés), Zoox.
- Lignes de services éditoriales : Phantom Studios, Koto.

### Identité Wakalo Corp (distincte de l'appli, validée)
- Encre / bleu nuit `#0B1220` (texte, blocs forts)
- Fond crème `#F7F4EE`, surfaces blanches
- Accent ocre / terre rouge `#E8772E` (boutons, détails)
- Titres : Space Grotesk ; texte : Plus Jakarta Sans (déjà chargées)
- Logo texte « wakalo corp » en attendant un vrai logo

### Identité Wakalo (l'appli)
- Garde le vert forêt / menthe existant (`#064E3B`, `#34D399`), uniquement dans la section
  Wakalo de l'accueil et sur `/wakalo`.

## Structure

### Accueil `/` (Wakalo Corp)
1. **Hero** clair : titre fort sur Wakalo Corp, sous-titre, 2 CTA (« Lancer un projet » → `/contact`,
   « Découvrir nos produits » → ancre produits).
2. **Ce que nous faisons** : deux blocs, *Solutions sur mesure* (applications web, mobile, conseil
   et design produit) et *Nos produits*.
3. **Services** en lignes éditoriales (Applications mobiles, Plateformes web, Design UX/UI,
   Conseil & transformation numérique).
4. **Méthode** : 4 étapes (Comprendre → Concevoir → Développer → Lancer & accompagner).
5. **Produit phare Wakalo** : bascule sur fond sombre aux couleurs de l'appli ; mockups d'écrans
   (construits en HTML/CSS), 3–4 fonctionnalités, villes (Cotonou, Porto-Novo, Parakou), CTA
   « Découvrir Wakalo » → `/wakalo` et « Rejoindre la bêta » (formulaire Microsoft existant).
6. **Équipe & ancrage** : photos existantes `public/team/*`, photo de Cotonou, « basés à Cotonou ».
7. **CTA final** « Parlons de votre projet » + pied de page.

### Page `/wakalo`
Reprend le contenu covoiturage actuel (Hero app, TrustBar, HowItWorks, Benefits, Impact, Coverage,
LivingRoute, BetaSignup, FAQ), dans l'identité verte de l'appli.

### Autres pages
- `/about` : réécrite pour parler de Wakalo Corp (mission, équipe existante, valeurs).
- `/contact` : orientée « projet client » + support produit ; garde le formulaire existant.
- `/help`, `/terms`, `/legal` : contenu inchangé (concerne l'appli), liens depuis `/wakalo` et le footer.

### Navigation
Navbar : Accueil · Services · Produits (Wakalo) · À propos · Contact · bouton « Lancer un projet ».
Footer : colonnes Entreprise / Produits / Support & légal.

## Contraintes

- Next.js 16.2.5 (App Router), React 19, Tailwind v4, framer-motion, lucide-react : on garde la stack.
  Lire `node_modules/next/dist/docs/` avant d'écrire du code (cf. AGENTS.md).
- Site en français. Responsive mobile d'abord. `prefers-reduced-motion` respecté.
- Métadonnées SEO mises à jour pour Wakalo Corp ; `/wakalo` garde les métadonnées covoiturage.
- Contacts existants conservés (`contact@wakalo.online`, Cotonou ; téléphone encore en placeholder).

## Choix laissés au constructeur (marqués comme mes décisions)

- Formulations exactes des textes marketing.
- Détail des micro-animations.
- Mise en page exacte des mockups d'écrans de l'appli.
- `DESIGN_GUIDE.md` mis à jour pour décrire les deux identités.
