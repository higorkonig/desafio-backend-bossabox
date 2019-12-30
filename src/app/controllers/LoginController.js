import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

import User from '../models/User';

class LoginController { 
	async store(req, res) {
		const { email, password } = req.body;

		const user = await User.findOne({ where: { email } });

		if (!user || !(await user.checkPassword(password))) {
			return res.status(401).json({ error: 'Senha ou email incorretos!' });
    }
    
		const { id, name } = user;

		return res.json({
			user: {
				id,
				name,
				email
			},
			token: jwt.sign({ id }, authConfig.secret, {
				expiresIn: authConfig.expiresIn
			})
		});
	}
}

export default new LoginController();
