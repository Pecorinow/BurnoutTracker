//*---------------------------
//* Tableau du questionnaire :
//*---------------------------

const QUESTIONNAIRE = [
  // 1
  {
    id: 'adaptation_difficile',
    question: "J'ai l'impression qu'il m'est anormalement difficile de m'adapter aux autres.",
    categories: ['postMasking', 'relationnel'],
    typeReponse: 'accord'
  },
  // 2
  {
    id: 'epuise_matin_travail',
    question: "En me levant, je me sens déjà épuisé·e à l'idée d'une autre journée de travail.",
    categories: ['professionnel'],
    typeReponse: 'frequence'
  },
  // 3
  {
    id: 'honte_parent',
    question: "J'ai honte du parent que je suis devenu·e.",
    categories: ['parental'],
    typeReponse: 'accord'
  },
  // 4
  {
    id: 'travail_emotionnellement_epuisant',
    question: "Mon travail est émotionnellement épuisant à un degré...",
    categories: ['professionnel'],
    typeReponse: 'intensite'
  },
  // 5
  {
    id: 'perte_interet',
    question: "J'ai perdu mon intérêt pour des situations qui m'intéressaient auparavant.",
    categories: ['personnel'],
    typeReponse: 'accord'
  },
  // 6
  {
    id: 'sensibilite_sensorielle',
    question: "Je me sens particulièrement sensible à mon environnement sensoriel (sons, lumières, textures, odeurs…).",
    categories: ['postMasking'],
    typeReponse: 'accord'
  },
  // 7
  {
    id: 'frustration_travail',
    question: "Mon travail me frustre à un degré...",
    categories: ['professionnel'],
    typeReponse: 'intensite'
  },
  // 8
  {
    id: 'epuisement_matin_enfants',
    question: "Quand je me lève le matin et que j'ai à faire face à une autre journée avec mes enfants, je me sens épuisé·e d'avance.",
    categories: ['parental'],
    typeReponse: 'frequence'
  },
  // 9
  {
    id: 'fatigue',
    question: "Je suis fatigué·e.",
    categories: ['personnel'],
    typeReponse: 'frequence'
  },
  // 10
  {
    id: 'discipline_concentration',
    question: "J'ai le sentiment de ne pas pouvoir me discipliner : soit je me concentre sur une activité au point d'avoir du mal à m'en défaire, soit je n'arrive pas à me concentrer du tout.",
    categories: ['postMasking'],
    typeReponse: 'accord'
  },
  // 11
  {
    id: 'epuisement_physique',
    question: "Je suis physiquement épuisé·e.",
    categories: ['personnel'],
    typeReponse: 'frequence'
  },
  // 12
  {
    id: 'contact_fatiguant',
    question: "Le contact avec les autres me fatigue à un degré...",
    categories: ['relationnel'],
    typeReponse: 'intensite'
  },
  // 13
  {
    id: 'sentiment_vide',
    question: "Je me sens vidé·e.",
    categories: ['personnel'],
    typeReponse: 'frequence'
  },
  // 14
  {
    id: 'heures_travail_eprouvantes',
    question: "Chaque heure de travail me paraît éprouvante à un degré...",
    categories: ['professionnel'],
    typeReponse: 'intensite'
  },
  // 15
  {
    id: 'combien_temps_tiendrai',
    question: "Je me demande combien de temps je tiendrai encore dans cet environnement avec les clients / élèves / patients / camarades de classe.",
    categories: ['relationnel'],
    typeReponse: 'accord'
  },
  // 16
  {
    id: 'perte_estime',
    question: "Je ressens une perte d'estime de moi, un sentiment de n'être « pas assez bon.ne ».",
    categories: ['postMasking', 'personnel', 'professionnel'],
    typeReponse: 'accord'
  },
  // 17
  {
    id: 'concentration_difficile',
    question: "J'ai du mal à me concentrer sur des tâches, que ce soit à la maison, au travail ou à l'école.",
    categories: ['postMasking', 'personnel', 'professionnel'],
    typeReponse: 'frequence'
  },
  // 18
  {
    id: 'retour_decevant',
    question: "Considérant tout ce que fais pour les autres, leur retour me déçoit à un degré...",
    categories: ['relationnel'],
    typeReponse: 'intensite'
  },
  // 19
  {
    id: 'epuisement_emotionnel',
    question: "Je suis émotionnellement épuisé·e.",
    categories: ['personnel'],
    typeReponse: 'frequence'
  },
  // 20
  {
    id: 'submerge_emotions',
    question: "Je suis facilement submergé·e par mes émotions.",
    categories: ['personnel'],
    typeReponse: 'frequence'
  },
  // 21
  {
    id: 'pilote_automatique_enfants',
    question: "J'ai l'impression de m'occuper de mes enfants en pilote automatique.",
    categories: ['parental'],
    typeReponse: 'accord'
  },
  // 22
  {
    id: 'isolement',
    question: "Je me renferme et m'isole des autres.",
    categories: ['postMasking', 'relationnel'],
    typeReponse: 'accord'
  },
  // 23
  {
    id: 'vide_fin_journee_travail',
    question: "Je me sens vidé(e) à la fin d'une journée de travail.",
    categories: ['professionnel'],
    typeReponse: 'frequence'
  },
  // 24
  {
    id: 'travail_epuisant',
    question: "Mon travail m'épuise à un degré...",
    categories: ['professionnel'],
    typeReponse: 'intensite'
  },
  // 25
  {
    id: 'bout_du_rouleau',
    question: "Je me dis que je n'en peux plus.",
    categories: ['personnel'],
    typeReponse: 'frequence'
  },
  // 26
  {
    id: 'comportements_apaisement',
    question: "J'ai de plus en plus besoin d'adopter des comportements d'apaisements ou des gestes répétitifs qui pourraient être mal perçus par les autres.",
    categories: ['postMasking'],
    typeReponse: 'accord'
  },
  // 27
  {
    id: 'difficulte_collegues',
    question: "Travailler avec mes collègues / clients / patients / élèves / camarades de classe m'est difficile à un degré...",
    categories: ['relationnel'],
    typeReponse: 'intensite'
  },
  // 28
  {
    id: 'fatigue_parentale_sommeil',
    question: "Je suis tellement fatigué·e par mon rôle de parent que j'ai l'impression que dormir ne suffit pas.",
    categories: ['parental'],
    typeReponse: 'accord'
  },
  // 29
  {
    id: 'plus_moi_meme_enfants',
    question: "J'ai l'impression que je ne suis plus moi-même quand j'interagis avec mes enfants.",
    categories: ['parental'],
    typeReponse: 'accord'
  },
  // 30
  {
    id: 'frustration_autres',
    question: "Fonctionner avec les autres est frustrant à un degré...",
    categories: ['relationnel'],
    typeReponse: 'intensite'
  },
  // 31
  {
    id: 'problemes_sommeil',
    question: "J'ai des problèmes de sommeil, comme du mal à m'endormir ou des rêves perturbants.",
    categories: ['personnel'],
    typeReponse: 'frequence'
  },
  // 32
  {
    id: 'faible_malade',
    question: "Je me sens faible et susceptible de tomber malade.",
    categories: ['personnel'],
    typeReponse: 'frequence'
  },
  // 33
  {
    id: 'perte_fonctions_executives',
    question: "Je constate une perte de compétences liées aux fonctions exécutives (par exemple, des difficulté à planifier, établir des priorités, me fixer des objectifs...).",
    categories: ['postMasking', 'personnel', 'professionnel'],
    typeReponse: 'accord'
  },
  // 34
  {
    id: 'manque_energie_loisirs',
    question: "Je manque d'énergie dans les activités de loisir avec ma famille et mes amis.",
    categories: ['relationnel'],
    typeReponse: 'accord'
  },
  // 35
  {
    id: 'pas_plaisir_enfants',
    question: "Je ne ressens pas de plaisir à être avec mes enfants.",
    categories: ['parental'],
    typeReponse: 'accord'
  }
];

