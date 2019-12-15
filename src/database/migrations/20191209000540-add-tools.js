'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('tools', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false
			},
			link: {
				type: Sequelize.STRING,
				allowNull: false
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false
      },
      tags: {
				type: Sequelize.ARRAY(Sequelize.TEXT),
				allowNull: false
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			}
		});
	},

	down: (queryInterface) => {
		return queryInterface.dropTable('tools');
	}
};
