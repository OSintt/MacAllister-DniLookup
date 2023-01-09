import { verify } from 'hcaptcha';

export const checkCaptcha = async (req, res, next) => {
    if (!req.body.token) return res.status(409).json({status: 400, message: 'Por favor, completa el captcha'});

    const key = process.env.CAPTCHA_KEY
    const token = req.body.token;

    try {
        const { success } = await verify(key, token);
        if (!success) return res.status(409).json({status: 409, message: 'Por favor, completa el captcha'});
        return next();
    } catch(e) {
        return res.status(502).json({status: 502, message: 'Error del captcha, inténtalo de nuevo'});
    }
}
