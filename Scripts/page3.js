
//* -------------------------
//* 1. Sélection du formulaire
//* -------------------------
const FORM_PSYS = document.getElementById('form-psys');
const URL_PSYS = "../API/db.json";



//* -------------------------------------------------------------
//* 2. Fonction : charger la liste des psys depuis db.json via fetch
//* -------------------------------------------------------------
async function chargerPsys() {

    try {
        const REPONSE = await fetch(URL_PSYS);

     
        if (!REPONSE.ok) {
            throw new Error("Erreur HTTP : " + REPONSE.status);
        }

        const PSYS = await REPONSE.json();

        return PSYS;

    } catch (erreur) {
        console.error("❌ Impossible de charger le JSON :", erreur);
        return [];
    }
};


//* ---------------------------------------------
//* 3. Fonction : calcul de distance (Haversine)
//* ---------------------------------------------
function calculerDistance(lat1, lon1, lat2, lon2) {

    const R = 6371;

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}


//* ----------------------------------------------------
//* 4. Fonction : afficher la carte + marqueurs Leaflet
//* ----------------------------------------------------
function afficherCarte(latUser, lonUser, psys) {

    if (window.CARTE) {
        window.CARTE.remove();
    }

    window.CARTE = L.map("carte").setView([latUser, lonUser], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap"
    }).addTo(window.CARTE);

    L.marker([latUser, lonUser])
        .addTo(window.CARTE)
        .bindPopup("<b>Position estimée</b>");

    psys.forEach(psy => {

        L.marker([psy.latitude, psy.longitude])
            .addTo(window.CARTE)
            .bindPopup(`
                <b>${psy.nom ?? psy.name}</b><br>
                ${psy.adresse}<br>
                <i>${psy.specialites.join(", ")}</i><br>
                <b>Téléphone :</b> ${psy.telephone}
            `);
    });
}



//* ----------------------------------------------------
//* 5. EVENT : Soumission du formulaire de recherche
//* ----------------------------------------------------
FORM_PSYS.addEventListener('submit', async function(event) {

    event.preventDefault();

    // -------------------------
    // A. Lecture des inputs
    // -------------------------
    const CODE_POSTAL = document.getElementById('codePostal').value.trim();
    const SPECIALISATION = document.getElementById('specialisation').value;


    if (!CODE_POSTAL || !SPECIALISATION) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // -------------------------
    // B. Charger les psys
    // -------------------------
    const PSYS = await chargerPsys();

    if (PSYS.length === 0) {
        alert("Impossible de récupérer les thérapeutes.");
        return;
    }

    // -------------------------
    // C. Filtrer selon le code postal et la spécialisation
    // -------------------------
    const PSYS_FILTRÉS = PSYS.filter(psy =>
        String(psy.codePostal) === CODE_POSTAL &&
        psy.specialites.includes(SPECIALISATION)
    );

    if (PSYS_FILTRÉS.length === 0) {
        alert("Aucun thérapeute trouvé pour ces critères.");
        return;
    }


    // -------------------------
    // D. Position utilisateur ≈ position du premier psy trouvé
    // -------------------------
    const LAT_USER = PSYS_FILTRÉS[0].latitude;
    const LON_USER = PSYS_FILTRÉS[0].longitude;


    // -------------------------
    // E. Filtrer dans un rayon de 5 km
    // -------------------------
    const PSYS_DANS_RAYON = PSYS_FILTRÉS.filter(psy =>
        calculerDistance(LAT_USER, LON_USER, psy.latitude, psy.longitude) <= 10
    );


    // -------------------------
    // F. Afficher la carte
    // -------------------------
    afficherCarte(LAT_USER, LON_USER, PSYS_DANS_RAYON);

});
