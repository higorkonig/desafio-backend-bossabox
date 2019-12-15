import * as Yup from 'yup';

import Tools from '../models/Tools';

class ToolsController {
	async index(req, res) {
		const { tag } = req.query;
		const user_id = req.userId;
		let tool;

		if (!tag) {
			tool = await Tools.findAll({
				where: {
					user_id: user_id
				},
				attributes: ['id', 'title', 'link', 'description', 'tags']
			});

			return res.status(200).json(tool);
		} else {
			tool = await Tools.findAll({
				where: {
					user_id: user_id
				},
				attributes: ['id', 'title', 'link', 'description', 'tags']
			});

			let toolJson = JSON.stringify(tool);
			toolJson = JSON.parse(toolJson);
			const result = [];
			for (let i = 0; i < toolJson.length; i++) {
				const certo = JSON.parse(toolJson[i].tags);
				certo.map(tools => {
					if (tools === tag) {
						result.push(toolJson[i]);
					}
				});
			}

			return res.status(200).json(result);
		}
	}

	async delete(req, res) {
		const { id } = req.params;
		await Tools.destroy({
      where: {
        id
      }
    })
		res.status(200).json({message: 'Deletado com sucesso'});
	}

	async store(req, res) {
		const schema = Yup.object().shape({
			title: Yup.string().required(),
			link: Yup.string().required(),
			description: Yup.string().required(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Falha na validação' });
		}

		req.body.user_id = req.userId;

		console.log(req.body.user_id);

		const { id, title, link, description, tags, user_id } = await Tools.create(
			req.body
		);

		return res.json({
			id,
			title,
			link,
			description,
			tags,
			user_id
		});
	}
}

export default new ToolsController();
