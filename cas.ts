// CAP MÉDECIN — cas cliniques progressifs corrigés (situations fictives à visée pédagogique)
import type { CasPratique, Etape } from './types';

const E = (q: string, c: string[], a: number, e: string): Etape => ({ q, c, a, e });

export const CAS: CasPratique[] = [
  {
    id: 'cas-sca', titre: 'Douleur thoracique au réveil', m: 'cardio', niv: 'EDN',
    enonce: 'M. R., 58 ans, fumeur (30 paquets-années), hypertendu, consulte aux urgences pour une douleur rétrosternale constrictive irradiant au bras gauche depuis 40 minutes, survenue au repos. PA 150/90 mmHg, FC 95/min, SpO2 97 % en air ambiant.',
    etapes: [
      E('Quel examen réaliser en tout premier ?', ['Un dosage de troponine', 'Un ECG 12 dérivations dans les 10 minutes', 'Une radiographie thoracique', 'Un angioscanner thoracique'], 1, 'L’ECG est l’examen clé et doit être fait dans les 10 minutes suivant le premier contact médical.'),
      E('L’ECG montre un sus-décalage du segment ST de 3 mm en DII, DIII et aVF, avec un sous-décalage en DI et aVL. Quel est le diagnostic ?', ['Péricardite aiguë', 'SCA avec sus-décalage du ST inférieur', 'Embolie pulmonaire', 'Repolarisation précoce'], 1, 'Sus-décalage systématisé à un territoire (inférieur) avec image en miroir : SCA ST+.'),
      E('Quelle est la priorité thérapeutique ?', ['Attendre la troponine pour confirmer', 'Reperfusion coronaire en urgence (angioplastie primaire si délai < 120 min)', 'Prescrire un anxiolytique et réévaluer', 'Faire une échographie cardiaque avant toute décision'], 1, 'La troponine ne doit pas retarder la reperfusion. Aspirine et anticoagulation selon le protocole, appel de la salle de cathétérisme.'),
      E('Faut-il administrer de l’oxygène ?', ['Oui, systématiquement à 15 L/min', 'Non, car la SpO2 est ≥ 90 %', 'Oui, pour protéger le myocarde', 'Uniquement après l’angioplastie'], 1, 'L’oxygène n’est indiqué qu’en cas d’hypoxémie (SpO2 < 90 %).'),
      E('À la sortie, quel traitement de prévention secondaire ?', ['Aspirine seule', 'Bêtabloquant, double antiagrégation, statine forte dose, IEC, et contrôle des facteurs de risque', 'AVK seul', 'Aucun traitement si l’artère est désobstruée'], 1, 'Mnémotechnique BASIC, arrêt du tabac et réadaptation cardiaque.'),
    ],
    retenir: ['ECG < 10 min.', 'ST+ : reperfusion sans attendre la troponine.', 'Oxygène seulement si SpO2 < 90 %.'],
    fiches: ['car-sca'],
  },
  {
    id: 'cas-oap', titre: 'Essoufflement nocturne', m: 'cardio', niv: 'EDN',
    enonce: 'Mme L., 76 ans, hypertendue, est amenée à 3 h du matin pour une dyspnée intense apparue brutalement, l’obligeant à rester assise. Elle a des crépitants dans les deux champs pulmonaires. PA 185/100 mmHg, FC 110/min irrégulière, SpO2 86 %.',
    etapes: [
      E('Quel diagnostic évoquer en premier ?', ['Crise d’asthme', 'Œdème aigu du poumon cardiogénique', 'Pneumothorax', 'Attaque de panique'], 1, 'Orthopnée brutale, crépitants bilatéraux, terrain hypertendu.'),
      E('Quelle prise en charge immédiate ?', ['Allonger la patiente à plat', 'Position assise, oxygène, diurétique de l’anse IV, dérivés nitrés compte tenu de la PA élevée', 'Remplissage par sérum salé', 'Antibiotique IV seul'], 1, 'La ventilation non invasive est discutée en cas de détresse persistante.'),
      E('Le pouls est irrégulier et l’ECG montre une fibrillation atriale. Quel score pour décider de l’anticoagulation ?', ['Glasgow', 'CHA2DS2-VASc', 'Wells', 'Child-Pugh'], 1, 'Femme, 76 ans (2 points), HTA, insuffisance cardiaque : score ≥ 3, anticoagulation indiquée.'),
      E('Quel examen confirme l’insuffisance cardiaque et précise la fraction d’éjection ?', ['La radiographie thoracique', 'L’échocardiographie', 'Le scanner thoracique', 'L’EEG'], 1, 'Le BNP ou le NT-proBNP aide au diagnostic aux urgences.'),
    ],
    retenir: ['OAP : assise, O2, furosémide, nitrés si PA conservée.', 'Rechercher le facteur déclenchant (FA, ischémie, HTA).', 'Échocardiographie pour la FE.'],
    fiches: ['car-ic-fa'],
  },
  {
    id: 'cas-ep', titre: 'Dyspnée après une chirurgie', m: 'pneumo', niv: 'EDN',
    enonce: 'Mme D., 45 ans, a été opérée d’une prothèse de genou il y a 10 jours. Elle présente une dyspnée brutale et une douleur thoracique latérale. FC 112/min, PA 125/80 mmHg, SpO2 92 %. Le mollet droit est douloureux et augmenté de volume.',
    etapes: [
      E('Quel diagnostic suspecter ?', ['Pneumopathie', 'Embolie pulmonaire', 'Péricardite', 'Crise d’angoisse'], 1, 'Chirurgie orthopédique récente, signes de TVP, dyspnée brutale, tachycardie.'),
      E('La probabilité clinique (Wells) est forte. Quel examen ?', ['D-dimères', 'Angioscanner thoracique', 'Radiographie seule', 'Échographie abdominale'], 1, 'Les D-dimères sont inutiles quand la probabilité clinique est forte.'),
      E('Faut-il débuter un anticoagulant avant le résultat de l’imagerie ?', ['Non, jamais', 'Oui, en l’absence de contre-indication, dès que la suspicion est forte', 'Seulement si la PA baisse', 'Seulement après avis du chirurgien en 48 h'], 1, 'Évaluer le risque hémorragique post-opératoire, mais ne pas différer l’anticoagulation curative sans raison.'),
      E('La patiente est hémodynamiquement stable. Quelle durée de traitement après une EP provoquée par une chirurgie ?', ['10 jours', 'Au moins 3 mois', 'À vie', 'Aucun traitement après la sortie'], 1, 'EP provoquée par un facteur transitoire majeur : 3 mois en général.'),
    ],
    retenir: ['Probabilité clinique d’abord.', 'Forte : angioscanner direct.', 'EP provoquée : 3 mois d’anticoagulation.'],
    fiches: ['pne-ep-pneumo', 'hem-hemostase'],
  },
  {
    id: 'cas-sepsis', titre: 'Fièvre et confusion chez une patiente âgée', m: 'infectio', niv: 'EDN',
    enonce: 'Mme P., 82 ans, est amenée pour une confusion et une fièvre à 39,2 °C depuis 24 heures. Elle se plaint de brûlures urinaires et d’une douleur lombaire droite. FR 26/min, PA 85/50 mmHg, FC 118/min, marbrures des genoux.',
    etapes: [
      E('Combien de critères qSOFA présente-t-elle ?', ['1', '2', '3', '0'], 2, 'FR ≥ 22, PAS ≤ 100 mmHg et confusion : qSOFA = 3.'),
      E('Quelle est la conduite à tenir dans la première heure ?', ['Attendre l’ECBU avant tout traitement', 'Hémocultures, ECBU, lactates, antibiothérapie probabiliste IV, remplissage', 'Antibiotique oral et retour à domicile', 'Paracétamol seul et surveillance'], 1, 'Les prélèvements ne doivent pas retarder l’antibiothérapie.'),
      E('Malgré 30 mL/kg de cristalloïdes, la PAM reste à 58 mmHg et les lactates à 4 mmol/L. Quel est le diagnostic ?', ['Sepsis sans gravité', 'Choc septique', 'Choc cardiogénique', 'Déshydratation simple'], 1, 'Noradrénaline pour une PAM ≥ 65 mmHg, admission en réanimation.'),
      E('L’échographie montre une dilatation des cavités rénales droites sur un calcul. Que faire ?', ['Poursuivre les antibiotiques seuls', 'Drainer les urines en urgence (sonde urétérale ou néphrostomie)', 'Lithotritie extracorporelle immédiate', 'Attendre l’apyrexie'], 1, 'Pyélonéphrite obstructive : contrôle de la source indispensable.'),
    ],
    retenir: ['qSOFA ≥ 2 : alerte.', 'Antibiotiques dans l’heure.', 'Contrôle de la source (drainage).'],
    fiches: ['inf-sepsis-meningite', 'inf-urinaire'],
  },
  {
    id: 'cas-meningite', titre: 'Céphalées fébriles chez un étudiant', m: 'infectio', niv: 'EDN',
    enonce: 'Thomas, 19 ans, étudiant en résidence universitaire, consulte pour des céphalées intenses, des vomissements et une fièvre à 39,5 °C depuis 6 heures. Il a une raideur de nuque. En le déshabillant, vous découvrez sur les jambes des taches purpuriques dont l’une, nécrotique, mesure 5 mm.',
    etapes: [
      E('Quelle est la première action ?', ['Ponction lombaire immédiate', 'Injection immédiate de ceftriaxone', 'Scanner cérébral', 'Attendre la NFS'], 1, 'Purpura fulminans : antibiotique sans délai, avant tout examen si nécessaire.'),
      E('Quel germe est le plus probable ?', ['Pneumocoque', 'Méningocoque', 'Listeria', 'Staphylocoque doré'], 1, 'Purpura extensif chez l’adulte jeune en collectivité.'),
      E('Quelle mesure concerne l’entourage proche ?', ['Aucune', 'Antibioprophylaxie des sujets contacts et déclaration obligatoire à l’ARS', 'Vaccination de tout le campus en urgence sans évaluation', 'Isolement de tous les étudiants pendant 1 mois'], 1, 'Antibioprophylaxie selon la définition des contacts ; vaccination selon le sérogroupe.'),
    ],
    retenir: ['Purpura fébrile nécrotique : ceftriaxone immédiate.', 'Déclaration obligatoire.', 'Prophylaxie des contacts.'],
    fiches: ['inf-sepsis-meningite'],
  },
  {
    id: 'cas-avc', titre: 'Le déficit au petit-déjeuner', m: 'neuro', niv: 'EDN',
    enonce: 'M. G., 71 ans, en fibrillation atriale non traitée, présente à 8 h 10, pendant son petit-déjeuner, une faiblesse du bras droit, une déviation de la bouche et des difficultés à trouver ses mots. Sa femme appelle le 15 à 8 h 20.',
    etapes: [
      E('Quelle information est essentielle pour la décision thérapeutique ?', ['Ses antécédents familiaux', 'L’heure de début des symptômes (8 h 10)', 'Son groupe sanguin', 'Son poids exact'], 1, 'Elle détermine l’éligibilité à la thrombolyse et à la thrombectomie.'),
      E('Quel territoire artériel est probablement en cause ?', ['Cérébrale antérieure gauche', 'Sylvienne gauche', 'Sylvienne droite', 'Vertébrobasilaire'], 1, 'Déficit brachio-facial droit et aphasie : hémisphère gauche, artère sylvienne.'),
      E('Quel examen avant tout traitement de reperfusion ?', ['EEG', 'IRM ou scanner cérébral en urgence', 'Ponction lombaire', 'Échographie cardiaque'], 1, 'Éliminer une hémorragie et rechercher une occlusion artérielle.'),
      E('L’imagerie confirme un AVC ischémique. Quelle prévention secondaire à distance, compte tenu de la FA ?', ['Aspirine seule', 'Anticoagulation orale', 'Aucun traitement', 'Antibiotique'], 1, 'L’AVC cardioembolique sur FA relève d’une anticoagulation (délai d’introduction selon la taille de l’infarctus).'),
    ],
    retenir: ['Heure de début.', 'Imagerie avant thrombolyse.', 'FA + AVC : anticoagulation.'],
    fiches: ['neu-avc', 'car-ic-fa'],
  },
  {
    id: 'cas-acidocetose', titre: 'Douleurs abdominales et soif intense', m: 'endoc', niv: 'EDN',
    enonce: 'Léa, 17 ans, sans antécédent, est amenée pour des douleurs abdominales, des vomissements et une grande fatigue. Depuis 3 semaines, elle boit beaucoup et urine souvent, et a perdu 5 kg. Sa respiration est ample et rapide. Glycémie capillaire : 4,8 g/L ; cétonémie capillaire : 5 mmol/L.',
    etapes: [
      E('Quel est le diagnostic le plus probable ?', ['Gastro-entérite', 'Acidocétose diabétique révélant un diabète de type 1', 'Appendicite', 'Syndrome hyperosmolaire du sujet âgé'], 1, 'Syndrome cardinal (polyuro-polydipsie, amaigrissement) et cétose avec respiration de Kussmaul.'),
      E('Quel trouble acido-basique attendez-vous ?', ['Alcalose métabolique', 'Acidose métabolique à trou anionique augmenté', 'Acidose respiratoire', 'Alcalose respiratoire pure'], 1, 'Accumulation de corps cétoniques.'),
      E('Quel paramètre surveiller particulièrement pendant l’insulinothérapie ?', ['La TSH', 'La kaliémie', 'La lipase', 'La ferritine'], 1, 'L’insuline et la correction de l’acidose font chuter la kaliémie : supplémentation guidée par l’ionogramme et l’ECG.'),
      E('Quel traitement initial ?', ['Insuline sous-cutanée lente seule', 'Réhydratation IV, insuline IV, potassium selon la kaliémie', 'Bicarbonates en bolus systématique', 'Restriction hydrique'], 1, 'Prise en charge en unité adaptée, recherche d’un facteur déclenchant, éducation thérapeutique ensuite.'),
    ],
    retenir: ['Syndrome cardinal + cétose = acidocétose.', 'Insuline + réhydratation + potassium.', 'Surveillance horaire glycémie et kaliémie.'],
    fiches: ['end-diabete', 'nep-ions'],
  },
  {
    id: 'cas-hyperk', titre: 'Faiblesse chez un patient sous IEC', m: 'nephro', niv: 'EDN',
    enonce: 'M. B., 68 ans, insuffisant rénal chronique, traité par ramipril et spironolactone, prend de l’ibuprofène depuis 5 jours pour une lombalgie. Il consulte pour une faiblesse musculaire. Kaliémie : 7,1 mmol/L ; créatinine 280 µmol/L (190 habituellement).',
    etapes: [
      E('Quel examen faire immédiatement ?', ['Un ECG', 'Une échographie rénale', 'Une IRM lombaire', 'Un bilan hépatique'], 0, 'L’ECG détermine l’urgence (ondes T pointues, QRS larges, troubles conductifs).'),
      E('L’ECG montre des QRS élargis. Premier traitement ?', ['Résines orales seules', 'Sels de calcium IV', 'Arrêt de l’ibuprofène et surveillance', 'Furosémide seul'], 1, 'Protection myocardique, puis insuline-glucose, bêta-2 mimétiques, épuration si nécessaire.'),
      E('Quels facteurs ont favorisé l’hyperkaliémie et l’aggravation rénale ?', ['La lombalgie elle-même', 'L’association IEC + antialdostérone + AINS sur insuffisance rénale', 'Une alimentation trop salée', 'Le tabac'], 1, 'Arrêt de l’AINS, réévaluation des traitements du système rénine-angiotensine-aldostérone.'),
    ],
    retenir: ['Hyperkaliémie : ECG d’abord.', 'QRS larges : calcium IV.', 'IEC + AINS + antialdostérone : association à risque.'],
    fiches: ['nep-ions', 'nep-ira-irc'],
  },
  {
    id: 'cas-hdh', titre: 'Malaise et selles noires', m: 'gastro', niv: 'EDN',
    enonce: 'M. F., 63 ans, cirrhotique d’origine alcoolique, est amené pour une hématémèse abondante. PA 90/55 mmHg, FC 120/min, sueurs. Hémoglobine 7,2 g/dL.',
    etapes: [
      E('Quelle est la cause la plus probable ?', ['Ulcère gastrique', 'Rupture de varices œsophagiennes', 'Syndrome de Mallory-Weiss', 'Cancer de l’œsophage'], 1, 'L’hypertension portale de la cirrhose est la cause principale chez ce patient, même si l’ulcère reste possible.'),
      E('Quelle prise en charge initiale ?', ['Endoscopie immédiate sans réanimation', 'Deux voies veineuses, remplissage prudent, transfusion, vasoactif, antibioprophylaxie', 'IPP oral et retour à domicile', 'Sonde nasogastrique seule'], 1, 'Objectif transfusionnel autour de 7 g/dL, sans surtransfuser (aggrave l’hypertension portale).'),
      E('Quel geste endoscopique traite la rupture de varices ?', ['La ligature élastique', 'La biopsie', 'La dilatation', 'La gastrostomie'], 0, 'Endoscopie dans les 12 heures dans ce contexte.'),
    ],
    retenir: ['Cirrhose + hématémèse : varices.', 'Vasoactif + antibiotique + ligature.', 'Ne pas surtransfuser.'],
    fiches: ['gas-hemorragie-cirrhose'],
  },
  {
    id: 'cas-anemie', titre: 'Fatigue d’installation progressive', m: 'hemato', niv: 'EDN',
    enonce: 'M. S., 66 ans, se plaint d’une fatigue et d’un essoufflement à l’effort depuis 3 mois. Hb 8,9 g/dL, VGM 72 fL, plaquettes 420 G/L. Il n’a pas de saignement extériorisé connu.',
    etapes: [
      E('Comment qualifier cette anémie ?', ['Macrocytaire', 'Microcytaire', 'Normocytaire régénérative', 'Hémolytique'], 1, 'VGM < 80 fL.'),
      E('Quel examen en première intention ?', ['Myélogramme', 'Ferritine', 'Vitamine B12', 'Électrophorèse des protéines'], 1, 'Une ferritine basse affirme la carence martiale.'),
      E('La ferritine est à 6 µg/L. Que rechercher ?', ['Une carence d’apport', 'Un saignement digestif occulte (endoscopies haute et basse)', 'Une maladie génétique', 'Rien, le fer oral suffit'], 1, 'Chez l’homme et la femme ménopausée, rechercher un cancer colorectal ou une lésion digestive.'),
    ],
    retenir: ['Microcytose : ferritine.', 'Carence martiale de l’adulte : chercher un saignement digestif.', 'Évaluer la tolérance.'],
    fiches: ['hem-anemie'],
  },
  {
    id: 'cas-geu', titre: 'Douleur pelvienne aux urgences', m: 'gyneco', niv: 'EDN',
    enonce: 'Mme K., 29 ans, porteuse d’un stérilet, consulte pour une douleur de la fosse iliaque gauche et de petites métrorragies. Ses dernières règles remontent à 7 semaines. PA 110/70 mmHg, FC 92/min.',
    etapes: [
      E('Quel examen biologique demander en premier ?', ['Lipase', 'Dosage des hCG', 'CRP', 'TSH'], 1, 'Toute femme en âge de procréer avec une douleur abdominale ou pelvienne : hCG.'),
      E('Les hCG sont positifs (3 200 UI/L) et l’échographie endovaginale ne montre pas de sac intra-utérin. Quel diagnostic ?', ['Grossesse intra-utérine normale', 'Grossesse extra-utérine probable', 'Kyste ovarien simple', 'Infection urinaire'], 1, 'Au-delà du seuil de visibilité, l’absence de sac intra-utérin fait évoquer une GEU.'),
      E('Elle devient pâle, hypotendue, avec une défense abdominale. Que faire ?', ['Méthotrexate et surveillance', 'Chirurgie en urgence (GEU rompue, choc hémorragique)', 'Antalgiques et retour à domicile', 'Attendre un nouveau dosage dans 48 h'], 1, 'Réanimation et intervention immédiate.'),
    ],
    retenir: ['Femme jeune + douleur pelvienne : hCG.', 'Pas de sac intra-utérin : GEU.', 'Rupture : urgence chirurgicale.'],
    fiches: ['gyn-urgences'],
  },
  {
    id: 'cas-anaphylaxie', titre: 'Malaise au restaurant', m: 'urgences', niv: 'EDN',
    enonce: 'Julien, 24 ans, allergique connu à l’arachide, présente quelques minutes après un repas un urticaire géant, un gonflement des lèvres, une gêne respiratoire avec sifflements, puis un malaise. PA 75/40 mmHg, FC 135/min.',
    etapes: [
      E('Quel est le diagnostic ?', ['Urticaire simple', 'Anaphylaxie grave (choc anaphylactique)', 'Crise d’asthme isolée', 'Malaise vagal'], 1, 'Atteinte cutanéomuqueuse brutale avec atteinte respiratoire et circulatoire.'),
      E('Quel traitement immédiat ?', ['Antihistaminique oral', 'Adrénaline intramusculaire 0,5 mg', 'Corticoïde oral', 'Salbutamol seul'], 1, 'Dans la face antérolatérale de la cuisse, à répéter après 5 minutes si besoin, avec remplissage et oxygène.'),
      E('Avant sa sortie, que prévoir ?', ['Rien de particulier', 'Prescription de stylos d’adrénaline auto-injectables, éducation, consultation d’allergologie', 'Un antihistaminique à vie seul', 'Une désensibilisation immédiate'], 1, 'Surveillance de quelques heures (réaction biphasique possible).'),
    ],
    retenir: ['Anaphylaxie : adrénaline IM sans délai.', 'Remplissage si choc.', 'Stylo auto-injectable à la sortie.'],
    fiches: ['urg-choc'],
  },
  {
    id: 'cas-depression', titre: 'Tristesse persistante', m: 'psy', niv: 'EDN',
    enonce: 'Mme V., 42 ans, consulte pour une fatigue. Depuis 1 mois, elle ne prend plus plaisir à rien, dort mal, a perdu 4 kg, se sent coupable et n’arrive plus à se concentrer au travail. Elle n’a jamais eu de période d’euphorie ou d’hyperactivité.',
    etapes: [
      E('Quel diagnostic évoquer ?', ['Trouble anxieux généralisé', 'Épisode dépressif caractérisé', 'Épisode maniaque', 'Schizophrénie'], 1, 'Anhédonie et au moins 5 symptômes depuis plus de 2 semaines.'),
      E('Quelle question est indispensable lors de cette consultation ?', ['Ses préférences alimentaires', 'L’existence d’idées suicidaires', 'Son groupe sanguin', 'Son niveau d’études'], 1, 'Évaluer risque, urgence et dangerosité.'),
      E('Quel examen biologique simple aide à éliminer une cause organique ?', ['La TSH', 'La lipase', 'Les D-dimères', 'La troponine'], 0, 'Une hypothyroïdie peut mimer une dépression.'),
      E('Un antidépresseur ISRS est débuté. Que lui expliquer ?', ['Effet immédiat dès le premier jour', 'Délai d’action de 2 à 4 semaines, traitement à poursuivre plusieurs mois après l’amélioration', 'Arrêt dès que l’humeur s’améliore', 'Dépendance systématique'], 1, 'Surveiller la levée d’inhibition en début de traitement.'),
    ],
    retenir: ['EDC : ≥ 5 symptômes, ≥ 2 semaines.', 'Toujours évaluer le risque suicidaire.', 'ISRS : délai d’action, durée prolongée.'],
    fiches: ['psy-depression'],
  },
  {
    id: 'cas-ecos-annonce', titre: 'Station ECOS : annonce d’un diagnostic', m: 'ecos', niv: 'ECOS',
    enonce: 'Vous recevez M. H., 55 ans, pour lui donner les résultats de sa coloscopie : une tumeur du côlon dont la biopsie confirme un adénocarcinome. Le patient est seul et semble inquiet.',
    etapes: [
      E('Par quoi commencer ?', ['Annoncer le diagnostic dès la porte franchie', 'S’installer au calme, se présenter, demander ce qu’il sait déjà de ses examens', 'Remettre le compte rendu écrit', 'Parler du traitement immédiatement'], 1, 'Setting puis Perception (protocole SPIKES).'),
      E('Comment annoncer le diagnostic ?', ['Avec des termes techniques précis', 'Avec une phrase d’avertissement, des mots simples, puis un silence', 'En minimisant la gravité', 'Par téléphone le lendemain'], 1, 'Par exemple : « Les résultats ne sont malheureusement pas ceux que nous espérions… »'),
      E('Le patient pleure en silence. Que faire ?', ['Continuer l’explication du traitement', 'Respecter le silence, montrer de l’empathie, proposer de poursuivre quand il le souhaite', 'Mettre fin à la consultation', 'Lui dire de ne pas pleurer'], 1, 'Accueillir l’émotion avant toute information supplémentaire.'),
      E('Comment conclure ?', ['Par une poignée de main', 'Résumer, présenter les prochaines étapes, vérifier la compréhension, proposer un nouveau rendez-vous et un soutien', 'En lui disant de lire sur internet', 'En lui demandant d’annoncer lui-même à sa famille'], 1, 'Strategy and summary ; proposer une personne de confiance et l’infirmière d’annonce.'),
    ],
    retenir: ['SPIKES.', 'Phrase d’avertissement, mots simples, silences.', 'Plan et nouveau rendez-vous.'],
    fiches: ['ecos-com'],
  },
];
