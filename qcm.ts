// CAP MÉDECIN — QCM corrigés : PASS/LAS et DFGSM
import type { Question } from './types';

const Q = (m: string, q: string, c: string[], a: number, e: string): Question => ({ m, q, c, a, e });

export const QCM: Question[] = [
  // ---------- Biologie cellulaire ----------
  Q('biocell', 'La pompe Na+/K+-ATPase échange à chaque cycle…', ['2 Na+ sortants contre 3 K+ entrants', '3 Na+ sortants contre 2 K+ entrants', '1 Na+ contre 1 K+', '3 K+ sortants contre 2 Na+ entrants'], 1, 'Transport actif primaire électrogène : 3 Na+ sortent, 2 K+ entrent, avec consommation d’ATP.'),
  Q('biocell', 'Quel organite contient son propre ADN, transmis par la mère ?', ['Le réticulum endoplasmique', 'L’appareil de Golgi', 'La mitochondrie', 'Le lysosome'], 2, 'L’ADN mitochondrial est hérité de la mère (les mitochondries du spermatozoïde sont éliminées).'),
  Q('biocell', 'Pendant quelle phase du cycle l’ADN est-il répliqué ?', ['G1', 'S', 'G2', 'M'], 1, 'Phase S = synthèse de l’ADN.'),
  Q('biocell', 'La méiose aboutit à…', ['Deux cellules diploïdes identiques', 'Quatre cellules haploïdes génétiquement différentes', 'Deux cellules haploïdes identiques', 'Quatre cellules diploïdes'], 1, 'Une réplication, deux divisions ; brassages inter- et intrachromosomique.'),
  Q('biocell', 'L’apoptose se caractérise par…', ['Une réaction inflammatoire importante', 'L’activation des caspases sans inflammation', 'La rupture de la membrane plasmique', 'L’absence de fragmentation de l’ADN'], 1, 'Mort programmée, propre, par les caspases ; la nécrose est inflammatoire.'),
  Q('biocell', 'Quel élément du cytosquelette forme le fuseau mitotique ?', ['Les microfilaments d’actine', 'Les filaments intermédiaires', 'Les microtubules', 'Les lamines'], 2, 'Les microtubules de tubuline séparent les chromatides en anaphase.'),

  // ---------- Biochimie ----------
  Q('biochimie', 'Le lactose est formé de…', ['Glucose + fructose', 'Glucose + galactose', 'Glucose + glucose', 'Galactose + fructose'], 1, 'Le saccharose associe glucose et fructose ; le maltose, deux glucoses.'),
  Q('biochimie', 'Un inhibiteur compétitif…', ['Diminue la Vmax sans modifier le Km', 'Augmente le Km sans modifier la Vmax', 'Diminue Km et Vmax', 'N’a aucun effet sur la cinétique'], 1, 'Il entre en compétition avec le substrat pour le site actif : il faut plus de substrat pour atteindre Vmax/2.'),
  Q('biochimie', 'Le bilan net de la glycolyse anaérobie est de…', ['2 ATP par glucose', '4 ATP par glucose', '32 ATP par glucose', '0 ATP'], 0, '4 ATP produits, 2 consommés : 2 ATP nets.'),
  Q('biochimie', 'Quelle hormone est la seule hypoglycémiante ?', ['Le glucagon', 'Le cortisol', 'L’insuline', 'L’adrénaline'], 2, 'Toutes les autres sont hyperglycémiantes (hormones de contre-régulation).'),
  Q('biochimie', 'L’hémoglobine adulte est un exemple de structure…', ['Primaire', 'Secondaire', 'Tertiaire', 'Quaternaire'], 3, 'Assemblage de quatre sous-unités : 2 alpha et 2 bêta.'),
  Q('biochimie', 'Où se déroule la bêta-oxydation des acides gras ?', ['Dans le cytosol', 'Dans la mitochondrie', 'Dans le noyau', 'Dans l’appareil de Golgi'], 1, 'Les acides gras à très longue chaîne commencent leur oxydation dans les peroxysomes.'),

  // ---------- Génétique ----------
  Q('genetique', 'Quel codon initie la traduction ?', ['UAA', 'AUG', 'UGA', 'GUA'], 1, 'AUG code la méthionine ; UAA, UAG et UGA sont des codons stop.'),
  Q('genetique', 'Deux parents sains hétérozygotes pour une maladie autosomique récessive. Risque pour chaque enfant d’être atteint ?', ['1/2', '1/4', '1/8', '0'], 1, 'Et 1/2 d’être porteur sain, 1/4 d’être homozygote sain.'),
  Q('genetique', 'Quelle caractéristique évoque une transmission récessive liée à l’X ?', ['Transmission père-fils', 'Garçons atteints, mères conductrices', 'Autant de filles que de garçons atteints', 'Atteinte à chaque génération par les deux sexes'], 1, 'Un père transmet son Y à ses fils, jamais son X.'),
  Q('genetique', 'L’appariement G-C fait intervenir…', ['1 liaison hydrogène', '2 liaisons hydrogène', '3 liaisons hydrogène', 'Une liaison covalente'], 2, 'A-T : 2 liaisons ; G-C : 3, d’où une plus grande stabilité.'),
  Q('genetique', 'L’épissage consiste à…', ['Ajouter la coiffe', 'Éliminer les introns du pré-ARNm', 'Traduire l’ARN en protéine', 'Répliquer l’ADN'], 1, 'Les exons sont raboutés ; un épissage alternatif produit plusieurs protéines à partir d’un gène.'),

  // ---------- Anatomie ----------
  Q('anatomie', 'La valve mitrale sépare…', ['OD et VD', 'OG et VG', 'VG et aorte', 'VD et artère pulmonaire'], 1, 'À droite, c’est la valve tricuspide.'),
  Q('anatomie', 'Un sus-décalage ST en DII, DIII et aVF oriente vers un territoire…', ['Antérieur', 'Latéral', 'Inférieur', 'Septal'], 2, 'Le plus souvent lié à la coronaire droite.'),
  Q('anatomie', 'Une aphasie d’expression (non fluente) correspond à une lésion…', ['De l’aire de Wernicke', 'De l’aire de Broca', 'Du lobe occipital', 'Du cervelet'], 1, 'Aire de Broca, lobe frontal de l’hémisphère dominant (gauche le plus souvent).'),
  Q('anatomie', 'Une lésion hémisphérique droite du faisceau pyramidal entraîne un déficit…', ['Droit', 'Gauche', 'Bilatéral', 'Uniquement facial'], 1, 'Décussation pyramidale dans le bulbe : déficit controlatéral.'),
  Q('anatomie', 'Le territoire le plus souvent touché par les AVC ischémiques est celui de…', ['L’artère cérébrale antérieure', 'L’artère cérébrale moyenne (sylvienne)', 'L’artère basilaire', 'L’artère cérébrale postérieure'], 1, 'Déficit à prédominance brachio-faciale, aphasie si hémisphère dominant.'),
  Q('anatomie', 'Le pacemaker physiologique du cœur est…', ['Le nœud atrioventriculaire', 'Le nœud sinusal', 'Le faisceau de His', 'Le réseau de Purkinje'], 1, 'Situé dans l’oreillette droite.'),

  // ---------- Physiologie ----------
  Q('physio', 'Le débit cardiaque est égal à…', ['FC × PA', 'FC × volume d’éjection systolique', 'PA × résistances', 'VES / FC'], 1, 'Environ 5 L/min au repos chez l’adulte.'),
  Q('physio', 'La durée normale de l’intervalle PR est de…', ['< 80 ms', '120 à 200 ms', '200 à 300 ms', '> 300 ms'], 1, 'Un PR > 200 ms définit un bloc atrioventriculaire du premier degré.'),
  Q('physio', 'Un trouble ventilatoire obstructif est défini par…', ['CPT < 80 %', 'VEMS/CVF < 0,70', 'DLCO < 70 %', 'PaO2 < 60 mmHg'], 1, 'Le trouble restrictif se définit par une CPT < 80 % de la théorique.'),
  Q('physio', 'Quelle hormone est sécrétée par le rein ?', ['L’ADH', 'L’érythropoïétine', 'L’aldostérone', 'Le cortisol'], 1, 'Le rein produit aussi la rénine et active la vitamine D.'),
  Q('physio', 'L’acidose déplace la courbe de dissociation de l’hémoglobine…', ['Vers la gauche (affinité accrue)', 'Vers la droite (affinité diminuée)', 'Elle ne la modifie pas', 'Vers le haut'], 1, 'Effet Bohr : libération facilitée de l’O2 aux tissus.'),
  Q('physio', 'Le débit de filtration glomérulaire normal est d’environ…', ['12 mL/min', '120 mL/min', '1 200 mL/min', '5 L/min'], 1, 'Soit environ 180 L filtrés par jour, en grande partie réabsorbés.'),

  // ---------- Embryologie et histologie ----------
  Q('embryo', 'Où a lieu la fécondation en règle générale ?', ['Dans l’utérus', 'Dans l’ampoule de la trompe', 'Dans l’ovaire', 'Dans le col utérin'], 1, 'Tiers externe de la trompe utérine.'),
  Q('embryo', 'La gastrulation, qui met en place les trois feuillets, a lieu…', ['La 1re semaine', 'La 2e semaine', 'La 3e semaine', 'La 8e semaine'], 2, 'Semaine 1 : segmentation et implantation ; semaine 2 : disque didermique.'),
  Q('embryo', 'Le système nerveux dérive…', ['De l’endoblaste', 'Du mésoblaste', 'De l’ectoblaste', 'Du trophoblaste'], 2, 'Neurulation à partir de la plaque neurale ectoblastique.'),
  Q('embryo', 'Un épithélium…', ['Est richement vascularisé', 'Repose sur une membrane basale et n’est pas vascularisé', 'Est d’origine exclusivement mésoblastique', 'Ne se renouvelle pas'], 1, 'Il est nourri par diffusion depuis le tissu conjonctif sous-jacent.'),
  Q('embryo', 'Un cancer développé à partir d’un tissu conjonctif est…', ['Un carcinome', 'Un sarcome', 'Un lymphome', 'Un adénome'], 1, 'Carcinome : épithélial ; adénome : tumeur bénigne glandulaire.'),
  Q('embryo', 'Chez la femme, l’ovocyte achève sa seconde division méiotique…', ['À la puberté', 'À l’ovulation', 'Seulement en cas de fécondation', 'Avant la naissance'], 2, 'L’ovocyte ovulé est bloqué en métaphase II jusqu’à la fécondation.'),

  // ---------- Biostatistiques ----------
  Q('biostat', 'La sensibilité d’un test est…', ['VN / (VN + FP)', 'VP / (VP + FN)', 'VP / (VP + FP)', 'VN / (VN + FN)'], 1, 'Proportion de malades ayant un test positif.'),
  Q('biostat', 'Quand la prévalence d’une maladie augmente, la VPP d’un test…', ['Diminue', 'Augmente', 'Ne change pas', 'Devient nulle'], 1, 'La VPN, elle, diminue. Sensibilité et spécificité ne changent pas.'),
  Q('biostat', 'Le risque alpha correspond…', ['À conclure à une différence qui n’existe pas', 'À ne pas voir une différence qui existe', 'À la puissance', 'À la prévalence'], 0, 'Faux positif statistique, souvent fixé à 5 %. Le risque bêta est le faux négatif.'),
  Q('biostat', 'Quel type d’étude permet de calculer directement un risque relatif ?', ['Cas-témoins', 'Cohorte', 'Transversale', 'Série de cas'], 1, 'La cohorte suit exposés et non exposés et mesure l’incidence.'),
  Q('biostat', 'Un intervalle de confiance à 95 % d’un odds ratio de [0,8 ; 1,6] signifie…', ['Une association significative', 'Une association non significative', 'Un facteur protecteur', 'Une erreur de calcul'], 1, 'L’intervalle contient 1 (valeur d’absence d’association).'),
  Q('biostat', 'Le meilleur niveau de preuve pour évaluer l’efficacité d’un traitement est apporté par…', ['Une étude cas-témoins', 'Un essai contrôlé randomisé', 'Une série de cas', 'Un avis d’expert'], 1, 'Idéalement en double aveugle, analysé en intention de traiter.'),

  // ---------- Biophysique ----------
  Q('biophys', 'Chez l’adulte, l’eau intracellulaire représente environ…', ['1/3 de l’eau totale', '2/3 de l’eau totale', '1/4 de l’eau totale', 'La moitié du plasma'], 1, 'L’eau totale représente environ 60 % du poids.'),
  Q('biophys', 'Une hyponatrémie traduit en général…', ['Une déshydratation intracellulaire', 'Une hyperhydratation intracellulaire', 'Une déshydratation extracellulaire pure', 'Une hypovolémie obligatoire'], 1, 'La natrémie reflète l’état d’hydratation du secteur intracellulaire.'),
  Q('biophys', 'Quel examen n’utilise pas de rayonnement ionisant ?', ['Le scanner', 'La radiographie', 'L’IRM', 'La scintigraphie'], 2, 'L’échographie non plus.'),
  Q('biophys', 'La période (demi-vie) physique d’un radioélément est…', ['Le temps pour que son activité soit divisée par deux', 'Le temps d’élimination urinaire', 'Le temps de pose', 'Toujours de 6 heures'], 0, 'Elle est propre à chaque radioélément.'),
  Q('biophys', 'La pression oncotique est principalement due…', ['Au sodium', 'Au glucose', 'Aux protéines plasmatiques (albumine)', 'À l’urée'], 2, 'Elle retient l’eau dans le secteur vasculaire.'),

  // ---------- Pharmacologie générale ----------
  Q('pharmaco', 'La biodisponibilité d’un médicament administré par voie intraveineuse est…', ['De 50 %', 'Variable selon le repas', 'De 100 %', 'Nulle'], 2, 'Par définition, toute la dose atteint la circulation générale.'),
  Q('pharmaco', 'L’état d’équilibre des concentrations est atteint après environ…', ['1 demi-vie', '2 demi-vies', '4 à 5 demi-vies', '10 demi-vies'], 2, 'Même délai pour l’élimination quasi complète après l’arrêt.'),
  Q('pharmaco', 'La rifampicine est…', ['Un inhibiteur enzymatique', 'Un inducteur enzymatique', 'Sans effet sur les cytochromes', 'Un antidote'], 1, 'Elle diminue l’efficacité de nombreux médicaments (contraceptifs oraux, AVK…).'),
  Q('pharmaco', 'Quel médicament a une marge thérapeutique étroite ?', ['Le paracétamol aux doses usuelles', 'Le lithium', 'L’amoxicilline', 'Le salbutamol inhalé'], 1, 'Comme la digoxine, les AVK et les aminosides : surveillance des taux.'),
  Q('pharmaco', 'L’antidote d’un surdosage en paracétamol est…', ['La naloxone', 'La N-acétylcystéine', 'Le flumazénil', 'La vitamine K'], 1, 'À débuter précocement selon la dose et la paracétamolémie.'),
  Q('pharmaco', 'Un effet indésirable grave ou inattendu doit être…', ['Ignoré s’il est connu', 'Déclaré à la pharmacovigilance', 'Signalé seulement au patient', 'Déclaré uniquement par le pharmacien'], 1, 'Tout professionnel de santé doit déclarer ; les patients aussi le peuvent.'),

  // ---------- SSH ----------
  Q('shs', 'La loi relative aux droits des malades (loi Kouchner) date de…', ['1994', '2002', '2005', '2016'], 1, 'Loi du 4 mars 2002.'),
  Q('shs', 'Le dépistage d’une maladie à un stade précoce relève de la prévention…', ['Primaire', 'Secondaire', 'Tertiaire', 'Quaternaire'], 1, 'La vaccination est une prévention primaire.'),
  Q('shs', 'Le principe « primum non nocere » correspond à…', ['L’autonomie', 'La non-malfaisance', 'La justice', 'La bienfaisance'], 1, 'D’abord, ne pas nuire.'),
  Q('shs', 'La sédation profonde et continue jusqu’au décès a été encadrée par…', ['La loi Kouchner', 'La loi Claeys-Leonetti (2016)', 'La loi Veil', 'La loi HPST'], 1, 'Dans des situations précises de fin de vie.'),
  Q('shs', 'Le consentement du patient aux soins…', ['Est définitif une fois donné', 'Peut être retiré à tout moment', 'N’est pas nécessaire pour les examens', 'Doit toujours être écrit'], 1, 'Libre, éclairé et révocable.'),

  // ---------- Sémiologie ----------
  Q('semio', 'Matité, vibrations vocales abolies, murmure vésiculaire aboli évoquent…', ['Une condensation', 'Un épanchement pleural liquidien', 'Un pneumothorax', 'Un emphysème'], 1, 'Le pneumothorax donne un tympanisme.'),
  Q('semio', 'Le signe de Babinski appartient au syndrome…', ['Cérébelleux', 'Pyramidal', 'Extrapyramidal', 'Méningé'], 1, 'Extension lente du gros orteil à la stimulation plantaire.'),
  Q('semio', 'Le reflux hépatojugulaire est un signe…', ['D’insuffisance cardiaque droite', 'D’insuffisance respiratoire', 'D’hépatite', 'De déshydratation'], 0, 'Avec œdèmes, turgescence jugulaire, hépatomégalie.'),
  Q('semio', 'Une défense abdominale évoque…', ['Une constipation', 'Une irritation péritonéale', 'Une ascite', 'Une hernie'], 1, 'La contracture (ventre de bois) signe une péritonite généralisée.'),
  Q('semio', 'Le tabagisme se quantifie en…', ['Cigarettes par jour', 'Paquets-années', 'Années de sevrage', 'Litres'], 1, '1 paquet par jour pendant 1 an = 1 paquet-année.'),
  Q('semio', 'Raideur de nuque, céphalées et vomissements définissent…', ['Un syndrome pyramidal', 'Un syndrome méningé', 'Un syndrome cérébelleux', 'Une hypertension intracrânienne isolée'], 1, 'Fébrile, il fait suspecter une méningite jusqu’à preuve du contraire.'),

  // ---------- Immunologie ----------
  Q('immuno', 'Les lymphocytes T CD8 reconnaissent l’antigène présenté par…', ['Le CMH de classe I', 'Le CMH de classe II', 'Les anticorps', 'Le complément'], 0, 'Les CD4 reconnaissent le CMH de classe II.'),
  Q('immuno', 'Quelle classe d’immunoglobulines traverse le placenta ?', ['IgM', 'IgA', 'IgG', 'IgE'], 2, 'D’où la protection passive du nouveau-né.'),
  Q('immuno', 'L’anaphylaxie est une hypersensibilité de type…', ['I', 'II', 'III', 'IV'], 0, 'Immédiate, médiée par les IgE et les mastocytes.'),
  Q('immuno', 'L’eczéma de contact est une hypersensibilité de type…', ['I', 'II', 'III', 'IV'], 3, 'Retardée, médiée par les lymphocytes T.'),
  Q('immuno', 'Les anticorps sont produits par…', ['Les lymphocytes T', 'Les plasmocytes', 'Les polynucléaires', 'Les cellules NK'], 1, 'Plasmocytes = lymphocytes B différenciés.'),

  // ---------- Microbiologie ----------
  Q('microbio', 'Le pneumocoque est…', ['Un bacille Gram négatif', 'Un cocci Gram positif', 'Un cocci Gram négatif', 'Une bactérie intracellulaire'], 1, 'Streptococcus pneumoniae, diplocoque Gram positif.'),
  Q('microbio', 'Le méningocoque est…', ['Un cocci Gram négatif', 'Un bacille Gram positif', 'Un cocci Gram positif', 'Un virus'], 0, 'Neisseria meningitidis, diplocoque Gram négatif.'),
  Q('microbio', 'Quand faut-il réévaluer une antibiothérapie probabiliste ?', ['À J10', 'À 48-72 heures', 'Jamais', 'À la fin du traitement'], 1, 'Avec les résultats microbiologiques : adaptation, désescalade ou arrêt.'),
  Q('microbio', 'Un SARM est…', ['Un streptocoque résistant aux macrolides', 'Un staphylocoque doré résistant à la méticilline', 'Une entérobactérie sécrétrice de BLSE', 'Un virus résistant'], 1, 'Résistant à toutes les bêtalactamines classiques (pénicillines M).'),
  Q('microbio', 'La première mesure de prévention de la transmission croisée à l’hôpital est…', ['Le port de gants systématique', 'La friction hydroalcoolique des mains', 'L’antibioprophylaxie', 'Le masque FFP2 systématique'], 1, 'Avant et après chaque contact patient.'),
  Q('microbio', 'Les macrolides sont actifs sur…', ['Les bactéries intracellulaires (Legionella, Mycoplasma)', 'Pseudomonas aeruginosa', 'Les entérobactéries BLSE', 'Les champignons'], 0, 'Utiles dans les pneumopathies atypiques.'),
];
