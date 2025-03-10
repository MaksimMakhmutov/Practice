import { useEffect, useState } from 'react';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Navigate } from 'react-router-dom';
import { server } from '../../bff';
import { Button, Input, H2 } from '../../components';
import styled from 'styled-components';
import { setUser } from '../../actions';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants';

const authFromSchema = yup.object().shape({
	login: yup
		.string()
		.required('Ошибка! Заполните поле "login"')
		.matches(/^\w+$/, 'Ошибка! В поле "login" допускаются только буквы и цифры')
		.min(2, 'Ошибка! В поле "login" должно присутствовать более 2-х символов')
		.max(15, 'Ошибка! В поле "login" должно присутствовать не более 15-и символов'),
	password: yup
		.string()
		.required('Ошибка! Заполните поле "password"')
		.matches(
			/^[\w#%]+$/,
			'Ошибка! В поле "password" допускаются только буквы, цифры и знаки # и %',
		)
		.min(6, 'Ошибка! В поле "password" должно присутствовать более 6-х символов')
		.max(
			30,
			'Ошибка! В поле "password" должно присутствовать не более 30-и символов',
		),
});

const AuthorizationContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFromSchema),
	});

	const [serverError, setServerError] = useState(null);

	const dispatch = useDispatch();
	const store = useStore();
	const roleId = useSelector(selectUserRole);

	useEffect(() => {
		let currentWasLogout = store.getState().app.wasLogout;

		return store.subscribe(() => {
			let previousWasLogout = currentWasLogout;
			currentWasLogout = store.getState().app.wasLogout;

			if (currentWasLogout !== previousWasLogout) {
				reset();
			}
		});
	}, [reset, store]);

	const onSubmit = async ({ login, password }) => {
		const { error, res } = await server.authorize(login, password);
		if (error) {
			console.log(error);
			setServerError(`Ошибка запроса: ${error}`);
			return;
		}
		dispatch(setUser(res));
	};

	const formError = errors?.login?.message || errors?.password?.message;
	const errerMessage = formError || serverError;

	if (roleId !== ROLE.GUEST){
		return <Navigate to="/"></Navigate>

	}

	return (
		<div className={className}>
			<H2>Авторизация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин..."
					{...register('login', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="text"
					placeholder="Пароль..."
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
				<Button type="submit" disabled={!!formError}>
					Авторизация
				</Button>
				{errerMessage && <ErrorMessage>{errerMessage}</ErrorMessage>}
				<StyledLink to="/register">Зарегистрироваться</StyledLink>
			</form>
		</div>
	);
};
const StyledLink = styled(Link)`
	text-align: center;
	text-decoration: underline;
	margin: 20px 0;
	font-size: 18px;
`;

const ErrorMessage = styled.div`
	margin: 10px 0 0;
	padding: 10px;
	background-color: #fcadad;
	font-size: 18px;
`;

export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;

	& > form {
		display: flex;
		flex-direction: column;
	}
`;
