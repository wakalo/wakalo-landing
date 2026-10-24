export type TeamMember = {
  name: string;
  role: string;
  title: string;
  linkedin: string;
  email: string;
  image: string;
  color: string;
};

export const team: TeamMember[] = [
  {
    name: "SAMIR ALE",
    role: "Directeur Général",
    title: "CEO & Responsable Sécurité / Conformité (CISO)",
    linkedin: "https://www.linkedin.com/in/samir-ale-665a04114/",
    email: "mailto:samir.ale@wakalo.online",
    image: "/team/a.s.jpeg",
    color: "from-mint-bright/20 to-green-living/20",
  },
  {
    name: "ROMARIC SEGLA",
    role: "Directeur Produit",
    title: "Product Designer & Responsable UX/UI (Front Lead)",
    linkedin: "https://www.linkedin.com/in/romaric-segla/",
    email: "mailto:romaric.segla@wakalo.online",
    image: "/team/r.s.jpg",
    color: "from-amber-gold/20 to-mint-bright/20",
  },
  {
    name: "Samir BAGOUDOU",
    role: "Directeur Technique",
    title: "CTO & Responsable Croissance technique",
    linkedin: "https://www.linkedin.com/in/sbagoudou-dev/",
    email: "mailto:samir.bagoudou@wakalo.online",
    image: "/team/s.b.jpg",
    color: "from-coral-red/20 to-amber-gold/20",
  },
  {
    name: "LÉANDRE NGARTONE",
    role: "Responsable Infrastructure",
    title: "Opérations & Support (Ops Manager)",
    linkedin: "https://www.linkedin.com/in/l%C3%A9andre-ngartone-2b3991146/",
    email: "mailto:leandre.ngartone@wakalo.online",
    image: "/team/l.n.jpg",
    color: "from-mint-soft/20 to-coral-red/20",
  },
];
