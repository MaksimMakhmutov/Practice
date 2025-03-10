import { getUser } from './get-user';
import { addUser } from './add-users';
import { sessions } from './sessions';

export const server = {
	async logout(session) {
		sessions.remove(session);
	},
	async authorize(authLogin, authPassword) {
		console.log(authLogin);
		const user = await getUser(authLogin);
		console.log('user', user);

		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null,
			};
		}
		if (authPassword !== user.password) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
	async register(regLogin, regPassword) {
		const existeduser = await getUser(regLogin);

		if (existeduser) {
			return {
				error: 'Такой логин уже занят',
				res: null,
			};
		}
		const user = await addUser(regLogin, regPassword);

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
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
};
