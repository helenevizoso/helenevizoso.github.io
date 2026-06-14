// Script pour le portfolio dynamique

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.opacity = '0.8';
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-category, .objective-card, .timeline-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

const projectData = {
    'project-1': {
        title: 'Gestionnaire de Notes Dynamique',
        subtitle: 'Excel • VBA • Binôme',
        description: 'Gestionnaire de notes conçu en binôme pour automatiser le suivi des résultats scolaires. L’outil calcule les moyennes, détecte les absences et prédit le passage en année suivante.',
        points: [
            'Calcul automatique des moyennes pondérées et des résultats par matières.',
            'Création d’une interface utilisateur simple et lisible en VBA.',
            'Gestion des validations, des seuils de passage et des retards éventuels.'
        ],
        team: 'Travail en binôme : conception, tests et ajustements des formules ensemble.',
        images: ['img/reporting.png']
    },
    'project-2': {
        title: 'Transformation de Données CSV',
        subtitle: 'Python • Data Wrangling',
        description: 'Nettoyage et restructuration de fichiers CSV pour améliorer la qualité des données. Ce projet montre ma capacité à transformer des données brutes avec Python.',
        points: [
            'Suppression de colonnes inutiles et standardisation des en-têtes.',
            'Manipulation de listes de listes pour optimiser les structures de données.',
            'Préparation d’un jeu de données propre pour une analyse ultérieure.'
        ],
        team: 'Travail en binôme',
        images: ['img/gestionfichier.png']
    },
    'project-3': {
        title: 'Analyse Démographique - Martinique',
        subtitle: 'Excel • INSEE • Analyse statistique',
        description: 'Étude démographique de la Martinique pour mettre en évidence les tendances de population, le chômage et la structure de l’emploi.',
        points: [
            'Analyse de la variation de la population et de ses causes.',
            'Représentation visuelle des résultats sur Excel.',
            'Interprétation des indicateurs démographiques et socio-économiques.'
        ],
        team: 'Travail en binôme',
        images: ['img/martinique.png']
    },
    'project-4': {
        title: 'Prédiction de Prix Immobiliers Paris',
        subtitle: 'Python • Machine Learning',
        description: 'Modèle prédictif pour estimer les prix immobiliers à Paris. Travail sur le nettoyage des données, la sélection de variables et la validation du modèle.',
        points: [
            'Sélection de variables significatives et préparation du dataset.',
            'Utilisation de la régression linéaire pour prédire les prix.',
            'Évaluation des performances sur un jeu de test réel.'
        ],
        team: 'Travail en binôme',
        images: ['img/regression.png']
    },
    'project-5': {
        title: 'Site Web Dynamique - Cinescope',
        subtitle: 'PHP • JavaScript • Groupe de 3',
        description: 'Application web réalisée en groupe de 3 pour gérer et visualiser des données de films avec une interface dynamique.',
        points: [
            'Développement d’une interface de consultation et de modification des films.',
            'Intégration de tableaux dynamiques et de filtres.',
            'Connexion à une base de données pour lire et écrire des informations.'
        ],
        team: 'Groupe de 3 personnes : répartition entre les différents onglets et fonctionnalités du site.',
        images: ['img/cinescope.png']
    },
    'project-6': {
        title: 'Application Web - Plotly Dashboard',
        subtitle: 'JavaScript • Plotly • Groupe de 4',
        description: 'Dashboard interactif avec Plotly, comportant plusieurs onglets, graphiques et cartes pour analyser des données territoriales.',
        points: [
            'Création de courbes et de cartes choroplèthes interactives.',
            'Organisation des données en onglets thématiques.',
            'Conception UX centrée sur la clarté et l’ergonomie.'
        ],
        team: 'Travail en équipe de 4 avec répartition des onglets et des graphiques.',
        images: ['img/airbnb.png']
    },
    'project-7': {
        title: 'Enseignement Excel - Projet Territoire',
        subtitle: 'Pédagogie • Excel • Groupe de 4',
        description: 'Atelier de sensibilisation à Excel pour une classe de 4ème. Objectif : aider les élèves à créer leurs propres visualisations de données.',
        points: [
            'Préparation d’une séquence pédagogique claire et progressive.',
            'Accompagnement des élèves dans la création de graphiques simples.',
            'Animation d’un concours inter-groupes à l’IUT.'
        ],
        team: 'Groupe de 4, avec répartition lors de la préparation des cours.',
        images: ['img/territoire.png']
    },
    'project-8': {
        title: 'CHATBOT LLM',
        subtitle: 'Python • Traitement du langage',
        description: 'Conception d’un chatbot capable de répondre aux questions sur mon profil et mes projets grâce à des modèles de langage et une interface simple.',
        points: [
            'Définition des intents et des réponses adaptées.',
            'Intégration d’un modèle de langage pour la compréhension des questions.',
            'Test et ajustement de la qualité des réponses.'
        ],
        team: 'Projet individuel',
        images: []
    },
    'project-9': {
        title: 'CHALLENGE DATAVIZ',
        subtitle: 'Power BI • Excel • Concours',
        description: 'Participation à un challenge de datavisualisation pour Météo France, avec une victoire au niveau régional, mettant en avant la qualité de la narration visuelle.',
        points: [
            'Création de visuels poussés pour raconter une histoire avec les données.',
            'Comparaison de scénarios et extraction des insights clés.',
            'Présentation orientée décisionnel auprès du jury.'
        ],
        team: 'Projet en groupe de 4',
        images: ['img/challengedataviz.jpeg']
    },
    'project-10': {
        title: 'Projet Qlik Sense',
        subtitle: 'Qlik Sense • Business Intelligence',
        description: 'Création d’un tableau de bord interactif avec Qlik Sense afin d’explorer des données métier, filtrer les indicateurs et mettre en avant des tendances clés.',
        points: [
            'Conception d’une interface de visualisation claire et intuitive.',
            'Mise en place de filtres et de vues dynamiques pour l’analyse.',
            'Transformation des données en indicateurs exploitables pour une prise de décision.',
            'Valorisation des insights grâce à une narration visuelle efficace.'
        ],
        team: 'Projet individuel',
        images: ['img/qlik.png']
    }
};

const modalOverlay = document.getElementById('project-modal-overlay');
const modalTitle = document.getElementById('project-modal-title');
const modalSubtitle = document.getElementById('project-modal-subtitle');
const modalDescription = document.getElementById('project-modal-description');
const modalPoints = document.getElementById('project-modal-points');
const modalTeam = document.getElementById('project-modal-team');
const modalImages = document.getElementById('project-modal-images');
const modalCloseButton = document.getElementById('project-modal-close');

function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalDescription.textContent = data.description;
    modalPoints.innerHTML = '';

    data.points.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        modalPoints.appendChild(li);
    });

    modalTeam.textContent = data.team;

    modalImages.innerHTML = '';
    if (data.images.length === 0) {
        const placeholder = document.createElement('p');
        placeholder.textContent = 'Aucune image disponible pour ce projet pour le moment.';
        placeholder.style.color = 'var(--text-muted)';
        modalImages.appendChild(placeholder);
    } else {
        data.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = data.title + ' - capture';
            modalImages.appendChild(img);
        });
    }

    modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modalOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

const cards = document.querySelectorAll('.project-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.dataset.project;
        openProjectModal(id);
    });

    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const id = card.dataset.project;
            openProjectModal(id);
        }
    });
});

modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeProjectModal();
    }
});

modalCloseButton.addEventListener('click', closeProjectModal);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
        closeProjectModal();
    }
});

// Mobile menu toggle (if needed in future)
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}