//*---------------------------------------------
//* Objet des types de réponses : 
//*---------------------------------------------

const TYPES_REPONSES = {
  frequence: [
    { value: 1, label: 'Jamais', id: 'jamais' },
    { value: 2, label: 'De temps en temps', id: 'tempsEnTemps' },
    { value: 3, label: 'Parfois', id: 'parfois' },
    { value: 4, label: 'Souvent', id: 'souvent' },
    { value: 5, label: 'Tout le temps', id: 'toutLeTemps' }
  ],
  intensite: [
    { value: 1, label: 'Très faible', id: 'tresFaible' },
    { value: 2, label: 'Faible', id: 'faible' },
    { value: 3, label: 'Moyen', id: 'moyen' },
    { value: 4, label: 'Élevé', id: 'eleve' },
    { value: 5, label: 'Très élevé', id: 'tresEleve' }
  ],
  accord: [
    { value: 1, label: 'Pas du tout d\'accord', id: 'pasDuTout' },
    { value: 2, label: 'Pas d\'accord', id: 'pasAccord' },
    { value: 3, label: 'Neutre', id: 'neutre' },
    { value: 4, label: 'D\'accord', id: 'accord' },
    { value: 5, label: 'Tout à fait d\'accord', id: 'toutAFait' }
  ]
};

