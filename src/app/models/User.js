import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcryptjs';

class User extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password: Sequelize.VIRTUAL,
				passoword_hash: Sequelize.STRING
			},
			{
				sequelize
			}
		);

		this.addHook('beforeSave', async user => {
			if (user.password) {
				user.passoword_hash = await bcrypt.hash(user.password, 8);
			}
		});

		return this;
	}

	checkPassword(password) {
		return bcrypt.compare(password, this.passoword_hash);
	}
}

export default User;
