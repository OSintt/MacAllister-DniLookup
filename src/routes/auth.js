import { Router } from 'express';
const router = Router();

import {
    signIn,
    signUp,
    getMe,
    ban,
    makeMod,
    editNick
} from '../controllers/auth';

import { checkCaptcha } from '../middleware/checkCaptcha';

import { checkDuplicated } from '../middleware/authVerify';
import { isMod, isAdmin, verifyToken } from '../middleware/authJwt';

router.put('/@me/edit-nick', [verifyToken], editNick);
router.put('/make-mod/:id', [verifyToken, isAdmin], makeMod);
router.put('/ban/:id', [verifyToken, isMod], ban);
router.get('/@me', [verifyToken], getMe);
router.post('/signin', signIn);
router.post('/signup', [checkDuplicated, isAdmin], signUp);

module.exports = router;