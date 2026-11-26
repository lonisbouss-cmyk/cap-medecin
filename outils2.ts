// CAP MÉDECIN — stations ECOS d'entraînement et arbres décisionnels (contenus originaux, pédagogiques)
export type Station = { id: string; titre: string; dom: string; min: number; consigne: string; grille: string[] };

export const STATIONS: Station[] = [
  {
    id: 'st-douleur-thoracique', titre: 'Douleur thoracique aux urgences', dom: 'Anamnèse et raisonnement', min: 7,
    consigne: 'M. A., 55 ans, consulte pour une douleur thoracique apparue il y a une heure. Menez l’interrogatoire, proposez les examens initiaux et annoncez votre hypothèse principale.',
    grille: ['Se présente, vérifie l’identité, explique le déroulement', 'Caractérise la douleur : siège, type, irradiation, durée, facteurs déclenchants', 'Recherche les signes associés (dyspnée, sueurs, syncope, palpitations)', 'Recherche les facteurs de risque cardiovasculaire', 'Recherche les traitements et les allergies', 'Évoque les diagnostics graves (SCA, dissection aortique, embolie pulmonaire, péricardite, pneumothorax)', 'Demande un ECG dans les 10 minutes', 'Propose troponine, bilan et surveillance scopée', 'Explique ses hypothèses au patient avec des mots simples', 'Vérifie la compréhension et laisse place aux questions'],
  },
  {
    id: 'st-annonce', titre: 'Annonce d’un diagnostic grave', dom: 'Communication', min: 7,
    consigne: 'Mme B., 48 ans, revient pour le résultat d’une biopsie mammaire, qui montre un carcinome infiltrant. Annoncez le diagnostic.',
    grille: ['Choisit un lieu calme, s’assoit, évite les interruptions', 'Demande ce que la patiente sait et ce qu’elle souhaite savoir', 'Prévient qu’il s’agit d’une nouvelle importante (« coup de semonce »)', 'Annonce le diagnostic clairement, sans jargon', 'Respecte les silences, accueille les émotions', 'Reformule et vérifie la compréhension', 'Présente la suite : bilan, RCP, plan de soins personnalisé', 'Propose une personne de confiance et un soutien (infirmière d’annonce, psychologue)', 'Donne de l’espoir réaliste sans mentir', 'Fixe un prochain rendez-vous rapproché'],
  },
  {
    id: 'st-examen-abdo', titre: 'Examen de l’abdomen', dom: 'Examen clinique', min: 7,
    consigne: 'M. C., 30 ans, consulte pour une douleur de la fosse iliaque droite depuis 12 heures. Réalisez l’examen abdominal en le commentant.',
    grille: ['Se lave les mains (friction hydroalcoolique), explique et demande l’accord', 'Installe le patient en décubitus dorsal, jambes fléchies, respecte la pudeur', 'Inspection : cicatrices, distension, mouvements respiratoires', 'Palpation douce en commençant à distance de la douleur', 'Recherche une défense ou une contracture', 'Recherche les signes de McBurney et de Blumberg', 'Palpe les orifices herniaires', 'Percussion et auscultation', 'Évoque le toucher rectal si nécessaire, avec consentement', 'Conclut et explique la suite au patient'],
  },
  {
    id: 'st-education-insuline', titre: 'Éducation à l’insulinothérapie', dom: 'Éducation thérapeutique', min: 7,
    consigne: 'M. D., 62 ans, diabétique de type 2, débute une insuline basale. Expliquez-lui l’injection, l’autosurveillance et l’hypoglycémie.',
    grille: ['Explore ce que le patient sait et ses inquiétudes', 'Explique le but du traitement simplement', 'Montre les sites d’injection et leur rotation', 'Explique la technique (pli cutané selon l’aiguille, purge, durée d’injection)', 'Explique l’autosurveillance glycémique et l’adaptation de dose', 'Décrit les signes d’hypoglycémie', 'Explique le resucrage (15 g de sucre, contrôle après 15 minutes)', 'Parle de la conduite automobile et du carnet', 'Fait reformuler (méthode « teach-back »)', 'Propose un suivi et un contact en cas de problème'],
  },
  {
    id: 'st-prescription-atb', titre: 'Rédiger une ordonnance d’antibiotique', dom: 'Prescription', min: 7,
    consigne: 'Mme E., 27 ans, non enceinte, présente une cystite aiguë simple. Rédigez l’ordonnance et donnez les conseils.',
    grille: ['Vérifie l’absence de signes de gravité ou de pyélonéphrite', 'Vérifie l’absence de grossesse et d’allergie', 'Propose la bandelette urinaire', 'Prescrit le traitement de première intention recommandé en dose unique (fosfomycine-trométamol)', 'Ordonnance complète : identification, date, molécule, dose, voie, durée, signature', 'Donne les conseils d’hydratation et de miction', 'Explique quand reconsulter (fièvre, douleur lombaire, persistance)', 'N’indique pas d’ECBU systématique dans une cystite simple', 'Vérifie la compréhension', 'Reste bienveillant et clair'],
  },
  {
    id: 'st-tabac', titre: 'Entretien motivationnel : tabac', dom: 'Prévention', min: 7,
    consigne: 'M. F., 40 ans, fumeur de 20 cigarettes par jour, consulte pour une bronchite. Abordez sa consommation de tabac.',
    grille: ['Demande la permission d’aborder le sujet', 'Utilise des questions ouvertes', 'Évalue la consommation et la dépendance (Fagerström)', 'Explore l’ambivalence (avantages et inconvénients du tabac)', 'Reflète et valorise sans culpabiliser', 'Évalue la motivation et la confiance', 'Présente les aides (substituts nicotiniques à bonne dose, varénicline, Tabac Info Service)', 'Respecte le choix du patient', 'Propose un suivi', 'Résume l’entretien'],
  },
  {
    id: 'st-neuro', titre: 'Examen neurologique d’un déficit', dom: 'Examen clinique', min: 7,
    consigne: 'Mme G., 70 ans, présente depuis 40 minutes une faiblesse du bras droit et des difficultés à parler. Réalisez l’examen ciblé et indiquez la conduite à tenir.',
    grille: ['Reconnaît une urgence neurovasculaire (alerte « AVC »)', 'Précise l’heure de début des symptômes (ou dernière heure vue normale)', 'Évalue la vigilance et le langage', 'Teste la motricité des quatre membres et de la face', 'Teste la sensibilité et le champ visuel', 'Utilise le score NIHSS ou ses éléments principaux', 'Mesure la glycémie capillaire et la pression artérielle', 'Demande une imagerie cérébrale en urgence (IRM ou scanner)', 'Évoque la thrombolyse ou la thrombectomie selon les délais', 'Informe la patiente et ses proches'],
  },
  {
    id: 'st-pediatrie-fievre', titre: 'Fièvre chez un nourrisson', dom: 'Anamnèse et conseils', min: 7,
    consigne: 'La mère de Léo, 8 mois, consulte pour une fièvre à 39 °C depuis la veille. Menez l’interrogatoire et donnez les conseils.',
    grille: ['Se présente, s’adresse à la mère et à l’enfant', 'Précise la fièvre (durée, tolérance, prise de température)', 'Recherche les signes de gravité (teint, comportement, hydratation, purpura)', 'Recherche un point d’appel infectieux', 'Vérifie le carnet de vaccination', 'Évalue l’alimentation et les urines', 'Explique les mesures physiques et le paracétamol à dose adaptée au poids', 'Explique les signes devant faire reconsulter en urgence', 'Vérifie la compréhension', 'Rassure de façon adaptée'],
  },
  {
    id: 'st-consentement', titre: 'Recueillir un consentement', dom: 'Éthique et communication', min: 7,
    consigne: 'M. H., 66 ans, doit avoir une coloscopie après un test de dépistage positif. Il hésite. Informez-le et recueillez son consentement.',
    grille: ['Explique pourquoi l’examen est proposé', 'Décrit le déroulement (préparation, anesthésie, durée)', 'Présente les bénéfices attendus', 'Présente les risques, y compris rares mais graves (perforation, hémorragie)', 'Présente les alternatives et les conséquences d’un refus', 'Laisse le temps de réfléchir et invite aux questions', 'Vérifie la compréhension', 'Respecte la décision du patient', 'Remet une information écrite', 'Note la démarche dans le dossier'],
  },
  {
    id: 'st-ecg', titre: 'Interpréter un ECG', dom: 'Raisonnement', min: 7,
    consigne: 'On vous présente l’ECG d’une patiente de 75 ans essoufflée : rythme irrégulier à 130/min, sans onde P. Interprétez-le de façon systématique et proposez une conduite.',
    grille: ['Vérifie l’identité et la qualité du tracé', 'Analyse le rythme (régulier ou non, présence d’ondes P)', 'Calcule la fréquence', 'Analyse l’axe, PR, QRS et QT', 'Recherche des troubles de la repolarisation', 'Conclut à une fibrillation atriale rapide', 'Évalue la tolérance hémodynamique', 'Évoque l’anticoagulation selon le CHA2DS2-VASc', 'Propose un contrôle de la fréquence', 'Recherche le facteur déclenchant'],
  },
];

