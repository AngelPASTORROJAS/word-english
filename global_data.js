const globalVocabData = {
    debutant: [
        {
            fr: "Logiciel",
            en: "Software",
            hardEn: ["Hardware", "Firmware", "Shareware", "Freeware", "Malware", "Spyware", "Middleware", "Platform", "Application", "Wetware", "Groupware", "Netware", "Software suite", "Patch", "Driver"],
            hardFr: ["Matériel", "Micrologiciel", "Progiciel", "Navigateur", "Serveur", "Application", "Base de données", "Système d'exploitation", "Réseau", "Mémoire", "Pilote", "Mise à jour", "Environnement", "Bibliothèque", "Interface"]
        },
        {
            fr: "Cahier des charges",
            en: "Specifications",
            hardEn: ["Specializations", "Standards", "Guidelines", "Deliverables", "Milestones", "Benchmarks", "Requirements", "Expectations", "Statements", "Procedures", "Protocols", "Blueprints", "Contracts", "Frameworks", "Policies"],
            hardFr: ["Spécialisations", "Standards", "Directives", "Livrables", "Jalons", "Exigences", "Attentes", "Procédures", "Contrats", "Garanties", "Objectifs", "Rapports", "Budgets", "Plannings", "Audits"]
        },
        {
            fr: "Navigateur",
            en: "Browser",
            hardEn: ["Builder", "Provider", "Server", "Gateway", "Router", "Scraper", "Aggregator", "Buffer", "Navigator", "Monitor", "Explorer", "Crawler", "Viewer", "Proxy", "Client"],
            hardFr: ["Moteur de recherche", "Passerelle", "Serveur", "Explorateur", "Routeur", "Moniteur", "Fournisseur", "Agrégateur", "Tampon", "Générateur", "Catalogue", "Portail", "Client", "Proxy", "Visionneuse"]
        },
        {
            fr: "Moteur de recherche",
            en: "Search engine",
            hardEn: ["Research engine", "Find engine", "Search server", "Query processor", "Index machine", "Data crawler", "Web spider", "Search utility", "Lookup service", "Explorer", "Browser", "Analyzer", "Retriever", "Directory", "Collector"],
            hardFr: ["Moteur de rendu", "Serveur de requêtes", "Explorateur de données", "Index automatique", "Robot web", "Moteur de calcul", "Processeur de texte", "Navigateur", "Catalogue", "Portail", "Bibliothèque", "Répertoire", "Fureteur", "Classeur", "Filtre"]
        },
        {
            fr: "Programmation",
            en: "Programming",
            hardEn: ["Planning", "Compilation", "Execution", "Design", "Debugging", "Maintenance", "Architecture", "Integration", "Analysis", "Modeling", "Coding", "Scripting", "Testing", "Deployment", "Refactoring"],
            hardFr: ["Planification", "Compilation", "Exécution", "Conception", "Débogage", "Maintenance", "Architecture", "Intégration", "Analyse", "Modélisation", "Codage", "Test", "Déploiement", "Écriture", "Refactoring"]
        },
        {
            fr: "Nom de domaine",
            en: "Domain name",
            hardEn: ["Host name", "Server name", "Network name", "IP address", "URL path", "Subdomain", "Registry", "Protocol", "Zone file", "DNS record", "Site identifier", "Web address", "Alias", "Handle", "Token"],
            hardFr: ["Nom d'hôte", "Adresse IP", "Chemin d'accès", "Sous-domaine", "Registre", "Protocole", "Serveur DNS", "Identifiant", "Adresse web", "Lien", "Réseau", "Passerelle", "Masque", "Jeton", "Session"]
        },
        {
            fr: "Compte",
            en: "Account",
            hardEn: ["Access", "Profile", "Session", "Credential", "Identity", "Log", "Record", "Membership", "Subscription", "Alias", "User", "Role", "Permission", "Key", "Token"],
            hardFr: ["Accès", "Profil", "Session", "Identifiant", "Identité", "Enregistrement", "Abonnement", "Rôle", "Permission", "Clé", "Jeton", "Utilisateur", "Mot de passe", "Historique", "Registre"]
        },
        {
            fr: "Créer un compte",
            en: "To sign up",
            hardEn: ["To log in", "To sign in", "To register", "To subscribe", "To connect", "To open session", "To setup account", "To join", "To enroll", "To activate", "To validate", "To authenticate", "To verify", "To apply", "To submit"],
            hardFr: ["Se connecter", "S'enregistrer", "S'abonner", "Ouvrir une session", "S'inscrire", "S'identifier", "S'authentifier", "Valider", "Activer", "Rejoindre", "Participer", "Soumettre", "Remplir", "Créer", "Installer"]
        },
        {
            fr: "Définir un mot de passe",
            en: "To set a password",
            hardEn: ["To change password", "To reset password", "To create code", "To enter password", "To type password", "To generate key", "To store password", "To secure account", "To update pin", "To configure login", "To save password", "To verify password", "To encrypt", "To unlock", "To protect"],
            hardFr: ["Changer de mot de passe", "Réinitialiser le mot de passe", "Entrer un mot de passe", "Générer une clé", "Sécuriser le compte", "Mettre à jour le code", "Protéger le compte", "Chiffrer", "Déverrouiller", "Enregistrer", "Valider", "Configurer", "Créer un code", "Vérifier", "Bloquer"]
        },
        {
            fr: "Utilisateur",
            en: "User",
            hardEn: ["Client", "Member", "Visitor", "Subscriber", "Consumer", "Admin", "Operator", "Player", "Viewer", "Guest", "Participant", "Account", "Person", "Customer", "Developer"],
            hardFr: ["Client", "Membre", "Visiteur", "Abonné", "Consommateur", "Administrateur", "Opérateur", "Joueur", "Spectateur", "Invité", "Participant", "Personne", "Acheteur", "Développeur", "Prestataire"]
        },
        {
            fr: "Identifiant",
            en: "Username",
            hardEn: ["User id", "Login", "Account name", "Password", "Email", "Alias", "Handle", "Key", "Token", "Badge", "Signature", "Reference", "Tag", "Identity", "Profile"],
            hardFr: ["Nom d'utilisateur", "Mot de passe", "Identité", "Courriel", "Alias", "Jeton", "Clé", "Signature", "Référence", "Badge", "Étiquette", "Profil", "Session", "Accès", "Compte"]
        },
        {
            fr: "Bibliothèque",
            en: "Library",
            hardEn: ["Framework", "Repository", "Package", "Module", "Directory", "Folder", "Archive", "Database", "Collection", "Toolkit", "Component", "Script", "Plugin", "Extension", "Store"],
            hardFr: ["Cadre de travail", "Dépôt", "Paquet", "Module", "Répertoire", "Dossier", "Archive", "Base de données", "Collection", "Boîte à outils", "Composant", "Script", "Extension", "Magasin", "Catalogue"]
        },
        {
            fr: "Cadre de travail",
            en: "Framework",
            hardEn: ["Library", "Platform", "Environment", "Structure", "Architecture", "Toolkit", "Blueprint", "Template", "System", "Engine", "Workspace", "Platform", "Container", "Pipeline", "Boilerplate"],
            hardFr: ["Bibliothèque", "Plateforme", "Environnement", "Structure", "Architecture", "Boîte à outils", "Modèle", "Système", "Moteur", "Espace de travail", "Conteneur", "Pipeline", "Gabarit", "Support", "Base"]
        },
        {
            fr: "Environnement de développement",
            en: "Integrated development environment - IDE",
            hardEn: ["Code editor", "Compiler", "Debugger", "Workspace", "Platform", "Toolkit", "Software suite", "Developer tool", "Console", "Terminal", "Sandbox", "Engine", "Framework", "Builder", "Studio"],
            hardFr: ["Éditeur de code", "Compilateur", "Débogueur", "Espace de travail", "Boîte à outils", "Suite logicielle", "Outil de développement", "Console", "Terminal", "Bac à sable", "Moteur", "Cadre de travail", "Studio", "Plateforme", "Interface"]
        },
        {
            fr: "Maintenance",
            en: "Maintenance",
            hardEn: ["Support", "Upkeep", "Repair", "Fix", "Update", "Patch", "Revision", "Monitoring", "Management", "Administration", "Service", "Care", "Testing", "Cleaning", "Optimization"],
            hardFr: ["Support", "Entretien", "Réparation", "Correction", "Mise à jour", "Correctif", "Révision", "Surveillance", "Gestion", "Administration", "Service", "Test", "Nettoyage", "Optimisation", "Suivi"]
        },
        {
            fr: "Sauvegarde",
            en: "Backup",
            hardEn: ["Restore", "Archive", "Copy", "Mirror", "Snapshot", "Save", "Image", "Recovery", "History", "Log", "Cache", "Buffer", "Vault", "Storage", "Dump"],
            hardFr: ["Restauration", "Archive", "Copie", "Miroir", "Instantané", "Enregistrement", "Image", "Récupération", "Historique", "Journal", "Cache", "Tampon", "Coffre", "Stockage", "Vidage"]
        },
        {
            fr: "Base de données",
            en: "Database",
            hardEn: ["Data store", "Repository", "Archive", "Data warehouse", "Table", "Dataset", "Server", "Cluster", "Registry", "Cache", "Pool", "Storage", "Library", "Index", "Catalog"],
            hardFr: ["Entrepôt de données", "Dépôt", "Archive", "Table", "Jeu de données", "Serveur", "Cluster", "Registre", "Cache", "Pool", "Stockage", "Bibliothèque", "Index", "Catalogue", "Fichier"]
        },
        {
            fr: "Flux de données",
            en: "Data flow",
            hardEn: ["Data stream", "Data transfer", "Data pipe", "Data traffic", "Bandwidth", "Data loop", "Pipeline", "Packet", "Feed", "Channel", "Transmission", "Signal", "Query", "Batch", "Relay"],
            hardFr: ["Flux continu", "Transfert de données", "Canal de données", "Trafic", "Bande passante", "Boucle de données", "Pipeline", "Paquet", "Flux", "Canal", "Transmission", "Signal", "Requête", "Lot", "Relais"]
        },
        {
            fr: "Stockage de données",
            en: "Data storage",
            hardEn: ["Data retention", "Data archive", "Memory", "Database", "Cache", "Disk space", "Warehouse", "Vault", "Repository", "Holding", "Buffer", "Cloud", "Pool", "Drive", "Container"],
            hardFr: ["Rétention de données", "Archive de données", "Mémoire", "Base de données", "Cache", "Espace disque", "Entrepôt", "Coffre", "Dépôt", "Tampon", "Cloud", "Pool", "Disque", "Conteneur", "Registre"]
        },
        {
            fr: "Pare-feu",
            en: "Firewall",
            hardEn: ["Gateway", "Router", "Proxy", "Shield", "Filter", "Security wall", "Barrier", "Guard", "Blocker", "Defense", "Monitor", "Validator", "Checker", "Scanner", "Secure link"],
            hardFr: ["Passerelle", "Routeur", "Proxy", "Bouclier", "Filtre", "Mur de sécurité", "Barrière", "Garde", "Bloqueur", "Défense", "Moniteur", "Validateur", "Vérificateur", "Scanner", "Lien sécurisé"]
        },
        {
            fr: "Logiciel espion",
            en: "Spyware",
            hardEn: ["Malware", "Adware", "Trojan", "Virus", "Ransomware", "Worm", "Rootkit", "Keylogger", "Tracker", "Infection", "Backdoor", "Exploit", "Payload", "Threat", "Bot"],
            hardFr: ["Logiciel malveillant", "Publiciel", "Cheval de Troie", "Virus", "Rançongiciel", "Ver", "Rootkit", "Enregistreur de frappe", "Traqueur", "Infection", "Porte dérobée", "Exploit", "Charge utile", "Menace", "Bot"]
        },
        {
            fr: "Bande passante",
            en: "Bandwidth",
            hardEn: ["Data rate", "Throughput", "Capacity", "Speed", "Frequency", "Traffic", "Stream", "Pipeline", "Transfer rate", "Connection speed", "Load", "Limit", "Channel", "Path", "Network speed"],
            hardFr: ["Débit de données", "Rendement", "Capacité", "Vitesse", "Fréquence", "Trafic", "Flux", "Pipeline", "Vitesse de connexion", "Charge", "Limite", "Canal", "Chemin", "Vitesse réseau", "Volume"]
        },
        {
            fr: "Interface de programmation",
            en: "Application Programming Interface - API",
            hardEn: ["Protocol", "SDK", "Framework", "Library", "Endpoint", "Gateway", "Service", "Bridge", "Connector", "Wrapper", "Driver", "Module", "Interface", "Plugin", "Extension"],
            hardFr: ["Protocole", "SDK", "Cadre de travail", "Bibliothèque", "Point de terminaison", "Passerelle", "Service", "Pont", "Connecteur", "Enveloppe", "Pilote", "Module", "Interface", "Plugin", "Extension"]
        },
        {
            fr: "Balise",
            en: "Markup",
            hardEn: ["Tag", "Label", "Token", "Indicator", "Anchor", "Element", "Node", "Attribute", "Selector", "Sign", "Marker", "Badge", "Stamp", "Hook", "Snippet"],
            hardFr: ["Étiquette", "Jeton", "Indicateur", "Ancre", "Élément", "Nœud", "Attribut", "Sélecteur", "Signe", "Marqueur", "Badge", "Tampon", "Crochet", "Extrait", "Pointeur"]
        },
        {
            fr: "Langage binaire",
            en: "Binary language",
            hardEn: ["Machine code", "Assembly", "Low-level language", "Hex code", "Bytecode", "Source code", "Logic language", "Bitstream", "Boolean language", "Raw data", "Digital code", "System code", "Kernel code", "Processor code", "Runtime code"],
            hardFr: ["Code machine", "Assembleur", "Langage bas niveau", "Code hexa", "Bytecode", "Code source", "Langage logique", "Flux de bits", "Langage booléen", "Données brutes", "Code numérique", "Code système", "Code noyau", "Code processeur", "Code d'exécution"]
        },
        {
            fr: "Système de gestion de contenu",
            en: "Content management system - CMS",
            hardEn: ["Framework", "Portal", "Platform", "Publishing tool", "Site builder", "Database", "Repository", "Engine", "Dashboard", "Suite", "Workspace", "Editor", "Manager", "System", "Application"],
            hardFr: ["Cadre de travail", "Portail", "Plateforme", "Outil de publication", "Constructeur de site", "Base de données", "Dépôt", "Moteur", "Tableau de bord", "Suite", "Espace de travail", "Éditeur", "Gestionnaire", "Système", "Application"]
        },
        {
            fr: "Serveur",
            en: "Server/Host",
            hardEn: ["Client", "Node", "Gateway", "Router", "Proxy", "Cluster", "Mainframe", "Terminal", "Peer", "Daemon", "Endpoint", "Container", "Provider", "Broker", "Relay"],
            hardFr: ["Client", "Nœud", "Passerelle", "Routeur", "Proxy", "Cluster", "Ordinateur central", "Terminal", "Pair", "Démon", "Point de terminaison", "Conteneur", "Fournisseur", "Courtier", "Relais"]
        },
        {
            fr: "Service d'hébergement",
            en: "Hosting service",
            hardEn: ["Cloud service", "Server provider", "Data center", "Domain registrar", "ISP", "Storage provider", "Platform service", "Network provider", "Web service", "Colocation", "Virtual server", "Registry", "Deployment tool", "Gateway", "Node provider"],
            hardFr: ["Service cloud", "Fournisseur de serveur", "Centre de données", "Registraire de domaine", "FAI", "Fournisseur de stockage", "Service de plateforme", "Fournisseur réseau", "Service web", "Colocation", "Serveur virtuel", "Registre", "Outil de déploiement", "Passerelle", "Fournisseur de nœuds"]
        },
        {
            fr: "Plan de site / Arborescence",
            en: "Sitemap",
            hardEn: ["Blueprint", "Hierarchy", "Tree view", "Directory", "Navigation", "Flowchart", "Layout", "Structure", "Map", "Index", "Outline", "Matrix", "Schema", "Topology", "Network map"],
            hardFr: ["Plan", "Hiérarchie", "Vue arborescente", "Répertoire", "Navigation", "Organigramme", "Mise en page", "Structure", "Carte", "Index", "Aperçu", "Matrice", "Schéma", "Topologie", "Carte réseau"]
        },
        {
            fr: "Site statique",
            en: "Static site",
            hardEn: ["Dynamic site", "Client-side site", "Landing page", "Single page", "HTML site", "Rendered site", "Simple site", "Basic page", "Template", "Flat site", "Archive page", "Brochure site", "Mirrored site", "Cached site", "View site"],
            hardFr: ["Site dynamique", "Site côté client", "Page de destination", "Page unique", "Site HTML", "Site rendu", "Site simple", "Page de base", "Modèle", "Site plat", "Page d'archive", "Site vitrine", "Site miroir", "Site en cache", "Site de visualisation"]
        },
        {
            fr: "Site dynamique",
            en: "Dynamic site",
            hardEn: ["Static site", "Interactive site", "Web application", "Server-side site", "Database-driven site", "CMS site", "Portal", "Live site", "Active site", "Smart site", "Automated site", "Scripted site", "Rendered site", "Hybrid site", "Custom site"],
            hardFr: ["Site statique", "Site interactif", "Application web", "Site côté serveur", "Site piloté par base de données", "Site CMS", "Portail", "Site en direct", "Site actif", "Site intelligent", "Site automatisé", "Site scripté", "Site rendu", "Site hybride", "Site personnalisé"]
        },
        {
            fr: "Site animé",
            en: "Animated site",
            hardEn: ["Interactive site", "Dynamic site", "Motion site", "Flash site", "Visual site", "Rich media site", "Graphic site", "Multimedia site", "Effect site", "Cinematic site", "Styled site", "Rendered site", "Active site", "Modern site", "Fluid site"],
            hardFr: ["Site interactif", "Site dynamique", "Site en mouvement", "Site Flash", "Site visuel", "Site média riche", "Site graphique", "Site multimédia", "Site à effets", "Site cinématique", "Site stylisé", "Site rendu", "Site actif", "Site moderne", "Site fluide"]
        },
        {
            fr: "Refonte",
            en: "Redesign",
            hardEn: ["Reboot", "Overhaul", "Update", "Upgrade", "Renewal", "Revamp", "Restructuring", "Migration", "Transformation", "Rebuild", "Correction", "Evolution", "Adjustment", "Modification", "Refactoring"],
            hardFr: ["Redémarrage", "Révision complète", "Mise à jour", "Mise à niveau", "Renouvellement", "Modernisation", "Restructuration", "Migration", "Transformation", "Reconstruction", "Correction", "Évolution", "Ajustement", "Modification", "Refactoring"]
        },
        {
            fr: "Charte graphique",
            en: "Graphic charter",
            hardEn: ["Brand guidelines", "Style guide", "Design system", "Visual identity", "UI kit", "Layout rules", "Theme config", "Brand book", "Asset policy", "Design rules", "Color scheme", "Typography guide", "Template", "Specification", "Standard"],
            hardFr: ["Lignes directrices de marque", "Guide de style", "Système de design", "Identité visuelle", "Kit UI", "Règles de mise en page", "Configuration de thème", "Livre de marque", "Politique d'actifs", "Règles de conception", "Palette de couleurs", "Guide typographique", "Modèle", "Spécification", "Standard"]
        },
        {
            fr: "Bannière",
            en: "Banner",
            hardEn: ["Header", "Footer", "Hero", "Sidebar", "Widget", "Ad", "Poster", "Logo", "Badge", "Cover", "Panel", "Framebar", "Strip", "Ribbon", "Overlay"],
            hardFr: ["En-tête", "Pied de page", "Hero", "Barre latérale", "Widget", "Publicité", "Affiche", "Logo", "Badge", "Couverture", "Panneau", "Cadre", "Bande", "Ruban", "Superposition"]
        },
        {
            fr: "Référencement",
            en: "Referencing",
            hardEn: ["Indexing", "Listing", "Cataloging", "Mapping", "Tagging", "Linking", "Ranking", "Scanning", "Tracking", "Searching", "Positioning", "Optimizing", "Filing", "Registering", "Structuring"],
            hardFr: ["Indexation", "Répertoriage", "Catalogage", "Mappage", "Étiquetage", "Liaison", "Classement", "Scan", "Suivi", "Recherche", "Positionnement", "Optimisation", "Classement", "Enregistrement", "Structuration"]
        },
        {
            fr: "Optimisation pour les moteurs de recherche",
            en: "Search Engine Optimization - SEO",
            hardEn: ["Search Engine Advertising - SEA", "Web marketing", "Traffic optimization", "Ranking strategy", "Keyword research", "Site indexing", "Link building", "Content tuning", "Meta optimization", "Search tuning", "Page rank", "Visibility strategy", "Auditing", "Analytics", "Conversion rate"],
            hardFr: ["Référencement payant", "Marketing web", "Optimisation du trafic", "Stratégie de classement", "Recherche de mots-clés", "Indexation de site", "Création de liens", "Optimisation de contenu", "Méta-optimisation", "Paramétrage de recherche", "Classement de page", "Stratégie de visibilité", "Audit", "Analytique", "Taux de conversion"]
        },
        {
            fr: "Référencement payant",
            en: "Search Engine Advertising - SEA",
            hardEn: ["Search Engine Optimization - SEO", "Paid traffic", "Sponsored links", "Ad campaign", "Pay per click", "Web advertising", "Marketing", "Promotion", "Sponsorship", "Paid listing", "Media buy", "Conversion campaign", "Targeting", "Outreach", "Display ad"],
            hardFr: ["Optimisation pour les moteurs de recherche", "Trafic payant", "Liens sponsorisés", "Campagne publicitaire", "Paiement par clic", "Publicité web", "Marketing", "Promotion", "Parrainage", "Annonce payante", "Achat média", "Campagne de conversion", "Ciblage", "Diffusion", "Publicité display"]
        },
        {
            fr: "Référencement abusif",
            en: "Spamdexing",
            hardEn: ["Black hat SEO", "Keyword stuffing", "Scraping", "Cloaking", "Phishing", "Spoofing", "Spamming", "Link spam", "Hidden text", "Doorway pages", "Malvertising", "Abuse", "Violation", "Injection", "Botnet"],
            hardFr: ["Référencement trompeur", "Bourrage de mots-clés", "Scraping", "Cloaking", "Hameçonnage", "Usurpation", "Spam", "Spam de liens", "Texte caché", "Pages portes", "Publicité malveillante", "Abus", "Violation", "Injection", "Botnet"]
        },
        {
            fr: "Réseau Social",
            en: "Social Network",
            hardEn: ["Community platform", "Media network", "Forum", "Chat room", "Collaboration tool", "Microblog", "Feed network", "Social media", "Groupware", "Portal", "Directory", "Hub", "Exchange", "Board", "Cluster"],
            hardFr: ["Plateforme communautaire", "Réseau média", "Forum", "Salon de discussion", "Outil collaboratif", "Microblog", "Réseau de flux", "Médias sociaux", "Logiciel de groupe", "Portail", "Répertoire", "Hub", "Échange", "Tableau", "Cluster"]
        },
        {
            fr: "Protocole de transfert de fichier",
            en: "File Transfer Protocol",
            hardEn: ["Secure Shell", "Hypertext Transfer Protocol", "Data Protocol", "Network Protocol", "Stream Protocol", "Transmission Control Protocol", "Routing Protocol", "Session Protocol", "Storage Protocol", "Api Protocol", "Socket Protocol", "Relay Protocol", "Bridge Protocol", "Layer Protocol", "Packet Protocol"],
            hardFr: ["SSH", "Protocole HTTP", "Protocole de données", "Protocole réseau", "Protocole de flux", "TCP", "Protocole de routage", "Protocole de session", "Protocole de stockage", "Protocole API", "Protocole de socket", "Protocole de relais", "Protocole de pont", "Protocole de couche", "Protocole de paquets"]
        },
        {
            fr: "Transfert de fichier",
            en: "File transfer",
            hardEn: ["File sharing", "File upload", "File download", "Data transmission", "File copy", "File migration", "Data sync", "File stream", "Payload delivery", "File transit", "Batch transfer", "Storage move", "Backup copy", "Network push", "Channel send"],
            hardFr: ["Partage de fichier", "Téléversement", "Téléchargement", "Transmission de données", "Copie de fichier", "Migration de fichier", "Synchronisation de données", "Flux de fichier", "Livraison de charge", "Transit de fichier", "Transfert par lot", "Déplacement de stockage", "Copie de sauvegarde", "Poussée réseau", "Envoi de canal"]
        },
        {
            fr: "Partage de fichier",
            en: "File sharing",
            hardEn: ["File transfer", "File sync", "File exchange", "Peer-to-peer", "Collaboration", "Cloud storage", "Data distribution", "File hosting", "Access granting", "Network pool", "Public folder", "Repository", "Stream", "Broadcast", "Relay"],
            hardFr: ["Transfert de fichier", "Synchronisation de fichiers", "Échange de fichiers", "Pair à pair", "Collaboration", "Stockage cloud", "Distribution de données", "Hébergement de fichiers", "Octroi d'accès", "Pool réseau", "Dossier public", "Dépôt", "Flux", "Diffusion", "Relais"]
        },
        {
            fr: "Télécharger",
            en: "To download/To upload",
            hardEn: ["To transfer", "To sync", "To stream", "To fetch", "To retrieve", "To push", "To pull", "To export", "To import", "To save", "To load", "To transmit", "To broadcast", "To cache", "To mirror"],
            hardFr: ["Transférer", "Synchroniser", "Diffuser en continu", "Récupérer", "Extraire", "Pousser", "Tirer", "Exporter", "Importer", "Enregistrer", "Charger", "Transmettre", "Diffuser", "Mettre en cache", "Miroiter"]
        },
        {
            fr: "Visite virtuelle",
            en: "Virtual visit",
            hardEn: ["3D tour", "Interactive walk", "Simulation", "Digital twin", "Cyber tour", "Online view", "Panorama", "Remote tour", "Immersive view", "Mockup tour", "Visual walkthrough", "Graphics tour", "Web tour", "Render tour", "Model view"],
            hardFr: ["Visite 3D", "Promenade interactive", "Simulation", "Jumeau numérique", "Cyber visite", "Vue en ligne", "Panorama", "Visite à distance", "Vue immersive", "Visite maquette", "Visite guidée visuelle", "Visite graphique", "Visite web", "Visite rendue", "Vue modèle"]
        },
        {
            fr: "Objet interactif",
            en: "Interactive object",
            hardEn: ["UI component", "Dynamic element", "Widget", "Active node", "Clickable item", "Smart object", "Interface element", "Control", "Module", "Asset", "Component", "Trigger", "Hook", "Token", "Node"],
            hardFr: ["Composant UI", "Élément dynamique", "Widget", "Nœud actif", "Élément cliquable", "Objet intelligent", "Élément d'interface", "Contrôle", "Module", "Actif", "Composant", "Déclencheur", "Crochet", "Jeton", "Nœud"]
        },
        {
            fr: "Interface utilisateur graphique",
            en: "Graphic user interface",
            hardEn: ["Command Line Interface", "User Experience", "Visual Interface", "Screen layout", "Dashboard", "Display system", "Frontend layout", "Graphic panel", "Design interface", "Window manager", "Workspace", "Control panel", "Client view", "Platform UI", "Skin system"],
            hardFr: ["Interface en ligne de commande", "Expérience utilisateur", "Interface visuelle", "Mise en page", "Tableau de bord", "Système d'affichage", "Mise en page frontend", "Panneau graphique", "Interface de conception", "Gestionnaire de fenêtres", "Espace de travail", "Panneau de contrôle", "Vue client", "UI de plateforme", "Système de skin"]
        },
        {
            fr: "Prototype d'interface utilisateur",
            en: "Mock-up",
            hardEn: ["Wireframe", "Blueprint", "Template", "Draft", "Sketch", "Model", "Sample", "Prototype", "Layout", "Preview", "Simulation", "Rendering", "Concept", "Schema", "Test build"],
            hardFr: ["Maquette filaire", "Plan", "Modèle", "Brouillon", "Esquisse", "Modèle réduit", "Échantillon", "Prototype", "Mise en page", "Aperçu", "Simulation", "Rendu", "Concept", "Schéma", "Version de test"]
        },
        {
            fr: "Expérience utilisateur",
            en: "User experience",
            hardEn: ["User interface", "Customer journey", "Usability", "User satisfaction", "Interaction design", "User feedback", "Engagement", "User flow", "Ergonomics", "User testing", "Customer experience", "Product design", "Service design", "Utility", "Accessibility"],
            hardFr: ["Interface utilisateur", "Parcours client", "Ergonomie", "Satisfaction utilisateur", "Design d'interaction", "Retour utilisateur", "Engagement", "Flux utilisateur", "Ergonomie", "Test utilisateur", "Expérience client", "Design produit", "Design de service", "Utilité", "Accessibilité"]
        },
        {
            fr: "Maquette fonctionnelle d'un site",
            en: "Wireframe",
            hardEn: ["Mock-up", "Prototype", "Blueprint", "Layout", "Sketch", "Draft", "Schema", "Architecture map", "Template", "Structure plan", "Flowchart", "Framework", "Outline", "Model", "Canvas"],
            hardFr: ["Maquette visuelle", "Prototype", "Plan", "Mise en page", "Esquisse", "Brouillon", "Schéma", "Carte d'architecture", "Modèle", "Plan de structure", "Organigramme", "Cadre de travail", "Aperçu", "Modèle", "Canevas"]
        }
    ],
    intermediaire: [
        {
            fr: "Déclarer une variable en langage java",
            en: "Declare a variable in java language",
            hardEn: ["Define a constant in java language", "Initialize a variable in java language", "Declare a parameter in java language", "Assign a variable in java language", "Create a variable in c++ language", "Declare a method in java language", "Instantiate an object in java language", "Register a variable in java language", "Call a variable in java language", "Store a variable in java language", "Process a variable in java language", "Compile a variable in java language", "Return a variable in java language", "Delete a variable in java language", "Print a variable in java language"],
            hardFr: ["Définir une constante en langage java", "Initialiser une variable en langage java", "Déclarer un paramètre en langage java", "Assigner une variable en langage java", "Créer une variable en langage c++", "Déclarer une méthode en langage java", "Instancier un objet en langage java", "Enregistrer une variable en langage java", "Appeler une variable en langage java", "Stocker une variable en langage java", "Traiter une variable en langage java", "Compiler une variable en langage java", "Retourner une variable en langage java", "Supprimer une variable en langage java", "Afficher une variable en langage java"]
        },
        {
            fr: "Utiliser des tableaux pour stocker plusieurs valeurs dans une seule variable",
            en: "Use arrays to store multiple values in a single variable",
            hardEn: ["Use lists to store single values in multiple variables", "Use objects to store multiple values in a single variable", "Use arrays to retrieve multiple values in a single variable", "Use loops to store multiple values in a single variable", "Use strings to store multiple values in a single variable", "Use matrices to store single values", "Use arrays to store one value in multiple variables", "Use functions to store multiple values", "Use pointers to store multiple values", "Use collections to store single values", "Use maps to store multiple values", "Use queues to store multiple values", "Use stacks to store multiple values", "Use buffers to store multiple values", "Use records to store multiple values"],
            hardFr: ["Utiliser des listes pour stocker des valeurs uniques dans de multiples variables", "Utiliser des objets pour stocker plusieurs valeurs dans une seule variable", "Utiliser des tableaux pour récupérer plusieurs valeurs dans une seule variable", "Utiliser des boucles pour stocker plusieurs valeurs dans une seule variable", "Utiliser des chaînes pour stocker plusieurs valeurs dans une seule variable", "Utiliser des matrices pour stocker des valeurs uniques", "Utiliser des tableaux pour stocker une valeur dans de multiples variables", "Utiliser des fonctions pour stocker plusieurs valeurs", "Utiliser des pointeurs pour stocker plusieurs valeurs", "Utiliser des collections pour stocker des valeurs uniques", "Utiliser des tables de hachage pour stocker plusieurs valeurs", "Utiliser des files d'attente pour stocker plusieurs valeurs", "Utiliser des piles pour stocker plusieurs valeurs", "Utiliser des tampons pour stocker plusieurs valeurs", "Utiliser des enregistrements pour stocker plusieurs valeurs"]
        },
        {
            fr: "Créer une chaîne en java",
            en: "Create a string in java",
            hardEn: ["Create a loop in java", "Create an array in java", "Build a string in java", "Generate a string in java", "Define a string in java", "Construct a string in java", "Create a variable in java", "Initialize a string in java", "Output a string in java", "Process a string in java", "Parse a string in java", "Format a string in java", "Concatenate a string in java", "Split a string in java", "Convert a string in java"],
            hardFr: ["Créer une boucle en java", "Créer un tableau en java", "Construire une chaîne en java", "Générer une chaîne en java", "Définir une chaîne en java", "Créer une variable en java", "Initialiser une chaîne en java", "Afficher une chaîne en java", "Traiter une chaîne en java", "Compiler une chaîne en java", "Analyser une chaîne en java", "Formater une chaîne en java", "Concaténer une chaîne en java", "Diviser une chaîne en java", "Convertir une chaîne en java"]
        },
        {
            fr: "Exécuter des boucles",
            en: "Execute loops",
            hardEn: ["Run loops", "Perform loops", "Implement loops", "Build loops", "Process loops", "Iterate loops", "Design loops", "Evaluate loops", "Compile loops", "Terminate loops", "Start loops", "Break loops", "Continue loops", "Dispatch loops", "Optimize loops"],
            hardFr: ["Lancer des boucles", "Effectuer des boucles", "Implémenter des boucles", "Construire des boucles", "Traiter des boucles", "Itérer des boucles", "Concevoir des boucles", "Évaluer des boucles", "Compiler des boucles", "Terminer des boucles", "Démarrer des boucles", "Interrompre des boucles", "Continuer des boucles", "Répartir des boucles", "Optimiser des boucles"]
        },
        {
            fr: "Effectuer une opération d'entrée ou de sortie",
            en: "Perform an input or output operation",
            hardEn: ["Perform an internal or external operation", "Execute a read or write operation", "Run an input or output process", "Handle an entry or exit task", "Process an input or output stream", "Manage an input or output request", "Test an input or output module", "Design an input or output system", "Call an input or output function", "Initiate an input or output command", "Secure an input or output channel", "Validate an input or output parameter", "Parse an input or output data", "Buffer an input or output block", "Log an input or output event"],
            hardFr: ["Effectuer une opération interne ou externe", "Exécuter une opération de lecture ou d'écriture", "Lancer un processus d'entrée ou de sortie", "Gérer une tâche d'entrée ou de sortie", "Traiter un flux d'entrée ou de sortie", "Gérer une requête d'entrée ou de sortie", "Tester un module d'entrée ou de sortie", "Concevoir un système d'entrée ou de sortie", "Appeler une fonction d'entrée ou de sortie", "Initier une commande d'entrée ou de sortie", "Sécuriser un canal d'entrée ou de sortie", "Valider un paramètre d'entrée ou de sortie", "Analyser des données d'entrée ou de sortie", "Mettre en tampon un bloc d'entrée ou de sortie", "Enregistrer un événement d'entrée ou de sortie"]
        },
        {
            fr: "Traiter une information représentée sous sa forme binaire",
            en: "Process a binary information",
            hardEn: ["Manage a digital information", "Analyze a binary data", "Convert a binary information", "Handle a binary stream", "Execute a binary process", "Store a binary information", "Decode a binary data", "Evaluate a binary format", "Compute a binary input", "Transform a binary signal", "Parse a binary structure", "Compile a binary file", "Transmit a binary packet", "Filter a binary transmission", "Read a binary sequence"],
            hardFr: ["Gérer une information numérique", "Analyser des données binaires", "Convertir une information binaire", "Gérer un flux binaire", "Exécuter un processus binaire", "Stocker une information binaire", "Décoder des données binaires", "Évaluer un format binaire", "Calculer une entrée binaire", "Transformer un signal binaire", "Analyser une structure binaire", "Compiler un fichier binaire", "Transmettre un paquet binaire", "Filtrer une transmission binaire", "Lire une séquence binaire"]
        },
        {
            fr: "Comprendre les principaux livrables, les jalons, ainsi que les rôles et les responsabilités de chaque personne impliquée dans une charte de projet",
            en: "Understand the main deliverables, milestones, as well as the roles and responsibilities of each person involved in a project charter",
            hardEn: ["Define the main deliverables and milestones of a project", "Analyze project roles and responsibilities", "Review project charter guidelines", "Manage deliverables and milestones", "Identify project participants and roles", "Outline project deliverables and timeline", "Assess project responsibilities", "Supervise project execution", "Draft project charter documents", "Establish project milestones", "Coordinate project team members", "Evaluate project performance", "Monitor project tasks", "Implement project governance", "Audit project deliverables"],
            hardFr: ["Définir les principaux livrables et jalons d'un projet", "Analyser les rôles et responsabilités du projet", "Examiner les directives de la charte de projet", "Gérer les livrables et les jalons", "Identifier les participants et rôles du projet", "Esquisser les livrables et le calendrier du projet", "Évaluer les responsabilités du projet", "Superviser l'exécution du projet", "Rédiger les documents de la charte de projet", "Établir les jalons du projet", "Coordonner les membres de l'équipe projet", "Évaluer la performance du projet", "Surveiller les tâches du projet", "Mettre en œuvre la gouvernance du projet", "Auditer les livrables du projet"]
        },
        {
            fr: "Utiliser les opérateurs booléens pour réduire, étendre ou affiner les résultats de recherche",
            en: "Use Boolean operators to narrow, expand, or refine search results",
            hardEn: ["Use search filters to organize results", "Apply boolean logic to sort data", "Refine search queries using keywords", "Expand search criteria using parameters", "Narrow down database queries", "Manage search results with operators", "Optimize search algorithms", "Process query parameters", "Evaluate search outputs", "Customize search filters", "Analyze search trends", "Filter dataset parameters", "Configure search settings", "Implement search queries", "Execute boolean functions"],
            hardFr: ["Utiliser des filtres de recherche pour organiser les résultats", "Appliquer la logique booléenne pour trier les données", "Affiner les requêtes de recherche à l'aide de mots-clés", "Élargir les critères de recherche à l'aide de paramètres", "Restreindre les requêtes de base de données", "Gérer les résultats de recherche avec des opérateurs", "Optimiser les algorithmes de recherche", "Traiter les paramètres de requête", "Évaluer les résultats de recherche", "Personnaliser les filtres de recherche", "Analyser les tendances de recherche", "Filtrer les paramètres de l'ensemble de données", "Configurer les paramètres de recherche", "Implémenter des requêtes de recherche", "Exécuter des fonctions booléennes"]
        },
        {
            fr: "Créer une procédure stockée dans une base de données",
            en: "Create a stored procedure in a database",
            hardEn: ["Create a dynamic query in a database", "Build a stored function in a database", "Design a stored procedure in a database", "Implement a trigger in a database", "Generate a procedure in a database", "Execute a stored procedure in a database", "Deploy a stored procedure in a database", "Write a stored procedure in a database", "Modify a stored procedure in a database", "Drop a stored procedure in a database", "Compile a stored procedure in a database", "Test a stored procedure in a database", "Optimize a stored procedure in a database", "Debug a stored procedure in a database", "Migrate a stored procedure in a database"],
            hardFr: ["Créer une requête dynamique dans une base de données", "Construire une fonction stockée dans une base de données", "Concevoir une procédure stockée dans une base de données", "Implémenter un déclencheur dans une base de données", "Générer une procédure dans une base de données", "Exécuter une procédure stockée dans une base de données", "Déployer une procédure stockée dans une base de données", "Écrire une procédure stockée dans une base de données", "Modifier une procédure stockée dans une base de données", "Supprimer une procédure stockée dans une base de données", "Compiler une procédure stockée dans une base de données", "Tester une procédure stockée dans une base de données", "Optimiser une procédure stockée dans une base de données", "Déboguer une procédure stockée dans une base de données", "Migrer une procédure stockée dans une base de données"]
        },
        {
            fr: "Utiliser les algorithmes les plus efficaces possibles pour résoudre des problèmes",
            en: "Use the most efficient algorithms possible to solve problems",
            hardEn: ["Develop complex algorithms for coding", "Optimize software performance", "Find solutions using basic logic", "Select optimal data structures", "Analyze system performance", "Implement functional solutions", "Design reliable architectures", "Process computational logic", "Evaluate problem-solving methods", "Code efficient solutions", "Manage computational tasks", "Refactor system code", "Test algorithmic logic", "Deploy optimized scripts", "Streamline code execution"],
            hardFr: ["Développer des algorithmes complexes pour le codage", "Optimiser la performance logicielle", "Trouver des solutions en utilisant une logique de base", "Sélectionner des structures de données optimales", "Analyser la performance du système", "Implémenter des solutions fonctionnelles", "Concevoir des architectures fiables", "Traiter la logique computationnelle", "Évaluer les méthodes de résolution de problèmes", "Coder des solutions efficaces", "Gérer les tâches de calcul", "Refactoriser le code système", "Tester la logique algorithmique", "Déployer des scripts optimisés", "Rationaliser l'exécution du code"]
        },
        {
            fr: "Développer des solutions logicielles fiables et fonctionnelles",
            en: "Develop reliable and functional software solutions",
            hardEn: ["Design secure hardware systems", "Implement basic code structures", "Test software applications", "Maintain database integrity", "Create user interfaces", "Deploy cloud solutions", "Manage software projects", "Optimize system performance", "Analyze user requirements", "Build scalable applications", "Review software architecture", "Support software systems", "Integrate software modules", "Upgrade existing programs", "Ensure code quality"],
            hardFr: ["Concevoir des systèmes matériels sécurisés", "Implémenter des structures de code de base", "Tester des applications logicielles", "Maintenir l'intégrité de la base de données", "Créer des interfaces utilisateur", "Déployer des solutions cloud", "Gérer des projets logiciels", "Optimiser la performance du système", "Analyser les besoins des utilisateurs", "Construire des applications évolutives", "Examiner l'architecture logicielle", "Prendre en charge les systèmes logiciels", "Intégrer des modules logiciels", "Mettre à niveau des programmes existants", "Garantir la qualité du code"]
        },
        {
            fr: "Se positionner comme expert technique",
            en: "Position oneself as a technical expert",
            hardEn: ["Act as a project manager", "Provide technical support", "Lead software development", "Consult on system architecture", "Demonstrate technical skills", "Manage technical teams", "Establish technical standards", "Evaluate technical solutions", "Advise on software choices", "Coordinate technical tasks", "Supervise code reviews", "Guide technical strategy", "Promote coding best practices", "Perform technical audits", "Represent engineering teams"],
            hardFr: ["Agir en tant que chef de projet", "Fournir un support technique", "Diriger le développement logiciel", "Conseiller sur l'architecture système", "Démontrer des compétences techniques", "Gérer des équipes techniques", "Établir des normes techniques", "Évaluer des solutions techniques", "Conseiller sur les choix logiciels", "Coordonner des tâches techniques", "Superviser les revues de code", "Guider la stratégie technique", "Promouvoir les bonnes pratiques de codage", "Effectuer des audits techniques", "Représenter les équipes d'ingénierie"]
        },
        {
            fr: "Gérer et optimiser la base de données",
            en: "Manage and optimize the database",
            hardEn: ["Design system architecture", "Deploy server applications", "Monitor network traffic", "Secure software systems", "Analyze data flows", "Maintain server integrity", "Configure database backups", "Scale cloud storage", "Query database structures", "Index database tables", "Cleanup database records", "Synchronize database nodes", "Migrate database systems", "Audit database security", "Troubleshoot database errors"],
            hardFr: ["Concevoir l'architecture système", "Déployer des applications serveur", "Surveiller le trafic réseau", "Sécuriser les systèmes logiciels", "Analyser les flux de données", "Maintenir l'intégrité du serveur", "Configurer les sauvegardes de base de données", "Mettre à l'échelle le stockage cloud", "Interroger les structures de base de données", "Indexer les tables de base de données", "Nettoyer les enregistrements de base de données", "Synchroniser les nœuds de base de données", "Migrer les systèmes de base de données", "Auditer la sécurité de la base de données", "Résoudre les erreurs de base de données"]
        },
        {
            fr: "Réaliser une étude logicielle",
            en: "Conduct a software study",
            hardEn: ["Perform a code review", "Write technical specifications", "Analyze system requirements", "Test software performance", "Evaluate software tools", "Design software architecture", "Manage software development", "Assess project feasibility", "Audit software security", "Inspect software bugs", "Investigate technical issues", "Plan software releases", "Document software features", "Benchmark software options", "Research development frameworks"],
            hardFr: ["Effectuer une revue de code", "Rédiger des spécifications techniques", "Analyser les exigences du système", "Tester la performance logicielle", "Évaluer les outils logiciels", "Concevoir l'architecture logicielle", "Gérer le développement logiciel", "Évaluer la faisabilité du projet", "Auditer la sécurité logicielle", "Inspecter les bugs logiciels", "Investiguer les problèmes techniques", "Planifier les versions logicielles", "Documenter les fonctionnalités logicielles", "Comparer les options logicielles", "Rechercher des cadres de développement"]
        },
        {
            fr: "Concevoir l'architecture des applications",
            en: "Design application architecture",
            hardEn: ["Build application databases", "Develop user interfaces", "Configure application servers", "Deploy software packages", "Manage application pipelines", "Write source code", "Test application security", "Optimize application performance", "Document system design", "Structure application modules", "Plan application deployment", "Integrate application services", "Maintain application code", "Review system requirements", "Define software frameworks"],
            hardFr: ["Construire des bases de données d'applications", "Développer des interfaces utilisateur", "Configurer des serveurs d'applications", "Déployer des paquets logiciels", "Gérer les pipelines d'applications", "Écrire du code source", "Tester la sécurité des applications", "Optimiser la performance des applications", "Documenter la conception du système", "Structurer les modules d'application", "Planifier le déploiement d'applications", "Intégrer des services d'application", "Maintenir le code de l'application", "Examiner les exigences du système", "Définir les cadres logiciels"]
        },
        {
            fr: "Assurer la gestion des données",
            en: "Ensure data management",
            hardEn: ["Secure database servers", "Monitor network data", "Process information streams", "Backup system files", "Analyze database queries", "Optimize storage systems", "Maintain data integrity", "Control data access", "Structure data models", "Validate data inputs", "Synchronize data nodes", "Archive old records", "Clean database tables", "Manage data flows", "Govern data policies"],
            hardFr: ["Sécuriser les serveurs de base de données", "Surveiller les données réseau", "Traiter les flux d'informations", "Sauvegarder les fichiers système", "Analyser les requêtes de base de données", "Optimiser les systèmes de stockage", "Maintenir l'intégrité des données", "Contrôler l'accès aux données", "Structurer les modèles de données", "Valider les entrées de données", "Synchroniser les nœuds de données", "Archiver les anciens enregistrements", "Nettoyer les tables de base de données", "Gérer les flux de données", "Gouverner les politiques de données"]
        },
        {
            fr: "Sécuriser les applications",
            en: "Secure applications",
            hardEn: ["Deploy network firewalls", "Encrypt system databases", "Patch software vulnerabilities", "Audit application code", "Configure user permissions", "Monitor security logs", "Protect data streams", "Implement authentication protocols", "Prevent software exploits", "Test application security", "Manage security policies", "Validate input data", "Defend against malware", "Isolate network segments", "Harden server configurations"],
            hardFr: ["Déployer des pare-feu réseau", "Chiffrer les bases de données système", "Corriger les vulnérabilités logicielles", "Auditer le code des applications", "Configurer les permissions des utilisateurs", "Surveiller les journaux de sécurité", "Protéger les flux de données", "Mettre en œuvre des protocoles d'authentification", "Prévenir les exploits logiciels", "Tester la sécurité des applications", "Gérer les politiques de sécurité", "Valider les données d'entrée", "Défendre contre les logiciels malveillants", "Isoler les segments réseau", "Durcir les configurations serveur"]
        },
        {
            fr: "Implémenter des solutions logicielles",
            en: "Implement software solutions",
            hardEn: ["Design software systems", "Test software applications", "Deploy software packages", "Develop code modules", "Integrate software tools", "Maintain software programs", "Configure software environments", "Upgrade software versions", "Analyze software requirements", "Troubleshoot software errors", "Optimize software performance", "Document software features", "Manage software projects", "Build functional programs", "Release software updates"],
            hardFr: ["Concevoir des systèmes logiciels", "Tester des applications logicielles", "Déployer des paquets logiciels", "Développer des modules de code", "Intégrer des outils logiciels", "Maintenir des programmes logiciels", "Configurer des environnements logiciels", "Mettre à niveau des versions logicielles", "Analyser les exigences logicielles", "Résoudre les erreurs logicielles", "Optimiser la performance logicielle", "Documenter les fonctionnalités logicielles", "Gérer des projets logiciels", "Construire des programmes fonctionnels", "Publier des mises à jour logicielles"]
        },
        {
            fr: "Créer des programmes",
            en: "Build programs",
            hardEn: ["Write source code", "Compile software projects", "Design application logic", "Develop software systems", "Generate executable files", "Construct application scripts", "Produce code libraries", "Assemble software components", "Formulate program algorithms", "Program system functions", "Establish code structures", "Set up development tools", "Draft software blueprints", "Craft application modules", "Initiate coding tasks"],
            hardFr: ["Écrire du code source", "Compiler des projets logiciels", "Concevoir la logique applicative", "Développer des systèmes logiciels", "Générer des fichiers exécutables", "Construire des scripts d'application", "Produire des bibliothèques de code", "Assembler des composants logiciels", "Formuler des algorithmes de programme", "Programmer des fonctions système", "Établir des structures de code", "Configurer des outils de développement", "Rédiger des plans logiciels", "Concevoir des modules d'application", "Initier des tâches de codage"]
        },
        {
            fr: "Écrire et tester le code",
            en: "Write and test code",
            hardEn: ["Develop and deploy code", "Compile and run code", "Design and review code", "Debug and fix code", "Analyze and optimize code", "Refactor and update code", "Inspect and verify code", "Document and test code", "Build and ship code", "Create and run unit tests", "Check and validate code", "Execute and monitor code", "Program and evaluate code", "Draft and check code", "Implement and test algorithms"],
            hardFr: ["Développer et déployer le code", "Compiler et exécuter le code", "Concevoir et réviser le code", "Déboguer et corriger le code", "Analyser et optimiser le code", "Refactoriser et mettre à jour le code", "Inspecter et vérifier le code", "Documenter et tester le code", "Construire et livrer le code", "Créer et exécuter des tests unitaires", "Vérifier et valider le code", "Exécuter et surveiller le code", "Programmer et évaluer le code", "Rédiger et vérifier le code", "Implémenter et tester des algorithmes"]
        },
        {
            fr: "Collaborer avec des développeurs",
            en: "Collaborate with developers",
            hardEn: ["Manage development teams", "Communicate with project managers", "Work with database administrators", "Partner with system engineers", "Coordinate with software testers", "Assist junior programmers", "Sync with engineering leads", "Contradict developer inputs", "Isolate development tasks", "Direct programming staff", "Supervise code contributors", "Review peer code", "Share programming tasks", "Align with tech teams", "Support development workflows"],
            hardFr: ["Gérer des équipes de développement", "Communiquer avec les chefs de projet", "Travailler avec des administrateurs de bases de données", "S'associer à des ingénieurs système", "Coordonner avec des testeurs logiciels", "Aider les programmeurs juniors", "Se synchroniser avec les leads techniques", "Contredire les apports des développeurs", "Isoler les tâches de développement", "Diriger le personnel de programmation", "Superviser les contributeurs de code", "Réviser le code des pairs", "Partager les tâches de programmation", "S'aligner avec les équipes techniques", "Soutenir les flux de développement"]
        },
        {
            fr: "Utiliser des outils de développement",
            en: "Use development tools",
            hardEn: ["Deploy production servers", "Configure network routers", "Operate testing software", "Install operating systems", "Manage database systems", "Utilize code editors", "Run command line tools", "Handle version control", "Build compilation scripts", "Launch debugging utilities", "Setup development environments", "Monitor system performance", "Analyze software logs", "Access cloud platforms", "Integrate software plugins"],
            hardFr: ["Déployer des serveurs de production", "Configurer des routeurs réseau", "Exploiter des logiciels de test", "Installer des systèmes d'exploitation", "Gérer des systèmes de bases de données", "Utiliser des éditeurs de code", "Exécuter des outils en ligne de commande", "Gérer le contrôle de version", "Créer des scripts de compilation", "Lancer des utilitaires de débogage", "Configurer des environnements de développement", "Surveiller la performance du système", "Analyser les journaux logiciels", "Accéder aux plateformes cloud", "Intégrer des plugins logiciels"]
        },
        {
            fr: "Créer des applications ergonomiques",
            en: "Create ergonomic applications",
            hardEn: ["Design user-friendly interfaces", "Build responsive layouts", "Develop intuitive software", "Optimize user experience", "Construct accessible applications", "Implement clean UI designs", "Produce user-centric software", "Formulate seamless navigation", "Craft efficient interfaces", "Program user-friendly tools", "Establish accessibility standards", "Enhance app usability", "Refine user workflows", "Shape intuitive software", "Design comfortable interfaces"],
            hardFr: ["Concevoir des interfaces conviviales", "Construire des mises en page adaptatives", "Développer des logiciels intuitifs", "Optimiser l'expérience utilisateur", "Construire des applications accessibles", "Implémenter des designs d'UI épurés", "Produire des logiciels centrés utilisateur", "Formuler une navigation fluide", "Créer des interfaces efficaces", "Programmer des outils conviviaux", "Établir des normes d'accessibilité", "Améliorer l'ergonomie des applications", "Affiner les flux utilisateurs", "Façonner des logiciels intuitifs", "Concevoir des interfaces confortables"]
        },
        {
            fr: "Ecouter, analyser et rédiger les besoins",
            en: "Listen, analyze and write needs",
            hardEn: ["Gather, process and document requirements", "Hear, review and publish specifications", "Collect, evaluate and format goals", "Capture, study and author use cases", "Listen, break down and outline requests", "Observe, assess and formulate demands", "Record, inspect and structure expectations", "Attend, interpret and write guidelines", "Hear, dissect and draft deliverables", "Understand, map and compile objectives", "Collect, judge and draft proposals", "Listen, compute and author standards", "Consult, analyze and log requirements", "Review, synthesize and write criteria", "Gather, study and document features"],
            hardFr: ["Recueillir, traiter et documenter les exigences", "Écouter, examiner et publier des spécifications", "Collecter, évaluer et formater des objectifs", "Capturer, étudier et rédiger des cas d'utilisation", "Écouter, décomposer et esquisser des demandes", "Observer, évaluer et formuler des exigences", "Enregistrer, inspecter et structurer les attentes", "Assister, interpréter et rédiger des directives", "Écouter, disséquer et rédiger des livrables", "Comprendre, cartographier et compiler des objectifs", "Collecter, juger et rédiger des propositions", "Écouter, calculer et rédiger des normes", "Consulter, analyser et consigner les exigences", "Examiner, synthétiser et rédiger des critères", "Recueillir, étudier et documenter des fonctionnalités"]
        },
        {
            fr: "Être garant de la pérennité et de l'évolution des solutions",
            en: "To guarantee the sustainability and evolution of solutions",
            hardEn: ["To ensure the stability and growth of systems", "To secure the durability and update of software", "To maintain the longevity and progress of programs", "To protect the permanence and scaling of applications", "To uphold the sustainability and development of tech", "To validate the continuity and enhancement of tools", "To support the resilience and expansion of platforms", "To safeguard the persistence and adaptation of code", "To oversee the lifetime and redesign of services", "To champion the viability and modernization of systems", "To guarantee the reliability and scaling of software", "To ensure the continuity and upgrading of solutions", "To secure the sustainability and transition of apps", "To maintain the longevity and improvement of platforms", "To protect the permanence and maturation of systems"],
            hardFr: ["Assurer la stabilité et la croissance des systèmes", "Sécuriser la durabilité et la mise à jour des logiciels", "Maintenir la longévité et le progrès des programmes", "Protéger la permanence et le passage à l'échelle des applications", "Soutenir la durabilité et le développement de la tech", "Valider la continuité et l'amélioration des outils", "Soutenir la résilience et l'expansion des plateformes", "Sauvegarder la persistance et l'adaptation du code", "Superviser la durée de vie et la refonte des services", "Défendre la viabilité et la modernisation des systèmes", "Garantir la fiabilité et le passage à l'échelle des logiciels", "Assurer la continuité et la mise à niveau des solutions", "Sécuriser la durabilité et la transition des applications", "Maintenir la longévité et l'amélioration des plateformes", "Protéger la permanence et la maturation des systèmes"]
        },
        {
            fr: "Respecter les délais, les coûts et la qualité",
            en: "Meet deadlines, costs and quality",
            hardEn: ["Respect schedules, budgets and standards", "Achieve timelines, expenses and excellence", "Fulfill targets, pricing and craftsmanship", "Maintain timespans, funding and grade", "Honor periods, finances and specifications", "Deliver on time, budget and expectations", "Manage schedules, resources and worth", "Control timetables, investments and value", "Balance timeframes, capitals and refinement", "Sustain deadlines, outlays and virtues", "Attain time limits, fiscal plans and purity", "Observe schedules, expenditures and prestige", "Preserve timelines, budgets and metrics", "Satisfy time limits, economics and rigor", "Accomplish schedules, bills and goodness"],
            hardFr: ["Respecter les plannings, budgets et normes", "Atteindre les échéances, dépenses et l'excellence", "Remplir les objectifs, la tarification et l'artisanat", "Maintenir les durées, le financement et le grade", "Honorer les périodes, les finances et les spécifications", "Livrer dans les temps, le budget et les attentes", "Gérer les plannings, les ressources et la valeur", "Contrôler les calendriers, les investissements et la valeur", "Équilibrer les délais, les capitaux et le raffinement", "Soutenir les délais, les débours et les vertus", "Atteindre les limites de temps, les plans fiscaux et la pureté", "Observer les plannings, les dépenses et le prestige", "Préserver les calendriers, les budgets et les métriques", "Satisfaire les limites de temps, l'économie et la rigueur", "Accomplir les plannings, les factures et la qualité"]
        },
        {
            fr: "Satisfaire les attentes du client",
            en: "Meet client expectations",
            hardEn: ["Fulfill customer requirements", "Satisfy user demands", "Accomplish client goals", "Achieve customer satisfaction", "Exceed client standards", "Realize user specifications", "Answer customer needs", "Deliver client objectives", "Match customer desires", "Obtain client approval", "Complete customer orders", "Realize client wishes", "Secure customer trust", "Satisfy consumer requests", "Fulfill buyer needs"],
            hardFr: ["Répondre aux exigences des clients", "Satisfaire les demandes des utilisateurs", "Accomplir les objectifs des clients", "Atteindre la satisfaction client", "Dépasser les normes des clients", "Réaliser les spécifications des utilisateurs", "Répondre aux besoins des clients", "Livrer les objectifs des clients", "Correspondre aux désirs des clients", "Obtenir l'approbation du client", "Compléter les commandes des clients", "Réaliser les souhaits des clients", "Sécuriser la confiance des clients", "Satisfaire les demandes des consommateurs", "Remplir les besoins des acheteurs"]
        },
        {
            fr: "Piloter une projet d'ingénierie logicielle",
            en: "Lead a software engineering project",
            hardEn: ["Manage a software development team", "Direct an IT engineering initiative", "Supervise a coding project", "Govern a software lifecycle", "Coordinate a technical project", "Administer a software system", "Guide an engineering operation", "Execute a software program", "Oversee a technical build", "Control a software design plan", "Orchestrate an IT development task", "Head a software creation process", "Facilitate an engineering workflow", "Drive a software methodology", "Chair a technical project group"],
            hardFr: ["Gérer une équipe de développement logiciel", "Diriger une initiative d'ingénierie informatique", "Superviser un projet de codage", "Gouverner un cycle de vie logiciel", "Coordonner un projet technique", "Administrer un système logiciel", "Guider une opération d'ingénierie", "Exécuter un programme logiciel", "Superviser une construction technique", "Contrôler un plan de conception logicielle", "Orchestrer une tâche de développement informatique", "Diriger un processus de création logicielle", "Faciliter un flux de travail d'ingénierie", "Piloter une méthodologie logicielle", "Présider un groupe de projet technique"]
        },
        {
            fr: "Construire un cahier des charges",
            en: "Build specifications",
            hardEn: ["Develop project requirements", "Draft technical standards", "Create functional guidelines", "Establish project criteria", "Formulate system rules", "Design system parameters", "Write architectural requirements", "Assemble project parameters", "Generate technical guidelines", "Construct project documentation", "Establish design criteria", "Outline system specifications", "Define project requirements", "Draft functional plans", "Prepare project guidelines"],
            hardFr: ["Développer les exigences du projet", "Rédiger des normes techniques", "Créer des directives fonctionnelles", "Établir des critères de projet", "Formuler des règles système", "Concevoir des paramètres système", "Rédiger des exigences architecturales", "Assembler des paramètres de projet", "Générer des directives techniques", "Construire de la documentation de projet", "Établir des critères de conception", "Esquisser des spécifications système", "Définir les exigences du projet", "Rédiger des plans fonctionnels", "Préparer des directives de projet"]
        },
        {
            fr: "Gérer les données de l'entreprise",
            en: "Manage company data",
            hardEn: ["Administer corporate information", "Control enterprise datasets", "Handle business files", "Supervise organizational data", "Govern corporate databases", "Direct enterprise records", "Process company information", "Secure business data", "Maintain corporate archives", "Organize enterprise files", "Coordinate company databases", "Regulate business information", "Store corporate records", "Monitor enterprise datasets", "Execute data governance"],
            hardFr: ["Administrer les informations d'entreprise", "Contrôler les ensembles de données d'entreprise", "Gérer les fichiers commerciaux", "Superviser les données organisationnelles", "Gouverner les bases de données d'entreprise", "Diriger les dossiers d'entreprise", "Traiter les informations d'entreprise", "Sécuriser les données commerciales", "Maintenir les archives d'entreprise", "Organiser les fichiers d'entreprise", "Coordonner les bases de données d'entreprise", "Réglementer les informations commerciales", "Stocker les dossiers d'entreprise", "Surveiller les ensembles de données d'entreprise", "Exécuter la gouvernance des données"]
        },
        {
            fr: "Développer des applications mobiles",
            en: "Develop mobile apps",
            hardEn: ["Build smartphone software", "Create handheld programs", "Design mobile applications", "Program phone software", "Engineer mobile tools", "Construct tablet applications", "Deploy mobile systems", "Code portable apps", "Formulate mobile software", "Produce mobile applications", "Establish smartphone tools", "Craft mobile programs", "Generate handheld software", "Assemble mobile apps", "Develop portable platforms"],
            hardFr: ["Construire des logiciels pour smartphones", "Créer des programmes pour appareils portables", "Concevoir des applications mobiles", "Programmer des logiciels pour téléphones", "Concevoir des outils mobiles", "Construire des applications pour tablettes", "Déployer des systèmes mobiles", "Coder des applications portables", "Formuler des logiciels mobiles", "Produire des applications mobiles", "Établir des outils pour smartphones", "Créer des programmes mobiles", "Générer des logiciels pour appareils portables", "Assembler des applications mobiles", "Développer des plateformes portables"]
        },
        {
            fr: "Accompagner la stratégie de l'entreprise",
            en: "Support the company's strategy",
            hardEn: ["Guide the enterprise plan", "Back the corporate goals", "Assist the business strategy", "Foster the organization's vision", "Promote the company roadmap", "Align with corporate strategy", "Advise on company planning", "Advance the enterprise mission", "Bolster corporate direction", "Endorse company objectives", "Contribute to business planning", "Facilitate corporate strategy", "Drive company vision", "Sustain enterprise planning", "Partner in corporate strategy"],
            hardFr: ["Guider le plan d'entreprise", "Soutenir les objectifs d'entreprise", "Aider la stratégie commerciale", "Favoriser la vision de l'organisation", "Promouvoir la feuille de route de l'entreprise", "S'aligner sur la stratégie d'entreprise", "Conseiller sur la planification d'entreprise", "Faire progresser la mission de l'entreprise", "Soutenir la direction de l'entreprise", "Approuver les objectifs de l'entreprise", "Contribuer à la planification d'entreprise", "Faciliter la stratégie d'entreprise", "Piloter la vision de l'entreprise", "Soutenir la planification d'entreprise", "S'associer à la stratégie d'entreprise"]
        },
        {
            fr: "Suivre les principes et bonnes pratiques de développement",
            en: "Follow development principles and best practices",
            hardEn: ["Adhere to coding standards and guidelines", "Observe software creation rules", "Comply with programming methods", "Pursue development norms", "Obey software engineering rules", "Adopt coding best practices", "Maintain development standards", "Respect software methodologies", "Apply coding guidelines", "Embrace software principles", "Execute standard practices", "Uphold development rules", "Implement standard coding methods", "Conform to software principles", "Keep development guidelines"],
            hardFr: ["Respecter les normes et directives de codage", "Observer les règles de création logicielle", "Se conformer aux méthodes de programmation", "Poursuivre les normes de développement", "Obéir aux règles d'ingénierie logicielle", "Adopter les meilleures pratiques de codage", "Maintenir les normes de développement", "Respecter les méthodologies logicielles", "Appliquer les directives de codage", "Adopter les principes logiciels", "Exécuter des pratiques standard", "Soutenir les règles de développement", "Implémenter des méthodes de codage standard", "Se conformer aux principes logiciels", "Conserver les directives de développement"]
        },
        {
            fr: "Analyser et identifier tous les problèmes potentiels",
            en: "Analyze and identify any potential problems",
            hardEn: ["Examine and detect all possible issues", "Study and locate potential errors", "Evaluate and recognize all risks", "Inspect and find potential bugs", "Review and pinpoint any failures", "Assess and discover all faults", "Investigate and reveal potential defects", "Check and isolate possible threats", "Scan and identify all weaknesses", "Monitor and trace potential glitches", "Audit and spot any issues", "Test and catch potential flaws", "Observe and detect all errors", "Explore and identify potential risks", "Survey and locate any problems"],
            hardFr: ["Examiner et détecter tous les problèmes possibles", "Étudier et localiser les erreurs potentielles", "Évaluer et reconnaître tous les risques", "Inspecter et trouver des bugs potentiels", "Examiner et épingler toute défaillance", "Évaluer et découvrir tous les défauts", "Enquêter et révéler des défauts potentiels", "Vérifier et isoler les menaces possibles", "Scanner et identifier toutes les faiblesses", "Surveiller et tracer les bugs potentiels", "Auditer et repérer tout problème", "Tester et attraper les failles potentielles", "Observer et détecter toutes les erreurs", "Explorer et identifier les risques potentiels", "Enquêter et localiser tout problème"]
        },
        {
            fr: "Améliorer et maintenir le logiciel à long terme",
            en: "Improve and maintain the software in the long term",
            hardEn: ["Upgrade and support the application over time", "Optimize and preserve the software permanently", "Enhance and sustain the program continuously", "Refine and keep the system updated", "Develop and safeguard the application over time", "Progress and manage the software steadily", "Modernize and watch over the program", "Augment and upkeep the system consistently", "Advance and protect the software permanently", "Boost and oversee the program over time", "Fix and sustain the application continuously", "Extend and preserve the system steadily", "Grow and maintain the software consistently", "Elevate and support the program permanently", "Reform and upkeep the application over time"],
            hardFr: ["Mettre à niveau et prendre en charge l'application au fil du temps", "Optimiser et préserver le logiciel de manière permanente", "Améliorer et soutenir le programme en continu", "Affiner et maintenir le système à jour", "Développer et sauvegarder l'application au fil du temps", "Progresser et gérer le logiciel de manière stable", "Moderniser et surveiller le programme", "Augmenter et entretenir le système de manière cohérente", "Avancer et protéger le logiciel de manière permanente", "Amplifier et superviser le programme au fil du temps", "Corriger et soutenir l'application en continu", "Étendre et préserver le système de manière stable", "Développer et maintenir le logiciel de manière cohérente", "Élever et soutenir le programme de manière permanente", "Réformer et entretenir l'application au fil du temps"]
        },
        {
            fr: "Traduire le besoin du client en demandes fonctionnelles",
            en: "Translate the client's need into functional demands",
            hardEn: ["Convert user requirements into technical specifications", "Transform customer needs into functional requests", "Change client goals into application features", "Shift customer demands into system requirements", "Turn user requests into functional tasks", "Adapt client needs into software criteria", "Translate customer problems into functional solutions", "Process user expectations into system specifications", "Migrate client requests into functional workflows", "Switch customer needs into application criteria", "Decode user requirements into functional tasks", "Encode client goals into software requests", "Reformulate customer needs into functional features", "Map user demands to system specifications", "Interpret client requests into functional deliverables"],
            hardFr: ["Convertir les exigences utilisateur en spécifications techniques", "Transformer les besoins clients en demandes fonctionnelles", "Changer les objectifs clients en fonctionnalités d'application", "Déplacer les demandes clients vers des exigences système", "Transformer les demandes utilisateur en tâches fonctionnelles", "Adapter les besoins clients en critères logiciels", "Traduire les problèmes clients en solutions fonctionnelles", "Traiter les attentes utilisateur en spécifications système", "Migrer les demandes clients vers des flux fonctionnels", "Basculer les besoins clients vers des critères d'application", "Décoder les exigences utilisateur en tâches fonctionnelles", "Encoder les objectifs clients en demandes logicielles", "Reformuler les besoins clients en fonctionnalités fonctionnelles", "Mettre en correspondance les demandes utilisateur avec les spécifications système", "Interpréter les demandes clients en livrables fonctionnels"]
        },
        {
            fr: "Analyser et décrire les tâches à réaliser par l'ordinateur",
            en: "Analyze and describe the tasks to be performed by the computer",
            hardEn: ["Examine and outline processes for machine execution", "Study and detail tasks for computer processing", "Evaluate and define operations for system execution", "Inspect and specify procedures for computer tasks", "Review and document operations for machine processing", "Assess and characterize tasks for computer execution", "Investigate and explain processes for system tasks", "Check and log operations for computer processing", "Audit and detail processes for machine execution", "Monitor and outline tasks for computer processing", "Test and specify operations for system execution", "Survey and define procedures for computer tasks", "Explore and document operations for machine processing", "Query and characterize tasks for computer execution", "Parse and explain processes for system tasks"],
            hardFr: ["Examiner et esquisser des processus pour l'exécution par machine", "Étudier et détailler des tâches pour le traitement informatique", "Évaluer et définir des opérations pour l'exécution par le système", "Inspecter et spécifier des procédures pour des tâches informatiques", "Examiner et documenter des opérations pour le traitement par machine", "Évaluer et caractériser des tâches pour l'exécution informatique", "Enquêter et expliquer des processus pour des tâches système", "Vérifier et consigner des opérations pour le traitement informatique", "Auditer et détailler des processus pour l'exécution par machine", "Surveiller et esquisser des tâches pour le traitement informatique", "Tester et spécifier des opérations pour l'exécution par le système", "Enquêter et définir des procédures pour des tâches informatiques", "Explorer et documenter des opérations pour le traitement par machine", "Interroger et caractériser des tâches pour l'exécution informatique", "Analyser et expliquer des processus pour des tâches système"]
        },
        {
            fr: "Déterminer et schématiser les fonctionnalités du logiciel",
            en: "Determine and schematize the software functionalities",
            hardEn: ["Define and map software features", "Identify and outline application capabilities", "Specify and diagram system functions", "Establish and chart program features", "Calculate and model software functionalities", "Design and structure application features", "Outline and map system capabilities", "Evaluate and diagram software functions", "Plan and chart program functionalities", "Specify and model software features", "Determine and diagram application capabilities", "Identify and chart system functions", "Define and structure program features", "Establish and map software functionalities", "Calculate and outline application features"],
            hardFr: ["Définir et cartographier les fonctionnalités logicielles", "Identifier et esquisser les capacités des applications", "Spécifier et diagrammer les fonctions système", "Établir et tracer les fonctionnalités des programmes", "Calculer et modéliser les fonctionnalités logicielles", "Concevoir et structurer les fonctionnalités des applications", "Esquisser et cartographier les capacités système", "Évaluer et diagrammer les fonctions logicielles", "Planifier et tracer les fonctionnalités des programmes", "Spécifier et modéliser les fonctionnalités logicielles", "Déterminer et diagrammer les capacités des applications", "Identifier et tracer les fonctions système", "Définir et structurer les fonctionnalités des programmes", "Établir et cartographier les fonctionnalités logicielles", "Calculer et esquisser les fonctionnalités des applications"]
        },
        {
            fr: "Déceler les défauts de programmation",
            en: "Identify programming defects",
            hardEn: ["Detect coding errors", "Find software bugs", "Uncover programming flaws", "Spot software mistakes", "Discover code issues", "Locate programming faults", "Identify software errors", "Recognize coding bugs", "Pinpoint programming mistakes", "Reveal software flaws", "Catch coding defects", "Trace programming errors", "Expose software bugs", "Isolate coding faults", "Diagnose programming issues"],
            hardFr: ["Détecter des erreurs de codage", "Trouver des bugs logiciels", "Découvrir des failles de programmation", "Repérer des erreurs logicielles", "Découvrir des problèmes de code", "Localiser des défauts de programmation", "Identifier des erreurs logicielles", "Reconnaître des bugs de codage", "Épingler des erreurs de programmation", "Révéler des failles logicielles", "Attraper des défauts de codage", "Tracer des erreurs de programmation", "Exposer des bugs logiciels", "Isoler des défauts de codage", "Diagnostiquer des problèmes de programmation"]
        },
        {
            fr: "Effectuer des traitements par lot",
            en: "Perform batch processes",
            hardEn: ["Execute bulk operations", "Run scheduled jobs", "Process automated tasks", "Perform mass updates", "Handle batch data", "Run background processes", "Execute queued tasks", "Process bulk files", "Perform offline jobs", "Run automated scripts", "Handle mass data", "Execute bulk queries", "Process scheduled tasks", "Perform batch jobs", "Run background jobs"],
            hardFr: ["Exécuter des opérations en masse", "Lancer des tâches planifiées", "Traiter des tâches automatisées", "Effectuer des mises à jour de masse", "Gérer des données par lot", "Exécuter des processus en arrière-plan", "Exécuter des tâches en file d'attente", "Traiter des fichiers en masse", "Effectuer des travaux hors ligne", "Lancer des scripts automatisés", "Gérer des données massives", "Exécuter des requêtes en masse", "Traiter des tâches planifiées", "Effectuer des travaux par lot", "Lancer des tâches en arrière-plan"]
        },
        {
            fr: "Contrôler les évolutions et les différentes versions du logiciel",
            en: "Control developments and different versions of the software",
            hardEn: ["Manage changes and software releases", "Track modifications and application versions", "Monitor updates and program revisions", "Supervise developments and software builds", "Handle upgrades and version control", "Direct changes and program releases", "Coordinate updates and software branches", "Oversee modifications and release versions", "Administer developments and software builds", "Regulate changes and version history", "Govern updates and application revisions", "Check modifications and software releases", "Inspect changes and version branches", "Review updates and software builds", "Audit modifications and program versions"],
            hardFr: ["Gérer les changements et les versions logicielles", "Suivre les modifications et les versions d'applications", "Surveiller les mises à jour et les révisions de programmes", "Superviser les développements et les constructions logicielles", "Gérer les mises à niveau et le contrôle de version", "Diriger les changements et les versions de programmes", "Coordonner les mises à jour et les branches logicielles", "Superviser les modifications et les versions publiées", "Administrer les développements et les constructions logicielles", "Réglementer les changements et l'historique des versions", "Gouverner les mises à jour et les révisions d'applications", "Vérifier les modifications et les versions logicielles", "Inspecter les changements et les branches de versions", "Examiner les mises à jour et les constructions logicielles", "Auditer les modifications et les versions de programmes"]
        },
        {
            fr: "Maintenir en condition opérationnelle le logiciel",
            en: "Keep the software in operational condition",
            hardEn: ["Ensure software uptime and functionality", "Maintain application availability", "Preserve software performance and health", "Sustain operational software status", "Guarantee software reliability and uptime", "Support continuous software operations", "Protect application functionality", "Maintain system operational readiness", "Secure software availability", "Keep applications running smoothly", "Sustain software functionality and health", "Ensure application operational readiness", "Preserve software reliability", "Maintain running software status", "Guarantee system operational health"],
            hardFr: ["Assurer la disponibilité et la fonctionnalité des logiciels", "Maintenir la disponibilité des applications", "Préserver la performance et la santé des logiciels", "Maintenir le statut opérationnel du logiciel", "Garantir la fiabilité et la disponibilité des logiciels", "Soutenir les opérations logicielles continues", "Protéger la fonctionnalité des applications", "Maintenir la disponibilité opérationnelle du système", "Sécuriser la disponibilité des logiciels", "Maintenir les applications en cours d'exécution", "Soutenir la fonctionnalité et la santé des logiciels", "Assurer la disponibilité opérationnelle des applications", "Préserver la fiabilité logicielle", "Maintenir le statut du logiciel en cours d'exécution", "Garantir la santé opérationnelle du système"]
        },
        {
            fr: "Mettre en production à l'issue des phases de qualification et d'intégration",
            en: "Put into production at the end of the qualification and integration phases",
            hardEn: ["Deploy to production after testing and merging", "Release live after validation and integration", "Launch into production following test phases", "Ship software post-qualification and integration", "Deploy live after QA and integration stages", "Publish to production following testing and merging", "Roll out live post-testing and integration", "Transfer to production after QA and integration", "Deliver to production post-qualification and building", "Push live following testing and integration steps", "Release into production after validation and building", "Deploy to production post-qualification and merging", "Launch live following testing and integration phases", "Ship live post-QA and integration steps", "Publish into production after testing and integration"],
            hardFr: ["Déployer en production après les tests et la fusion", "Publier en direct après validation et intégration", "Lancer en production suite aux phases de test", "Livrer le logiciel après qualification et intégration", "Déployer en direct après les étapes de QA et d'intégration", "Publier en production suite aux tests et à la fusion", "Déployer en direct après les tests et l'intégration", "Transférer en production après QA et intégration", "Livrer en production après qualification et construction", "Pousser en direct suite aux étapes de test et d'intégration", "Publier en production après validation et construction", "Déployer en production après qualification et fusion", "Lancer en direct suite aux phases de test et d'intégration", "Livrer en direct après les étapes de QA et d'intégration", "Publier en production après les tests et l'intégration"]
        },
        {
            fr: "Rédiger le code source qui constitue le corps du logiciel",
            en: "Write the source code that forms the body of the software",
            hardEn: ["Develop the code base for the software", "Program the core components of the application", "Author the software implementation code", "Construct the primary code of the program", "Build the foundation code of the software", "Program the underlying logic of the application", "Create the codebase making up the software", "Draft the source implementation for the program", "Write the core programming for the software", "Develop the primary code structure of the app", "Program the central codebase of the software", "Author the source files for the application", "Construct the underlying code of the program", "Build the core software implementation", "Create the foundational code of the application"],
            hardFr: ["Développer la base de code du logiciel", "Programmer les composants principaux de l'application", "Rédiger le code d'implémentation du logiciel", "Construire le code primaire du programme", "Construire le code de fondation du logiciel", "Programmer la logique sous-jacente de l'application", "Créer la base de code constituant le logiciel", "Rédiger l'implémentation source du programme", "Écrire la programmation principale du logiciel", "Développer la structure de code principale de l'application", "Programmer la base de code centrale du logiciel", "Rédiger les fichiers source de l'application", "Construire le code sous-jacent du programme", "Construire l'implémentation logicielle centrale", "Créer le code fondateur de l'application"]
        },
        {
            fr: "Mettre en œuvre l'agilité au sein d'une équipe de développeurs",
            en: "Implement agility as part of a team of developers",
            hardEn: ["Adopt agile practices within a development group", "Apply agile methodologies in a coding team", "Integrate agile workflows among developers", "Deploy agile frameworks in a programming unit", "Execute agile processes within a tech team", "Incorporate agile principles in a developer group", "Practice agile methods across a coding team", "Establish agile routines within a development unit", "Adopt agile frameworks among programmers", "Apply agile workflows in a tech group", "Integrate agile methods in a development team", "Deploy agile practices within a coding unit", "Execute agile principles across developers", "Incorporate agile methodologies in a tech team", "Practice agile routines within a programming group"],
            hardFr: ["Adopter des pratiques agiles au sein d'un groupe de développement", "Appliquer des méthodologies agiles dans une équipe de codage", "Intégrer des flux agiles parmi les développeurs", "Déployer des cadres agiles dans une unité de programmation", "Exécuter des processus agiles au sein d'une équipe technique", "Incorporer des principes agiles dans un groupe de développeurs", "Pratiquer des méthodes agiles dans une équipe de codage", "Établir des routines agiles au sein d'une unité de développement", "Adopter des cadres agiles parmi les programmeurs", "Appliquer des flux agiles dans un groupe technique", "Intégrer des méthodes agiles dans une équipe de développement", "Déployer des pratiques agiles dans une unité de codage", "Exécuter des principes agiles à travers les développeurs", "Incorporer des méthodologies agiles dans une équipe technique", "Pratiquer des routines agiles dans un groupe de programmation"]
        },
        {
            fr: "Diriger des projets collaboratifs",
            en: "Lead collaborative projects",
            hardEn: ["Manage teamwork initiatives", "Supervise group projects", "Direct cooperative ventures", "Oversee joint undertakings", "Guide collaborative assignments", "Coordinate team projects", "Administer cooperative tasks", "Govern joint initiatives", "Head collaborative programs", "Facilitate teamwork projects", "Control cooperative efforts", "Run joint projects", "Command collaborative tasks", "Steer cooperative ventures", "Chair teamwork assignments"],
            hardFr: ["Gérer des initiatives de travail en équipe", "Superviser des projets de groupe", "Diriger des entreprises coopératives", "Surveiller des entreprises conjointes", "Guider des missions collaboratives", "Coordonner des projets d'équipe", "Administrer des tâches coopératives", "Gouverner des initiatives conjointes", "Diriger des programmes collaboratifs", "Faciliter des projets de travail en équipe", "Contrôler des efforts coopératifs", "Exécuter des projets conjoints", "Commander des tâches collaboratives", "Piloter des entreprises coopératives", "Présider des missions de travail en équipe"]
        },
        {
            fr: "Vérifier que les fonctions offertes par le logiciel correspondent attente",
            en: "Make sure the features offered by the software are in line with customer expectations",
            hardEn: ["Ensure software capabilities match user requirements", "Validate that application features meet client needs", "Confirm software functions align with expectations", "Check that system features satisfy customer goals", "Verify application functions match user demands", "Ensure software features fulfill client standards", "Validate application capabilities meet expectations", "Confirm system functions align with user needs", "Check software features satisfy client requirements", "Verify that application functions meet customer goals", "Ensure system capabilities match user demands", "Validate software features fulfill client standards", "Confirm application functions align with user expectations", "Check that system features satisfy customer needs", "Verify software functions match client requirements"],
            hardFr: ["S'assurer que les capacités du logiciel correspondent aux exigences des utilisateurs", "Valider que les fonctionnalités de l'application répondent aux besoins des clients", "Confirmer que les fonctions du système s'alignent sur les attentes", "Vérifier que les fonctionnalités du système satisfont les objectifs des clients", "Vérifier que les fonctions de l'application correspondent aux demandes des utilisateurs", "S'assurer que les fonctionnalités du logiciel remplissent les normes des clients", "Valider que les capacités de l'application répondent aux attentes", "Confirmer que les fonctions du système s'alignent sur les besoins des utilisateurs", "Vérifier que les fonctionnalités du logiciel satisfont les exigences des clients", "Vérifier que les fonctions de l'application répondent aux objectifs des clients", "S'assurer que les capacités du système correspondent aux demandes des utilisateurs", "Valider que les fonctionnalités du logiciel remplissent les normes des clients", "Confirmer que les fonctions de l'application s'alignent sur les attentes des utilisateurs", "Vérifier que les fonctionnalités du système satisfont les besoins des clients", "Vérifier que les fonctions du logiciel correspondent aux exigences des clients"]
        },
        {
            fr: "Définir les étapes clés de cycle de vie du projet",
            en: "Define key lifecycle milestones for the project",
            hardEn: ["Establish primary project stages", "Identify core lifecycle phases", "Set main project milestones", "Outline key development stages", "Specify crucial lifecycle phases", "Determine primary project milestones", "Designate core development stages", "Plan key project lifecycle phases", "Map out main project milestones", "Specify major development stages", "Determine crucial lifecycle phases", "Establish core project milestones", "Identify primary development stages", "Set key lifecycle phases", "Outline main project milestones"],
            hardFr: ["Établir les étapes principales du projet", "Identifier les phases clés du cycle de vie", "Fixer les jalons principaux du projet", "Esquisser les étapes de développement clés", "Spécifier les phases cruciales du cycle de vie", "Déterminer les jalons principaux du projet", "Désigner les étapes de développement principales", "Planifier les phases clés du cycle de vie du projet", "Cartographier les jalons principaux du projet", "Spécifier les étapes de développement majeures", "Déterminer les phases cruciales du cycle de vie", "Établir les jalons principaux du projet", "Identifier les étapes de développement principales", "Fixer les phases clés du cycle de vie", "Esquisser les jalons principaux du projet"]
        },
        {
            fr: "Intégrer les environnements de développement",
            en: "Integrate development environments",
            hardEn: ["Merge coding platforms", "Connect development workspaces", "Unify programming environments", "Combine coding tools", "Link development setups", "Synchronize programming platforms", "Harmonize development workspaces", "Incorporate coding environments", "Blend development tools", "Consolidate programming setups", "Join development platforms", "Interface coding workspaces", "Fuse programming environments", "Align development tools", "Amalgamate coding setups"],
            hardFr: ["Fusionner les plateformes de codage", "Connecter les espaces de travail de développement", "Unifier les environnements de programmation", "Combiner les outils de codage", "Lier les configurations de développement", "Synchroniser les plateformes de programmation", "Harmoniser les espaces de travail de développement", "Incorporer les environnements de codage", "Mélanger les outils de développement", "Consolider les configurations de programmation", "Rejoindre les plateformes de développement", "Interfacer les espaces de travail de codage", "Fusionner les environnements de programmation", "Aligner les outils de développement", "Amalgamer les configurations de codage"]
        },
        {
            fr: "Gérer les modifications apportées au code source",
            en: "Manage changes to source code",
            hardEn: ["Control source code updates", "Handle code modifications", "Administer source code revisions", "Track source code changes", "Supervise code modifications", "Regulate source code updates", "Govern code revisions", "Direct source code modifications", "Oversee code updates", "Coordinate source code revisions", "Administer code modifications", "Handle source code updates", "Control code revisions", "Manage source code modifications", "Track code updates"],
            hardFr: ["Contrôler les mises à jour du code source", "Gérer les modifications de code", "Administrer les révisions du code source", "Suivre les modifications du code source", "Superviser les modifications de code", "Réglementer les mises à jour du code source", "Gouverner les révisions de code", "Diriger les modifications du code source", "Surveiller les mises à jour de code", "Coordonner les révisions du code source", "Administrer les modifications de code", "Gérer les mises à jour du code source", "Contrôler les révisions de code", "Gérer les modifications du code source", "Suivre les mises à jour de code"]
        },
        {
            fr: "Déployer le logiciel sur un serveur d'applications",
            en: "Deploy the software to an application server",
            hardEn: ["Install the software on an application server", "Publish the software to an application server", "Release the software to an application server", "Launch the software on an application server", "Transfer the software to an application server", "Upload the software to an application server", "Ship the software to an application server", "Push the software to an application server", "Migrate the software to an application server", "Move the software to an application server", "Configure the software on an application server", "Setup the software on an application server", "Run the software on an application server", "Host the software on an application server", "Deliver the software to an application server"],
            hardFr: ["Installer le logiciel sur un serveur d'applications", "Publier le logiciel sur un serveur d'applications", "Diffuser le logiciel sur un serveur d'applications", "Lancer le logiciel sur un serveur d'applications", "Transférer le logiciel sur un serveur d'applications", "Téléverser le logiciel sur un serveur d'applications", "Livrer le logiciel sur un serveur d'applications", "Pousser le logiciel sur un serveur d'applications", "Migrer le logiciel vers un serveur d'applications", "Déplacer le logiciel vers un serveur d'applications", "Configurer le logiciel sur un serveur d'applications", "Installer le logiciel sur un serveur d'applications", "Exécuter le logiciel sur un serveur d'applications", "Héberger le logiciel sur un serveur d'applications", "Livrer le logiciel sur un serveur d'applications"]
        }
    ],
    intermediaire: [
        {
            fr: "Déclarer une variable en langage java",
            en: "Declare a variable in java language",
            hardEn: ["Define a constant in java language", "Initialize a variable in java language", "Declare a parameter in java language", "Assign a variable in java language", "Create a variable in c++ language", "Declare a method in java language", "Instantiate an object in java language", "Register a variable in java language", "Call a variable in java language", "Store a variable in java language", "Process a variable in java language", "Compile a variable in java language", "Return a variable in java language", "Delete a variable in java language", "Print a variable in java language"],
            hardFr: ["Définir une constante en langage java", "Initialiser une variable en langage java", "Déclarer un paramètre en langage java", "Assigner une variable en langage java", "Créer une variable en langage c++", "Déclarer une méthode en langage java", "Instancier un objet en langage java", "Enregistrer une variable en langage java", "Appeler une variable en langage java", "Stocker une variable en langage java", "Traiter une variable en langage java", "Compiler une variable en langage java", "Retourner une variable en langage java", "Supprimer une variable en langage java", "Afficher une variable en langage java"]
        },
        {
            fr: "Utiliser des tableaux pour stocker plusieurs valeurs dans une seule variable",
            en: "Use arrays to store multiple values in a single variable",
            hardEn: ["Use lists to store single values in multiple variables", "Use objects to store multiple values in a single variable", "Use arrays to retrieve multiple values in a single variable", "Use loops to store multiple values in a single variable", "Use strings to store multiple values in a single variable", "Use matrices to store single values", "Use arrays to store one value in multiple variables", "Use functions to store multiple values", "Use pointers to store multiple values", "Use collections to store single values", "Use maps to store multiple values", "Use queues to store multiple values", "Use stacks to store multiple values", "Use buffers to store multiple values", "Use records to store multiple values"],
            hardFr: ["Utiliser des listes pour stocker des valeurs uniques dans de multiples variables", "Utiliser des objets pour stocker plusieurs valeurs dans une seule variable", "Utiliser des tableaux pour récupérer plusieurs valeurs dans une seule variable", "Utiliser des boucles pour stocker plusieurs valeurs dans une seule variable", "Utiliser des chaînes pour stocker plusieurs valeurs dans une seule variable", "Utiliser des matrices pour stocker des valeurs uniques", "Utiliser des tableaux pour stocker une valeur dans de multiples variables", "Utiliser des fonctions pour stocker plusieurs valeurs", "Utiliser des pointeurs pour stocker plusieurs valeurs", "Utiliser des collections pour stocker des valeurs uniques", "Utiliser des tables de hachage pour stocker plusieurs valeurs", "Utiliser des files d'attente pour stocker plusieurs valeurs", "Utiliser des piles pour stocker plusieurs valeurs", "Utiliser des tampons pour stocker plusieurs valeurs", "Utiliser des enregistrements pour stocker plusieurs valeurs"]
        },
        {
            fr: "Créer une chaîne en java",
            en: "Create a string in java",
            hardEn: ["Create a loop in java", "Create an array in java", "Build a string in java", "Generate a string in java", "Define a string in java", "Construct a string in java", "Create a variable in java", "Initialize a string in java", "Output a string in java", "Process a string in java", "Parse a string in java", "Format a string in java", "Concatenate a string in java", "Split a string in java", "Convert a string in java"],
            hardFr: ["Créer une boucle en java", "Créer un tableau en java", "Construire une chaîne en java", "Générer une chaîne en java", "Définir une chaîne en java", "Créer une variable en java", "Initialiser une chaîne en java", "Afficher une chaîne en java", "Traiter une chaîne en java", "Compiler une chaîne en java", "Analyser une chaîne en java", "Formater une chaîne en java", "Concaténer une chaîne en java", "Diviser une chaîne en java", "Convertir une chaîne en java"]
        },
        {
            fr: "Exécuter des boucles",
            en: "Execute loops",
            hardEn: ["Run loops", "Perform loops", "Implement loops", "Build loops", "Process loops", "Iterate loops", "Design loops", "Evaluate loops", "Compile loops", "Terminate loops", "Start loops", "Break loops", "Continue loops", "Dispatch loops", "Optimize loops"],
            hardFr: ["Lancer des boucles", "Effectuer des boucles", "Implémenter des boucles", "Construire des boucles", "Traiter des boucles", "Itérer des boucles", "Concevoir des boucles", "Évaluer des boucles", "Compiler des boucles", "Terminer des boucles", "Démarrer des boucles", "Interrompre des boucles", "Continuer des boucles", "Répartir des boucles", "Optimiser des boucles"]
        },
        {
            fr: "Effectuer une opération d'entrée ou de sortie",
            en: "Perform an input or output operation",
            hardEn: ["Perform an internal or external operation", "Execute a read or write operation", "Run an input or output process", "Handle an entry or exit task", "Process an input or output stream", "Manage an input or output request", "Test an input or output module", "Design an input or output system", "Call an input or output function", "Initiate an input or output command", "Secure an input or output channel", "Validate an input or output parameter", "Parse an input or output data", "Buffer an input or output block", "Log an input or output event"],
            hardFr: ["Effectuer une opération interne ou externe", "Exécuter une opération de lecture ou d'écriture", "Lancer un processus d'entrée ou de sortie", "Gérer une tâche d'entrée ou de sortie", "Traiter un flux d'entrée ou de sortie", "Gérer une requête d'entrée ou de sortie", "Tester un module d'entrée ou de sortie", "Concevoir un système d'entrée ou de sortie", "Appeler une fonction d'entrée ou de sortie", "Initier une commande d'entrée ou de sortie", "Sécuriser un canal d'entrée ou de sortie", "Valider un paramètre d'entrée ou de sortie", "Analyser des données d'entrée ou de sortie", "Mettre en tampon un bloc d'entrée ou de sortie", "Enregistrer un événement d'entrée ou de sortie"]
        },
        {
            fr: "Traiter une information représentée sous sa forme binaire",
            en: "Process a binary information",
            hardEn: ["Manage a digital information", "Analyze a binary data", "Convert a binary information", "Handle a binary stream", "Execute a binary process", "Store a binary information", "Decode a binary data", "Evaluate a binary format", "Compute a binary input", "Transform a binary signal", "Parse a binary structure", "Compile a binary file", "Transmit a binary packet", "Filter a binary transmission", "Read a binary sequence"],
            hardFr: ["Gérer une information numérique", "Analyser des données binaires", "Convertir une information binaire", "Gérer un flux binaire", "Exécuter un processus binaire", "Stocker une information binaire", "Décoder des données binaires", "Évaluer un format binaire", "Calculer une entrée binaire", "Transformer un signal binaire", "Analyser une structure binaire", "Compiler un fichier binaire", "Transmettre un paquet binaire", "Filtrer une transmission binaire", "Lire une séquence binaire"]
        },
        {
            fr: "Comprendre les principaux livrables, les jalons, ainsi que les rôles et les responsabilités de chaque personne impliquée dans une charte de projet",
            en: "Understand the main deliverables, milestones, as well as the roles and responsibilities of each person involved in a project charter",
            hardEn: ["Define the main deliverables and milestones of a project", "Analyze project roles and responsibilities", "Review project charter guidelines", "Manage deliverables and milestones", "Identify project participants and roles", "Outline project deliverables and timeline", "Assess project responsibilities", "Supervise project execution", "Draft project charter documents", "Establish project milestones", "Coordinate project team members", "Evaluate project performance", "Monitor project tasks", "Implement project governance", "Audit project deliverables"],
            hardFr: ["Définir les principaux livrables et jalons d'un projet", "Analyser les rôles et responsabilités du projet", "Examiner les directives de la charte de projet", "Gérer les livrables et les jalons", "Identifier les participants et rôles du projet", "Esquisser les livrables et le calendrier du projet", "Évaluer les responsabilités du projet", "Superviser l'exécution du projet", "Rédiger les documents de la charte de projet", "Établir les jalons du projet", "Coordonner les membres de l'équipe projet", "Évaluer la performance du projet", "Surveiller les tâches du projet", "Mettre en œuvre la gouvernance du projet", "Auditer les livrables du projet"]
        },
        {
            fr: "Utiliser les opérateurs booléens pour réduire, étendre ou affiner les résultats de recherche",
            en: "Use Boolean operators to narrow, expand, or refine search results",
            hardEn: ["Use search filters to organize results", "Apply boolean logic to sort data", "Refine search queries using keywords", "Expand search criteria using parameters", "Narrow down database queries", "Manage search results with operators", "Optimize search algorithms", "Process query parameters", "Evaluate search outputs", "Customize search filters", "Analyze search trends", "Filter dataset parameters", "Configure search settings", "Implement search queries", "Execute boolean functions"],
            hardFr: ["Utiliser des filtres de recherche pour organiser les résultats", "Appliquer la logique booléenne pour trier les données", "Affiner les requêtes de recherche à l'aide de mots-clés", "Élargir les critères de recherche à l'aide de paramètres", "Restreindre les requêtes de base de données", "Gérer les résultats de recherche avec des opérateurs", "Optimiser les algorithmes de recherche", "Traiter les paramètres de requête", "Évaluer les résultats de recherche", "Personnaliser les filtres de recherche", "Analyser les tendances de recherche", "Filtrer les paramètres de l'ensemble de données", "Configurer les paramètres de recherche", "Implémenter des requêtes de recherche", "Exécuter des fonctions booléennes"]
        },
        {
            fr: "Créer une procédure stockée dans une base de données",
            en: "Create a stored procedure in a database",
            hardEn: ["Create a dynamic query in a database", "Build a stored function in a database", "Design a stored procedure in a database", "Implement a trigger in a database", "Generate a procedure in a database", "Execute a stored procedure in a database", "Deploy a stored procedure in a database", "Write a stored procedure in a database", "Modify a stored procedure in a database", "Drop a stored procedure in a database", "Compile a stored procedure in a database", "Test a stored procedure in a database", "Optimize a stored procedure in a database", "Debug a stored procedure in a database", "Migrate a stored procedure in a database"],
            hardFr: ["Créer une requête dynamique dans une base de données", "Construire une fonction stockée dans une base de données", "Concevoir une procédure stockée dans une base de données", "Implémenter un déclencheur dans une base de données", "Générer une procédure dans une base de données", "Exécuter une procédure stockée dans une base de données", "Déployer une procédure stockée dans une base de données", "Écrire une procédure stockée dans une base de données", "Modifier une procédure stockée dans une base de données", "Supprimer une procédure stockée dans une base de données", "Compiler une procédure stockée dans une base de données", "Tester une procédure stockée dans une base de données", "Optimiser une procédure stockée dans une base de données", "Déboguer une procédure stockée dans une base de données", "Migrer une procédure stockée dans une base de données"]
        },
        {
            fr: "Utiliser les algorithmes les plus efficaces possibles pour résoudre des problèmes",
            en: "Use the most efficient algorithms possible to solve problems",
            hardEn: ["Develop complex algorithms for coding", "Optimize software performance", "Find solutions using basic logic", "Select optimal data structures", "Analyze system performance", "Implement functional solutions", "Design reliable architectures", "Process computational logic", "Evaluate problem-solving methods", "Code efficient solutions", "Manage computational tasks", "Refactor system code", "Test algorithmic logic", "Deploy optimized scripts", "Streamline code execution"],
            hardFr: ["Développer des algorithmes complexes pour le codage", "Optimiser la performance logicielle", "Trouver des solutions en utilisant une logique de base", "Sélectionner des structures de données optimales", "Analyser la performance du système", "Implémenter des solutions fonctionnelles", "Concevoir des architectures fiables", "Traiter la logique computationnelle", "Évaluer les méthodes de résolution de problèmes", "Coder des solutions efficaces", "Gérer les tâches de calcul", "Refactoriser le code système", "Tester la logique algorithmique", "Déployer des scripts optimisés", "Rationaliser l'exécution du code"]
        },
        {
            fr: "Développer des solutions logicielles fiables et fonctionnelles",
            en: "Develop reliable and functional software solutions",
            hardEn: ["Design secure hardware systems", "Implement basic code structures", "Test software applications", "Maintain database integrity", "Create user interfaces", "Deploy cloud solutions", "Manage software projects", "Optimize system performance", "Analyze user requirements", "Build scalable applications", "Review software architecture", "Support software systems", "Integrate software modules", "Upgrade existing programs", "Ensure code quality"],
            hardFr: ["Concevoir des systèmes matériels sécurisés", "Implémenter des structures de code de base", "Tester des applications logicielles", "Maintenir l'intégrité de la base de données", "Créer des interfaces utilisateur", "Déployer des solutions cloud", "Gérer des projets logiciels", "Optimiser la performance du système", "Analyser les besoins des utilisateurs", "Construire des applications évolutives", "Examiner l'architecture logicielle", "Prendre en charge les systèmes logiciels", "Intégrer des modules logiciels", "Mettre à niveau des programmes existants", "Garantir la qualité du code"]
        },
        {
            fr: "Se positionner comme expert technique",
            en: "Position oneself as a technical expert",
            hardEn: ["Act as a project manager", "Provide technical support", "Lead software development", "Consult on system architecture", "Demonstrate technical skills", "Manage technical teams", "Establish technical standards", "Evaluate technical solutions", "Advise on software choices", "Coordinate technical tasks", "Supervise code reviews", "Guide technical strategy", "Promote coding best practices", "Perform technical audits", "Represent engineering teams"],
            hardFr: ["Agir en tant que chef de projet", "Fournir un support technique", "Diriger le développement logiciel", "Conseiller sur l'architecture système", "Démontrer des compétences techniques", "Gérer des équipes techniques", "Établir des normes techniques", "Évaluer des solutions techniques", "Conseiller sur les choix logiciels", "Coordonner des tâches techniques", "Superviser les revues de code", "Guider la stratégie technique", "Promouvoir les bonnes pratiques de codage", "Effectuer des audits techniques", "Représenter les équipes d'ingénierie"]
        },
        {
            fr: "Gérer et optimiser la base de données",
            en: "Manage and optimize the database",
            hardEn: ["Design system architecture", "Deploy server applications", "Monitor network traffic", "Secure software systems", "Analyze data flows", "Maintain server integrity", "Configure database backups", "Scale cloud storage", "Query database structures", "Index database tables", "Cleanup database records", "Synchronize database nodes", "Migrate database systems", "Audit database security", "Troubleshoot database errors"],
            hardFr: ["Concevoir l'architecture système", "Déployer des applications serveur", "Surveiller le trafic réseau", "Sécuriser les systèmes logiciels", "Analyser les flux de données", "Maintenir l'intégrité du serveur", "Configurer les sauvegardes de base de données", "Mettre à l'échelle le stockage cloud", "Interroger les structures de base de données", "Indexer les tables de base de données", "Nettoyer les enregistrements de base de données", "Synchroniser les nœuds de base de données", "Migrer les systèmes de base de données", "Auditer la sécurité de la base de données", "Résoudre les erreurs de base de données"]
        },
        {
            fr: "Réaliser une étude logicielle",
            en: "Conduct a software study",
            hardEn: ["Perform a code review", "Write technical specifications", "Analyze system requirements", "Test software performance", "Evaluate software tools", "Design software architecture", "Manage software development", "Assess project feasibility", "Audit software security", "Inspect software bugs", "Investigate technical issues", "Plan software releases", "Document software features", "Benchmark software options", "Research development frameworks"],
            hardFr: ["Effectuer une revue de code", "Rédiger des spécifications techniques", "Analyser les exigences du système", "Tester la performance logicielle", "Évaluer les outils logiciels", "Concevoir l'architecture logicielle", "Gérer le développement logiciel", "Évaluer la faisabilité du projet", "Auditer la sécurité logicielle", "Inspecter les bugs logiciels", "Investiguer les problèmes techniques", "Planifier les versions logicielles", "Documenter les fonctionnalités logicielles", "Comparer les options logicielles", "Rechercher des cadres de développement"]
        },
        {
            fr: "Concevoir l'architecture des applications",
            en: "Design application architecture",
            hardEn: ["Build application databases", "Develop user interfaces", "Configure application servers", "Deploy software packages", "Manage application pipelines", "Write source code", "Test application security", "Optimize application performance", "Document system design", "Structure application modules", "Plan application deployment", "Integrate application services", "Maintain application code", "Review system requirements", "Define software frameworks"],
            hardFr: ["Construire des bases de données d'applications", "Développer des interfaces utilisateur", "Configurer des serveurs d'applications", "Déployer des paquets logiciels", "Gérer les pipelines d'applications", "Écrire du code source", "Tester la sécurité des applications", "Optimiser la performance des applications", "Documenter la conception du système", "Structurer les modules d'application", "Planifier le déploiement d'applications", "Intégrer des services d'application", "Maintenir le code de l'application", "Examiner les exigences du système", "Définir les cadres logiciels"]
        },
        {
            fr: "Assurer la gestion des données",
            en: "Ensure data management",
            hardEn: ["Secure database servers", "Monitor network data", "Process information streams", "Backup system files", "Analyze database queries", "Optimize storage systems", "Maintain data integrity", "Control data access", "Structure data models", "Validate data inputs", "Synchronize data nodes", "Archive old records", "Clean database tables", "Manage data flows", "Govern data policies"],
            hardFr: ["Sécuriser les serveurs de base de données", "Surveiller les données réseau", "Traiter les flux d'informations", "Sauvegarder les fichiers système", "Analyser les requêtes de base de données", "Optimiser les systèmes de stockage", "Maintenir l'intégrité des données", "Contrôler l'accès aux données", "Structurer les modèles de données", "Valider les entrées de données", "Synchroniser les nœuds de données", "Archiver les anciens enregistrements", "Nettoyer les tables de base de données", "Gérer les flux de données", "Gouverner les politiques de données"]
        },
        {
            fr: "Sécuriser les applications",
            en: "Secure applications",
            hardEn: ["Deploy network firewalls", "Encrypt system databases", "Patch software vulnerabilities", "Audit application code", "Configure user permissions", "Monitor security logs", "Protect data streams", "Implement authentication protocols", "Prevent software exploits", "Test application security", "Manage security policies", "Validate input data", "Defend against malware", "Isolate network segments", "Harden server configurations"],
            hardFr: ["Déployer des pare-feu réseau", "Chiffrer les bases de données système", "Corriger les vulnérabilités logicielles", "Auditer le code des applications", "Configurer les permissions des utilisateurs", "Surveiller les journaux de sécurité", "Protéger les flux de données", "Mettre en œuvre des protocoles d'authentification", "Prévenir les exploits logiciels", "Tester la sécurité des applications", "Gérer les politiques de sécurité", "Valider les données d'entrée", "Défendre contre les logiciels malveillants", "Isoler les segments réseau", "Durcir les configurations serveur"]
        },
        {
            fr: "Implémenter des solutions logicielles",
            en: "Implement software solutions",
            hardEn: ["Design software systems", "Test software applications", "Deploy software packages", "Develop code modules", "Integrate software tools", "Maintain software programs", "Configure software environments", "Upgrade software versions", "Analyze software requirements", "Troubleshoot software errors", "Optimize software performance", "Document software features", "Manage software projects", "Build functional programs", "Release software updates"],
            hardFr: ["Concevoir des systèmes logiciels", "Tester des applications logicielles", "Déployer des paquets logiciels", "Développer des modules de code", "Intégrer des outils logiciels", "Maintenir des programmes logiciels", "Configurer des environnements logiciels", "Mettre à niveau des versions logicielles", "Analyser les exigences logicielles", "Résoudre les erreurs logicielles", "Optimiser la performance logicielle", "Documenter les fonctionnalités logicielles", "Gérer des projets logiciels", "Construire des programmes fonctionnels", "Publier des mises à jour logicielles"]
        },
        {
            fr: "Créer des programmes",
            en: "Build programs",
            hardEn: ["Write source code", "Compile software projects", "Design application logic", "Develop software systems", "Generate executable files", "Construct application scripts", "Produce code libraries", "Assemble software components", "Formulate program algorithms", "Program system functions", "Establish code structures", "Set up development tools", "Draft software blueprints", "Craft application modules", "Initiate coding tasks"],
            hardFr: ["Écrire du code source", "Compiler des projets logiciels", "Concevoir la logique applicative", "Développer des systèmes logiciels", "Générer des fichiers exécutables", "Construire des scripts d'application", "Produire des bibliothèques de code", "Assembler des composants logiciels", "Formuler des algorithmes de programme", "Programmer des fonctions système", "Établir des structures de code", "Configurer des outils de développement", "Rédiger des plans logiciels", "Concevoir des modules d'application", "Initier des tâches de codage"]
        },
        {
            fr: "Écrire et tester le code",
            en: "Write and test code",
            hardEn: ["Develop and deploy code", "Compile and run code", "Design and review code", "Debug and fix code", "Analyze and optimize code", "Refactor and update code", "Inspect and verify code", "Document and test code", "Build and ship code", "Create and run unit tests", "Check and validate code", "Execute and monitor code", "Program and evaluate code", "Draft and check code", "Implement and test algorithms"],
            hardFr: ["Développer et déployer le code", "Compiler et exécuter le code", "Concevoir et réviser le code", "Déboguer et corriger le code", "Analyser et optimiser le code", "Refactoriser et mettre à jour le code", "Inspecter et vérifier le code", "Documenter et tester le code", "Construire et livrer le code", "Créer et exécuter des tests unitaires", "Vérifier et valider le code", "Exécuter et surveiller le code", "Programmer et évaluer le code", "Rédiger et vérifier le code", "Implémenter et tester des algorithmes"]
        },
        {
            fr: "Collaborer avec des développeurs",
            en: "Collaborate with developers",
            hardEn: ["Manage development teams", "Communicate with project managers", "Work with database administrators", "Partner with system engineers", "Coordinate with software testers", "Assist junior programmers", "Sync with engineering leads", "Contradict developer inputs", "Isolate development tasks", "Direct programming staff", "Supervise code contributors", "Review peer code", "Share programming tasks", "Align with tech teams", "Support development workflows"],
            hardFr: ["Gérer des équipes de développement", "Communiquer avec les chefs de projet", "Travailler avec des administrateurs de bases de données", "S'associer à des ingénieurs système", "Coordonner avec des testeurs logiciels", "Aider les programmeurs juniors", "Se synchroniser avec les leads techniques", "Contredire les apports des développeurs", "Isoler les tâches de développement", "Diriger le personnel de programmation", "Superviser les contributeurs de code", "Réviser le code des pairs", "Partager les tâches de programmation", "S'aligner avec les équipes techniques", "Soutenir les flux de développement"]
        },
        {
            fr: "Utiliser des outils de développement",
            en: "Use development tools",
            hardEn: ["Deploy production servers", "Configure network routers", "Operate testing software", "Install operating systems", "Manage database systems", "Utilize code editors", "Run command line tools", "Handle version control", "Build compilation scripts", "Launch debugging utilities", "Setup development environments", "Monitor system performance", "Analyze software logs", "Access cloud platforms", "Integrate software plugins"],
            hardFr: ["Déployer des serveurs de production", "Configurer des routeurs réseau", "Exploiter des logiciels de test", "Installer des systèmes d'exploitation", "Gérer des systèmes de bases de données", "Utiliser des éditeurs de code", "Exécuter des outils en ligne de commande", "Gérer le contrôle de version", "Créer des scripts de compilation", "Lancer des utilitaires de débogage", "Configurer des environnements de développement", "Surveiller la performance du système", "Analyser les journaux logiciels", "Accéder aux plateformes cloud", "Intégrer des plugins logiciels"]
        },
        {
            fr: "Créer des applications ergonomiques",
            en: "Create ergonomic applications",
            hardEn: ["Design user-friendly interfaces", "Build responsive layouts", "Develop intuitive software", "Optimize user experience", "Construct accessible applications", "Implement clean UI designs", "Produce user-centric software", "Formulate seamless navigation", "Craft efficient interfaces", "Program user-friendly tools", "Establish accessibility standards", "Enhance app usability", "Refine user workflows", "Shape intuitive software", "Design comfortable interfaces"],
            hardFr: ["Concevoir des interfaces conviviales", "Construire des mises en page adaptatives", "Développer des logiciels intuitifs", "Optimiser l'expérience utilisateur", "Construire des applications accessibles", "Implémenter des designs d'UI épurés", "Produire des logiciels centrés utilisateur", "Formuler une navigation fluide", "Créer des interfaces efficaces", "Programmer des outils conviviaux", "Établir des normes d'accessibilité", "Améliorer l'ergonomie des applications", "Affiner les flux utilisateurs", "Façonner des logiciels intuitifs", "Concevoir des interfaces confortables"]
        },
        {
            fr: "Ecouter, analyser et rédiger les besoins",
            en: "Listen, analyze and write needs",
            hardEn: ["Gather, process and document requirements", "Hear, review and publish specifications", "Collect, evaluate and format goals", "Capture, study and author use cases", "Listen, break down and outline requests", "Observe, assess and formulate demands", "Record, inspect and structure expectations", "Attend, interpret and write guidelines", "Hear, dissect and draft deliverables", "Understand, map and compile objectives", "Collect, judge and draft proposals", "Listen, compute and author standards", "Consult, analyze and log requirements", "Review, synthesize and write criteria", "Gather, study and document features"],
            hardFr: ["Recueillir, traiter et documenter les exigences", "Écouter, examiner et publier des spécifications", "Collecter, évaluer et formater des objectifs", "Capturer, étudier et rédiger des cas d'utilisation", "Écouter, décomposer et esquisser des demandes", "Observer, évaluer et formuler des exigences", "Enregistrer, inspecter et structurer les attentes", "Assister, interpréter et rédiger des directives", "Écouter, disséquer et rédiger des livrables", "Comprendre, cartographier et compiler des objectifs", "Collecter, juger et rédiger des propositions", "Écouter, calculer et rédiger des normes", "Consulter, analyser et consigner les exigences", "Examiner, synthétiser et rédiger des critères", "Recueillir, étudier et documenter des fonctionnalités"]
        },
        {
            fr: "Être garant de la pérennité et de l'évolution des solutions",
            en: "To guarantee the sustainability and evolution of solutions",
            hardEn: ["To ensure the stability and growth of systems", "To secure the durability and update of software", "To maintain the longevity and progress of programs", "To protect the permanence and scaling of applications", "To uphold the sustainability and development of tech", "To validate the continuity and enhancement of tools", "To support the resilience and expansion of platforms", "To safeguard the persistence and adaptation of code", "To oversee the lifetime and redesign of services", "To champion the viability and modernization of systems", "To guarantee the reliability and scaling of software", "To ensure the continuity and upgrading of solutions", "To secure the sustainability and transition of apps", "To maintain the longevity and improvement of platforms", "To protect the permanence and maturation of systems"],
            hardFr: ["Assurer la stabilité et la croissance des systèmes", "Sécuriser la durabilité et la mise à jour des logiciels", "Maintenir la longévité et le progrès des programmes", "Protéger la permanence et le passage à l'échelle des applications", "Soutenir la durabilité et le développement de la tech", "Valider la continuité et l'amélioration des outils", "Soutenir la résilience et l'expansion des plateformes", "Sauvegarder la persistance et l'adaptation du code", "Superviser la durée de vie et la refonte des services", "Défendre la viabilité et la modernisation des systèmes", "Garantir la fiabilité et le passage à l'échelle des logiciels", "Assurer la continuité et la mise à niveau des solutions", "Sécuriser la durabilité et la transition des applications", "Maintenir la longévité et l'amélioration des plateformes", "Protéger la permanence et la maturation des systèmes"]
        },
        {
            fr: "Respecter les délais, les coûts et la qualité",
            en: "Meet deadlines, costs and quality",
            hardEn: ["Respect schedules, budgets and standards", "Achieve timelines, expenses and excellence", "Fulfill targets, pricing and craftsmanship", "Maintain timespans, funding and grade", "Honor periods, finances and specifications", "Deliver on time, budget and expectations", "Manage schedules, resources and worth", "Control timetables, investments and value", "Balance timeframes, capitals and refinement", "Sustain deadlines, outlays and virtues", "Attain time limits, fiscal plans and purity", "Observe schedules, expenditures and prestige", "Preserve timelines, budgets and metrics", "Satisfy time limits, economics and rigor", "Accomplish schedules, bills and goodness"],
            hardFr: ["Respecter les plannings, budgets et normes", "Atteindre les échéances, dépenses et l'excellence", "Remplir les objectifs, la tarification et l'artisanat", "Maintenir les durées, le financement et le grade", "Honorer les périodes, les finances et les spécifications", "Livrer dans les temps, le budget et les attentes", "Gérer les plannings, les ressources et la valeur", "Contrôler les calendriers, les investissements et la valeur", "Équilibrer les délais, les capitaux et le raffinement", "Soutenir les délais, les débours et les vertus", "Atteindre les limites de temps, les plans fiscaux et la pureté", "Observer les plannings, les dépenses et le prestige", "Préserver les calendriers, les budgets et les métriques", "Satisfaire les limites de temps, l'économie et la rigueur", "Accomplir les plannings, les factures et la qualité"]
        },
        {
            fr: "Satisfaire les attentes du client",
            en: "Meet client expectations",
            hardEn: ["Fulfill customer requirements", "Satisfy user demands", "Accomplish client goals", "Achieve customer satisfaction", "Exceed client standards", "Realize user specifications", "Answer customer needs", "Deliver client objectives", "Match customer desires", "Obtain client approval", "Complete customer orders", "Realize client wishes", "Secure customer trust", "Satisfy consumer requests", "Fulfill buyer needs"],
            hardFr: ["Répondre aux exigences des clients", "Satisfaire les demandes des utilisateurs", "Accomplir les objectifs des clients", "Atteindre la satisfaction client", "Dépasser les normes des clients", "Réaliser les spécifications des utilisateurs", "Répondre aux besoins des clients", "Livrer les objectifs des clients", "Correspondre aux désirs des clients", "Obtenir l'approbation du client", "Compléter les commandes des clients", "Réaliser les souhaits des clients", "Sécuriser la confiance des clients", "Satisfaire les demandes des consommateurs", "Remplir les besoins des acheteurs"]
        },
        {
            fr: "Piloter une projet d'ingénierie logicielle",
            en: "Lead a software engineering project",
            hardEn: ["Manage a software development team", "Direct an IT engineering initiative", "Supervise a coding project", "Govern a software lifecycle", "Coordinate a technical project", "Administer a software system", "Guide an engineering operation", "Execute a software program", "Oversee a technical build", "Control a software design plan", "Orchestrate an IT development task", "Head a software creation process", "Facilitate an engineering workflow", "Drive a software methodology", "Chair a technical project group"],
            hardFr: ["Gérer une équipe de développement logiciel", "Diriger une initiative d'ingénierie informatique", "Superviser un projet de codage", "Gouverner un cycle de vie logiciel", "Coordonner un projet technique", "Administrer un système logiciel", "Guider une opération d'ingénierie", "Exécuter un programme logiciel", "Superviser une construction technique", "Contrôler un plan de conception logicielle", "Orchestrer une tâche de développement informatique", "Diriger un processus de création logicielle", "Faciliter un flux de travail d'ingénierie", "Piloter une méthodologie logicielle", "Présider un groupe de projet technique"]
        },
        {
            fr: "Construire un cahier des charges",
            en: "Build specifications",
            hardEn: ["Develop project requirements", "Draft technical standards", "Create functional guidelines", "Establish project criteria", "Formulate system rules", "Design system parameters", "Write architectural requirements", "Assemble project parameters", "Generate technical guidelines", "Construct project documentation", "Establish design criteria", "Outline system specifications", "Define project requirements", "Draft functional plans", "Prepare project guidelines"],
            hardFr: ["Développer les exigences du projet", "Rédiger des normes techniques", "Créer des directives fonctionnelles", "Établir des critères de projet", "Formuler des règles système", "Concevoir des paramètres système", "Rédiger des exigences architecturales", "Assembler des paramètres de projet", "Générer des directives techniques", "Construire de la documentation de projet", "Établir des critères de conception", "Esquisser des spécifications système", "Définir les exigences du projet", "Rédiger des plans fonctionnels", "Préparer des directives de projet"]
        },
        {
            fr: "Gérer les données de l'entreprise",
            en: "Manage company data",
            hardEn: ["Administer corporate information", "Control enterprise datasets", "Handle business files", "Supervise organizational data", "Govern corporate databases", "Direct enterprise records", "Process company information", "Secure business data", "Maintain corporate archives", "Organize enterprise files", "Coordinate company databases", "Regulate business information", "Store corporate records", "Monitor enterprise datasets", "Execute data governance"],
            hardFr: ["Administrer les informations d'entreprise", "Contrôler les ensembles de données d'entreprise", "Gérer les fichiers commerciaux", "Superviser les données organisationnelles", "Gouverner les bases de données d'entreprise", "Diriger les dossiers d'entreprise", "Traiter les informations d'entreprise", "Sécuriser les données commerciales", "Maintenir les archives d'entreprise", "Organiser les fichiers d'entreprise", "Coordonner les bases de données d'entreprise", "Réglementer les informations commerciales", "Stocker les dossiers d'entreprise", "Surveiller les ensembles de données d'entreprise", "Exécuter la gouvernance des données"]
        },
        {
            fr: "Développer des applications mobiles",
            en: "Develop mobile apps",
            hardEn: ["Build smartphone software", "Create handheld programs", "Design mobile applications", "Program phone software", "Engineer mobile tools", "Construct tablet applications", "Deploy mobile systems", "Code portable apps", "Formulate mobile software", "Produce mobile applications", "Establish smartphone tools", "Craft mobile programs", "Generate handheld software", "Assemble mobile apps", "Develop portable platforms"],
            hardFr: ["Construire des logiciels pour smartphones", "Créer des programmes pour appareils portables", "Concevoir des applications mobiles", "Programmer des logiciels pour téléphones", "Concevoir des outils mobiles", "Construire des applications pour tablettes", "Déployer des systèmes mobiles", "Coder des applications portables", "Formuler des logiciels mobiles", "Produire des applications mobiles", "Établir des outils pour smartphones", "Créer des programmes mobiles", "Générer des logiciels pour appareils portables", "Assembler des applications mobiles", "Développer des plateformes portables"]
        },
        {
            fr: "Accompagner la stratégie de l'entreprise",
            en: "Support the company's strategy",
            hardEn: ["Guide the enterprise plan", "Back the corporate goals", "Assist the business strategy", "Foster the organization's vision", "Promote the company roadmap", "Align with corporate strategy", "Advise on company planning", "Advance the enterprise mission", "Bolster corporate direction", "Endorse company objectives", "Contribute to business planning", "Facilitate corporate strategy", "Drive company vision", "Sustain enterprise planning", "Partner in corporate strategy"],
            hardFr: ["Guider le plan d'entreprise", "Soutenir les objectifs d'entreprise", "Aider la stratégie commerciale", "Favoriser la vision de l'organisation", "Promouvoir la feuille de route de l'entreprise", "S'aligner sur la stratégie d'entreprise", "Conseiller sur la planification d'entreprise", "Faire progresser la mission de l'entreprise", "Soutenir la direction de l'entreprise", "Approuver les objectifs de l'entreprise", "Contribuer à la planification d'entreprise", "Faciliter la stratégie d'entreprise", "Piloter la vision de l'entreprise", "Soutenir la planification d'entreprise", "S'associer à la stratégie d'entreprise"]
        },
        {
            fr: "Suivre les principes et bonnes pratiques de développement",
            en: "Follow development principles and best practices",
            hardEn: ["Adhere to coding standards and guidelines", "Observe software creation rules", "Comply with programming methods", "Pursue development norms", "Obey software engineering rules", "Adopt coding best practices", "Maintain development standards", "Respect software methodologies", "Apply coding guidelines", "Embrace software principles", "Execute standard practices", "Uphold development rules", "Implement standard coding methods", "Conform to software principles", "Keep development guidelines"],
            hardFr: ["Respecter les normes et directives de codage", "Observer les règles de création logicielle", "Se conformer aux méthodes de programmation", "Poursuivre les normes de développement", "Obéir aux règles d'ingénierie logicielle", "Adopter les meilleures pratiques de codage", "Maintenir les normes de développement", "Respecter les méthodologies logicielles", "Appliquer les directives de codage", "Adopter les principes logiciels", "Exécuter des pratiques standard", "Soutenir les règles de développement", "Implémenter des méthodes de codage standard", "Se conformer aux principes logiciels", "Conserver les directives de développement"]
        },
        {
            fr: "Analyser et identifier tous les problèmes potentiels",
            en: "Analyze and identify any potential problems",
            hardEn: ["Examine and detect all possible issues", "Study and locate potential errors", "Evaluate and recognize all risks", "Inspect and find potential bugs", "Review and pinpoint any failures", "Assess and discover all faults", "Investigate and reveal potential defects", "Check and isolate possible threats", "Scan and identify all weaknesses", "Monitor and trace potential glitches", "Audit and spot any issues", "Test and catch potential flaws", "Observe and detect all errors", "Explore and identify potential risks", "Survey and locate any problems"],
            hardFr: ["Examiner et détecter tous les problèmes possibles", "Étudier et localiser les erreurs potentielles", "Évaluer et reconnaître tous les risques", "Inspecter et trouver des bugs potentiels", "Examiner et épingler toute défaillance", "Évaluer et découvrir tous les défauts", "Enquêter et révéler des défauts potentiels", "Vérifier et isoler les menaces possibles", "Scanner et identifier toutes les faiblesses", "Surveiller et tracer les bugs potentiels", "Auditer et repérer tout problème", "Tester et attraper les failles potentielles", "Observer et détecter toutes les erreurs", "Explorer et identifier les risques potentiels", "Enquêter et localiser tout problème"]
        },
        {
            fr: "Améliorer et maintenir le logiciel à long terme",
            en: "Improve and maintain the software in the long term",
            hardEn: ["Upgrade and support the application over time", "Optimize and preserve the software permanently", "Enhance and sustain the program continuously", "Refine and keep the system updated", "Develop and safeguard the application over time", "Progress and manage the software steadily", "Modernize and watch over the program", "Augment and upkeep the system consistently", "Advance and protect the software permanently", "Boost and oversee the program over time", "Fix and sustain the application continuously", "Extend and preserve the system steadily", "Grow and maintain the software consistently", "Elevate and support the program permanently", "Reform and upkeep the application over time"],
            hardFr: ["Mettre à niveau et prendre en charge l'application au fil du temps", "Optimiser et préserver le logiciel de manière permanente", "Améliorer et soutenir le programme en continu", "Affiner et maintenir le système à jour", "Développer et sauvegarder l'application au fil du temps", "Progresser et gérer le logiciel de manière stable", "Moderniser et surveiller le programme", "Augmenter et entretenir le système de manière cohérente", "Avancer et protéger le logiciel de manière permanente", "Amplifier et superviser le programme au fil du temps", "Corriger et soutenir l'application en continu", "Étendre et préserver le système de manière stable", "Développer et maintenir le logiciel de manière cohérente", "Élever et soutenir le programme de manière permanente", "Réformer et entretenir l'application au fil du temps"]
        },
        {
            fr: "Traduire le besoin du client en demandes fonctionnelles",
            en: "Translate the client's need into functional demands",
            hardEn: ["Convert user requirements into technical specifications", "Transform customer needs into functional requests", "Change client goals into application features", "Shift customer demands into system requirements", "Turn user requests into functional tasks", "Adapt client needs into software criteria", "Translate customer problems into functional solutions", "Process user expectations into system specifications", "Migrate client requests into functional workflows", "Switch customer needs into application criteria", "Decode user requirements into functional tasks", "Encode client goals into software requests", "Reformulate customer needs into functional features", "Map user demands to system specifications", "Interpret client requests into functional deliverables"],
            hardFr: ["Convertir les exigences utilisateur en spécifications techniques", "Transformer les besoins clients en demandes fonctionnelles", "Changer les objectifs clients en fonctionnalités d'application", "Déplacer les demandes clients vers des exigences système", "Transformer les demandes utilisateur en tâches fonctionnelles", "Adapter les besoins clients en critères logiciels", "Traduire les problèmes clients en solutions fonctionnelles", "Traiter les attentes utilisateur en spécifications système", "Migrer les demandes clients vers des flux fonctionnels", "Basculer les besoins clients vers des critères d'application", "Décoder les exigences utilisateur en tâches fonctionnelles", "Encoder les objectifs clients en demandes logicielles", "Reformuler les besoins clients en fonctionnalités fonctionnelles", "Mettre en correspondance les demandes utilisateur avec les spécifications système", "Interpréter les demandes clients en livrables fonctionnels"]
        },
        {
            fr: "Analyser et décrire les tâches à réaliser par l'ordinateur",
            en: "Analyze and describe the tasks to be performed by the computer",
            hardEn: ["Examine and outline processes for machine execution", "Study and detail tasks for computer processing", "Evaluate and define operations for system execution", "Inspect and specify procedures for computer tasks", "Review and document operations for machine processing", "Assess and characterize tasks for computer execution", "Investigate and explain processes for system tasks", "Check and log operations for computer processing", "Audit and detail processes for machine execution", "Monitor and outline tasks for computer processing", "Test and specify operations for system execution", "Survey and define procedures for computer tasks", "Explore and document operations for machine processing", "Query and characterize tasks for computer execution", "Parse and explain processes for system tasks"],
            hardFr: ["Examiner et esquisser des processus pour l'exécution par machine", "Étudier et détailler des tâches pour le traitement informatique", "Évaluer et définir des opérations pour l'exécution par le système", "Inspecter et spécifier des procédures pour des tâches informatiques", "Examiner et documenter des opérations pour le traitement par machine", "Évaluer et caractériser des tâches pour l'exécution informatique", "Enquêter et expliquer des processus pour des tâches système", "Vérifier et consigner des opérations pour le traitement informatique", "Auditer et détailler des processus pour l'exécution par machine", "Surveiller et esquisser des tâches pour le traitement informatique", "Tester et spécifier des opérations pour l'exécution par le système", "Enquêter et définir des procédures pour des tâches informatiques", "Explorer et documenter des opérations pour le traitement par machine", "Interroger et caractériser des tâches pour l'exécution informatique", "Analyser et expliquer des processus pour des tâches système"]
        },
        {
            fr: "Déterminer et schématiser les fonctionnalités du logiciel",
            en: "Determine and schematize the software functionalities",
            hardEn: ["Define and map software features", "Identify and outline application capabilities", "Specify and diagram system functions", "Establish and chart program features", "Calculate and model software functionalities", "Design and structure application features", "Outline and map system capabilities", "Evaluate and diagram software functions", "Plan and chart program functionalities", "Specify and model software features", "Determine and diagram application capabilities", "Identify and chart system functions", "Define and structure program features", "Establish and map software functionalities", "Calculate and outline application features"],
            hardFr: ["Définir et cartographier les fonctionnalités logicielles", "Identifier et esquisser les capacités des applications", "Spécifier et diagrammer les fonctions système", "Établir et tracer les fonctionnalités des programmes", "Calculer et modéliser les fonctionnalités logicielles", "Concevoir et structurer les fonctionnalités des applications", "Esquisser et cartographier les capacités système", "Évaluer et diagrammer les fonctions logicielles", "Planifier et tracer les fonctionnalités des programmes", "Spécifier et modéliser les fonctionnalités logicielles", "Déterminer et diagrammer les capacités des applications", "Identifier et tracer les fonctions système", "Définir et structurer les fonctionnalités des programmes", "Établir et cartographier les fonctionnalités logicielles", "Calculer et esquisser les fonctionnalités des applications"]
        },
        {
            fr: "Déceler les défauts de programmation",
            en: "Identify programming defects",
            hardEn: ["Detect coding errors", "Find software bugs", "Uncover programming flaws", "Spot software mistakes", "Discover code issues", "Locate programming faults", "Identify software errors", "Recognize coding bugs", "Pinpoint programming mistakes", "Reveal software flaws", "Catch coding defects", "Trace programming errors", "Expose software bugs", "Isolate coding faults", "Diagnose programming issues"],
            hardFr: ["Détecter des erreurs de codage", "Trouver des bugs logiciels", "Découvrir des failles de programmation", "Repérer des erreurs logicielles", "Découvrir des problèmes de code", "Localiser des défauts de programmation", "Identifier des erreurs logicielles", "Reconnaître des bugs de codage", "Épingler des erreurs de programmation", "Révéler des failles logicielles", "Attraper des défauts de codage", "Tracer des erreurs de programmation", "Exposer des bugs logiciels", "Isoler des défauts de codage", "Diagnostiquer des problèmes de programmation"]
        },
        {
            fr: "Effectuer des traitements par lot",
            en: "Perform batch processes",
            hardEn: ["Execute bulk operations", "Run scheduled jobs", "Process automated tasks", "Perform mass updates", "Handle batch data", "Run background processes", "Execute queued tasks", "Process bulk files", "Perform offline jobs", "Run automated scripts", "Handle mass data", "Execute bulk queries", "Process scheduled tasks", "Perform batch jobs", "Run background jobs"],
            hardFr: ["Exécuter des opérations en masse", "Lancer des tâches planifiées", "Traiter des tâches automatisées", "Effectuer des mises à jour de masse", "Gérer des données par lot", "Exécuter des processus en arrière-plan", "Exécuter des tâches en file d'attente", "Traiter des fichiers en masse", "Effectuer des travaux hors ligne", "Lancer des scripts automatisés", "Gérer des données massives", "Exécuter des requêtes en masse", "Traiter des tâches planifiées", "Effectuer des travaux par lot", "Lancer des tâches en arrière-plan"]
        },
        {
            fr: "Contrôler les évolutions et les différentes versions du logiciel",
            en: "Control developments and different versions of the software",
            hardEn: ["Manage changes and software releases", "Track modifications and application versions", "Monitor updates and program revisions", "Supervise developments and software builds", "Handle upgrades and version control", "Direct changes and program releases", "Coordinate updates and software branches", "Oversee modifications and release versions", "Administer developments and software builds", "Regulate changes and version history", "Govern updates and application revisions", "Check modifications and software releases", "Inspect changes and version branches", "Review updates and software builds", "Audit modifications and program versions"],
            hardFr: ["Gérer les changements et les versions logicielles", "Suivre les modifications et les versions d'applications", "Surveiller les mises à jour et les révisions de programmes", "Superviser les développements et les constructions logicielles", "Gérer les mises à niveau et le contrôle de version", "Diriger les changements et les versions de programmes", "Coordonner les mises à jour et les branches logicielles", "Superviser les modifications et les versions publiées", "Administrer les développements et les constructions logicielles", "Réglementer les changements et l'historique des versions", "Gouverner les mises à jour et les révisions d'applications", "Vérifier les modifications et les versions logicielles", "Inspecter les changements et les branches de versions", "Examiner les mises à jour et les constructions logicielles", "Auditer les modifications et les versions de programmes"]
        },
        {
            fr: "Maintenir en condition opérationnelle le logiciel",
            en: "Keep the software in operational condition",
            hardEn: ["Ensure software uptime and functionality", "Maintain application availability", "Preserve software performance and health", "Sustain operational software status", "Guarantee software reliability and uptime", "Support continuous software operations", "Protect application functionality", "Maintain system operational readiness", "Secure software availability", "Keep applications running smoothly", "Sustain software functionality and health", "Ensure application operational readiness", "Preserve software reliability", "Maintain running software status", "Guarantee system operational health"],
            hardFr: ["Assurer la disponibilité et la fonctionnalité des logiciels", "Maintenir la disponibilité des applications", "Préserver la performance et la santé des logiciels", "Maintenir le statut opérationnel du logiciel", "Garantir la fiabilité et la disponibilité des logiciels", "Soutenir les opérations logicielles continues", "Protéger la fonctionnalité des applications", "Maintenir la disponibilité opérationnelle du système", "Sécuriser la disponibilité des logiciels", "Maintenir les applications en cours d'exécution", "Soutenir la fonctionnalité et la santé des logiciels", "Assurer la disponibilité opérationnelle des applications", "Préserver la fiabilité logicielle", "Maintenir le statut du logiciel en cours d'exécution", "Garantir la santé opérationnelle du système"]
        },
        {
            fr: "Mettre en production à l'issue des phases de qualification et d'intégration",
            en: "Put into production at the end of the qualification and integration phases",
            hardEn: ["Deploy to production after testing and merging", "Release live after validation and integration", "Launch into production following test phases", "Ship software post-qualification and integration", "Deploy live after QA and integration stages", "Publish to production following testing and merging", "Roll out live post-testing and integration", "Transfer to production after QA and integration", "Deliver to production post-qualification and building", "Push live following testing and integration steps", "Release into production after validation and building", "Deploy to production post-qualification and merging", "Launch live following testing and integration phases", "Ship live post-QA and integration steps", "Publish into production after testing and integration"],
            hardFr: ["Déployer en production après les tests et la fusion", "Publier en direct après validation et intégration", "Lancer en production suite aux phases de test", "Livrer le logiciel après qualification et intégration", "Déployer en direct après les étapes de QA et d'intégration", "Publier en production suite aux tests et à la fusion", "Déployer en direct après les tests et l'intégration", "Transférer en production après QA et intégration", "Livrer en production après qualification et construction", "Pousser en direct suite aux étapes de test et d'intégration", "Publier en production après validation et construction", "Déployer en production après qualification et fusion", "Lancer en direct suite aux phases de test et d'intégration", "Livrer en direct après les étapes de QA et d'intégration", "Publier en production après les tests et l'intégration"]
        },
        {
            fr: "Rédiger le code source qui constitue le corps du logiciel",
            en: "Write the source code that forms the body of the software",
            hardEn: ["Develop the code base for the software", "Program the core components of the application", "Author the software implementation code", "Construct the primary code of the program", "Build the foundation code of the software", "Program the underlying logic of the application", "Create the codebase making up the software", "Draft the source implementation for the program", "Write the core programming for the software", "Develop the primary code structure of the app", "Program the central codebase of the software", "Author the source files for the application", "Construct the underlying code of the program", "Build the core software implementation", "Create the foundational code of the application"],
            hardFr: ["Développer la base de code du logiciel", "Programmer les composants principaux de l'application", "Rédiger le code d'implémentation du logiciel", "Construire le code primaire du programme", "Construire le code de fondation du logiciel", "Programmer la logique sous-jacente de l'application", "Créer la base de code constituant le logiciel", "Rédiger l'implémentation source du programme", "Écrire la programmation principale du logiciel", "Développer la structure de code principale de l'application", "Programmer la base de code centrale du logiciel", "Rédiger les fichiers source de l'application", "Construire le code sous-jacent du programme", "Construire l'implémentation logicielle centrale", "Créer le code fondateur de l'application"]
        },
        {
            fr: "Mettre en œuvre l'agilité au sein d'une équipe de développeurs",
            en: "Implement agility as part of a team of developers",
            hardEn: ["Adopt agile practices within a development group", "Apply agile methodologies in a coding team", "Integrate agile workflows among developers", "Deploy agile frameworks in a programming unit", "Execute agile processes within a tech team", "Incorporate agile principles in a developer group", "Practice agile methods across a coding team", "Establish agile routines within a development unit", "Adopt agile frameworks among programmers", "Apply agile workflows in a tech group", "Integrate agile methods in a development team", "Deploy agile practices within a coding unit", "Execute agile principles across developers", "Incorporate agile methodologies in a tech team", "Practice agile routines within a programming group"],
            hardFr: ["Adopter des pratiques agiles au sein d'un groupe de développement", "Appliquer des méthodologies agiles dans une équipe de codage", "Intégrer des flux agiles parmi les développeurs", "Déployer des cadres agiles dans une unité de programmation", "Exécuter des processus agiles au sein d'une équipe technique", "Incorporer des principes agiles dans un groupe de développeurs", "Pratiquer des méthodes agiles dans une équipe de codage", "Établir des routines agiles au sein d'une unité de développement", "Adopter des cadres agiles parmi les programmeurs", "Appliquer des flux agiles dans un groupe technique", "Intégrer des méthodes agiles dans une équipe de développement", "Déployer des pratiques agiles dans une unité de codage", "Exécuter des principes agiles à travers les développeurs", "Incorporer des méthodologies agiles dans une équipe technique", "Pratiquer des routines agiles dans un groupe de programmation"]
        },
        {
            fr: "Diriger des projets collaboratifs",
            en: "Lead collaborative projects",
            hardEn: ["Manage teamwork initiatives", "Supervise group projects", "Direct cooperative ventures", "Oversee joint undertakings", "Guide collaborative assignments", "Coordinate team projects", "Administer cooperative tasks", "Govern joint initiatives", "Head collaborative programs", "Facilitate teamwork projects", "Control cooperative efforts", "Run joint projects", "Command collaborative tasks", "Steer cooperative ventures", "Chair teamwork assignments"],
            hardFr: ["Gérer des initiatives de travail en équipe", "Superviser des projets de groupe", "Diriger des entreprises coopératives", "Surveiller des entreprises conjointes", "Guider des missions collaboratives", "Coordonner des projets d'équipe", "Administrer des tâches coopératives", "Gouverner des initiatives conjointes", "Diriger des programmes collaboratifs", "Faciliter des projets de travail en équipe", "Contrôler des efforts coopératifs", "Exécuter des projets conjoints", "Commander des tâches collaboratives", "Piloter des entreprises coopératives", "Présider des missions de travail en équipe"]
        },
        {
            fr: "Vérifier que les fonctions offertes par le logiciel correspondent aux attentes du client",
            en: "Make sure the features offered by the software are in line with the customer's expectations",
            hardEn: ["Ensure software capabilities match user requirements", "Validate that application features meet client needs", "Confirm software functions align with expectations", "Check that system features satisfy customer goals", "Verify application functions match user demands", "Ensure software features fulfill client standards", "Validate application capabilities meet expectations", "Confirm system functions align with user needs", "Check software features satisfy client requirements", "Verify that application functions meet customer goals", "Ensure system capabilities match user demands", "Validate software features fulfill client standards", "Confirm application functions align with user expectations", "Check that system features satisfy customer needs", "Verify software functions match client requirements"],
            hardFr: ["S'assurer que les capacités du logiciel correspondent aux exigences des utilisateurs", "Valider que les fonctionnalités de l'application répondent aux besoins des clients", "Confirmer que les fonctions du système s'alignent sur les attentes", "Vérifier que les fonctionnalités du système satisfont les objectifs des clients", "Vérifier que les fonctions de l'application correspondent aux demandes des utilisateurs", "S'assurer que les fonctionnalités du logiciel remplissent les normes des clients", "Valider que les capacités de l'application répondent aux attentes", "Confirmer que les fonctions du système s'alignent sur les besoins des utilisateurs", "Vérifier que les fonctionnalités du logiciel satisfont les exigences des clients", "Vérifier que les fonctions de l'application répondent aux objectifs des clients", "S'assurer que les capacités du système correspondent aux demandes des utilisateurs", "Valider que les fonctionnalités du logiciel remplissent les normes des clients", "Confirmer que les fonctions de l'application s'alignent sur les attentes des utilisateurs", "Vérifier que les fonctionnalités du système satisfont les besoins des clients", "Vérifier que les fonctions du logiciel correspondent aux exigences des clients"]
        },
        {
            fr: "Définir les étapes clés de cycle de vie du projet",
            en: "Define key lifecycle milestones for the project",
            hardEn: ["Establish primary project stages", "Identify core lifecycle phases", "Set main project milestones", "Outline key development stages", "Specify crucial lifecycle phases", "Determine primary project milestones", "Designate core development stages", "Plan key project lifecycle phases", "Map out main project milestones", "Specify major development stages", "Determine crucial lifecycle phases", "Establish core project milestones", "Identify primary development stages", "Set key lifecycle phases", "Outline main project milestones"],
            hardFr: ["Établir les étapes principales du projet", "Identifier les phases clés du cycle de vie", "Fixer les jalons principaux du projet", "Esquisser les étapes de développement clés", "Spécifier les phases cruciales du cycle de vie", "Déterminer les jalons principaux du projet", "Désigner les étapes de développement principales", "Planifier les phases clés du cycle de vie du projet", "Cartographier les jalons principaux du projet", "Spécifier les étapes de développement majeures", "Déterminer les phases cruciales du cycle de vie", "Établir les jalons principaux du projet", "Identifier les étapes de développement principales", "Fixer les phases clés du cycle de vie", "Esquisser les jalons principaux du projet"]
        },
        {
            fr: "Intégrer les environnements de développement",
            en: "Integrate development environments",
            hardEn: ["Merge coding platforms", "Connect development workspaces", "Unify programming environments", "Combine coding tools", "Link development setups", "Synchronize programming platforms", "Harmonize development workspaces", "Incorporate coding environments", "Blend development tools", "Consolidate programming setups", "Join development platforms", "Interface coding workspaces", "Fuse programming environments", "Align development tools", "Amalgamate coding setups"],
            hardFr: ["Fusionner les plateformes de codage", "Connecter les espaces de travail de développement", "Unifier les environnements de programmation", "Combiner les outils de codage", "Lier les configurations de développement", "Synchroniser les plateformes de programmation", "Harmoniser les espaces de travail de développement", "Incorporer les environnements de codage", "Mélanger les outils de développement", "Consolider les configurations de programmation", "Rejoindre les plateformes de développement", "Interfacer les espaces de travail de codage", "Fusionner les environnements de programmation", "Aligner les outils de développement", "Amalgamer les configurations de codage"]
        },
        {
            fr: "Gérer les modifications apportées au code source",
            en: "Manage changes to source code",
            hardEn: ["Control source code updates", "Handle code modifications", "Administer source code revisions", "Track source code changes", "Supervise code modifications", "Regulate source code updates", "Govern code revisions", "Direct source code modifications", "Oversee code updates", "Coordinate source code revisions", "Administer code modifications", "Handle source code updates", "Control code revisions", "Manage source code modifications", "Track code updates"],
            hardFr: ["Contrôler les mises à jour du code source", "Gérer les modifications de code", "Administrer les révisions du code source", "Suivre les modifications du code source", "Superviser les modifications de code", "Réglementer les mises à jour du code source", "Gouverner les révisions de code", "Diriger les modifications du code source", "Surveiller les mises à jour de code", "Coordonner les révisions du code source", "Administrer les modifications de code", "Gérer les mises à jour du code source", "Contrôler les révisions de code", "Gérer les modifications du code source", "Suivre les mises à jour de code"]
        },
        {
            fr: "Déployer le logiciel sur un serveur d'applications",
            en: "Deploy the software to an application server",
            hardEn: ["Install the software on an application server", "Publish the software to an application server", "Release the software to an application server", "Launch the software on an application server", "Transfer the software to an application server", "Upload the software to an application server", "Ship the software to an application server", "Push the software to an application server", "Migrate the software to an application server", "Move the software to an application server", "Configure the software on an application server", "Setup the software on an application server", "Run the software on an application server", "Host the software on an application server", "Deliver the software to an application server"],
            hardFr: ["Installer le logiciel sur un serveur d'applications", "Publier le logiciel sur un serveur d'applications", "Diffuser le logiciel sur un serveur d'applications", "Lancer le logiciel sur un serveur d'applications", "Transférer le logiciel sur un serveur d'applications", "Téléverser le logiciel sur un serveur d'applications", "Livrer le logiciel sur un serveur d'applications", "Pousser le logiciel sur un serveur d'applications", "Migrer le logiciel vers un serveur d'applications", "Déplacer le logiciel vers un serveur d'applications", "Configurer le logiciel sur un serveur d'applications", "Installer le logiciel sur un serveur d'applications", "Exécuter le logiciel sur un serveur d'applications", "Héberger le logiciel sur un serveur d'applications", "Livrer le logiciel sur un serveur d'applications"]
        }
    ]
};
