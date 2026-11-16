/* =========================================================
   CONTENU DU PORTFOLIO — à modifier ici, sans toucher au reste
   Pour ajouter un fichier : le placer dans assets/ puis indiquer
   son chemin, par exemple photo: "assets/photo.jpg".
   ========================================================= */
window.CONFIG = {
  name: "Molka Amara",
  role: "Ingénieure data · BI, IA & RPA",
  photo: "assets/molka.png",
  cv: null,                    // ex. "assets/CV-Molka-Amara.pdf"
  introVideo: null,            // ex. "assets/presentation.mp4"
  email: "molkaamara30@gmail.com",
  linkedin: "https://www.linkedin.com/in/amara-molka-b002902a2",
  linkedinLabel: "in/amara-molka",
  github: "https://github.com/molka0000",
  city: "Tunis, Tunisie",
  openToWork: true
};

window.TOOLS = [
  ["Python","#3d5a99"],["Power BI","#8fb3e0"],["Qlik Sense","#6b8fc9"],["UiPath","#4b3b7a"],
  ["LangChain","#7a6bb3"],["ChromaDB","#4b3b7a"],["Talend","#7a6bb3"],["SQL Server","#4b3b7a"],
  ["scikit-learn","#8fb3e0"],["LightGBM","#6b8fc9"],["Power Automate","#3d5a99"],["Streamlit","#4b3b7a"],
  ["Flask","#7a6bb3"],["Angular","#4b3b7a"],["OpenCV","#6b8fc9"],["Git","#4b3b7a"]
];

