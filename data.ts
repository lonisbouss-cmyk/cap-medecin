// CAP MÉDECIN — point d'entrée des contenus
import type { Matiere, Niveau, Fiche, Question } from './types';
import { FICHES1 } from './fiches1';
import { FICHES2 } from './fiches2';
import { QCM as QCM1 } from './qcm';
import { QCM2 } from './qcm2';
export { CODES, ARTICLES } from './memo';
export { ARRETS } from './medicaments';
export { CAS } from './cas';
export { METHODES, LEXIQUE, ADAGES } from './extras';

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
  { id: 'ecos', nom: 'Communication et ECOS', niv: 'ECOS', icone: '🗣️', desc: 'Stations d’anamnèse, d’annonce, d’éducation et de raisonnement.' },
];

export const MATIERES: Matiere[] = MATS.map((m, i) => ({ m, i })).sort((a, b) => NIVEAUX.indexOf(a.m.niv) - NIVEAUX.indexOf(b.m.niv) || a.i - b.i).map((x) => x.m);

export const FICHES: Fiche[] = [...FICHES1, ...FICHES2];
export const QCM: Question[] = [...QCM1, ...QCM2];
