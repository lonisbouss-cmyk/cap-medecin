// CAP MÉDECIN — fiches de cours : EDN et ECOS
import type { Fiche } from './types';

export const FICHES2: Fiche[] = [
  // ======================= CARDIOLOGIE =======================
  {
    id: 'car-sca', m: 'cardio', titre: 'Syndromes coronariens aigus',
    intro: 'Le syndrome coronarien aigu (SCA) résulte le plus souvent de la rupture d’une plaque d’athérome avec thrombose coronaire. C’est une urgence.',
    parts: [
      { t: 'Diagnostic', l: ['Douleur thoracique rétrosternale constrictive, prolongée (> 20 min), irradiant à la mâchoire ou aux bras, résistante à la trinitrine.', 'ECG dans les 10 minutes : SCA avec sus-décalage persistant du segment ST (ST+) ou sans sus-décalage (ST−).', 'Sus-décalage du ST dans au moins deux dérivations contiguës, avec miroir ; un bloc de branche gauche nouveau dans un contexte typique est traité comme un ST+.', 'Troponine ultrasensible : confirme la nécrose myocardique ; ne doit jamais retarder la reperfusion d’un ST+.'] },
      { t: 'Prise en charge du SCA ST+', l: ['Appel du SAMU (15), surveillance scopée, défibrillateur à proximité.', 'Reperfusion en urgence : angioplastie primaire si réalisable dans les 120 minutes suivant le diagnostic ; sinon fibrinolyse (en l’absence de contre-indication) puis coronarographie.', 'Aspirine, anticoagulation, anti-P2Y12 selon le protocole ; antalgiques ; oxygène seulement si SpO2 < 90 %.'] },
      { t: 'Après l’infarctus', l: ['Traitement de prévention secondaire : bêtabloquant, antiagrégation (double pendant 12 mois en général), statine à forte dose, IEC ; mnémotechnique « BASIC ».', 'Arrêt du tabac, réadaptation cardiaque, contrôle des facteurs de risque.', 'Complications : troubles du rythme (fibrillation ventriculaire précoce), insuffisance cardiaque, complications mécaniques, péricardite.'] },
    ],
    art: ['tropo', 'ldl'],
    arrets: ['aap', 'bb', 'statines', 'iec', 'dinitrate'],
    retenir: ['ECG en moins de 10 min.', 'ST+ : reperfusion sans attendre la troponine.', 'BASIC : bêtabloquant, antiagrégants, statine, IEC, contrôle des facteurs de risque.'],
  },
  {
    id: 'car-ic-fa', m: 'cardio', titre: 'Insuffisance cardiaque, HTA et fibrillation atriale',
    intro: 'Ces trois pathologies fréquentes sont étroitement liées : l’HTA favorise l’insuffisance cardiaque et la fibrillation atriale, qui s’aggravent mutuellement.',
    parts: [
      { t: 'Insuffisance cardiaque', l: ['Signes gauches : dyspnée d’effort puis orthopnée, crépitants ; signes droits : œdèmes, turgescence jugulaire, reflux hépatojugulaire.', 'Diagnostic : peptides natriurétiques et échocardiographie (FE réduite ≤ 40 %, modérément réduite 41 – 49 %, préservée ≥ 50 %).', 'Œdème aigu pulmonaire : position assise, oxygène, diurétique de l’anse IV, dérivés nitrés si PA conservée ; rechercher le facteur déclenchant.', 'FE réduite : quatre classes de fond qui améliorent la survie (IEC/ARA II ou sacubitril-valsartan, bêtabloquant, antialdostérone, iSGLT2), diurétiques selon la congestion.'] },
      { t: 'Hypertension artérielle', l: ['Confirmer hors cabinet (automesure ou MAPA). Bilan initial : ionogramme, créatinine, glycémie, bilan lipidique, protéinurie, ECG.', 'Mesures hygiéno-diététiques (sel, poids, activité, alcool).', 'Première intention : IEC ou ARA II, inhibiteur calcique ou diurétique thiazidique ; bithérapie souvent d’emblée.', 'Objectif habituel < 140/90 mmHg au cabinet, plus bas si bien toléré.'] },
      { t: 'Fibrillation atriale', l: ['Rythme irrégulier, absence d’ondes P, trémulation de la ligne de base à l’ECG.', 'Risque embolique évalué par le score CHA2DS2-VASc ; risque hémorragique évalué et corrigé.', 'Anticoagulation de préférence par AOD (sauf valve mécanique ou rétrécissement mitral serré).', 'Stratégie de contrôle de fréquence (bêtabloquant, digoxine) ou de rythme (cardioversion, antiarythmiques, ablation).'] },
    ],
    art: ['bnp', 'cha2ds2', 'pa'],
    arrets: ['diur', 'iec', 'bb', 'aod', 'avk', 'digoxine', 'amiodarone', 'icalc'],
    retenir: ['BNP bas : IC aiguë très improbable.', 'HTA : confirmer hors cabinet.', 'FA : CHA2DS2-VASc → anticoagulation.'],
  },

  // ======================= PNEUMOLOGIE =======================
  {
    id: 'pne-asthme-bpco', m: 'pneumo', titre: 'Asthme et BPCO',
    intro: 'Deux maladies obstructives des voies aériennes : l’asthme, inflammatoire et réversible ; la BPCO, liée surtout au tabac et peu réversible.',
    parts: [
      { t: 'Asthme', l: ['Symptômes variables (sifflements, dyspnée, toux, oppression), souvent nocturnes ou déclenchés par les allergènes, l’effort ou les infections.', 'Spirométrie : trouble ventilatoire obstructif réversible après bronchodilatateur.', 'Traitement de fond centré sur les corticoïdes inhalés ; bêta-2 de courte ou de longue durée selon les recommandations en vigueur, jamais de bêta-2 de longue durée seul.', 'Exacerbation grave : difficulté à parler, FR > 30/min, FC > 120/min, DEP < 50 % ; signes de gravité extrême : troubles de conscience, silence auscultatoire, épuisement. Bronchodilatateurs nébulisés, corticoïdes systémiques, oxygène.'] },
      { t: 'BPCO', l: ['Facteur principal : tabac (paquets-années). Dépistage par spirométrie : VEMS/CVF < 0,70 après bronchodilatateur.', 'Arrêt du tabac : seule mesure qui ralentit le déclin du VEMS.', 'Bronchodilatateurs de longue durée, réhabilitation respiratoire, vaccinations (grippe, pneumocoque, Covid-19).', 'Exacerbation : bronchodilatateurs, oxygène titré (SpO2 88 – 92 %), corticoïdes courts, antibiotiques si expectoration purulente.', 'Oxygénothérapie de longue durée si PaO2 ≤ 55 mmHg au repos (ou 56 – 59 avec complications).'] },
    ],
    art: ['sao2', 'paco2'],
    arrets: ['b2', 'ci', 'cortico'],
    retenir: ['Asthme : corticoïde inhalé = traitement de fond.', 'BPCO : arrêt du tabac avant tout.', 'Hypercapnique : SpO2 cible 88-92 %.'],
  },
  {
    id: 'pne-ep-pneumo', m: 'pneumo', titre: 'Pneumopathie aiguë communautaire et embolie pulmonaire',
    intro: 'Deux urgences fréquentes devant une dyspnée aiguë : l’une infectieuse, l’autre thromboembolique.',
    parts: [
      { t: 'Pneumopathie aiguë communautaire', l: ['Toux, fièvre, dyspnée, douleur thoracique ; foyer de crépitants. Confirmation par la radiographie thoracique.', 'Gravité : CRB-65, signes de sepsis, comorbidités ; hospitalisation si critères.', 'Pneumocoque = germe le plus fréquent et le plus grave : amoxicilline en première intention chez l’adulte sain. Formes atypiques (Mycoplasma, Legionella) : macrolides.', 'Réévaluation clinique à 48 – 72 heures.'] },
      { t: 'Embolie pulmonaire', l: ['Dyspnée brutale, douleur thoracique, tachycardie, parfois syncope ; terrain à risque (chirurgie, immobilisation, cancer, contraception œstroprogestative).', 'Probabilité clinique (Wells, Genève révisé) puis : faible ou intermédiaire → D-dimères ; forte (ou D-dimères positifs) → angioscanner thoracique.', 'EP grave (choc, hypotension) : échographie cardiaque au lit, thrombolyse.', 'Anticoagulation curative en l’absence de contre-indication, dès la suspicion forte ; durée d’au moins 3 mois, selon le caractère provoqué ou non.'] },
    ],
    art: ['crb65', 'wells', 'ddim'],
    arrets: ['peni', 'macro', 'hep', 'aod'],
    retenir: ['PAC : amoxicilline (pneumocoque).', 'EP : probabilité clinique d’abord.', 'D-dimères inutiles si probabilité forte.'],
  },

  // ======================= NÉPHROLOGIE =======================
  {
    id: 'nep-ira-irc', m: 'nephro', titre: 'Insuffisance rénale aiguë et chronique',
    intro: 'L’insuffisance rénale aiguë (IRA) est une baisse rapide du débit de filtration glomérulaire, souvent réversible ; la maladie rénale chronique évolue sur plus de 3 mois.',
    parts: [
      { t: 'Insuffisance rénale aiguë', l: ['Trois mécanismes : fonctionnelle (prérénale : hypovolémie, hypotension, IEC/AINS), organique (nécrose tubulaire aiguë, néphropathies glomérulaires ou interstitielles), obstructive (postrénale).', 'Premier réflexe devant une anurie : rechercher un obstacle (globe vésical, échographie rénale).', 'Arguments pour une IRA fonctionnelle : urée/créatinine élevée, natriurèse basse (< 20 mmol/L), urines concentrées.', 'Urgences : hyperkaliémie menaçante, œdème pulmonaire, acidose sévère → épuration extrarénale si échec du traitement médical.'] },
      { t: 'Maladie rénale chronique', l: ['DFG < 60 mL/min/1,73 m² ou marqueurs d’atteinte rénale (albuminurie) pendant plus de 3 mois.', 'Causes principales : diabète et HTA.', 'Néphroprotection : contrôle tensionnel, IEC ou ARA II en cas d’albuminurie, iSGLT2, éviter les néphrotoxiques (AINS, produits de contraste iodés non nécessaires).', 'Complications : anémie (déficit en EPO), troubles phosphocalciques, acidose, hyperkaliémie. Préparer la suppléance (dialyse, transplantation) au stade 5.'] },
    ],
    art: ['creat', 'ckdepi', 'cockcroft', 'diurese', 'proteinurie'],
    arrets: ['iec', 'ains', 'metformine'],
    retenir: ['Anurie : chercher un obstacle.', 'Natriurèse basse = IRA fonctionnelle.', 'MRC : diabète et HTA.'],
  },
  {
    id: 'nep-ions', m: 'nephro', titre: 'Dyskaliémies, dysnatrémies et troubles acido-basiques',
    intro: 'Les troubles hydroélectrolytiques sont fréquents à l’hôpital et peuvent mettre la vie en jeu.',
    parts: [
      { t: 'Hyperkaliémie', l: ['Causes : insuffisance rénale, médicaments (IEC, ARA II, spironolactone, AINS), acidose, lyse cellulaire ; éliminer une fausse hyperkaliémie (hémolyse).', 'ECG : ondes T amples et pointues, puis allongement du PR, élargissement des QRS, bradycardie, risque d’arrêt cardiaque.', 'Urgence : sels de calcium IV si signes ECG (protection myocardique), insuline + glucose, bêta-2 mimétiques, puis épuration (résines, diurétiques, dialyse).'] },
      { t: 'Hypokaliémie', l: ['Causes : pertes digestives (diarrhée, vomissements), diurétiques, hyperaldostéronisme.', 'ECG : ondes T plates, onde U, sous-décalage du ST, troubles du rythme (torsades de pointes). Supplémentation potassique, jamais en IV rapide.'] },
      { t: 'Hyponatrémie', l: ['Reflète une hyperhydratation intracellulaire. Évaluer le volume extracellulaire : déshydratation (pertes), euvolémie (SIADH, potomanie), hyperhydratation (insuffisance cardiaque, cirrhose, syndrome néphrotique).', 'Formes sévères symptomatiques (convulsions, coma) : sérum salé hypertonique en urgence, avec une correction limitée (≤ 10 mmol/L le premier jour) pour éviter la myélinolyse centropontine.'] },
      { t: 'Acidoses métaboliques', l: ['Calculer le trou anionique. Augmenté : acidocétose, acidose lactique, insuffisance rénale, intoxications. Normal : diarrhée, acidose tubulaire.'] },
    ],
    art: ['k', 'na', 'ta', 'hco3', 'nacorr'],
    arrets: ['diur', 'iec'],
    retenir: ['Hyperkaliémie + ECG : calcium IV d’abord.', 'Hyponatrémie : corriger lentement.', 'Acidose : toujours calculer le trou anionique.'],
  },

  // ======================= INFECTIOLOGIE =======================
  {
    id: 'inf-sepsis-meningite', m: 'infectio', titre: 'Sepsis, purpura fulminans et méningites',
    intro: 'Le sepsis est une dysfonction d’organe menaçant le pronostic vital, causée par une réponse inappropriée de l’hôte à une infection. Chaque heure compte.',
    parts: [
      { t: 'Sepsis et choc septique', l: ['Repérage : qSOFA ≥ 2 (FR ≥ 22, PAS ≤ 100 mmHg, confusion), lactates. Sepsis = augmentation du SOFA ≥ 2.', 'Choc septique : vasopresseurs nécessaires pour une PAM ≥ 65 mmHg et lactates > 2 mmol/L malgré un remplissage adapté.', 'Dans l’heure : hémocultures, lactates, antibiothérapie probabiliste large, remplissage par cristalloïdes, noradrénaline si hypotension persistante, contrôle de la source (drainage, ablation de matériel).'] },
      { t: 'Purpura fulminans', l: ['Purpura extensif avec au moins un élément nécrotique ou ecchymotique > 3 mm, dans un contexte fébrile : urgence absolue (méningocoque surtout).', 'Injection immédiate de ceftriaxone (ou céfotaxime), avant tout prélèvement si nécessaire, puis transfert médicalisé.'] },
      { t: 'Méningite bactérienne', l: ['Syndrome méningé fébrile ; signes de gravité : troubles de conscience, signes de localisation, convulsions, purpura.', 'Ponction lombaire en urgence (après imagerie seulement si signes de localisation, convulsions récentes ou trouble de conscience marqué) ; hémocultures.', 'LCR purulent : C3G à forte dose ; dexaméthasone avant ou avec la première dose d’antibiotique (pneumocoque, méningocoque).', 'Antibioprophylaxie des sujets contacts d’une infection invasive à méningocoque ; déclaration obligatoire.'] },
    ],
    art: ['qsofa', 'lact', 'pam', 'crp'],
    arrets: ['c3g', 'amino'],
    retenir: ['Sepsis : antibiotiques dans l’heure.', 'Purpura fulminans : ceftriaxone immédiate.', 'Méningite : dexaméthasone + C3G.'],
  },
  {
    id: 'inf-urinaire', m: 'infectio', titre: 'Infections urinaires de l’adulte',
    intro: 'E. coli est responsable de la grande majorité des infections urinaires communautaires. La prise en charge dépend du tableau et des facteurs de risque de complication.',
    parts: [
      { t: 'Cystite aiguë simple', l: ['Femme sans facteur de risque de complication : brûlures mictionnelles, pollakiurie, sans fièvre ni douleur lombaire.', 'Bandelette urinaire suffisante (ECBU inutile).', 'Traitement : fosfomycine-trométamol en dose unique ; alternative : pivmécillinam.'] },
      { t: 'Pyélonéphrite aiguë', l: ['Fièvre, douleur lombaire, signes urinaires.', 'ECBU avant antibiothérapie ; échographie rénale (recherche d’obstacle) dans les 24 heures si forme à risque de complication, en urgence si forme grave ou hyperalgique.', 'Traitement probabiliste par C3G ou fluoroquinolone (si pas de prise dans les 6 derniers mois), puis adaptation à l’antibiogramme.', 'Pyélonéphrite obstructive : drainage chirurgical ou endoscopique en urgence.'] },
      { t: 'Chez l’homme et la femme enceinte', l: ['Chez l’homme, toute infection urinaire est traitée comme une infection à risque de complication (prostate) ; ECBU systématique.', 'Grossesse : dépistage et traitement de la colonisation urinaire ; pas de fluoroquinolone.'] },
    ],
    art: ['bu', 'ecbu'],
    arrets: ['fosfo', 'c3g', 'fq', 'cotrim'],
    retenir: ['Cystite simple : BU + fosfomycine.', 'PNA : ECBU avant antibiotique.', 'Obstacle + infection = drainage urgent.'],
  },

  // ======================= NEUROLOGIE =======================
  {
    id: 'neu-avc', m: 'neuro', titre: 'Accident vasculaire cérébral',
    intro: 'L’AVC est un déficit neurologique soudain d’origine vasculaire. Ischémique dans environ 80 % des cas, hémorragique dans 20 %. « Time is brain ».',
    parts: [
      { t: 'Reconnaître', l: ['Signes d’alerte (« VITE ») : visage paralysé, inertie d’un membre, trouble de la parole, en urgence appeler le 15.', 'Noter l’heure exacte de début (ou de dernière fois vu sans symptôme).', 'Score NIHSS pour quantifier le déficit.'] },
      { t: 'Prise en charge', l: ['IRM cérébrale (ou scanner) en urgence pour distinguer ischémie et hémorragie.', 'AVC ischémique : thrombolyse IV si délai le permet (classiquement jusqu’à 4 h 30 après le début, au-delà sur imagerie de pénombre) ; thrombectomie mécanique en cas d’occlusion d’une grosse artère.', 'Unité neurovasculaire ; prévention des complications (fausse route : test de déglutition, escarres, phlébite).', 'Prévention secondaire : antiagrégant (ou anticoagulant si FA), statine, contrôle tensionnel ; recherche de la cause (ECG, Holter, échographie cardiaque, imagerie des troncs supra-aortiques).'] },
      { t: 'AIT', l: ['Déficit transitoire sans lésion à l’imagerie : urgence, car le risque d’AVC est maximal dans les jours suivants.'] },
    ],
    art: ['nihss', 'glyc'],
    arrets: ['aap', 'statines', 'aod'],
    retenir: ['Heure de début = décision thérapeutique.', 'Imagerie avant tout traitement.', 'AIT = urgence.'],
  },
  {
    id: 'neu-epilepsie-cephalee', m: 'neuro', titre: 'Crises d’épilepsie et céphalées',
    intro: 'Une crise épileptique est une manifestation clinique due à une décharge excessive et synchrone de neurones corticaux ; la céphalée est l’un des motifs de consultation les plus fréquents.',
    parts: [
      { t: 'Crise et état de mal', l: ['Crise généralisée tonico-clonique : perte de connaissance, phase tonique puis clonique, phase post-critique (confusion), morsure latérale de langue.', 'État de mal épileptique : crise ≥ 5 minutes ou crises successives sans reprise de conscience : benzodiazépine (diazépam, midazolam) puis antiépileptique IV ; rechercher une cause (hypoglycémie, sevrage, infection, lésion).', 'Première crise : glycémie, ionogramme, imagerie, EEG.'] },
      { t: 'Céphalées', l: ['Signes d’alarme d’une céphalée secondaire : début brutal en coup de tonnerre (hémorragie méningée), fièvre et raideur de nuque (méningite), signes neurologiques, aggravation progressive, âge > 50 ans (maladie de Horton).', 'Migraine : crises de 4 à 72 heures, unilatérale, pulsatile, aggravée par l’effort, avec nausées, photo- et phonophobie ; aura possible.', 'Hémorragie méningée suspectée : scanner sans injection en urgence, ponction lombaire si scanner normal.'] },
    ],
    arrets: ['antiep', 'bzd'],
    retenir: ['État de mal : ≥ 5 min → benzodiazépine.', 'Céphalée en coup de tonnerre = hémorragie méningée jusqu’à preuve du contraire.', 'Après 50 ans : penser Horton.'],
  },

  // ======================= GASTRO =======================
  {
    id: 'gas-hemorragie-cirrhose', m: 'gastro', titre: 'Hémorragies digestives et cirrhose',
    intro: 'L’hémorragie digestive haute (hématémèse, méléna) est une urgence fréquente ; ses deux grandes causes sont l’ulcère et l’hypertension portale de la cirrhose.',
    parts: [
      { t: 'Hémorragie digestive haute', l: ['Évaluer la gravité : pouls, PA, signes de choc ; deux voies veineuses, groupage et RAI.', 'Transfusion si nécessaire avec un objectif d’Hb autour de 7 g/dL (plus haut si coronaropathie).', 'IPP IV en cas de suspicion d’ulcère ; endoscopie digestive haute dans les 24 heures (plus tôt si instabilité).', 'Rupture de varices œsophagiennes sur cirrhose : vasoactifs (terlipressine, somatostatine), antibioprophylaxie, ligature endoscopique.'] },
      { t: 'Cirrhose', l: ['Causes principales : alcool, stéatohépatite métabolique, hépatites virales B et C.', 'Complications : ascite, hémorragie digestive, encéphalopathie hépatique, infection du liquide d’ascite, carcinome hépatocellulaire (dépistage échographique tous les 6 mois).', 'Gravité : score de Child-Pugh, score MELD.'] },
    ],
    art: ['hb', 'childpugh', 'tp'],
    arrets: ['ipp'],
    retenir: ['HDH : endoscopie dans les 24 h.', 'Varices : vasoactif + antibiotique + ligature.', 'Cirrhose : échographie tous les 6 mois.'],
  },
  {
    id: 'gas-abdo', m: 'gastro', titre: 'Douleurs abdominales aiguës et pancréatite',
    intro: 'Devant une douleur abdominale aiguë, il faut d’abord reconnaître une urgence chirurgicale ou un état de choc.',
    parts: [
      { t: 'Démarche', l: ['Siège, mode de début, irradiation, signes associés (fièvre, vomissements, arrêt des matières et des gaz).', 'Signes de gravité : choc, défense ou contracture (péritonite), occlusion.', 'Toujours éliminer une grossesse extra-utérine chez la femme en âge de procréer (hCG) et un infarctus du myocarde (ECG) devant une douleur épigastrique.', 'Appendicite : douleur de la fosse iliaque droite, fièvre modérée ; diagnostic clinique aidé de l’imagerie.'] },
      { t: 'Pancréatite aiguë', l: ['Douleur épigastrique transfixiante intense ; lipase > 3 fois la normale.', 'Causes principales : lithiase biliaire et alcool ; puis hypertriglycéridémie, hypercalcémie, médicaments.', 'Scanner à 72 – 96 heures pour évaluer la nécrose (pas d’emblée si le diagnostic est certain).', 'Traitement : antalgiques, réhydratation, renutrition orale précoce ; cholécystectomie à distance si origine biliaire.'] },
    ],
    art: ['lipase', 'cholestase', 'bili'],
    arrets: ['opio', 'paracetamol'],
    retenir: ['Femme jeune : hCG.', 'Épigastralgie : ECG.', 'Pancréatite : lipase > 3N, scanner à 72 h.'],
  },

  // ======================= ENDOCRINOLOGIE =======================
  {
    id: 'end-diabete', m: 'endoc', titre: 'Diabète et urgences métaboliques',
    intro: 'Le diabète est défini par une hyperglycémie chronique. Le type 1 résulte d’une destruction auto-immune des cellules bêta ; le type 2, d’une insulinorésistance avec insulinopénie relative.',
    parts: [
      { t: 'Diagnostic et suivi', l: ['Glycémie à jeun ≥ 1,26 g/L à deux reprises, ou ≥ 2 g/L avec symptômes, ou ≥ 2 g/L 2 heures après une charge en glucose.', 'Suivi : HbA1c trimestrielle ; dépistage des complications : fond d’œil, albuminurie et créatinine, examen des pieds (monofilament), bilan cardiovasculaire.', 'Type 2 : mesures hygiéno-diététiques et metformine ; iSGLT2 ou analogue du GLP-1 en cas de maladie cardiovasculaire, rénale ou d’insuffisance cardiaque.'] },
      { t: 'Urgences', l: ['Hypoglycémie (< 0,70 g/L) : sueurs, tremblements, palpitations, confusion, coma. Resucrage oral (15 g de sucre) si conscient ; sinon glucagon ou glucosé hypertonique IV.', 'Acidocétose (surtout type 1) : polyurie, polydipsie, douleurs abdominales, dyspnée de Kussmaul, haleine cétonique ; insuline IV, réhydratation, potassium.', 'Syndrome hyperosmolaire (sujet âgé, type 2) : déshydratation majeure, glycémie très élevée, sans cétose importante.'] },
    ],
    art: ['glyc', 'hba1c', 'k'],
    arrets: ['metformine', 'insuline', 'isglt2'],
    retenir: ['Diabète : GAJ ≥ 1,26 g/L × 2.', 'Hypoglycémie : 15 g de sucre.', 'Acidocétose : insuline + potassium.'],
  },
  {
    id: 'end-thyroide', m: 'endoc', titre: 'Dysthyroïdies et insuffisance surrénale',
    intro: 'La TSH est l’examen de première intention pour explorer la thyroïde. L’insuffisance surrénale aiguë est une urgence vitale.',
    parts: [
      { t: 'Hyperthyroïdie', l: ['Thermophobie, amaigrissement malgré un appétit conservé, tachycardie, tremblements, diarrhée.', 'TSH effondrée, T4 libre élevée. Causes : maladie de Basedow (anticorps anti-récepteur de la TSH, exophtalmie), nodules toxiques, thyroïdites, iode (amiodarone).', 'Traitement : antithyroïdiens de synthèse, bêtabloquant symptomatique ; iode radioactif ou chirurgie selon la cause.'] },
      { t: 'Hypothyroïdie', l: ['Asthénie, frilosité, prise de poids, constipation, bradycardie.', 'TSH élevée ; cause principale : thyroïdite de Hashimoto (anticorps anti-TPO).', 'Lévothyroxine, adaptée sur la TSH.'] },
      { t: 'Insuffisance surrénale aiguë', l: ['Déshydratation, hypotension voire choc, douleurs abdominales, hyponatrémie, hyperkaliémie (insuffisance primaire), hypoglycémie.', 'Causes : arrêt brutal d’une corticothérapie, stress chez un insuffisant surrénalien connu.', 'Urgence : hydrocortisone injectable sans attendre les résultats, remplissage. Éducation du patient : doubler les doses en cas de stress.'] },
    ],
    art: ['tsh', 'na', 'k'],
    arrets: ['levo', 'cortico', 'amiodarone'],
    retenir: ['TSH en première intention.', 'Basedow : anticorps anti-RTSH.', 'ISA : hydrocortisone sans attendre.'],
  },

  // ======================= HÉMATOLOGIE =======================
  {
    id: 'hem-anemie', m: 'hemato', titre: 'Démarche devant une anémie',
    intro: 'L’anémie est une diminution de l’hémoglobine. Le VGM et les réticulocytes orientent le diagnostic.',
    parts: [
      { t: 'Tolérance', l: ['Évaluer la tolérance (dyspnée, angor, tachycardie, hypotension) et la vitesse d’installation, plus que le chiffre seul.'] },
      { t: 'Orientation', l: ['Microcytaire : doser la ferritine. Basse = carence martiale ; chez l’adulte, rechercher un saignement (digestif surtout, gynécologique chez la femme).', 'Normocytaire régénérative (réticulocytes élevés) : hémorragie aiguë ou hémolyse (haptoglobine effondrée, LDH et bilirubine libre élevées).', 'Normocytaire arégénérative : inflammation, insuffisance rénale, atteinte médullaire (myélogramme si plusieurs lignées touchées).', 'Macrocytaire : alcool, carence en vitamine B12 (maladie de Biermer) ou en folates, hypothyroïdie, médicaments, myélodysplasie.'] },
      { t: 'Transfusion', l: ['Indication selon la tolérance, le terrain et le seuil (souvent 7 g/dL, 8 – 10 g/dL chez le coronarien ou en cas de mauvaise tolérance).', 'Contrôle ultime prétransfusionnel au lit du patient : concordance identité et compatibilité ABO.'] },
    ],
    art: ['hb', 'vgm', 'retic', 'ferritine'],
    retenir: ['Microcytose : ferritine.', 'Réticulocytes élevés : hémorragie ou hémolyse.', 'Contrôle ultime au lit avant transfusion.'],
  },
  {
    id: 'hem-hemostase', m: 'hemato', titre: 'Hémostase et anticoagulants',
    intro: 'Le bilan d’hémostase (plaquettes, TP, TCA, fibrinogène) oriente devant un saignement ; les anticoagulants exposent à un risque hémorragique iatrogène fréquent.',
    parts: [
      { t: 'Bilan', l: ['Hémostase primaire : plaquettes, facteur de von Willebrand.', 'Coagulation : TP (voie extrinsèque), TCA (voie intrinsèque), fibrinogène.', 'CIVD : thrombopénie, TP bas, fibrinogène bas, D-dimères élevés, dans un contexte (sepsis, obstétrique, cancer).'] },
      { t: 'Anticoagulants', l: ['Héparines : surveiller les plaquettes (thrombopénie induite par l’héparine).', 'AVK : INR, nombreuses interactions, antidote vitamine K.', 'AOD : pas de surveillance biologique de routine, adaptation à la fonction rénale.', 'Hémorragie grave sous anticoagulant : arrêt, antidote spécifique ou CCP, prise en charge de la cause.'] },
      { t: 'Maladie thromboembolique veineuse', l: ['Facteurs de risque : immobilisation, chirurgie, cancer, grossesse et post-partum, contraception œstroprogestative, thrombophilie.', 'Thrombose veineuse profonde : diagnostic par échographie-doppler veineuse.', 'Prévention par HBPM en situation à risque.'] },
    ],
    art: ['plq', 'tp', 'inr', 'tca', 'fibri', 'ddim'],
    arrets: ['hep', 'avk', 'aod', 'aap'],
    retenir: ['TIH : surveiller les plaquettes sous héparine.', 'AVK : INR 2-3.', 'TVP : écho-doppler.'],
  },

  // ======================= PÉDIATRIE =======================
  {
    id: 'ped-bases', m: 'pedia', titre: 'L’enfant : croissance, vaccins, fièvre et déshydratation',
    intro: 'L’enfant n’est pas un adulte en miniature : normes, présentations cliniques et posologies changent avec l’âge et le poids.',
    parts: [
      { t: 'Croissance et développement', l: ['Suivi sur les courbes du carnet de santé (poids, taille, périmètre crânien, IMC).', 'Repères : tenue de tête vers 3 mois, position assise vers 6 – 9 mois, marche vers 12 – 18 mois, premiers mots vers 12 mois.'] },
      { t: 'Vaccinations', l: ['Calendrier vaccinal obligatoire pour les enfants nés depuis 2018 : 11 vaccins (diphtérie, tétanos, poliomyélite, coqueluche, Haemophilus influenzae b, hépatite B, pneumocoque, méningocoque C, rougeole, oreillons, rubéole).', 'Vaccinations récentes : méningocoques B et ACWY selon le calendrier en vigueur.'] },
      { t: 'Fièvre', l: ['Nourrisson de moins de 3 mois fébrile : évaluation médicale urgente, risque d’infection bactérienne sévère.', 'Signes de gravité : purpura, troubles de conscience, signes de choc (temps de recoloration > 3 s), détresse respiratoire.', 'Antipyrétique : paracétamol à dose adaptée au poids ; découvrir l’enfant, faire boire.'] },
      { t: 'Gastro-entérite et déshydratation', l: ['Évaluer la perte de poids : déshydratation sévère au-delà de 10 %.', 'Soluté de réhydratation orale (SRO) en petites quantités fréquentes ; voie IV si échec ou déshydratation sévère.', 'Poursuivre l’alimentation ; pas d’antibiotique en règle.'] },
    ],
    art: ['temp', 'apgar'],
    arrets: ['paracetamol'],
    retenir: ['Fièvre < 3 mois = urgence.', '11 vaccins obligatoires.', 'SRO en première intention.'],
  },

  // ======================= GYNÉCO-OBSTÉTRIQUE =======================
  {
    id: 'gyn-grossesse', m: 'gyneco', titre: 'Grossesse normale et suivi prénatal',
    intro: 'La grossesse dure environ 41 semaines d’aménorrhée (SA). Le suivi prénatal dépiste précocement les complications maternelles et fœtales.',
    parts: [
      { t: 'Suivi', l: ['Diagnostic par dosage des hCG ; datation par l’échographie du 1er trimestre (longueur craniocaudale).', 'Sept consultations prénatales obligatoires et trois échographies recommandées (vers 12, 22 et 32 SA).', 'Dépistage combiné de la trisomie 21 au 1er trimestre (clarté nucale, marqueurs sériques, âge) ; ADN fœtal libre circulant si risque intermédiaire ou élevé.', 'Sérologies (toxoplasmose si non immune, rubéole, syphilis, hépatite B, VIH proposée), groupe et RAI, glycémie selon le terrain.', 'Supplémentation en acide folique en période périconceptionnelle (prévention des anomalies de fermeture du tube neural).'] },
      { t: 'Médicaments et grossesse', l: ['Paracétamol : antalgique de référence.', 'AINS contre-indiqués à partir de 24 SA (à éviter dès 20 SA).', 'Contre-indiqués : IEC et ARA II, valproate, AVK au 1er trimestre, isotrétinoïne, entre autres. Toujours vérifier (CRAT).'] },
    ],
    art: ['hb'],
    arrets: ['ains', 'paracetamol', 'antiep', 'iec'],
    retenir: ['Échographies vers 12, 22 et 32 SA.', 'Acide folique avant et en début de grossesse.', 'AINS contre-indiqués au 3e trimestre.'],
  },
  {
    id: 'gyn-urgences', m: 'gyneco', titre: 'Urgences gynéco-obstétricales et contraception',
    intro: 'Grossesse extra-utérine, prééclampsie et hémorragie du post-partum sont des urgences maternelles majeures.',
    parts: [
      { t: 'Grossesse extra-utérine', l: ['Douleur pelvienne, métrorragies, retard de règles ; hCG positif sans sac intra-utérin à l’échographie au-delà du seuil de visibilité.', 'Rupture : douleur intense, choc hémorragique, épanchement péritonéal : chirurgie en urgence.', 'Formes non compliquées : méthotrexate ou cœlioscopie selon les critères.'] },
      { t: 'Prééclampsie', l: ['HTA ≥ 140/90 mmHg après 20 SA avec protéinurie > 0,3 g/24 h (ou atteinte d’organe).', 'Signes de gravité : HTA sévère, céphalées, troubles visuels, barre épigastrique, HELLP syndrome (hémolyse, cytolyse, thrombopénie), éclampsie (convulsions).', 'Seul traitement curatif : la délivrance (naissance) ; sulfate de magnésium pour prévenir ou traiter l’éclampsie.'] },
      { t: 'Hémorragie du post-partum', l: ['Pertes sanguines > 500 mL dans les 24 heures après l’accouchement ; première cause : atonie utérine.', 'Délivrance artificielle et révision utérine, massage utérin, ocytociques, puis escalade (sulprostone, gestes chirurgicaux ou radiologiques).'] },
      { t: 'Contraception', l: ['Méthodes : œstroprogestatifs (contre-indiqués notamment si tabac après 35 ans, antécédent thromboembolique, migraine avec aura), progestatifs seuls, DIU au cuivre ou hormonal, implant.', 'Contraception d’urgence : lévonorgestrel (dans les 72 h), ulipristal (dans les 5 jours), DIU au cuivre (jusqu’à 5 jours).'] },
    ],
    art: ['pa', 'proteinurie', 'plq'],
    retenir: ['Femme en âge de procréer + douleur pelvienne : hCG.', 'Prééclampsie : HTA + protéinurie après 20 SA.', 'HPP : > 500 mL, atonie utérine.'],
  },

  // ======================= URGENCES =======================
  {
    id: 'urg-acr', m: 'urgences', titre: 'Arrêt cardiorespiratoire',
    intro: 'Devant une personne inconsciente qui ne respire pas normalement, il faut alerter, masser et défibriller le plus vite possible.',
    parts: [
      { t: 'Chaîne de survie', l: ['Reconnaissance : absence de réponse et respiration absente ou anormale (gasps).', 'Alerte (15 ou 112), massage cardiaque externe immédiat, défibrillateur automatisé externe dès que disponible.', 'Massage : 100 à 120 compressions par minute, profondeur de 5 à 6 cm, relâchement complet, interruptions minimales ; alternance 30 compressions / 2 insufflations.'] },
      { t: 'Réanimation spécialisée', l: ['Rythmes choquables (fibrillation ventriculaire, tachycardie ventriculaire sans pouls) : choc électrique, reprise immédiate du massage ; adrénaline et amiodarone selon l’algorithme.', 'Rythmes non choquables (asystolie, activité électrique sans pouls) : adrénaline dès que possible.', 'Rechercher les causes réversibles (4 H et 4 T) : hypoxie, hypovolémie, hypo/hyperkaliémie, hypothermie ; thrombose coronaire ou pulmonaire, tamponnade, pneumothorax suffocant, toxiques.'] },
    ],
    arrets: ['amiodarone'],
    retenir: ['Masser 100-120/min, 5-6 cm.', 'DAE au plus tôt.', '4 H et 4 T.'],
  },
  {
    id: 'urg-choc', m: 'urgences', titre: 'États de choc et anaphylaxie',
    intro: 'L’état de choc est une insuffisance circulatoire aiguë responsable d’une hypoperfusion tissulaire. Il se reconnaît cliniquement, avant même l’hypotension.',
    parts: [
      { t: 'Reconnaître', l: ['Hypotension (PAS < 90 mmHg ou PAM < 65 mmHg), tachycardie, marbrures, temps de recoloration allongé, oligurie, troubles de conscience, lactates élevés.', 'Approche ABCDE : voies aériennes, respiration, circulation, état neurologique, exposition.'] },
      { t: 'Types de choc', l: ['Hypovolémique (hémorragie, déshydratation) : remplissage, transfusion, arrêt du saignement.', 'Septique (distributif) : remplissage, noradrénaline, antibiotiques, contrôle de la source.', 'Cardiogénique (infarctus, troubles du rythme) : prudence avec le remplissage, inotropes, traitement de la cause.', 'Obstructif (embolie pulmonaire, tamponnade, pneumothorax suffocant) : lever l’obstacle.', 'Anaphylactique (distributif) : voir ci-dessous.'] },
      { t: 'Anaphylaxie', l: ['Atteinte cutanéomuqueuse brutale avec atteinte respiratoire ou circulatoire, après exposition à un allergène probable.', 'Adrénaline intramusculaire immédiate (0,01 mg/kg, maximum 0,5 mg chez l’adulte), à répéter si besoin ; position adaptée, oxygène, remplissage.', 'Surveillance prolongée, prescription d’un stylo d’adrénaline auto-injectable, consultation d’allergologie.'] },
    ],
    art: ['pa', 'pam', 'lact', 'fc'],
    retenir: ['Marbrures et lactates : choc avant l’hypotension.', 'Anaphylaxie : adrénaline IM immédiate.', 'Choc obstructif : lever l’obstacle.'],
  },

  // ======================= PSYCHIATRIE =======================
  {
    id: 'psy-depression', m: 'psy', titre: 'Épisode dépressif caractérisé et crise suicidaire',
    intro: 'La dépression est fréquente et sous-diagnostiquée. Le risque suicidaire doit être évalué systématiquement, en posant la question directement.',
    parts: [
      { t: 'Épisode dépressif caractérisé', l: ['Au moins 5 symptômes pendant au moins 2 semaines, dont une humeur dépressive ou une perte d’intérêt ou de plaisir (anhédonie).', 'Autres symptômes : troubles du sommeil, de l’appétit, fatigue, ralentissement ou agitation, culpabilité, troubles de concentration, idées de mort.', 'Éliminer une cause organique (hypothyroïdie) ou toxique ; rechercher des antécédents d’épisode maniaque (trouble bipolaire).', 'Traitement : psychothérapie ; antidépresseur (ISRS en première intention) dans les formes modérées à sévères, poursuivi 6 mois à 1 an après la rémission.'] },
      { t: 'Crise suicidaire', l: ['Poser la question des idées suicidaires n’augmente pas le risque.', 'Évaluer le risque (facteurs de risque, antécédents de tentative), l’urgence (scénario, date, moyens) et la dangerosité (létalité et accès au moyen).', 'Urgence élevée : hospitalisation, éventuellement sans consentement si nécessaire ; restriction de l’accès aux moyens létaux ; numéro national de prévention du suicide 3114.'] },
    ],
    arrets: ['isrs', 'bzd', 'lithium', 'apsy'],
    retenir: ['EDC : ≥ 5 symptômes, ≥ 2 semaines.', 'Toujours rechercher un antécédent maniaque.', 'Crise suicidaire : risque, urgence, dangerosité ; 3114.'],
  },

  // ======================= ECOS =======================
  {
    id: 'ecos-com', m: 'ecos', titre: 'Communication en consultation et stations ECOS',
    intro: 'Les ECOS (examens cliniques objectifs et structurés) évaluent les compétences cliniques et relationnelles en situation simulée, avec une grille d’évaluation standardisée.',
    parts: [
      { t: 'Ouvrir et structurer', l: ['Se présenter (nom, fonction), vérifier l’identité du patient, expliquer le déroulement, obtenir l’accord.', 'Questions ouvertes au début, puis fermées pour préciser ; reformuler ; résumer avant de conclure.', 'Explorer le vécu, les inquiétudes et les attentes du patient.'] },
      { t: 'Annoncer une mauvaise nouvelle (protocole SPIKES)', l: ['S (setting) : lieu calme, assis, temps disponible, accompagnant si souhaité.', 'P (perception) : ce que le patient sait déjà.', 'I (invitation) : ce qu’il souhaite savoir.', 'K (knowledge) : informer simplement, sans jargon, par étapes, avec une phrase d’avertissement.', 'E (emotions) : accueillir les émotions, silences, empathie.', 'S (strategy and summary) : plan de prise en charge, résumé, prochain rendez-vous.'] },
      { t: 'Sur les grilles', l: ['Hygiène des mains, respect de la pudeur, explication de chaque geste à l’examen.', 'Vérifier la compréhension (faire reformuler le patient), proposer de l’aide et des documents.', 'Conclure : synthèse, plan, questions du patient.'] },
    ],
    retenir: ['Questions ouvertes puis fermées.', 'SPIKES pour l’annonce.', 'Faire reformuler le patient.'],
  },
];