window.PROJECTS = [
{
  id:"amayas", featured:true, hot:"Projet phare",
  title:"Assistant IA pour conseillers bancaires",
  ctx:"Stage de fin d'études · Amayas Consulting, Paris · 2025",
  domain:"IA générative", cats:["ia"],
  short:"Un chatbot qui répond aux questions réglementaires des conseillers bancaires, leur résume l'actu du secteur et leur suggère les bons produits pour chaque client.",
  lede:"Mon projet de fin d'études, fait seule en six mois. L'idée : qu'un conseiller bancaire n'ait plus à fouiller des PDF de 300 pages pour répondre à un client. Il pose sa question, l'assistant répond en citant le bon article de loi.",
  tags:["Python","LangChain","ChromaDB","Llama 3 (Groq)","LightGBM","Streamlit","SQLite","pytest"],
  cover:"assets/amayas-accueil.jpg",
  kpis:[["3","modules intégrés"],["90 %","précision de classification"],["85 %","accuracy de la recommandation"],["~11 ms","recherche sémantique"]],
  parts:[
    {t:"Le point de départ", s:"Trop de textes, pas assez de temps", h:`<p>Un conseiller bancaire est censé connaître le Code des assurances, le Code monétaire et financier et le Code de la consommation, suivre l'actualité, et en plus bien conseiller chaque client. En pratique, il passe beaucoup de temps à chercher dans des PDF et sur des sites institutionnels. C'est ce temps-là que je voulais lui rendre.</p>`},
    {t:"Architecture", s:"Streamlit, LangChain, deux bases vectorielles", h:`<p>L'interface Streamlit s'appuie sur LangChain pour orchestrer le LLM. Deux bases ChromaDB séparent la réglementation et l'actualité, et SQLite conserve l'historique. Trois services externes : l'API Groq pour le LLM, l'API Webstat de la Banque de France pour les taux, et NewsAPI avec des flux RSS pour l'actualité.</p>`},
    {t:"Chat réglementaire (RAG)", s:"Des réponses sourcées sur les codes officiels", h:`<ul>
      <li><strong>Base de connaissances</strong> construite à partir des codes publiés sur Légifrance.</li>
      <li><strong>Découpage hiérarchique</strong> en passages de 800 caractères (chevauchement de 100), avec le numéro d'article en métadonnée.</li>
      <li><strong>Embeddings</strong> all-MiniLM-L6-v2 dans ChromaDB, recherche cosinus (k = 5, seuil 0,5).</li>
      <li><strong>Reformulation</strong> de la question avec l'historique, puis réponse en streaming par Llama 3.3 70B, avec ses sources.</li>
      <li><strong>Deux stratégies de synthèse</strong> comparées : affinage itératif et résumé arborescent asynchrone.</li>
      <li><strong>Function calling</strong> : pour un taux (Livret A, taux d'usure…), le modèle interroge l'API de la Banque de France au lieu d'inventer un chiffre.</li></ul><figure class="pfig" data-zoom><img src="assets/amayas-archi-rag.jpg" alt="Architecture du chatbot RAG réglementaire" loading="lazy"><figcaption>Architecture du chatbot RAG réglementaire</figcaption></figure><figure class="pfig" data-zoom><img src="assets/amayas-create-refine.jpg" alt="Synthèse par affinage itératif" loading="lazy"><figcaption>Synthèse par affinage itératif</figcaption></figure><figure class="pfig" data-zoom><img src="assets/amayas-archi-function-calling.jpg" alt="Function calling vers l'API Webstat de la Banque de France" loading="lazy"><figcaption>Function calling vers l'API Webstat de la Banque de France</figcaption></figure>`},
    {t:"Veille proactive", s:"L'actualité bancaire transformée en questions-réponses", h:`<ul>
      <li>Collecte via NewsAPI et des flux RSS institutionnels (AMF, Les Échos, ministère de l'Économie…).</li>
      <li>Nettoyage, dédoublonnage et score de pertinence par mots-clés et par source.</li>
      <li><strong>Classification hybride</strong> : dictionnaire métier, puis Llama 3.1 8B pour les cas ambigus (90 % de précision).</li>
      <li>Questions-réponses générées et classées en 5 familles et 18 sous-familles.</li></ul><figure class="pfig" data-zoom><img src="assets/amayas-archi-proactif.jpg" alt="Architecture du module de veille proactive" loading="lazy"><figcaption>Architecture du module de veille proactive</figcaption></figure>`},
    {t:"Recommandation de produits", s:"Machine learning et explication par le LLM", h:`<ul>
      <li><strong>5 modèles comparés</strong> sur un jeu de données clients simulé (~5 400 profils) : <strong>LightGBM retenu</strong>, accuracy 85,25 %, F1 macro 0,857.</li>
      <li>Indicateurs financiers calculés : taux d'endettement, reste à vivre, capacité d'épargne et d'emprunt.</li>
      <li>Règles d'éligibilité par produit : crédit immobilier, crédit auto, assurance vie, livret A et LDDS, prévoyance.</li>
      <li>Top 3 des produits avec une explication personnalisée rédigée par le LLM, et envoi au client par e-mail.</li></ul>
      <p>Le moteur est découpé en trois étapes, orchestrées par un <strong>Recommandation_Engine</strong> appelé depuis l'interface Streamlit :</p>
      <ol class="steps"><li><strong>Validation</strong> : le ProfileAnalyzer vérifie le profil saisi par le conseiller (schéma JSON) et calcule sa santé financière.</li><li><strong>Prédiction</strong> : le Product_Matcher charge le modèle LightGBM et son encodeur, puis classe les produits par score.</li><li><strong>Formatage</strong> : le LLM_Formatter (Llama via Groq) rédige le conseil qui accompagne le meilleur choix.</li></ol>
      <figure class="pfig" data-zoom><img src="assets/amayas-archi-recommandation.jpg" alt="Architecture du système de recommandation" loading="lazy"><figcaption>Architecture du système de recommandation : interface Streamlit et backend en trois étapes</figcaption></figure>`},
    {t:"Ce que j'en retiens", s:"Honnêtement", h:`<p>En arrivant, je ne savais presque rien des LLM ni des chatbots. J'ai suivi des cours sur Coursera le soir, lu beaucoup de documentation, et j'ai fini par livrer un assistant complet. C'est sans doute le projet dont je suis la plus fière.</p>
      <p>Le plus dur n'a pas été le code. C'était de m'assurer que le chatbot ne racontait pas n'importe quoi. J'ai relu ses réponses une par une en les comparant aux textes de loi, et j'ai fait énormément de tests avant d'être satisfaite.</p>`}
  ],
  results:[["Recherche sémantique","temps moyen sur 50 requêtes","~11 ms"],["RAG, évaluation préliminaire","7 questions de référence","F1 84 %"],["Choix du LLM","4 modèles comparés","Llama 3.3 70B"],["Classification d'actualités","précision","90 %"],["Recommandation","accuracy / F1 macro","85,25 % / 0,857"]],
  next:"Intégrer la recommandation directement dans le chat, élargir l'évaluation du RAG, automatiser la mise à jour de la base réglementaire, puis conteneuriser avec Docker et publier une démo en ligne.",
  gallery:[
    {src:"assets/amayas-archi-rag.jpg",cap:"Architecture du chatbot RAG réglementaire"},
    {src:"assets/amayas-archi-proactif.jpg",cap:"Architecture de la veille proactive"},
    {src:"assets/amayas-archi-function-calling.jpg",cap:"Function calling vers la Banque de France"},
    {src:"assets/amayas-create-refine.jpg",cap:"Synthèse par affinage itératif"},
    {src:"assets/amayas-accueil.jpg",cap:"Accueil du chatbot et thématiques disponibles"},
    {src:"assets/amayas-themes.jpg",cap:"Questions d'actualité classées par thème"},
    {src:"assets/amayas-profils.jpg",cap:"Profils clients types pour démarrer une analyse"},
    {src:"assets/amayas-recommandation.jpg",cap:"Analyse financière et produits recommandés"},
    {src:"assets/amayas-synthese-llm.jpg",cap:"Synthèse personnalisée rédigée par le LLM"}
  ],
  videos:[]   // ex. {src:"assets/demo-chatbot.mp4", poster:"assets/amayas-chat.jpg", cap:"Démo"}
},
{
  id:"toxicite", featured:true, hot:"Nouveau",
  title:"Pipeline d'analyse de toxicité d'articles de presse",
  ctx:"Exercice technique Data Engineer · recrutement · 2026",
  domain:"Data engineering & IA", cats:["de","ia"],
  short:"De la collecte d'articles sur 8 sites de presse jusqu'à une API de prédiction conteneurisée, avec MongoDB, FastAPI, un modèle Hugging Face et Docker.",
  lede:"Un exercice de recrutement à rendre en deux jours, que j'ai traité comme un vrai projet : collecter des articles récents, construire une API qui dit si un texte est toxique, analyser les résultats par site, puis tout déployer avec Docker.",
  tags:["Python","requests","trafilatura","MongoDB","FastAPI","Pydantic","Hugging Face","DistilBERT","pandas","Docker"],
  cover:"assets/toxicite-architecture.svg",
  kpis:[["146","articles collectés"],["7 / 8","sites collectés"],["4","briques : collecte, API, analyse, Docker"],["0 %","d'articles toxiques"]],
  parts:[
    {t:"Collecte des articles", s:"8 sites, du RSS au texte complet", h:`<ul>
      <li>Découverte des articles récents par <strong>flux RSS</strong>, avec un repli sur la page d'accueil quand le flux n'existe pas.</li>
      <li>Extraction du titre et du texte avec <strong>trafilatura</strong>, une solution générique plutôt que huit extracteurs écrits à la main.</li>
      <li>Client HTTP robuste : timeout, <strong>nouvelles tentatives avec backoff exponentiel</strong> sur les erreurs 429 et 5xx, journalisation de chaque échec.</li>
      <li>Stockage dans <strong>MongoDB</strong> avec un index unique sur l'URL : la collecte est incrémentale et sans doublons.</li>
      <li>Sites protégés contre les robots : je n'ai pas contourné les protections. J'ai utilisé le résumé publié dans leur flux RSS et je l'ai signalé dans les données.</li></ul>`},
    {t:"API de prédiction", s:"FastAPI et un modèle pré-entraîné", h:`<ul>
      <li>Modèle <strong>DistilBERT multilingue</strong> de Hugging Face, entraîné sur le jeu Jigsaw : il gère le français et l'anglais et tourne sur CPU.</li>
      <li>Textes longs découpés en morceaux de 200 mots ; le score retenu est celui du <strong>passage le plus toxique</strong>, pour ne pas diluer un paragraphe toxique.</li>
      <li>Validation des entrées avec <strong>Pydantic</strong>, codes d'erreur clairs (422, 500, 503), endpoint <code>/health</code> et documentation Swagger générée automatiquement.</li>
      <li>Modèle chargé une seule fois au démarrage ; chaque prédiction est enregistrée dans MongoDB avec le nom du modèle, pour la traçabilité.</li></ul>`},
    {t:"Analyse par site", s:"pandas et matplotlib", h:`<p>Chaque article reçoit un score, classé en « légèrement toxique » (0,5 à 0,8) ou « très toxique » (au-delà de 0,8). Les résultats par site sont stockés dans MongoDB et exportés en CSV et en graphique.</p>
      <p><strong>Résultat : aucun article n'est toxique</strong> (score maximal de 0,17). C'est cohérent : ce sont des articles de presse professionnelle, qui traitent parfois de sujets violents mais sur un ton neutre. Je n'ai pas abaissé les seuils pour « produire » des articles toxiques.</p>
      <figure class="pfig" data-zoom><img src="assets/toxicite-resultats.jpg" alt="Scores de toxicité des articles par site" loading="lazy"><figcaption>Un point par article ; le trait noir indique le score moyen du site.</figcaption></figure>`},
    {t:"Déploiement Docker", s:"API et MongoDB en une commande", h:`<ul>
      <li>Image <code>python:3.12-slim</code>, PyTorch en version CPU, modèle téléchargé pendant la construction pour un démarrage hors ligne.</li>
      <li>Exécution avec un utilisateur non root, port configurable.</li>
      <li><strong>Docker Compose</strong> : l'API attend que MongoDB soit prêt (healthcheck), redémarre automatiquement, et les données sont conservées dans un volume.</li></ul>`},
    {t:"Ce que j'en retiens", s:"Les limites comptent autant que le code", h:`<p>J'ai testé le modèle sur une même menace dans deux langues : « Go die. » est détecté comme toxique (0,94), « Va mourir. » ne l'est pas (0,18). Le modèle est donc moins fiable en français, et je l'ai écrit noir sur blanc dans la documentation plutôt que de le cacher.</p>
      <p>Pour aller plus loin : un modèle affiné sur des textes français annotés, l'analyse des commentaires de lecteurs, une collecte planifiée et des tests automatisés.</p>`}
  ],
  gallery:[
    {src:"assets/toxicite-architecture.svg",cap:"Architecture du pipeline"},
    {src:"assets/toxicite-resultats.jpg",cap:"Scores de toxicité par site"}
  ],
  videos:[]
},
{
  id:"amaris", featured:true,
  title:"Quatre robots UiPath en production",
  ctx:"Consultante RPA · Amaris Consulting, Tunis · 2026",
  domain:"RPA & automatisation", cats:["rpa"],
  short:"Quatre robots qui font chaque jour, à la place des équipes, des tâches répétitives sur Excel et Outlook pour de grands opérateurs télécoms.",
  lede:"Six mois, quatre robots en production. J'ai suivi chaque robot du début à la fin : comprendre la tâche avec l'équipe, l'écrire noir sur blanc, la développer, la tester, puis la surveiller une fois en production. Les clients étant confidentiels, tout est présenté de façon anonyme.",
  tags:["UiPath Studio","Excel & Outlook","Office 365","Regex","Python","Power Automate","Planner","SharePoint"],
  cover:"assets/amaris-workflow-cro-doe.svg",
  kpis:[["4","robots en production"],["6 mois","de la spec au run"],["~170 h/an","gagnées sur un seul robot"],["0","affectation manuelle restante"]],
  parts:[
    {t:"Mon rôle, de bout en bout", s:"Du besoin métier au support", h:`<ol class="steps"><li><strong>Recueil du besoin</strong> auprès des équipes métier.</li><li><strong>Spécifications</strong> : PDD (processus) et SDD (conception technique).</li><li><strong>Développement</strong> sous UiPath Studio.</li><li><strong>Tests</strong> et recette avec le métier.</li><li><strong>Mise en production</strong>, support et gestion des incidents.</li></ol>`},
    {t:"Répartition équitable des dossiers", s:"Robot 1", h:`<p>Il lit les e-mails non traités dans Outlook, identifie le type de demande et extrait le numéro de dossier par <strong>expressions régulières</strong>. Il attribue ensuite chaque dossier <strong>au même consultant</strong> si le site est déjà suivi et que la personne est disponible, sinon <strong>au consultant disponible le moins chargé</strong>. Il met à jour les fichiers de suivi et marque les e-mails comme traités.</p><p>Bonnes pratiques : configuration externalisée, vérification des fichiers, gestion des erreurs, journalisation et une seule écriture Excel finale pour la performance.</p>
      <p>Concrètement, il traite deux flux à chaque exécution : les mails <strong>CRO</strong> et les mails <strong>DOE</strong>, chacun dans son dossier Outlook. Les mails hors périmètre sont ignorés et tracés dans le journal.</p>
      <figure class="pfig" data-zoom><img src="assets/amaris-workflow-cro-doe.svg" alt="Workflow du robot CRO / DOE" loading="lazy"><figcaption>Logique du workflow principal, reconstituée à partir du Main.xaml (sans données client)</figcaption></figure>`},
    {t:"Affectation automatique dans Planner", s:"Robot 2", h:`<p>Déclenché par l'arrivée d'un e-mail, il télécharge la liste des dossiers, supprime les doublons, retrouve le consultant en charge (fichier de suivi SharePoint ou historique Planner) et lui crée la tâche dans Microsoft Planner avec son échéance. <strong>Gain estimé : environ 170 heures par an</strong>, et plus aucun dossier oublié.</p>`},
    {t:"Contrôle d'un planning de milliers de sites", s:"Robot 3", h:`<p>Chaque semaine, il consolide deux classeurs, calcule les délais en jours ouvrés et applique un arbre de décision métier (usine, délais, dérogations) pour attribuer à chaque site un statut et un commentaire : obsolète, OK, en attente ou non conforme.</p>`},
    {t:"Préparation de migrations réseau", s:"Robot 4", h:`<p>Il lit les demandes reçues par e-mail, applique une table de correspondance et les règles de gestion, puis génère le fichier de sortie au format strict attendu. Fini les erreurs de saisie sur des données très similaires d'un site à l'autre.</p>`},
    {t:"Ce que j'en retiens", s:"Honnêtement", h:`<p>Le premier jour, je ne savais même pas ce qu'était la RPA. Six mois plus tard, mes robots tournaient en production. Ce que j'ai le plus aimé, c'est le contact direct avec les équipes : voir quelqu'un gagner une heure par jour grâce à un robot qu'on a construit, c'est très motivant.</p>`}
  ],
  gallery:[], videos:[]
},
{
  id:"resolvi", featured:true,
  title:"Employee Insights Hub : la BI RH de A à Z",
  ctx:"Projet ESPRIT pour la startup ResolVI · 2024",
  domain:"BI & data engineering", cats:["bi","de","ia"],
  short:"Une solution RH complète : des données récupérées sur le web jusqu'à une appli Angular, en passant par Talend, SQL Server et Power BI.",
  lede:"Un projet d'école pour une vraie startup, et mon projet BI le plus complet. On est partis de fichiers RH en vrac et on est arrivés à une application où chaque responsable trouve ses chiffres.",
  tags:["Talend","SQL Server","PostgreSQL","Power BI Service","Selenium","BeautifulSoup","scikit-learn","Flask","Angular"],
  cover:"assets/resolvi-recrutement2.jpg",
  kpis:[["4","tableaux de bord décideurs"],["12","KPI RH"],["9","tables (2 faits, 7 dimensions)"],["5","modèles ML explorés"]],
  parts:[
    {t:"Le problème et la démarche", s:"Méthode GIMSI", h:`<p>Les données RH étaient dispersées entre plusieurs fichiers, sans vue consolidée. Nous avons suivi la méthode GIMSI : analyse du contexte et d'un SIRH concurrent, arbre d'objectifs (coûts, turnover, compétences, assiduité, recrutement, diversité) aligné sur les ODD 4, 5 et 10, puis maquettes par décideur.</p>`},
    {t:"Collecte et entrepôt de données", s:"Web scraping, Talend, SQL Server", h:`<ul><li><strong>Web scraping</strong> (Selenium, BeautifulSoup) des catalogues Coursera et Udemy pour comparer prix, difficulté, notes et compétences.</li><li><strong>Modèle en constellation</strong> : 2 tables de faits et 7 dimensions.</li><li><strong>ETL Talend</strong> : staging par source, un job par dimension (dédoublonnage, filtres, mapping) et un job maître qui orchestre le chargement.</li></ul><figure class="pfig" data-zoom><img src="assets/resolvi-talend-dimformation.jpg" alt="Job Talend de la dimension Formation : fusion, dédoublonnage et tri des catalogues interne, Coursera et Udemy" loading="lazy"><figcaption>Job Talend de la dimension Formation : fusion, dédoublonnage et tri des catalogues interne, Coursera et Udemy</figcaption></figure><figure class="pfig" data-zoom><img src="assets/resolvi-talend-fact-employee.jpg" alt="Chargement de la table de faits des employés avec les lookups sur les dimensions" loading="lazy"><figcaption>Chargement de la table de faits des employés avec les lookups sur les dimensions</figcaption></figure><figure class="pfig" data-zoom><img src="assets/resolvi-talend-fact-training.jpg" alt="Chargement de la table de faits des formations" loading="lazy"><figcaption>Chargement de la table de faits des formations</figcaption></figure>`},
    {t:"Tableaux de bord et application", s:"Power BI Service, Angular, Flask", h:`<p>Quatre tableaux de bord (RH, recrutement, formation, paie) suivent 12 KPI : parité, écart salarial, turnover, participation aux formations, absentéisme, efficacité des canaux de recrutement… Ils sont publiés sur Power BI Service et intégrés dans une application <strong>Angular</strong> avec un back-end <strong>Flask</strong>.</p>`},
    {t:"Machine learning exploratoire", s:"Recommandation, segmentation, prédiction", h:`<ul><li><strong>Recommandation de formations</strong> par KNN (filtrage collaboratif).</li><li><strong>Segmentation des employés</strong> : ACP, K-means et classification hiérarchique, 4 profils.</li><li>Classification de la consommation de congés (~65 % d'accuracy) et séries temporelles sur l'absentéisme.</li><li>Prédiction des salaires : les variables disponibles ne l'expliquaient pas, une limite des données que nous avons documentée.</li></ul>`}
  ],
  gallery:[
    {src:"assets/resolvi-talend-dimformation.jpg",cap:"Talend : job de la dimension Formation"},
    {src:"assets/resolvi-talend-fact-employee.jpg",cap:"Talend : table de faits des employés"},
    {src:"assets/resolvi-talend-fact-training.jpg",cap:"Talend : table de faits des formations"},
    {src:"assets/resolvi-accueil.jpg",cap:"Page d'accueil : un tableau de bord par décideur"},
    {src:"assets/resolvi-recrutement2.jpg",cap:"Recrutement : contrats, sources d'embauche, départements"},
    {src:"assets/resolvi-turnover.jpg",cap:"Turnover, départs et postes vacants"},
    {src:"assets/resolvi-conges.jpg",cap:"Congés par type, grade et département"},
    {src:"assets/resolvi-formation2.jpg",cap:"Formations : participation, difficulté, Coursera vs Udemy"},
    {src:"assets/resolvi-paie2.jpg",cap:"Paie : salaires, budget de formation, top 5"}
  ],
  videos:[]
},
{
  id:"talan", featured:true,
  title:"Pilotage commercial d'une banque sous Qlik Sense",
  ctx:"Stage ingénieur · Talan Tunisie · 2024",
  domain:"Business Intelligence", cats:["bi","de"],
  short:"Six tableaux de bord et plus de 35 indicateurs pour aider l'équipe commerciale d'une banque à suivre ses clients, ses comptes et ses ventes.",
  lede:"Mon stage ingénieur, fait seule. L'équipe commerciale d'une grande banque avait ses chiffres éparpillés dans une dizaine de fichiers ; je les ai rassemblés dans Qlik Sense. Sur les captures, le nom de la banque, des collaborateurs et des clients est flouté.",
  tags:["Qlik Sense","Script de chargement","QVD","Set Analysis","Modélisation","GIMSI"],
  cover:"assets/talan-clients.jpg",
  kpis:[["35+","KPI métier"],["6","tableaux de bord"],["10","sources intégrées"],["1","table d'audit ETL"]],
  parts:[
    {t:"Démarche (méthode GIMSI)", s:"Du métier aux indicateurs", h:`<ol class="steps"><li><strong>Compréhension métier</strong> : décideurs et objectifs (encours, clientèle, produits, performance).</li><li><strong>Étude de l'existant</strong> : analyse critique de trois tableaux de bord bancaires de référence.</li><li><strong>Analyse des données</strong> : 10 fichiers sources.</li><li><strong>Modélisation</strong> en étoile, conçue sur Lucidchart.</li><li><strong>ETL</strong> sous Qlik, des CSV et XLSX vers des QVD.</li><li><strong>KPI et tableaux de bord</strong>.</li></ol>`},
    {t:"Modèle de données", s:"Une vue à 360° du client", h:`<p>Une table de faits client entourée de dimensions : agence, compte, produit, équipement, ressources et emplois, niveau de service et calendrier.</p><div class="star"><div>Agence</div><div>Compte</div><div>Produit</div><div>Calendrier</div><div class="fact">Fact_Client</div><div>Équipement</div><div>Service</div><div>Ressources</div><div>Client</div></div>`},
    {t:"ETL et traçabilité", s:"Une table d'audit", h:`<p>Chaque chargement est enregistré : fichier source, QVD cible, heures de début et de fin, nombre de lignes. On contrôle ainsi la fraîcheur et l'exhaustivité des données à chaque rafraîchissement.</p>`},
    {t:"Plus de 35 indicateurs", s:"Set Analysis et dates dynamiques", h:`<ul><li><strong>Encours</strong> : du jour, évolutions J/J-1, J/M-1, J/A-1, soldes débiteurs, impayés, engagements, créances classées.</li><li><strong>Clients</strong> : stock actif, conquête, défection.</li><li><strong>Comptes</strong> : stock, ouvertures, clôtures, débiteurs, inactifs.</li><li><strong>Produits</strong> : ventes et résiliations de packs et de banque à distance.</li></ul>`},
    {t:"Six tableaux de bord", s:"Filtrables par année, mois, agence et marché", h:`<p>Clients, comptes, banque à distance, dépôts, stocks, conquêtes clients. Ils ont été livrés à l'équipe commerciale pour le suivi de son activité.</p>`},
    {t:"Ce que j'en retiens", s:"Honnêtement", h:`<p>Avant ce stage, je ne jurais que par Power BI. Il a fallu apprendre Qlik Sense toute seule, et finalement j'ai adoré. Aujourd'hui je suis à l'aise avec les deux, et ça m'a appris que changer d'outil ne me fait pas peur.</p>`}
  ],
  gallery:[
    {src:"assets/talan-clients.jpg",cap:"Tableau de bord Clients : stock, conquêtes et défections"},
    {src:"assets/talan-comptes.jpg",cap:"Tableau de bord Comptes : ouvertures et clôtures"},
    {src:"assets/talan-banque-distance.jpg",cap:"Banque à distance : stocks, ventes et résiliations"},
    {src:"assets/talan-depots.jpg",cap:"Dépôts : encours et additionnels J / A-1"},
    {src:"assets/talan-stocks.jpg",cap:"Stocks des comptes et des clients (J, M-1, A-1)"},
    {src:"assets/talan-conquetes.jpg",cap:"Détail des conquêtes clients"},
    {src:"assets/talan-audit.jpg",cap:"Table d'audit de l'ETL : chaque chargement tracé"}
  ], videos:[]
},
{
  id:"anomalies",
  title:"Détection d'anomalies sur des chemins piétons",
  ctx:"Projet ESPRIT · Deep learning · en équipe de 6",
  domain:"Deep learning", cats:["ia"],
  short:"Sept architectures de deep learning comparées pour repérer un vélo, un skateur ou un chariot dans des vidéos de surveillance.",
  lede:"Sur des vidéos de surveillance d'allées piétonnes, tout ce qui n'est pas un piéton qui marche est une anomalie : un vélo, un skateur, un fauteuil roulant, un chariot. Nous avons entraîné et comparé sept architectures de deep learning pour les repérer automatiquement.",
  tags:["Python","Deep learning","Autoencodeurs","RNN / LSTM / Bi-LSTM","GAN (WGAN)","VAE","3D CNN"],
  cover:"assets/anomalies-cover.jpg",
  kpis:[["7","architectures comparées"],["98","vidéos UCSD Peds1 et Peds2"],["61 %","de rappel avec le VAE"],["0,59","F1-score, le meilleur"]],
  parts:[
    {t:"Le sujet", s:"Des vidéos, très peu d'anomalies", h:`<p>Nous avons travaillé sur le jeu de données <strong>UCSD Anomaly Detection</strong> : Peds1 (34 vidéos d'entraînement, 36 de test, piétons qui s'approchent ou s'éloignent de la caméra) et Peds2 (16 et 12 vidéos, piétons qui passent de profil). Chaque clip fait environ 200 images, avec les intervalles anormaux annotés.</p>
      <p>La difficulté vient du déséquilibre : l'immense majorité des images sont normales. On entraîne donc les modèles sur des scènes normales, puis on considère comme anomalie ce qu'ils n'arrivent pas à reproduire ou à prévoir.</p>
      <figure class="pfig" data-zoom><img src="assets/anomalies-exemples.jpg" alt="Exemples d'anomalies dans Peds1" loading="lazy"><figcaption>Exemples d'anomalies dans Peds1 : chariot, fauteuil roulant, skateur, vélo</figcaption></figure>`},
    {t:"Préparation des données", s:"Des vidéos aux séquences", h:`<ul><li>Découpage des vidéos en images, chacune associée à son étiquette normale ou anormale.</li><li>Normalisation des pixels entre 0 et 1 et redimensionnement à une taille fixe (128 × 128).</li><li>Analyse exploratoire : inspection visuelle, distribution du nombre d'images par vidéo.</li><li>Réalignement des annotations officielles (fichiers .m, en intervalles d'images) sur notre format de test.</li></ul>
      <figure class="pfig" data-zoom><img src="assets/anomalies-echantillons.jpg" alt="Échantillons d'entraînement Peds1 et Peds2" loading="lazy"><figcaption>Échantillons d'entraînement : Peds1 en haut, Peds2 en bas</figcaption></figure>`},
    {t:"Les modèles", s:"Reconstruire, prédire ou générer", h:`<ul><li><strong>Autoencodeur convolutif</strong> : reconstruit l'image ; une forte erreur de reconstruction signale une anomalie.</li><li><strong>RNN, LSTM et Bi-LSTM</strong> : prédisent la suite d'une séquence ; une forte erreur de prédiction signale une anomalie.</li><li><strong>GAN</strong> en version Wasserstein (critique à la place du discriminateur) : le générateur apprend les scènes normales, le critique repère ce qui s'en écarte.</li><li><strong>VAE</strong> : modélise la distribution des images normales et repère les images peu probables.</li><li><strong>3D CNN</strong> à partir de ResNet-18 : capte en même temps l'espace et le temps.</li></ul>
      <p>Les hyperparamètres ont été ajustés par grid search et random search.</p>`},
    {t:"Résultats", s:"Le VAE s'en sort le mieux", h:`<p>Les modèles séquentiels sont très précis quand ils signalent une anomalie (près de 80 %), mais ils en ratent presque 9 sur 10. Le <strong>VAE</strong> est le plus équilibré : il retrouve 61 % des anomalies, pour un F1-score de 0,59.</p>
      <figure class="pfig" data-zoom><img src="assets/anomalies-vae-loss.jpg" alt="Courbes de perte du VAE" loading="lazy"><figcaption>VAE : pertes d'entraînement et de validation sur 100 époques</figcaption></figure>
      <figure class="pfig" data-zoom><img src="assets/anomalies-vae-matrice.jpg" alt="Matrice de confusion du VAE" loading="lazy"><figcaption>VAE : matrice de confusion sur les images de test</figcaption></figure>`},
    {t:"Ce qui a résisté", s:"Les vraies difficultés", h:`<ul><li><strong>GAN</strong> : effondrement de mode (le générateur produit toujours les mêmes images) et entraînement instable, atténués avec le WGAN à pénalité de gradient et l'ajustement du taux d'apprentissage.</li><li><strong>VAE</strong> : explosion des gradients, réglée par gradient clipping et une meilleure initialisation des poids.</li><li><strong>LSTM</strong> : dépendances temporelles longues difficiles à apprendre.</li></ul>`}
  ],
  results:[["RNN","précision 79 %, rappel 13 %","F1 0,22"],["LSTM","précision 80 %, rappel 12 %","F1 0,21"],["Bi-LSTM","précision 79 %, rappel 12 %","F1 0,20"],["3D CNN","aucune anomalie retrouvée","rappel 0 %"],["VAE","précision 56 %, rappel 61 %","F1 0,59"]],
  next:"Des modèles hybrides (VAE et LSTM), des mécanismes d'attention, puis la localisation des anomalies dans l'image et non plus seulement la détection des images anormales.",
  gallery:[], videos:[]
}
];

