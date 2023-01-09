import { Router } from 'express';
import { getDni } from '../controllers/dnis';
import {
    verifyToken
} from '../middleware/authJwt';

const router = Router();

router.get('/search/:id/:sexo', [verifyToken], getDni);

module.exports = router;
