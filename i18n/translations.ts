export const translations = {
  en: {
    nav: {
      home: "Home",
      rankings: "Rankings",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      subtitle: "Portfolio // Noah Dauge // 2026",
      title1: "0xNoah",
      title2: "Offensive Security",
      desc: "Cybersecurity and penetration testing student. I'm passionate about cybersecurity, and I practice using personal labs as well as platforms like TryHackMe, Hack The Box.",
      btnWork: "Explore Work",
      btnContact: "Get in touch",
      stats: {
        cyber: "Cybersecurity",
        infra: "Infrastructure",
        dev: "Development"
      }
    },
    ctf: {
      number: "01 / Competition Record",
      title: "CTF Rankings",
      comingSoonTitle: "Mission in Progress",
      comingSoonDesc: "I am currently honing my skills on platforms like TryHackMe and HackTheBox. Official CTF rankings will be published here soon.",
      status: "Training Phase"
    },
    experience: {
      number: "02 / Professional",
      title: "Experience",
      items: [
        {
          role: "Cybersecurity Auditor",
          company: "KH Motors",
          contract: "Internship",
          date: "May 2025 - July 2025",
          details: [
            "Conducting application security audits (OWASP Top 10).",
            "Analysis of common vulnerabilities: XSS, SQL injections, CSRF, authentication flaws.",
            "Penetration testing (pentesting). Proficiency in tools: Burp Suite, OWASP ZAP, Nmap, Screaming Frog",
            "Detection and exploitation of vulnerabilities via targeted penetration tests.",
            "Knowledge of standards: GDPR (data protection), CSP, HSTS, OWASP ASVS.",
            "Drafting clear audit reports with risk classification.",
            "Proposing technical and corrective measures & applying fixes after validation.",
          ]
        },
        {
          role: "System & Network Administrator",
          company: "Xeilos Trading Academy",
          contract: "Internship",
          date: "June 2024 - Sept 2024",
          details: [
            "Design and maintenance of complex network infrastructures.",
            "Implementation of advanced routing and switching solutions.",
            "Proxmox virtualization and high-availability cluster management.",
            "Creation of technical reports on Cisco technologies (VLANs, inter-VLAN routing)."
          ]
        }
      ]
    },
    projects: {
      number: "03 / Work",
      title: "Projects",
      categories: {
        all: "All",
        infra: "Infrastructure & Cloud",
        cyber: "Cybersecurity",
        dev: "Development"
      },
      items: [
        {
          title: "Proxmox Virtualized Infra",
          desc: "Full high-availability virtualized infrastructure, redundancy and performance.",
          link: "/projects/proxmox"
        },
        {
          title: "Linux Hardening & Security",
          desc: "Hardened Linux servers integrating multiple security layers and advanced monitoring.",
          link: "/projects/linux-hardening"
        },
        {
          title: "Secure Enterprise Infrastructure",
          desc: "Deployment of a Microsoft Active Directory domain, network segmentation, and secure Reverse Proxy.",
          link: "/projects/entreprise-infra"
        },
        {
          title: "Secure Web Gateway & IDS",
          desc: "Deployment of a hardened proxy gateway with PKI, encrypted partitions, and intrusion detection systems.",
          link: "/projects/secure-gateway"
        },
        {
          title: "Fullstack Recommendation System",
          desc: "Development of a movie and series recommendation web platform with secure authentication.",
          link: "/projects/web-fullstack"
        },
        {
          title: "FPS Survival Game (Unity 3D)",
          desc: "Development of a first-person survival game in C# with dynamic wave systems.",
          link: "/projects/fps-survival"
        },
        {
          title: "Interactive C# Game (2D)",
          desc: "Game development with advanced interactive mechanics in C#.",
          link: "/projects/unity-game"
        }
      ]
    },
    projectDetails: {
      back: "Back to Home",
      proxmox: {
        title: "Proxmox Virtualized Infra & Security",
        subtitle: "2nd Year Academic Project // BankSO",
        context: "Context",
        contextText: "Complete redesign of a banking infrastructure (BankSO) prioritizing absolute security. The project required building a highly resilient, hybrid, and secure architecture from scratch.",
        architecture: "Architecture & Network",
        architectureText: "Deployment on a Proxmox cluster with a hybrid AWS connection via Site-to-Site VPN. Implementation of a strict network segregation (Admin, Base Infra, Production, DMZ) secured by a custom Linux-based Firewall/Router (Iptables).",
        systems: "Systems & Hardening",
        systemsText: "Extreme hardening of Linux templates (optimized to <128MB RAM and <8GB disk) and deployment of an Open Source Base Infra (DNS, DHCP, Directory). Creation of a dedicated and isolated administration bastion.",
        web: "Web HA & Automation",
        webText: "Automated deployment of LXC containers for a highly available web architecture: Nginx Load Balancer, SSL Offloading, centralized PKI, and Intrusion Detection System (IDS). Complete automation of database backups and centralized logging.",
        techs: ["Proxmox VE", "LXC", "AWS VPN", "Nginx HA", "Linux Hardening", "Iptables", "PKI"]
      },
      linuxHardening: {
        title: "Linux Hardening, Pentest & Secure Coding",
        subtitle: "2nd Year Academic Project // Cyber Audit",
        context: "Context & Mission",
        contextText: "Complete security audit and remediation of a virtual machine hosting a web application. The mission involved identifying vulnerabilities, hardening the system, and securing the source code as a secure prototype.",
        pentest: "Pentest & Vulnerability Assessment",
        pentestText: "Conducted a thorough initial penetration test to map open ports, analyze the attack surface, and identify critical vulnerabilities like SQL injections, XSS, and CSRF.",
        hardening: "System Hardening & Deployment",
        hardeningText: "Redeployment and extreme hardening of the Linux environment. Implementation of strict security measures: firewall, service deactivation, secure SSH, and rights management.",
        coding: "Secure Coding & Remediation",
        codingText: "Patched identified vulnerabilities in the application code (SQLi, session management, encryption). Developed a new secure messaging feature followed by a final validation pentest.",
        techs: ["Pentesting", "Linux Hardening", "Secure Coding", "Firewall", "SSH Security", "Vulnerability Patching"]
      },
      entrepriseInfra: {
        title: "Secure Enterprise Infrastructure & AD",
        subtitle: "1st Year Academic Project // BankSO Foundation",
        context: "Context & Mission",
        contextText: "Setting up the foundational IT infrastructure for BankSO to centralize authentication and enforce strict security policies following ANSSI recommendations.",
        architecture: "Network & Firewalling",
        architectureText: "Design and implementation of a 4-zone segmented network (Infrastructure, Users, Servers, DMZ). Setup of a central firewall managing flow matrices and acting as a DHCP relay.",
        systems: "Systems & Active Directory",
        systemsText: "Deployment of a Microsoft Active Directory domain. Implementation of roaming user profiles, secure shared network folders, and centralized password policies.",
        web: "Reverse Proxy & PKI",
        webText: "Deployment of an internal PKI for SSL certificate management. Implementation of a Reverse Proxy in the DMZ for secure exposure of HTTPS web applications with automatic redirection.",
        techs: ["Active Directory", "Windows Server", "Firewall", "Network Segmentation", "Reverse Proxy", "PKI"]
      },
      secureGateway: {
        title: "Secure Web Gateway & IDS",
        subtitle: "1st Year Academic Project // Cyber Gateway",
        context: "Context & Mission",
        contextText: "Design and deployment of a highly secure prototype for hosting web services. The architecture requires a strict separation between a Gateway machine (Proxy/Reverse Proxy) and an isolated Web Server.",
        architecture: "Gateway & Reverse Proxy",
        architectureText: "Implementation of a gateway acting as the sole entry and exit point. Setup of an HTTPS-only Reverse Proxy backed by an internal PKI for certificate management (web.local.local), and a forward proxy strictly filtering outbound traffic.",
        systems: "Extreme System Hardening",
        systemsText: "Deployment of a lightweight Linux distribution with hardened access: root account disabled, SSH authentication restricted to Key + OTP (Google Authenticator), and Sudo requiring OTP. The web directory (/data/http) is stored on an encrypted partition automatically decrypted upon admin login.",
        web: "Intrusion Detection (IDS/IPS)",
        webText: "Integration of advanced security probes within the architecture to detect and block threats. Deployment and reflection on the strategic placement of Fail2ban, Suricata, and ModSecurity (WAF) to ensure maximum defense.",
        techs: ["Linux Hardening", "OTP Auth", "Reverse Proxy", "PKI", "ModSecurity / IDS", "Disk Encryption"]
      },
      webFullstack: {
        title: "Fullstack Web Platform & Recommendation",
        subtitle: "Web Development Project",
        context: "Context & Mission",
        contextText: "Design and development of a fullstack web application allowing users to search, rate, and recommend movies and series. The project required building a complete architecture from the database to the frontend interface.",
        architecture: "Frontend & UI",
        architectureText: "Development of a modern user interface using a frontend framework (React/Vue). Implementation of a search engine with multiple filters (title, genre, year) and an intuitive rating system.",
        systems: "Backend & Database",
        systemsText: "Creation of a robust REST API (Node.js/Express or PHP) connected to a relational database (MySQL/PostgreSQL). Secure management of users with encrypted passwords and token-based authentication.",
        web: "Algorithm & Testing",
        webText: "Implementation of a personalized recommendation algorithm based on user ratings and global popularity. Integration of Unit Tests (Jest/PHPUnit) to ensure backend reliability.",
        techs: ["React / Vue", "Node.js / PHP", "MySQL", "REST API", "Unit Testing", "Algorithm"]
      },
      fpsSurvival: {
        title: "First-Person Survival Game (Unity 3D)",
        subtitle: "Game Development Project // Filerna",
        context: "Context & Mission",
        contextText: "Development of a 3D first-person survival game (FPS) for the company Filerna. The goal is to survive endless waves of enemies dynamically spawning around the player.",
        mechanics: "Gameplay & Mechanics",
        mechanicsText: "Implementation of responsive FPS controls and shooting mechanics. Development of a dynamic spawning algorithm that generates enemies at random locations, increasing the challenge over time.",
        systems: "UI & Game Systems",
        systemsText: "Creation of a dynamic Heads-Up Display (HUD) showing the player's health points (HP) and score in real-time. Implementation of floating health bars above enemies and an interactive Game Over screen to restart the loop.",
        dev: "Assets & Clean Code",
        devText: "Rigorous structuring of the Unity project following Clean Code principles to ensure maintainability. Integration of consistent 3D assets and animations within a unified graphical charter.",
        techs: ["C#", "Unity 3D", "FPS Mechanics", "Dynamic Spawning", "Game Loop", "Clean Code"]
      },
      unityGame: {
        title: "Interactive C# Game & Unity",
        subtitle: "Game Development Project // Studio Lexus",
        context: "Context & Mission",
        contextText: "Development of an independent video game aiming for a 'GOTY 2025' quality standard for Lexus company. The objective was to design a visually appealing game with consistent 2D/3D assets, animations, and sound design.",
        mechanics: "Gameplay & Mechanics",
        mechanicsText: "Implementation of a complete game loop (Main menu, gameplay, game over). Development of dynamic enemy spawning systems and interactive combat mechanics including shooting with multiple weapons.",
        systems: "Game Systems & Economy",
        systemsText: "Programming of essential game systems in C#: health point management, dynamic scoring, and an in-game economy system.",
        dev: "Clean Code & Architecture",
        devText: "Adherence to clean coding practices within the Unity environment to ensure maintainability for future developers. Proper management of Assets, Packages, and Project Settings.",
        techs: ["C#", "Unity Engine", "Game Loop", "2D/3D Assets", "Sound Design", "Clean Code"]
      }
    },
    education: {
      number: "04 / Academic",
      title: "Education",
      items: [
        {
          title: "Bachelor 3 Network and Cybersecurity Administrator",
          institution: "IPSSI Nice",
          date: "2025 - Present",
          details: [
            "Secured Infrastructure Administrator (AIS) Degree.",
            "Pre security (SEC0) TryHackMe Certification.",
            "Cybersécurity 101 (SEC1) TryHackMe Certification."
          ]
        },
        {
          title: "Prepa B1 & B2, IT & Development",
          institution: "IPSSI Nice",
          date: "2022 - 2024",
          details: [
            "Prepa B1 & B2 IT, Cybersecurity, Networks, FullStack Dev.",
            "Cisco CCNA Certification."
          ]
        }
      ]
    },
    contact: {
      number: "05 / Get in Touch",
      title: "Contact",
      desc: "Interested in working together or have a question? Feel free to reach out through the form or find me on these platforms.",
      form: {
        name: "Name",
        email: "Email (optional)",
        subject: "Subject",
        message: "Message",
        placeholderName: "Your name",
        placeholderSubject: "What is this about?",
        placeholderMessage: "Your message...",
        send: "Send Message"
      }
    }
  },

  fr: {
    nav: {
      home: "Accueil",
      rankings: "Classements",
      experience: "Expériences",
      projects: "Projets",
      education: "Formations",
      contact: "Contact"
    },
    hero: {
      subtitle: "Portfolio // Noah Dauge // 2026",
      title1: "0xNoah",
      title2: "Sécurité Offensive",
      desc: "Étudiant en cybersécurité et test d'intrusion. Passionné par la sécurité, je m'entraîne sur des laboratoires personnels ainsi que sur des plateformes comme TryHackMe, Hack The Box.",
      btnWork: "Voir les projets",
      btnContact: "Me contacter",
      stats: {
        cyber: "Cybersécurité",
        infra: "Infrastructure",
        dev: "Développement"
      }
    },
    ctf: {
      number: "01 / Classements",
      title: "Classements CTF",
      comingSoonTitle: "Mission en cours",
      comingSoonDesc: "Je perfectionne actuellement mes compétences sur des plateformes comme TryHackMe et HackTheBox. Mes premiers classements officiels seront publiés ici prochainement.",
      status: "Phase d'entraînement"
    },
    experience: {
      number: "02 / Professionnel",
      title: "Expériences",
      items: [
        {
          role: "Auditeur cybersécurité",
          company: "KH Motors",
          contract: "Stage",
          date: "Mai 2025 - Juillet 2025",
          details: [
            "Réalisation d’audits de sécurité applicatifs (OWASP Top 10).",
            "Analyse des vulnérabilités courantes : XSS, injections SQL, CSRF, failles d’authentification.",
            "Tests d’intrusion (pentesting) Maîtrise des outils : Burp Suite, OWASP ZAP, Nmap, Screaming Frog",
            "Détection et exploitation de vulnérabilités via tests d’intrusion ciblés.",
            "Connaissance des standards : RGPD (protection des données), CSP, HSTS, OWASP ASVS.",
            "Rédaction de rapports d’audit clairs avec classification des risques.",
            "Proposition de contremesures techniques et correctives & applications des correctives après validation."
          ]
        },
        {
          role: "Administrateur Système et Réseau",
          company: "Xeilos Trading Academy",
          contract: "Stage",
          date: "Juin 2024 - Septembre 2024",
          details: [
            "Conception et maintenance d'infrastructures réseau complexes.",
            "Mise en place de solutions de routage et commutation avancées.",
            "Virtualisation Proxmox et gestion de clusters haute disponibilité.",
            "Réalisation de rapports techniques sur les technologies Cisco (VLANs, routage inter-VLAN)."
          ]
        }
      ]
    },
    projects: {
      number: "03 / Travaux",
      title: "Projets",
      categories: {
        all: "Tous",
        infra: "Infra & Cloud",
        cyber: "Cybersécurité",
        dev: "Développement"
      },
      items: [
        {
          title: "Infra Virtualisée Proxmox",
          desc: "Infrastructure complète virtualisée haute disponibilité, redondance et performance.",
          link: "/projects/proxmox"
        },
        {
          title: "Hardening Linux & Sécurité",
          desc: "Serveurs Linux renforcés intégrant plusieurs couches de sécurité et monitoring avancé.",
          link: "/projects/linux-hardening"
        },
        {
          title: "Infra d'Entreprise Sécurisée",
          desc: "Déploiement d'un domaine Microsoft Active Directory, segmentation réseau et Reverse Proxy sécurisé.",
          link: "/projects/entreprise-infra"
        },
        {
          title: "Passerelle Web Sécurisée & IDS",
          desc: "Déploiement d'une passerelle proxy durcie avec PKI, partitions chiffrées et détection d'intrusion.",
          link: "/projects/secure-gateway"
        },
        {
          title: "Plateforme Web & Recommandation",
          desc: "Développement d'une plateforme web fullstack de recommandation de films avec authentification sécurisée.",
          link: "/projects/web-fullstack"
        },
        {
          title: "Jeu de Survie FPS (Unity 3D)",
          desc: "Développement d'un jeu de survie à la première personne en C# avec génération dynamique d'ennemis.",
          link: "/projects/fps-survival"
        },
        {
          title: "Jeu Vidéo Interactif C# (2D)",
          desc: "Développement d'un jeu avec des mécaniques interactives avancées en C#.",
          link: "/projects/unity-game"
        }
      ]
    },
    projectDetails: {
      back: "Retour à l'accueil",
      proxmox: {
        title: "Infra Virtualisée Proxmox & Sécurité",
        subtitle: "Projet de 2ème Année // BankSO",
        context: "Contexte",
        contextText: "Refonte complète de l'infrastructure d'une société bancaire (BankSO) avec une priorité absolue sur la sécurité. Le projet imposait la création d'une architecture hautement résiliente, hybride et sécurisée.",
        architecture: "Architecture & Réseau",
        architectureText: "Déploiement sur un cluster Proxmox avec hybridation Cloud AWS via VPN Site-à-Site. Mise en place d'un cloisonnement strict (Admin, Infra Base, Production, DMZ) sécurisé par un Routeur/Firewall Linux pur (Iptables).",
        systems: "Systèmes & Hardening",
        systemsText: "Hardening extrême de templates Linux (optimisés à moins de 128Mo de RAM et 8Go de disque) et déploiement d'une Infra Base Open Source (DNS, DHCP, Annuaire). Création d'un bastion d'administration dédié et isolé.",
        web: "Web HA & Automatisation",
        webText: "Déploiement automatisé en conteneurs LXC d'une architecture web haute disponibilité : Load Balancer Nginx, SSL Offloading, PKI centralisée et système de détection d'intrusion (IDS). Automatisation complète des sauvegardes BDD et journalisation centralisée.",
        techs: ["Proxmox VE", "LXC", "AWS VPN", "Nginx HA", "Linux Hardening", "Iptables", "PKI"]
      },
      linuxHardening: {
        title: "Hardening Linux, Pentest & Secure Coding",
        subtitle: "Projet de 2ème Année // Audit Cyber",
        context: "Contexte & Mission",
        contextText: "Audit de sécurité complet et remédiation d'une machine virtuelle hébergeant une application web. La mission consistait à identifier les vulnérabilités, durcir le système et sécuriser le code source.",
        pentest: "Pentest & Évaluation des Vulnérabilités",
        pentestText: "Réalisation d'un test d'intrusion initial approfondi pour cartographier les ports ouverts, analyser la surface d'attaque et identifier les vulnérabilités web critiques (SQLi, XSS, CSRF).",
        hardening: "Hardening Système & Déploiement",
        hardeningText: "Redéploiement propre et durcissement extrême de l'environnement Linux. Mise en place de mesures de sécurité : pare-feu, désactivation de services, SSH sécurisé et gestion des droits.",
        coding: "Secure Coding & Remédiation",
        codingText: "Correction des vulnérabilités dans le code de l'application (SQLi, sessions, chiffrement). Développement d'une fonctionnalité de messagerie sécurisée suivi d'un pentest de validation final.",
        techs: ["Pentest", "Hardening Linux", "Secure Coding", "Pare-feu", "Sécurité SSH", "Correction de failles"]
      },
      entrepriseInfra: {
        title: "Infra d'Entreprise Sécurisée & AD",
        subtitle: "Projet de 1ère Année // Fondations BankSO",
        context: "Contexte & Mission",
        contextText: "Mise en place des bases de l'infrastructure informatique de BankSO pour centraliser l'authentification et appliquer des politiques de sécurité strictes selon les recommandations ANSSI.",
        architecture: "Réseau & Pare-feu",
        architectureText: "Conception et déploiement d'un réseau segmenté en 4 zones (Infrastructure, Utilisateurs, Serveurs, DMZ). Mise en place d'un pare-feu central gérant la matrice de flux et relais DHCP.",
        systems: "Systèmes & Active Directory",
        systemsText: "Déploiement d'un domaine Microsoft Active Directory. Mise en place de profils utilisateurs itinérants, de dossiers partagés sécurisés et centralisation des politiques de mots de passe.",
        web: "Reverse Proxy & PKI",
        webText: "Déploiement d'une PKI interne pour la gestion des certificats SSL. Mise en place d'un Reverse Proxy en DMZ pour l'exposition sécurisée des applications web HTTPS avec redirection automatique.",
        techs: ["Active Directory", "Windows Server", "Pare-feu", "Segmentation Réseau", "Reverse Proxy", "PKI"]
      },
      secureGateway: {
        title: "Passerelle Web Sécurisée & IDS",
        subtitle: "Projet de 1ère Année // Cyber Gateway",
        context: "Contexte & Mission",
        contextText: "Conception et déploiement d'un prototype hautement sécurisé pour l'hébergement de services web. L'architecture impose une séparation stricte entre une machine passerelle (Proxy/Reverse Proxy) et un serveur web isolé.",
        architecture: "Passerelle & Reverse Proxy",
        architectureText: "Mise en place d'une passerelle servant d'unique point d'entrée et sortie. Configuration d'un Reverse Proxy (HTTPS strict) avec une PKI interne pour la gestion des certificats (web.local.local), et d'un proxy filtrant le trafic sortant.",
        systems: "Hardening Système Extrême",
        systemsText: "Déploiement d'une distribution Linux légère avec accès durcis : compte root désactivé, authentification SSH par Clé + OTP (Google Authenticator), et Sudo requérant un OTP. Le répertoire web (/data/http) est stocké sur une partition chiffrée déverrouillée à la connexion de l'administrateur.",
        web: "Détection d'Intrusion (IDS/IPS)",
        webText: "Intégration de sondes de sécurité avancées pour détecter et bloquer les menaces. Déploiement et réflexion sur le positionnement de Fail2ban, Suricata et ModSecurity (WAF) pour garantir une défense maximale.",
        techs: ["Hardening Linux", "Auth OTP", "Reverse Proxy", "PKI", "ModSecurity / IDS", "Chiffrement Disque"]
      },
      webFullstack: {
        title: "Plateforme Web Fullstack & Recommandation",
        subtitle: "Projet de Développement Web",
        context: "Contexte & Mission",
        contextText: "Conception et développement d'une application web complète permettant aux utilisateurs de rechercher, noter et recommander des films et séries. Le projet nécessitait de concevoir l'architecture de la base de données jusqu'à l'interface frontend.",
        architecture: "Frontend & UI",
        architectureText: "Développement d'une interface utilisateur moderne via un framework frontend (React/Vue). Mise en place d'un moteur de recherche avec de multiples filtres (titre, genre, année) et un système de notation intuitif.",
        systems: "Backend & Base de Données",
        systemsText: "Création d'une API REST robuste (Node.js/Express ou PHP) reliée à une base de données relationnelle (MySQL/PostgreSQL). Gestion sécurisée des utilisateurs avec mots de passe hachés et système de connexion.",
        web: "Algorithme & Tests",
        webText: "Implémentation d'un algorithme de recommandation personnalisé basé sur les notes des utilisateurs et la popularité globale. Intégration de tests unitaires (Jest/PHPUnit) pour s'assurer de la fiabilité du backend.",
        techs: ["React / Vue", "Node.js / PHP", "MySQL", "API REST", "Tests Unitaires", "Algorithmique"]
      },
      fpsSurvival: {
        title: "Jeu de Survie FPS (Unity 3D)",
        subtitle: "Projet Développement Jeu // Filerna",
        context: "Contexte & Mission",
        contextText: "Développement d'un jeu de survie à la première personne (FPS) en 3D pour l'entreprise Filerna. L'objectif est de survivre à des vagues infinies d'ennemis apparaissant dynamiquement autour du joueur.",
        mechanics: "Gameplay & Mécaniques",
        mechanicsText: "Implémentation de contrôles FPS réactifs et de mécaniques de tir. Développement d'un algorithme de génération dynamique (spawning) faisant apparaître les ennemis à des positions aléatoires pour augmenter la difficulté.",
        systems: "Interface & Systèmes de Jeu",
        systemsText: "Création d'un affichage tête haute (HUD) dynamique indiquant les points de vie (HP) et le score en temps réel. Mise en place de barres de vie flottantes au-dessus des ennemis et d'un écran de Game Over interactif pour relancer la partie.",
        dev: "Assets & Clean Code",
        devText: "Structuration rigoureuse du projet Unity en respectant les principes du Clean Code pour garantir sa maintenabilité. Intégration d'assets 3D et d'animations cohérentes dans une charte graphique unifiée.",
        techs: ["C#", "Unity 3D", "Mécaniques FPS", "Spawning Dynamique", "Game Loop", "Clean Code"]
      },
      unityGame: {
        title: "Jeu Vidéo Interactif C# & Unity",
        subtitle: "Projet Développement Jeu // Studio Lexus",
        context: "Contexte & Mission",
        contextText: "Développement d'un jeu vidéo indépendant visant un standard de qualité 'GOTY 2025' pour l'entreprise Lexus. L'objectif était de concevoir un jeu visuellement attrayant avec une charte graphique cohérente, des animations et du sound design.",
        mechanics: "Gameplay & Mécaniques",
        mechanicsText: "Implémentation d'une boucle de jeu complète (Menu principal, jeu, relance). Développement de systèmes d'apparition d'ennemis et de mécaniques de combat interactives, incluant le tir avec plusieurs armes.",
        systems: "Systèmes de Jeu & Économie",
        systemsText: "Programmation en C# des systèmes essentiels : gestion des points de vie (HP), système de score dynamique et économie intégrée au jeu.",
        dev: "Clean Code & Architecture",
        devText: "Respect des bonnes pratiques de développement (Clean Code) dans l'environnement Unity pour assurer la maintenabilité du projet par d'autres développeurs. Gestion rigoureuse des Assets, Packages et paramètres de projet.",
        techs: ["C#", "Unity Engine", "Game Loop", "Assets 2D/3D", "Sound Design", "Clean Code"]
      }
    },
    education: {
      number: "04 / Académique",
      title: "Formations",
      items: [
        {
          title: "Bachelor 3 Administrateur Réseaux et Cybersécurité",
          institution: "IPSSI Nice",
          date: "2025 - Présent",
          details: [
            "Diplôme Administrateur d’infrastructures sécurisées (AIS).",
            "Certification Pre security (SEC0) TryHackMe.",
            "Certification Cybersécurity 101 (SEC1) TryHackMe."
          ]
        },
        {
          title: "Prépa B1 & B2, Informatique & Développement",
          institution: "IPSSI Nice",
          date: "2022 - 2024",
          details: [
            "Prépa B1 & B2 Informatique, Cybersécurité, Réseaux, Dev FullStack.",
            "Certification CCNA Cisco."
          ]
        }
      ]
    },
    contact: {
      number: "05 / Contact",
      title: "Contact",
      desc: "Intéressé par une collaboration ou vous avez une question ? N'hésitez pas à me contacter via le formulaire ou sur ces plateformes.",
      form: {
        name: "Nom",
        email: "Email (optionnel)",
        subject: "Sujet",
        message: "Message",
        placeholderName: "Votre nom",
        placeholderSubject: "De quoi s'agit-il ?",
        placeholderMessage: "Votre message...",
        send: "Envoyer le message"
      }
    }
  }
};

export type Language = 'en' | 'fr';