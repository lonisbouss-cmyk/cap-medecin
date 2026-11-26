// CAP MÉDECIN — fiches de cours : spécialités complémentaires de l'EDN et LCA
// « rg » : rang de connaissance indicatif (A : socle exigible de tout médecin ; B : approfondissement).
import type { Fiche } from './types';

export const FICHES3: Fiche[] = [
  // ======================= DERMATOLOGIE =======================
  {
    id: 'der-psoriasis-eczema', m: 'derm', titre: 'Psoriasis, eczéma et toxidermies', items: [117, 187, 115, 116],
    intro: 'Trois motifs fréquents de consultation en dermatologie. Les toxidermies graves (DRESS, Stevens-Johnson, Lyell) sont des urgences à reconnaître.',
    parts: [
      { t: 'Psoriasis', rg: 'A', l: ['Plaques érythémato-squameuses bien limitées, symétriques, sur les zones bastion : coudes, genoux, région lombosacrée, cuir chevelu, ongles.', 'Facteurs déclenchants ou aggravants : stress, infections, alcool, tabac, certains médicaments (lithium, bêtabloquants).', 'Comorbidités à rechercher : rhumatisme psoriasique, syndrome métabolique, risque cardiovasculaire, dépression.', 'Traitement local (dermocorticoïdes, analogues de la vitamine D) ; formes étendues : photothérapie, méthotrexate, ciclosporine, biothérapies.'] },
      { t: 'Eczéma (dermatite atopique et de contact)', rg: 'A', l: ['Lésions prurigineuses, érythémato-vésiculeuses puis croûteuses et lichénifiées, mal limitées.', 'Dermatite atopique : début dans l’enfance, plis de flexion chez le grand enfant, terrain atopique (asthme, rhinite).', 'Eczéma de contact allergique : hypersensibilité retardée (type IV) ; tests épicutanés pour identifier l’allergène.', 'Traitement : émollients quotidiens, dermocorticoïdes en cures courtes, éviction de l’allergène.'] },
      { t: 'Toxidermies', rg: 'A', l: ['Exanthème maculopapuleux : la plus fréquente, 4 à 14 jours après l’introduction du médicament.', 'Signes de gravité : fièvre élevée, atteinte muqueuse, décollement cutané (signe de Nikolsky), œdème du visage, adénopathies, atteinte viscérale.', 'Syndrome de Stevens-Johnson et nécrolyse épidermique toxique (Lyell) : décollement < 10 % ou > 30 % de la surface corporelle ; urgence vitale, prise en charge en centre spécialisé.', 'DRESS : éruption, fièvre, hyperéosinophilie, atteinte hépatique ou rénale, survenue tardive (2 à 8 semaines).', 'Arrêt du médicament suspect, déclaration de pharmacovigilance, contre-indication écrite et remise au patient.'] },
    ],
    retenir: ['Psoriasis : zones bastion, rechercher le rhumatisme.', 'Eczéma de contact : type IV, tests épicutanés.', 'Toxidermie + muqueuses ou décollement : urgence.'],
  },
  {
    id: 'der-tumeurs-infections', m: 'derm', titre: 'Tumeurs cutanées et infections de la peau', items: [302, 155, 349, 350],
    intro: 'Le mélanome est le cancer cutané le plus grave ; les carcinomes sont les plus fréquents. L’érysipèle est la grosse jambe rouge infectieuse typique.',
    parts: [
      { t: 'Mélanome', rg: 'A', l: ['Règle ABCDE : Asymétrie, Bords irréguliers, Couleur inhomogène, Diamètre > 6 mm, Évolution.', 'Signe du « vilain petit canard » : une lésion différente des autres nævus du patient.', 'Facteurs de risque : expositions solaires intenses dans l’enfance, phototype clair, nombreux nævus, antécédents familiaux.', 'Diagnostic par exérèse complète et examen anatomopathologique ; l’indice de Breslow (épaisseur) est le principal facteur pronostique.'] },
      { t: 'Carcinomes', rg: 'B', l: ['Carcinome basocellulaire : le plus fréquent, perle translucide sur le visage, extension locale, pas de métastase.', 'Carcinome épidermoïde : sur zones photo-exposées ou lésions précancéreuses (kératoses actiniques), peut métastaser.', 'Traitement chirurgical avec marges adaptées ; photoprotection.'] },
      { t: 'Érysipèle (dermohypodermite bactérienne non nécrosante)', rg: 'A', l: ['Placard inflammatoire unilatéral de jambe, d’installation aiguë, avec fièvre ; porte d’entrée (intertrigo, plaie).', 'Germe principal : streptocoque bêta-hémolytique du groupe A.', 'Traitement : amoxicilline 7 jours en général ; traiter la porte d’entrée, vérifier la vaccination antitétanique.', 'Signes de fasciite nécrosante : douleur intense, nécrose, crépitation, hypoesthésie, sepsis → urgence chirurgicale.'] },
    ],
    retenir: ['ABCDE et vilain petit canard.', 'Breslow = pronostic du mélanome.', 'Érysipèle : streptocoque, amoxicilline ; nécrose = chirurgie.'],
  },

  // ======================= OPHTALMOLOGIE =======================
  {
    id: 'oph-oeil-rouge', m: 'ophtalmo', titre: 'Œil rouge et baisse d’acuité visuelle', items: [82, 83, 84],
    intro: 'Devant un œil rouge, la douleur et la baisse d’acuité visuelle orientent vers une urgence ophtalmologique.',
    parts: [
      { t: 'Œil rouge non douloureux sans baisse de vision', rg: 'A', l: ['Conjonctivite : sécrétions, sensation de grain de sable ; virale (adénovirus, très contagieuse), bactérienne (sécrétions purulentes) ou allergique (prurit).', 'Hémorragie sous-conjonctivale : rouge vif en nappe, bénigne ; vérifier la pression artérielle et un éventuel traitement anticoagulant.'] },
      { t: 'Œil rouge douloureux avec baisse de vision : urgences', rg: 'A', l: ['Glaucome aigu par fermeture de l’angle : douleur intense, nausées, mydriase aréactive, œil dur ; ne jamais dilater.', 'Kératite : douleur, photophobie, ulcère prenant la fluorescéine ; porteur de lentilles = risque d’abcès amibien ou bactérien.', 'Uvéite antérieure : cercle périkératique, myosis, précipités ; rechercher une spondyloarthrite, une sarcoïdose.', 'Ne jamais prescrire de collyre corticoïde sans examen à la lampe à fente (risque de kératite herpétique).'] },
      { t: 'Baisse brutale de vision sur œil blanc', rg: 'A', l: ['Occlusion de l’artère centrale de la rétine : baisse brutale indolore ; chez le sujet de plus de 50 ans, éliminer une maladie de Horton (VS, CRP).', 'Décollement de rétine : phosphènes, myodésopsies, voile ; urgence chirurgicale.', 'Neuropathie optique (névrite optique de la sclérose en plaques : douleur à la mobilisation du globe).'] },
    ],
    retenir: ['Œil rouge + douleur + baisse de vision = urgence.', 'Glaucome aigu : mydriase aréactive, jamais de dilatation.', 'Pas de corticoïde en collyre sans lampe à fente.'],
  },

  // ======================= ORL =======================
  {
    id: 'orl-infections', m: 'orl', titre: 'Angines, otites, sinusites et épistaxis', items: [148, 149, 150, 87],
    intro: 'Infections ORL fréquentes, en majorité virales : le bon usage des antibiotiques repose sur des critères simples.',
    parts: [
      { t: 'Angine', rg: 'A', l: ['Majoritairement virale. Le streptocoque A expose au rhumatisme articulaire aigu et aux complications locales.', 'Score de Mac Isaac chez l’adulte (≥ 15 ans) : test rapide d’orientation diagnostique (TROD) si score ≥ 2 ; chez l’enfant, TROD dès 3 ans.', 'TROD positif : amoxicilline 6 jours. TROD négatif : traitement symptomatique.', 'Complications : phlegmon périamygdalien (trismus, voussure du voile), abcès rétropharyngé.'] },
      { t: 'Otite moyenne aiguë et sinusite', rg: 'A', l: ['OMA purulente : tympan bombant, inflammatoire ; antibiotique (amoxicilline) d’emblée avant 2 ans, ou si symptômes intenses après 2 ans.', 'Sinusite maxillaire : douleur unilatérale, augmentée en penchant la tête, rhinorrhée purulente ; antibiotique si persistance ou aggravation.', 'Sinusite frontale, ethmoïdale ou sphénoïdale : risque de complications (orbitaires, méningées), avis spécialisé.'] },
      { t: 'Épistaxis', rg: 'A', l: ['Mesurer la pression artérielle, rechercher un traitement anticoagulant ou antiagrégant, évaluer le retentissement (pouls, hémoglobine si abondante).', 'Première étape : mouchage, compression bidigitale des ailes du nez 10 minutes, tête penchée en avant.', 'Puis méchage antérieur ; si échec, tamponnement postérieur, embolisation ou chirurgie.', 'Épistaxis unilatérale récidivante de l’adolescent : penser au fibrome nasopharyngien.'] },
    ],
    retenir: ['Mac Isaac ≥ 2 → TROD ; antibiotique seulement si positif.', 'OMA < 2 ans : amoxicilline.', 'Épistaxis : compression 10 min, PA, anticoagulants.'],
  },
  {
    id: 'orl-audition-vertige', m: 'orl', titre: 'Surdité, vertiges et paralysie faciale', items: [89, 103, 101],
    intro: 'La surdité brusque et la paralysie faciale périphérique sont des urgences relatives ; le vertige impose d’éliminer une cause centrale.',
    parts: [
      { t: 'Surdité', rg: 'A', l: ['Acoumétrie au diapason : Weber latéralisé du côté sain dans une surdité de perception, du côté malade dans une surdité de transmission ; Rinne.', 'Surdité brusque de perception : urgence (corticothérapie précoce discutée, audiogramme, IRM pour éliminer un neurinome).', 'Bouchon de cérumen, otite séromuqueuse : surdités de transmission fréquentes.'] },
      { t: 'Vertige', rg: 'A', l: ['Vertige paroxystique positionnel bénin : vertige bref (< 1 min) déclenché par les mouvements de tête ; manœuvre diagnostique de Dix-Hallpike, manœuvre libératoire.', 'Névrite vestibulaire : grand vertige rotatoire prolongé, nystagmus horizontal unidirectionnel, sans signe auditif ni neurologique.', 'Maladie de Ménière : crises associant vertige, acouphènes, surdité fluctuante et plénitude d’oreille.', 'Signes d’alerte d’un vertige central (AVC du tronc ou du cervelet) : déficit neurologique, ataxie, nystagmus vertical ou changeant de sens, céphalée brutale.'] },
      { t: 'Paralysie faciale périphérique', rg: 'A', l: ['Atteinte de tout l’hémivisage, y compris le front (différence avec la paralysie faciale centrale, qui épargne le territoire supérieur).', 'Paralysie de Bell (idiopathique) : diagnostic d’élimination ; corticoïdes précoces, protection oculaire (larmes artificielles, occlusion nocturne).', 'Rechercher : zona auriculaire (Ramsay Hunt), otite, maladie de Lyme, tumeur parotidienne, traumatisme.'] },
    ],
    retenir: ['Vertige + signe neurologique = AVC jusqu’à preuve du contraire.', 'Paralysie faciale périphérique : le front est atteint.', 'Protéger l’œil.'],
  },

  // ======================= RHUMATOLOGIE =======================
  {
    id: 'rhu-arthrites', m: 'rhumato', titre: 'Arthrite aiguë, goutte et polyarthrite rhumatoïde', items: [200, 198, 196, 197, 156],
    intro: 'Toute monoarthrite aiguë est septique jusqu’à preuve du contraire : la ponction articulaire est l’examen clé.',
    parts: [
      { t: 'Monoarthrite aiguë', rg: 'A', l: ['Ponction articulaire avant toute antibiothérapie : cytologie, recherche de cristaux, culture.', 'Liquide inflammatoire : > 2 000 éléments/mm³ ; arthrite septique souvent > 50 000 avec majorité de polynucléaires altérés.', 'Arthrite septique : urgence (hémocultures, antibiothérapie probabiliste, lavage articulaire selon le cas). Germe principal : staphylocoque doré.'] },
      { t: 'Arthropathies microcristallines', rg: 'A', l: ['Goutte : crise de la première métatarsophalangienne, nocturne, très inflammatoire ; cristaux d’urate de sodium (aiguilles biréfringentes).', 'Traitement de la crise : colchicine à faible dose, AINS ou corticoïdes ; glace, repos.', 'Traitement de fond hypo-uricémiant (allopurinol, en augmentant progressivement) avec une cible d’uricémie < 360 µmol/L (< 300 en cas de tophus), sous couverture de colchicine.', 'Chondrocalcinose : cristaux de pyrophosphate de calcium, sujet âgé, genou ou poignet.'] },
      { t: 'Polyarthrite rhumatoïde et spondyloarthrite', rg: 'B', l: ['Polyarthrite rhumatoïde : polyarthrite bilatérale et symétrique des petites articulations des mains (MCP, IPP), dérouillage matinal prolongé ; facteur rhumatoïde et anticorps anti-CCP.', 'Traitement de fond précoce par méthotrexate (avec acide folique) ; biothérapies en cas d’échec.', 'Spondyloarthrite : rachialgies inflammatoires (réveil en deuxième partie de nuit), sacro-iliite, enthésites, uvéite ; HLA-B27 ; AINS en première ligne.'] },
    ],
    retenir: ['Monoarthrite : ponction avant antibiotiques.', 'Goutte : cible d’uricémie < 360 µmol/L.', 'PR : anti-CCP, méthotrexate précoce.'],
  },
  {
    id: 'rhu-rachis-os', m: 'rhumato', titre: 'Lombalgies, sciatique et ostéoporose', items: [94, 95, 93, 128, 129],
    intro: 'La lombalgie commune est très fréquente et bénigne : l’enjeu est de repérer les drapeaux rouges.',
    parts: [
      { t: 'Lombalgie et lomboradiculalgie', rg: 'A', l: ['Lombalgie commune : douleur mécanique, sans signe général ; rester actif, antalgiques, pas d’imagerie initiale.', 'Drapeaux rouges : âge < 20 ou > 50 ans, fièvre, antécédent de cancer, amaigrissement, douleur inflammatoire, traumatisme, déficit neurologique, immunodépression.', 'Sciatique L5 : face latérale de la cuisse et de la jambe, dos du pied, gros orteil ; S1 : face postérieure, plante et bord latéral du pied, réflexe achilléen aboli.', 'Urgences chirurgicales : syndrome de la queue de cheval (troubles sphinctériens, anesthésie en selle) et sciatique paralysante.'] },
      { t: 'Ostéoporose', rg: 'A', l: ['Définition densitométrique : T-score ≤ −2,5 DS. Complication : fractures (poignet, vertèbres, col du fémur).', 'Facteurs de risque : âge, ménopause précoce, corticothérapie prolongée, faible poids, tabac, alcool, antécédent de fracture.', 'Prévention : calcium et vitamine D, activité physique, prévention des chutes.', 'Traitement : bisphosphonates en première intention ; éliminer une ostéoporose secondaire et un myélome devant une fracture vertébrale.'] },
      { t: 'Arthrose', rg: 'B', l: ['Douleur mécanique, dérouillage matinal bref (< 15 min) ; genou, hanche, mains.', 'Radiographie : pincement localisé de l’interligne, ostéophytes, condensation sous-chondrale.', 'Traitement : activité physique, perte de poids, antalgiques, infiltrations ; prothèse en cas de handicap important.'] },
    ],
    retenir: ['Queue de cheval : urgence chirurgicale.', 'L5 : gros orteil ; S1 : achilléen.', 'Ostéoporose : T-score ≤ −2,5.'],
  },

  // ======================= ORTHOPÉDIE ET TRAUMATOLOGIE =======================
  {
    id: 'ort-fractures', m: 'ortho', titre: 'Fractures, entorses et complications des plâtres', items: [363, 361, 364, 365, 334],
    intro: 'Devant tout traumatisme de membre : examen vasculo-nerveux, état cutané et radiographies de face et de profil, articulations sus- et sous-jacentes comprises.',
    parts: [
      { t: 'Fractures fréquentes', rg: 'A', l: ['Extrémité inférieure du radius (Pouteau-Colles) : chute sur la paume, déplacement postérieur, « dos de fourchette ».', 'Col du fémur du sujet âgé : membre raccourci en rotation externe ; chirurgie précoce (vis, prothèse) pour lever rapidement le patient.', 'Fracture ouverte : urgence (antibioprophylaxie, vaccination antitétanique, chirurgie).', 'Complications : syndrome des loges (douleur intense résistant aux antalgiques, augmentée à l’étirement passif), lésions vasculo-nerveuses, pseudarthrose, cal vicieux.'] },
      { t: 'Entorses', rg: 'A', l: ['Cheville : règles d’Ottawa pour décider de la radiographie (douleur malléolaire avec sensibilité osseuse, incapacité à faire 4 pas).', 'Genou : lésion du ligament croisé antérieur (craquement, tiroir antérieur, test de Lachman).', 'Traitement fonctionnel le plus souvent (glace, compression, surélévation, rééducation proprioceptive).'] },
      { t: 'Plâtres et immobilisations', rg: 'A', l: ['Surveillance : douleur, coloration et chaleur des extrémités, sensibilité, mobilité des doigts ou orteils.', 'Plâtre trop serré : syndrome des loges, compression nerveuse ; fendre le plâtre en urgence.', 'Prévention de la thrombose veineuse par anticoagulant selon le risque en cas d’immobilisation du membre inférieur.', 'Fractures de l’enfant : cartilage de croissance (classification de Salter-Harris), fractures en « bois vert » ; penser à la maltraitance si le mécanisme est incohérent.'] },
    ],
    retenir: ['Toujours l’examen vasculo-nerveux.', 'Syndrome des loges : douleur à l’étirement passif, urgence.', 'Ottawa pour la cheville.'],
  },

  // ======================= UROLOGIE =======================
  {
    id: 'uro-colique-retention', m: 'uro', titre: 'Colique néphrétique, rétention d’urine et prostate', items: [265, 347, 127, 310, 260],
    intro: 'La colique néphrétique compliquée et la rétention aiguë d’urine sont des urgences urologiques fréquentes.',
    parts: [
      { t: 'Colique néphrétique', rg: 'A', l: ['Douleur lombaire brutale, unilatérale, irradiant vers les organes génitaux, agitation, sans position antalgique.', 'Traitement : AINS en l’absence de contre-indication, antalgiques ; imagerie (scanner non injecté ou échographie + ASP).', 'Formes compliquées à drainer en urgence : fièvre (pyélonéphrite obstructive), anurie ou rein unique, douleur hyperalgique résistante.', 'Femme enceinte : échographie, pas d’AINS.'] },
      { t: 'Rétention aiguë d’urine', rg: 'A', l: ['Impossibilité d’uriner, globe vésical douloureux ; causes : hypertrophie de prostate, médicaments anticholinergiques, constipation, prostatite.', 'Drainage vésical en urgence : sonde urétrale ou cathéter sus-pubien (contre-indiqué en cas de trouble de l’hémostase ou d’absence de globe).', 'Sonde urétrale contre-indiquée en cas de prostatite aiguë ou de traumatisme urétral.'] },
      { t: 'Hématurie et prostate', rg: 'B', l: ['Hématurie macroscopique de l’adulte, surtout fumeur : rechercher une tumeur de vessie (cystoscopie, uroscanner).', 'Hypertrophie bénigne de la prostate : troubles mictionnels ; alphabloquants, inhibiteurs de la 5-alpha-réductase.', 'Cancer de la prostate : dosage du PSA après information du patient, toucher rectal, IRM puis biopsies.'] },
    ],
    retenir: ['Colique néphrétique fébrile = drainage urgent.', 'RAU : drainer ; pas de sonde urétrale si prostatite.', 'Hématurie du fumeur : penser vessie.'],
  },

  // ======================= CANCÉROLOGIE =======================
  {
    id: 'onc-principes', m: 'onco', titre: 'Principes de cancérologie et dépistages', items: [290, 292, 294, 295, 296],
    intro: 'Le cancer est la première cause de mortalité en France. Trois dépistages organisés existent : sein, côlon-rectum, col de l’utérus.',
    parts: [
      { t: 'Prévention et dépistage organisés', rg: 'A', l: ['Prévention primaire : tabac (1re cause évitable), alcool, alimentation, activité physique, exposition solaire, vaccination HPV et hépatite B.', 'Sein : mammographie tous les 2 ans de 50 à 74 ans.', 'Côlon-rectum : test immunologique de recherche de sang dans les selles tous les 2 ans de 50 à 74 ans, coloscopie si positif.', 'Col de l’utérus : examen cytologique de 25 à 29 ans, puis test HPV tous les 5 ans de 30 à 65 ans.'] },
      { t: 'Diagnostic et annonce', rg: 'A', l: ['La preuve histologique est indispensable avant tout traitement (sauf exceptions).', 'Classification TNM : taille de la tumeur, ganglions, métastases ; état général (score OMS).', 'Réunion de concertation pluridisciplinaire (RCP) puis programme personnalisé de soins ; dispositif d’annonce en plusieurs temps.'] },
      { t: 'Complications des traitements', rg: 'A', l: ['Neutropénie fébrile : fièvre et neutrophiles < 500/mm³ ; urgence, antibiothérapie probabiliste à large spectre sans attendre.', 'Autres urgences : compression médullaire, hypercalcémie, syndrome cave supérieur, syndrome de lyse tumorale.', 'Effets fréquents : nausées, mucite, alopécie, fatigue ; soins de support (douleur, nutrition, psychologique).'] },
    ],
    retenir: ['Dépistages : sein et côlon 50 – 74 ans tous les 2 ans ; col 25 – 65 ans.', 'Pas de traitement sans histologie.', 'Neutropénie fébrile : antibiotiques immédiatement.'],
  },
  {
    id: 'onc-cancers', m: 'onco', titre: 'Les cancers les plus fréquents', items: [309, 312, 301, 310, 315, 319],
    intro: 'Quelques repères sur les cancers les plus fréquents et les plus meurtriers.',
    parts: [
      { t: 'Poumon', rg: 'A', l: ['Première cause de mortalité par cancer ; tabac principal facteur de risque, expositions professionnelles (amiante).', 'Signes d’appel : toux persistante, hémoptysie, dyspnée, altération de l’état général chez un fumeur.', 'Bilan : scanner thoraco-abdominal, preuve histologique (fibroscopie bronchique, biopsie), recherche d’altérations moléculaires.'] },
      { t: 'Sein et côlon-rectum', rg: 'A', l: ['Sein : cancer le plus fréquent de la femme ; nodule dur, irrégulier, rétraction cutanée, écoulement sanglant, adénopathie axillaire. Triplet diagnostique : examen clinique, imagerie, biopsie.', 'Côlon-rectum : rectorragies, troubles du transit récents, anémie ferriprive inexpliquée (rechercher une lésion digestive) ; coloscopie avec biopsies.'] },
      { t: 'Hématologie maligne', rg: 'B', l: ['Leucémie aiguë : insuffisance médullaire (anémie, infections, hémorragies) ± blastes circulants ; myélogramme.', 'Lymphomes : adénopathies indolores persistantes, signes généraux (fièvre, sueurs nocturnes, amaigrissement) ; biopsie ganglionnaire.', 'Myélome : douleurs osseuses, insuffisance rénale, hypercalcémie, anémie ; pic monoclonal à l’électrophorèse des protéines.'] },
    ],
    retenir: ['Anémie ferriprive de l’adulte : chercher un saignement digestif.', 'Adénopathie persistante : biopsie.', 'Myélome : os, rein, calcium, anémie.'],
  },

  // ======================= GÉRIATRIE =======================
  {
    id: 'ger-sujet-age', m: 'geria', titre: 'Le sujet âgé : chutes, confusion, iatrogénie', items: [130, 109, 132, 133, 343, 70],
    intro: 'Chez le sujet âgé, les présentations sont souvent atypiques et les causes intriquées. L’évaluation gériatrique est globale.',
    parts: [
      { t: 'Chutes', rg: 'A', l: ['Signes de gravité : traumatisme, station au sol prolongée (rhabdomyolyse, hypothermie, escarres), incapacité à se relever, chutes répétées.', 'Rechercher les causes : hypotension orthostatique, médicaments (psychotropes, antihypertenseurs), troubles de la marche, de la vision, cardiopathie, environnement.', 'Tests : Timed Up and Go, appui unipodal.', 'Prévention : activité physique adaptée, révision des traitements, aménagement du domicile, téléassistance.'] },
      { t: 'Confusion et démence', rg: 'A', l: ['Syndrome confusionnel : début brutal, fluctuant, trouble de la vigilance et de l’attention ; urgence diagnostique.', 'Causes fréquentes : infection, rétention urinaire, fécalome, déshydratation, hyponatrémie, douleur, médicament, hypoglycémie.', 'Démence (trouble neurocognitif majeur) : installation progressive avec retentissement sur l’autonomie ; MMSE, bilan biologique et imagerie cérébrale.'] },
      { t: 'Iatrogénie et autonomie', rg: 'A', l: ['La polymédication expose aux effets indésirables : réévaluer chaque traitement, se méfier des anticholinergiques et des benzodiazépines.', 'Dénutrition : perte de poids, IMC < 22 après 70 ans, albumine basse ; enrichissement alimentaire.', 'Évaluer l’autonomie (échelles ADL et IADL) et les aides ; mesures de protection juridique si nécessaire.'] },
    ],
    retenir: ['Chute = symptôme : chercher la cause.', 'Confusion aiguë : chercher la cause organique.', 'Réviser les ordonnances.'],
  },

  // ======================= SOINS PALLIATIFS ET DOULEUR =======================
  {
    id: 'pal-douleur-fin-vie', m: 'palliatif', titre: 'Douleur, soins palliatifs et fin de vie', items: [134, 135, 139, 140, 141, 14],
    intro: 'Les soins palliatifs visent la qualité de vie dans les maladies graves évolutives. La loi encadre les décisions de fin de vie.',
    parts: [
      { t: 'Évaluer et traiter la douleur', rg: 'A', l: ['Évaluation : échelle numérique ou visuelle analogique ; échelles comportementales (Algoplus, Doloplus) si la communication est impossible.', 'Paliers de l’OMS : non opioïdes (paracétamol, AINS), opioïdes faibles, opioïdes forts.', 'Douleur neuropathique (brûlure, décharges, allodynie ; questionnaire DN4) : antidépresseurs tricycliques ou IRSNA, gabapentinoïdes.', 'Morphine : prévenir la constipation (laxatif systématique) ; surveiller la vigilance et la fréquence respiratoire ; antidote : naloxone.'] },
      { t: 'Soins palliatifs', rg: 'A', l: ['Prise en charge globale : symptômes physiques, souffrance psychique, accompagnement des proches, dimension sociale et spirituelle.', 'Symptômes fréquents : dyspnée, nausées, encombrement, anxiété, confusion.', 'Organisation : équipes mobiles, unités et lits identifiés de soins palliatifs, hospitalisation à domicile.'] },
      { t: 'Cadre légal (loi Claeys-Leonetti)', rg: 'A', l: ['Refus de l’obstination déraisonnable ; décision de limitation ou d’arrêt des traitements prise de façon collégiale si le patient ne peut s’exprimer.', 'Directives anticipées (opposables, sauf urgence ou si manifestement inappropriées) et personne de confiance.', 'Sédation profonde et continue maintenue jusqu’au décès, à la demande du patient, dans des situations définies par la loi.'] },
    ],
    retenir: ['Morphine → laxatif systématique.', 'DN4 pour la douleur neuropathique.', 'Directives anticipées, personne de confiance, collégialité.'],
  },

  // ======================= ADDICTOLOGIE =======================
  {
    id: 'add-substances', m: 'addicto', titre: 'Tabac, alcool et autres addictions', items: [75, 76, 77, 78, 79],
    intro: 'Le tabac et l’alcool sont les deux premières causes de mortalité évitable en France. Repérer et accompagner fait partie de toute consultation.',
    parts: [
      { t: 'Tabac', rg: 'A', l: ['Repérage systématique ; test de Fagerström pour évaluer la dépendance.', 'Substituts nicotiniques (patch et formes orales, à dose suffisante), varénicline ; accompagnement motivationnel.', 'L’arrêt est bénéfique à tout âge, y compris pendant la grossesse.'] },
      { t: 'Alcool', rg: 'A', l: ['Repères : pas plus de 10 verres standard par semaine, pas plus de 2 par jour, et des jours sans consommation. Un verre standard = 10 g d’alcool pur.', 'Repérage (questionnaire AUDIT-C), intervention brève.', 'Sevrage : risque de syndrome de sevrage grave (delirium tremens, crises convulsives) ; benzodiazépines et vitamine B1 (thiamine) systématique, hydratation.', 'Complications : hépatopathie, pancréatite, encéphalopathie de Gayet-Wernicke, cancers, troubles cognitifs.'] },
      { t: 'Autres substances', rg: 'B', l: ['Opioïdes : traitement de substitution (méthadone, buprénorphine) ; naloxone à remettre au patient et à l’entourage contre l’overdose.', 'Cannabis : troubles anxieux, psychotiques, dépendance ; cocaïne : complications cardiovasculaires (SCA du sujet jeune).', 'Réduction des risques : matériel stérile, dépistages (VIH, hépatites), vaccination.'] },
    ],
    retenir: ['Sevrage alcool : benzodiazépine + vitamine B1.', 'Naloxone pour les usagers d’opioïdes.', 'Repères : 2 verres/j maximum, pas tous les jours.'],
  },

  // ======================= SANTÉ PUBLIQUE =======================
  {
    id: 'sp-sante-publique', m: 'santepub', titre: 'Santé publique, prévention et vigilances', items: [16, 19, 21, 145, 146, 181],
    intro: 'Connaître les indicateurs de santé, les niveaux de prévention et le fonctionnement des vigilances sanitaires.',
    parts: [
      { t: 'Indicateurs et prévention', rg: 'A', l: ['Incidence : nouveaux cas sur une période ; prévalence : cas présents à un instant donné.', 'Prévention primaire (éviter la maladie), secondaire (dépister tôt), tertiaire (limiter les complications et les récidives).', 'Critères d’un bon dépistage : maladie fréquente et grave, phase préclinique détectable, test acceptable et performant, traitement efficace.'] },
      { t: 'Maladies à déclaration obligatoire et vaccinations', rg: 'A', l: ['Certaines maladies doivent être déclarées à l’ARS : tuberculose, méningite à méningocoque, rougeole, légionellose, toxi-infection alimentaire collective, VIH…', 'Le calendrier vaccinal est mis à jour chaque année ; 11 vaccinations sont obligatoires pour les enfants nés depuis 2018.'] },
      { t: 'Vigilances et système de santé', rg: 'B', l: ['Pharmacovigilance : déclaration de tout effet indésirable au centre régional de pharmacovigilance (obligatoire pour les professionnels).', 'Autres vigilances : hémovigilance, matériovigilance, infectiovigilance, addictovigilance.', 'Assurance maladie : remboursement, affections de longue durée (ALD) ; parcours de soins avec médecin traitant.'] },
    ],
    retenir: ['Incidence ≠ prévalence.', 'Primaire, secondaire, tertiaire.', 'Déclarer tout effet indésirable.'],
  },

  // ======================= MÉDECINE LÉGALE =======================
  {
    id: 'leg-certificats', m: 'medleg', titre: 'Certificats, décès, violences et secret', items: [13, 11, 12, 57, 7, 15],
    intro: 'Le médecin rédige des certificats qui engagent sa responsabilité. Il doit savoir protéger les victimes de violences.',
    parts: [
      { t: 'Certificats', rg: 'A', l: ['Rédigé après examen personnel du patient, daté et signé ; décrire objectivement les constatations, ne rapporter les dires qu’au conditionnel ou entre guillemets.', 'Certificat de coups et blessures : description précise des lésions et fixation d’une incapacité totale de travail (ITT) au sens pénal.', 'Remis en main propre à la personne examinée (sauf exceptions légales, réquisition).'] },
      { t: 'Décès', rg: 'A', l: ['Certificat de décès : constat de la mort, volet administratif et volet médical confidentiel.', 'Obstacle médico-légal en cas de mort violente, suspecte ou de cause inconnue : le corps est mis à disposition de la justice.', 'Signes de mort : absence de conscience, de ventilation et de circulation ; rigidité et lividités cadavériques.'] },
      { t: 'Violences et secret médical', rg: 'A', l: ['Le secret médical est général et absolu, mais la loi prévoit des dérogations : maladies à déclaration obligatoire, certificats de décès, sévices sur mineur ou personne vulnérable.', 'Maltraitance d’un enfant : protéger l’enfant (hospitalisation possible), signalement au procureur de la République ou information préoccupante à la cellule départementale (CRIP).', 'Violences conjugales : repérage systématique, certificat, information sur les recours (3919) ; levée possible du secret en cas de danger immédiat et d’emprise.', 'Soins psychiatriques sans consentement : à la demande d’un tiers, en cas de péril imminent, ou sur décision du représentant de l’État.'] },
    ],
    retenir: ['Certificat : constatations objectives, conditionnel pour les dires.', 'Mort suspecte = obstacle médico-légal.', 'Enfant en danger : protéger et signaler.'],
  },

  // ======================= LCA =======================
  {
    id: 'lca-methodo', m: 'lca', titre: 'Lecture critique d’article : méthode', items: [323, 20, 3],
    intro: 'L’épreuve de lecture critique d’article (LCA) évalue la capacité à juger la validité et l’intérêt d’une étude publiée.',
    parts: [
      { t: 'Lire un article (IMRaD)', rg: 'A', l: ['Introduction : justification et objectif principal, formulé avec la population, l’intervention, le comparateur et le critère de jugement (PICO).', 'Méthodes : schéma d’étude, critères d’inclusion et d’exclusion, critère de jugement principal, calcul du nombre de sujets nécessaire, analyse statistique.', 'Résultats : diagramme de flux, comparabilité des groupes (tableau 1), résultat principal avec intervalle de confiance.', 'Discussion : limites, cohérence avec la littérature, validité externe (généralisation).'] },
      { t: 'Niveaux de preuve', rg: 'A', l: ['Essai contrôlé randomisé (ECR) de bonne qualité et méta-analyse d’ECR : niveau 1 (grade A).', 'Essais de moindre qualité, études de cohorte : niveau 2 (grade B).', 'Études cas-témoins : niveau 3 ; séries de cas, études descriptives : niveau 4 (grade C).', 'Grilles de qualité : CONSORT (essais), STROBE (observationnelles), PRISMA (revues systématiques), STARD (diagnostic).'] },
      { t: 'Biais', rg: 'A', l: ['Biais de sélection : la population étudiée n’est pas représentative, ou les groupes ne sont pas comparables (contrôlé par la randomisation).', 'Biais de classement (mesure) : erreur sur l’exposition ou le critère de jugement (limité par l’aveugle).', 'Biais de confusion : un facteur lié à l’exposition et au critère fausse l’association (ajustement, stratification, randomisation).', 'Biais d’attrition : perdus de vue différents entre groupes (limité par l’analyse en intention de traiter).'] },
    ],
    retenir: ['PICO pour l’objectif.', 'Randomisation contre la confusion, aveugle contre le biais de mesure.', 'Intention de traiter = analyse principale d’un essai de supériorité.'],
  },
  {
    id: 'lca-essais-stats', m: 'lca', titre: 'Essais thérapeutiques et résultats statistiques', items: [323, 20],
    intro: 'Savoir interpréter un essai thérapeutique : risque relatif, NNT, intervalle de confiance, puissance.',
    parts: [
      { t: 'Essai contrôlé randomisé', rg: 'A', l: ['Randomisation : répartition aléatoire, avec assignation secrète ; assure la comparabilité des groupes.', 'Double aveugle : ni le patient ni l’évaluateur ne connaissent le traitement reçu.', 'Analyse en intention de traiter (ITT) : chaque patient analysé dans son groupe de randomisation, quoi qu’il arrive ; analyse per protocole en complément (et pertinente pour la non-infériorité).', 'Essai de non-infériorité : montre qu’un traitement n’est pas moins bon qu’un autre au-delà d’une marge prédéfinie.'] },
      { t: 'Mesures d’effet', rg: 'A', l: ['Risque relatif (RR) = risque dans le groupe traité / risque dans le groupe contrôle ; RR < 1 : le traitement réduit le risque.', 'Réduction absolue du risque (RAR) = différence des risques ; nombre de sujets à traiter (NNT) = 1 / RAR.', 'Odds ratio (OR) : utilisé dans les études cas-témoins ; proche du RR si l’événement est rare.', 'Hazard ratio : analyses de survie (modèle de Cox).'] },
      { t: 'Interprétation statistique', rg: 'A', l: ['p < 0,05 : la différence observée a moins de 5 % de chances d’être due au hasard sous l’hypothèse nulle ; ne mesure pas l’importance clinique.', 'Intervalle de confiance à 95 % d’un RR contenant 1 : résultat non significatif.', 'Risque alpha : conclure à tort à une différence ; risque bêta : manquer une différence réelle ; puissance = 1 − bêta.', 'Multiplier les critères ou les sous-groupes augmente le risque de conclusion faussement positive : seul le critère principal permet de conclure.'] },
    ],
    retenir: ['NNT = 1 / RAR.', 'IC du RR contenant 1 = non significatif.', 'On conclut sur le critère de jugement principal.'],
  },
];