window.OTHER_PROJECTS = [
  ["FST Hackathon 3.0 (GoMyCode)","Prédiction des prix immobiliers en Tunisie, en équipe : 2e place du concours.","2e place"],
  ["Contrôle de notices pharmaceutiques · HLi Consulting","Vérification de la conformité de notices par comparaison d'images (OpenCV, SSIM, SIFT).",""],
  ["Prédiction de défauts de production · HLi Consulting","Random Forest sur des données de production : 87 % d'accuracy, et tableaux de bord qualité Power BI.",""]
];

window.EXPERIENCES = [
  {when:"09/2026 – aujourd'hui", where:"En ligne", now:true, title:"Formatrice Data Analyst, Power BI (PL-300)", org:"GOMYCODE", logo:"assets/logo-gomycode.png",
   bullets:["J'enseigne le parcours complet de préparation à la certification Microsoft PL-300.","Des bases de la donnée à l'IA : bases relationnelles et SQL, entrepôts de données et OLAP, chaîne décisionnelle SQL Server.","Power BI de bout en bout : Power Query, modélisation, DAX, visualisation avancée, Python et IA dans Power BI."],
   tags:["Power BI","DAX","Power Query","SQL","SSIS","SSAS"]},
  {when:"03/2026 – 08/2026", where:"Tunis", title:"Consultante RPA", org:"Amaris Consulting", logo:"assets/logo-amaris.png",
   bullets:["4 robots UiPath conçus, développés et mis en production en 6 mois pour de grands opérateurs télécoms.","Recueil des besoins, rédaction des PDD et SDD, tests, mise en production et support."],
   tags:["UiPath","Power Automate","Python","Excel","Outlook"], link:"amaris"},
  {when:"06/2025 – 11/2025", where:"Paris, France", title:"Stage de fin d'études en intelligence artificielle", org:"Amayas Consulting", logo:"assets/logo-amayas.png",
   bullets:["Assistant IA pour conseillers bancaires : RAG réglementaire, veille proactive, recommandation par ML.","Projet réalisé seule, de la conception à l'évaluation."],
   tags:["RAG","LangChain","ChromaDB","LightGBM","Streamlit"], link:"amayas"},
  {when:"06/2024 – 09/2024", where:"Tunis", title:"Stage en Business Intelligence", org:"Talan Tunisie", logo:"assets/logo-talan.png",
   bullets:["Solution décisionnelle sous Qlik Sense pour l'équipe commerciale d'une banque.","Modèle en étoile, ETL tracé, 35+ KPI et 6 tableaux de bord."],
   tags:["Qlik Sense","Set Analysis","ETL"], link:"talan"},
  {when:"08/2023 – 09/2023", where:"Tunis", title:"Stage réseaux et sécurité", org:"Attijari bank", logo:"assets/logo-attijari.png",
   bullets:["Architecture réseau virtuelle sous EVE-NG.","Firewalls FortiGate : segmentation VLAN, routage, règles NAT et politiques de sécurité."],
   tags:["EVE-NG","FortiGate","VLAN","NAT"]},
  {when:"02/2022 – 04/2022", where:"Ariana", title:"Stage data scientist", org:"HLi Consulting", logo:"assets/logo-hli.png",
   bullets:["Prédiction des défauts de production et tableaux de bord qualité Power BI.","Mission complémentaire : contrôle de conformité de notices pharmaceutiques par vision."],
   tags:["scikit-learn","Power BI","OpenCV"]}
];

