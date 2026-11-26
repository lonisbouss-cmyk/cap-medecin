// CAP MÉDECIN — triades cliniques classiques (et quelques associations à trois éléments)
export type Triade = { id: string; nom: string; el: [string, string, string]; evoque: string; m: string; note?: string };

export const TRIADES: Triade[] = [
  // ----- Cardiologie et vaisseaux -----
  { id: 'virchow', nom: 'Triade de Virchow', el: ['Stase veineuse', 'Lésion de la paroi vasculaire (endothélium)', 'Hypercoagulabilité'], evoque: 'Mécanismes de la thrombose veineuse', m: 'cardio', note: 'Base du raisonnement sur les facteurs de risque de MTEV (alitement, chirurgie, cancer, thrombophilie…).' },
  { id: 'beck', nom: 'Triade de Beck', el: ['Hypotension artérielle', 'Turgescence jugulaire', 'Assourdissement des bruits du cœur'], evoque: 'Tamponnade péricardique', m: 'cardio', note: 'Urgence : échocardiographie et drainage péricardique. Rechercher un pouls paradoxal.' },
  { id: 'ra', nom: 'Triade du rétrécissement aortique serré', el: ['Angor d’effort', 'Syncope d’effort', 'Dyspnée (insuffisance cardiaque)'], evoque: 'Rétrécissement aortique symptomatique', m: 'cardio', note: 'L’apparition de symptômes fait discuter un remplacement valvulaire.' },
  { id: 'aaa', nom: 'Triade de la rupture d’anévrisme de l’aorte abdominale', el: ['Douleur abdominale ou lombaire brutale', 'Masse abdominale battante', 'État de choc'], evoque: 'Rupture d’anévrisme de l’aorte abdominale', m: 'cardio', note: 'Urgence chirurgicale absolue.' },
  { id: 'conn', nom: 'Triade de l’hyperaldostéronisme primaire (Conn)', el: ['Hypertension artérielle', 'Hypokaliémie', 'Alcalose métabolique'], evoque: 'Hyperaldostéronisme primaire', m: 'endoc', note: 'Dosage aldostérone et rénine (rapport aldostérone/rénine élevé).' },
  { id: 'menard', nom: 'Triade de Ménard', el: ['Céphalées', 'Sueurs', 'Palpitations'], evoque: 'Phéochromocytome', m: 'endoc', note: 'Souvent lors de poussées hypertensives. Dosage des métanéphrines.' },

  // ----- Neurologie -----
  { id: 'cushing', nom: 'Triade de Cushing', el: ['Hypertension artérielle', 'Bradycardie', 'Irrégularités respiratoires'], evoque: 'Hypertension intracrânienne sévère, menace d’engagement', m: 'neuro', note: 'Signe tardif et grave : urgence neurochirurgicale ou réanimatoire.' },
  { id: 'htic', nom: 'Triade de l’hypertension intracrânienne', el: ['Céphalées (matinales, aggravées par l’effort et la toux)', 'Vomissements (souvent en jet)', 'Troubles visuels (œdème papillaire)'], evoque: 'Hypertension intracrânienne', m: 'neuro', note: 'Imagerie cérébrale avant toute ponction lombaire.' },
  { id: 'meninge', nom: 'Syndrome méningé (trépied méningitique)', el: ['Céphalées', 'Vomissements', 'Raideur de nuque'], evoque: 'Méningite ou hémorragie méningée', m: 'infectio', note: 'Avec fièvre : méningite jusqu’à preuve du contraire. Début brutal sans fièvre : hémorragie méningée.' },
  { id: 'hakim', nom: 'Triade de Hakim et Adams', el: ['Troubles de la marche', 'Troubles cognitifs', 'Troubles urinaires (impériosités, incontinence)'], evoque: 'Hydrocéphalie à pression normale', m: 'neuro', note: 'Cause curable de troubles cognitifs du sujet âgé (test de soustraction de LCS, dérivation).' },
  { id: 'wernicke', nom: 'Triade de Gayet-Wernicke', el: ['Confusion', 'Troubles oculomoteurs (ophtalmoplégie, nystagmus)', 'Ataxie (syndrome cérébelleux)'], evoque: 'Encéphalopathie de Gayet-Wernicke (carence en vitamine B1)', m: 'neuro', note: 'Vitamine B1 en urgence chez tout patient alcoolique ou dénutri, avant tout apport glucosé. La triade complète est rare.' },
  { id: 'parkinson', nom: 'Triade parkinsonienne', el: ['Tremblement de repos', 'Akinésie (bradykinésie)', 'Rigidité (hypertonie plastique, roue dentée)'], evoque: 'Syndrome parkinsonien', m: 'neuro', note: 'Asymétrie et bonne réponse à la L-dopa : maladie de Parkinson idiopathique.' },
  { id: 'charcot-sep', nom: 'Triade de Charcot (neurologique)', el: ['Nystagmus', 'Tremblement intentionnel', 'Parole scandée'], evoque: 'Atteinte cérébelleuse (décrite dans la sclérose en plaques)', m: 'neuro', note: 'À ne pas confondre avec la triade de Charcot de l’angiocholite.' },
  { id: 'horner', nom: 'Syndrome de Claude Bernard-Horner', el: ['Ptosis', 'Myosis', 'Énophtalmie'], evoque: 'Atteinte de la voie sympathique oculaire', m: 'ophtalmo', note: 'Penser à la dissection carotidienne (douleur cervicale) et à la tumeur de l’apex pulmonaire (Pancoast-Tobias).' },
  { id: 'menieres', nom: 'Triade de Ménière', el: ['Vertiges rotatoires en crises', 'Acouphènes', 'Surdité de perception fluctuante'], evoque: 'Maladie de Ménière (hydrops endolymphatique)', m: 'orl', note: 'S’y associe souvent une sensation de plénitude d’oreille.' },
  { id: 'vogt', nom: 'Triade de Vogt', el: ['Épilepsie', 'Déficience intellectuelle', 'Angiofibromes du visage'], evoque: 'Sclérose tubéreuse de Bourneville', m: 'neuro' },

  // ----- Digestif -----
  { id: 'charcot-angio', nom: 'Triade de Charcot (angiocholite)', el: ['Douleur de l’hypochondre droit', 'Fièvre (avec frissons)', 'Ictère'], evoque: 'Angiocholite aiguë', m: 'gastro', note: 'Classiquement dans cet ordre en 24 à 48 heures. Urgence : antibiothérapie et drainage biliaire.' },
  { id: 'occlusion', nom: 'Triade de l’occlusion intestinale', el: ['Douleurs abdominales', 'Vomissements', 'Arrêt des matières et des gaz'], evoque: 'Occlusion intestinale', m: 'gastro', note: 'Le météorisme complète le tableau (tétrade). Scanner abdominal.' },
  { id: 'dieulafoy', nom: 'Triade de Dieulafoy', el: ['Hyperesthésie cutanée de la fosse iliaque droite', 'Défense musculaire', 'Douleur au point de McBurney'], evoque: 'Appendicite aiguë', m: 'gastro' },
  { id: 'saint', nom: 'Triade de Saint', el: ['Lithiase biliaire', 'Diverticulose colique', 'Hernie hiatale'], evoque: 'Association fréquente de trois affections digestives', m: 'gastro', note: 'Rappelle de rechercher plusieurs causes devant une douleur abdominale.' },
  { id: 'plummer', nom: 'Syndrome de Plummer-Vinson (Kelly-Paterson)', el: ['Dysphagie', 'Anémie ferriprive', 'Membranes (anneaux) œsophagiennes'], evoque: 'Syndrome de Plummer-Vinson, à risque de cancer épidermoïde', m: 'gastro' },
  { id: 'hemochromatose', nom: 'Triade de Troisier (« diabète bronzé »)', el: ['Diabète', 'Cirrhose (hépatomégalie)', 'Mélanodermie'], evoque: 'Hémochromatose évoluée', m: 'gastro', note: 'Aujourd’hui dépistée bien avant : coefficient de saturation de la transferrine et ferritine.' },
  { id: 'mononucleose', nom: 'Triade de la mononucléose infectieuse', el: ['Fièvre', 'Angine', 'Adénopathies (cervicales)'], evoque: 'Mononucléose infectieuse (EBV)', m: 'infectio', note: 'Syndrome mononucléosique à l’hémogramme, MNI-test ou sérologie EBV. Éruption si amoxicilline.' },

  // ----- Rein, urologie -----
  { id: 'nephrotique', nom: 'Syndrome néphrotique', el: ['Protéinurie > 3 g/24 h (> 50 mg/kg/j chez l’enfant)', 'Hypoalbuminémie < 30 g/L', 'Œdèmes'], evoque: 'Syndrome néphrotique', m: 'nephro', note: 'Les œdèmes sont la conséquence clinique ; la définition est biologique (protéinurie et hypoalbuminémie).' },
  { id: 'nephritique', nom: 'Syndrome néphritique aigu', el: ['Hématurie', 'Hypertension artérielle', 'Œdèmes'], evoque: 'Glomérulonéphrite aiguë (post-infectieuse notamment)', m: 'nephro', note: 'S’y associe souvent une insuffisance rénale aiguë et une oligurie.' },
  { id: 'shu', nom: 'Triade du syndrome hémolytique et urémique', el: ['Anémie hémolytique mécanique (schizocytes)', 'Thrombopénie', 'Insuffisance rénale aiguë'], evoque: 'Syndrome hémolytique et urémique (microangiopathie thrombotique)', m: 'nephro', note: 'Chez l’enfant, souvent après une diarrhée à E. coli entérohémorragique.' },
  { id: 'geu', nom: 'Triade de la grossesse extra-utérine', el: ['Retard de règles (aménorrhée)', 'Douleurs pelviennes', 'Métrorragies'], evoque: 'Grossesse extra-utérine', m: 'gyneco', note: 'Toute femme en âge de procréer : β-hCG. Échographie endovaginale.' },
  { id: 'meigs', nom: 'Syndrome de Demons-Meigs', el: ['Tumeur ovarienne bénigne (fibrome)', 'Ascite', 'Épanchement pleural'], evoque: 'Syndrome de Demons-Meigs', m: 'gyneco', note: 'Régresse après l’exérèse de la tumeur.' },

  // ----- Pneumologie, ORL -----
  { id: 'kartagener', nom: 'Syndrome de Kartagener', el: ['Situs inversus', 'Sinusite chronique', 'Bronchectasies (dilatations des bronches)'], evoque: 'Dyskinésie ciliaire primitive', m: 'pneumo', note: 'Infertilité masculine fréquente (spermatozoïdes immobiles).' },
  { id: 'widal', nom: 'Triade de Fernand Widal (maladie de Samter)', el: ['Asthme', 'Polypose nasosinusienne', 'Intolérance à l’aspirine et aux AINS'], evoque: 'Maladie respiratoire exacerbée par l’aspirine', m: 'pneumo' },
  { id: 'bergman', nom: 'Triade de l’embolie graisseuse', el: ['Détresse respiratoire', 'Troubles neurologiques (confusion)', 'Pétéchies (cutanéo-muqueuses)'], evoque: 'Embolie graisseuse (après fracture des os longs)', m: 'ortho', note: 'Survient dans les 24 à 72 heures suivant une fracture du fémur ou du bassin.' },

  // ----- Rhumatologie, médecine interne -----
  { id: 'reiter', nom: 'Triade de Fiessinger-Leroy-Reiter', el: ['Arthrite', 'Urétrite', 'Conjonctivite'], evoque: 'Arthrite réactionnelle (spondyloarthrite)', m: 'rhumato', note: 'Après une infection urogénitale (Chlamydia) ou digestive.' },
  { id: 'felty', nom: 'Syndrome de Felty', el: ['Polyarthrite rhumatoïde', 'Splénomégalie', 'Neutropénie'], evoque: 'Syndrome de Felty', m: 'rhumato', note: 'Risque infectieux lié à la neutropénie.' },
  { id: 'sjogren', nom: 'Triade du syndrome de Gougerot-Sjögren', el: ['Sécheresse oculaire (xérophtalmie)', 'Sécheresse buccale (xérostomie)', 'Atteinte articulaire ou systémique'], evoque: 'Syndrome de Gougerot-Sjögren', m: 'rhumato', note: 'Anticorps anti-SSA/anti-SSB, biopsie des glandes salivaires accessoires. Risque de lymphome.' },
  { id: 'behcet', nom: 'Triade de Behçet', el: ['Aphtose buccale récidivante', 'Aphtose génitale', 'Uvéite'], evoque: 'Maladie de Behçet', m: 'rhumato', note: 'Pseudo-folliculite, thromboses veineuses, test pathergique.' },
  { id: 'basedow', nom: 'Triade de Basedow', el: ['Goitre diffus', 'Exophtalmie', 'Thyrotoxicose'], evoque: 'Maladie de Basedow', m: 'endoc', note: 'Anticorps anti-récepteur de la TSH.' },
  { id: 'whipple', nom: 'Triade de Whipple', el: ['Symptômes compatibles avec une hypoglycémie', 'Glycémie basse mesurée au même moment', 'Disparition des symptômes après correction de la glycémie'], evoque: 'Hypoglycémie authentique', m: 'endoc', note: 'Chez le non-diabétique, elle impose la recherche d’une cause (insulinome, médicaments, insuffisance surrénale…).' },

  // ----- Infectiologie, pédiatrie, néonatologie -----
  { id: 'toxo', nom: 'Triade de la toxoplasmose congénitale', el: ['Hydrocéphalie', 'Choriorétinite', 'Calcifications intracrâniennes'], evoque: 'Toxoplasmose congénitale grave', m: 'pedia', note: 'Prévention : sérologie mensuelle des femmes enceintes non immunisées et règles hygiéno-diététiques.' },
  { id: 'gregg', nom: 'Triade de Gregg', el: ['Cataracte', 'Surdité', 'Cardiopathie (persistance du canal artériel)'], evoque: 'Rubéole congénitale', m: 'pedia', note: 'Prévention par la vaccination ROR.' },
  { id: 'hutchinson', nom: 'Triade de Hutchinson', el: ['Dents de Hutchinson (incisives encochées)', 'Kératite interstitielle', 'Surdité'], evoque: 'Syphilis congénitale tardive', m: 'infectio' },

  // ----- Urgences, toxicologie, traumatologie -----
  { id: 'letale', nom: 'Triade létale du traumatisé', el: ['Hypothermie', 'Acidose', 'Coagulopathie'], evoque: 'Choc hémorragique grave du polytraumatisé', m: 'urgences', note: 'Cercle vicieux à prévenir : réchauffement, contrôle rapide du saignement (damage control), transfusion précoce.' },
  { id: 'opiaces', nom: 'Triade de l’intoxication aux opioïdes', el: ['Troubles de conscience (coma)', 'Myosis serré', 'Bradypnée (dépression respiratoire)'], evoque: 'Intoxication aux opioïdes', m: 'urgences', note: 'Antidote : naloxone, en titration.' },
  { id: 'anticholinergique', nom: 'Syndrome anticholinergique', el: ['Mydriase, tachycardie, sécheresse cutanéo-muqueuse', 'Rétention urinaire, iléus', 'Confusion, agitation, hallucinations'], evoque: 'Intoxication par anticholinergiques (antidépresseurs tricycliques, antihistaminiques…)', m: 'urgences', note: 'Pour les tricycliques, surveiller l’ECG (élargissement des QRS) : risque de troubles du rythme.' },
  { id: 'co', nom: 'Triade de l’intoxication au monoxyde de carbone', el: ['Céphalées', 'Nausées ou vomissements', 'Vertiges ou malaise, souvent chez plusieurs personnes d’un même lieu'], evoque: 'Intoxication au monoxyde de carbone', m: 'urgences', note: 'Mesurer le CO (HbCO) ; oxygène à fort débit, oxygénothérapie hyperbare selon les critères.' },
];
