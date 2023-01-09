import User from '../models/User';

export const checkDuplicated = async (req, res, next) => {
    const { username, password } = req.body;
    console.log(req.body);
    if (!username || !password) return res.status(400).json({ status: 400, message: 'Hacen falta parámetros' });
	const user = await User.findOne({username: req.body.username});
	if (user) return res.status(400).json({message: "¡Este nombre de usuario ya está tomado!"});
	next();
}