//*-------------------------------------------
// * Remplir le HTML du questionnaire : Boucle forEAch et fonction générerQuestionnaire :
//*-------------------------------------------
const FORM_QUESTIONNAIRE = document.getElementById('form-questionnaire');

QUESTIONNAIRE.forEach((questionObj, index) => {
genererQuestionnaire(questionObj, index);
});

// Fonction genererQuestionnaire :
function genererQuestionnaire (questionObj, index) {
    const NUM_QUESTION = index + 1;
    
    const FIELDSET = document.createElement('fieldset');
    FIELDSET.classList.add('question-reponses');
    
    const LEGEND = document.createElement('legend');
    LEGEND.textContent = `${NUM_QUESTION}. ${questionObj.question}`;
    FIELDSET.append(LEGEND);

    
    const OPTIONS = TYPES_REPONSES[questionObj.typeReponse];
    OPTIONS.forEach(option => {
    
      const DIV_REPONSES = document.createElement('div');
      DIV_REPONSES.classList.add('reponses');
      
      const INPUT = document.createElement('input');
      INPUT.type = 'radio';
      INPUT.id = `${option.id}-q${NUM_QUESTION}`;
      INPUT.name = questionObj.id;
      INPUT.value = option.value;
      INPUT.required = true;
      
      const LABEL = document.createElement('label');
      LABEL.htmlFor = INPUT.id;
      LABEL.textContent = option.label;
      
      DIV_REPONSES.append(INPUT, LABEL);
      
      FIELDSET.append(DIV_REPONSES);
  });

  FORM_QUESTIONNAIRE.append(FIELDSET);

};

//*--------------------------
//*Valider le questionnaire :
//*--------------------------

// Fonction validerQuestionnaire :
function validerQuestionnaire() {
  const REPONSES_NON_REPONDUES = [];
  
  QUESTIONNAIRE.forEach((questionObj, index) => {
    const REPONSE_SELECT = document.querySelector(`input[name="${questionObj.id}"]:checked`);

    if (!REPONSE_SELECT) {
      REPONSES_NON_REPONDUES.push(index + 1);
    }
  });
  
  if (REPONSES_NON_REPONDUES.length > 0) {
    alert(`Attention, vous n'avez pas répondu à toutes les questions. Voici les questions manquantes : ${REPONSES_NON_REPONDUES.join(', ')}`);
    return false;
  } else {
    return true;
  }
};

//*--------------------------------------
//* Variables de la section d'affichage :
//*--------------------------------------

const P_CAT_PRO = document.getElementById('p-cat-pro');
const P_MOYENNE_PRO = document.getElementById('p-moyenne-pro'); 
const P_NIV_PRO  = document.getElementById('p-niv-pro');
const P_EXPLIC_PRO = document.getElementById('p-explic-pro');

const P_CAT_PAR = document.getElementById('p-cat-parent');
const P_MOYENNE_PAR = document.getElementById('p-moyenne-parent'); 
const P_NIV_PAR  = document.getElementById('p-niv-parent');
const P_EXPLIC_PAR = document.getElementById('p-explic-parent');

const P_CAT_REL = document.getElementById('p-cat-rel');
const P_MOYENNE_REL = document.getElementById('p-moyenne-rel'); 
const P_NIV_REL  = document.getElementById('p-niv-rel');
const P_EXPLIC_REL = document.getElementById('p-explic-rel');

const P_CAT_PERS = document.getElementById('p-cat-perso');
const P_MOYENNE_PERS = document.getElementById('p-moyenne-perso'); 
const P_NIV_PERS  = document.getElementById('p-niv-perso');
const P_EXPLIC_PERS = document.getElementById('p-explic-perso');

const P_CAT_POST = document.getElementById('p-cat-post');
const P_MOYENNE_POST = document.getElementById('p-moyenne-post'); 
const P_NIV_POST  = document.getElementById('p-niv-post');
const P_EXPLIC_POST = document.getElementById('p-explic-post');

