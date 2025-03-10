import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Authorization, Registration } from './pages';

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
	return (
		<AppColumn>
			<Header />
			<Content>
				<Routes>
					<Route path="/" element={<div>Главная</div>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post/:postId" element={<div>Статья</div>} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="*" element={<div>Erorr</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};