window.EDUCATION = [
  {title:"Diplôme d'ingénieur en informatique, option Business Intelligence", org:"ESPRIT", when:"2022 – 2025 · Tunis", text:"Data warehouse et BI, big data (Hadoop, Hive, Spark), ERP (SAP BW, HANA, Fiori), CRM (Dynamics 365), Java / Spring Boot, .NET, réseaux."},
  {title:"Licence en mathématiques appliquées, data science", org:"Faculté des Sciences de Tunis", when:"2019 – 2022 · Tunis", text:"Statistiques, probabilités, optimisation et premières bases de la science des données. Membre de FST Startup et d'IEEE IAS FST."}
];

window.SKILLS = [
  {t:"BI & visualisation", c:"var(--blue)", items:["Power BI","Power Query","DAX","Power BI Service","Qlik Sense","Set Analysis","GIMSI","Conception de KPI"], proof:["talan","resolvi"]},
  {t:"Data engineering", c:"var(--blue)", items:["Talend","SSIS","SQL Server","PostgreSQL","SQL","PL/SQL","Modélisation en étoile","Entrepôts de données","Web scraping"], proof:["resolvi","talan"]},
  {t:"Machine learning", c:"var(--blue)", items:["scikit-learn","LightGBM","XGBoost","pandas","NumPy","Clustering","OpenCV"], proof:["amayas","anomalies"]},
  {t:"IA générative", c:"var(--blue)", items:["RAG","LangChain","ChromaDB","Embeddings","Llama 3 / Groq","Function calling","Prompt engineering"], proof:["amayas"]},
  {t:"RPA & automatisation", c:"var(--blue)", items:["UiPath Studio","Power Automate","Regex","PDD / SDD","Mise en production"], proof:["amaris"]},
  {t:"Développement & méthodes", c:"var(--blue)", items:["Python","Streamlit","Flask","Angular","pytest","Git","Scrum","CRISP-DM"], proof:["amayas","resolvi"]}
];

