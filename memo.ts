// CAP MÉDECIN — mémo : valeurs de référence de l’adulte, scores et formules
// Les normes varient selon les laboratoires et les référentiels : toujours se référer aux valeurs du compte rendu.
import type { Article, CodeId } from './types';

const A = (id: string, code: CodeId, num: string, titre: string, texte: string): Article => ({ id, code, num, titre, texte });

export const CODES: { id: CodeId; nom: string; court: string }[] = [
  { id: 'bio', nom: 'Biochimie sanguine', court: 'Biochimie' },
  { id: 'hemato', nom: 'Hématologie et hémostase', court: 'Hémato' },
  { id: 'gds', nom: 'Gaz du sang artériel', court: 'Gaz du sang' },
  { id: 'urine', nom: 'Examens urinaires', court: 'Urines' },
  { id: 'clin', nom: 'Constantes et clinique', court: 'Clinique' },
  { id: 'score', nom: 'Scores cliniques', court: 'Scores' },
  { id: 'formule', nom: 'Formules et calculs', court: 'Formules' },
];

export const ARTICLES: Article[] = [
  // ---------- Biochimie ----------
  A('na', 'bio', 'Natrémie', '135 – 145 mmol/L', 'Reflète l’état d’hydratation intracellulaire. Hyponatrémie < 135 (sévère < 125) ; hypernatrémie > 145. Une correction trop rapide d’une hyponatrémie chronique expose à la myélinolyse centropontine.'),
  A('k', 'bio', 'Kaliémie', '3,5 – 5,0 mmol/L', 'Hypokaliémie < 3,5 ; hyperkaliémie > 5,0 (menaçante si ≥ 6,5 ou avec signes ECG). Toujours éliminer une hémolyse du prélèvement devant une hyperkaliémie isolée.'),
  A('cl', 'bio', 'Chlorémie', '98 – 107 mmol/L', 'Sert au calcul du trou anionique. Une hyperchlorémie accompagne les acidoses métaboliques à trou anionique normal (pertes digestives de bicarbonates, acidose tubulaire).'),
  A('hco3', 'bio', 'Bicarbonates (réserve alcaline)', '22 – 26 mmol/L', 'Diminués dans l’acidose métabolique (ou la compensation d’une alcalose respiratoire) ; augmentés dans l’alcalose métabolique (vomissements, diurétiques).'),
  A('ca', 'bio', 'Calcémie totale', '2,20 – 2,60 mmol/L', 'À corriger selon l’albuminémie. Hypercalcémie > 2,60 (sévère > 3,5) : polyurie, troubles digestifs, troubles de conscience, QT court. Calcium ionisé : 1,15 – 1,30 mmol/L.'),
  A('phos', 'bio', 'Phosphorémie', '0,80 – 1,45 mmol/L', 'Augmentée dans l’insuffisance rénale chronique et l’hypoparathyroïdie ; diminuée dans l’hyperparathyroïdie primaire et la renutrition (syndrome de renutrition inappropriée).'),
  A('glyc', 'bio', 'Glycémie à jeun', '0,70 – 1,10 g/L (3,9 – 6,1 mmol/L)', 'Diabète : glycémie à jeun ≥ 1,26 g/L (7 mmol/L) à deux reprises, ou ≥ 2 g/L à tout moment avec symptômes. Hyperglycémie modérée à jeun entre 1,10 et 1,25 g/L. Hypoglycémie < 0,70 g/L chez le diabétique.'),
  A('hba1c', 'bio', 'Hémoglobine glyquée (HbA1c)', '4 – 6 %', 'Reflète l’équilibre glycémique des 2 à 3 derniers mois. Cible habituelle ≤ 7 % chez le diabétique de type 2, à individualiser (plus souple chez le sujet âgé fragile).'),
  A('creat', 'bio', 'Créatininémie', 'H : 60 – 110 µmol/L ; F : 45 – 90 µmol/L', 'Dépend de la masse musculaire. On estime le débit de filtration glomérulaire (DFG) par la formule CKD-EPI ; la formule de Cockcroft-Gault reste utilisée pour adapter certaines posologies.'),
  A('uree', 'bio', 'Urée sanguine', '2,5 – 7,5 mmol/L', 'Augmentée dans l’insuffisance rénale, la déshydratation, les hémorragies digestives hautes et les régimes hyperprotidiques.'),
  A('prot', 'bio', 'Protidémie', '60 – 80 g/L', 'Augmentée en cas d’hémoconcentration (déshydratation extracellulaire) ou de gammapathie ; diminuée en cas d’hémodilution, dénutrition, insuffisance hépatocellulaire ou syndrome néphrotique.'),
  A('alb', 'bio', 'Albuminémie', '35 – 50 g/L', 'Marqueur de dénutrition (sévère si < 30 g/L) et d’insuffisance hépatocellulaire ; effondrée dans le syndrome néphrotique (< 30 g/L).'),
  A('crp', 'bio', 'Protéine C réactive (CRP)', '< 5 mg/L', 'Marqueur d’inflammation qui s’élève en 6 à 8 heures et se normalise rapidement. Non spécifique : ne distingue pas à elle seule une infection bactérienne d’une autre cause d’inflammation.'),
  A('transa', 'bio', 'Transaminases (ASAT, ALAT)', '< 40 UI/L environ', 'Cytolyse hépatique quand l’ALAT prédomine (hépatites). Une élévation massive (> 10 N) évoque une hépatite virale aiguë, toxique (paracétamol) ou ischémique.'),
  A('bili', 'bio', 'Bilirubine totale', '< 17 µmol/L', 'Ictère cliniquement visible au-delà d’environ 40 – 50 µmol/L. Bilirubine libre (non conjuguée) : hémolyse, maladie de Gilbert ; conjuguée : cholestase.'),
  A('cholestase', 'bio', 'Gamma-GT et phosphatases alcalines', 'GGT < 40 – 60 UI/L ; PAL < 120 UI/L', 'Leur élévation conjointe signe une cholestase. GGT isolément élevées : alcool, médicaments inducteurs, stéatose.'),
  A('lipase', 'bio', 'Lipasémie', '< 60 UI/L environ (selon laboratoire)', 'Une lipase > 3 fois la normale associée à une douleur typique suffit au diagnostic de pancréatite aiguë ; son taux n’est pas corrélé à la gravité.'),
  A('tropo', 'bio', 'Troponine', '< 99e percentile (dosage ultrasensible)', 'Marqueur de nécrose myocardique. Une cinétique (élévation ou baisse) au-dessus du 99e percentile, dans un contexte d’ischémie, définit l’infarctus du myocarde.'),
  A('bnp', 'bio', 'Peptides natriurétiques (BNP, NT-proBNP)', 'BNP < 100 pg/mL ; NT-proBNP < 300 pg/mL', 'En dessous de ces seuils, une insuffisance cardiaque aiguë est très improbable (excellente valeur prédictive négative). Augmentent avec l’âge et l’insuffisance rénale.'),
  A('tsh', 'bio', 'TSH', '0,4 – 4 mUI/L', 'Premier examen pour explorer la thyroïde. TSH basse : hyperthyroïdie périphérique ; TSH élevée : hypothyroïdie périphérique (dosage de la T4 libre ensuite).'),
  A('ferritine', 'bio', 'Ferritine', 'H : 30 – 300 µg/L ; F : 20 – 200 µg/L', 'Une ferritine basse affirme la carence martiale. Elle augmente en cas d’inflammation, de cytolyse, d’alcoolisme ou de surcharge en fer (hémochromatose).'),
  A('lact', 'bio', 'Lactates artériels', '< 2 mmol/L', 'Marqueur d’hypoperfusion tissulaire. Dans le sepsis, des lactates > 2 mmol/L malgré un remplissage adapté, avec vasopresseurs, définissent le choc septique.'),
  A('ldl', 'bio', 'LDL-cholestérol', 'Cible selon le risque cardiovasculaire', 'Objectifs indicatifs : < 1,16 g/L (risque modéré), < 1 g/L (risque élevé), < 0,55 g/L (risque très élevé, par exemple après un infarctus).'),

  // ---------- Hématologie ----------
  A('hb', 'hemato', 'Hémoglobine', 'H : 13 – 17 g/dL ; F : 12 – 16 g/dL', 'Anémie : Hb < 13 g/dL chez l’homme, < 12 g/dL chez la femme, < 11 g/dL chez la femme enceinte (seuil abaissé à 10,5 g/dL au 2e trimestre). Classer ensuite selon le VGM et les réticulocytes.'),
  A('vgm', 'hemato', 'Volume globulaire moyen (VGM)', '80 – 100 fL', 'Microcytose < 80 fL (carence martiale, inflammation, thalassémie) ; macrocytose > 100 fL (alcool, carence en B12 ou folates, hypothyroïdie, médicaments, myélodysplasie).'),
  A('retic', 'hemato', 'Réticulocytes', '20 – 120 G/L', 'Au-delà d’environ 120 G/L (150 selon les référentiels), l’anémie est régénérative : hémorragie aiguë ou hémolyse. En dessous, elle est d’origine centrale.'),
  A('plq', 'hemato', 'Plaquettes', '150 – 400 G/L', 'Thrombopénie < 150 G/L (risque hémorragique spontané surtout < 20 G/L). Toujours vérifier sur tube citraté l’absence de fausse thrombopénie à l’EDTA.'),
  A('gb', 'hemato', 'Leucocytes', '4 – 10 G/L', 'Hyperleucocytose > 10 G/L ; leucopénie < 4 G/L. Analyser chaque lignée (polynucléaires, lymphocytes, monocytes) en valeur absolue.'),
  A('pnn', 'hemato', 'Polynucléaires neutrophiles', '1,5 – 7 G/L', 'Neutropénie < 1,5 G/L ; agranulocytose < 0,5 G/L : toute fièvre devient une urgence (antibiothérapie probabiliste large en urgence).'),
  A('tp', 'hemato', 'Taux de prothrombine (TP)', '> 70 %', 'Explore la voie extrinsèque (facteurs II, V, VII, X). Abaissé par l’insuffisance hépatocellulaire, la carence en vitamine K et les AVK. Le facteur V, indépendant de la vitamine K, aide à les distinguer.'),
  A('inr', 'hemato', 'INR sous AVK', 'Cible le plus souvent 2 – 3', 'Cible 2 – 3 pour la fibrillation atriale et la maladie thromboembolique veineuse ; plus élevée pour certaines valves mécaniques. Surdosage : risque hémorragique, antidote vitamine K (et concentrés de complexe prothrombinique si hémorragie grave).'),
  A('tca', 'hemato', 'Temps de céphaline avec activateur (TCA)', 'Ratio patient/témoin < 1,2', 'Explore la voie intrinsèque (facteurs VIII, IX, XI, XII). Allongé par l’héparine non fractionnée, l’hémophilie, un anticoagulant circulant.'),
  A('fibri', 'hemato', 'Fibrinogène', '2 – 4 g/L', 'Augmenté dans l’inflammation ; abaissé dans la coagulation intravasculaire disséminée (CIVD), l’insuffisance hépatocellulaire sévère et les hémorragies massives.'),
  A('ddim', 'hemato', 'D-dimères', '< 500 µg/L', 'Excellente valeur prédictive négative : un dosage négatif exclut une maladie thromboembolique en cas de probabilité clinique faible ou intermédiaire. Seuil ajusté à l’âge après 50 ans (âge × 10 µg/L). Inutiles si la probabilité est forte.'),

  // ---------- Gaz du sang ----------
  A('ph', 'gds', 'pH artériel', '7,38 – 7,42', 'Acidémie < 7,38 ; alcalémie > 7,42. Le trouble primitif se déduit du sens des variations de PaCO2 et des bicarbonates.'),
  A('paco2', 'gds', 'PaCO2', '35 – 45 mmHg', 'Reflète la ventilation alvéolaire. Hypercapnie > 45 mmHg : hypoventilation (BPCO décompensée, intoxication, épuisement) ; hypocapnie : hyperventilation.'),
  A('pao2', 'gds', 'PaO2', '80 – 100 mmHg en air ambiant', 'Hypoxémie < 80 mmHg ; insuffisance respiratoire aiguë si < 60 mmHg. Diminue physiologiquement avec l’âge.'),
  A('sao2', 'gds', 'Saturation en oxygène (SaO2/SpO2)', '≥ 95 %', 'Objectif habituel de 94 – 98 % ; 88 – 92 % chez l’insuffisant respiratoire chronique hypercapnique. La SpO2 peut être faussée par une mauvaise perfusion ou une intoxication au monoxyde de carbone.'),

  // ---------- Urines ----------
  A('bu', 'urine', 'Bandelette urinaire', 'Leucocytes et nitrites négatifs', 'Chez la femme, une bandelette négative pour les leucocytes et les nitrites rend une infection urinaire très improbable (bonne valeur prédictive négative). Les nitrites détectent surtout les entérobactéries.'),
  A('ecbu', 'urine', 'ECBU', 'Leucocyturie < 10⁴/mL ; pas de bactériurie significative', 'Infection si leucocyturie ≥ 10⁴/mL avec bactériurie significative : ≥ 10³ UFC/mL pour E. coli (seuils variables selon le germe et le sexe). Bactériurie sans leucocyturie : souillure ou colonisation.'),
  A('proteinurie', 'urine', 'Protéinurie des 24 heures', '< 150 mg/24 h', 'Protéinurie significative au-delà ; syndrome néphrotique si > 3 g/24 h (ou > 50 mg/kg/j chez l’enfant) avec albuminémie < 30 g/L. Dépistage de la néphropathie diabétique par le rapport albuminurie/créatininurie (< 3 mg/mmol).'),
  A('diurese', 'urine', 'Diurèse', '> 0,5 mL/kg/h', 'Oligurie < 500 mL/24 h ; anurie < 100 mL/24 h. Devant une anurie, éliminer d’abord un obstacle (globe vésical, échographie).'),

  // ---------- Clinique ----------
  A('fc', 'clin', 'Fréquence cardiaque', '60 – 100 battements/min', 'Tachycardie > 100/min ; bradycardie < 60/min. Chez l’enfant, les normes dépendent de l’âge (le nourrisson est normalement plus rapide).'),
  A('pa', 'clin', 'Pression artérielle', '< 140/90 mmHg au cabinet', 'HTA si ≥ 140/90 mmHg au cabinet, confirmée hors cabinet : automesure ≥ 135/85 mmHg ou MAPA. Hypotension si PAS < 90 mmHg ou PAM < 65 mmHg.'),
  A('fr', 'clin', 'Fréquence respiratoire', '12 – 20 cycles/min', 'Polypnée > 20/min. Une FR ≥ 22/min est un critère de gravité (qSOFA) ; une bradypnée peut annoncer un épuisement ou une intoxication aux opioïdes.'),
  A('temp', 'clin', 'Température', '36 – 37,5 °C', 'Fièvre > 38 °C le matin au repos ; hypothermie < 35 °C. Chez le nourrisson de moins de 3 mois, toute fièvre impose une évaluation médicale urgente.'),
  A('imc', 'clin', 'Indice de masse corporelle', '18,5 – 25 kg/m²', 'IMC = poids / taille². Surpoids 25 – 30 ; obésité ≥ 30 (sévère ≥ 35, morbide ≥ 40). Maigreur < 18,5 ; chez le sujet de 70 ans et plus, la dénutrition est retenue sous 22.'),

  // ---------- Scores ----------
  A('glasgow', 'score', 'Score de Glasgow', '15 (de 3 à 15)', 'Yeux (1 à 4) + verbal (1 à 5) + moteur (1 à 6). Un score ≤ 8 définit le coma et fait discuter une protection des voies aériennes (intubation).'),
  A('qsofa', 'score', 'qSOFA', '0 à 3 points', 'Fréquence respiratoire ≥ 22/min, pression artérielle systolique ≤ 100 mmHg, confusion. Un score ≥ 2 chez un patient infecté doit faire rechercher un sepsis (score SOFA).'),
  A('cha2ds2', 'score', 'CHA2DS2-VASc', '0 à 9 points', 'Insuffisance cardiaque, HTA, âge ≥ 75 ans (2), diabète, AVC ou AIT (2), maladie vasculaire, âge 65 – 74 ans, sexe féminin. Anticoagulation recommandée si ≥ 2 chez l’homme, ≥ 3 chez la femme ; à discuter dès 1 (homme) ou 2 (femme).'),
  A('wells', 'score', 'Score de Wells (embolie pulmonaire)', 'Probabilité faible, intermédiaire ou forte', 'Signes de TVP (3), diagnostic alternatif moins probable que l’EP (3), FC > 100 (1,5), immobilisation ou chirurgie récente (1,5), antécédent de TVP ou EP (1,5), hémoptysie (1), cancer actif (1). Faible < 2, intermédiaire 2 – 6, forte > 6.'),
  A('crb65', 'score', 'CRB-65 (pneumopathie)', '0 à 4 points', 'Confusion, fréquence respiratoire ≥ 30/min, PAS < 90 ou PAD ≤ 60 mmHg, âge ≥ 65 ans. À 0, traitement ambulatoire possible ; dès 1, discuter l’hospitalisation.'),
  A('apgar', 'score', 'Score d’Apgar', '0 à 10, à 1, 5 et 10 minutes', 'Fréquence cardiaque, respiration, tonus, réactivité, coloration (0 à 2 chacun). Un score ≥ 7 est normal ; un score bas à 1 minute appelle une réanimation néonatale immédiate.'),
  A('nihss', 'score', 'NIHSS', '0 à 42 points', 'Quantifie le déficit neurologique d’un AVC (conscience, oculomotricité, champ visuel, face, membres, ataxie, sensibilité, langage, dysarthrie, négligence). Guide l’indication et le suivi de la thrombolyse.'),
  A('centor', 'score', 'Score de Mac Isaac (angine)', '0 à 5 points', 'Fièvre > 38 °C, absence de toux, adénopathies cervicales sensibles, atteinte amygdalienne, âge (15 – 44 ans : 0 ; ≥ 45 ans : − 1). Chez l’adulte, un score ≥ 2 justifie le test de diagnostic rapide du streptocoque.'),
  A('childpugh', 'score', 'Score de Child-Pugh', 'Classes A (5 – 6), B (7 – 9), C (10 – 15)', 'Évalue la gravité de la cirrhose : bilirubine, albumine, TP, ascite, encéphalopathie. Pronostic et adaptation des traitements.'),

  // ---------- Formules ----------
  A('cockcroft', 'formule', 'Clairance de Cockcroft-Gault', '(140 − âge) × poids × k / créatininémie', 'Créatininémie en µmol/L, poids en kg ; k = 1,23 chez l’homme, 1,04 chez la femme. Résultat en mL/min. Utilisée pour l’adaptation des doses de nombreux médicaments.'),
  A('ckdepi', 'formule', 'DFG estimé (CKD-EPI)', 'Normale > 90 mL/min/1,73 m²', 'Stades de maladie rénale chronique : 60 – 89 (stade 2 si marqueur d’atteinte rénale), 45 – 59 (3a), 30 – 44 (3b), 15 – 29 (4), < 15 (5, insuffisance rénale terminale).'),
  A('ta', 'formule', 'Trou anionique plasmatique', 'Na − (Cl + HCO3) = 12 ± 4 mmol/L', 'Augmenté dans les acidoses métaboliques par excès d’acides (acidocétose, acidose lactique, intoxications, insuffisance rénale) ; normal dans les pertes de bicarbonates (diarrhée, acidose tubulaire).'),
  A('osmo', 'formule', 'Osmolarité plasmatique calculée', '2 × Na + glycémie + urée (mmol/L) ≈ 285 – 295', 'Un trou osmolaire (osmolalité mesurée − calculée > 10) fait rechercher une intoxication par un alcool toxique (méthanol, éthylène glycol).'),
  A('cacorr', 'formule', 'Calcémie corrigée', 'Ca + 0,025 × (40 − albumine en g/L)', 'Corrige la calcémie totale en cas d’hypoalbuminémie. En cas de doute, doser le calcium ionisé.'),
  A('nacorr', 'formule', 'Natrémie corrigée (hyperglycémie)', '≈ Na + 0,3 × (glycémie en mmol/L − 5,5)', 'L’hyperglycémie attire l’eau hors des cellules et abaisse la natrémie mesurée ; la natrémie corrigée reflète le vrai état d’hydratation intracellulaire.'),
  A('pam', 'formule', 'Pression artérielle moyenne', 'PAD + (PAS − PAD) / 3', 'Reflète la pression de perfusion des organes. Cible ≥ 65 mmHg dans le choc septique.'),
  A('pf', 'formule', 'Rapport PaO2/FiO2', 'Normal > 400 mmHg', 'SDRA (définition de Berlin) : léger 200 – 300, modéré 100 – 200, sévère ≤ 100 mmHg, sous PEP ≥ 5 cmH2O.'),
  A('friedewald', 'formule', 'LDL-cholestérol (Friedewald)', 'LDL = CT − HDL − TG/5 (en g/L)', 'Valable si les triglycérides sont < 3,4 g/L ; au-delà, dosage direct du LDL.'),
  A('sesp', 'formule', 'Sensibilité et spécificité', 'Se = VP/(VP + FN) ; Sp = VN/(VN + FP)', 'Qualités intrinsèques d’un test, indépendantes de la prévalence. Un test très sensible sert à éliminer une maladie quand il est négatif ; un test très spécifique sert à l’affirmer quand il est positif.'),
  A('vppvpn', 'formule', 'Valeurs prédictives', 'VPP = VP/(VP + FP) ; VPN = VN/(VN + FN)', 'Dépendent de la prévalence : quand la prévalence augmente, la VPP augmente et la VPN diminue.'),
  A('rr', 'formule', 'Risque relatif et odds ratio', 'RR = risque exposés / risque non exposés', 'RR calculé dans les études de cohorte ; odds ratio dans les études cas-témoins (proche du RR quand la maladie est rare). RR = 1 : pas d’association.'),
];