console.log(P_CAT_PRO, P_MOYENNE_PRO, P_NIV_PRO, P_EXPLIC_PRO, P_CAT_PRO, P_MOYENNE_PAR, P_NIV_PAR, P_EXPLIC_PAR, P_CAT_REL, P_MOYENNE_REL, P_NIV_REL, P_EXPLIC_REL, P_CAT_PERS, P_MOYENNE_PERS, P_NIV_PERS, P_EXPLIC_PERS, P_CAT_POST, P_MOYENNE_POST, P_NIV_POST, P_EXPLIC_POST);

//*--------------------------
//* Récupérer les réponses :
//*--------------------------

function recupReponses() {
    const RADIO_COCHES = document.querySelectorAll('input[type="radio"]:checked');

    const REPONSES = {}

    RADIO_COCHES.forEach(radio => {
      REPONSES[radio.name] = Number(radio.value);
    });

    console.log(REPONSES);

    calculerScores(REPONSES);
};


//*-----------------------
// * Calculer les scores :
//*-----------------------

function calculerScores(REPONSES) { 

    const CAT_SCORES = {};
  
  //*2) Parcours des questions :
    QUESTIONNAIRE.forEach(questionObj => {
      
      const VALEUR = REPONSES[questionObj.id]; 
  
      if (!VALEUR) { 
        return };
      
      questionObj.categories.forEach(cat => {
        if (!CAT_SCORES[cat]) {
          CAT_SCORES[cat] = {
            TOTAL: 0, 
            NB_QUESTION: 0 }; 
        } 

        CAT_SCORES[cat].TOTAL += VALEUR;
        CAT_SCORES[cat].NB_QUESTION += 1;
      });
    });

    const RESULTATS = {}; 
    
   
    Object.keys(CAT_SCORES).forEach(cat => {
    
   
      const TOTAL = CAT_SCORES[cat].TOTAL;
      const NB_QUESTION = CAT_SCORES[cat].NB_QUESTION;
      const MOYENNE = TOTAL / NB_QUESTION;

      let niveau = "";
      let explic = "";
      if (MOYENNE <= 2) {
        niveau = "Normal";
        explic = "Vos résultats semblent dans la norme. Toutefois, si vous ressentez malgré tout une fatigue excessive ou un sentiment de trop-plein, nous vous invitons à contacter un spécialiste près de chez vous, ou à appeler le numéro spécial de SOS Burn-out 081/39.72.00.";
      } else if (MOYENNE <= 3.5) {
        niveau = "À surveiller";
        explic = "Vous semblez présenter quelques symptomes de burn-out. Si votre fatigue persiste ou s'accentue, nous vous invitons à contacter un spécialiste près de chez vous, ou à appeler le numéro spécial de SOS Burn-out 081/39.72.00.";
      } else {
        niveau = "Préoccupant";
        explic = "Votre niveau de stress dans cette catégorie apparaît très élevé. Bien que ce test n'ait pas vocation de diagnostic médical, nous vous invitons à réagir le plus tôt possible en vous en ouvrant à vos proches ou à un spécialiste près de chez vous, ou appeler le numéro spécial de SOS Burn-out 081/39.72.00.";
      }

      RESULTATS[cat] = {
        MOYENNE: Number(MOYENNE.toFixed(2)),
        NIVEAU_INTERP : niveau,
        EXPLIC : explic
      };
    });

    console.log(RESULTATS);

 
    afficherResultats(RESULTATS);
};

//*-------------------------
//* Renvoyer les résultats :
//*-------------------------


