const fullDataset = [
  // ==========================================
  // --- 1. LES 12 TEMPS ANGLAIS (12 questions - 1 par temps) ---
  // ==========================================
  {
    category: "simple",
    sentence: "The IT support team <mark>responds</mark> promptly to urgent tickets.",
    tense: "Present Simple",
    usage: "Habitude / Répétition régulière",
    timeMarker: "present",
    tenseChoices: ["Present Simple", "Present Continuous", "Present Perfect", "Past Simple"],
    usageChoices: ["Habitude / Répétition régulière", "Action en cours au moment présent", "Action passée datée", "Bilan d'expérience"],
    explanation: "On utilise le **Present Simple** car il s'agit d'une routine professionnelle et d'un fonctionnement habituel de l'équipe support."
  },
  {
    category: "continuous",
    sentence: "Our developers <mark>are testing</mark> the new release right now.",
    tense: "Present Continuous",
    usage: "Action en cours au moment où l'on parle",
    timeMarker: "present",
    tenseChoices: ["Present Continuous", "Present Simple", "Past Continuous", "Present Perfect"],
    usageChoices: ["Action en cours au moment où l'on parle", "Loi scientifique", "Action terminée", "Prédiction"],
    explanation: "Le marqueur 'right now' indique une action en train de se dérouler au moment présent, exigeant la structure **be + -ING**."
  },
  {
    category: "simple",
    sentence: "The company <mark>launched</mark> its software platform three years ago.",
    tense: "Past Simple",
    usage: "Action passée terminée et datée",
    timeMarker: "past",
    tenseChoices: ["Past Simple", "Present Perfect", "Past Continuous", "Past Perfect"],
    usageChoices: ["Action passée terminée et datée", "Action qui dure encore", "Bilan récent", "Futur proche"],
    explanation: "L'expression 'three years ago' date précisément l'événement dans le passé, ce qui nécessite le **Past Simple** (prétérit)."
  },
  {
    category: "continuous",
    sentence: "While I <mark>was updating</mark> the database, the server lost power.",
    tense: "Past Continuous",
    usage: "Action passée longue interrompue par un événement ponctuel",
    timeMarker: "past",
    tenseChoices: ["Past Continuous", "Past Simple", "Present Perfect", "Past Perfect"],
    usageChoices: ["Action passée longue interrompue par un événement ponctuel", "Habitude actuelle", "Projet futur", "Résultat présent"],
    explanation: "La proposition avec 'While' exprime une action de fond en cours dans le passé (**Past Continuous**) interrompue par le crash de courant au Past Simple."
  },
  {
    category: "perfect",
    sentence: "The marketing department <mark>has updated</mark> the website design.",
    tense: "Present Perfect",
    usage: "Action passée sans date précise avec résultat visible au présent",
    timeMarker: "present-perfect",
    tenseChoices: ["Present Perfect", "Past Simple", "Present Simple", "Future Simple"],
    usageChoices: ["Action passée sans date précise avec résultat visible au présent", "Action datée du passé", "Horaires officiels", "Action en cours"],
    explanation: "Aucune date n'est mentionnée, mais le site est désormais prêt : c'est un bilan passé avec une conséquence directe sur le présent (**Present Perfect**)."
  },
  {
    category: "perfect",
    sentence: "We <mark>have been working</mark> on this code refactoring since 8 AM.",
    tense: "Present Perfect Continuous",
    usage: "Action continue commencée dans le passé et qui se poursuit encore au présent",
    timeMarker: "present-perfect",
    tenseChoices: ["Present Perfect Continuous", "Present Continuous", "Past Continuous", "Present Perfect"],
    usageChoices: ["Action continue commencée dans le passé et qui se poursuit encore au présent", "Action brève et achevée", "Action future", "Habitude passée"],
    explanation: "L'association de 'since 8 AM' avec une activité ininterrompue exige le **Present Perfect Continuous** (have/has been + -ING) pour souligner le déroulement continu jusqu'à maintenant."
  },
  {
    category: "perfect",
    sentence: "By the time the client called, we <mark>had already resolved</mark> the issue.",
    tense: "Past Perfect",
    usage: "Action accomplie antérieurement à un autre moment passé",
    timeMarker: "past-perfect",
    tenseChoices: ["Past Perfect", "Past Simple", "Present Perfect", "Past Continuous"],
    usageChoices: ["Action accomplie antérieurement à un autre moment passé", "Action future", "Habitude passée", "Action simultanée"],
    explanation: "Le **Past Perfect** (had + participe passé) est obligatoire pour marquer une action réalisée *avant* l'appel du client au Past Simple."
  },
  {
    category: "perfect",
    sentence: "He was exhausted because he <mark>had been debugging</mark> all night.",
    tense: "Past Perfect Continuous",
    usage: "Action continue passée qui s'est prolongée jusqu'à un repère passé",
    timeMarker: "past-perfect",
    tenseChoices: ["Past Perfect Continuous", "Past Continuous", "Present Perfect Continuous", "Past Perfect"],
    usageChoices: ["Action continue passée qui s'est prolongée jusqu'à un repère passé", "Action future", "Action ponctuelle datée", "Loi scientifique"],
    explanation: "Le **Past Perfect Continuous** (had been + -ING) exprime la durée d'une activité continue passée expliquant un résultat ou un état constaté au passé ('he was exhausted')."
  },
  {
    category: "simple",
    sentence: "If you send the invoice today, the client <mark>will process</mark> the payment tomorrow.",
    tense: "Future Simple",
    usage: "Action future certaine ou décision en réaction",
    timeMarker: "future",
    tenseChoices: ["Future Simple", "Present Simple", "Future Perfect", "Past Simple"],
    usageChoices: ["Action future certaine ou décision en réaction", "Regret passé", "Vérité générale", "Action interrompue"],
    explanation: "Dans le premier conditionnel (If + Present Simple), la proposition principale utilise **will + verbe** pour exprimer la conséquence future."
  },
  {
    category: "continuous",
    sentence: "At 10 AM tomorrow, our team <mark>will be presenting</mark> the new module.",
    tense: "Future Continuous",
    usage: "Action qui sera en train de se dérouler à un instant précis du futur",
    timeMarker: "future",
    tenseChoices: ["Future Continuous", "Future Simple", "Present Continuous", "Future Perfect"],
    usageChoices: ["Action qui sera en train de se dérouler à un instant précis du futur", "Décision spontanée", "Regret passé", "Bilan d'expérience"],
    explanation: "L'indication précise de temps futur 'At 10 AM tomorrow' demande le **Future Continuous** (will be + -ING) pour indiquer une action en cours à ce moment-là."
  },
  {
    category: "perfect",
    sentence: "By December, the engineering team <mark>will have completed</mark> the migration.",
    tense: "Future Perfect",
    usage: "Action qui sera achevée avant un point temporel futur déterminé",
    timeMarker: "future",
    tenseChoices: ["Future Perfect", "Future Simple", "Present Perfect", "Future Continuous"],
    usageChoices: ["Action qui sera achevée avant un point temporel futur déterminé", "Décision spontanée", "Action passée", "Habitude"],
    explanation: "Le marqueur 'By + date future' exige le **Future Perfect** (will have + participe passé) pour indiquer qu'une action sera totalement achevée avant cette date."
  },
  {
    category: "perfect",
    sentence: "By next month, she <mark>will have been managing</mark> the project for two years.",
    tense: "Future Perfect Continuous",
    usage: "Durée d'une action continue évaluée à un repère précis du futur",
    timeMarker: "future",
    tenseChoices: ["Future Perfect Continuous", "Future Continuous", "Present Perfect Continuous", "Future Perfect"],
    usageChoices: ["Durée d'une action continue évaluée à un repère précis du futur", "Projet immédiat", "Action passée interrompue", "Décision spontanée"],
    explanation: "L'association de 'By next month' avec une durée ('for two years') impose le **Future Perfect Continuous** (will have been + -ING) pour calculer le cumul d'une activité continue à une date future."
  },

  // ==========================================
  // --- 2. VOCABULAIRE & COLLOCATIONS TOEIC PART 5 (20 questions) ---
  // ==========================================
  {
    category: "vocab",
    sentence: "There has been a significant <mark>improvement</mark> in system stability.",
    tense: "Noun (Nom)",
    usage: "Grammaire : Nom placé après l'adjectif 'significant'",
    timeMarker: "present-perfect",
    tenseChoices: ["Noun (Nom)", "Verb (Verbe)", "Adjective (Adjectif)", "Adverb (Adverbe)"],
    usageChoices: ["Grammaire : Nom placé après l'adjectif 'significant'", "Action verbale directe", "Modificateur de verbe", "Participe présent"],
    explanation: "L'adjectif 'significant' doit qualifier un nom. 'Improvement' est le nom dérivé du verbe 'improve'."
  },
  {
    category: "vocab",
    sentence: "Due to unforeseen technical issues, the release was <mark>postponed</mark>.",
    tense: "Passive Voice (Past Simple)",
    usage: "Vocabulaire Business : 'reporter / décaler à plus tard'",
    timeMarker: "past",
    tenseChoices: ["Passive Voice (Past Simple)", "Active Voice", "Present Perfect", "Future Simple"],
    usageChoices: ["Vocabulaire Business : 'reporter / décaler à plus tard'", "Annuler définitivement", "Avancer une date", "Confirmer un rendez-vous"],
    explanation: "'Postpone' signifie différer/reporter un événement. 'Due to unforeseen circumstances' est l'une des expressions les plus fréquentes au TOEIC pour annoncer un report."
  },
  {
    category: "vocab",
    sentence: "All employees are expected to <mark>comply with</mark> the new security policy.",
    tense: "Verb + Preposition (Collocation)",
    usage: "Vocabulaire Business : 'se conformer à / respecter une règle'",
    timeMarker: "present",
    tenseChoices: ["Verb + Preposition (Collocation)", "Noun Phrase", "Adverb", "Conjunction"],
    usageChoices: ["Vocabulaire Business : 'se conformer à / respecter une règle'", "Réfuter un argument", "Modifier un document", "Demander une autorisation"],
    explanation: "La collocation 'comply with' signifie se conformer à un règlement. La préposition 'with' exige 'comply' (à ne pas confondre avec 'respect' qui s'utilise sans préposition)."
  },
  {
    category: "vocab",
    sentence: "The project was completed well ahead of the established <mark>deadline</mark>.",
    tense: "Noun (Nom)",
    usage: "Vocabulaire Business : 'date limite / échéance'",
    timeMarker: "past",
    tenseChoices: ["Noun (Nom)", "Adjective", "Verb", "Preposition"],
    usageChoices: ["Vocabulaire Business : 'date limite / échéance'", "Montant du budget", "Début de réunion", "Compte-rendu"],
    explanation: "'Deadline' est le terme clé du TOEIC pour la date distribution/butoir. L'expression 'ahead of schedule / deadline' signifie en avance sur le planning."
  },
  {
    category: "vocab",
    sentence: "The company offers a highly <mark>competitive</mark> salary package.",
    tense: "Adjective (Adjectif)",
    usage: "Grammaire/Vocabulaire : Adjectif qualifiant le nom 'salary'",
    timeMarker: "present",
    tenseChoices: ["Adjective (Adjectif)", "Noun (Nom)", "Adverb (Adverbe)", "Verb (Verbe)"],
    usageChoices: ["Grammaire/Vocabulaire : Adjectif qualifiant le nom 'salary'", "Action verbale", "Infinitive", "Connecteur logique"],
    explanation: "Un adverbe d'intensité ('highly') précède un adjectif ('competitive') qui vient qualifier le nom 'salary package'."
  },
  {
    category: "vocab",
    sentence: "The new software is fully <mark>compatible</mark> with existing servers.",
    tense: "Adjective + Preposition",
    usage: "Collocation adjectivale : 'compatible with'",
    timeMarker: "present",
    tenseChoices: ["Adjective + Preposition", "Verb + Noun", "Adverb", "Gerund"],
    usageChoices: ["Collocation adjectivale : 'compatible with'", "Incompatibilité matérielle", "Action de supprimer", "Action de remplacer"],
    explanation: "L'adjectif 'compatible' s'associe obligatoirement avec la préposition 'with' pour indiquer le fonctionnement conjoint de deux systèmes IT."
  },
  {
    category: "vocab",
    sentence: "We look forward to <mark>receiving</mark> your proposal by Friday.",
    tense: "Gerund (-ing)",
    usage: "Grammaire : Gérondif après l'expression 'look forward to'",
    timeMarker: "present",
    tenseChoices: ["Gerund (-ing)", "Infinitive with 'to'", "Bare Infinitive", "Past Simple"],
    usageChoices: ["Grammaire : Gérondif après l'expression 'look forward to'", "Infinitif de but", "Verbe au subjonctif", "Participe passé"],
    explanation: "Dans 'look forward to', 'to' fonctionne comme une préposition. Toute préposition en anglais est obligatoirement suivie d'un verbe en **-ING**."
  },
  {
    category: "vocab",
    sentence: "The manager insisted on <mark>verifying</mark> the credentials of all applicants.",
    tense: "Gerund (-ing)",
    usage: "Grammaire : Gérondif après préposition ('insist on')",
    timeMarker: "past",
    tenseChoices: ["Gerund (-ing)", "Infinitive with 'to'", "Past Simple", "Present Simple"],
    usageChoices: ["Grammaire : Gérondif après préposition ('insist on')", "Infinitif complet", "Adjectif comparatif", "Verbe conjugué"],
    explanation: "Le verbe 'insist' exige la préposition 'on'. Après 'on', tout verbe prend automatiquement la forme en **-ING**."
  },
  {
    category: "vocab",
    sentence: "The contract was signed <mark>despite</mark> several minor disagreements.",
    tense: "Preposition (Concession)",
    usage: "Grammaire : Préposition exprimant la concession + Groupe Nominal",
    timeMarker: "past",
    tenseChoices: ["Preposition (Concession)", "Conjunction", "Adverb", "Relative Pronoun"],
    usageChoices: ["Grammaire : Préposition exprimant la concession + Groupe Nominal", "Marqueur de cause", "Condition irréelle", "Pronom relatif"],
    explanation: "'Despite' est suivi d'un groupe nominal ('several minor disagreements'). On utilise 'although' s'il y a un sujet + verbe derrière."
  },
  {
    category: "vocab",
    sentence: "The board members approved the project <mark>because</mark> the ROI was high.",
    tense: "Conjunction (Cause)",
    usage: "Connecteur logique introduisant une proposition complète (Sujet + Verbe)",
    timeMarker: "past",
    tenseChoices: ["Conjunction (Cause)", "Preposition", "Adverb", "Relative Pronoun"],
    usageChoices: ["Connecteur logique introduisant une proposition complète (Sujet + Verbe)", "Exclusion d'éléments", "Concession", "Opposition temporaire"],
    explanation: "'Because' introduit une subordonnée avec sujet et verbe ('the ROI was high'), contrairement à 'because of' qui attend un simple groupe nominal."
  },
  {
    category: "vocab",
    sentence: "He is capable of managing complex IT infrastructures <mark>efficiently</mark>.",
    tense: "Adverb (Adverbe)",
    usage: "Grammaire : Adverbe en -ly modifiant la manière de réaliser l'action",
    timeMarker: "present",
    tenseChoices: ["Adverb (Adverbe)", "Adjective (Adjectif)", "Noun (Nom)", "Verb (Verbe)"],
    usageChoices: ["Grammaire : Adverbe en -ly modifiant la manière de réaliser l'action", "Qualificatif de nom", "Sujet de phrase", "Infinitive"],
    explanation: "Pour décrire *comment* le travail est effectué (modificateur du verbe 'managing'), on utilise l'adverbe terminant en **-ly** ('efficiently')."
  },
  {
    category: "vocab",
    sentence: "Please review the attached document prior to <mark>attending</mark> the meeting.",
    tense: "Gerund (-ing)",
    usage: "Vocabulaire/Grammaire : Gérondif après l'expression 'prior to'",
    timeMarker: "present",
    tenseChoices: ["Gerund (-ing)", "Infinitive with 'to'", "Past Simple", "Future Simple"],
    usageChoices: ["Vocabulaire/Grammaire : Gérondif après l'expression 'prior to'", "Infinitif de but", "Forme passive", "Modificateur d'adverbe"],
    explanation: "'Prior to' est une locution prépositive signifiant 'avant'. Comme toute préposition, elle impose le gérondif en **-ING** au verbe qui la suit."
  },
  {
    category: "vocab",
    sentence: "The candidate has a background in software development <mark>as well as</mark> database management.",
    tense: "Conjunctive Phrase (Addition)",
    usage: "Vocabulaire/Connecteur : 'ainsi que / de même que'",
    timeMarker: "present",
    tenseChoices: ["Conjunctive Phrase (Addition)", "Preposition (Concession)", "Adverb (Time)", "Relative Pronoun"],
    usageChoices: ["Vocabulaire/Connecteur : 'ainsi que / de même que'", "Opposition stricte", "Cause directe", "Condition future"],
    explanation: "'As well as' est une locution conjonctive très fréquente au TOEIC pour ajouter une compétence ou un élément d'information supplémentaire."
  },
  {
    category: "vocab",
    sentence: "Please make sure your expenses are <mark>within</mark> the allocated department budget.",
    tense: "Preposition (Limit)",
    usage: "Vocabulaire Business : 'dans les limites de / en dessous du plafond de'",
    timeMarker: "present",
    tenseChoices: ["Preposition (Limit)", "Adverb", "Conjunction", "Verb"],
    usageChoices: ["Vocabulaire Business : 'dans les limites de / en dessous du plafond de'", "Dépasser la limite", "Annuler le montant", "Inversion de paiement"],
    explanation: "'Within' exprime la limite ou le cadre (temporel, financier ou géographique). On dit 'within the budget' pour respecter le plafond budgétaire."
  },
  {
    category: "vocab",
    sentence: "The updated guidelines will be <mark>implemented</mark> starting next Monday.",
    tense: "Passive Voice (Past Participle)",
    usage: "Vocabulaire IT/Business : 'mettre en œuvre / déployer'",
    timeMarker: "future",
    tenseChoices: ["Passive Voice (Past Participle)", "Active Verb", "Noun", "Gerund"],
    usageChoices: ["Vocabulaire IT/Business : 'mettre en œuvre / déployer'", "Refuser un projet", "Annuler un accord", "Demander un avis"],
    explanation: "'Implement' signifie déployer, appliquer ou mettre en exécution un plan/système. C'est un verbe d'action incontournable dans le TOEIC."
  },
  {
    category: "vocab",
    sentence: "You are required to <mark>notify</mark> your supervisor at least 24 hours in advance.",
    tense: "Infinitive Verb",
    usage: "Vocabulaire Business : 'informer / notifier / prévenir'",
    timeMarker: "present",
    tenseChoices: ["Infinitive Verb", "Noun", "Adjective", "Adverb"],
    usageChoices: ["Vocabulaire Business : 'informer / notifier / prévenir'", "Ignorer une consigne", "Licencier quelqu'un", "Retarder une tâche"],
    explanation: "La structure 'require someone to do something' demande un verbe à l'infinitif. 'Notify' signifie avertir ou informer de manière officielle."
  },
  {
    category: "vocab",
    sentence: "The executive board unanimously voted <mark>to approve</mark> the merger.",
    tense: "Infinitive with 'to'",
    usage: "Grammaire : Infinitif après le verbe 'vote'",
    timeMarker: "past",
    tenseChoices: ["Infinitive with 'to'", "Gerund (-ing)", "Past Simple", "Bare Infinitive"],
    usageChoices: ["Grammaire : Infinitif après le verbe 'vote'", "Gérondif sujet", "Participe passé", "Modificateur d'adjectif"],
    explanation: "Certains verbes comme 'decide', 'agree' ou 'vote' exigent un verbe à l'infinitif précédé de 'to' (**to + verb**)."
  },
  {
    category: "vocab",
    sentence: "Clients are advised to keep their receipt as <mark>proof</mark> of purchase.",
    tense: "Noun (Nom)",
    usage: "Vocabulaire Business : 'preuve (de paiement / d'achat)'",
    timeMarker: "present",
    tenseChoices: ["Noun (Nom)", "Verb (Verbe)", "Adjective", "Adverb"],
    usageChoices: ["Vocabulaire Business : 'preuve (de paiement / d'achat)'", "Action de prouver", "Incertitude", "Contrat d'assurance"],
    explanation: "'Proof' est le nom signifiant 'preuve'. À ne pas confondre avec le verbe 'prove' (prouver)."
  },
  {
    category: "vocab",
    sentence: "The company's headquarters are <mark>located</mark> in downtown Chicago.",
    tense: "Adjective / Passive Voice",
    usage: "Vocabulaire Business : 'situé / implanté'",
    timeMarker: "present",
    tenseChoices: ["Adjective / Passive Voice", "Active Verb", "Noun", "Adverb"],
    usageChoices: ["Vocabulaire Business : 'situé / implanté'", "Fermeture définitive", "Action en déplacement", "Construction neuve"],
    explanation: "L'expression 'be located in/at' est la forme standard pour indiquer l'emplacement d'un bâtiment ou d'un siège social."
  },
  {
    category: "vocab",
    sentence: "The new marketing strategy proved to be highly <mark>effective</mark>.",
    tense: "Adjective (Adjectif)",
    usage: "Vocabulaire Business : 'efficace / qui produit l'effet escompté'",
    timeMarker: "past",
    tenseChoices: ["Adjective (Adjectif)", "Noun (Nom)", "Adverb (Adverbe)", "Verb (Verbe)"],
    usageChoices: ["Vocabulaire Business : 'efficace / qui produit l'effet escompté'", "Inutile", "Lent", "Action de réaliser"],
    explanation: "L'adjectif 'effective' signifie efficace. Il est souvent précédé d'un adverbe d'intensité comme 'highly' ou 'cost-' (cost-effective)."
  }
];
