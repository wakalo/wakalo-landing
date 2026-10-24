import { MapPin, Search, Star, ShieldCheck, Users, Clock } from "lucide-react";

type Screen = "search" | "trip" | "match";

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-semibold text-white/80">
      <span>9:41</span>
      <span className="h-4 w-16 rounded-full bg-black" />
      <span>5G</span>
    </div>
  );
}

function SearchScreen() {
  const trips = [
    { from: "Cotonou", to: "Porto-Novo", time: "07:30", price: "1 500", seats: 3 },
    { from: "Cotonou", to: "Abomey-Calavi", time: "08:15", price: "800", seats: 2 },
    { from: "Cotonou", to: "Parakou", time: "06:00", price: "9 000", seats: 1 },
  ];
  return (
    <div className="px-4 pt-4">
      <p className="text-[11px] text-white/60">Bonjour 👋</p>
      <p className="font-display text-base font-bold text-white">Où allez-vous ?</p>
      <div className="mt-3 space-y-2 rounded-2xl bg-white p-3">
        <div className="flex items-center gap-2 text-[11px] text-slate-500">
          <span className="h-2 w-2 rounded-full bg-green-living" /> Cotonou, Ganhi
        </div>
        <div className="h-px bg-slate-100" />
        <div className="flex items-center gap-2 text-[11px] text-slate-800">
          <MapPin className="h-3 w-3 text-coral-red" /> Porto-Novo
        </div>
      </div>
      <div className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-mint-bright py-2 text-[11px] font-bold text-forest-deep">
        <Search className="h-3 w-3" /> Rechercher
      </div>
      <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-white/50">Trajets disponibles</p>
      <div className="mt-2 space-y-2">
        {trips.map((t) => (
          <div key={t.to} className="flex items-center justify-between rounded-xl bg-white/10 p-2.5">
            <div>
              <p className="text-[11px] font-semibold text-white">
                {t.from} → {t.to}
              </p>
              <p className="text-[9px] text-white/60">
                {t.time} · {t.seats} place{t.seats > 1 ? "s" : ""}
              </p>
            </div>
            <p className="whitespace-nowrap pl-2 text-[11px] font-bold text-mint-bright">{t.price} F</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TripScreen() {
  return (
    <div className="px-4 pt-4">
      <p className="font-display text-base font-bold text-white">Votre trajet</p>
      <div className="relative mt-3 h-36 overflow-hidden rounded-2xl bg-forest-mid">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <svg viewBox="0 0 200 140" className="absolute inset-0 h-full w-full">
          <path d="M20 115 C 70 110, 60 40, 110 50 S 170 30, 180 22" fill="none" stroke="#34D399" strokeWidth="4" strokeLinecap="round" />
          <circle cx="20" cy="115" r="6" fill="#fff" />
          <circle cx="180" cy="22" r="6" fill="#F59E0B" />
        </svg>
      </div>
      <div className="mt-3 rounded-2xl bg-white p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-slate-500">Cotonou → Porto-Novo</p>
            <p className="font-display text-sm font-bold text-slate-900">Départ 07:30</p>
          </div>
          <p className="font-display text-sm font-bold text-forest-deep">1 500 F</p>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[
            { icon: Clock, label: "45 min" },
            { icon: Users, label: "3 places" },
            { icon: ShieldCheck, label: "Vérifié" },
          ].map((i) => (
            <div key={i.label} className="rounded-lg bg-slate-50 py-2">
              <i.icon className="mx-auto h-3.5 w-3.5 text-green-living" />
              <p className="mt-1 text-[9px] font-medium text-slate-600">{i.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 rounded-xl bg-mint-bright py-2.5 text-center text-[11px] font-bold text-forest-deep">
        Réserver ma place
      </div>
    </div>
  );
}

function MatchScreen() {
  return (
    <div className="px-4 pt-4">
      <p className="font-display text-base font-bold text-white">Réservation confirmée ✓</p>
      <div className="mt-4 rounded-2xl bg-white p-4 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-mint-bright to-green-living font-display text-lg font-bold text-white">
          KA
        </div>
        <p className="mt-2 font-display text-sm font-bold text-slate-900">Koffi A.</p>
        <p className="flex items-center justify-center gap-1 text-[10px] text-slate-500">
          <Star className="h-3 w-3 fill-amber-gold text-amber-gold" /> 4,9 · 128 trajets
        </p>
        <div className="mt-3 flex items-center justify-center gap-1 rounded-full bg-mint-bright/15 py-1 text-[10px] font-semibold text-green-living">
          <ShieldCheck className="h-3 w-3" /> Conducteur vérifié
        </div>
      </div>
      <div className="mt-3 rounded-2xl bg-white/10 p-3">
        <p className="text-[10px] text-white/60">Frais partagés</p>
        <div className="mt-1 flex items-end justify-between">
          <p className="font-display text-lg font-bold text-white">1 500 F</p>
          <p className="text-[10px] text-mint-bright">-60 % vs taxi</p>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-white/10">
          <div className="h-full w-2/5 rounded-full bg-mint-bright" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-white/10 py-2.5 text-center text-[11px] font-semibold text-white">Message</div>
        <div className="rounded-xl bg-mint-bright py-2.5 text-center text-[11px] font-bold text-forest-deep">Suivre</div>
      </div>
    </div>
  );
}

const screens: Record<Screen, () => React.JSX.Element> = {
  search: SearchScreen,
  trip: TripScreen,
  match: MatchScreen,
};

export default function PhoneMockup({ screen, className = "" }: { screen: Screen; className?: string }) {
  const Content = screens[screen];
  return (
    <div
      role="img"
      aria-label="Aperçu de l'application Wakalo"
      className={`relative mx-auto w-[240px] rounded-[2.5rem] border-[6px] border-black bg-black shadow-2xl shadow-black/50 ${className}`}
    >
      <div className="h-[480px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-forest-deep to-[#03261d]">
        <StatusBar />
        <Content />
      </div>
    </div>
  );
}
