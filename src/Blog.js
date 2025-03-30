import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Authorization, Registration, Users, Post, Main } from './pages';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { Modal } from './components/modal/modal';

const Content = styled.div`
	padding: 120px 0;
`;

// const H2 = styled.h2`
// 	text-align: center;
// `;

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-heigth: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

export const Blog = () => {
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);
		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);
	return (
		<AppColumn>
			<Header />
			<Content>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route
						path="/users"
						element={
							<div>
								<Users />
							</div>
						}
					/>
					<Route path="/post/:id/*" element={<div>Erorr</div>} />
					<Route path="/post/:id/edit" element={<Post />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/post" element={<Post />} />
					<Route path="*" element={<div>Erorr</div>} />
				</Routes>
			</Content>
			<Footer />
			<Modal />
		</AppColumn>
	);
};
