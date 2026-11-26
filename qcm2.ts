// CAP MÉDECIN — QCM corrigés : EDN et ECOS
import type { Question } from './types';

const Q = (m: string, q: string, c: string[], a: number, e: string): Question => ({ m, q, c, a, e });

export const QCM2: Question[] = [
  // ---------- Cardiologie ----------
  Q('cardio', 'Devant une douleur thoracique suspecte, l’ECG doit être réalisé…', ['Dans les 10 minutes', 'Dans l’heure', 'Après le dosage de troponine', 'Le lendemain'], 0, 'L’ECG est l’examen clé pour identifier un SCA ST+.'),
  Q('cardio', 'Dans un SCA ST+, la troponine…', ['Doit être attendue avant la reperfusion', 'Ne doit pas retarder la reperfusion', 'Est toujours normale', 'Contre-indique l’angioplastie'], 1, 'Le diagnostic est électrocardioclinique ; la reperfusion est urgente.'),
  Q('cardio', 'L’angioplastie primaire est préférée si elle peut être réalisée dans un délai de…', ['12 heures après le diagnostic', '120 minutes après le diagnostic', '24 heures', '6 heures'], 1, 'Sinon, fibrinolyse en l’absence de contre-indication, puis coronarographie.'),
  Q('cardio', 'Un BNP < 100 pg/mL chez un patient dyspnéique…', ['Confirme une insuffisance cardiaque', 'Rend une insuffisance cardiaque aiguë très improbable', 'Signe une embolie pulmonaire', 'N’a aucune valeur'], 1, 'Excellente valeur prédictive négative.'),
  Q('cardio', 'Chez un homme en FA avec un CHA2DS2-VASc à 2, on recommande…', ['Aucun traitement', 'Une anticoagulation', 'De l’aspirine seule', 'Une cardioversion systématique'], 1, 'Anticoagulation si ≥ 2 chez l’homme (≥ 3 chez la femme), de préférence par AOD.'),
  Q('cardio', 'Quel effet indésirable est typique des IEC ?', ['Toux sèche', 'Hypokaliémie', 'Tachycardie réflexe', 'Hyperglycémie'], 0, 'Ainsi que l’angio-œdème, l’hyperkaliémie, l’insuffisance rénale fonctionnelle.'),
  Q('cardio', 'Une HTA se confirme…', ['Sur une seule mesure au cabinet', 'Par des mesures hors cabinet (automesure ou MAPA)', 'Par un ECG', 'Par un dosage de rénine'], 1, 'Pour éliminer un effet « blouse blanche ».'),
  Q('cardio', 'La trinitrine est contre-indiquée en association avec…', ['Les bêtabloquants', 'Le sildénafil', 'L’aspirine', 'Les statines'], 1, 'Risque d’hypotension sévère avec les inhibiteurs de la phosphodiestérase 5.'),

  // ---------- Pneumologie ----------
  Q('pneumo', 'Le traitement de fond de l’asthme repose principalement sur…', ['Les bêta-2 de courte durée seuls', 'Les corticoïdes inhalés', 'Les antibiotiques', 'Les antihistaminiques'], 1, 'Un bêta-2 de longue durée n’est jamais prescrit seul dans l’asthme.'),
  Q('pneumo', 'Quel signe traduit une exacerbation d’asthme de gravité extrême ?', ['Toux sèche', 'Silence auscultatoire', 'Sibilants diffus', 'Rhinite'], 1, 'Avec troubles de conscience, bradypnée, épuisement : risque d’arrêt respiratoire.'),
  Q('pneumo', 'La seule mesure qui ralentit le déclin du VEMS dans la BPCO est…', ['Les corticoïdes inhalés', 'L’arrêt du tabac', 'L’oxygène', 'Les antibiotiques'], 1, 'Sevrage tabagique accompagné (substituts nicotiniques, aide).'),
  Q('pneumo', 'Chez un BPCO hypercapnique, l’objectif de SpO2 est…', ['100 %', '94-98 %', '88-92 %', '80-85 %'], 2, 'Un excès d’oxygène peut aggraver l’hypercapnie.'),
  Q('pneumo', 'Le germe le plus fréquent des pneumopathies communautaires est…', ['Legionella', 'Le pneumocoque', 'Mycoplasma', 'Pseudomonas'], 1, 'Traitement probabiliste de l’adulte sain : amoxicilline.'),
  Q('pneumo', 'Devant une suspicion d’EP à probabilité clinique forte, on réalise…', ['Des D-dimères', 'Un angioscanner thoracique', 'Une radiographie seulement', 'Une spirométrie'], 1, 'Les D-dimères sont inutiles quand la probabilité est forte.'),
  Q('pneumo', 'Le score CRB-65 comprend…', ['La CRP', 'La confusion', 'La fièvre', 'Les leucocytes'], 1, 'Confusion, FR ≥ 30, PA basse, âge ≥ 65 ans.'),

  // ---------- Néphrologie ----------
  Q('nephro', 'Devant une anurie, le premier réflexe est…', ['Prescrire du furosémide', 'Rechercher un obstacle (globe, échographie)', 'Débuter la dialyse', 'Faire une biopsie rénale'], 1, 'Une insuffisance rénale obstructive se lève par un drainage.'),
  Q('nephro', 'Une natriurèse < 20 mmol/L dans une IRA évoque…', ['Une nécrose tubulaire aiguë', 'Une IRA fonctionnelle', 'Une IRA obstructive', 'Une glomérulonéphrite'], 1, 'Le rein réabsorbe le sodium pour défendre la volémie.'),
  Q('nephro', 'Hyperkaliémie avec QRS élargis : premier traitement ?', ['Résines échangeuses d’ions', 'Gluconate ou chlorure de calcium IV', 'Furosémide', 'Restriction alimentaire'], 1, 'Protection myocardique immédiate, puis insuline-glucose et épuration.'),
  Q('nephro', 'Une correction trop rapide d’une hyponatrémie chronique expose à…', ['Un œdème cérébral', 'Une myélinolyse centropontine', 'Une hyperkaliémie', 'Une insuffisance cardiaque'], 1, 'Limiter la correction (≤ 10 mmol/L par 24 h).'),
  Q('nephro', 'Une acidose métabolique avec trou anionique normal évoque…', ['Une acidocétose', 'Une diarrhée', 'Une acidose lactique', 'Une intoxication au méthanol'], 1, 'Perte digestive de bicarbonates, compensée par une hyperchlorémie.'),
  Q('nephro', 'Les deux premières causes de maladie rénale chronique sont…', ['Lithiase et infection', 'Diabète et HTA', 'Lupus et vascularites', 'Polykystose et Alport'], 1, 'D’où l’importance du contrôle glycémique et tensionnel.'),
  Q('nephro', 'Quels médicaments favorisent une IRA fonctionnelle, surtout associés ?', ['IEC/ARA II, diurétiques et AINS', 'Paracétamol et IPP', 'Statines et aspirine', 'Lévothyroxine et fer'], 0, 'L’association « triple whammy » est à éviter.'),

  // ---------- Infectiologie ----------
  Q('infectio', 'Les critères du qSOFA sont…', ['Fièvre, frissons, CRP', 'FR ≥ 22, PAS ≤ 100 mmHg, confusion', 'Leucocytes, lactates, PCT', 'FC > 90, T° > 38, leucocytes > 12'], 1, 'Un score ≥ 2 chez un patient infecté doit alerter.'),
  Q('infectio', 'Devant un purpura fébrile avec un élément nécrotique, il faut…', ['Faire une ponction lombaire d’abord', 'Injecter immédiatement une C3G', 'Attendre l’hémoculture', 'Prescrire de l’amoxicilline orale'], 1, 'Ceftriaxone ou céfotaxime IV ou IM sans délai, puis transfert médicalisé.'),
  Q('infectio', 'Dans la méningite bactérienne de l’adulte, la dexaméthasone est administrée…', ['Après 48 heures', 'Avant ou avec la première dose d’antibiotique', 'Uniquement si le patient est allergique', 'Jamais'], 1, 'Elle réduit les séquelles, surtout dans la méningite à pneumocoque.'),
  Q('infectio', 'Traitement de première intention d’une cystite aiguë simple ?', ['Fluoroquinolone 7 jours', 'Fosfomycine-trométamol en dose unique', 'Amoxicilline', 'Ceftriaxone'], 1, 'Après une simple bandelette urinaire.'),
  Q('infectio', 'Pyélonéphrite avec obstacle sur les voies urinaires : il faut…', ['Une antibiothérapie orale simple', 'Un drainage des urines en urgence associé aux antibiotiques', 'Attendre l’apyrexie', 'Une surveillance simple'], 1, 'Urgence urologique.'),
  Q('infectio', 'Chez l’homme, une infection urinaire fébrile…', ['Est traitée 3 jours', 'Est considérée comme à risque de complication (prostate)', 'Ne nécessite pas d’ECBU', 'Se traite par fosfomycine dose unique'], 1, 'ECBU systématique et traitement prolongé.'),
  Q('infectio', 'Le choc septique se définit par…', ['Une fièvre > 40 °C', 'Des vasopresseurs pour maintenir une PAM ≥ 65 et des lactates > 2 mmol/L malgré le remplissage', 'Des hémocultures positives', 'Une CRP > 100 mg/L'], 1, 'Définition Sepsis-3.'),

  // ---------- Neurologie ----------
  Q('neuro', 'L’information la plus importante à recueillir devant un AVC suspecté est…', ['Les antécédents familiaux', 'L’heure de début des symptômes', 'Le groupe sanguin', 'Le poids'], 1, 'Elle conditionne la thrombolyse et la thrombectomie.'),
  Q('neuro', 'Avant toute thrombolyse d’un AVC, il faut…', ['Une ponction lombaire', 'Une imagerie cérébrale éliminant une hémorragie', 'Un EEG', 'Un doppler veineux'], 1, 'IRM ou scanner en urgence.'),
  Q('neuro', 'Un AIT doit être considéré comme…', ['Bénin', 'Une urgence, car le risque d’AVC précoce est élevé', 'Une migraine', 'Une crise d’épilepsie'], 1, 'Bilan étiologique et prévention secondaire rapides.'),
  Q('neuro', 'Un état de mal épileptique est défini par une crise durant au moins…', ['30 secondes', '5 minutes', '1 heure', '24 heures'], 1, 'Traitement par benzodiazépine sans attendre.'),
  Q('neuro', 'Une céphalée brutale en « coup de tonnerre » doit faire évoquer en premier…', ['Une migraine', 'Une hémorragie méningée', 'Une céphalée de tension', 'Une sinusite'], 1, 'Scanner cérébral sans injection en urgence.'),
  Q('neuro', 'Chez un patient de plus de 50 ans avec une céphalée récente, il faut penser à…', ['La maladie de Horton', 'La migraine', 'Une céphalée de tension', 'Un abus d’antalgiques'], 0, 'VS/CRP en urgence, risque de cécité.'),

  // ---------- Gastro ----------
  Q('gastro', 'Devant une hémorragie digestive haute, l’endoscopie est réalisée…', ['Dans les 24 heures (plus tôt si instabilité)', 'Après 1 semaine', 'Seulement si récidive', 'Jamais en urgence'], 0, 'Après stabilisation hémodynamique.'),
  Q('gastro', 'Rupture de varices œsophagiennes : quelle association est recommandée ?', ['Vasoactif, antibioprophylaxie, ligature endoscopique', 'IPP seul', 'Héparine et aspirine', 'Corticoïdes'], 0, 'Les antibiotiques réduisent la mortalité chez le cirrhotique qui saigne.'),
  Q('gastro', 'Le diagnostic de pancréatite aiguë repose sur…', ['Une lipase > 3 N et une douleur typique', 'Un scanner systématique d’emblée', 'Une CRP élevée', 'Une amylase urinaire'], 0, 'Le scanner sert à évaluer la gravité vers 72-96 h.'),
  Q('gastro', 'Les deux principales causes de pancréatite aiguë sont…', ['Médicaments et virus', 'Lithiase biliaire et alcool', 'Hypercalcémie et traumatisme', 'Tumeur et génétique'], 1, 'Rechercher aussi une hypertriglycéridémie.'),
  Q('gastro', 'Chez une femme en âge de procréer avec une douleur abdominale, il faut toujours doser…', ['La lipase', 'Les hCG', 'La TSH', 'La ferritine'], 1, 'Éliminer une grossesse extra-utérine.'),
  Q('gastro', 'Le dépistage du carcinome hépatocellulaire chez le cirrhotique repose sur…', ['Une échographie tous les 6 mois', 'Un scanner annuel', 'Une biopsie annuelle', 'Rien'], 0, 'Le dosage de l’alpha-fœtoprotéine peut y être associé.'),

  // ---------- Endocrinologie ----------
  Q('endoc', 'Le diabète est défini par une glycémie à jeun…', ['≥ 1,10 g/L une fois', '≥ 1,26 g/L à deux reprises', '≥ 1,00 g/L', '≥ 2 g/L à jeun seulement'], 1, 'Ou ≥ 2 g/L à tout moment avec symptômes.'),
  Q('endoc', 'Le traitement médicamenteux de première intention du diabète de type 2 est…', ['L’insuline', 'La metformine', 'Un sulfamide', 'Un iSGLT2 seul'], 1, 'Avec les mesures hygiéno-diététiques ; iSGLT2 ou GLP-1 selon les comorbidités.'),
  Q('endoc', 'Un diabétique conscient en hypoglycémie doit d’abord…', ['Recevoir du glucagon IV', 'Prendre environ 15 g de sucre par voie orale', 'Être hospitalisé', 'Faire une injection d’insuline'], 1, 'Puis contrôler la glycémie et prendre une collation.'),
  Q('endoc', 'Dans l’acidocétose diabétique, il faut surveiller de près…', ['La kaliémie', 'La TSH', 'Le fibrinogène', 'La lipase'], 0, 'L’insuline fait entrer le potassium dans les cellules : risque d’hypokaliémie.'),
  Q('endoc', 'Le premier examen pour explorer la fonction thyroïdienne est…', ['La T3', 'La TSH', 'L’échographie', 'La scintigraphie'], 1, 'Puis T4 libre selon le résultat.'),
  Q('endoc', 'La maladie de Basedow est caractérisée par…', ['Des anticorps anti-récepteur de la TSH', 'Une TSH élevée', 'Une hypothyroïdie', 'Un nodule unique'], 0, 'Goitre diffus, exophtalmie possible.'),
  Q('endoc', 'Devant une suspicion d’insuffisance surrénale aiguë, on administre…', ['De la lévothyroxine', 'De l’hydrocortisone sans attendre les résultats', 'De l’insuline', 'Un diurétique'], 1, 'Avec un remplissage vasculaire.'),

  // ---------- Hématologie ----------
  Q('hemato', 'Devant une anémie microcytaire, le premier examen à demander est…', ['La vitamine B12', 'La ferritine', 'Le myélogramme', 'L’haptoglobine'], 1, 'Une ferritine basse affirme la carence martiale.'),
  Q('hemato', 'Une carence martiale chez un homme adulte impose de rechercher…', ['Un saignement digestif', 'Une carence d’apport', 'Une maladie génétique', 'Rien de plus'], 0, 'Endoscopies digestives haute et basse.'),
  Q('hemato', 'Haptoglobine effondrée, LDH et bilirubine libre élevées évoquent…', ['Une carence en fer', 'Une hémolyse', 'Une insuffisance médullaire', 'Une inflammation'], 1, 'Anémie régénérative.'),
  Q('hemato', 'Sous héparine, il faut surveiller…', ['La TSH', 'Les plaquettes (risque de TIH)', 'La lipase', 'La glycémie'], 1, 'Thrombopénie induite par l’héparine : paradoxalement thrombosante.'),
  Q('hemato', 'L’antidote d’un surdosage en AVK est…', ['La protamine', 'La vitamine K', 'L’idarucizumab', 'La naloxone'], 1, 'Associée aux concentrés de complexe prothrombinique si hémorragie grave.'),
  Q('hemato', 'Les AOD sont contre-indiqués…', ['Dans la FA non valvulaire', 'Avec une valve cardiaque mécanique', 'Dans la TVP', 'Chez le sujet de plus de 65 ans'], 1, 'AVK obligatoire avec une valve mécanique.'),
  Q('hemato', 'Juste avant une transfusion de globules rouges, il est obligatoire de réaliser…', ['Un ECG', 'Le contrôle ultime prétransfusionnel au lit du patient', 'Une NFS', 'Une radiographie'], 1, 'Vérification de l’identité et de la compatibilité ABO.'),

  // ---------- Pédiatrie ----------
  Q('pedia', 'Un nourrisson de 6 semaines a 38,5 °C de fièvre. Que faire ?', ['Paracétamol et surveillance à domicile', 'Évaluation médicale urgente (risque d’infection bactérienne sévère)', 'Antibiotique oral systématique sans examen', 'Attendre 72 heures'], 1, 'Toute fièvre avant 3 mois est une urgence.'),
  Q('pedia', 'Combien de vaccins sont obligatoires chez les enfants nés depuis 2018 ?', ['3', '8', '11', '14'], 2, 'Dont DTP, coqueluche, Hib, hépatite B, pneumocoque, méningocoque C, ROR.'),
  Q('pedia', 'Le traitement de première intention de la déshydratation modérée d’une gastro-entérite est…', ['La perfusion IV', 'Le soluté de réhydratation orale', 'Un antibiotique', 'Un antidiarrhéique'], 1, 'En petites quantités fréquentes, avec poursuite de l’alimentation.'),
  Q('pedia', 'L’âge moyen d’acquisition de la marche est…', ['6 mois', '12 à 18 mois', '24 à 30 mois', '3 ans'], 1, 'Au-delà de 18 mois, une évaluation est justifiée.'),
  Q('pedia', 'Un temps de recoloration cutanée > 3 secondes chez l’enfant évoque…', ['Une fièvre simple', 'Un trouble de perfusion (choc)', 'Une allergie', 'Une anémie chronique'], 1, 'Signe de gravité hémodynamique.'),

  // ---------- Gynéco-obstétrique ----------
  Q('gyneco', 'Les trois échographies de grossesse recommandées ont lieu vers…', ['8, 20 et 36 SA', '12, 22 et 32 SA', '15, 25 et 35 SA', '10, 30 et 40 SA'], 1, 'Datation et dépistage, morphologie, croissance.'),
  Q('gyneco', 'L’acide folique en période périconceptionnelle prévient…', ['La prééclampsie', 'Les anomalies de fermeture du tube neural', 'Le diabète gestationnel', 'La prématurité'], 1, 'À débuter avant la conception.'),
  Q('gyneco', 'Les AINS sont contre-indiqués pendant la grossesse…', ['Jamais', 'À partir de 24 SA (à éviter dès 20 SA)', 'Uniquement au 1er trimestre', 'Uniquement pendant l’allaitement'], 1, 'Risque de fermeture du canal artériel et d’atteinte rénale fœtale.'),
  Q('gyneco', 'La prééclampsie associe…', ['HTA et protéinurie après 20 SA', 'Fièvre et métrorragies', 'Hypoglycémie et convulsions', 'Douleur pelvienne et hCG négatif'], 0, 'Seul traitement curatif : la naissance.'),
  Q('gyneco', 'La première cause d’hémorragie du post-partum est…', ['La rétention placentaire', 'L’atonie utérine', 'Une coagulopathie', 'Une déchirure périnéale'], 1, 'Massage utérin et ocytociques.'),
  Q('gyneco', 'Une pilule œstroprogestative est contre-indiquée chez…', ['Une femme de 25 ans non fumeuse', 'Une fumeuse de plus de 35 ans', 'Une femme ayant eu des enfants', 'Une femme sous paracétamol'], 1, 'Ainsi qu’en cas d’antécédent thromboembolique ou de migraine avec aura.'),
  Q('gyneco', 'Douleur pelvienne, métrorragies, hCG positif sans sac intra-utérin : il faut évoquer…', ['Une fausse couche certaine', 'Une grossesse extra-utérine', 'Une infection urinaire', 'Une appendicite'], 1, 'Rupture possible : urgence chirurgicale.'),

  // ---------- Urgences ----------
  Q('urgences', 'Le rythme recommandé des compressions thoraciques chez l’adulte est de…', ['60 à 80 par minute', '100 à 120 par minute', '150 par minute', '30 par minute'], 1, 'Profondeur 5 à 6 cm, relâchement complet.'),
  Q('urgences', 'Quel rythme est choquable ?', ['Asystolie', 'Fibrillation ventriculaire', 'Activité électrique sans pouls', 'Bradycardie sinusale'], 1, 'Ainsi que la tachycardie ventriculaire sans pouls.'),
  Q('urgences', 'Le traitement de première ligne de l’anaphylaxie est…', ['Un antihistaminique oral', 'L’adrénaline intramusculaire', 'Un corticoïde IV', 'Le salbutamol'], 1, '0,01 mg/kg, maximum 0,5 mg chez l’adulte, à répéter si besoin.'),
  Q('urgences', 'Un pneumothorax suffocant provoque un choc…', ['Hypovolémique', 'Obstructif', 'Cardiogénique', 'Anaphylactique'], 1, 'Comme l’embolie pulmonaire et la tamponnade : exsufflation en urgence.'),
  Q('urgences', 'Quel signe clinique témoigne d’une hypoperfusion périphérique ?', ['Des marbrures', 'Un érythème', 'Une bradypnée', 'Une hypothermie isolée'], 0, 'Le temps de recoloration est aussi allongé.'),
  Q('urgences', 'Un score de Glasgow à 7 signifie…', ['Une conscience normale', 'Un coma (protection des voies aériennes à discuter)', 'Une confusion légère', 'Une erreur de calcul'], 1, 'Coma si Glasgow ≤ 8.'),

  // ---------- Psychiatrie ----------
  Q('psy', 'Un épisode dépressif caractérisé nécessite des symptômes pendant au moins…', ['3 jours', '2 semaines', '6 mois', '1 an'], 1, 'Au moins 5 symptômes, dont humeur dépressive ou anhédonie.'),
  Q('psy', 'Demander directement à un patient s’il a des idées suicidaires…', ['Augmente le risque de passage à l’acte', 'N’augmente pas le risque et permet de l’évaluer', 'Est interdit', 'Doit être évité en consultation'], 1, 'Évaluer risque, urgence et dangerosité.'),
  Q('psy', 'Avant de prescrire un antidépresseur, il faut rechercher…', ['Un antécédent d’épisode maniaque', 'Une allergie au gluten', 'Un tabagisme', 'Une myopie'], 0, 'Risque de virage maniaque dans le trouble bipolaire.'),
  Q('psy', 'Fièvre, rigidité et CPK élevées sous antipsychotique évoquent…', ['Un syndrome malin des neuroleptiques', 'Une grippe', 'Une rhabdomyolyse d’effort', 'Un syndrome sérotoninergique'], 0, 'Urgence : arrêt du traitement, réanimation si besoin.'),
  Q('psy', 'Le numéro national de prévention du suicide en France est…', ['Le 15', 'Le 3114', 'Le 112', 'Le 119'], 1, 'Accessible 24 h/24, gratuitement.'),
  Q('psy', 'Le lithium nécessite une surveillance de…', ['La lithémie, de la fonction rénale et thyroïdienne', 'La glycémie seule', 'La CRP', 'Rien de particulier'], 0, 'Marge thérapeutique étroite.'),

  // ---------- ECOS ----------
  Q('ecos', 'En début de consultation, il est préférable de commencer par…', ['Des questions fermées', 'Des questions ouvertes', 'L’examen clinique', 'La prescription'], 1, 'Puis préciser avec des questions fermées.'),
  Q('ecos', 'Dans le protocole SPIKES, le « P » correspond à…', ['La prescription', 'La perception du patient (ce qu’il sait déjà)', 'La pudeur', 'Le pronostic'], 1, 'Setting, Perception, Invitation, Knowledge, Emotions, Strategy and summary.'),
  Q('ecos', 'Pour vérifier la compréhension du patient, on…', ['Lui demande de reformuler', 'Répète l’information plus fort', 'Remet un document sans explication', 'Passe à la suite'], 0, 'Méthode « teach-back ».'),
  Q('ecos', 'Face à un patient qui pleure après une annonce, il est recommandé de…', ['Changer de sujet', 'Respecter le silence et exprimer de l’empathie', 'Écourter la consultation', 'Rassurer en minimisant'], 1, 'Accueillir l’émotion avant de poursuivre.'),
  Q('ecos', 'Avant l’examen clinique en station ECOS, il faut…', ['Commencer sans prévenir', 'Se laver les mains et expliquer l’examen', 'Demander au patient de se déshabiller entièrement', 'Lire la grille'], 1, 'Hygiène, consentement, respect de la pudeur.'),
];
