// Liste des énigmes, réponses, et images associées
const enigmes = [
    {
        question: "Je suis toujours devant toi mais tu ne peux jamais m'atteindre. Qui suis-je ?",
        reponse: ["futur"],
        image: "https://media.gettyimages.com/id/1480294354/fr/photo/metaverse-world-ctiy-concept-image.jpg?s=612x612&w=0&k=20&c=423GLIi22jvwuhnf4uEbV5O-iEbyg6PWAe8hxrUNJi4="
    },
    {
        question: "Je grandis mais je ne vieillis jamais. Qui suis-je ?",
        reponse: ["ombre"],
        image: "https://vivre-de-la-photo.fr/wp-content/uploads/2022/11/martino-pietropoli-pirWeToS2mA-unsplash-1536x1024.jpg"
    },
    {
        question: "Plus je suis grand, moins tu peux me voir. Qui suis-je ?",
        reponse: ["obscurité"],
        image: "https://st2.depositphotos.com/1550726/7428/i/380/depositphotos_74288433-stock-photo-forest-with-mysterious-man-walking.jpg"
    },
    {
        question: "Je suis léger comme une plume, mais même le plus fort ne peut pas me tenir longtemps. Qui suis-je ?",
        reponse: ["souffle"],
        image: "https://media.gettyimages.com/id/492150079/fr/vectoriel/jeune-femme-souffle-pissenlit.jpg?s=612x612&w=0&k=20&c=9HCdBZcyln-ZyVYrHPvkmz0mjZkLuGEh0milPqjv4T4="
    },
    {
        question: "Je n’ai pas de vie, mais je peux mourir. Qui suis-je ?",
        reponse: ["batterie"],
        image: "https://media.gettyimages.com/id/538403973/fr/vectoriel/flash-symbole-de-dessin-batterie.jpg?s=612x612&w=0&k=20&c=AyltJibq2Hgxxmq3nDwbYPs3P6RboD5PFk7RkiKc5Tk="
    }
];

// Déterminants à ignorer dans les réponses
const determinants = ["le", "la", "les", "un", "une", "des", "du", "de", "mon", "ton", "son", "ma", "ta", "sa"];

// Variables de gestion du jeu
let indexEnigme = 0;

// Fonction pour démarrer le jeu
function commencer() {
    document.getElementById('commencer-btn').style.display = 'none';
    afficherEnigme();
}

// Fonction pour afficher l'énigme actuelle et son image
function afficherEnigme() {
    const enigmeCourante = enigmes[indexEnigme];

    document.getElementById("enigme").innerText = enigmeCourante.question;
    document.getElementById("reponse").value = "";
    document.getElementById("resultat").innerText = "";
    
    // Afficher l'image correspondante à l'énigme
    const enigmeImage = document.getElementById("enigme-image");
    enigmeImage.src = enigmeCourante.image;
    enigmeImage.style.display = "block";

    document.getElementById("btn-suivant").style.display = "none";
}

// Fonction pour normaliser la réponse (enlever les déterminants)
function normaliserReponse(reponse) {
    // Convertir en minuscules et découper la phrase en mots
    const mots = reponse.toLowerCase().split(' ');

    // Filtrer les déterminants
    const motsFiltres = mots.filter(mot => !determinants.includes(mot));

    // Rejoindre les mots restants pour obtenir la réponse sans déterminants
    return motsFiltres.join(' ');
}

// Fonction pour vérifier la réponse de l'utilisateur
function verifierReponse() {
    const reponseUtilisateur = document.getElementById("reponse").value;
    const reponseUtilisateurNorm = normaliserReponse(reponseUtilisateur);
    const bonnesReponses = enigmes[indexEnigme].reponse;

    // Vérifier si la réponse utilisateur est dans la liste des bonnes réponses
    if (bonnesReponses.includes(reponseUtilisateurNorm)) {
        document.getElementById("resultat").innerText = "Bravo ! C'est la bonne réponse.";
        document.getElementById("resultat").className = "correct";
    } else {
        document.getElementById("resultat").innerText = "Dommage, la bonne réponse était : " + bonnesReponses[0];
        document.getElementById("resultat").className = "incorrect";
    }

    document.getElementById("btn-suivant").style.display = "block";
}

// Fonction pour passer à l'énigme suivante
function suivant() {
    indexEnigme++;
    if (indexEnigme >= enigmes.length) {
        indexEnigme = 0;
    }
    afficherEnigme();
}