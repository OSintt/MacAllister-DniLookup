import { Router } from 'express';
const router = Router();

router.use('/auth', require('./auth'));
router.use('/dni', require('./dni'));
module.exports = router;
