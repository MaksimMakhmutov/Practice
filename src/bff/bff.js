import { getUser } from './get-user';
import { addUser } from './add-users';
import { createSession } from 'react-router';

export const server = {
	async authorize(authLogin, authPassword) {
		const user = getUser(authLogin);

		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null,
			};
		}
		if (authPassword !== user.password) {
			return {
				error: 'Неверный пользователь',
				res: null,
			};
		}
		return {
			error: null,
			res: createSession(user.role_id),
		};
	},
	async register(regLogin, regPassword) {
		const user = getUser(regLogin);

		if (user) {
			return {
				error: 'Такой логин уже занят',
				res: null,
			};
		}
		await addUser(regLogin, regPassword);

		const session = {
			logout() {
				Object.keys(session).forEach((key) => {
					delete session[key];
				});
			},
			removeComment() {
				console.log('удаление комментария');
			},
		};
		return {
			error: null,
			res: createSession(user.role_id),
		};
	},
};
