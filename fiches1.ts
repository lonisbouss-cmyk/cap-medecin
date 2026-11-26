// CAP MÉDECIN — fiches de cours : PASS/LAS et DFGSM
import type { Fiche } from './types';

export const FICHES1: Fiche[] = [
  // ======================= BIOLOGIE CELLULAIRE =======================
  {
    id: 'bc-membrane', m: 'biocell', titre: 'Membrane plasmique et organites',
    intro: 'La cellule eucaryote est délimitée par une membrane plasmique et compartimentée par des organites spécialisés.',
    parts: [
      { t: 'Membrane plasmique', l: ['Bicouche de phospholipides amphiphiles (modèle de la mosaïque fluide, Singer et Nicolson, 1972).', 'Cholestérol : module la fluidité ; protéines intrinsèques (transmembranaires) et extrinsèques.', 'Glycocalyx sur la face externe (glycolipides, glycoprotéines) : reconnaissance cellulaire.', 'Transports : diffusion simple (gaz, petites molécules liposolubles), diffusion facilitée (canaux, transporteurs), transport actif primaire (pompe Na+/K+-ATPase : 3 Na+ sortent, 2 K+ entrent) et secondaire (symport, antiport), endocytose et exocytose.'] },
      { t: 'Organites', l: ['Noyau : enveloppe nucléaire double percée de pores, chromatine, nucléole (synthèse des ARN ribosomiques).', 'Réticulum endoplasmique granuleux (synthèse des protéines sécrétées et membranaires) et lisse (lipides, détoxification, stockage du calcium).', 'Appareil de Golgi : maturation (glycosylation) et adressage des protéines.', 'Lysosomes : digestion intracellulaire par des hydrolases acides (pH ≈ 5).', 'Mitochondries : double membrane, ADN propre d’origine maternelle, phosphorylation oxydative (ATP).', 'Peroxysomes : oxydation des acides gras à très longue chaîne, catalase.'] },
      { t: 'Cytosquelette', l: ['Microfilaments d’actine (forme, mobilité), microtubules de tubuline (fuseau mitotique, transport, cils et flagelles), filaments intermédiaires (résistance mécanique : kératines, vimentine, neurofilaments, lamines).'] },
    ],
    retenir: ['Na+/K+-ATPase : 3 Na+ out, 2 K+ in.', 'ADN mitochondrial : transmission maternelle.', 'RE granuleux → Golgi → vésicules : voie de sécrétion.'],
  },
  {
    id: 'bc-cycle', m: 'biocell', titre: 'Cycle cellulaire, mitose, méiose et apoptose',
    intro: 'La division cellulaire assure la croissance et le renouvellement des tissus (mitose) ou la production des gamètes (méiose).',
    parts: [
      { t: 'Cycle cellulaire', l: ['Phases G1, S (réplication de l’ADN), G2, puis M (mitose). G0 : quiescence.', 'Régulation par les complexes cyclines-CDK et les points de contrôle (G1/S, G2/M, fuseau).', 'p53, « gardien du génome » : arrête le cycle ou déclenche l’apoptose en cas de lésion de l’ADN.'] },
      { t: 'Mitose', l: ['Prophase, prométaphase, métaphase (chromosomes alignés sur la plaque équatoriale), anaphase (séparation des chromatides sœurs), télophase, puis cytodiérèse.', 'Résultat : deux cellules filles diploïdes (2n) génétiquement identiques.'] },
      { t: 'Méiose', l: ['Deux divisions successives après une seule réplication : méiose I réductionnelle (séparation des chromosomes homologues), méiose II équationnelle.', 'Brassage interchromosomique (répartition aléatoire des homologues) et intrachromosomique (crossing-over en prophase I).', 'Résultat : quatre cellules haploïdes (n). Une non-disjonction aboutit à une aneuploïdie (trisomie 21).'] },
      { t: 'Apoptose', l: ['Mort cellulaire programmée, sans inflammation : condensation de la chromatine, fragmentation de l’ADN, corps apoptotiques phagocytés.', 'Voie intrinsèque (mitochondriale, cytochrome c, famille Bcl-2) et extrinsèque (récepteurs de mort, Fas). Exécution par les caspases.', 'S’oppose à la nécrose, accidentelle et inflammatoire.'] },
    ],
    retenir: ['Mitose : 2n → 2 × 2n identiques.', 'Méiose : 2n → 4 × n, brassage génétique.', 'Apoptose = caspases, sans inflammation.'],
  },

  // ======================= BIOCHIMIE =======================
  {
    id: 'bch-molecules', m: 'biochimie', titre: 'Molécules du vivant et enzymologie',
    intro: 'Glucides, lipides, protéines et acides nucléiques sont les grandes familles de molécules biologiques. Les enzymes catalysent leurs transformations.',
    parts: [
      { t: 'Glucides et lipides', l: ['Oses (glucose, fructose, galactose), diholosides (saccharose = glucose + fructose ; lactose = glucose + galactose), polyosides (glycogène, amidon, cellulose).', 'Acides gras saturés ou insaturés ; triglycérides (réserve énergétique), phospholipides (membranes), stéroïdes dérivés du cholestérol (hormones, acides biliaires, vitamine D).'] },
      { t: 'Protéines', l: ['Polymères de 20 acides aminés liés par des liaisons peptidiques.', 'Structures primaire (séquence), secondaire (hélice alpha, feuillet bêta), tertiaire (repliement 3D), quaternaire (assemblage de sous-unités, ex. hémoglobine = 2 alpha + 2 bêta).', 'Acides aminés essentiels (apport alimentaire obligatoire) : par exemple leucine, lysine, méthionine, phénylalanine, tryptophane.'] },
      { t: 'Enzymologie', l: ['Catalyseurs qui abaissent l’énergie d’activation sans modifier l’équilibre de la réaction.', 'Michaelis-Menten : Km = concentration de substrat donnant Vmax/2 ; plus le Km est bas, plus l’affinité est grande.', 'Inhibition compétitive : Km augmente, Vmax inchangée. Non compétitive : Vmax diminue, Km inchangé.', 'Régulation allostérique, covalente (phosphorylation), par induction ou répression de la synthèse.'] },
    ],
    retenir: ['Km bas = forte affinité.', 'Compétitive : Km ↑, Vmax =.', 'Non compétitive : Vmax ↓, Km =.'],
  },
  {
    id: 'bch-metabolisme', m: 'biochimie', titre: 'Métabolisme énergétique',
    intro: 'Les cellules produisent leur énergie (ATP) en dégradant les nutriments, sous le contrôle de l’insuline et des hormones de contre-régulation.',
    parts: [
      { t: 'Voies principales', l: ['Glycolyse (cytosol) : glucose → 2 pyruvates, bilan net 2 ATP et 2 NADH, sans oxygène.', 'En anaérobiose : pyruvate → lactate (régénère le NAD+).', 'En aérobiose : pyruvate → acétyl-CoA (mitochondrie) → cycle de Krebs → chaîne respiratoire et phosphorylation oxydative (environ 30 à 32 ATP par glucose).', 'Bêta-oxydation des acides gras dans la mitochondrie ; cétogenèse hépatique en cas de jeûne ou de carence en insuline.'] },
      { t: 'Régulation hormonale', l: ['Insuline (hormone hypoglycémiante) : glycogénogenèse, lipogenèse, captation du glucose (GLUT4 dans le muscle et le tissu adipeux).', 'Glucagon, adrénaline, cortisol, GH : glycogénolyse, néoglucogenèse, lipolyse.', 'Néoglucogenèse hépatique (et rénale) à partir du lactate, du glycérol et des acides aminés.'] },
    ],
    retenir: ['Glycolyse : 2 ATP net.', 'Phosphorylation oxydative : l’essentiel de l’ATP.', 'Insuline seule hormone hypoglycémiante.'],
  },

  // ======================= GÉNÉTIQUE =======================
  {
    id: 'gen-adn', m: 'genetique', titre: 'De l’ADN aux protéines',
    intro: 'L’information génétique est portée par l’ADN, répliquée avant chaque division et exprimée en protéines par la transcription et la traduction.',
    parts: [
      { t: 'ADN et réplication', l: ['Double hélice antiparallèle ; appariement A-T (2 liaisons hydrogène) et G-C (3 liaisons).', 'Réplication semi-conservative, synthèse de 5’ vers 3’ par l’ADN polymérase ; brin continu et brin discontinu (fragments d’Okazaki).', 'Génome humain : 46 chromosomes (22 paires d’autosomes + XX ou XY), environ 20 000 gènes codant des protéines.'] },
      { t: 'Expression des gènes', l: ['Transcription par l’ARN polymérase II (gènes codants) ; maturation : coiffe, queue poly-A, épissage (élimination des introns).', 'Traduction dans les ribosomes : codon initiateur AUG (méthionine) ; trois codons stop (UAA, UAG, UGA). Code génétique redondant (dégénéré) et quasi universel.'] },
      { t: 'Modes de transmission', l: ['Autosomique dominant : transmission verticale, un parent atteint, risque 1/2 pour chaque enfant.', 'Autosomique récessif : parents sains hétérozygotes, risque 1/4 ; consanguinité favorisante (mucoviscidose).', 'Récessif lié à l’X : garçons atteints, transmission par les mères conductrices, pas de transmission père-fils (hémophilie, myopathie de Duchenne).', 'Mitochondrial : transmission exclusivement maternelle.'] },
    ],
    retenir: ['AUG = start ; UAA, UAG, UGA = stop.', 'AR : 1/4 ; AD : 1/2.', 'Lié à l’X : pas de transmission père-fils.'],
  },

  // ======================= ANATOMIE =======================
  {
    id: 'ana-coeur', m: 'anatomie', titre: 'Anatomie du cœur et des gros vaisseaux',
    intro: 'Le cœur est situé dans le médiastin antérieur et inférieur, entre les deux poumons, en arrière du sternum.',
    parts: [
      { t: 'Cavités et valves', l: ['Quatre cavités : oreillettes droite et gauche, ventricules droit et gauche.', 'Valves atrioventriculaires : tricuspide à droite, mitrale (bicuspide) à gauche.', 'Valves sigmoïdes (semi-lunaires) : pulmonaire et aortique.', 'Circulation : veines caves → OD → VD → artère pulmonaire → poumons → veines pulmonaires → OG → VG → aorte.'] },
      { t: 'Vascularisation coronaire', l: ['Artère coronaire gauche : tronc commun puis interventriculaire antérieure (IVA) et circonflexe.', 'Artère coronaire droite : vascularise le plus souvent la face inférieure et le nœud sinusal.', 'Correspondance ECG : antérieur (V1-V4, IVA), latéral (DI, aVL, V5-V6, circonflexe), inférieur (DII, DIII, aVF, coronaire droite le plus souvent).'] },
      { t: 'Conduction', l: ['Nœud sinusal (oreillette droite) → nœud atrioventriculaire → faisceau de His → branches droite et gauche → réseau de Purkinje.'] },
    ],
    retenir: ['Mitrale à gauche, tricuspide à droite.', 'Inférieur = DII, DIII, aVF.', 'Nœud sinusal = pacemaker physiologique.'],
  },
  {
    id: 'ana-nerveux', m: 'anatomie', titre: 'Organisation du système nerveux',
    intro: 'Le système nerveux central (encéphale, moelle) est relié aux organes par le système nerveux périphérique.',
    parts: [
      { t: 'Encéphale', l: ['Cerveau : lobes frontal (motricité volontaire, fonctions exécutives, langage expressif : aire de Broca), pariétal (sensibilité), temporal (audition, mémoire, compréhension : aire de Wernicke), occipital (vision).', 'Le langage est porté par l’hémisphère gauche chez la grande majorité des droitiers.', 'Tronc cérébral (mésencéphale, pont, bulbe) : noyaux des nerfs crâniens III à XII, centres vitaux. Cervelet : coordination et équilibre.'] },
      { t: 'Voies longues', l: ['Faisceau pyramidal (motricité) : décussation dans le bulbe ; une lésion hémisphérique donne un déficit controlatéral.', 'Voie lemniscale (sensibilité profonde) : croise dans le bulbe. Voie spinothalamique (douleur, température) : croise dans la moelle, dès l’entrée.'] },
      { t: 'Vascularisation', l: ['Polygone de Willis à la base du crâne.', 'Artère cérébrale moyenne (sylvienne) : face latérale de l’hémisphère, territoire le plus souvent touché par les AVC (déficit à prédominance brachio-faciale).', 'Artère cérébrale antérieure : face interne (déficit à prédominance crurale).'] },
      { t: 'Système nerveux autonome', l: ['Sympathique (noradrénaline : tachycardie, mydriase, bronchodilatation) et parasympathique (acétylcholine, nerf vague : bradycardie, myosis, digestion).'] },
    ],
    retenir: ['Broca = expression ; Wernicke = compréhension.', 'Pyramidal : déficit controlatéral à la lésion hémisphérique.', 'Sylvienne : déficit brachio-facial.'],
  },

  // ======================= PHYSIOLOGIE =======================
  {
    id: 'phy-cardio', m: 'physio', titre: 'Physiologie cardiovasculaire',
    intro: 'Le cœur assure un débit sanguin adapté aux besoins de l’organisme ; la pression artérielle est régulée à court et à long terme.',
    parts: [
      { t: 'Débit cardiaque', l: ['Débit cardiaque = fréquence cardiaque × volume d’éjection systolique (environ 5 L/min au repos).', 'Volume d’éjection : dépend de la précharge (loi de Frank-Starling), de la contractilité et de la postcharge.', 'Fraction d’éjection du VG normale ≥ 50 %.'] },
      { t: 'Pression artérielle', l: ['PA = débit cardiaque × résistances périphériques.', 'Régulation rapide : baroréflexe (barorécepteurs carotidiens et aortiques).', 'Régulation lente : système rénine-angiotensine-aldostérone, hormone antidiurétique, peptides natriurétiques.'] },
      { t: 'ECG normal', l: ['Onde P : dépolarisation auriculaire. PR : 120 à 200 ms.', 'QRS : dépolarisation ventriculaire, < 120 ms.', 'Onde T : repolarisation ventriculaire. QT corrigé normal < 440 ms environ.'] },
    ],
    art: ['fc', 'pa', 'pam'],
    retenir: ['DC = FC × VES.', 'PA = DC × résistances.', 'PR 120-200 ms ; QRS < 120 ms.'],
  },
  {
    id: 'phy-resp-renal', m: 'physio', titre: 'Physiologie respiratoire et rénale',
    intro: 'Poumons et reins maintiennent l’équilibre des gaz du sang, de l’eau, des électrolytes et du pH.',
    parts: [
      { t: 'Respiration', l: ['Volume courant ≈ 500 mL ; capacité vitale ; VEMS (volume expiré maximal en 1 seconde).', 'Trouble ventilatoire obstructif : VEMS/CVF < 0,70 (asthme, BPCO). Restrictif : capacité pulmonaire totale < 80 % de la théorique.', 'Courbe de dissociation de l’hémoglobine : déplacée à droite (moindre affinité) par l’acidose, l’hypercapnie, la fièvre et le 2,3-DPG.'] },
      { t: 'Rein', l: ['Débit de filtration glomérulaire ≈ 120 mL/min (180 L/j), dont l’essentiel est réabsorbé.', 'Tube proximal : réabsorption de la majorité du sodium, du glucose, des bicarbonates. Anse de Henlé : gradient corticopapillaire (cible du furosémide). Tube distal et collecteur : ajustement fin sous l’action de l’aldostérone et de l’ADH.', 'Fonctions endocrines : rénine, érythropoïétine, activation de la vitamine D (1-alpha-hydroxylation).'] },
      { t: 'Équilibre acido-basique', l: ['Tampon bicarbonate : pH = 6,1 + log [HCO3-] / (0,03 × PaCO2) (Henderson-Hasselbalch).', 'Compensation respiratoire rapide des troubles métaboliques ; compensation rénale lente des troubles respiratoires.'] },
    ],
    art: ['ph', 'paco2', 'hco3', 'diurese'],
    retenir: ['Obstruction : VEMS/CVF < 0,70.', 'DFG ≈ 120 mL/min.', 'Rein : rénine, EPO, vitamine D active.'],
  },

  // ======================= EMBRYOLOGIE ET HISTOLOGIE =======================
  {
    id: 'emb-debut', m: 'embryo', titre: 'Gamétogenèse et premières semaines du développement',
    intro: 'Le développement humain commence par la fécondation et passe par la segmentation, l’implantation, la gastrulation et la neurulation.',
    parts: [
      { t: 'Gamétogenèse', l: ['Spermatogenèse : continue à partir de la puberté, environ 74 jours ; 4 spermatozoïdes par spermatocyte I.', 'Ovogenèse : stock fixé avant la naissance, ovocytes bloqués en prophase I ; reprise de la méiose à l’ovulation, achèvement de la méiose II seulement en cas de fécondation ; un seul ovocyte fonctionnel.'] },
      { t: 'Premières semaines', l: ['Fécondation dans le tiers externe de la trompe (ampoule).', 'Semaine 1 : segmentation, morula puis blastocyste ; implantation (nidation) vers le 6e – 7e jour.', 'Semaine 2 : disque didermique (épiblaste, hypoblaste).', 'Semaine 3 : gastrulation (trois feuillets : ectoblaste, mésoblaste, endoblaste) et début de la neurulation.', 'Période embryonnaire (organogenèse) jusqu’à 8 semaines après la fécondation : période la plus sensible aux tératogènes.'] },
      { t: 'Dérivés des feuillets', l: ['Ectoblaste : épiderme, système nerveux.', 'Mésoblaste : muscles, os, cœur, vaisseaux, sang, reins, gonades.', 'Endoblaste : épithélium du tube digestif et des voies respiratoires, foie, pancréas.'] },
    ],
    retenir: ['Nidation J6-J7.', 'Gastrulation = semaine 3.', 'Organogenèse : période critique pour les tératogènes.'],
  },
  {
    id: 'histo-tissus', m: 'embryo', titre: 'Les quatre tissus fondamentaux',
    intro: 'L’histologie étudie les tissus : épithélial, conjonctif, musculaire et nerveux.',
    parts: [
      { t: 'Tissus', l: ['Épithélial : revêtement (pavimenteux, cubique, cylindrique ; simple ou stratifié) et glandulaire (exocrine, endocrine) ; repose sur une membrane basale, non vascularisé.', 'Conjonctif : cellules (fibroblastes) dans une matrice extracellulaire (collagène, élastine) ; formes spécialisées : os, cartilage, tissu adipeux, sang.', 'Musculaire : strié squelettique (volontaire, multinucléé), strié cardiaque (involontaire, disques intercalaires), lisse (viscères, vaisseaux).', 'Nerveux : neurones et cellules gliales (astrocytes, oligodendrocytes et cellules de Schwann qui forment la myéline, microglie).'] },
      { t: 'Repères', l: ['Un cancer d’origine épithéliale est un carcinome ; d’origine conjonctive, un sarcome.', 'Le franchissement de la membrane basale définit le caractère infiltrant d’un carcinome.'] },
    ],
    retenir: ['Épithélium : non vascularisé, sur membrane basale.', 'Carcinome = épithélial ; sarcome = conjonctif.'],
  },

  // ======================= BIOSTATISTIQUES =======================
  {
    id: 'bs-tests', m: 'biostat', titre: 'Tests diagnostiques et études épidémiologiques',
    intro: 'Les biostatistiques permettent d’évaluer un test diagnostique, de comparer des groupes et de lire un article scientifique.',
    parts: [
      { t: 'Qualités d’un test', l: ['Sensibilité = VP / (VP + FN) : capacité à détecter les malades.', 'Spécificité = VN / (VN + FP) : capacité à reconnaître les non-malades.', 'VPP et VPN : dépendent de la prévalence.', 'Courbe ROC : sensibilité en fonction de (1 − spécificité) ; l’aire sous la courbe mesure la performance globale.'] },
      { t: 'Tests statistiques', l: ['Hypothèse nulle H0 : pas de différence. Risque alpha (souvent 5 %) : rejeter H0 à tort (faux positif). Risque bêta : ne pas rejeter H0 à tort ; puissance = 1 − bêta.', 'p < 0,05 : différence statistiquement significative (ne dit rien de son importance clinique).', 'Intervalle de confiance à 95 % : s’il n’inclut pas la valeur d’absence d’effet (0 pour une différence, 1 pour un RR ou un OR), la différence est significative.'] },
      { t: 'Types d’études', l: ['Essai contrôlé randomisé : meilleur niveau de preuve pour évaluer un traitement ; analyse en intention de traiter.', 'Cohorte : exposés et non exposés suivis dans le temps ; calcule l’incidence et le risque relatif.', 'Cas-témoins : malades et non-malades comparés sur leurs expositions passées ; calcule l’odds ratio ; adaptée aux maladies rares.', 'Incidence : nouveaux cas sur une période ; prévalence : cas existants à un instant donné.'] },
    ],
    art: ['sesp', 'vppvpn', 'rr'],
    retenir: ['Se et Sp : indépendantes de la prévalence.', 'Puissance = 1 − bêta.', 'Cohorte → RR ; cas-témoins → OR.'],
  },

  // ======================= BIOPHYSIQUE =======================
  {
    id: 'bp-solutions', m: 'biophys', titre: 'Solutions, osmolarité et radioactivité',
    intro: 'La biophysique explique les mouvements d’eau entre les compartiments et les bases de l’imagerie médicale.',
    parts: [
      { t: 'Compartiments et osmolarité', l: ['Eau totale ≈ 60 % du poids chez l’adulte : 2/3 intracellulaire, 1/3 extracellulaire (dont 1/4 plasmatique).', 'L’eau se déplace vers le compartiment le plus concentré (osmose). Osmolalité plasmatique ≈ 285 – 295 mOsm/kg.', 'Le sodium est le principal déterminant de l’osmolalité extracellulaire ; la natrémie reflète l’hydratation intracellulaire.', 'Pression oncotique (protéines, albumine) : retient l’eau dans les vaisseaux (loi de Starling).'] },
      { t: 'Radioactivité et imagerie', l: ['Rayonnements alpha (peu pénétrants), bêta, gamma et X (pénétrants).', 'Période (demi-vie) physique : temps au bout duquel l’activité est divisée par deux.', 'Dose efficace en sieverts (Sv). Radioprotection : justification, optimisation (ALARA), limitation ; temps, distance, écran.', 'Scanner et radiographie : rayons X ; IRM : champ magnétique, sans rayonnement ionisant ; échographie : ultrasons ; scintigraphie et TEP : traceurs radioactifs.'] },
    ],
    art: ['osmo', 'na'],
    retenir: ['Eau : 2/3 intracellulaire.', 'Natrémie = hydratation intracellulaire.', 'IRM et échographie : pas de rayonnement ionisant.'],
  },

  // ======================= PHARMACOLOGIE GÉNÉRALE =======================
  {
    id: 'ph-cinetique', m: 'pharmaco', titre: 'Pharmacocinétique et pharmacodynamie',
    intro: 'La pharmacocinétique décrit ce que l’organisme fait au médicament ; la pharmacodynamie, ce que le médicament fait à l’organisme.',
    parts: [
      { t: 'Pharmacocinétique (ADME)', l: ['Absorption et biodisponibilité (fraction de la dose atteignant la circulation générale : 100 % par voie IV). Effet de premier passage hépatique.', 'Distribution : fixation aux protéines plasmatiques (albumine), volume de distribution.', 'Métabolisme hépatique, notamment par les cytochromes P450 (CYP3A4).', 'Élimination rénale ou biliaire. Demi-vie : temps pour que la concentration diminue de moitié ; l’équilibre est atteint en 4 à 5 demi-vies.'] },
      { t: 'Pharmacodynamie', l: ['Agoniste (active le récepteur), antagoniste (le bloque).', 'Index thérapeutique étroit : digoxine, lithium, AVK, aminosides, antiépileptiques (suivi des concentrations).'] },
      { t: 'Interactions et terrains', l: ['Inducteurs enzymatiques (rifampicine, carbamazépine, millepertuis) : diminuent l’effet des médicaments métabolisés.', 'Inhibiteurs (clarithromycine, antifongiques azolés, jus de pamplemousse) : risque de surdosage.', 'Sujet âgé, insuffisant rénal ou hépatique, grossesse : adaptations nécessaires.', 'Pharmacovigilance : tout professionnel de santé doit déclarer les effets indésirables graves ou inattendus.'] },
    ],
    arrets: ['paracetamol', 'ains', 'opio'],
    retenir: ['Équilibre en 4 à 5 demi-vies.', 'Inducteurs ↓ effet ; inhibiteurs ↑ effet.', 'Marge étroite : surveillance des taux.'],
  },

  // ======================= SSH =======================
  {
    id: 'shs-droits', m: 'shs', titre: 'Éthique et droits des patients',
    intro: 'La relation de soin repose sur des principes éthiques et sur des droits garantis par la loi, notamment la loi Kouchner du 4 mars 2002.',
    parts: [
      { t: 'Principes éthiques', l: ['Autonomie, bienfaisance, non-malfaisance (primum non nocere), justice (Beauchamp et Childress).', 'Serment d’Hippocrate ; Code de déontologie médicale (intégré au Code de la santé publique).'] },
      { t: 'Droits des patients', l: ['Information loyale, claire et appropriée ; consentement libre et éclairé, révocable à tout moment.', 'Accès direct au dossier médical.', 'Secret médical : partagé uniquement au sein de l’équipe de soins dans l’intérêt du patient, avec des dérogations légales (maladies à déclaration obligatoire, sévices sur mineur).', 'Personne de confiance ; directives anticipées.', 'Fin de vie : refus de l’obstination déraisonnable, sédation profonde et continue jusqu’au décès dans des conditions encadrées (loi Claeys-Leonetti, 2016).'] },
      { t: 'Système de santé', l: ['Assurance maladie obligatoire, complémentaires ; agences régionales de santé (ARS) ; Haute Autorité de santé (HAS).', 'Prévention primaire (éviter la maladie : vaccination), secondaire (dépistage précoce), tertiaire (limiter les complications).'] },
    ],
    retenir: ['Loi Kouchner 2002 : droits des patients.', 'Claeys-Leonetti 2016 : fin de vie.', 'Prévention primaire, secondaire, tertiaire.'],
  },

  // ======================= SÉMIOLOGIE =======================
  {
    id: 'sem-examen', m: 'semio', titre: 'L’observation médicale et les grands syndromes',
    intro: 'La sémiologie est l’étude des signes des maladies. Une observation structurée est la base du raisonnement clinique.',
    parts: [
      { t: 'Observation', l: ['Motif de consultation, antécédents (médicaux, chirurgicaux, familiaux), traitements et allergies, mode de vie (tabac en paquets-années, alcool), histoire de la maladie.', 'Examen clinique par appareil : inspection, palpation, percussion, auscultation ; constantes.', 'Synthèse : syndromes identifiés, hypothèses diagnostiques hiérarchisées, examens complémentaires justifiés.'] },
      { t: 'Grands syndromes', l: ['Syndrome de condensation pulmonaire : matité, augmentation des vibrations vocales, crépitants, souffle tubaire.', 'Épanchement pleural liquidien : matité, abolition des vibrations vocales et du murmure vésiculaire.', 'Pneumothorax : tympanisme, abolition des vibrations vocales et du murmure vésiculaire.', 'Syndrome pyramidal : déficit moteur, réflexes vifs et polycinétiques, signe de Babinski.', 'Insuffisance cardiaque droite : œdèmes des membres inférieurs, turgescence jugulaire, reflux hépatojugulaire, hépatomégalie.', 'Syndrome méningé : céphalées, vomissements, raideur de nuque, photophobie.', 'Irritation péritonéale : défense, contracture abdominale.'] },
    ],
    retenir: ['Condensation : matité + vibrations vocales augmentées.', 'Épanchement : matité + vibrations abolies.', 'Pneumothorax : tympanisme.'],
  },

  // ======================= IMMUNOLOGIE =======================
  {
    id: 'imm-bases', m: 'immuno', titre: 'Immunité innée, adaptative et hypersensibilités',
    intro: 'Le système immunitaire distingue le soi du non-soi grâce à une immunité innée, rapide, et à une immunité adaptative, spécifique et dotée de mémoire.',
    parts: [
      { t: 'Immunité innée', l: ['Barrières, complément, phagocytes (polynucléaires, macrophages), cellules NK.', 'Reconnaissance de motifs microbiens par des récepteurs comme les Toll-like receptors.'] },
      { t: 'Immunité adaptative', l: ['Lymphocytes B (immunité humorale, anticorps produits par les plasmocytes) et T (immunité cellulaire).', 'LT CD4 auxiliaires : reconnaissent l’antigène présenté par le CMH de classe II. LT CD8 cytotoxiques : CMH de classe I.', 'Anticorps : IgM (réponse primaire), IgG (réponse secondaire, passent le placenta), IgA (muqueuses, lait), IgE (allergie, parasites).', 'Vaccination : induit une mémoire immunitaire spécifique.'] },
      { t: 'Hypersensibilités (Gell et Coombs)', l: ['Type I, immédiate, médiée par les IgE : allergie, anaphylaxie.', 'Type II, cytotoxique par anticorps : anémie hémolytique auto-immune, réaction transfusionnelle ABO.', 'Type III, par complexes immuns : maladie sérique, certaines glomérulonéphrites, lupus.', 'Type IV, retardée, médiée par les lymphocytes T : eczéma de contact, intradermoréaction à la tuberculine.'] },
    ],
    retenir: ['CD4 ↔ CMH II ; CD8 ↔ CMH I.', 'IgG passent le placenta.', 'Type I = IgE ; type IV = retardée, LT.'],
  },

  // ======================= MICROBIOLOGIE =======================
  {
    id: 'mic-atb', m: 'microbio', titre: 'Bactéries, antibiotiques et résistances',
    intro: 'Le choix d’un antibiotique repose sur la bactérie suspectée, le site de l’infection, le terrain et l’écologie des résistances.',
    parts: [
      { t: 'Bactéries d’intérêt', l: ['Cocci Gram positif : staphylocoques (S. aureus), streptocoques (pneumocoque, streptocoque A), entérocoques.', 'Bacilles Gram négatif : entérobactéries (E. coli, Klebsiella), Pseudomonas aeruginosa.', 'Cocci Gram négatif : méningocoque, gonocoque. Intracellulaires : Legionella, Mycoplasma, Chlamydia.'] },
      { t: 'Principes d’antibiothérapie', l: ['Prélèvements microbiologiques (hémocultures) avant l’antibiothérapie, sauf urgence vitale qui ne doit pas être retardée (purpura fulminans).', 'Antibiothérapie probabiliste puis adaptée à l’antibiogramme (désescalade). Réévaluation systématique à 48 – 72 heures.', 'Durées courtes quand elles sont validées.'] },
      { t: 'Résistances', l: ['SARM : S. aureus résistant à la méticilline.', 'Entérobactéries productrices de BLSE (bêtalactamases à spectre étendu) ou de carbapénémases.', 'Pneumocoque de sensibilité diminuée à la pénicilline (par modification des protéines de liaison).', 'Prévention : hygiène des mains (friction hydroalcoolique), bon usage des antibiotiques.'] },
    ],
    arrets: ['peni', 'c3g', 'macro', 'fq'],
    retenir: ['Hémocultures avant antibiotique (sauf urgence vitale).', 'Réévaluation à 48-72 h.', 'Friction hydroalcoolique : premier geste de prévention.'],
  },
];
