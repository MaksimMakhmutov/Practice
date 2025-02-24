import { genarateDate } from "./generate-date";

export const addUser = (regLogin, regPassword) =>
	fetch('https://localhost.3005/users/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=uft-8',
		},
		body: JSON.stringify({
			login: regLogin,
			password: regPassword,
			registed_at: genarateDate(),
			role_id: 2,
		}),
	});