// ---------- Arbres décisionnels ----------
export type Noeud = { t: string; c?: [string, string][]; fin?: boolean };
export type Arbre = { id: string; titre: string; d: string; m: string; n: Record<string, Noeud> };

export const ARBRES: Arbre[] = [
  {
    id: 'ab-douleur-thoracique', titre: 'Douleur thoracique aiguë', d: 'Éliminer les urgences vitales en premier.', m: 'cardio',
    n: {
      start: { t: 'Le patient présente-t-il des signes de détresse vitale (choc, détresse respiratoire, trouble de conscience) ?', c: [['Oui', 'vital'], ['Non', 'ecg']] },
      vital: { t: 'Appel du SAMU ou de la réanimation, scope, voie veineuse, oxygène si hypoxémie, ECG immédiat. Rechercher SCA, dissection aortique, embolie pulmonaire massive, tamponnade, pneumothorax suffocant.', fin: true },
      ecg: { t: 'ECG dans les 10 minutes : y a-t-il un sus-décalage persistant du segment ST ?', c: [['Oui', 'st'], ['Non', 'trop']] },
      st: { t: 'SCA ST+ : reperfusion en urgence (angioplastie primaire si possible en moins de 120 minutes, sinon fibrinolyse). Aspirine, anticoagulation.', fin: true },
      trop: { t: 'Dosage de troponine ultrasensible (cinétique). La douleur est-elle typique d’une origine coronaire ou la troponine s’élève-t-elle ?', c: [['Oui', 'sca'], ['Non', 'autres']] },
      sca: { t: 'SCA sans sus-décalage : hospitalisation en cardiologie, traitement antithrombotique, coronarographie selon le risque.', fin: true },
      autres: { t: 'Rechercher les autres causes : embolie pulmonaire (score de Wells, D-dimères), dissection (asymétrie tensionnelle, douleur migratrice), péricardite (douleur positionnelle, frottement), pneumothorax (radiographie), causes digestives ou pariétales.', fin: true },
    },
  },
  {
    id: 'ab-dyspnee', titre: 'Dyspnée aiguë', d: 'Évaluer la gravité puis orienter par la clinique.', m: 'pneumo',
    n: {
      start: { t: 'Signes de gravité : polypnée > 30/min, tirage, cyanose, SpO2 < 90 %, troubles de conscience, signes de choc ?', c: [['Oui', 'grave'], ['Non', 'auscult']] },
      grave: { t: 'Oxygène (titré si BPCO), position demi-assise, scope, gaz du sang, appel du réanimateur. Traitement étiologique en parallèle.', fin: true },
      auscult: { t: 'Que trouve l’auscultation ?', c: [['Crépitants bilatéraux', 'oap'], ['Sibilants', 'sib'], ['Foyer unilatéral, fièvre', 'pneumo'], ['Normale', 'normale'], ['Silence unilatéral', 'pno']] },
      oap: { t: 'Évoquer un œdème aigu pulmonaire : BNP, ECG, radiographie, échocardiographie ; diurétique de l’anse, dérivés nitrés si PA conservée.', fin: true },
      sib: { t: 'Asthme aigu ou exacerbation de BPCO : bronchodilatateurs nébulisés, corticoïdes, mesure du DEP ; rechercher le facteur déclenchant.', fin: true },
      pneumo: { t: 'Pneumopathie : radiographie thoracique, score CRB-65 pour l’orientation, antibiothérapie probabiliste.', fin: true },
      normale: { t: 'Auscultation normale et dyspnée : penser à l’embolie pulmonaire (Wells, D-dimères ou angioscanner), à l’acidose métabolique, à l’anémie, à l’anxiété (diagnostic d’élimination).', fin: true },
      pno: { t: 'Pneumothorax suspecté : radiographie thoracique ; exsufflation ou drainage selon la tolérance et la taille.', fin: true },
    },
  },
  {
    id: 'ab-hyponatremie', titre: 'Hyponatrémie', d: 'Évaluer la gravité, puis le volume extracellulaire.', m: 'nephro',
    n: {
      start: { t: 'Natrémie < 135 mmol/L. Y a-t-il des signes neurologiques sévères (convulsions, coma, vomissements importants) ?', c: [['Oui', 'severe'], ['Non', 'osmo']] },
      severe: { t: 'Urgence : sérum salé hypertonique en bolus selon le protocole, surveillance rapprochée de la natrémie ; ne pas dépasser une correction d’environ 10 mmol/L sur 24 h (risque de myélinolyse).', fin: true },
      osmo: { t: 'L’osmolalité plasmatique est-elle basse (hyponatrémie hypotonique) ?', c: [['Oui', 'vec'], ['Non', 'fausse']] },
      fausse: { t: 'Pseudo-hyponatrémie (hyperlipidémie, hyperprotidémie) ou hyponatrémie hypertonique (hyperglycémie, mannitol) : traiter la cause.', fin: true },
      vec: { t: 'Comment est le volume extracellulaire ?', c: [['Diminué (déshydratation)', 'dec'], ['Normal', 'normal'], ['Augmenté (œdèmes)', 'aug']] },
      dec: { t: 'Pertes de sodium rénales (diurétiques thiazidiques, insuffisance surrénale) ou digestives : réhydratation par sérum salé isotonique.', fin: true },
      normal: { t: 'SIADH, potomanie, hypothyroïdie, insuffisance corticotrope : restriction hydrique, traitement de la cause.', fin: true },
      aug: { t: 'Insuffisance cardiaque, cirrhose, syndrome néphrotique : restriction hydrosodée, diurétiques de l’anse.', fin: true },
    },
  },
  {
    id: 'ab-coma', titre: 'Trouble de conscience', d: 'ABC d’abord, glycémie toujours.', m: 'urgences',
    n: {
      start: { t: 'Les fonctions vitales sont-elles menacées (voies aériennes, respiration, circulation) ?', c: [['Oui', 'abc'], ['Non', 'gly']] },
      abc: { t: 'Libérer les voies aériennes, position latérale de sécurité, oxygène, intubation si Glasgow ≤ 8 ou détresse, remplissage si choc. Puis glycémie capillaire.', fin: true },
      gly: { t: 'Glycémie capillaire : est-elle basse ?', c: [['Oui', 'hypo'], ['Non', 'focal']] },
      hypo: { t: 'Hypoglycémie : resucrage (glucosé IV ou glucagon) ; rechercher la cause (insuline, sulfamides, alcool).', fin: true },
      focal: { t: 'Y a-t-il un signe de localisation neurologique ou une raideur méningée ?', c: [['Signe focal', 'avc'], ['Raideur méningée, fièvre', 'meninge'], ['Ni l’un ni l’autre', 'toxique']] },
      avc: { t: 'Imagerie cérébrale en urgence : AVC, hématome, tumeur, abcès.', fin: true },
      meninge: { t: 'Suspicion de méningite ou de méningo-encéphalite : hémocultures, antibiotique (et aciclovir) sans retarder ; ponction lombaire selon l’imagerie. Hémorragie méningée si début brutal.', fin: true },
      toxique: { t: 'Causes toxiques et métaboliques : intoxication (médicaments, alcool, CO), hyponatrémie, hypercalcémie, encéphalopathie hépatique, hypercapnie ; état de mal non convulsivant (EEG).', fin: true },
    },
  },
  {
    id: 'ab-anemie', titre: 'Anémie', d: 'Le VGM oriente le diagnostic.', m: 'hemato',
    n: {
      start: { t: 'L’anémie est-elle mal tolérée (angor, dyspnée de repos, syncope, choc) ?', c: [['Oui', 'urg'], ['Non', 'vgm']] },
      urg: { t: 'Hospitalisation, rechercher un saignement aigu, transfusion de concentrés de globules rouges selon la tolérance et le terrain.', fin: true },
      vgm: { t: 'Quel est le VGM ?', c: [['< 80 fL (microcytaire)', 'micro'], ['80 – 100 fL (normocytaire)', 'normo'], ['> 100 fL (macrocytaire)', 'macro']] },
      micro: { t: 'Doser la ferritine. Basse : carence martiale → rechercher un saignement (digestif chez l’homme et la femme ménopausée, gynécologique). Normale ou haute : inflammation, thalassémie.', fin: true },
      normo: { t: 'Doser les réticulocytes. Élevés (> 150 G/L) : hémorragie aiguë ou hémolyse. Bas : cause centrale (insuffisance rénale, inflammation, envahissement médullaire → myélogramme).', fin: true },
      macro: { t: 'Alcool, hypothyroïdie, médicaments, hépatopathie ; dosage de la vitamine B12 et des folates ; myélogramme si cytopénies associées.', fin: true },
    },
  },
  {
    id: 'ab-fievre-nourrisson', titre: 'Fièvre du nourrisson', d: 'L’âge et l’aspect de l’enfant guident la conduite.', m: 'pedia',
    n: {
      start: { t: 'Y a-t-il un purpura extensif ou des signes de sepsis (teint gris, hypotonie, temps de recoloration allongé) ?', c: [['Oui', 'purpura'], ['Non', 'age']] },
      purpura: { t: 'Purpura fulminans possible : antibiothérapie immédiate (ceftriaxone) dès la suspicion, appel du SAMU, remplissage.', fin: true },
      age: { t: 'Quel âge a l’enfant ?', c: [['Moins de 3 mois', 'petit'], ['3 mois ou plus', 'grand']] },
      petit: { t: 'Fièvre avant 3 mois : avis hospitalier, bilan (bandelette urinaire et ECBU, hémogramme, CRP ou procalcitonine, hémoculture ; ponction lombaire selon l’âge et la clinique).', fin: true },
      grand: { t: 'Rechercher un point d’appel (ORL, urinaire, pulmonaire, cutané). Bon état général sans point d’appel : bandelette urinaire si fièvre > 48 h ; traitement symptomatique et consignes de reconsultation.', fin: true },
    },
  },
];

// ---------- Carnet de stage ----------
export const GESTES: string[] = [
  'Examen clinique complet d’un patient',
  'Rédaction d’une observation médicale',
  'Présentation orale d’un patient à la visite',
  'Prise de la pression artérielle',
  'Réalisation et lecture d’un ECG',
  'Glycémie capillaire',
  'Bandelette urinaire',
  'Gaz du sang artériel',
  'Prélèvement veineux',
  'Pose d’une voie veineuse périphérique',
  'Sondage vésical',
  'Pose d’une sonde nasogastrique',
  'Suture simple',
  'Ponction lombaire (sous supervision)',
  'Ponction d’ascite ou pleurale (sous supervision)',
  'Toucher rectal',
  'Examen gynécologique et frottis (sous supervision)',
  'Gestes de réanimation (massage cardiaque, défibrillateur)',
  'Lavage des mains et précautions standard',
  'Rédaction d’une ordonnance',
  'Rédaction d’un certificat médical',
  'Annonce ou participation à une annonce',
  'Lecture d’une radiographie thoracique',
  'Participation à une RCP',
];