function afficherResultats(RESULTATS) {

    P_CAT_PRO.textContent = "Professionnel"; 
    P_MOYENNE_PRO.textContent = `Moyenne : ${RESULTATS['professionnel'].MOYENNE}`;
    P_NIV_PRO.textContent = RESULTATS['professionnel'].NIVEAU_INTERP;
    P_EXPLIC_PRO.textContent = RESULTATS['professionnel'].EXPLIC;

    P_CAT_PAR.textContent = "Parental";
    P_MOYENNE_PAR.textContent = `Moyenne : ${RESULTATS['parental'].MOYENNE}`;
    P_NIV_PAR.textContent = RESULTATS['parental'].NIVEAU_INTERP;
    P_EXPLIC_PAR.textContent = RESULTATS['parental'].EXPLIC;

    P_CAT_REL.textContent = "Relationnel";
    P_MOYENNE_REL.textContent = `Moyenne : ${RESULTATS['relationnel'].MOYENNE}`;
    P_NIV_REL.textContent = RESULTATS['relationnel'].NIVEAU_INTERP;
    P_EXPLIC_REL.textContent = RESULTATS['relationnel'].EXPLIC;

    P_CAT_PERS.textContent = "Personnel";
    P_MOYENNE_PERS.textContent = `Moyenne : ${RESULTATS['personnel'].MOYENNE}`;
    P_NIV_PERS.textContent = RESULTATS['personnel'].NIVEAU_INTERP;
    P_EXPLIC_PERS.textContent = RESULTATS['personnel'].EXPLIC;

    P_CAT_POST.textContent = "Post-masking";
    P_MOYENNE_POST.textContent = `Moyenne : ${RESULTATS['postMasking'].MOYENNE}`;
    P_NIV_POST.textContent = RESULTATS['postMasking'].NIVEAU_INTERP;
    P_EXPLIC_POST.textContent = RESULTATS['postMasking'].EXPLIC;

    appliquerClasses(RESULTATS);
};


//*----------------------------
//* Fonction appliquerClasses :
//*----------------------------

function appliquerClasses(RESULTATS) {
  

  const CATEGORIES = ['pro', 'parent', 'rel', 'perso', 'post'];
  CATEGORIES.forEach(cat => {
    const P_MOYENNE_CAT = document.querySelector(`#p-moyenne-${cat}`);
    P_MOYENNE_CAT.classList.remove('moyenne-normal','moyenne-aSurveiller', 'moyenne-preoccupant');

    const P_NIV_CAT = document.querySelector(`#p-niv-${cat}`);
    P_NIV_CAT.classList.remove('niv-normal', 'niv-aSurveiller', 'niv-preoccupant');

  })


  const CLASSES_NIV_MOY = {
    "Normal" : {
      moyenne : 'moyenne-normal',
      niveau : 'niv-normal'
    },
    "À surveiller" : {
      moyenne : 'moyenne-aSurveiller',
      niveau : 'niv-aSurveiller'
    },
    "Préoccupant" : {
      moyenne : 'moyenne-preoccupant',
      niveau : 'niv-preoccupant'
    }
  }
  
  const NIV_PRO = RESULTATS['professionnel'].NIVEAU_INTERP;
  P_MOYENNE_PRO.classList.add( CLASSES_NIV_MOY[NIV_PRO].moyenne);
  P_NIV_PRO.classList.add(CLASSES_NIV_MOY[NIV_PRO].niveau); 

  const NIV_PAR = RESULTATS['parental'].NIVEAU_INTERP;
  P_MOYENNE_PAR.classList.add( CLASSES_NIV_MOY[NIV_PAR].moyenne);
  P_NIV_PAR.classList.add(CLASSES_NIV_MOY[NIV_PAR].niveau); 

  const NIV_REL = RESULTATS['relationnel'].NIVEAU_INTERP;
  P_MOYENNE_REL.classList.add( CLASSES_NIV_MOY[NIV_REL].moyenne);
  P_NIV_REL.classList.add(CLASSES_NIV_MOY[NIV_REL].niveau); 

  const NIV_PERS = RESULTATS['personnel'].NIVEAU_INTERP;
  P_MOYENNE_PERS.classList.add( CLASSES_NIV_MOY[NIV_PERS].moyenne);
  P_NIV_PERS.classList.add(CLASSES_NIV_MOY[NIV_PERS].niveau); 

  const NIV_POST = RESULTATS['personnel'].NIVEAU_INTERP;
  P_MOYENNE_POST.classList.add( CLASSES_NIV_MOY[NIV_POST].moyenne);
  P_NIV_POST.classList.add(CLASSES_NIV_MOY[NIV_POST].niveau);
  
};


//--------------------------------------------
//* Bouton RESULTATS : //--------------------------------------------

const BTN_RESULTS = document.getElementById('btn-resultats');
const SECTION_RESULTATS = document.getElementById('section-resultats');

BTN_RESULTS.addEventListener ('click', () => {
  if (validerQuestionnaire()) {
    recupReponses();
    SECTION_RESULTATS.classList.toggle('section-resultats-hide');
    SECTION_RESULTATS.classList.toggle('section-resultats-show');
  }
});
