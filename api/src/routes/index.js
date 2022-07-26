const { Router } = require('express');

const user = require('./UserRoutes.js')
const beer = require('./BeerRoutes.js');
const seller = require('./SellerRoutes')
const purchases = require('./PurchasesRoutes');
const { getAllSellers } = require('../controllers/SellerController.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/user', user)
router.use('/beer', beer)
router.use('/seller', seller)
router.use('/purchases', purchases)
router.use('/',getAllSellers)

module.exports = router;
