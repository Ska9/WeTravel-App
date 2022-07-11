var express = require('express');
var router = express.Router();
const ctrlSuggestions = require('../controllers/suggestions');
const ctrlUsers = require('../controllers/user');
const ctrlProviders = require('../controllers/provider');
const ctrlEstablishment = require('../controllers/establishment');
const ctrlProduct = require('../controllers/services');
const ctrlDiscussion = require('../controllers/discussion');
const ctrlSearch = require('../controllers/search');
const ctrlAnnonce = require('../controllers/annonce');

/* GET home page. */
router.get('/suggestions', ctrlSuggestions.suggestionsRead);
router.get('/search', ctrlSearch.search);
router.post('/user', ctrlUsers.createUser);
router.get('/establishment', ctrlEstablishment.fetchEstablishment);
router.post('/establishment', ctrlEstablishment.createEstablishment);

router.get('/product', ctrlProduct.fetchProduct);
router.post('/product', ctrlProduct.createProduct);

router.get('/annonce', ctrlAnnonce.fetchAnnonce);
router.post('/annonce', ctrlAnnonce.createAnnonce);

router.post('/discussion', ctrlDiscussion.createDiscussion);
router.post('/provider', ctrlProviders.createProvider);
router.put('/provider', ctrlProviders.updateProvider);
router.post('/connect', ctrlUsers.loginUsers);


module.exports = router;
