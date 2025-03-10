import { genarateDate } from './generate-date';

export const addUser = (login, password) =>
	fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=uft-8',
		},
		body: JSON.stringify({
			login,
			password,
			registed_at: genarateDate(),
			role_id: 2,
		}),
	}).then((createdUser) => createdUser.json());
