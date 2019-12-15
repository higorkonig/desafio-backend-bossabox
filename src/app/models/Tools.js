import Sequelize, { Model } from 'sequelize';

class Tools extends Model {
	static init(sequelize) {
		super.init(
			{
				title: Sequelize.STRING,
				link: Sequelize.STRING,
				description: Sequelize.STRING,
        tags: Sequelize.ABSTRACT,
        user_id: Sequelize.INTEGER,
			},
			{
				sequelize
			}
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'user_id', as: 'tools_user' });
	}
}

export default Tools;