window.STACK = [["Power BI","powerbi"],["Qlik Sense","qlik"],["Talend","talend"],["SSIS","ssis"],["PostgreSQL","postgresql"],["Python","python"],["UiPath","uipath-mark"],["Power Automate","powerautomate"]];

window.LANGS = [["Arabe","Langue maternelle",100],["Français","Courant (C1)",88],["Anglais","Avancé (B2)",72]];

/* Pour ajouter l'image d'un certificat : img:"assets/certif-nvidia.jpg" */
window.CERTS = [
  {title:"Data Analysis and Visualization with Power BI", issuer:"Microsoft · Coursera", date:"Janvier 2026", state:"done", stateLabel:"Obtenue", img:"assets/cert-powerbi.jpg", url:"https://coursera.org/verify/S7295HHWGQ4K"},
  {title:"Talend Data Integration Certification Preparation", issuer:"Talend · Coursera", date:"Janvier 2026", state:"done", stateLabel:"Obtenue", img:"assets/cert-talend.jpg", url:"https://coursera.org/verify/NYALZM9B340Z"},
  {title:"Basics of Chatbots with Machine Learning & Python", issuer:"Packt · Coursera", date:"Juin 2025", state:"done", stateLabel:"Obtenue", img:"assets/cert-chatbots.jpg", url:"https://coursera.org/verify/6K6XITDDB5YE"},
  {title:"Implementing an SAP Solution", issuer:"SAP · Coursera", date:"Novembre 2024", state:"done", stateLabel:"Obtenue", img:"assets/cert-sap.jpg", url:"https://coursera.org/verify/YPVPEDNH99SY"},
  {title:"MLOps Tools: MLflow and Hugging Face", issuer:"Duke University · Coursera", date:"Novembre 2024", state:"done", stateLabel:"Obtenue", img:"assets/cert-mlops-tools.jpg", url:"https://coursera.org/verify/ZAAUU3GPNVN6"},
  {title:"MLOps Platforms: Amazon SageMaker and Azure ML", issuer:"Duke University · Coursera", date:"Octobre 2024", state:"done", stateLabel:"Obtenue", img:"assets/cert-mlops-platforms.jpg", url:"https://coursera.org/verify/H03QL3H6XBZ6"},
  {title:"DevOps, DataOps, MLOps", issuer:"Duke University · Coursera", date:"Octobre 2024", state:"done", stateLabel:"Obtenue", img:"assets/cert-devops-dataops-mlops.jpg", url:"https://coursera.org/verify/0W437YDT66YT"},
  {title:"Python Essentials for MLOps", issuer:"Duke University · Coursera", date:"Octobre 2024", state:"done", stateLabel:"Obtenue", img:"assets/cert-mlops-python.jpg", url:"https://coursera.org/verify/RE5L3UHDQ9LB"},
  {title:"Applications of AI for Anomaly Detection", issuer:"NVIDIA Deep Learning Institute", date:"Octobre 2024", state:"done", stateLabel:"Obtenue", img:"assets/cert-nvidia.jpg", url:null},
  {title:"DP-600 : Microsoft Fabric Analytics Engineer", issuer:"Microsoft", date:"", state:"prep", stateLabel:"En préparation", img:null, url:null}
];
