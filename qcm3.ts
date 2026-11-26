// CAP MÉDECIN — QCM des spécialités complémentaires et de LCA
// Une réponse (QRU) : a est un nombre. Plusieurs réponses (QRM, format EDN) : a est une liste.
import type { Question } from './types';

const Q = (m: string, q: string, c: string[], a: number | number[], e: string): Question => ({ m, q, c, a, e });

export const QCM3: Question[] = [
  // ---------- Dermatologie ----------
  Q('derm', 'Localisations typiques du psoriasis en plaques (plusieurs réponses) :', ['Coudes', 'Genoux', 'Cuir chevelu', 'Plis de flexion des coudes chez le nourrisson', 'Région lombosacrée'], [0, 1, 2, 4], 'Zones bastion : coudes, genoux, lombes, cuir chevelu, ongles.'),
  Q('derm', 'L’eczéma de contact allergique est une hypersensibilité de type…', ['I (immédiate)', 'II (cytotoxique)', 'III (complexes immuns)', 'IV (retardée)'], 3, 'Médiée par les lymphocytes T ; diagnostic par tests épicutanés.'),
  Q('derm', 'Signes de gravité d’une toxidermie (plusieurs réponses) :', ['Fièvre élevée', 'Atteinte des muqueuses', 'Décollement cutané', 'Prurit isolé', 'Œdème du visage'], [0, 1, 2, 4], 'Ils font craindre un Stevens-Johnson/Lyell ou un DRESS.'),
  Q('derm', 'Dans la règle ABCDE du mélanome, le « E » signifie…', ['Épaisseur', 'Évolution', 'Érythème', 'Extension'], 1, 'Toute lésion pigmentée qui change doit être examinée.'),
  Q('derm', 'Le principal facteur pronostique d’un mélanome localisé est…', ['Le diamètre', 'L’indice de Breslow', 'La couleur', 'L’âge du patient'], 1, 'Épaisseur tumorale mesurée en millimètres.'),
  Q('derm', 'Le carcinome basocellulaire…', ['Métastase fréquemment', 'Ne donne quasiment jamais de métastase', 'Siège surtout sur la plante des pieds', 'Est lié au VIH'], 1, 'Extension locale, d’où l’intérêt d’une exérèse complète.'),
  Q('derm', 'Traitement de référence d’un érysipèle de jambe sans gravité chez l’adulte :', ['Amoxicilline', 'Fluoroquinolone', 'AINS seul', 'Abstention'], 0, 'Germe : streptocoque A. Les AINS sont déconseillés (risque de fasciite nécrosante).'),
  Q('derm', 'Signes faisant craindre une fasciite nécrosante (plusieurs réponses) :', ['Douleur intense disproportionnée', 'Zones de nécrose', 'Crépitation sous-cutanée', 'Hypoesthésie cutanée', 'Placard bien limité sans fièvre'], [0, 1, 2, 3], 'Urgence médico-chirurgicale.'),

  // ---------- Ophtalmologie ----------
  Q('ophtalmo', 'Devant un œil rouge, quels signes imposent un avis ophtalmologique urgent (plusieurs réponses) ?', ['Baisse d’acuité visuelle', 'Douleur oculaire intense', 'Photophobie', 'Sécrétions claires isolées sans douleur', 'Pupille aréactive'], [0, 1, 2, 4], 'Ils orientent vers une kératite, une uvéite ou un glaucome aigu.'),
  Q('ophtalmo', 'Dans le glaucome aigu par fermeture de l’angle, la pupille est…', ['En myosis', 'En semi-mydriase aréactive', 'Normale', 'En anisocorie physiologique'], 1, 'Ne jamais dilater ; urgence thérapeutique.'),
  Q('ophtalmo', 'Pourquoi ne jamais prescrire de collyre corticoïde sans examen spécialisé ?', ['Il colore les dents', 'Il peut aggraver une kératite herpétique', 'Il provoque une conjonctivite', 'Il est inefficace'], 1, 'Risque de perforation cornéenne.'),
  Q('ophtalmo', 'Baisse brutale de vision d’un œil chez un homme de 75 ans avec céphalées temporales : examen à faire en urgence ?', ['IRM cérébrale', 'VS et CRP', 'Glycémie', 'EEG'], 1, 'Éliminer une maladie de Horton (risque de bilatéralisation) : corticothérapie urgente si suspectée.'),
  Q('ophtalmo', 'Phosphènes et myodésopsies suivis d’un voile évoquent…', ['Une conjonctivite', 'Un décollement de rétine', 'Une presbytie', 'Une sécheresse oculaire'], 1, 'Urgence chirurgicale.'),
  Q('ophtalmo', 'L’uvéite antérieure aiguë est associée à (plusieurs réponses) :', ['La spondyloarthrite', 'La sarcoïdose', 'Un cercle périkératique', 'Une mydriase réactive normale', 'Une douleur et une photophobie'], [0, 1, 2, 4], 'L’uvéite s’accompagne d’un myosis, pas d’une mydriase.'),

  // ---------- ORL ----------
  Q('orl', 'Chez un adulte avec un score de Mac Isaac à 1, on…', ['Fait un TROD', 'Ne fait pas de TROD et ne prescrit pas d’antibiotique', 'Prescrit de l’amoxicilline', 'Fait une prise de sang'], 1, 'TROD si score ≥ 2.'),
  Q('orl', 'TROD positif chez un adulte sans allergie : traitement ?', ['Amoxicilline 6 jours', 'Ceftriaxone IM', 'Azithromycine 10 jours', 'Corticoïdes'], 0, 'Traitement de référence de l’angine streptococcique.'),
  Q('orl', 'Signes en faveur d’un phlegmon périamygdalien (plusieurs réponses) :', ['Trismus', 'Voussure du voile du palais', 'Fièvre et odynophagie unilatérale', 'Toux productive', 'Luette déviée'], [0, 1, 2, 4], 'Drainage et antibiothérapie.'),
  Q('orl', 'OMA purulente chez un enfant de 14 mois :', ['Traitement symptomatique seul', 'Antibiothérapie par amoxicilline', 'Paracentèse systématique', 'Gouttes auriculaires antibiotiques'], 1, 'Avant 2 ans, l’antibiothérapie est recommandée d’emblée.'),
  Q('orl', 'Première mesure devant une épistaxis antérieure :', ['Méchage postérieur', 'Mouchage puis compression bidigitale 10 minutes, tête penchée en avant', 'Tête en arrière', 'Embolisation'], 1, 'Penser aussi à mesurer la pression artérielle.'),
  Q('orl', 'Weber latéralisé du côté sain : il s’agit d’une surdité…', ['De transmission du côté malade', 'De perception du côté malade', 'Simulée', 'Bilatérale symétrique'], 1, 'Le son est mieux perçu par la cochlée saine.'),
  Q('orl', 'Signes devant faire évoquer un vertige d’origine centrale (plusieurs réponses) :', ['Nystagmus vertical', 'Ataxie, troubles de l’équilibre majeurs', 'Déficit neurologique associé', 'Vertige de 30 secondes au changement de position', 'Céphalée brutale'], [0, 1, 2, 4], 'Un vertige positionnel bref évoque un VPPB, bénin.'),
  Q('orl', 'Une paralysie faciale épargnant le front est…', ['Périphérique', 'Centrale', 'Toujours une paralysie de Bell', 'Due au zona'], 1, 'Le territoire supérieur a une double innervation corticale.'),

  // ---------- Rhumatologie ----------
  Q('rhumato', 'Devant une monoarthrite aiguë fébrile du genou, l’examen prioritaire est…', ['La radiographie', 'La ponction articulaire avant antibiothérapie', 'L’IRM', 'Le dosage de l’uricémie'], 1, 'Cytologie, cristaux, culture.'),
  Q('rhumato', 'Cristaux de la goutte :', ['Pyrophosphate de calcium', 'Urate de sodium', 'Oxalate de calcium', 'Cholestérol'], 1, 'Aiguilles fortement biréfringentes.'),
  Q('rhumato', 'Traitement de fond de la goutte : cible d’uricémie (sans tophus) ?', ['< 600 µmol/L', '< 360 µmol/L', '< 100 µmol/L', 'Pas de cible'], 1, '< 300 µmol/L en cas de goutte tophacée.'),
  Q('rhumato', 'Éléments en faveur d’une polyarthrite rhumatoïde (plusieurs réponses) :', ['Atteinte symétrique des MCP et IPP', 'Dérouillage matinal prolongé', 'Anticorps anti-CCP', 'Atteinte des interphalangiennes distales seules', 'Facteur rhumatoïde'], [0, 1, 2, 4], 'Les IPD sont typiques de l’arthrose digitale ou du rhumatisme psoriasique.'),
  Q('rhumato', 'Signes d’un syndrome de la queue de cheval (plusieurs réponses) :', ['Anesthésie en selle', 'Rétention urinaire', 'Incontinence anale', 'Douleur lombaire isolée calmée par le repos', 'Déficit moteur des membres inférieurs'], [0, 1, 2, 4], 'Urgence chirurgicale (IRM en urgence).'),
  Q('rhumato', 'Une sciatique avec abolition du réflexe achilléen est de topographie…', ['L4', 'L5', 'S1', 'L3'], 2, 'Le réflexe achilléen dépend de la racine S1.'),
  Q('rhumato', 'Définition densitométrique de l’ostéoporose :', ['T-score ≤ −1', 'T-score ≤ −2,5', 'Z-score ≥ 2', 'T-score ≥ +2,5'], 1, 'Entre −1 et −2,5 : ostéopénie.'),
  Q('rhumato', 'Arguments pour une rachialgie inflammatoire (plusieurs réponses) :', ['Réveils nocturnes en deuxième partie de nuit', 'Dérouillage matinal > 30 min', 'Amélioration par l’exercice', 'Aggravation à l’effort et soulagement au repos', 'Bonne réponse aux AINS'], [0, 1, 2, 4], 'Évoque une spondyloarthrite.'),

  // ---------- Orthopédie et traumatologie ----------
  Q('ortho', 'Signe le plus évocateur d’un syndrome des loges :', ['Douleur augmentée à l’étirement passif des muscles', 'Pouls distal aboli dès le début', 'Fièvre', 'Hématome superficiel'], 0, 'Le pouls peut rester présent : ne pas se rassurer.'),
  Q('ortho', 'Fracture du col du fémur : position typique du membre…', ['Allongé, rotation interne', 'Raccourci, rotation externe', 'Normal', 'En flexion de hanche'], 1, 'Chirurgie dans les 48 heures pour limiter la mortalité.'),
  Q('ortho', 'Fracture ouverte : mesures urgentes (plusieurs réponses) :', ['Antibioprophylaxie', 'Vérification de la vaccination antitétanique', 'Parage chirurgical', 'Plâtre fermé et retour à domicile', 'Couverture de la plaie par un pansement stérile'], [0, 1, 2, 4], 'Risque infectieux majeur.'),
  Q('ortho', 'Les règles d’Ottawa servent à…', ['Décider d’une radiographie après une entorse de cheville', 'Classer les brûlures', 'Évaluer une commotion', 'Choisir un antalgique'], 0, 'Elles évitent des radiographies inutiles.'),
  Q('ortho', 'Patient plâtré qui se plaint de douleurs croissantes et de fourmillements des orteils :', ['Antalgique et réévaluation le lendemain', 'Ablation ou ouverture du plâtre en urgence et examen', 'Surélévation seule', 'Radiographie de contrôle dans une semaine'], 1, 'Craindre une compression ou un syndrome des loges.'),
  Q('ortho', 'Fractures de l’enfant évoquant une maltraitance (plusieurs réponses) :', ['Fractures multiples d’âges différents', 'Fracture chez un nourrisson qui ne marche pas', 'Fractures métaphysaires « en coin »', 'Fracture du poignet après une chute de vélo', 'Mécanisme incohérent avec les lésions'], [0, 1, 2, 4], 'Hospitaliser pour protéger l’enfant et faire le bilan.'),

  // ---------- Urologie ----------
  Q('uro', 'Colique néphrétique : situations nécessitant un drainage urgent des urines (plusieurs réponses) :', ['Fièvre', 'Anurie', 'Rein unique', 'Douleur calmée par un AINS', 'Douleur résistante au traitement'], [0, 1, 2, 4], 'Formes compliquées : drainage par sonde JJ ou néphrostomie.'),
  Q('uro', 'Antalgique de première intention d’une colique néphrétique simple (hors contre-indication) :', ['AINS', 'Morphine en première intention', 'Antispasmodique seul', 'Corticoïdes'], 0, 'Les AINS réduisent la pression intra-rénale.'),
  Q('uro', 'Rétention aiguë d’urine fébrile chez un homme (prostatite) : drainage par…', ['Sonde urétrale', 'Cathéter sus-pubien', 'Aucun drainage', 'Sonde rectale'], 1, 'La sonde urétrale est contre-indiquée en cas de prostatite aiguë.'),
  Q('uro', 'Hématurie macroscopique chez un fumeur de 65 ans : cause à éliminer en priorité ?', ['Tumeur de vessie', 'Infection virale', 'Effort physique', 'Coloration alimentaire'], 0, 'Uroscanner et cystoscopie.'),
  Q('uro', 'Médicaments pouvant favoriser une rétention aiguë d’urine (plusieurs réponses) :', ['Anticholinergiques', 'Antidépresseurs tricycliques', 'Morphiniques', 'Paracétamol', 'Antihistaminiques de première génération'], [0, 1, 2, 4], 'Effet anticholinergique ou dépresseur de la contraction vésicale.'),

  // ---------- Cancérologie ----------
  Q('onco', 'Dépistage organisé du cancer colorectal :', ['Coloscopie tous les ans dès 40 ans', 'Test immunologique tous les 2 ans de 50 à 74 ans', 'Scanner abdominal tous les 5 ans', 'Dosage de l’ACE'], 1, 'Coloscopie si le test est positif.'),
  Q('onco', 'Dépistage du cancer du col de l’utérus à partir de 30 ans :', ['Frottis tous les ans', 'Test HPV tous les 5 ans', 'Échographie pelvienne', 'Aucun'], 1, 'Cytologie entre 25 et 29 ans (2 tests à 1 an d’intervalle puis à 3 ans).'),
  Q('onco', 'Neutropénie fébrile sous chimiothérapie :', ['Attendre les hémocultures pour traiter', 'Antibiothérapie probabiliste à large spectre en urgence', 'Paracétamol et surveillance à domicile systématique', 'Transfusion de plaquettes'], 1, 'Urgence infectieuse.'),
  Q('onco', 'Avant de débuter un traitement de cancer, il faut (plusieurs réponses) :', ['Une preuve histologique', 'Un bilan d’extension (TNM)', 'Une discussion en RCP', 'Attendre l’accord de la famille', 'Évaluer l’état général'], [0, 1, 2, 4], 'Puis remise du programme personnalisé de soins.'),
  Q('onco', 'Urgences oncologiques (plusieurs réponses) :', ['Compression médullaire', 'Hypercalcémie', 'Syndrome cave supérieur', 'Alopécie', 'Syndrome de lyse tumorale'], [0, 1, 2, 4], 'L’alopécie est un effet indésirable sans gravité vitale.'),
  Q('onco', 'Tétrade évocatrice d’un myélome (CRAB) :', ['Hypercalcémie, insuffisance rénale, anémie, lésions osseuses', 'Fièvre, sueurs, prurit, adénopathies', 'Hépatomégalie, splénomégalie, ictère, ascite', 'Toux, dyspnée, hémoptysie, douleur'], 0, 'Calcium, Renal, Anemia, Bone.'),

  // ---------- Gériatrie ----------
  Q('geria', 'Signes de gravité d’une chute chez le sujet âgé (plusieurs réponses) :', ['Station au sol prolongée', 'Incapacité à se relever seul', 'Chutes répétées', 'Chute sans conséquence avec relevé immédiat', 'Fracture'], [0, 1, 2, 4], 'Risque de rhabdomyolyse, d’hypothermie, de syndrome post-chute.'),
  Q('geria', 'Le syndrome confusionnel se caractérise par…', ['Un début progressif sur des années', 'Un début brutal et une évolution fluctuante', 'Une vigilance normale', 'L’absence de cause'], 1, 'Toujours rechercher une cause organique.'),
  Q('geria', 'Causes fréquentes de confusion du sujet âgé (plusieurs réponses) :', ['Rétention urinaire', 'Fécalome', 'Infection', 'Lecture prolongée', 'Médicament anticholinergique'], [0, 1, 2, 4], 'Examen clinique complet et révision de l’ordonnance.'),
  Q('geria', 'Seuil d’IMC évocateur de dénutrition après 70 ans :', ['< 18,5', '< 22', '< 25', '< 30'], 1, 'Critère phénotypique de la HAS chez le sujet âgé.'),
  Q('geria', 'Test simple d’évaluation du risque de chute :', ['Timed Up and Go', 'Test de Schirmer', 'Score de Glasgow', 'Test de Rinne'], 0, 'Se lever, marcher 3 m, faire demi-tour, se rasseoir.'),

  // ---------- Soins palliatifs ----------
  Q('palliatif', 'Lors de l’initiation d’un traitement par morphine, il faut systématiquement…', ['Un laxatif', 'Un antibiotique', 'Un anticoagulant', 'Un corticoïde'], 0, 'La constipation ne s’atténue pas avec le temps.'),
  Q('palliatif', 'Antidote d’un surdosage en morphine :', ['Flumazénil', 'Naloxone', 'Atropine', 'N-acétylcystéine'], 1, 'Titration pour ne pas lever l’analgésie brutalement.'),
  Q('palliatif', 'Arguments pour une douleur neuropathique (plusieurs réponses) :', ['Brûlures', 'Décharges électriques', 'Allodynie', 'Douleur mécanique articulaire', 'Fourmillements dans un territoire nerveux'], [0, 1, 2, 4], 'Questionnaire DN4 : positif si ≥ 4/10.'),
  Q('palliatif', 'Les directives anticipées…', ['Sont valables 3 ans seulement', 'S’imposent au médecin sauf urgence ou si manifestement inappropriées', 'N’ont aucune valeur légale', 'Doivent être rédigées par un notaire'], 1, 'Elles sont révisables et révocables à tout moment, sans limite de durée.'),
  Q('palliatif', 'Limitation ou arrêt des traitements chez un patient qui ne peut s’exprimer : la décision est…', ['Prise par la famille seule', 'Prise au terme d’une procédure collégiale', 'Prise par le juge', 'Interdite'], 1, 'Le médecin recueille les directives anticipées, l’avis de la personne de confiance ou des proches.'),

  // ---------- Addictologie ----------
  Q('addicto', 'Mesures systématiques lors d’un sevrage en alcool (plusieurs réponses) :', ['Vitamine B1 (thiamine)', 'Hydratation', 'Benzodiazépine selon les signes de sevrage', 'Arrêt de toute surveillance', 'Évaluation du risque de crise convulsive'], [0, 1, 2, 4], 'Prévenir l’encéphalopathie de Gayet-Wernicke et le delirium tremens.'),
  Q('addicto', 'Repère de consommation d’alcool à moindre risque :', ['Maximum 2 verres par jour, 10 par semaine, avec des jours sans', '4 verres par jour', '1 bouteille de vin par jour', '21 verres par semaine'], 0, 'Un verre standard = 10 g d’alcool pur.'),
  Q('addicto', 'Test évaluant la dépendance au tabac :', ['Fagerström', 'AUDIT-C', 'MMSE', 'CAGE'], 0, 'AUDIT-C et CAGE-DETA concernent l’alcool.'),
  Q('addicto', 'Médicament à remettre aux usagers d’opioïdes pour prévenir le décès par overdose :', ['Naloxone', 'Méthadone', 'Diazépam', 'Paracétamol'], 0, 'Formes nasales ou injectables prêtes à l’emploi.'),
  Q('addicto', 'Complications possibles de la cocaïne (plusieurs réponses) :', ['Infarctus du myocarde du sujet jeune', 'AVC', 'Troubles du rythme', 'Bradycardie isolée sans risque', 'Perforation de la cloison nasale'], [0, 1, 2, 4], 'Vasoconstriction et effet sympathomimétique.'),

  // ---------- Santé publique ----------
  Q('santepub', 'La prévalence d’une maladie correspond…', ['Aux nouveaux cas sur une période', 'Aux cas présents à un instant donné', 'Aux décès', 'Aux cas guéris'], 1, 'L’incidence compte les nouveaux cas.'),
  Q('santepub', 'Le dépistage du cancer du sein par mammographie est une prévention…', ['Primaire', 'Secondaire', 'Tertiaire', 'Quaternaire'], 1, 'Il vise à diagnostiquer tôt une maladie déjà présente.'),
  Q('santepub', 'Maladies à déclaration obligatoire (plusieurs réponses) :', ['Tuberculose', 'Rougeole', 'Infection invasive à méningocoque', 'Rhume', 'Légionellose'], [0, 1, 2, 4], 'Signalement à l’ARS.'),
  Q('santepub', 'Un effet indésirable médicamenteux grave doit être déclaré…', ['Au fabricant uniquement', 'Au centre régional de pharmacovigilance', 'À la police', 'Il n’y a pas d’obligation'], 1, 'Déclaration obligatoire pour les professionnels de santé.'),

  // ---------- Médecine légale ----------
  Q('medleg', 'Dans un certificat de coups et blessures, les déclarations du patient sont rapportées…', ['Comme des faits établis', 'Au conditionnel ou entre guillemets', 'Jamais', 'Par un tiers'], 1, 'Le médecin décrit objectivement ce qu’il constate.'),
  Q('medleg', 'Situations imposant un obstacle médico-légal sur le certificat de décès (plusieurs réponses) :', ['Mort violente', 'Mort suspecte', 'Suicide', 'Décès attendu en soins palliatifs', 'Cause du décès inconnue chez un sujet jeune'], [0, 1, 2, 4], 'Le corps est alors mis à disposition de la justice.'),
  Q('medleg', 'Face à un enfant probablement maltraité, la priorité est de…', ['Le protéger, au besoin par une hospitalisation', 'Confronter les parents', 'Attendre une nouvelle consultation', 'Ne rien faire sans preuve'], 0, 'Puis signalement au procureur ou information préoccupante.'),
  Q('medleg', 'Dérogations légales au secret médical (plusieurs réponses) :', ['Maladies à déclaration obligatoire', 'Sévices sur mineur', 'Certificat de décès', 'Demande d’un employeur', 'Sévices sur personne vulnérable'], [0, 1, 2, 4], 'L’employeur n’a pas accès aux informations médicales.'),
  Q('medleg', 'L’ITT au sens pénal correspond…', ['À l’arrêt de travail', 'À la durée de gêne réelle pour les actes de la vie courante', 'Au taux d’invalidité', 'À la durée d’hospitalisation'], 1, 'Elle concerne aussi les personnes sans activité professionnelle.'),

  // ---------- LCA ----------
  Q('lca', 'La randomisation permet surtout de limiter…', ['Le biais de confusion (comparabilité initiale des groupes)', 'Le biais de publication', 'Le manque de puissance', 'Les perdus de vue'], 0, 'Elle répartit de façon équilibrée les facteurs connus et inconnus.'),
  Q('lca', 'Le double aveugle limite principalement…', ['Le biais de sélection', 'Le biais de mesure (classement)', 'La confusion', 'Le hasard'], 1, 'Ni le patient ni l’évaluateur ne connaissent le traitement.'),
  Q('lca', 'Risque d’événement : 20 % sous placebo et 15 % sous traitement. Le NNT est de…', ['5', '20', '15', '35'], 1, 'RAR = 5 % ; NNT = 1 / 0,05 = 20.'),
  Q('lca', 'Avec les mêmes chiffres (20 % contre 15 %), le risque relatif vaut…', ['0,25', '0,75', '1,33', '0,05'], 1, '15 / 20 = 0,75, soit une réduction relative de 25 %.'),
  Q('lca', 'Un RR = 0,80 avec IC 95 % [0,62 – 1,05] signifie…', ['Un bénéfice significatif', 'Un résultat non significatif', 'Un effet délétère significatif', 'Une erreur de calcul'], 1, 'L’intervalle contient 1.'),
  Q('lca', 'Caractéristiques de l’analyse en intention de traiter (plusieurs réponses) :', ['Chaque patient est analysé dans son groupe de randomisation', 'Elle préserve le bénéfice de la randomisation', 'Elle est l’analyse principale d’un essai de supériorité', 'Elle exclut les patients non observants', 'Elle est plutôt conservatrice'], [0, 1, 2, 4], 'Exclure les non-observants correspond à l’analyse per protocole.'),
  Q('lca', 'Le schéma le plus adapté pour étudier les facteurs de risque d’une maladie rare :', ['Cohorte prospective', 'Étude cas-témoins', 'Essai randomisé', 'Étude transversale'], 1, 'On part de la maladie et on recherche les expositions passées.'),
  Q('lca', 'La grille CONSORT s’applique…', ['Aux essais contrôlés randomisés', 'Aux études observationnelles', 'Aux méta-analyses', 'Aux études diagnostiques'], 0, 'STROBE : observationnelles ; PRISMA : revues systématiques ; STARD : diagnostic.'),
  Q('lca', 'Dans un essai, le risque alpha (de première espèce) correspond…', ['À la probabilité de conclure à tort à une différence', 'À la probabilité de manquer une vraie différence', 'À la puissance', 'Au nombre de perdus de vue'], 0, 'Fixé en général à 5 %. Le risque bêta est celui de manquer une différence ; puissance = 1 − bêta.'),
  Q('lca', 'Limites à rechercher dans un essai (plusieurs réponses) :', ['Critère de jugement principal modifié en cours d’étude', 'Nombreux perdus de vue', 'Conclusions tirées d’analyses en sous-groupes', 'Randomisation centralisée', 'Population très sélectionnée'], [0, 1, 2, 4], 'La randomisation centralisée est au contraire un gage de qualité.'),
];
