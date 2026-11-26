// CAP MÉDECIN — types des contenus
export type Niveau = 'PASS/LAS' | 'DFGSM' | 'EDN' | 'ECOS';

export type Matiere = { id: string; nom: string; niv: Niveau; icone: string; desc: string };

export type Fiche = {
  id: string;
  m: string; // id de matière
  titre: string;
  intro: string;
  parts: { t: string; l: string[] }[];
  art?: string[]; // ids de repères (mémo)
  arrets?: string[]; // ids de médicaments
  retenir: string[];
};

export type CodeId = 'bio' | 'hemato' | 'gds' | 'urine' | 'clin' | 'score' | 'formule';

// Repère du mémo : valeur normale, score ou formule
export type Article = {
  id: string;
  code: CodeId;
  num: string; // nom du repère
  titre: string; // valeur ou résumé
  texte: string; // interprétation
  synth?: boolean;
};

// Fiche médicament / classe thérapeutique
export type Arret = {
  id: string;
  nom: string; // classe
  jur: string; // exemples de molécules
  date: string; // indications principales
  m: string;
  apport: string; // mécanisme, effets indésirables, contre-indications
};

export type Question = { q: string; c: string[]; a: number; e: string; m: string };

export type Etape = { q: string; c: string[]; a: number; e: string };
export type CasPratique = { id: string; titre: string; m: string; niv: Niveau; enonce: string; etapes: Etape[]; retenir: string[]; fiches: string[] };

export type Methode = { id: string; titre: string; pour: string; intro: string; etapes: { t: string; l: string[] }[]; pieges: string[] };

export type Terme = { t: string; d: string };
export type Adage = { la: string; fr: string; sens: string };
