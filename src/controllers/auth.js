import User from '../models/User';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signUp = async (req, res) => {
	const { username, password } = req.body;

	const newUser = new User({
		username,
		password: await User.encryptPassword(password)
	})

	const save = await newUser.save();
	const token = jwt.sign({id: save._id}, process.env.TOKEN_SECRET, {
		expiresIn: 86400
	});
	res.status(201).json({status: 201, message: '¡Bienvenido a federales.info!', user: newUser, token: token});
}

export const signIn = async (req, res) => {
    const { username, password } = req.body;

	const foundUser = await User.findOne({username});
	if (!foundUser) return res.status(401).json({status: 401, message: "Su usuario no existe o su contraseña es incorrecta"});
	const matchPwd = await User.comparePwd(password, foundUser.password);
	if (!matchPwd) return res.status(401).json({status: 401, message: "Su usuario no existe o su contraseña es incorrecta"});
	const token = jwt.sign({id: foundUser._id}, process.env.TOKEN_SECRET, {
		expiresIn: 86400
	});
	res.status(201).json({status: 201, message: `¡Bienvenido de vuelta, ${foundUser.username}!`, user: foundUser, token: token});
}

export const getMe = async (req, res) => {
	const user = await User.findOne({id: req.userId}).populate('saved_dnis');
	res.status(200).json({status: 200, user});
}

export const ban = async (req, res) => {
	const user = await User.findOne({id: req.params.id});
	if (!user) return res.status(404).json({status: 404, message: 'Usuario no encontrado'});
	if (user.admin || user.mod) return res.status(403).json({status: 403, message: 'Missing permissions'});
	user.ban = !user.ban;
	await user.save;
	res.status(201).json({status: 201, message: `Usuario ${user.ban ? '' : 'des'}baneado con éxito`, user});
}

export const makeMod = async (req, res) => {
	const user = await User.findOne({id: req.params.id});
	if (!user) return res.status(404).json({status: 404, message: 'Usuario no encontrado'});
	if (user.admin) return res.status(403).json({status: 403, message: 'Missing permissions'});
	user.mod = !user.mod;
	await user.save();
}

export const editNick = async (req, res) => {
    let { new_nick } = req.body;
    if (!new_nick) return res.status(409).json({ status: 409, message: 'No puedes tener un nick tan corto' });
    if (typeof new_nick !== 'string') return res.status(400).json({ status: 400, message: 'Tipo de parámetro inválido' });
    new_nick = new_nick.trim();
    if (new_nick.length <= 1) return res.status(409).json({ status: 409, message: 'No puedes tener un nick tan corto' });
    if (new_nick.length > 32) return res.status(409).json({ status: 409, message: 'No puedes tener un nick tan largo' });

    const user = await User.findOneAndUpdate({ id: req.userId }, {
        username: new_nick
    });

    if (!user) return res.status(403).json({ status: 403, message: 'Necesitas estar registrado para realizar esta acción' });
    await user.save();
    return res.status(201).json({ status: 201, new_nick });
}


export default signIn;