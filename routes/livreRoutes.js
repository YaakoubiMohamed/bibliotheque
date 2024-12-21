const express = require('express');
const router = express.Router();

const {
    AfficherLivresParAuteurId,
    AfficherLivrerParTitreOuDescrption
} = require('../controllers/LivreController');

router.get('/livres/:auteurID', AfficherLivresParAuteurId);
router.get('/livres/search', AfficherLivrerParTitreOuDescrption);

