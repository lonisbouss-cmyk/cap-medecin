// CAP MÉDECIN — point d'entrée des contenus
import type { Matiere, Niveau, Fiche, Question } from './types';
import { FICHES1 } from './fiches1';
import { FICHES2 } from './fiches2';
import { QCM as QCM1 } from './qcm';
import { QCM2 } from './qcm2';
import { FICHES3 } from './fiches3';
import { QCM3 } from './qcm3';
import { CAS as CAS1 } from './cas';
import { CAS2 } from './cas2';
export { CODES, ARTICLES } from './memo';
export { ARRETS } from './medicaments';
export { METHODES, LEXIQUE, ADAGES } from './extras';
export { ITEMS, PARTIES } from './items';
export { ITEMS_FICHES } from './itemsmap';
export { STATIONS, ARBRES, GESTES } from './outils2';

// Relecture médicale : renseigner le nom et la qualité du relecteur une fois la relecture faite.
export const RELU = { par: '', le: '' };

export const NIVEAUX: Niveau[] = ['PASS/LAS', 'DFGSM', 'EDN', 'ECOS'];

const MATS: Matiere[] = [
  { id: 'biocell', nom: 'Biologie cellulaire', niv: 'PASS/LAS', icone: '🧫', desc: 'Membrane, organites, cycle cellulaire, mitose, méiose, apoptose.' },
  { id: 'biochimie', nom: 'Biochimie', niv: 'PASS/LAS', icone: '⚗️', desc: 'Glucides, lipides, protéines, enzymes, métabolisme énergétique.' },
  { id: 'genetique', nom: 'Génétique et biologie moléculaire', niv: 'PASS/LAS', icone: '🧬', desc: 'ADN, réplication, transcription, traduction, modes de transmission.' },
  { id: 'anatomie', nom: 'Anatomie', niv: 'PASS/LAS', icone: '🦴', desc: 'Plans et repères, cœur, thorax, abdomen, membres, système nerveux.' },
  { id: 'physio', nom: 'Physiologie', niv: 'PASS/LAS', icone: '❤️', desc: 'Cardiovasculaire, respiratoire, rénale, nerveuse et endocrine.' },
  { id: 'embryo', nom: 'Embryologie et histologie', niv: 'PASS/LAS', icone: '🥚', desc: 'Gamétogenèse, fécondation, premières semaines, tissus fondamentaux.' },
  { id: 'biostat', nom: 'Biostatistiques', niv: 'PASS/LAS', icone: '📊', desc: 'Statistique descriptive, tests, sensibilité, spécificité, études épidémiologiques.' },
  { id: 'biophys', nom: 'Biophysique', niv: 'PASS/LAS', icone: '⚛️', desc: 'Solutions, osmolarité, pH, radioactivité, imagerie.' },
  { id: 'pharmaco', nom: 'Pharmacologie générale', niv: 'PASS/LAS', icone: '💊', desc: 'Pharmacocinétique, pharmacodynamie, effets indésirables, interactions.' },
  { id: 'shs', nom: 'Santé, société, humanité', niv: 'PASS/LAS', icone: '🏥', desc: 'Éthique, droits des patients, système de santé, santé publique.' },
  { id: 'semio', nom: 'Sémiologie', niv: 'DFGSM', icone: '🩺', desc: 'Interrogatoire, examen clinique, grands syndromes.' },
  { id: 'immuno', nom: 'Immunologie', niv: 'DFGSM', icone: '🛡️', desc: 'Immunité innée et adaptative, hypersensibilités, vaccination.' },
  { id: 'microbio', nom: 'Microbiologie', niv: 'DFGSM', icone: '🦠', desc: 'Bactéries, virus, antibiotiques, résistances.' },
  { id: 'cardio', nom: 'Cardiologie', niv: 'EDN', icone: '🫀', desc: 'Syndromes coronariens, insuffisance cardiaque, HTA, fibrillation atriale.' },
  { id: 'pneumo', nom: 'Pneumologie', niv: 'EDN', icone: '🫁', desc: 'Asthme, BPCO, pneumopathies, embolie pulmonaire.' },
  { id: 'nephro', nom: 'Néphrologie', niv: 'EDN', icone: '💧', desc: 'Insuffisance rénale, troubles hydroélectrolytiques et acido-basiques.' },
  { id: 'infectio', nom: 'Maladies infectieuses', niv: 'EDN', icone: '🌡️', desc: 'Sepsis, méningites, infections urinaires, antibiothérapie.' },
  { id: 'neuro', nom: 'Neurologie', niv: 'EDN', icone: '🧠', desc: 'AVC, épilepsie, céphalées, troubles de la conscience.' },
  { id: 'gastro', nom: 'Hépato-gastro-entérologie', niv: 'EDN', icone: '🍽️', desc: 'Douleurs abdominales, hémorragies digestives, cirrhose, pancréatite.' },
  { id: 'endoc', nom: 'Endocrinologie et diabétologie', niv: 'EDN', icone: '🩸', desc: 'Diabète et ses urgences, thyroïde, surrénales.' },
  { id: 'hemato', nom: 'Hématologie', niv: 'EDN', icone: '🔬', desc: 'Anémies, hémostase, anticoagulants, transfusion.' },
  { id: 'pedia', nom: 'Pédiatrie', niv: 'EDN', icone: '👶', desc: 'Croissance, vaccinations, fièvre et déshydratation de l’enfant.' },
  { id: 'gyneco', nom: 'Gynécologie-obstétrique', niv: 'EDN', icone: '🤰', desc: 'Grossesse normale, urgences obstétricales, contraception.' },
  { id: 'urgences', nom: 'Urgences et réanimation', niv: 'EDN', icone: '🚑', desc: 'Arrêt cardiaque, états de choc, détresses vitales.' },
  { id: 'psy', nom: 'Psychiatrie', niv: 'EDN', icone: '🧩', desc: 'Dépression, crise suicidaire, troubles bipolaires, psychoses.' },
  { id: 'derm', nom: 'Dermatologie', niv: 'EDN', icone: '🧴', desc: 'Psoriasis, eczéma, toxidermies, mélanome, érysipèle.' },
  { id: 'ophtalmo', nom: 'Ophtalmologie', niv: 'EDN', icone: '👁️', desc: 'Œil rouge, glaucome aigu, baisse brutale de la vision.' },
  { id: 'orl', nom: 'ORL', niv: 'EDN', icone: '👂', desc: 'Angines, otites, sinusites, épistaxis, vertiges, paralysie faciale.' },
  { id: 'rhumato', nom: 'Rhumatologie', niv: 'EDN', icone: '🦵', desc: 'Arthrites, goutte, polyarthrite, lombalgies, ostéoporose, arthrose.' },
  { id: 'ortho', nom: 'Orthopédie et traumatologie', niv: 'EDN', icone: '🩼', desc: 'Fractures, entorses, syndrome des loges, plâtres.' },
  { id: 'uro', nom: 'Urologie', niv: 'EDN', icone: '🚻', desc: 'Colique néphrétique, rétention d’urine, hématurie, prostate.' },
  { id: 'onco', nom: 'Cancérologie', niv: 'EDN', icone: '🎗️', desc: 'Dépistages, annonce, urgences oncologiques, cancers fréquents.' },
  { id: 'geria', nom: 'Gériatrie', niv: 'EDN', icone: '🧓', desc: 'Chutes, confusion, iatrogénie, dénutrition, autonomie.' },
  { id: 'palliatif', nom: 'Douleur et soins palliatifs', niv: 'EDN', icone: '🕊️', desc: 'Antalgiques, douleur neuropathique, fin de vie et loi Claeys-Leonetti.' },
  { id: 'addicto', nom: 'Addictologie', niv: 'EDN', icone: '🚭', desc: 'Tabac, alcool, opioïdes, réduction des risques.' },
  { id: 'santepub', nom: 'Santé publique', niv: 'EDN', icone: '📈', desc: 'Indicateurs, prévention, déclaration obligatoire, vigilances.' },
  { id: 'medleg', nom: 'Médecine légale', niv: 'EDN', icone: '⚖️', desc: 'Certificats, décès, violences, secret médical.' },
  { id: 'lca', nom: 'Lecture critique d’article (LCA)', niv: 'EDN', icone: '📰', desc: 'Méthodologie, biais, essais randomisés, statistiques.' },
  { id: 'ecos', nom: 'Communication et ECOS', niv: 'ECOS', icone: '🗣️', desc: 'Stations d’anamnèse, d’annonce, d’éducation et de raisonnement.' },
];

export const MATIERES: Matiere[] = MATS.map((m, i) => ({ m, i })).sort((a, b) => NIVEAUX.indexOf(a.m.niv) - NIVEAUX.indexOf(b.m.niv) || a.i - b.i).map((x) => x.m);

export const FICHES: Fiche[] = [...FICHES1, ...FICHES2, ...FICHES3];
export const QCM: Question[] = [...QCM1, ...QCM2, ...QCM3];
export const CAS = [...CAS1, ...CAS2];
