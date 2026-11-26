// CAP MÉDECIN — cas cliniques progressifs des spécialités complémentaires (situations fictives)
import type { CasPratique, Etape } from './types';

const E = (q: string, c: string[], a: number, e: string): Etape => ({ q, c, a, e });

export const CAS2: CasPratique[] = [
  {
    id: 'cas-toxidermie', titre: 'Éruption après un antiépileptique', m: 'derm', niv: 'EDN',
    enonce: 'Mme K., 34 ans, a débuté de la lamotrigine il y a 10 jours. Elle consulte pour une éruption apparue hier, une fièvre à 39 °C, des érosions buccales douloureuses et des yeux rouges. Certaines lésions sont bulleuses sur le tronc.',
    etapes: [
      E('Quel diagnostic évoquer en priorité ?', ['Varicelle', 'Syndrome de Stevens-Johnson ou nécrolyse épidermique toxique', 'Urticaire', 'Psoriasis pustuleux'], 1, 'Atteinte muqueuse, bulles et fièvre après l’introduction d’un médicament à risque.'),
      E('Quelle est la première mesure ?', ['Poursuivre le traitement et prescrire un antihistaminique', 'Arrêter immédiatement la lamotrigine', 'Diminuer la dose de moitié', 'Ajouter un corticoïde et poursuivre'], 1, 'L’arrêt précoce du médicament suspect améliore le pronostic.'),
      E('Quelle orientation ?', ['Retour à domicile avec une crème', 'Hospitalisation en urgence, idéalement en centre de référence ou réanimation', 'Consultation de dermatologie dans un mois', 'Hospitalisation en psychiatrie'], 1, 'Prise en charge comparable à un grand brûlé : réchauffement, nutrition, soins cutanés et oculaires.'),
      E('Après la guérison, que faut-il faire ?', ['Rien', 'Déclarer en pharmacovigilance et contre-indiquer définitivement le médicament (carte remise à la patiente)', 'Reprendre la lamotrigine à faible dose', 'Faire un test de réintroduction'], 1, 'La réintroduction est formellement contre-indiquée.'),
    ],
    retenir: ['Muqueuses + bulles + fièvre = urgence.', 'Arrêt immédiat du médicament.', 'Pharmacovigilance, contre-indication écrite.'],
    fiches: ['der-psoriasis-eczema'],
  },
  {
    id: 'cas-oeil-rouge', titre: 'Œil rouge et douloureux le soir', m: 'ophtalmo', niv: 'EDN',
    enonce: 'Mme T., 68 ans, hypermétrope, consulte aux urgences à 22 h pour une douleur intense de l’œil droit, avec vision floue, halos colorés autour des lumières, céphalée et vomissements. L’œil est rouge, la pupille est en semi-mydriase et ne réagit pas à la lumière.',
    etapes: [
      E('Quel est le diagnostic le plus probable ?', ['Conjonctivite virale', 'Crise de glaucome aigu par fermeture de l’angle', 'Migraine ophtalmique', 'Hémorragie sous-conjonctivale'], 1, 'Terrain hypermétrope, douleur, baisse de vision, mydriase aréactive, signes digestifs.'),
      E('Quel geste est formellement contre-indiqué ?', ['Mesurer la pression intraoculaire', 'Instiller un collyre mydriatique pour examiner le fond d’œil', 'Appeler l’ophtalmologue', 'Donner un antiémétique'], 1, 'La dilatation aggrave la fermeture de l’angle.'),
      E('Quel traitement d’urgence ?', ['Antibiotique local', 'Hypotonisants (acétazolamide, collyres) puis iridotomie au laser', 'Corticoïde en collyre seul', 'Larmes artificielles'], 1, 'Iridotomie au laser des deux yeux, l’œil adelphe étant à risque.'),
    ],
    retenir: ['Mydriase aréactive + œil rouge douloureux = glaucome aigu.', 'Jamais de mydriatique.', 'Traiter les deux yeux.'],
    fiches: ['oph-oeil-rouge'],
  },
  {
    id: 'cas-angine', titre: 'Mal de gorge chez un étudiant', m: 'orl', niv: 'EDN',
    enonce: 'M. D., 22 ans, consulte pour une odynophagie depuis 2 jours, une fièvre à 38,6 °C, sans toux. Les amygdales sont inflammatoires avec un enduit blanchâtre ; il a des adénopathies cervicales sensibles.',
    etapes: [
      E('Quel est son score de Mac Isaac ?', ['1', '2', '4', '5'], 2, 'Fièvre > 38 °C (1), absence de toux (1), adénopathies sensibles (1), atteinte amygdalienne (1), âge 15 – 44 ans (0) : 4.'),
      E('Quelle conduite ?', ['Antibiotique d’emblée sans test', 'Réaliser un TROD', 'Traitement symptomatique sans test', 'Prélèvement de gorge en laboratoire systématique'], 1, 'TROD si score ≥ 2 chez l’adulte.'),
      E('Le TROD est positif. Traitement ?', ['Amoxicilline pendant 6 jours', 'Ciprofloxacine', 'Corticoïdes', 'Aucun traitement'], 0, 'Pour prévenir les complications et raccourcir les symptômes.'),
      E('Trois jours plus tard : trismus, voussure unilatérale du voile, luette déviée. Diagnostic ?', ['Mononucléose', 'Phlegmon périamygdalien', 'Angine de Vincent', 'Épiglottite'], 1, 'Avis ORL urgent pour drainage.'),
    ],
    retenir: ['Mac Isaac ≥ 2 → TROD chez l’adulte.', 'Amoxicilline 6 jours si positif.', 'Trismus + voussure = phlegmon.'],
    fiches: ['orl-infections'],
  },
  {
    id: 'cas-genou', titre: 'Genou chaud et gonflé', m: 'rhumato', niv: 'EDN',
    enonce: 'M. B., 58 ans, diabétique, présente depuis 24 heures un genou droit très douloureux, chaud, avec un épanchement et une fièvre à 38,9 °C. Il a eu une infiltration de ce genou il y a 10 jours.',
    etapes: [
      E('Quel diagnostic doit être éliminé en priorité ?', ['Arthrose', 'Arthrite septique', 'Goutte', 'Entorse'], 1, 'Monoarthrite fébrile après un geste intra-articulaire.'),
      E('Quel examen en premier ?', ['Ponction articulaire avant tout antibiotique', 'IRM du genou', 'Uricémie', 'Antibiotique d’abord puis ponction'], 0, 'Analyse cytologique, recherche de cristaux, examen bactériologique ; hémocultures associées.'),
      E('Le liquide contient 80 000 éléments/mm³, 95 % de polynucléaires altérés, sans cristaux. Germe le plus probable ?', ['Staphylocoque doré', 'Gonocoque', 'Escherichia coli', 'Pneumocoque'], 0, 'Germe principal des arthrites septiques, surtout après un geste.'),
      E('Prise en charge ?', ['AINS et repos', 'Hospitalisation, antibiothérapie probabiliste IV, avis orthopédique pour lavage', 'Corticoïdes intra-articulaires', 'Kinésithérapie'], 1, 'Urgence fonctionnelle et vitale.'),
    ],
    retenir: ['Monoarthrite aiguë = septique jusqu’à preuve du contraire.', 'Ponction avant antibiotiques.', 'Staphylocoque doré en tête.'],
    fiches: ['rhu-arthrites'],
  },
  {
    id: 'cas-chute', titre: 'Chute d’une femme âgée', m: 'geria', niv: 'EDN',
    enonce: 'Mme V., 86 ans, vivant seule, est retrouvée au sol par sa voisine le matin. Elle ne peut pas se relever. Son membre inférieur droit est raccourci et en rotation externe. Elle prend un diurétique, un bêtabloquant et un hypnotique.',
    etapes: [
      E('Quelle lésion suspecter ?', ['Entorse de hanche', 'Fracture du col du fémur', 'Luxation du genou', 'Sciatique'], 1, 'Raccourcissement et rotation externe après une chute.'),
      E('Quel examen biologique est particulièrement important vu la station au sol prolongée ?', ['CPK et fonction rénale', 'TSH', 'Sérologie VIH', 'Bilan lipidique'], 0, 'Rechercher une rhabdomyolyse et une insuffisance rénale ; penser aussi à l’hypothermie et aux escarres.'),
      E('Quel délai pour la chirurgie ?', ['Dans les 48 heures', 'Après 2 semaines de repos', 'Pas de chirurgie après 85 ans', 'Uniquement si la douleur persiste'], 0, 'Une chirurgie précoce permet de lever rapidement et réduit les complications.'),
      E('Quel élément de l’ordonnance peut avoir favorisé la chute ?', ['L’hypnotique', 'Le paracétamol', 'Le calcium', 'Les vitamines'], 0, 'Les psychotropes et les antihypertenseurs augmentent le risque de chute : réévaluer.'),
    ],
    retenir: ['Station au sol prolongée : CPK, créatinine, température.', 'Chirurgie précoce.', 'Rechercher la cause de la chute.'],
    fiches: ['ger-sujet-age', 'ort-fractures'],
  },
  {
    id: 'cas-colique', titre: 'Douleur lombaire brutale et fièvre', m: 'uro', niv: 'EDN',
    enonce: 'M. F., 41 ans, consulte pour une douleur lombaire gauche brutale irradiant vers l’aine, avec agitation, depuis 6 heures. Température 38,8 °C, frissons. La bandelette urinaire montre leucocytes et nitrites.',
    etapes: [
      E('Quel diagnostic ?', ['Colique néphrétique simple', 'Pyélonéphrite obstructive (colique néphrétique fébrile)', 'Lumbago', 'Appendicite'], 1, 'Colique néphrétique + fièvre : forme compliquée.'),
      E('Quel examen d’imagerie ?', ['Scanner abdomino-pelvien en urgence', 'Rien', 'IRM lombaire', 'Échographie dans 1 mois'], 0, 'Confirmer l’obstacle et le calcul.'),
      E('Quel traitement est indispensable ?', ['AINS seuls', 'Drainage des urines en urgence (sonde JJ ou néphrostomie) et antibiothérapie', 'Boire 3 litres d’eau', 'Antispasmodiques'], 1, 'Urgence urologique : une urine infectée sous pression expose au choc septique.'),
    ],
    retenir: ['Colique néphrétique fébrile = drainage urgent.', 'Hémocultures, ECBU, antibiotiques.', 'Scanner.'],
    fiches: ['uro-colique-retention'],
  },
  {
    id: 'cas-neutropenie', titre: 'Fièvre sous chimiothérapie', m: 'onco', niv: 'EDN',
    enonce: 'Mme G., 52 ans, traitée par chimiothérapie pour un cancer du sein (dernière cure il y a 9 jours), appelle pour une fièvre à 38,7 °C et des frissons.',
    etapes: [
      E('Quel examen biologique demander en urgence ?', ['Hémogramme (neutrophiles)', 'TSH', 'Bilan lipidique', 'Marqueurs tumoraux'], 0, 'Le nadir de neutrophiles survient souvent vers J7 – J14.'),
      E('Les neutrophiles sont à 300/mm³. Conduite ?', ['Surveillance', 'Hémocultures puis antibiothérapie probabiliste à large spectre sans délai', 'Attendre les résultats des cultures', 'Paracétamol seul'], 1, 'Neutropénie fébrile : urgence.'),
      E('Signes de gravité imposant une hospitalisation (choisir la meilleure réponse) :', ['Hypotension, troubles de conscience, polypnée', 'Fatigue modérée', 'Perte de cheveux', 'Nausées légères'], 0, 'Sepsis : réanimation possible.'),
    ],
    retenir: ['Fièvre + chimiothérapie = hémogramme en urgence.', 'Neutropénie fébrile : antibiotiques immédiatement.', 'Nadir J7 – J14.'],
    fiches: ['onc-principes'],
  },
  {
    id: 'cas-sevrage', titre: 'Agitation à J2 d’hospitalisation', m: 'addicto', niv: 'EDN',
    enonce: 'M. P., 55 ans, hospitalisé il y a 48 heures pour une fracture de jambe, devient agité, tremblant, sueurs, tachycarde à 120/min, et voit des insectes sur les murs. Sa femme signale qu’il boit une bouteille de whisky par jour.',
    etapes: [
      E('Quel diagnostic ?', ['Schizophrénie', 'Syndrome de sevrage alcoolique compliqué (delirium tremens)', 'Hypoglycémie isolée', 'Anxiété simple'], 1, 'Sevrage brutal à l’hospitalisation ; hallucinations visuelles typiques.'),
      E('Quel traitement ?', ['Benzodiazépine, hydratation, vitamine B1', 'Antipsychotique seul', 'Contention seule', 'Morphine'], 0, 'La thiamine prévient l’encéphalopathie de Gayet-Wernicke.'),
      E('Comment aurait-on pu prévenir cette situation ?', ['En repérant la consommation d’alcool dès l’admission', 'En interdisant les visites', 'En donnant de l’alcool', 'Ce n’était pas prévisible'], 0, 'Repérage systématique et prévention du sevrage.'),
    ],
    retenir: ['Repérer l’alcool à toute admission.', 'Benzodiazépine + B1.', 'Delirium tremens = urgence.'],
    fiches: ['add-substances'],
  },
  {
    id: 'cas-lca', titre: 'Lire un essai randomisé', m: 'lca', niv: 'EDN',
    enonce: 'Un essai randomisé en double aveugle compare un nouvel antihypertenseur à un placebo chez 2 000 patients. Critère principal : survenue d’un AVC à 3 ans. Résultats : 4 % d’AVC sous traitement, 6 % sous placebo ; RR = 0,67, IC 95 % [0,46 – 0,96], p = 0,03. 12 % de perdus de vue dans le groupe traité, 4 % dans le groupe placebo.',
    etapes: [
      E('Quel est le NNT pour éviter un AVC à 3 ans ?', ['2', '50', '67', '25'], 1, 'RAR = 6 − 4 = 2 % ; NNT = 1 / 0,02 = 50.'),
      E('Le résultat est-il statistiquement significatif ?', ['Oui, car l’IC ne contient pas 1', 'Non, car p > 0,01', 'Non, car le RR est < 1', 'Impossible à dire'], 0, 'p < 0,05 et IC excluant 1.'),
      E('Quel biais faut-il redouter avec ces perdus de vue ?', ['Biais d’attrition', 'Biais de publication', 'Biais de mémorisation', 'Aucun'], 0, 'Perdus de vue nombreux et déséquilibrés entre les groupes.'),
      E('Quelle analyse est la plus adaptée pour conclure ?', ['Per protocole seule', 'En intention de traiter', 'En sous-groupes', 'Aucune'], 1, 'Elle préserve la comparabilité apportée par la randomisation.'),
    ],
    retenir: ['NNT = 1 / RAR.', 'IC du RR excluant 1 = significatif.', 'Perdus de vue déséquilibrés = biais d’attrition.'],
    fiches: ['lca-methodo', 'lca-essais-stats'],
  },
  {
    id: 'cas-maltraitance', titre: 'Nourrisson et fracture', m: 'medleg', niv: 'EDN',
    enonce: 'Un nourrisson de 4 mois est amené pour un bras douloureux. Les parents disent qu’il « s’est coincé le bras dans les barreaux du lit ». La radiographie montre une fracture de l’humérus et des fractures de côtes en consolidation.',
    etapes: [
      E('Quelle hypothèse doit être évoquée ?', ['Ostéogenèse imparfaite uniquement', 'Maltraitance', 'Rachitisme', 'Accident banal'], 1, 'Fractures d’âges différents, nourrisson qui ne se déplace pas, mécanisme peu plausible.'),
      E('Quelle est la priorité ?', ['Renvoyer à domicile avec une attelle', 'Hospitaliser pour protéger l’enfant et faire un bilan complet', 'Appeler les grands-parents', 'Attendre une récidive pour agir'], 1, 'Bilan : examen complet, squelette complet, fond d’œil, imagerie cérébrale, bilan d’hémostase.'),
      E('Quelle démarche administrative ?', ['Aucune, secret médical', 'Signalement au procureur de la République', 'Courrier aux parents', 'Déclaration à l’employeur'], 1, 'En cas de danger grave ou de suspicion de sévices, signalement judiciaire (ou information préoccupante selon la situation).'),
    ],
    retenir: ['Mécanisme incohérent = alerte.', 'Protéger : hospitaliser.', 'Signaler au procureur.'],
    fiches: ['leg-certificats'],
  },
];
